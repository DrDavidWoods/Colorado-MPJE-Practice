# Colorado MPJE Mastery v2 — Challenge Build

This version is intentionally harder than v1. It is built to test legal reasoning rather than simple recognition.

## What changed

- **200 active questions**
- Exact bank distribution matching the current MPJE blueprint:
  - Area 1 — Licensure / Personnel: **44 questions (22%)**
  - Area 2 — Pharmacist Practice: **66 questions (33%)**
  - Area 3 — Dispensing Requirements: **48 questions (24%)**
  - Area 4 — Pharmacy Operations: **42 questions (21%)**
- Full 120-question simulation draws:
  - **26 Area 1**
  - **40 Area 2**
  - **29 Area 3**
  - **25 Area 4**
- Simulation timer: **150 minutes**
- Harder scenario/application construction, including multi-rule controlled-substance timelines, personnel ratios, Colorado/federal interaction, operational deadlines, and compounding requirements
- Difficulty badge hidden in exam mode
- Answer choice content may randomize, but display labels always render in clean **A, B, C, D** order
- Internal option IDs are hidden from the learner
- Authority remains hidden until after answering in practice mode
- Exam mode does not label questions as “Colorado,” “federal,” or by topic

## Why v2 is harder

The current MPJE competency statements say the examination assesses application of knowledge, skills, and abilities to evaluate legal situations. They also state that the exam does not distinguish federal from state questions; candidates answer according to the prevailing law of the jurisdiction.

The challenge bank therefore emphasizes:
- multiple legal facts in one stem;
- independent clocks/limits (eg, prescription age + refill count + transfer history);
- distractors that would be correct under a slightly different fact pattern;
- role/scope questions that separate physical tasks from clinical judgment;
- operational questions that combine timing, records, facility, and accountability rules.

## Law verification

Verified through **2026-09-16** using current Colorado Board rules, 2026 Colorado pharmacy legislation, and current federal controlled-substance regulations linked inside the app.

## Important

This is a study tool, not an official NABP product and not legal advice. A high score is evidence of performance on this bank, not a guarantee of MPJE passage. Use the official Pre-MPJE as an external readiness check when appropriate.


## v2.1 cache fix

This build adds aggressive cache invalidation for GitHub Pages/PWA updates.

After deployment, the header should show:

**v2.1.0 • 200 questions loaded**

If an older browser session still shows v1/60 questions:
1. Reload the page once.
2. If necessary, close the tab and reopen it.
3. As a last resort, clear site data for the GitHub Pages site and reload.

The service worker now uses network-first loading for `index.html`, `app.js`, and `questions.js`, calls `skipWaiting()`, claims existing clients, and automatically reloads after the new worker takes control.
