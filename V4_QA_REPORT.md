# Colorado MPJE Mastery v4 — Adversarial QA Report

Verified through: **2026-09-16**

## Result
**PASS against the project's advanced-reasoning acceptance gates.**

This means the active bank passed the construction, coverage, source-version, duplicate, response-pattern, and anti-clue checks defined for this project. It does not reproduce NABP's proprietary psychometric calibration.

## Blueprint
- Questions: **120**
- Area 1 — Licensure / Personnel: **26**
- Area 2 — Pharmacist Practice: **40**
- Area 3 — Dispensing Requirements: **29**
- Area 4 — Pharmacy Operations: **25**
- Full simulation: **120 questions / 150 minutes**

## Difficulty
- Level 1: **13 (10.8%)**
- Level 2: **18 (15.0%)**
- Level 3: **31 (25.8%)**
- Level 4: **36 (30.0%)**
- Level 5: **22 (18.3%)**

## Formats
- Scenario/application: **97**
- Single-best-answer: **8**
- K-type: **8**
- Multiple-response: **7**

K-type key distribution: **{'opt4': 3, 'opt3': 2, 'opt2': 1, 'opt1': 1, 'opt5': 1}**

Multiple-response number-correct distribution: **{3: 2, 2: 3, 4: 2}**

## Coverage
All numbered pre-March-1-2027 NABP competency subdomains are represented by at least three tagged questions.

Counter({'2.1': 27, '1.2': 18, '4.2': 17, '1.1': 15, '3.1': 14, '2.2': 12, '3.4': 10, '4.7': 9, '3.2': 8, '2.5': 7, '2.4': 7, '4.1': 5, '3.3': 5, '4.4': 4, '4.3': 4, '4.6': 4, '2.3': 3, '3.8': 3, '4.5': 3, '3.5': 3, '3.6': 3, '3.7': 3})

## Concept mastery
- Concept families: **27**
- Minimum questions per family: **3**
- Families with fewer than three variants: **0**

## Anti-clue gates
- Single-answer items outside ±20% correct-answer/distractor mean length: **0**
- Strong absolute-word clue imbalance: **0**
- Near-duplicate stems at Jaccard ≥ 0.55: **0**
- Old Colorado Board rule-version links: **0**
- Known absurd-distractor phrase flags: **0**
- Artificial AUDIT-wrapper items: **0**

## Major corrections from v3
- K-type items no longer share one answer combination.
- Multiple-response items no longer share the same all-but-one pattern.
- PDMP/PMP content is mapped to Area 3.
- Returning/reusing drug content is mapped to Area 2.
- Area 3 includes restricted nonprescription pseudoephedrine/CMEA scenarios.
- Area 4 includes explicit ordering/acquisition and product-selection content.
- Delivery and central-fill coverage was expanded.
- Every mastery concept family contains at least three questions.
- Colorado Board rule links were normalized to rule version 11936.

## Limitation
The official MPJE uses proprietary item review and psychometric calibration. This project can enforce source, blueprint, distractor, and reasoning standards, but cannot establish the same statistical difficulty or discrimination values as NABP operational questions.
