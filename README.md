# Colorado MPJE Mastery

A mobile-first, offline-capable Colorado MPJE study app built around legal accuracy, difficult retrieval practice, and concept-level mastery.

## Current verified starter bank

- **60 active questions**
- Law verification date: **2026-09-16**
- Colorado Board Rules: 3 CCR 719-1
- 2026 Colorado Revised Statutes / 2026 enacted changes
- Federal controlled-substance rules in 21 CFR Part 1306
- MPJE exam-format reference from NABP

This is intentionally a **starter bank**, not a padded 300-question bank. The build specification explicitly prioritizes a smaller set of verified, difficult questions over a large bank of weak or uncertain questions.

## Features

- Mobile-first responsive layout
- Single-best-answer, select-all-that-apply, and scenario questions
- Colorado-only, federal-only, mixed, topic, weak-area, missed, bookmarked, and difficult modes
- Concept-level mastery scoring
- Confidence tracking (Guess / Unsure / Confident)
- Confidently-wrong answers prioritized
- Spaced review scheduling
- Local IndexedDB progress storage
- Offline service worker
- Authority links hidden until after answering
- Timed MPJE simulation
  - NABP's current MPJE format is 120 questions / 150 minutes
  - Until the verified bank reaches 120 unique active questions, simulation uses all verified questions with a proportionally scaled timer
  - The app automatically switches to 120 / 150 once the bank reaches 120 active questions

## GitHub Pages

1. Create or open your repository.
2. Upload **all files in this folder** to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. GitHub will provide the public URL after deployment.

## Important

This is a study aid, not legal advice. Pharmacy law changes. Before relying on a rule in practice, open the authority link shown after the question and verify the current source.
