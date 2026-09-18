const CACHE="co-mpje-mastery-v5.0.0";
const ASSETS=[
  "./",
  "./index.html",
  "./styles.css?v=5.0.0",
  "./app.js?v=5.0.0",
  "./questions.js?v=5.0.0",
  "./manifest.webmanifest?v=5.0.0"
];

self.addEventListener("install", event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);

  // Always prefer the network for application code and the question bank.
  if(url.pathname.endsWith("/questions.js") ||
     url.pathname.endsWith("/app.js") ||
     url.pathname.endsWith("/index.html") ||
     url.pathname.endsWith("/")){
    event.respondWith(
      fetch(event.request, {cache:"no-store"})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request, copy));
          return response;
        })
        .catch(()=>caches.match(event.request).then(r=>r || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>
      cached || fetch(event.request).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        return response;
      })
    )
  );
});
