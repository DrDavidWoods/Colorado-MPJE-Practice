# Version 6 validation

Checked September 19, 2026.

- 200 unique question IDs and unique stems; 80 new items.
- 64 Compounding questions: 34 foundation and 30 application items.
- Answer identifiers, keys, source links, explanations, and distractor-rationale presence validated throughout the bank. Each new item has a separate rationale for each distractor.
- Actual scoring function exercised against all 3,440 possible answer sets across the bank.
- Actual topic-selection function checked for all 31 topics at all three level settings: 93 combinations.
- 20 simulated selections each returned 120 unique items with area counts 26/40/29/25.
- App, question-bank, and service-worker JavaScript syntax checked.
- Versioned assets and cache updated to 6.0.0. Pre-answer authority guard preserved.

These checks validate data structure and selected application behavior; they do not establish psychometric quality or constitute an independent legal audit. No physical-device or browser rendering test was performed for this release. The existing responsive layout is retained; the added level selector uses a full-width control, 16px text, and a minimum 48px height. GitHub deployment remains the owner’s upload step.
