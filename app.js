
(() => {
  "use strict";
  const BANK = (window.QUESTION_BANK || []).filter(q => q.active);
  const META = window.APP_META || {};
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  const views = {
    home: $("#homeView"), quiz: $("#quizView"), stats: $("#statsView"), examResult: $("#examResultView")
  };

  let state = { progress:{}, history:[], settings:{} };
  let session = null;
  let current = null;
  let selected = new Set();
  let submitted = false;
  let confidence = null;
  let timerHandle = null;

  // ---------- IndexedDB ----------
  const DB_NAME = "ColoradoMPJEMasteryDB";
  const STORE = "kv";
  function openDB(){
    return new Promise((resolve,reject)=>{
      const req = indexedDB.open(DB_NAME,1);
      req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE); };
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    });
  }
  async function dbGet(key){
    try{ const db=await openDB(); return await new Promise((res,rej)=>{ const tx=db.transaction(STORE,"readonly"); const r=tx.objectStore(STORE).get(key); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }); }
    catch(e){ return null; }
  }
  async function dbSet(key,val){
    try{ const db=await openDB(); return await new Promise((res,rej)=>{ const tx=db.transaction(STORE,"readwrite"); tx.objectStore(STORE).put(val,key); tx.oncomplete=()=>res(); tx.onerror=()=>rej(tx.error); }); }
    catch(e){}
  }
  async function loadState(){
    const saved = await dbGet("state");
    if(saved) state = saved;
    state.progress ||= {}; state.history ||= []; state.settings ||= {};
  }
  async function saveState(){ await dbSet("state", state); }

  // ---------- Helpers ----------
  function showView(name){
    Object.values(views).forEach(v=>v.classList.remove("active"));
    views[name].classList.add("active");
    window.scrollTo({top:0,behavior:"instant"});
  }
  const shuffle = arr => {
    const a=[...arr];
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  };
  const today = () => new Date().toISOString().slice(0,10);
  const daysFromNow = d => { const x=new Date(); x.setDate(x.getDate()+d); return x.toISOString().slice(0,10); };
  const pct = (a,b) => b ? Math.round((a/b)*100) : 0;
  const qProgress = id => state.progress[id] || {attempts:0,correct:0,incorrect:0,streak:0,mastery:0,bookmarked:false};
  function conceptStats(){
    const map={};
    BANK.forEach(q=>{
      map[q.conceptId] ||= {conceptId:q.conceptId, topic:q.topic, attempts:0,correct:0,masteryVals:[], confidentWrong:0};
      const p=qProgress(q.id);
      map[q.conceptId].attempts += p.attempts||0;
      map[q.conceptId].correct += p.correct||0;
      if(p.attempts) map[q.conceptId].masteryVals.push(p.mastery||0);
      map[q.conceptId].confidentWrong += p.confidentWrong||0;
    });
    return Object.values(map).map(x=>({...x,accuracy:pct(x.correct,x.attempts),mastery:x.masteryVals.length?Math.round(x.masteryVals.reduce((a,b)=>a+b,0)/x.masteryVals.length):0}));
  }

  function updateHome(){
    $("#lawDate").textContent = `Source baseline ${META.lawVerifiedThrough || "—"}`;
    $("#bankCount").textContent = BANK.length;
    const bi=$("#buildInfo");
    if(bi) bi.textContent=`v${META.version || "?"} • ${BANK.length} questions loaded`;
    const due = BANK.filter(q=>{const p=qProgress(q.id); return p.attempts && (!p.nextReview || p.nextReview<=today());}).length;
    $("#dueCount").textContent = due;
    const attempted = BANK.filter(q=>qProgress(q.id).attempts);
    const m = attempted.length ? Math.round(attempted.reduce((s,q)=>s+(qProgress(q.id).mastery||0),0)/attempted.length) : 0;
    $("#masteryPct").textContent = `${m}%`;
  }

  function chooseQuestions(mode, topics=[]){
    let qs=[...BANK];
    if(mode==="colorado") qs=qs.filter(q=>q.jurisdiction==="Colorado");
    if(mode==="federal") qs=qs.filter(q=>q.jurisdiction==="Federal");
    if(mode==="mixed") qs=qs.filter(q=>q.jurisdiction==="Both" || q.topic==="Federal vs Colorado");
    if(mode==="topic") qs=qs.filter(q=>topics.includes(q.topic));
    if(mode==="missed") qs=qs.filter(q=>qProgress(q.id).incorrect>0);
    if(mode==="bookmarked") qs=qs.filter(q=>qProgress(q.id).bookmarked);
    if(mode==="difficult") qs=qs.filter(q=>q.difficulty>=4);
    if(mode==="weak"){
      const weakIds = new Set(conceptStats().filter(c=>c.attempts===0 || c.accuracy<75 || c.mastery<65 || c.confidentWrong>0).map(c=>c.conceptId));
      qs=qs.filter(q=>weakIds.has(q.conceptId));
    }
    // Prioritize due/missed/never-seen, then randomize within broad priority.
    qs=shuffle(qs).sort((a,b)=>{
      const pa=qProgress(a.id), pb=qProgress(b.id);
      const sa=(pa.attempts===0?3:0)+(pa.nextReview&&pa.nextReview<=today()?2:0)+(pa.incorrect>pa.correct?1:0);
      const sb=(pb.attempts===0?3:0)+(pb.nextReview&&pb.nextReview<=today()?2:0)+(pb.incorrect>pb.correct?1:0);
      return sb-sa;
    });
    return qs;
  }

  function modeName(mode){
    return ({
      comprehensive:"Comprehensive Practice",colorado:"Colorado Law",federal:"Federal Law",
      mixed:"Federal + Colorado",topic:"Topic Practice",weak:"Weak Areas",missed:"Missed Questions",
      bookmarked:"Bookmarked",difficult:"Difficult Questions",exam:"MPJE Simulation"
    })[mode] || "Practice";
  }

  function chooseWeightedExam(pool){
    // Current MPJE blueprint before March 1, 2027:
    // Area 1 22%, Area 2 33%, Area 3 24%, Area 4 21%.
    // For 120 items: 26 / 40 / 29 / 25 (closest whole-number representation).
    const quota = {1:26, 2:40, 3:29, 4:25};
    const chosen=[];
    Object.entries(quota).forEach(([area,count])=>{
      let candidates=shuffle(pool.filter(q=>String(q.competencyArea)===String(area)));
      // Prefer first-seen and due questions, then higher difficulty.
      candidates.sort((a,b)=>{
        const pa=qProgress(a.id), pb=qProgress(b.id);
        const sa=(pa.attempts===0?4:0)+(pa.nextReview&&pa.nextReview<=today()?2:0)+(a.difficulty||0);
        const sb=(pb.attempts===0?4:0)+(pb.nextReview&&pb.nextReview<=today()?2:0)+(b.difficulty||0);
        return sb-sa;
      });
      chosen.push(...candidates.slice(0,count));
    });
    return shuffle(chosen);
  }

  function startSession(mode, topics=[]){
    const pool=chooseQuestions(mode,topics);
    if(!pool.length){
      alert("No questions are available in that category yet.");
      return;
    }
    let qs=pool;
    let exam=false, minutes=null;
    if(mode==="exam"){
      exam=true;
      qs=chooseWeightedExam(pool);
      if(qs.length<120){
        alert("The verified bank does not yet contain enough questions in every blueprint area for a full 120-question simulation.");
        return;
      }
      minutes=150;
    }else{
      qs=pool.slice(0, Math.min(30,pool.length));
    }
    session={mode,topics,questions:qs,index:0,exam,minutes,answers:{},startedAt:Date.now(),expiresAt: exam?Date.now()+minutes*60000:null};
    $("#quizModeName").textContent = modeName(mode);
    $("#timer").hidden=!exam;
    if(exam) startTimer();
    showView("quiz");
    renderQuestion();
  }

  function startTimer(){
    clearInterval(timerHandle);
    const tick=()=>{
      const left=Math.max(0,session.expiresAt-Date.now());
      const sec=Math.floor(left/1000), m=Math.floor(sec/60), s=sec%60;
      $("#timer").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      if(left<=0){ clearInterval(timerHandle); finishExam(); }
    };
    tick(); timerHandle=setInterval(tick,1000);
  }

  function renderQuestion(){
    current=session.questions[session.index];
    selected=new Set(); submitted=false; confidence=null;
    $("#feedback").hidden=true; $("#preSubmitActions").hidden=false;
    $("#submitAnswer").disabled=true; $("#nextQuestion").disabled=true;
    $("#questionNumber").textContent=`Question ${session.index+1} of ${session.questions.length}`;
    $("#difficultyBadge").textContent=`Level ${current.difficulty}`;
    $("#difficultyBadge").hidden=true;
    $("#questionType").textContent = current.type==="multi" ? "Select all that apply" : current.type==="ktype" ? "K-type / combination" : current.type==="scenario" ? "Scenario / application" : "Single best answer";
    $("#questionStem").textContent=current.stem;
    $("#progressBar").style.width=`${((session.index)/session.questions.length)*100}%`;
    const p=qProgress(current.id); $("#bookmarkBtn").textContent=p.bookmarked?"★":"☆";
    $("#authorityBtn").hidden=true;

    const stored = session.answers[current.id];
    if(stored && session.exam){
      selected=new Set(stored.selected);
    }
    const randomized = current._renderAnswers || shuffle(current.answers);
    current._renderAnswers=randomized;
    current._displayLabels = {};
    const displayLetters=["A","B","C","D","E","F"];
    const wrap=$("#answers"); wrap.innerHTML="";
    randomized.forEach((a,idx)=>{
      const label=displayLetters[idx] || String(idx+1);
      current._displayLabels[a.id]=label;
      const btn=document.createElement("button"); btn.type="button"; btn.className="answer"; btn.dataset.id=a.id;
      btn.innerHTML=`<span class="letter">${label}</span><span>${escapeHtml(a.text)}</span>`;
      if(selected.has(a.id)) btn.classList.add("selected");
      btn.addEventListener("click",()=>toggleAnswer(a.id));
      wrap.appendChild(btn);
    });
    $("#submitAnswer").textContent = session.exam ? (stored?"Update answer":"Save answer") : "Submit answer";
    $("#submitAnswer").disabled=selected.size===0;
    if(session.exam){
      const nav=document.createElement("div");
    }
    window.scrollTo({top:0,behavior:"instant"});
  }

  function escapeHtml(s){ return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }

  function toggleAnswer(id){
    if(submitted && !session.exam) return;
    if(current.type==="multi"){
      selected.has(id)?selected.delete(id):selected.add(id);
    }else{
      selected=new Set([id]);
    }
    $$(".answer").forEach(b=>b.classList.toggle("selected",selected.has(b.dataset.id)));
    $("#submitAnswer").disabled=selected.size===0;
  }

  function isCorrect(q, sel){
    const a=[...sel].sort().join(","), b=[...q.correctAnswers].sort().join(",");
    return a===b;
  }

  $("#submitAnswer").addEventListener("click",()=>{
    if(!selected.size) return;
    if(session.exam){
      session.answers[current.id]={selected:[...selected]};
      if(session.index<session.questions.length-1){ session.index++; renderQuestion(); }
      else finishExam();
      return;
    }
    submitted=true;
    $("#authorityBtn").hidden=false;
    const correct=isCorrect(current,selected);
    session.answers[current.id]={selected:[...selected],correct};
    $("#preSubmitActions").hidden=true;
    $("#feedback").hidden=false;
    $("#resultBanner").textContent=correct?"Correct":"Incorrect";
    $("#resultBanner").className=`result-banner ${correct?"good":"bad"}`;
    $("#explanation").textContent=current.explanation;
    $("#ruleToRemember").textContent=current.ruleToRemember;

    $$(".answer").forEach(b=>{
      const id=b.dataset.id;
      b.disabled=true;
      if(current.correctAnswers.includes(id)) b.classList.add("correct");
      else if(selected.has(id)) b.classList.add("wrong");
    });

    const analysis=$("#answerAnalysis"); analysis.innerHTML="";
    (current._renderAnswers || current.answers).forEach(a=>{
      const div=document.createElement("div"); div.className="analysis-item";
      const label=(current._displayLabels && current._displayLabels[a.id]) || "?";
      if(current.correctAnswers.includes(a.id)){
        div.innerHTML=`<b>${label} — Correct.</b> ${escapeHtml(current.explanation)}`;
      }else{
        div.innerHTML=`<b>${label}.</b> ${escapeHtml(current.distractorExplanations[a.id] || "This option does not satisfy the governing rule.")}`;
      }
      analysis.appendChild(div);
    });
    $("#progressBar").style.width=`${((session.index+1)/session.questions.length)*100}%`;
    $("#nextQuestion").textContent=session.index===session.questions.length-1?"Finish session":"Next question";
    setTimeout(()=>$("#feedback").scrollIntoView({behavior:"smooth",block:"start"}),50);
  });

  $$(".confidence-row button").forEach(btn=>btn.addEventListener("click",()=>{
    confidence=btn.dataset.confidence;
    $$(".confidence-row button").forEach(x=>x.classList.toggle("active",x===btn));
    $("#nextQuestion").disabled=false;
  }));

  async function recordPracticeAnswer(q, ans, conf){
    const p=qProgress(q.id);
    const wasFirst=p.attempts===0;
    p.attempts=(p.attempts||0)+1;
    p.correct=(p.correct||0)+(ans.correct?1:0);
    p.incorrect=(p.incorrect||0)+(ans.correct?0:1);
    if(wasFirst) p.firstAttemptCorrect=!!ans.correct;
    p.lastAnswered=today();
    p.lastConfidence=conf;
    if(!ans.correct && conf==="confident") p.confidentWrong=(p.confidentWrong||0)+1;

    let delta=0, interval=1;
    if(ans.correct){
      p.streak=(p.streak||0)+1;
      delta=conf==="confident"?18:conf==="unsure"?11:6;
      interval=conf==="confident"?([2,7,21,45][Math.min(p.streak-1,3)]):conf==="unsure"?3:1;
    }else{
      p.streak=0;
      delta=conf==="confident"?-18:conf==="unsure"?-12:-8;
      interval=conf==="confident"?1:2;
    }
    p.mastery=Math.max(0,Math.min(100,(p.mastery||0)+delta));
    p.nextReview=daysFromNow(interval);
    state.progress[q.id]=p;
    state.history.push({qid:q.id,conceptId:q.conceptId,topic:q.topic,date:new Date().toISOString(),correct:ans.correct,confidence:conf,difficulty:q.difficulty});
    if(state.history.length>1500) state.history=state.history.slice(-1500);
    await saveState();
  }

  $("#nextQuestion").addEventListener("click",async()=>{
    if(!confidence) return;
    await recordPracticeAnswer(current,session.answers[current.id],confidence);
    $$(".confidence-row button").forEach(x=>x.classList.remove("active"));
    if(session.index>=session.questions.length-1){
      clearInterval(timerHandle); updateHome(); showView("home"); return;
    }
    session.index++; renderQuestion();
  });

  $("#bookmarkBtn").addEventListener("click",async()=>{
    const p=qProgress(current.id); p.bookmarked=!p.bookmarked; state.progress[current.id]=p; await saveState();
    $("#bookmarkBtn").textContent=p.bookmarked?"★":"☆"; updateHome();
  });

  $("#authorityBtn").addEventListener("click",()=>{
    if(!submitted || session?.exam) return;
    const list=$("#authorityList"); list.innerHTML="";
    current.authority.forEach(a=>{
      const d=document.createElement("div"); d.className="authority-item";
      d.innerHTML=`<a href="${a.url}" target="_blank" rel="noopener">${escapeHtml(a.label)}</a><small>${escapeHtml(a.citation||"")}</small><small>Question last verified: ${escapeHtml(current.lastVerified)}</small>`;
      list.appendChild(d);
    });
    $("#authorityDialog").showModal();
  });

  async function finishExam(){
    clearInterval(timerHandle);
    if(!session || !session.exam) return;
    let correct=0, answered=0;
    const topic={};
    session.questions.forEach(q=>{
      const a=session.answers[q.id];
      const c=a?isCorrect(q,new Set(a.selected)):false;
      if(a) answered++;
      if(c) correct++;
      topic[q.topic] ||= {correct:0,total:0}; topic[q.topic].total++; if(c) topic[q.topic].correct++;
      // Record exam attempts without confidence inflation.
      const p=qProgress(q.id); p.attempts=(p.attempts||0)+1; p.correct=(p.correct||0)+(c?1:0); p.incorrect=(p.incorrect||0)+(c?0:1);
      if(p.attempts===1) p.firstAttemptCorrect=c;
      p.lastAnswered=today(); p.lastConfidence="exam"; p.streak=c?(p.streak||0)+1:0;
      p.mastery=Math.max(0,Math.min(100,(p.mastery||0)+(c?8:-10))); p.nextReview=daysFromNow(c?7:1); state.progress[q.id]=p;
      state.history.push({qid:q.id,conceptId:q.conceptId,topic:q.topic,date:new Date().toISOString(),correct:c,confidence:"exam",difficulty:q.difficulty,exam:true});
    });
    await saveState(); updateHome();
    $("#examSummary").innerHTML=`
      <div class="stat-card"><span>Accuracy</span><strong>${pct(correct,session.questions.length)}%</strong></div>
      <div class="stat-card"><span>Correct</span><strong>${correct}/${session.questions.length}</strong></div>
      <div class="stat-card"><span>Answered</span><strong>${answered}/${session.questions.length}</strong></div>`;
    const breakdown=$("#examBreakdown"); breakdown.innerHTML="<h3>Blueprint-area diagnostic</h3>";
    const areaStats={};
    session.questions.forEach(q=>{
      const key=q.competencyAreaName || `Area ${q.competencyArea}`;
      areaStats[key] ||= {correct:0,total:0};
      const a=session.answers[q.id];
      const c=a?isCorrect(q,new Set(a.selected)):false;
      areaStats[key].total++; if(c) areaStats[key].correct++;
    });
    const areaTable=document.createElement("table"); areaTable.className="stats-table";
    areaTable.innerHTML="<thead><tr><th>Competency area</th><th>Accuracy</th></tr></thead><tbody>"+
      Object.entries(areaStats).map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td>${pct(v.correct,v.total)}%</td></tr>`).join("")+"</tbody>";
    breakdown.appendChild(areaTable);
    const th=document.createElement("h3"); th.textContent="Topic diagnostic"; th.style.marginTop="22px"; breakdown.appendChild(th);
    const table=document.createElement("table"); table.className="stats-table";
    table.innerHTML="<thead><tr><th>Topic</th><th>Accuracy</th></tr></thead><tbody>"+
      Object.entries(topic).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td>${pct(v.correct,v.total)}%</td></tr>`).join("")+"</tbody>";
    breakdown.appendChild(table);
    const note=document.createElement("p"); note.className="muted";
    note.textContent = session.questions.length<120
      ? `Starter-bank simulation used ${session.questions.length} verified questions. The app automatically switches to the official 120-question / 150-minute format once the active verified bank reaches at least 120 unique questions.`
      : "Simulation used 120 questions and a 150-minute timer.";
    breakdown.appendChild(note);
    showView("examResult");
  }

  // ---------- Stats ----------
  function renderStats(){
    const hist=state.history||[];
    const correct=hist.filter(x=>x.correct).length;
    const firstQs=BANK.filter(q=>qProgress(q.id).attempts);
    const firstCorrect=firstQs.filter(q=>qProgress(q.id).firstAttemptCorrect).length;
    const confWrong=Object.values(state.progress).reduce((s,p)=>s+(p.confidentWrong||0),0);
    $("#statsSummary").innerHTML=`
      <div class="stat-card"><span>Overall accuracy</span><strong>${pct(correct,hist.length)}%</strong></div>
      <div class="stat-card"><span>First-attempt</span><strong>${pct(firstCorrect,firstQs.length)}%</strong></div>
      <div class="stat-card"><span>Confidently wrong</span><strong>${confWrong}</strong></div>`;

    const by={};
    BANK.forEach(q=>{by[q.topic] ||= {correct:0,total:0}; const p=qProgress(q.id); by[q.topic].correct+=p.correct||0; by[q.topic].total+=p.attempts||0;});
    $("#topicStats").innerHTML=`<table class="stats-table"><thead><tr><th>Topic</th><th>Accuracy</th></tr></thead><tbody>${
      Object.entries(by).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`<tr><td>${escapeHtml(k)}<div class="bar"><i style="width:${pct(v.correct,v.total)}%"></i></div></td><td>${v.total?pct(v.correct,v.total)+"%":"—"}</td></tr>`).join("")
    }</tbody></table>`;

    const weak=conceptStats().filter(c=>c.attempts>0).sort((a,b)=>(a.mastery-b.mastery)||(a.accuracy-b.accuracy)).slice(0,12);
    $("#weakConcepts").innerHTML=weak.length?weak.map(c=>`<div class="weak-row"><b>${escapeHtml(c.topic)} · ${escapeHtml(c.conceptId)}</b><span>${c.accuracy}% accuracy · ${c.mastery}% mastery${c.confidentWrong?` · ${c.confidentWrong} confidently wrong`:""}</span></div>`).join(""):`<p class="muted">Complete some practice questions to identify weak concepts.</p>`;
  }

  // ---------- Topics ----------
  function buildTopicDialog(){
    const topics=[...new Set(BANK.map(q=>q.topic))].sort();
    $("#topicOptions").innerHTML=topics.map(t=>`<label class="topic-check"><input type="checkbox" value="${escapeHtml(t)}"> <span>${escapeHtml(t)}</span></label>`).join("");
  }
  $("#startTopics").addEventListener("click",(e)=>{
    const topics=$$("#topicOptions input:checked").map(x=>x.value);
    if(!topics.length){ e.preventDefault(); alert("Choose at least one topic."); return; }
    setTimeout(()=>startSession("topic",topics),0);
  });

  // ---------- Navigation ----------
  $$(".mode-card").forEach(b=>b.addEventListener("click",()=>{
    const m=b.dataset.mode;
    if(m==="topic") $("#topicDialog").showModal(); else startSession(m);
  }));
  $("#homeBtn").addEventListener("click",()=>{ if(views.quiz.classList.contains("active")) $("#confirmExitDialog").showModal(); else {updateHome();showView("home");} });
  $("#exitQuiz").addEventListener("click",()=>$("#confirmExitDialog").showModal());
  $("#confirmExit").addEventListener("click",()=>{clearInterval(timerHandle); session=null; updateHome(); showView("home");});
  $("#statsBtn").addEventListener("click",()=>{renderStats();showView("stats");});
  $("#statsBack").addEventListener("click",()=>{updateHome();showView("home");});
  $("#examHome").addEventListener("click",()=>{session=null;updateHome();showView("home");});
  $("#resetProgress").addEventListener("click",async()=>{
    if(confirm("Reset all local study history, mastery data, and bookmarks?")){
      state={progress:{},history:[],settings:{}}; await saveState(); renderStats(); updateHome();
    }
  });

  // ---------- Init ----------
  async function init(){
    await loadState(); buildTopicDialog(); updateHome();
    if("serviceWorker" in navigator){
      try{
        const reg=await navigator.serviceWorker.register("./service-worker.js?v=5.0.0");
        await reg.update();
        let refreshing=false;
        navigator.serviceWorker.addEventListener("controllerchange",()=>{
          if(refreshing) return;
          refreshing=true;
          location.reload();
        });
      }catch(e){}
    }
  }
  init();
})();
