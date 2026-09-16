window.APP_META = {
  "title": "Colorado MPJE Mastery v2",
  "version": "2.0.0",
  "lawVerifiedThrough": "2026-09-16",
  "questionCount": 200,
  "officialExam": {
    "questions": 120,
    "minutes": 150,
    "note": "NABP states the MPJE is a 2.5-hour, 120-question adaptive exam."
  },
  "disclaimer": "Study aid only. Always verify law against current primary authority before relying on it in practice.",
  "blueprint": {
    "1": {
      "name": "Licensure / Personnel",
      "weight": 22,
      "bankCount": 44
    },
    "2": {
      "name": "Pharmacist Practice",
      "weight": 33,
      "bankCount": 66
    },
    "3": {
      "name": "Dispensing Requirements",
      "weight": 24,
      "bankCount": 48
    },
    "4": {
      "name": "Pharmacy Operations",
      "weight": 21,
      "bankCount": 42
    }
  },
  "examSelection": {
    "1": 26,
    "2": 40,
    "3": 29,
    "4": 25
  },
  "difficultyNote": "Challenge bank emphasizes multi-step scenario/application items; exam mode hides jurisdiction and topic cues."
};

window.QUESTION_BANK = [
  {
    "id": "CO-COUNSEL-01",
    "conceptId": "co-counsel-new",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 3,
    "type": "single",
    "stem": "A patient is picking up a medication that represents new medication therapy. The patient has not declined counseling. Which statement best reflects the Colorado pharmacist's legal obligation?",
    "answers": [
      {
        "id": "opt1",
        "text": "Counseling is required only if the patient asks a drug-information question."
      },
      {
        "id": "opt2",
        "text": "The pharmacist must provide patient counseling on the new medication therapy."
      },
      {
        "id": "opt3",
        "text": "Counseling may be delegated to any trained pharmacy technician."
      },
      {
        "id": "opt4",
        "text": "Written manufacturer information alone always satisfies the counseling requirement."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado requires pharmacist counseling on new medication therapy, subject to statutory exceptions. The obligation is not triggered only by a patient question.",
    "distractorExplanations": {
      "opt1": "Colorado imposes an affirmative counseling duty for new medication therapy.",
      "opt3": "A technician cannot replace the pharmacist for the pharmacist counseling duty.",
      "opt4": "Written material is not automatically a universal substitute for pharmacist counseling."
    },
    "ruleToRemember": "New medication therapy triggers pharmacist counseling unless an applicable exception or patient refusal applies.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-counsel-new",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-COUNSEL-02",
    "conceptId": "co-counsel-refusal",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A patient clearly declines counseling for a new prescription. What must the pharmacy do with the refusal record under Colorado Board rules?",
    "answers": [
      {
        "id": "opt1",
        "text": "Keep it for at least 6 months."
      },
      {
        "id": "opt2",
        "text": "Keep it for at least 1 year."
      },
      {
        "id": "opt3",
        "text": "Keep it for at least 2 years."
      },
      {
        "id": "opt4",
        "text": "No record is required if the patient verbally refuses."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "A patient's refusal must be clearly documented in the corresponding record and remain readily retrievable for at least two years following the refusal.",
    "distractorExplanations": {
      "opt1": "Six months is shorter than the Board-rule minimum.",
      "opt2": "One year is shorter than the Board-rule minimum.",
      "opt4": "A refusal must be documented."
    },
    "ruleToRemember": "Document a counseling refusal and retain it in a readily retrievable form for at least 2 years.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-counsel-refusal",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-COUNSEL-03",
    "conceptId": "co-counsel-language",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A pharmacist cannot counsel a patient orally because of a language barrier. Which response most closely follows Colorado law?",
    "answers": [
      {
        "id": "opt1",
        "text": "Skip counseling if the prescription label is printed in English."
      },
      {
        "id": "opt2",
        "text": "Use alternative means necessary to assure the patient is properly counseled in a way the patient understands."
      },
      {
        "id": "opt3",
        "text": "Ask a technician to decide whether counseling is necessary."
      },
      {
        "id": "opt4",
        "text": "Dispense only after the prescriber personally counsels the patient."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado requires the pharmacist to use alternative means when oral counseling cannot be provided because of a language barrier.",
    "distractorExplanations": {
      "opt1": "The language barrier does not erase the counseling duty.",
      "opt3": "The pharmacist remains responsible for counseling.",
      "opt4": "The rule does not require transfer of the duty to the prescriber."
    },
    "ruleToRemember": "A language barrier changes the method, not the duty, of required pharmacist counseling.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-counsel-language",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-ORDER-01",
    "conceptId": "co-oral-order",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "type": "single",
    "stem": "In a Colorado community pharmacy, who may receive and reduce to writing an oral prescription order, apart from the chart-order exception?",
    "answers": [
      {
        "id": "opt1",
        "text": "A pharmacist or pharmacy intern"
      },
      {
        "id": "opt2",
        "text": "A pharmacist, intern, or certified technician"
      },
      {
        "id": "opt3",
        "text": "Only the pharmacist manager"
      },
      {
        "id": "opt4",
        "text": "Any employee trained on prescription intake"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Board Rule 2.00.10 provides that only a pharmacist or intern may receive and reduce to writing an oral order, apart from the chart-order exception.",
    "distractorExplanations": {
      "opt2": "Certification as a technician does not add authority to receive and reduce an oral order.",
      "opt3": "The authority is not limited to the pharmacist manager.",
      "opt4": "General training does not create legal authority."
    },
    "ruleToRemember": "Colorado oral orders: pharmacist or intern, except the specified chart-order exception.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-oral-order",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-ORDER-02",
    "conceptId": "co-oral-order",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A certified pharmacy technician answers a prescriber's telephone call and the prescriber dictates a new outpatient prescription. No chart-order exception applies. Which action is legally appropriate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The technician records it because certification permits oral-order receipt."
      },
      {
        "id": "opt2",
        "text": "The technician records it if a pharmacist later performs final verification."
      },
      {
        "id": "opt3",
        "text": "The call must be handled by a pharmacist or pharmacy intern for receipt and reduction to writing."
      },
      {
        "id": "opt4",
        "text": "The technician may receive it only if it is noncontrolled."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Colorado does not authorize a pharmacy technician to receive and reduce a new oral order to writing under the general rule. A pharmacist or intern must do so.",
    "distractorExplanations": {
      "opt1": "Technician certification does not confer this authority.",
      "opt2": "Later pharmacist verification does not cure unauthorized receipt of the oral order.",
      "opt4": "The rule is not limited to controlled substances."
    },
    "ruleToRemember": "Final verification does not expand who may legally receive an oral order.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-oral-order",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-REFILLREC-01",
    "conceptId": "co-refill-record",
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 3,
    "type": "single",
    "stem": "Unless a statute requires longer retention, Colorado refill transaction information under Rule 2.01.30 must be maintained and available for inspection for how long from the date of a transaction relating to the order?",
    "answers": [
      {
        "id": "opt1",
        "text": "1 year"
      },
      {
        "id": "opt2",
        "text": "2 years"
      },
      {
        "id": "opt3",
        "text": "3 years"
      },
      {
        "id": "opt4",
        "text": "5 years"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 2.01.30 specifies a two-year period from the date of any transaction relating to the order unless otherwise required by statute.",
    "distractorExplanations": {
      "opt1": "The rule specifies longer than one year.",
      "opt3": "Three years is used for some other pharmacy records, such as vaccine-administration records.",
      "opt4": "Five years is not the default period in Rule 2.01.30."
    },
    "ruleToRemember": "Colorado refill transaction records: generally 2 years unless another law requires longer.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-refill-record",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-COPY-01",
    "conceptId": "co-reference-copy",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "type": "single",
    "stem": "A patient asks a Colorado pharmacist for a written copy of a prescription for personal records. Which statement is correct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The copy may include refill authority if the patient requests it."
      },
      {
        "id": "opt2",
        "text": "The copy must be marked 'COPY FOR REFERENCE ONLY,' and refill authority is not included."
      },
      {
        "id": "opt3",
        "text": "A written copy is prohibited unless the prescriber approves it."
      },
      {
        "id": "opt4",
        "text": "The copy becomes a valid prescription at another pharmacy if signed by the pharmacist."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "A pharmacist may issue a written copy conspicuously marked 'COPY FOR REFERENCE ONLY.' No information regarding authority to refill is to be issued in that written copy.",
    "distractorExplanations": {
      "opt1": "The Board rule specifically excludes refill-authority information from the written copy.",
      "opt3": "The rule permits the pharmacist to issue the reference copy.",
      "opt4": "The copy is informational; it is not itself a valid prescription order for dispensing elsewhere."
    },
    "ruleToRemember": "A Colorado prescription copy is for reference only and does not carry refill authority.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-reference-copy",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-XFER-01",
    "conceptId": "co-transfer-noncontrol",
    "jurisdiction": "Colorado",
    "topic": "Prescription Transfers",
    "subtopic": "Prescription Transfers",
    "difficulty": 3,
    "type": "single",
    "stem": "Which Colorado pharmacy personnel may orally transfer prescription-order information for a noncontrolled substance for dispensing at another prescription drug outlet?",
    "answers": [
      {
        "id": "opt1",
        "text": "Only pharmacists"
      },
      {
        "id": "opt2",
        "text": "Pharmacists and interns only"
      },
      {
        "id": "opt3",
        "text": "Pharmacists, interns, or pharmacy technicians"
      },
      {
        "id": "opt4",
        "text": "Only pharmacists and certified pharmacy technicians"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Colorado Rule 2.01.50 permits a pharmacist, pharmacy intern, or pharmacy technician to orally transfer noncontrolled prescription information.",
    "distractorExplanations": {
      "opt1": "Colorado permits more than pharmacists for noncontrolled transfers.",
      "opt2": "Technicians are also included.",
      "opt4": "Interns are also included."
    },
    "ruleToRemember": "Do not import the controlled-substance transfer personnel rule into noncontrolled transfers.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-transfer-noncontrol",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-XFER-02",
    "conceptId": "co-transfer-einitial",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A patient asks Pharmacy A to transfer an unfilled electronic Schedule II prescription to Pharmacy B for initial dispensing in Colorado. Which arrangement satisfies the Colorado rule described for this transfer?",
    "answers": [
      {
        "id": "opt1",
        "text": "A certified technician at A sends a PDF to a pharmacist at B."
      },
      {
        "id": "opt2",
        "text": "Two licensed pharmacists communicate the transfer; the prescription stays electronic and is not altered."
      },
      {
        "id": "opt3",
        "text": "A pharmacist prints the prescription, marks it void, and faxes it to B."
      },
      {
        "id": "opt4",
        "text": "A pharmacy intern at A telephones the Schedule II prescription information to B."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado permits a one-time transfer of an electronic Schedule II-V controlled-substance prescription for initial dispensing when the transfer information is communicated between two licensed pharmacists, remains electronic, and is not altered.",
    "distractorExplanations": {
      "opt1": "The rule requires communication between two licensed pharmacists and preservation of electronic form.",
      "opt3": "Printing/faxing defeats the requirement that the transferred prescription remain electronic.",
      "opt4": "The initial electronic controlled-substance transfer rule specifies two licensed pharmacists."
    },
    "ruleToRemember": "Initial EPCS transfer in Colorado: one time, pharmacist-to-pharmacist, still electronic, no alteration.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-transfer-einitial",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-XFER-03",
    "conceptId": "co-transfer-einitial",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "type": "multi",
    "stem": "For a one-time initial-dispensing transfer of an electronic Schedule II-V prescription in Colorado, which conditions are required? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "The transfer information is communicated between two licensed pharmacists."
      },
      {
        "id": "opt2",
        "text": "The prescription remains in electronic form."
      },
      {
        "id": "opt3",
        "text": "The prescription information is not altered during transmission."
      },
      {
        "id": "opt4",
        "text": "The receiving pharmacy must assign the same prescription number as the sending pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3"
    ],
    "explanation": "Colorado's rule identifies pharmacist-to-pharmacist communication, continued electronic form, and no alteration as conditions. It does not state that the receiving pharmacy must preserve the sending pharmacy's prescription number.",
    "distractorExplanations": {
      "opt4": "The cited rule does not make preservation of the sending pharmacy's prescription number a condition of this initial transfer."
    },
    "ruleToRemember": "Know the three transfer conditions; do not add operational details that the rule does not require.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-transfer-einitial",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-XFER-04",
    "conceptId": "co-transfer-c345-refill",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "type": "single",
    "stem": "Two Colorado pharmacies do not share a real-time online prescription database. A Schedule IV prescription has valid refills remaining. How many times may the original prescription information generally be transferred for refill dispensing?",
    "answers": [
      {
        "id": "opt1",
        "text": "It may not be transferred."
      },
      {
        "id": "opt2",
        "text": "One time."
      },
      {
        "id": "opt3",
        "text": "Up to two times."
      },
      {
        "id": "opt4",
        "text": "As often as refills remain."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "For Schedule III-V refill transfers, the general rule is a one-time transfer. Pharmacies sharing a real-time online database have a separate rule allowing transfer up to the legal/prescriber limit.",
    "distractorExplanations": {
      "opt1": "A refill transfer is permissible.",
      "opt3": "The general rule is not two transfers.",
      "opt4": "Unlimited movement is not the general rule when the pharmacies do not share the qualifying database."
    },
    "ruleToRemember": "CIII-V refill transfer: one time unless the qualifying shared real-time database rule applies.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-transfer-c345-refill",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-XFER-05",
    "conceptId": "co-transfer-c345-refill",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Pharmacies A and B electronically share the same real-time online database. A Schedule III prescription has lawful refills remaining. Which statement best describes the transfer limitation for refill dispensing?",
    "answers": [
      {
        "id": "opt1",
        "text": "The prescription can never be transferred because it is controlled."
      },
      {
        "id": "opt2",
        "text": "The transfer is limited to one time even with the shared database."
      },
      {
        "id": "opt3",
        "text": "The pharmacies may transfer up to the maximum refills permitted by law and the prescriber's authorization."
      },
      {
        "id": "opt4",
        "text": "The prescription may be transferred without regard to federal refill limits."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "The real-time shared-database exception permits transfers up to the maximum refills permitted by law and the prescriber's authorization.",
    "distractorExplanations": {
      "opt1": "CIII-V refill transfers are permitted under conditions.",
      "opt2": "The one-time limitation has an exception for the qualifying shared database.",
      "opt4": "The shared database does not eliminate federal refill limits."
    },
    "ruleToRemember": "Shared database changes the transfer limit, not the underlying refill limit.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-transfer-c345-refill",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-EMERG-01",
    "conceptId": "co-emergency-maintenance",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A Colorado pharmacist properly dispenses an emergency supply of a qualifying chronic maintenance drug without a current valid order. What notification does the Board rule require?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the practitioner of record immediately in writing with the required dispensing details."
      },
      {
        "id": "opt2",
        "text": "Notify the practitioner by the end of the next business day; oral notice is sufficient."
      },
      {
        "id": "opt3",
        "text": "Notify the Board within 72 hours."
      },
      {
        "id": "opt4",
        "text": "No notice is required if the patient has used the drug for more than six months."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details.",
    "distractorExplanations": {
      "opt2": "The rule says immediately and in writing.",
      "opt3": "The required notice described here is to the practitioner of record, not a routine Board notice.",
      "opt4": "Duration of prior therapy does not erase the rule's notification requirement."
    },
    "ruleToRemember": "Emergency chronic-maintenance dispensing requires immediate written notice to the practitioner of record.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-emergency-maintenance",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-EMERG-02",
    "conceptId": "co-emergency-maintenance",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 4,
    "type": "multi",
    "stem": "The written notice after a Colorado emergency supply of a chronic maintenance drug must include which items? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "The dispensing pharmacy's name, address, and telephone number."
      },
      {
        "id": "opt2",
        "text": "The drug's name, strength, dosage form, directions, and quantity dispensed."
      },
      {
        "id": "opt3",
        "text": "The patient's name and date of birth."
      },
      {
        "id": "opt4",
        "text": "The patient's insurance group number."
      },
      {
        "id": "opt5",
        "text": "The date of emergency dispensing."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3",
      "opt5"
    ],
    "explanation": "Rule 3.00.23 specifies the pharmacy identifiers/contact information, drug details, patient name/DOB, and date of emergency dispensing. It does not list the insurance group number.",
    "distractorExplanations": {
      "opt4": "Insurance group number is not one of the listed notification elements."
    },
    "ruleToRemember": "Memorize the actual notice elements; do not substitute routine billing data.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-emergency-maintenance",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-LTCF-01",
    "conceptId": "co-ltcf-first-dose",
    "jurisdiction": "Colorado",
    "topic": "Long-Term Care",
    "subtopic": "Long-Term Care",
    "difficulty": 4,
    "type": "scenario",
    "stem": "Under Colorado's first-dose dispensing rule, a pharmacist at a prescription drug outlet may use a duplicate LTCF chart order from another outlet to provide immediate care for a resident. What is the maximum supply described by the rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "24 hours"
      },
      {
        "id": "opt2",
        "text": "48 hours"
      },
      {
        "id": "opt3",
        "text": "72 hours"
      },
      {
        "id": "opt4",
        "text": "7 days"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Rule 3.00.25 permits up to a 72-hour supply of a noncontrolled prescription drug for this specific first-dose LTCF situation, one time per order and subject to the rule's conditions.",
    "distractorExplanations": {
      "opt1": "The rule permits more than 24 hours.",
      "opt2": "The stated ceiling is 72 hours.",
      "opt4": "Seven days exceeds the rule's limit."
    },
    "ruleToRemember": "Colorado LTCF first-dose rule: up to 72 hours, noncontrolled, one time per order, with required documentation.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-ltcf-first-dose",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-CLOSE-01",
    "conceptId": "co-closure-records",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 3,
    "type": "single",
    "stem": "After closure of a Colorado prescription drug outlet, within what period must the last pharmacist manager of record relocate prescriptions/chart orders as required by Board Rule 5.00.60?",
    "answers": [
      {
        "id": "opt1",
        "text": "24 hours"
      },
      {
        "id": "opt2",
        "text": "48 hours"
      },
      {
        "id": "opt3",
        "text": "72 hours"
      },
      {
        "id": "opt4",
        "text": "30 days"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "The records relocation must occur within 72 hours after closure.",
    "distractorExplanations": {
      "opt1": "The rule allows 72 hours.",
      "opt2": "The rule allows 72 hours.",
      "opt4": "Thirty days is too long for the closure-record relocation requirement."
    },
    "ruleToRemember": "Closure: think 72 hours for record relocation and Board closure notice.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-closure-records",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-CLOSE-02",
    "conceptId": "co-closure-records",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A Colorado community pharmacy permanently closes on Friday. Which paired duties are both subject to the 72-hour deadline in Rule 5.00.60?",
    "answers": [
      {
        "id": "opt1",
        "text": "Relocate prescriptions/chart orders and submit the Board closure notice."
      },
      {
        "id": "opt2",
        "text": "Destroy all prescription records and surrender every pharmacist license."
      },
      {
        "id": "opt3",
        "text": "Return all noncontrolled inventory and terminate all third-party contracts."
      },
      {
        "id": "opt4",
        "text": "Notify every patient individually and publish a newspaper notice."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.00.60 requires relocation of prescriptions/chart orders and a Board closure notice within 72 hours. It also requires a reasonable effort to inform patrons of the records' location, but not the distractor duties listed.",
    "distractorExplanations": {
      "opt2": "The rule requires relocation, not destruction of all records.",
      "opt3": "Those actions are not the paired 72-hour duties in the cited rule.",
      "opt4": "The rule calls for a reasonable effort to inform patrons; it does not impose this specific paired requirement."
    },
    "ruleToRemember": "Colorado closure has two prominent 72-hour duties: relocate records and notify the Board.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-closure-records",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-PIC-01",
    "conceptId": "co-manager-change",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 3,
    "type": "single",
    "stem": "Following termination of the former pharmacist manager, the owner generally must employ a new pharmacist manager and apply to transfer the outlet registration within:",
    "answers": [
      {
        "id": "opt1",
        "text": "72 hours"
      },
      {
        "id": "opt2",
        "text": "10 days"
      },
      {
        "id": "opt3",
        "text": "30 days"
      },
      {
        "id": "opt4",
        "text": "60 days"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Rule 5.00.70 states that the owner must employ a pharmacist manager and, within 30 days after termination of the former manager's employment, apply to transfer the registration and pay the transfer fee.",
    "distractorExplanations": {
      "opt1": "Seventy-two hours is associated with the controlled-substance inventory after manager change, not this registration-transfer application.",
      "opt2": "Ten days is used in other reporting contexts.",
      "opt4": "The rule specifies 30 days."
    },
    "ruleToRemember": "PIC/manager change: distinguish the 30-day registration action from the 72-hour controlled-substance inventory.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-manager-change",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-PIC-02",
    "conceptId": "co-manager-cs-inventory",
    "jurisdiction": "Colorado",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A new pharmacist manager begins at a Colorado prescription drug outlet. When must the controlled-substance inventory required by Rule 5.01.10 be taken?",
    "answers": [
      {
        "id": "opt1",
        "text": "Before the former manager's last shift ends."
      },
      {
        "id": "opt2",
        "text": "Within 24 hours."
      },
      {
        "id": "opt3",
        "text": "Within 72 hours."
      },
      {
        "id": "opt4",
        "text": "By the next biennial inventory date."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Upon a change of pharmacist manager, the controlled-substance inventory must be taken within 72 hours by the new manager or the new manager's designee.",
    "distractorExplanations": {
      "opt1": "The rule assigns the inventory to the new manager or designee and gives a 72-hour window.",
      "opt2": "The stated window is 72 hours.",
      "opt4": "The manager-change inventory is separate from routine federal biennial inventory requirements."
    },
    "ruleToRemember": "New pharmacist manager: controlled-substance inventory within 72 hours.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-manager-cs-inventory",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-PIC-03",
    "conceptId": "co-manager-cs-inventory",
    "jurisdiction": "Colorado",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "single",
    "stem": "For the controlled-substance inventory required after a change of Colorado pharmacist manager, which timing method is permitted?",
    "answers": [
      {
        "id": "opt1",
        "text": "Any time during business hours if the exact count time is recorded."
      },
      {
        "id": "opt2",
        "text": "As of the opening or as of the close of business activity on the inventory date."
      },
      {
        "id": "opt3",
        "text": "Only at the close of business."
      },
      {
        "id": "opt4",
        "text": "Only before the first prescription is processed that day."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 5.01.10 states the inventory is taken either as of the opening or as of the close of business activity on the inventory date, with the time and date entered on the record.",
    "distractorExplanations": {
      "opt1": "The rule is more specific than any time during business hours.",
      "opt3": "Opening is also permitted.",
      "opt4": "The rule allows opening or close of business activity."
    },
    "ruleToRemember": "For this Colorado inventory, the legally specified reference point is opening or close of business.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-manager-cs-inventory",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-VAX-01",
    "conceptId": "co-vax-delegation",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 3,
    "type": "single",
    "stem": "A trained Colorado pharmacist wishes to delegate vaccine administration. To whom may administration be delegated under Rule 19.01.20?",
    "answers": [
      {
        "id": "opt1",
        "text": "Any pharmacy employee who has current CPR."
      },
      {
        "id": "opt2",
        "text": "Only a trained pharmacy intern or trained pharmacy technician."
      },
      {
        "id": "opt3",
        "text": "Only another pharmacist."
      },
      {
        "id": "opt4",
        "text": "A medical assistant employed by the pharmacy, regardless of pharmacy credentials."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "A trained pharmacist may delegate vaccine and immunization administration only to a trained pharmacy intern or pharmacy technician.",
    "distractorExplanations": {
      "opt1": "General employment plus CPR does not satisfy the rule.",
      "opt3": "The rule expressly allows trained interns and technicians.",
      "opt4": "The cited pharmacy rule identifies trained pharmacy interns or technicians."
    },
    "ruleToRemember": "Vaccine delegation is credential- and training-specific, not merely employer-specific.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-vax-delegation",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-VAX-02",
    "conceptId": "co-vax-records",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 3,
    "type": "single",
    "stem": "How long must a Colorado prescription drug outlet maintain the vaccine-administration records required by Rule 19.01.40 for each dose?",
    "answers": [
      {
        "id": "opt1",
        "text": "2 years"
      },
      {
        "id": "opt2",
        "text": "3 years"
      },
      {
        "id": "opt3",
        "text": "5 years"
      },
      {
        "id": "opt4",
        "text": "The life of the patient"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 19.01.40 requires the listed administration information to be maintained for three years for each dose.",
    "distractorExplanations": {
      "opt1": "Two years is common for other pharmacy records, but not this vaccine rule.",
      "opt3": "The rule specifies three years.",
      "opt4": "The rule does not impose lifetime retention."
    },
    "ruleToRemember": "Colorado vaccine-administration records: 3 years.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-vax-records",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-VAX-03",
    "conceptId": "co-vax-records",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 4,
    "type": "multi",
    "stem": "Which information is expressly included in Colorado's required vaccine-administration record? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Administration date and injection site."
      },
      {
        "id": "opt2",
        "text": "Vaccine name, dose, manufacturer, lot number, and expiration date."
      },
      {
        "id": "opt3",
        "text": "Signed informed consent."
      },
      {
        "id": "opt4",
        "text": "The date the VIS was provided."
      },
      {
        "id": "opt5",
        "text": "The patient's prescription insurance BIN number."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3",
      "opt4"
    ],
    "explanation": "The rule requires the administration/site information, vaccine product details, signed consent, VIS details, and additional information. It does not list the patient's insurance BIN.",
    "distractorExplanations": {
      "opt5": "Insurance BIN is not one of the listed vaccine-administration record elements."
    },
    "ruleToRemember": "Know the clinical/legal vaccine record, not billing metadata.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-vax-records",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-TECH-01",
    "conceptId": "co-tech-ratio",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 3,
    "type": "scenario",
    "stem": "One pharmacist is supervising two pharmacy interns in a public-facing Colorado pharmacy. Under the general statutory ratio, what is the maximum number of additional pharmacy technicians the pharmacist may supervise at the same time?",
    "answers": [
      {
        "id": "opt1",
        "text": "2"
      },
      {
        "id": "opt2",
        "text": "4"
      },
      {
        "id": "opt3",
        "text": "6"
      },
      {
        "id": "opt4",
        "text": "No statutory maximum"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The general ratio permits supervision of up to six persons who are interns or technicians, with no more than two interns. With two interns already included, up to four technicians fit within the six-person maximum.",
    "distractorExplanations": {
      "opt1": "The six-person total allows four technicians in addition to two interns.",
      "opt3": "Six additional technicians would produce eight supervised persons.",
      "opt4": "Colorado sets a general supervision ratio, subject to statutory exceptions."
    },
    "ruleToRemember": "General ratio: up to 6 interns/techs total, with no more than 2 interns.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-122",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Colorado Revised Statutes, Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-tech-ratio",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-TECH-02",
    "conceptId": "co-tech-majority",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "scenario",
    "stem": "Four pharmacy technicians are on duty under the general Colorado supervision-ratio statute. Which staffing statement satisfies the certification mix requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least one of the four must be fully certified."
      },
      {
        "id": "opt2",
        "text": "At least two of the four must be fully certified."
      },
      {
        "id": "opt3",
        "text": "At least three of the four must be fully certified."
      },
      {
        "id": "opt4",
        "text": "All four must be fully certified; provisional certification never counts as being on duty."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "When three or more pharmacy technicians are on duty, the majority must be fully certified by the Board. For four technicians, a majority means at least three.",
    "distractorExplanations": {
      "opt1": "One is not a majority of four.",
      "opt2": "Two is exactly half, not a majority.",
      "opt4": "The statute also contemplates technicians on duty with provisional certification."
    },
    "ruleToRemember": "Three or more techs on duty: the majority must be fully Board-certified.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-122",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Colorado Revised Statutes, Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-tech-majority",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-TECH-03",
    "conceptId": "co-tech-cert",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 3,
    "type": "single",
    "stem": "For a non-provisional Colorado pharmacy technician certification, the applicant must provide proof of certification by:",
    "answers": [
      {
        "id": "opt1",
        "text": "Any employer-approved pharmacy training program."
      },
      {
        "id": "opt2",
        "text": "A nationally recognized certification board/body approved by NABP or NCCA."
      },
      {
        "id": "opt3",
        "text": "Only PTCB; no other certifying body can qualify."
      },
      {
        "id": "opt4",
        "text": "A Colorado community college, regardless of national certification."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 29.00.30 defines the qualifying nationally recognized certification boards/bodies as those approved by NABP or NCCA.",
    "distractorExplanations": {
      "opt1": "Employer approval alone is not the stated national-certification requirement.",
      "opt3": "The rule defines eligibility by NABP/NCCA approval rather than naming only one certifier.",
      "opt4": "College training alone is not the stated proof for non-provisional certification."
    },
    "ruleToRemember": "Non-provisional Colorado technician certification requires qualifying national certification.",
    "authority": [
      {
        "label": "Colorado Board Rule 29.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-tech-cert",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-TECH-04",
    "conceptId": "co-tech-hardship",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "single",
    "stem": "A Colorado provisional pharmacy technician seeks the hardship extension described in Rule 29.00.50. Which timing/duration combination is correct?",
    "answers": [
      {
        "id": "opt1",
        "text": "Apply at least 30 days before expiration; extension up to 6 months."
      },
      {
        "id": "opt2",
        "text": "Apply at least 60 days before expiration; one-time extension of 9 months."
      },
      {
        "id": "opt3",
        "text": "Apply before expiration; extension of 18 months."
      },
      {
        "id": "opt4",
        "text": "Apply within 30 days after expiration; extension of 9 months."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The Board considers a one-time, fee-waived nine-month hardship extension based on a detailed written explanation submitted at least 60 days before expiration.",
    "distractorExplanations": {
      "opt1": "Both the lead time and extension duration are wrong.",
      "opt3": "The provisional period and hardship extension are different concepts.",
      "opt4": "The submission is required before expiration, at least 60 days in advance."
    },
    "ruleToRemember": "Hardship extension: one time, 9 months, request at least 60 days before provisional certification expires.",
    "authority": [
      {
        "label": "Colorado Board Rule 29.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-tech-hardship",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-TELE-01",
    "conceptId": "co-tele-central",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 3,
    "type": "single",
    "stem": "Under Colorado Board Rule 31.00.05, a central pharmacy may be responsible for overseeing no more than how many telepharmacies?",
    "answers": [
      {
        "id": "opt1",
        "text": "1"
      },
      {
        "id": "opt2",
        "text": "2"
      },
      {
        "id": "opt3",
        "text": "3"
      },
      {
        "id": "opt4",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The rule defines a central pharmacy as the registered Colorado prescription drug outlet responsible for overseeing no more than two telepharmacies.",
    "distractorExplanations": {
      "opt1": "The maximum is two, not one.",
      "opt3": "Three exceeds the definition's maximum.",
      "opt4": "Five exceeds the definition's maximum."
    },
    "ruleToRemember": "Colorado central pharmacy: no more than 2 telepharmacies.",
    "authority": [
      {
        "label": "Colorado Board Rule 31.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-tele-central",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-TELE-02",
    "conceptId": "co-tele-space",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 3,
    "type": "single",
    "stem": "What minimum continuous square footage does Colorado Rule 31.01.10 specify for a telepharmacy's principal compounding/dispensing area?",
    "answers": [
      {
        "id": "opt1",
        "text": "100 sq ft"
      },
      {
        "id": "opt2",
        "text": "125 sq ft"
      },
      {
        "id": "opt3",
        "text": "150 sq ft"
      },
      {
        "id": "opt4",
        "text": "225 sq ft"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "The telepharmacy principal compounding/dispensing area must be at least 150 continuous square feet.",
    "distractorExplanations": {
      "opt1": "The rule specifies 150.",
      "opt2": "The rule specifies 150.",
      "opt4": "225 square feet is associated with the general principal area rule for certain prescription drug outlets, not this telepharmacy provision."
    },
    "ruleToRemember": "Telepharmacy principal compounding/dispensing area: 150 continuous sq ft.",
    "authority": [
      {
        "label": "Colorado Board Rule 31.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-tele-space",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-TELE-03",
    "conceptId": "co-tele-temp",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A telepharmacy stores refrigerated drugs. Which monitoring rule is stated in Colorado Rule 31.01.10?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refrigerator temperature must be manually checked once each business week."
      },
      {
        "id": "opt2",
        "text": "The refrigerator temperature must be electronically monitored each calendar day."
      },
      {
        "id": "opt3",
        "text": "Monitoring is required only if the manufacturer specifies refrigeration below 2\u00b0C."
      },
      {
        "id": "opt4",
        "text": "A continuous monitor is optional if the refrigerator has an alarm."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The rule requires electronic monitoring each calendar day for refrigerated drug storage in the telepharmacy principal compounding/dispensing area.",
    "distractorExplanations": {
      "opt1": "Weekly manual monitoring does not meet the stated rule.",
      "opt3": "The requirement applies to the refrigerated drug storage described by the rule.",
      "opt4": "An alarm does not replace the stated electronic daily monitoring requirement."
    },
    "ruleToRemember": "Telepharmacy refrigerated/frozen storage: electronically monitor temperature each calendar day.",
    "authority": [
      {
        "label": "Colorado Board Rule 31.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-tele-temp",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-CPP-01",
    "conceptId": "co-cppa-qual",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 3,
    "type": "multi",
    "stem": "Which are express Colorado pharmacist qualifications for entering a collaborative pharmacy practice agreement under Rule 17.00.30? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Current Colorado pharmacist license."
      },
      {
        "id": "opt2",
        "text": "Engaged in the practice of pharmacy."
      },
      {
        "id": "opt3",
        "text": "PharmD degree or at least five years' experience as a licensed pharmacist."
      },
      {
        "id": "opt4",
        "text": "A minimum of ten years of hospital practice."
      },
      {
        "id": "opt5",
        "text": "Adequate professional liability insurance."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3",
      "opt5"
    ],
    "explanation": "Rule 17.00.30 includes current Colorado licensure, active pharmacy practice, PharmD or at least five years of licensed-pharmacist experience, and adequate professional liability insurance, among other requirements.",
    "distractorExplanations": {
      "opt4": "The rule does not impose a ten-year hospital-practice requirement."
    },
    "ruleToRemember": "For CPPA eligibility, know the actual qualifications; do not add specialty-employment prerequisites.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-cppa-qual",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-CPP-02",
    "conceptId": "co-cppa-insurance",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 4,
    "type": "single",
    "stem": "What minimum professional liability coverage does Colorado Rule 17.00.30 specify for a pharmacist entering collaborative practice?",
    "answers": [
      {
        "id": "opt1",
        "text": "$500,000 per incident / $1 million aggregate"
      },
      {
        "id": "opt2",
        "text": "$1 million per incident / $3 million aggregate"
      },
      {
        "id": "opt3",
        "text": "$2 million per incident / $2 million aggregate"
      },
      {
        "id": "opt4",
        "text": "$3 million per incident / $5 million aggregate"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The rule states coverage of at least $1,000,000 per incident and at least $3,000,000 aggregate.",
    "distractorExplanations": {
      "opt1": "Both limits are below the stated minimums.",
      "opt3": "This is not the specified combination.",
      "opt4": "This exceeds the rule but is not the minimum specified."
    },
    "ruleToRemember": "CPPA liability minimum: $1M per incident / $3M aggregate.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-cppa-insurance",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-CPP-03",
    "conceptId": "co-cppa-patient",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A pharmacist wants to enter a patient-specific collaborative practice arrangement. No statewide protocol applies. Which additional relationship condition is generally required by Colorado statute/rules?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist and patient must have had a dispensing relationship for at least one year."
      },
      {
        "id": "opt2",
        "text": "The collaborating prescriber must have an established relationship with the patient(s) served."
      },
      {
        "id": "opt3",
        "text": "The pharmacist must be employed by the prescriber."
      },
      {
        "id": "opt4",
        "text": "The patient must have Medicare Part D coverage."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Absent a statewide protocol, collaborative practice generally requires the physician/APRN collaborator to have an established relationship with the patient or patients served.",
    "distractorExplanations": {
      "opt1": "No one-year dispensing prerequisite is stated.",
      "opt3": "Employment is not required and the statute prevents certain employment arrangements solely to create the agreement.",
      "opt4": "Insurance status is not the qualifying relationship."
    },
    "ruleToRemember": "Without a statewide protocol, look for the collaborating prescriber's established patient relationship.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "C.R.S. \u00a7 12-280-602",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-cppa-patient",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-2026-FPV-01",
    "conceptId": "co-2026-fpv",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 4,
    "type": "single",
    "stem": "Under the 2026 Colorado amendment to C.R.S. \u00a7 12-280-122, a supervising pharmacist's new final-product-verification delegation authority described in subsection (5) applies to physical preparation/processing tasks for orders that are:",
    "answers": [
      {
        "id": "opt1",
        "text": "Only Schedule III-V controlled substances."
      },
      {
        "id": "opt2",
        "text": "Only Schedule II controlled substances."
      },
      {
        "id": "opt3",
        "text": "Not for controlled substances."
      },
      {
        "id": "opt4",
        "text": "Any drug or device order without limitation."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "HB 26-1336 added subsection (5), allowing specified delegated tasks associated with physical preparation and processing of drug/device/product orders that are not for controlled substances.",
    "distractorExplanations": {
      "opt1": "The statutory text excludes controlled-substance orders from this delegation provision.",
      "opt2": "The statutory text excludes controlled-substance orders.",
      "opt4": "The authority is not unlimited; the subsection expressly excludes controlled substances."
    },
    "ruleToRemember": "2026 FPV delegation provision: noncontrolled orders only.",
    "authority": [
      {
        "label": "HB 26-1336 / C.R.S. \u00a7 12-280-122(5)",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective Aug. 12, 2026"
      }
    ],
    "effectiveDate": "2026-08-12",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-2026-fpv",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-2026-FPV-02",
    "conceptId": "co-2026-fpv",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist delegates final product verification of a noncontrolled unit-dose repackaging process to a properly trained technician under the new 2026 statute. Which safeguard is specifically required of the pharmacy or other outlet?",
    "answers": [
      {
        "id": "opt1",
        "text": "A continuous quality assessment system that periodically verifies accuracy and records/evaluates errors."
      },
      {
        "id": "opt2",
        "text": "A second pharmacist must repeat every delegated verification before release."
      },
      {
        "id": "opt3",
        "text": "The technician must hold a PharmD degree."
      },
      {
        "id": "opt4",
        "text": "The product may be released without any quality review if barcode technology is used."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 law requires a continuous quality assessment system to periodically verify accuracy and include a process for recording and evaluating errors.",
    "distractorExplanations": {
      "opt2": "The statute creates delegation authority; it does not require a pharmacist to repeat every delegated verification.",
      "opt3": "A PharmD is not a technician qualification.",
      "opt4": "Technology does not eliminate the statutory quality-assessment requirement."
    },
    "ruleToRemember": "Delegated final product verification requires a continuous quality assessment system.",
    "authority": [
      {
        "label": "HB 26-1336 / C.R.S. \u00a7 12-280-122(5)",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective Aug. 12, 2026"
      }
    ],
    "effectiveDate": "2026-08-12",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-2026-fpv",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "CO-2026-FPV-03",
    "conceptId": "co-2026-fpv",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "single",
    "stem": "When delegating final product verification under the 2026 Colorado statute, the supervising pharmacist must ensure the delegated task:",
    "answers": [
      {
        "id": "opt1",
        "text": "Requires independent therapeutic judgment by the technician."
      },
      {
        "id": "opt2",
        "text": "Does not require the technician to exercise discretion or clinical judgment."
      },
      {
        "id": "opt3",
        "text": "Is performed only after the technician contacts the prescriber."
      },
      {
        "id": "opt4",
        "text": "Is limited to compounded sterile preparations."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The statute requires the supervising pharmacist to use reasonable professional judgment and ensure the authorized tasks do not require discretion or clinical judgment by a pharmacy technician.",
    "distractorExplanations": {
      "opt1": "This is the opposite of the statutory limitation.",
      "opt3": "Prescriber contact is not the defining limitation in this provision.",
      "opt4": "The statute describes broader noncontrolled final-product-verification tasks."
    },
    "ruleToRemember": "Technician FPV delegation cannot shift clinical judgment or discretion to the technician.",
    "authority": [
      {
        "label": "HB 26-1336 / C.R.S. \u00a7 12-280-122(5)",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective Aug. 12, 2026"
      }
    ],
    "effectiveDate": "2026-08-12",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 1,
    "familyId": "co-2026-fpv",
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "FED-CII-01",
    "conceptId": "fed-cii-refill",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 3,
    "type": "single",
    "stem": "Under federal law, how many refills may be authorized on a Schedule II prescription?",
    "answers": [
      {
        "id": "opt1",
        "text": "0"
      },
      {
        "id": "opt2",
        "text": "1"
      },
      {
        "id": "opt3",
        "text": "3"
      },
      {
        "id": "opt4",
        "text": "5 within six months"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "21 CFR 1306.12 prohibits refilling a Schedule II prescription.",
    "distractorExplanations": {
      "opt2": "A Schedule II prescription is not refillable.",
      "opt3": "A Schedule II prescription is not refillable.",
      "opt4": "The five-refill/six-month rule applies to Schedule III-IV prescriptions."
    },
    "ruleToRemember": "Federal Schedule II prescriptions are not refillable.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal Schedule II refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-refill",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-CII-02",
    "conceptId": "fed-cii-multiple",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A practitioner wants to provide multiple Schedule II prescriptions at one visit. Under federal law, if all regulatory conditions are met, the prescriptions may authorize the patient to receive a total of up to:",
    "answers": [
      {
        "id": "opt1",
        "text": "30 days' supply"
      },
      {
        "id": "opt2",
        "text": "60 days' supply"
      },
      {
        "id": "opt3",
        "text": "90 days' supply"
      },
      {
        "id": "opt4",
        "text": "180 days' supply"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "21 CFR 1306.12 permits multiple Schedule II prescriptions totaling up to a 90-day supply when the listed federal and state-law conditions are satisfied.",
    "distractorExplanations": {
      "opt1": "Federal law allows up to 90 days under the rule.",
      "opt2": "Federal law allows up to 90 days under the rule.",
      "opt4": "The cited federal rule does not authorize a 180-day total."
    },
    "ruleToRemember": "Multiple CII prescriptions can total up to 90 days if every condition is satisfied.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal Schedule II refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-multiple",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-CII-03",
    "conceptId": "fed-cii-multiple",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which are federal conditions for issuing multiple Schedule II prescriptions totaling up to 90 days? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Each prescription is for a legitimate medical purpose in the usual course of practice."
      },
      {
        "id": "opt2",
        "text": "Later prescriptions include written instructions specifying the earliest fill date, as applicable."
      },
      {
        "id": "opt3",
        "text": "The practitioner concludes the approach does not create an undue risk of diversion or abuse."
      },
      {
        "id": "opt4",
        "text": "The practice is permissible under applicable state law."
      },
      {
        "id": "opt5",
        "text": "The pharmacy must fill all prescriptions on the day they are issued."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3",
      "opt4"
    ],
    "explanation": "The federal rule requires legitimate purpose, earliest-fill instructions for later prescriptions as applicable, the practitioner's diversion-risk judgment, state-law permissibility, and other applicable requirements. Same-day filling of all prescriptions is not required and would defeat the delayed-fill structure.",
    "distractorExplanations": {
      "opt5": "Later prescriptions are specifically intended to carry earliest-fill instructions when not to be filled immediately."
    },
    "ruleToRemember": "The 90-day CII mechanism is conditional; it is not a refill and does not override state law.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal Schedule II refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-multiple",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-34-01",
    "conceptId": "fed-c34-refills",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 3,
    "type": "single",
    "stem": "Under federal law, a Schedule III or IV prescription may be refilled, if authorized, no more than:",
    "answers": [
      {
        "id": "opt1",
        "text": "3 times within 90 days"
      },
      {
        "id": "opt2",
        "text": "5 times within 6 months"
      },
      {
        "id": "opt3",
        "text": "6 times within 6 months"
      },
      {
        "id": "opt4",
        "text": "11 times within 1 year"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "21 CFR 1306.22 provides that Schedule III-IV prescriptions may not be filled/refilled more than six months after issue and may not be refilled more than five times.",
    "distractorExplanations": {
      "opt1": "This is not the federal limit.",
      "opt3": "The maximum is five refills, not six.",
      "opt4": "That does not match the federal controlled-substance limit."
    },
    "ruleToRemember": "CIII-IV federal rule: 5 refills in 6 months.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal Schedule III-IV refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-c34-refills",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-34-02",
    "conceptId": "fed-c34-refills",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A Schedule IV prescription was issued 6 months and 2 days ago. It has two refills remaining on the label. No new prescription has been issued. Under federal law, what is the key problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "No problem; the printed remaining-refill count controls."
      },
      {
        "id": "opt2",
        "text": "The prescription is beyond the federal six-month fill/refill window."
      },
      {
        "id": "opt3",
        "text": "Only Schedule III prescriptions have a six-month limit."
      },
      {
        "id": "opt4",
        "text": "The prescription remains valid until all five possible refills are used."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The six-month time limit and five-refill maximum are independent ceilings. Remaining authorized refills do not extend the prescription beyond six months.",
    "distractorExplanations": {
      "opt1": "A remaining-refill display cannot override the federal time limit.",
      "opt3": "The federal rule applies to both Schedule III and IV.",
      "opt4": "Both the time and refill-number ceilings must be satisfied."
    },
    "ruleToRemember": "For CIII-IV, you must satisfy both ceilings: no more than 5 refills and no later than 6 months.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal Schedule III-IV refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-c34-refills",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-34-03",
    "conceptId": "fed-c34-refills",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "single",
    "stem": "A prescriber orally authorizes additional refills on an existing Schedule III prescription. Which statement is consistent with 21 CFR 1306.22?",
    "answers": [
      {
        "id": "opt1",
        "text": "Oral refill authorization can extend the prescription beyond six months if total refills stay at five."
      },
      {
        "id": "opt2",
        "text": "The total authorization still cannot exceed five refills or extend beyond six months from the original issue date."
      },
      {
        "id": "opt3",
        "text": "An oral refill authorization is never permitted for Schedule III or IV prescriptions."
      },
      {
        "id": "opt4",
        "text": "Any quantity may be authorized on an added refill even if it exceeds the initial fill quantity."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The rule allows oral authorization of additional refills under conditions, but the total must remain within the five-refill/six-month limits; each added refill quantity is also constrained by the rule.",
    "distractorExplanations": {
      "opt1": "The six-month ceiling remains.",
      "opt3": "The regulation expressly allows oral additional-refill authorization under conditions.",
      "opt4": "The regulation limits the quantity of each additional refill."
    },
    "ruleToRemember": "Adding refills does not reset the original six-month clock.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal Schedule III-IV refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-c34-refills",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-PART-01",
    "conceptId": "fed-cii-partial-request",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A patient requests a partial fill of a valid Schedule II prescription for a reason unrelated to pharmacy stock. State law permits the partial fill. Under the federal patient-request rule, by when must any remaining portions generally be filled?",
    "answers": [
      {
        "id": "opt1",
        "text": "Within 72 hours of the first partial fill"
      },
      {
        "id": "opt2",
        "text": "Within 7 days of issue"
      },
      {
        "id": "opt3",
        "text": "Not later than 30 days after the date the prescription was written"
      },
      {
        "id": "opt4",
        "text": "Within 60 days of issue"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "For a qualifying patient/practitioner-requested Schedule II partial fill, remaining portions generally must be filled not later than 30 days after the prescription was written.",
    "distractorExplanations": {
      "opt1": "The 72-hour rule is associated with emergency oral prescriptions and the unable-to-supply framework.",
      "opt2": "The federal rule provides a 30-day window in this circumstance.",
      "opt4": "The 60-day rule applies to certain LTCF/terminal-illness Schedule II prescriptions."
    },
    "ruleToRemember": "Patient/practitioner-requested CII partial fill: generally complete within 30 days of the written date.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal Schedule II partial-fill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-partial-request",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-PART-02",
    "conceptId": "fed-cii-partial-shortage",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy cannot supply the full quantity of a Schedule II prescription and dispenses a partial quantity under the federal unable-to-supply rule. What is the general deadline for dispensing the remainder under that provision?",
    "answers": [
      {
        "id": "opt1",
        "text": "24 hours"
      },
      {
        "id": "opt2",
        "text": "48 hours"
      },
      {
        "id": "opt3",
        "text": "72 hours"
      },
      {
        "id": "opt4",
        "text": "30 days"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Under 21 CFR 1306.13(a), when the pharmacist is unable to supply the full quantity, the remaining portion may be filled within 72 hours. If it cannot be completed in that period, the practitioner is notified and no further quantity may be supplied without a new prescription.",
    "distractorExplanations": {
      "opt1": "The rule provides 72 hours.",
      "opt2": "The rule provides 72 hours.",
      "opt4": "The 30-day rule applies to a different partial-fill pathway."
    },
    "ruleToRemember": "CII partial-fill deadlines depend on WHY the prescription was partially filled.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal Schedule II partial-fill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-partial-shortage",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-PART-03",
    "conceptId": "fed-cii-partial-ltcf",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "single",
    "stem": "A Schedule II prescription for a qualifying LTCF patient is being dispensed in partial quantities. Under federal law, the prescription may remain valid for a period not to exceed:",
    "answers": [
      {
        "id": "opt1",
        "text": "30 days from issue"
      },
      {
        "id": "opt2",
        "text": "45 days from issue"
      },
      {
        "id": "opt3",
        "text": "60 days from issue"
      },
      {
        "id": "opt4",
        "text": "90 days from issue"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Federal law permits partial quantities for qualifying LTCF or terminally ill patients and provides a validity period not exceeding 60 days from issue, unless the medication is discontinued sooner.",
    "distractorExplanations": {
      "opt1": "The specific LTCF/terminal-illness provision allows up to 60 days.",
      "opt2": "The rule specifies 60 days.",
      "opt4": "The rule specifies 60 days, not 90."
    },
    "ruleToRemember": "LTCF/terminal-illness CII partial-fill provision: up to 60 days from issue.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal Schedule II partial-fill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-partial-ltcf",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-PART-04",
    "conceptId": "fed-cii-partial-distinguish",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "single",
    "stem": "Which pairing correctly matches a federal Schedule II partial-fill circumstance with its principal remaining-fill deadline?",
    "answers": [
      {
        "id": "opt1",
        "text": "Unable to supply full quantity \u2192 30 days; patient-requested partial fill \u2192 72 hours."
      },
      {
        "id": "opt2",
        "text": "Unable to supply full quantity \u2192 72 hours; qualifying patient-requested partial fill \u2192 30 days from written date."
      },
      {
        "id": "opt3",
        "text": "Both circumstances \u2192 60 days."
      },
      {
        "id": "opt4",
        "text": "Both circumstances \u2192 72 hours."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Federal law has distinct Schedule II partial-fill pathways. Unable-to-supply uses a 72-hour remainder period; qualifying patient/practitioner-requested partial fill generally uses 30 days from the written date.",
    "distractorExplanations": {
      "opt1": "The deadlines are reversed.",
      "opt3": "Sixty days is associated with the LTCF/terminal-illness provision.",
      "opt4": "The patient-request pathway is not limited to 72 hours."
    },
    "ruleToRemember": "Do not memorize one CII partial-fill number; identify the legal pathway first.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal Schedule II partial-fill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-cii-partial-distinguish",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-RESP-01",
    "conceptId": "fed-corresponding",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A controlled-substance prescription is facially complete, but the pharmacist has unresolved facts strongly suggesting it was not issued for a legitimate medical purpose. Which statement best reflects federal law?",
    "answers": [
      {
        "id": "opt1",
        "text": "The prescriber's signature eliminates pharmacist responsibility."
      },
      {
        "id": "opt2",
        "text": "The pharmacist has a corresponding responsibility regarding the legitimacy of the controlled-substance prescription."
      },
      {
        "id": "opt3",
        "text": "Only the DEA can decide whether the prescription may be dispensed."
      },
      {
        "id": "opt4",
        "text": "The pharmacist must dispense if the prescriber's DEA registration is active."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "21 CFR 1306.04 places responsibility on the prescriber and a corresponding responsibility on the pharmacist who fills the prescription.",
    "distractorExplanations": {
      "opt1": "A prescriber's signature does not eliminate the pharmacist's corresponding responsibility.",
      "opt3": "The pharmacist has an independent legal responsibility when deciding whether to fill.",
      "opt4": "An active DEA registration does not by itself establish legitimate medical purpose."
    },
    "ruleToRemember": "Controlled substances: a technically complete prescription can still be legally invalid.",
    "authority": [
      {
        "label": "21 CFR 1306.04(a)",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Federal corresponding responsibility"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-corresponding",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-XFER-01",
    "conceptId": "fed-c345-transfer",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 4,
    "type": "single",
    "stem": "Under the general federal rule, transfer of original Schedule III-V prescription information for refill purposes between pharmacies that do not share the qualifying real-time online database is permitted:",
    "answers": [
      {
        "id": "opt1",
        "text": "Zero times"
      },
      {
        "id": "opt2",
        "text": "One time"
      },
      {
        "id": "opt3",
        "text": "Twice"
      },
      {
        "id": "opt4",
        "text": "Without a transfer limit until refills expire"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "21 CFR 1306.25 permits the refill transfer on a one-time basis, with an exception for pharmacies sharing a real-time online database.",
    "distractorExplanations": {
      "opt1": "Federal law permits a transfer under the rule.",
      "opt3": "The general limit is one transfer.",
      "opt4": "The number of authorized refills does not create unlimited transfer authority."
    },
    "ruleToRemember": "CIII-V refill-transfer limit and refill limit are different questions.",
    "authority": [
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal CIII-V refill transfer rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-c345-transfer",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "FED-XFER-02",
    "conceptId": "fed-c345-transfer-personnel",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "For a traditional federal Schedule III-V refill transfer under 21 CFR 1306.25, the transfer must be communicated directly between:",
    "answers": [
      {
        "id": "opt1",
        "text": "Two licensed pharmacists"
      },
      {
        "id": "opt2",
        "text": "A pharmacist and any certified technician"
      },
      {
        "id": "opt3",
        "text": "Two pharmacy technicians if both are nationally certified"
      },
      {
        "id": "opt4",
        "text": "Any two employees acting under pharmacist supervision"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The federal transfer rule specifies direct communication between two licensed pharmacists for this transfer pathway.",
    "distractorExplanations": {
      "opt2": "Certification does not replace the pharmacist-to-pharmacist federal requirement in this rule.",
      "opt3": "The rule does not authorize technician-to-technician communication.",
      "opt4": "General supervision does not alter the direct communication requirement."
    },
    "ruleToRemember": "Federal CIII-V refill transfer under 1306.25: pharmacist to pharmacist.",
    "authority": [
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal CIII-V refill transfer rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-c345-transfer-personnel",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "MIX-01",
    "conceptId": "mixed-transfer-distinction",
    "jurisdiction": "Both",
    "topic": "Federal vs Colorado",
    "subtopic": "Federal vs Colorado",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado technician is authorized by state rule to orally transfer a noncontrolled prescription. The technician then assumes the same authority applies to a Schedule IV refill transfer governed by federal controlled-substance transfer rules. What is the legal flaw?",
    "answers": [
      {
        "id": "opt1",
        "text": "None; state technician authority automatically controls all prescription transfers."
      },
      {
        "id": "opt2",
        "text": "Federal controlled-substance transfer rules impose their own pharmacist-to-pharmacist requirement for the traditional CIII-V refill-transfer pathway."
      },
      {
        "id": "opt3",
        "text": "Schedule IV prescriptions cannot be transferred at all."
      },
      {
        "id": "opt4",
        "text": "The transfer is valid only if the patient has no refills remaining."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado's noncontrolled-transfer personnel rule does not erase the federal pharmacist-to-pharmacist requirement for the traditional Schedule III-V refill transfer pathway.",
    "distractorExplanations": {
      "opt1": "Different categories can carry different personnel requirements.",
      "opt3": "Schedule III-V refill transfers are permitted under conditions.",
      "opt4": "A refill transfer presupposes remaining refill authority."
    },
    "ruleToRemember": "Always classify the prescription before applying the transfer-personnel rule.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "mixed-transfer-distinction",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "MIX-02",
    "conceptId": "mixed-refill-vs-transfer",
    "jurisdiction": "Both",
    "topic": "Federal vs Colorado",
    "subtopic": "Federal vs Colorado",
    "difficulty": 5,
    "type": "single",
    "stem": "A Schedule IV prescription has already been transferred once between two non-shared-database pharmacies and still has three authorized refills remaining. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The remaining refill count automatically authorizes another transfer."
      },
      {
        "id": "opt2",
        "text": "Refill authorization and transfer authorization are separate limits; remaining refills do not necessarily permit another transfer."
      },
      {
        "id": "opt3",
        "text": "A prescription with three refills remaining may always be transferred three more times."
      },
      {
        "id": "opt4",
        "text": "Once transferred, all remaining refills are void under federal law."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "The number of refills remaining does not equal the number of lawful transfers remaining. Under the general one-time transfer rule, a prescription can retain refills but have exhausted its transfer authorization.",
    "distractorExplanations": {
      "opt1": "This confuses refill count with transfer count.",
      "opt3": "The transfer rule does not track one-for-one with remaining refills.",
      "opt4": "A lawful transfer does not automatically void all remaining refills."
    },
    "ruleToRemember": "Keep the refill clock/count and the transfer count mentally separate.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "DEA controlled-substance transfer rule",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "21 CFR 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "mixed-refill-vs-transfer",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "MIX-03",
    "conceptId": "mixed-cii-refill",
    "jurisdiction": "Both",
    "topic": "Federal vs Colorado",
    "subtopic": "Federal vs Colorado",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A Colorado prescription system displays '2 refills remaining' on a Schedule II prescription. Which legal principle controls?",
    "answers": [
      {
        "id": "opt1",
        "text": "The computer display authorizes two refills."
      },
      {
        "id": "opt2",
        "text": "Federal law prohibits refilling a Schedule II prescription; the display cannot create refill authority."
      },
      {
        "id": "opt3",
        "text": "Colorado law permits two Schedule II refills if the original was electronic."
      },
      {
        "id": "opt4",
        "text": "The patient may choose whether to use the displayed refills."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Schedule II refills are prohibited under federal law. A software field or label display cannot create legal refill authority.",
    "distractorExplanations": {
      "opt1": "System data cannot override federal law.",
      "opt3": "Electronic format does not make a Schedule II prescription refillable.",
      "opt4": "Patient preference does not create legal authority."
    },
    "ruleToRemember": "Operational data never outranks the governing controlled-substance rule.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal Schedule II refill rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "mixed-cii-refill",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-VAX-04",
    "conceptId": "co-vax-offsite",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 4,
    "type": "scenario",
    "stem": "Vaccines are removed from a Colorado prescription drug outlet for an authorized off-site immunization event. What must happen to the remaining vaccines under Rule 19.01.50?",
    "answers": [
      {
        "id": "opt1",
        "text": "They may remain secured off-site for up to 72 hours."
      },
      {
        "id": "opt2",
        "text": "They must be returned to the prescription drug outlet the day they were removed."
      },
      {
        "id": "opt3",
        "text": "They may remain off-site until their beyond-use date."
      },
      {
        "id": "opt4",
        "text": "They must be destroyed at the off-site location."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 19.01.50 requires remaining vaccines and immunizations to be returned to the prescription drug outlet the day they were removed.",
    "distractorExplanations": {
      "opt1": "The rule requires same-day return.",
      "opt3": "The rule does not permit indefinite off-site retention.",
      "opt4": "The rule requires return, not routine destruction."
    },
    "ruleToRemember": "Off-site vaccine stock: return remaining doses to the outlet the same day.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-vax-offsite",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-TELE-04",
    "conceptId": "co-tele-closure",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A Colorado telepharmacy permanently closes. By when must the last pharmacist manager of record relocate applicable orders and submit the closure notice?",
    "answers": [
      {
        "id": "opt1",
        "text": "Within 24 hours"
      },
      {
        "id": "opt2",
        "text": "Within 48 hours"
      },
      {
        "id": "opt3",
        "text": "Within 72 hours"
      },
      {
        "id": "opt4",
        "text": "Within 30 days"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Colorado's telepharmacy closure rule uses a 72-hour deadline for both record relocation and the Board closure notice.",
    "distractorExplanations": {
      "opt1": "The rule states 72 hours.",
      "opt2": "The rule states 72 hours.",
      "opt4": "Thirty days is not the closure deadline."
    },
    "ruleToRemember": "Telepharmacy closure also uses the 72-hour pattern.",
    "authority": [
      {
        "label": "Colorado Board Rule 31.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-tele-closure",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-TELE-05",
    "conceptId": "co-tele-staff",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 3,
    "type": "single",
    "stem": "Who may engage in the practice of pharmacy in a Colorado telepharmacy under Rule 31.02.00?",
    "answers": [
      {
        "id": "opt1",
        "text": "Any employee who completes employer training."
      },
      {
        "id": "opt2",
        "text": "Only a Colorado-licensed pharmacist, Colorado-licensed pharmacy intern, or Colorado-certified pharmacy technician."
      },
      {
        "id": "opt3",
        "text": "Only a pharmacist physically present at the telepharmacy."
      },
      {
        "id": "opt4",
        "text": "Only pharmacists and interns; technicians are excluded."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 31.02.00 identifies Colorado-licensed pharmacists, Colorado-licensed interns, and Colorado-certified technicians as the personnel who may engage in the practice of pharmacy in the telepharmacy.",
    "distractorExplanations": {
      "opt1": "Employer training alone is insufficient.",
      "opt3": "The rule includes remote/telepharmacy staffing structures and is not limited to a pharmacist physically present at the telepharmacy.",
      "opt4": "Certified technicians are included."
    },
    "ruleToRemember": "Telepharmacy personnel must hold the Colorado credential appropriate to their role.",
    "authority": [
      {
        "label": "Colorado Board Rule 31.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-tele-staff",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-REFCOPY-02",
    "conceptId": "co-reference-copy",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient brings Pharmacy B a paper labeled 'COPY FOR REFERENCE ONLY' issued by Pharmacy A and asks B to dispense directly from the copy. Which response is most accurate under Colorado's transfer rules?",
    "answers": [
      {
        "id": "opt1",
        "text": "The copy itself is a valid prescription if it has the pharmacist's initials."
      },
      {
        "id": "opt2",
        "text": "The copy is informational only; B needs prescriber authorization or must complete a lawful transfer process."
      },
      {
        "id": "opt3",
        "text": "The copy can be used only for Schedule II drugs."
      },
      {
        "id": "opt4",
        "text": "The copy is valid if the patient has photo identification."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado treats a prescription label or written prescription copy from another pharmacy as informational only, not as a valid order. The receiving pharmacy must contact the prescriber or comply with the transfer rules.",
    "distractorExplanations": {
      "opt1": "The copy is not transformed into a valid prescription by initials.",
      "opt3": "The rule is not a special Schedule II pathway.",
      "opt4": "Patient identification does not turn a reference copy into a prescription order."
    },
    "ruleToRemember": "A reference copy is evidence about a prescription, not authority to dispense.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-reference-copy",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "CO-REFILLREC-02",
    "conceptId": "co-refill-record",
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A technician enters the date and quantity for a refill transaction that requires no interpretation. Which additional element must identify the pharmacist who performed final evaluation?",
    "answers": [
      {
        "id": "opt1",
        "text": "Only the technician's employee number."
      },
      {
        "id": "opt2",
        "text": "The pharmacist's name, initials, license number, or secure electronic identifier."
      },
      {
        "id": "opt3",
        "text": "The prescriber's DEA number even for a noncontrolled prescription."
      },
      {
        "id": "opt4",
        "text": "No pharmacist identifier is needed if the technician made the entry."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Rule 2.01.30 permits technician entry when no interpretation is required, but the record must still bear the identifying information of the pharmacist making the final evaluation.",
    "distractorExplanations": {
      "opt1": "The technician's identifier alone does not identify the final-evaluating pharmacist.",
      "opt3": "That is not the required final-evaluator identifier for this refill record.",
      "opt4": "The pharmacist's final-evaluation identifier remains required."
    },
    "ruleToRemember": "Technician data entry does not erase pharmacist final-evaluation accountability.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "co-refill-record",
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "CO-LABEL-01",
    "conceptId": "co-label-identity",
    "jurisdiction": "Colorado",
    "topic": "Labeling",
    "subtopic": "Labeling",
    "difficulty": 3,
    "type": "single",
    "stem": "Under Colorado Rule 3.00.30, absent a practitioner's request otherwise, the drug name appearing on a dispensed prescription container label must:",
    "answers": [
      {
        "id": "opt1",
        "text": "Use only the brand name."
      },
      {
        "id": "opt2",
        "text": "Use only the generic name."
      },
      {
        "id": "opt3",
        "text": "Correspond with the identity of the drug actually contained in the package."
      },
      {
        "id": "opt4",
        "text": "Match the wholesaler invoice description verbatim."
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Colorado's labeling rule requires the name on the container label to correspond with the identity of the drug contained, unless otherwise requested by the practitioner.",
    "distractorExplanations": {
      "opt1": "The rule does not require brand-only naming.",
      "opt2": "The rule does not require generic-only naming.",
      "opt4": "The wholesaler invoice is not the governing labeling standard."
    },
    "ruleToRemember": "The label must identify what is actually in the container, subject to the practitioner's lawful request.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "co-label-identity",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "CO-CPPA-04",
    "conceptId": "co-cppa-communication",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 4,
    "type": "single",
    "stem": "A pharmacist and prescriber establish a Colorado collaborative pharmacy practice agreement. Which infrastructure requirement is explicit?",
    "answers": [
      {
        "id": "opt1",
        "text": "A process for the prescriber and pharmacist to communicate and document changes to the patient's medical record."
      },
      {
        "id": "opt2",
        "text": "A shared ownership interest in the pharmacy."
      },
      {
        "id": "opt3",
        "text": "A daily in-person meeting between pharmacist and prescriber."
      },
      {
        "id": "opt4",
        "text": "A requirement that all patients use the same insurer."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative practice requires a process for communication between the prescriber and pharmacist and documentation of changes to the patient's medical record.",
    "distractorExplanations": {
      "opt2": "Common ownership is not the stated requirement.",
      "opt3": "A daily in-person meeting is not required by the cited rule.",
      "opt4": "Insurance uniformity is irrelevant to the legal requirement."
    },
    "ruleToRemember": "Collaborative practice needs a reliable communication-and-documentation process.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 2,
    "familyId": "co-cppa-communication",
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "FED-EPCS-01",
    "conceptId": "fed-epcs-initial-transfer",
    "jurisdiction": "Both",
    "topic": "Federal vs Colorado",
    "subtopic": "Federal vs Colorado",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient asks to move an unfilled electronic Schedule III prescription from one Colorado retail pharmacy to another for initial dispensing. Which statement is most accurate under the current federal/Colorado framework?",
    "answers": [
      {
        "id": "opt1",
        "text": "Initial dispensing can never be transferred for a controlled-substance electronic prescription."
      },
      {
        "id": "opt2",
        "text": "A one-time electronic transfer for initial dispensing may occur when applicable federal and Colorado conditions are satisfied."
      },
      {
        "id": "opt3",
        "text": "The prescription must first be converted to paper and then faxed."
      },
      {
        "id": "opt4",
        "text": "The transfer may occur repeatedly until all authorized refills are exhausted."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Current federal rules permit a one-time transfer of an electronic controlled-substance prescription for initial dispensing when state law authorizes it, and Colorado has a corresponding rule for Schedule II-V electronic prescriptions.",
    "distractorExplanations": {
      "opt1": "Current federal rules created an initial-dispensing transfer pathway for electronic Schedule II-V prescriptions, subject to state law.",
      "opt3": "The transfer is designed to remain electronic; conversion to paper is not the required pathway.",
      "opt4": "The initial-dispensing transfer is one-time, not repeatable based on refill count."
    },
    "ruleToRemember": "Initial EPCS transfer is a distinct one-time pathway; do not confuse it with refill-transfer rules.",
    "authority": [
      {
        "label": "DEA 2026 controlled-substance transfer notice",
        "url": "https://www.dea.gov/press-releases/2026/01/09/dea-releases-2026-aggregate-production-quotas",
        "citation": "DEA notes one-time initial EPCS transfer for Schedules II-V if state law allows"
      },
      {
        "label": "Colorado Board Rule 2.01.50(e)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "fed-epcs-initial-transfer",
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A1-RATIO-01",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 0 pharmacy interns and 6 pharmacy technicians. Of the technicians on duty, 4 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement can satisfy the general supervision and certification-mix limits."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-02",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 1 pharmacy intern and 5 pharmacy technicians. Of the technicians on duty, 3 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement can satisfy the general supervision and certification-mix limits."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-03",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 2 pharmacy interns and 4 pharmacy technicians. Of the technicians on duty, 3 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement can satisfy the general supervision and certification-mix limits."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-04",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 2 pharmacy interns and 5 pharmacy technicians. Of the technicians on duty, 3 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement violates at least one general supervision or certification-mix limit."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-05",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 1 pharmacy intern and 6 pharmacy technicians. Of the technicians on duty, 4 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement violates at least one general supervision or certification-mix limit."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-06",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 0 pharmacy interns and 7 pharmacy technicians. Of the technicians on duty, 5 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement violates at least one general supervision or certification-mix limit."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-07",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 2 pharmacy interns and 3 pharmacy technicians. Of the technicians on duty, 2 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement can satisfy the general supervision and certification-mix limits."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-08",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist is simultaneously supervising 1 pharmacy intern and 4 pharmacy technicians. Of the technicians on duty, 2 are fully Board-certified. Assume no special statutory exception applies. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing arrangement can satisfy the general supervision and certification-mix limits."
      },
      {
        "id": "opt2",
        "text": "The arrangement is lawful only if every technician is nationally certified, regardless of Colorado certification status."
      },
      {
        "id": "opt3",
        "text": "The arrangement is automatically lawful because interns do not count toward the supervision ratio."
      },
      {
        "id": "opt4",
        "text": "The arrangement is automatically unlawful whenever more than four people are supervised."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's general ratio counts interns and technicians together, caps interns at two, and when three or more technicians are on duty the majority of those technicians must be fully Board-certified.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Count the people first, then separately test the intern cap and the technician-certification majority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-CFG-1",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "single",
    "stem": "A pharmacist is setting the schedule for a Colorado pharmacy. Which staffing plan is compliant under the general rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "2 interns + 4 technicians, 3 of the 4 technicians fully certified"
      },
      {
        "id": "opt2",
        "text": "2 interns + 5 technicians, 4 of the 5 technicians fully certified"
      },
      {
        "id": "opt3",
        "text": "3 interns + 3 technicians, all technicians fully certified"
      },
      {
        "id": "opt4",
        "text": "1 intern + 6 technicians, 4 of the 6 technicians fully certified"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Apply both the six-person total (interns + technicians), the maximum of two interns, and the majority-certification rule when at least three technicians are on duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ratio questions often require two independent checks, not one.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-RATIO-CFG-2",
    "conceptId": "co-tech-ratio-advanced",
    "familyId": "co-tech-ratio-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "single",
    "stem": "A pharmacist is setting the schedule for a Colorado pharmacy. Which staffing plan is NOT compliant under the general rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "0 interns + 6 technicians, 4 fully certified"
      },
      {
        "id": "opt2",
        "text": "1 intern + 5 technicians, 3 fully certified"
      },
      {
        "id": "opt3",
        "text": "2 interns + 4 technicians, 3 fully certified"
      },
      {
        "id": "opt4",
        "text": "2 interns + 4 technicians, 2 fully certified"
      }
    ],
    "correctAnswers": [
      "opt4"
    ],
    "explanation": "Apply both the six-person total (interns + technicians), the maximum of two interns, and the majority-certification rule when at least three technicians are on duty.",
    "distractorExplanations": {
      "opt1": "This option does not satisfy the controlling rule in this scenario.",
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ratio questions often require two independent checks, not one.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-CERT-01",
    "conceptId": "co-tech-cert-advanced",
    "familyId": "co-tech-cert-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A provisional technician's credential expires July 31. On June 10 the technician submits a detailed hardship request for a nine-month extension. What is the best conclusion?",
    "answers": [
      {
        "id": "opt1",
        "text": "The request is too late for the hardship process because it was not submitted at least 60 days before expiration."
      },
      {
        "id": "opt2",
        "text": "The request is timely because any request before July 31 is sufficient."
      },
      {
        "id": "opt3",
        "text": "The request is timely only if a pharmacist manager cosigns it."
      },
      {
        "id": "opt4",
        "text": "The request automatically converts the credential to a full certification."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not merge the provisional, hardship-extension, and full-certification rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-CERT-02",
    "conceptId": "co-tech-cert-advanced",
    "familyId": "co-tech-cert-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A provisional technician applies 75 days before expiration and documents a qualifying hardship. Which extension is the Board rule designed to allow?",
    "answers": [
      {
        "id": "opt1",
        "text": "A one-time nine-month extension"
      },
      {
        "id": "opt2",
        "text": "A renewable six-month extension"
      },
      {
        "id": "opt3",
        "text": "A one-time eighteen-month extension"
      },
      {
        "id": "opt4",
        "text": "An indefinite extension while employed"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not merge the provisional, hardship-extension, and full-certification rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-CERT-03",
    "conceptId": "co-tech-cert-advanced",
    "familyId": "co-tech-cert-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A technician has employer training but no qualifying national certification. Which statement best describes a standard, non-provisional Colorado technician certification?",
    "answers": [
      {
        "id": "opt1",
        "text": "Employer training alone is sufficient."
      },
      {
        "id": "opt2",
        "text": "Proof of certification by a qualifying nationally recognized certification body is required."
      },
      {
        "id": "opt3",
        "text": "A pharmacist manager may waive national certification."
      },
      {
        "id": "opt4",
        "text": "National certification matters only for sterile compounding."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
    "distractorExplanations": {
      "opt1": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not merge the provisional, hardship-extension, and full-certification rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-CERT-04",
    "conceptId": "co-tech-cert-advanced",
    "familyId": "co-tech-cert-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A technician holds a certification from a body that is neither NABP- nor NCCA-approved. For the standard Colorado technician certification requirement, which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "It automatically qualifies because it is national."
      },
      {
        "id": "opt2",
        "text": "It does not satisfy the rule's stated qualifying-certification standard."
      },
      {
        "id": "opt3",
        "text": "It qualifies if the employer accepts it."
      },
      {
        "id": "opt4",
        "text": "It qualifies only in a hospital."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
    "distractorExplanations": {
      "opt1": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not merge the provisional, hardship-extension, and full-certification rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-PIC-01",
    "conceptId": "co-manager-integrated",
    "familyId": "co-manager-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 5,
    "type": "scenario",
    "stem": "The former pharmacist manager's employment ends April 1. The new manager starts April 4. The owner files the registration-transfer application May 3. The controlled-substance inventory is completed April 8. Which issue is most clearly present?",
    "answers": [
      {
        "id": "opt1",
        "text": "The controlled-substance inventory was late."
      },
      {
        "id": "opt2",
        "text": "The registration-transfer application was necessarily late."
      },
      {
        "id": "opt3",
        "text": "Both were necessarily late."
      },
      {
        "id": "opt4",
        "text": "Neither timing rule is implicated."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Keep the 30-day manager-registration clock separate from the 72-hour inventory clock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-PIC-02",
    "conceptId": "co-manager-integrated",
    "familyId": "co-manager-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A new pharmacist manager begins Monday at 8:00 AM. The manager's designee takes the controlled-substance inventory Wednesday at close of business and records date and time. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The timing can satisfy the 72-hour manager-change inventory rule."
      },
      {
        "id": "opt2",
        "text": "Only the new pharmacist manager personally may take the inventory."
      },
      {
        "id": "opt3",
        "text": "The inventory had to be taken Monday before opening."
      },
      {
        "id": "opt4",
        "text": "The inventory may wait until the next federal biennial inventory."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Keep the 30-day manager-registration clock separate from the 72-hour inventory clock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-PIC-03",
    "conceptId": "co-manager-integrated",
    "familyId": "co-manager-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist manager leaves March 1. The owner employs a replacement immediately but does not apply to transfer the outlet registration until April 5. Which requirement is the central concern?",
    "answers": [
      {
        "id": "opt1",
        "text": "The 30-day registration-transfer application deadline after the former manager's termination."
      },
      {
        "id": "opt2",
        "text": "A 72-hour deadline to renew every technician certificate."
      },
      {
        "id": "opt3",
        "text": "A 7-day deadline to close all patient profiles."
      },
      {
        "id": "opt4",
        "text": "A 60-day federal DEA reporting requirement."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Keep the 30-day manager-registration clock separate from the 72-hour inventory clock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-PIC-04",
    "conceptId": "co-manager-integrated",
    "familyId": "co-manager-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A manager-change inventory is performed at 2:15 PM during normal dispensing operations. The precise time is documented. Which statement best reflects the Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Documentation of the exact time makes any time of day acceptable."
      },
      {
        "id": "opt2",
        "text": "The manager-change inventory is specified as of opening or close of business activity, so mid-day performance does not match the stated timing method."
      },
      {
        "id": "opt3",
        "text": "Only opening is allowed."
      },
      {
        "id": "opt4",
        "text": "Only close of business is allowed."
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
    "distractorExplanations": {
      "opt1": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Keep the 30-day manager-registration clock separate from the 72-hour inventory clock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-01",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A trained technician performs a physical verification of a noncontrolled unit-dose product after a pharmacist has already reviewed the order for therapeutic appropriateness. The technician exercises no clinical judgment. Which additional program feature is required?",
    "answers": [
      {
        "id": "opt1",
        "text": "A continuous quality assessment process that records and evaluates errors and potential errors."
      },
      {
        "id": "opt2",
        "text": "A second pharmacist must repeat every physical check."
      },
      {
        "id": "opt3",
        "text": "The order must be converted to a verbal order."
      },
      {
        "id": "opt4",
        "text": "The technician must independently repeat the DUR."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-02",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist asks a technician to decide whether a renal dose should be reduced and then perform final product verification. Which part is outside the delegation contemplated by the 2026 statute?",
    "answers": [
      {
        "id": "opt1",
        "text": "The clinical dose decision."
      },
      {
        "id": "opt2",
        "text": "The physical product verification."
      },
      {
        "id": "opt3",
        "text": "Use of barcode verification."
      },
      {
        "id": "opt4",
        "text": "Verification of another technician's repackaging work."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-03",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy proposes technician final product verification for Schedule IV prescriptions. Which is most accurate under the 2026 statutory delegation provision?",
    "answers": [
      {
        "id": "opt1",
        "text": "The provision excludes controlled-substance orders from this delegation authority."
      },
      {
        "id": "opt2",
        "text": "It is allowed if the technician is nationally certified."
      },
      {
        "id": "opt3",
        "text": "It is allowed only for Schedule III-V, not Schedule II."
      },
      {
        "id": "opt4",
        "text": "It is allowed whenever barcode scanning is used."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-04",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy creates an FPV program but does not document how pharmacist hours will be maintained and redirected toward direct patient-care activities. Which statutory program element is missing?",
    "answers": [
      {
        "id": "opt1",
        "text": "The required program plan component addressing pharmacist hours."
      },
      {
        "id": "opt2",
        "text": "A DEA-222 log."
      },
      {
        "id": "opt3",
        "text": "A patient counseling refusal log."
      },
      {
        "id": "opt4",
        "text": "A collaborative practice agreement."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-05",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A second technician verifies another technician's bulk-to-unit-dose repackaging of a noncontrolled drug. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "That type of second-person verification is among the FPV tasks the 2026 statute contemplates, subject to the program safeguards."
      },
      {
        "id": "opt2",
        "text": "Technician verification is limited to commercially packaged outpatient prescriptions."
      },
      {
        "id": "opt3",
        "text": "Only a pharmacist may verify repackaging under any circumstance."
      },
      {
        "id": "opt4",
        "text": "The task is permitted only if no electronic system is used."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-06",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Barcode technology is used to verify a noncontrolled drug before administration by a health-care provider. Under the 2026 statute, this is best characterized as:",
    "answers": [
      {
        "id": "opt1",
        "text": "One of the listed FPV mechanisms that may be delegated under the statutory framework."
      },
      {
        "id": "opt2",
        "text": "A controlled-substance exception."
      },
      {
        "id": "opt3",
        "text": "A substitute for pharmacist clinical review of the order."
      },
      {
        "id": "opt4",
        "text": "A process that eliminates the continuous quality-assessment requirement."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-07",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A technician performing FPV encounters a mismatch and must choose which therapeutic alternative would be best for the patient. What should happen?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist must resolve the clinical judgment issue; the delegated task cannot require technician discretion or clinical judgment."
      },
      {
        "id": "opt2",
        "text": "The technician may select the alternative if nationally certified."
      },
      {
        "id": "opt3",
        "text": "The technician may decide if the drug is noncontrolled."
      },
      {
        "id": "opt4",
        "text": "The prescriber must physically come to the pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-FPV-08",
    "conceptId": "co-2026-fpv-advanced",
    "familyId": "co-2026-fpv-advanced",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist intends to implement technician FPV tomorrow but has no written program plan or quality-assessment process. Which response best fits the 2026 statute?",
    "answers": [
      {
        "id": "opt1",
        "text": "Do not implement until the required safeguards and program plan are in place."
      },
      {
        "id": "opt2",
        "text": "Proceed if the pharmacist verbally approves the program."
      },
      {
        "id": "opt3",
        "text": "Proceed for one week as a pilot before creating records."
      },
      {
        "id": "opt4",
        "text": "Proceed only for controlled substances."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "FPV delegation is physical verification\u2014not delegation of clinical judgment.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-MISC-01",
    "conceptId": "co-personnel-integrated",
    "familyId": "co-personnel-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A technician receives a prescriber's dictated new outpatient prescription by telephone and enters it. A pharmacist later performs final verification. No chart-order exception applies. What is the legal problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "The technician was not authorized under the general Colorado rule to receive and reduce the oral order to writing."
      },
      {
        "id": "opt2",
        "text": "There is no problem because final pharmacist verification cures the intake step."
      },
      {
        "id": "opt3",
        "text": "The only issue is whether the drug is controlled."
      },
      {
        "id": "opt4",
        "text": "Technicians may receive oral orders only after one year of employment."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado personnel rules distinguish legal scope from training or certification status. Final pharmacist review does not retroactively authorize an intake task that the technician could not perform.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ask two questions: who may perform the task, and whether staffing/certification ratios are independently satisfied.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-MISC-02",
    "conceptId": "co-personnel-integrated",
    "familyId": "co-personnel-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A certified technician argues that national certification gives the same authority as an intern to receive a new oral prescription. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Certification does not expand the general oral-order receipt rule to technicians."
      },
      {
        "id": "opt2",
        "text": "Certification creates full intern authority."
      },
      {
        "id": "opt3",
        "text": "Certification permits oral orders only for noncontrolled drugs."
      },
      {
        "id": "opt4",
        "text": "Certification permits oral orders if recorded electronically."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado personnel rules distinguish legal scope from training or certification status. Final pharmacist review does not retroactively authorize an intake task that the technician could not perform.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ask two questions: who may perform the task, and whether staffing/certification ratios are independently satisfied.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-MISC-03",
    "conceptId": "co-personnel-integrated",
    "familyId": "co-personnel-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist supervises two interns and four technicians. Three technicians are fully certified. Later a fifth technician starts the shift while staffing remains otherwise unchanged. What changes?",
    "answers": [
      {
        "id": "opt1",
        "text": "The total supervised-person count exceeds the general six-person ceiling."
      },
      {
        "id": "opt2",
        "text": "Only the technician-certification majority becomes a problem."
      },
      {
        "id": "opt3",
        "text": "Nothing; technicians are not counted with interns."
      },
      {
        "id": "opt4",
        "text": "The arrangement becomes lawful only if all five technicians are certified."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado personnel rules distinguish legal scope from training or certification status. Final pharmacist review does not retroactively authorize an intake task that the technician could not perform.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ask two questions: who may perform the task, and whether staffing/certification ratios are independently satisfied.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-MISC-04",
    "conceptId": "co-personnel-integrated",
    "familyId": "co-personnel-integrated",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy has three technicians on duty; two are fully certified and one is provisional. Assuming the general rule applies, which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The majority-certification requirement can be satisfied."
      },
      {
        "id": "opt2",
        "text": "All three must be fully certified."
      },
      {
        "id": "opt3",
        "text": "Only one must be fully certified."
      },
      {
        "id": "opt4",
        "text": "Provisional technicians may never work when two certified technicians are present."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado personnel rules distinguish legal scope from training or certification status. Final pharmacist review does not retroactively authorize an intake task that the technician could not perform.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Ask two questions: who may perform the task, and whether staffing/certification ratios are independently satisfied.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A2-COUNSEL-01",
    "conceptId": "co-counsel-integrated",
    "familyId": "co-counsel-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient picking up a new medication says, 'I already know how to take it; no counseling.' The pharmacist documents the refusal but deletes the record 18 months later. Which is the best conclusion?",
    "answers": [
      {
        "id": "opt1",
        "text": "The counseling refusal was properly accepted, but the retention period was too short."
      },
      {
        "id": "opt2",
        "text": "Counseling may never be refused."
      },
      {
        "id": "opt3",
        "text": "Eighteen months exceeds the required retention period."
      },
      {
        "id": "opt4",
        "text": "A refusal need not be documented."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires counseling on new therapy, provides for documented refusal, and requires refusal records to remain readily retrievable for at least two years. Language barriers alter the method, not the duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Counseling questions often test duty + documentation + retention together.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-COUNSEL-02",
    "conceptId": "co-counsel-integrated",
    "familyId": "co-counsel-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient with a language barrier cannot understand the pharmacist's oral English counseling. Which approach most closely satisfies Colorado law?",
    "answers": [
      {
        "id": "opt1",
        "text": "Use alternative means necessary to counsel the patient in a way the patient understands."
      },
      {
        "id": "opt2",
        "text": "Provide the English label and treat that as sufficient."
      },
      {
        "id": "opt3",
        "text": "Ask a technician to waive counseling."
      },
      {
        "id": "opt4",
        "text": "Refuse to dispense until the patient brings an interpreter."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires counseling on new therapy, provides for documented refusal, and requires refusal records to remain readily retrievable for at least two years. Language barriers alter the method, not the duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Counseling questions often test duty + documentation + retention together.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-COUNSEL-03",
    "conceptId": "co-counsel-integrated",
    "familyId": "co-counsel-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist counsels every refill but skips counseling on a new therapy because the patient did not ask a question. What is the problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "Colorado imposes an affirmative counseling duty on new medication therapy unless an exception/refusal applies."
      },
      {
        "id": "opt2",
        "text": "Counseling is never required unless requested."
      },
      {
        "id": "opt3",
        "text": "Refill counseling substitutes for new-therapy counseling."
      },
      {
        "id": "opt4",
        "text": "Only written counseling is required."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires counseling on new therapy, provides for documented refusal, and requires refusal records to remain readily retrievable for at least two years. Language barriers alter the method, not the duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Counseling questions often test duty + documentation + retention together.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-COUNSEL-04",
    "conceptId": "co-counsel-integrated",
    "familyId": "co-counsel-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient refuses counseling on two new prescriptions. The pharmacy documents one global refusal not linked to either order. Which aspect is deficient?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refusal documentation should be directly linked to each affected corresponding order."
      },
      {
        "id": "opt2",
        "text": "A refusal may not cover more than one medication."
      },
      {
        "id": "opt3",
        "text": "Refusals must be notarized."
      },
      {
        "id": "opt4",
        "text": "The patient must return within 24 hours to sign the refusal."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires counseling on new therapy, provides for documented refusal, and requires refusal records to remain readily retrievable for at least two years. Language barriers alter the method, not the duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Counseling questions often test duty + documentation + retention together.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-COUNSEL-05",
    "conceptId": "co-counsel-integrated",
    "familyId": "co-counsel-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A counseling-refusal record is readily retrievable for 25 months after the refusal. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "This meets the Board-rule minimum retention period for that refusal record."
      },
      {
        "id": "opt2",
        "text": "It must be kept for five years."
      },
      {
        "id": "opt3",
        "text": "It may be destroyed after six months."
      },
      {
        "id": "opt4",
        "text": "It must be kept permanently."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires counseling on new therapy, provides for documented refusal, and requires refusal records to remain readily retrievable for at least two years. Language barriers alter the method, not the duty.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Counseling questions often test duty + documentation + retention together.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-VAX-01",
    "conceptId": "co-vax-integrated",
    "familyId": "co-vax-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist delegates vaccine administration to a trained pharmacy technician. The technician administers the vaccine, and the pharmacy keeps the administration record for 30 months. What is the clearest compliance issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record-retention period is too short; the vaccine record must be maintained for three years."
      },
      {
        "id": "opt2",
        "text": "Technicians may never administer vaccines."
      },
      {
        "id": "opt3",
        "text": "The pharmacist must personally enter every record before the patient leaves."
      },
      {
        "id": "opt4",
        "text": "The record should be destroyed after two years."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado vaccine rules combine who may administer, what must be documented, three-year record retention, and same-day return of off-site vaccine stock.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Treat vaccine authority, records, and inventory movement as separate legal checks.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-VAX-02",
    "conceptId": "co-vax-integrated",
    "familyId": "co-vax-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A vaccine is administered off-site. Unused doses remain at the event site overnight in a monitored refrigerator. What is the Colorado problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "Remaining vaccines are to be returned to the prescription drug outlet the same day they were removed."
      },
      {
        "id": "opt2",
        "text": "Overnight storage is allowed if monitored."
      },
      {
        "id": "opt3",
        "text": "Only controlled vaccines must be returned same day."
      },
      {
        "id": "opt4",
        "text": "The doses must be destroyed rather than returned."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado vaccine rules combine who may administer, what must be documented, three-year record retention, and same-day return of off-site vaccine stock.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Treat vaccine authority, records, and inventory movement as separate legal checks.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-VAX-03",
    "conceptId": "co-vax-integrated",
    "familyId": "co-vax-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy's vaccine record includes product, lot, expiration, date, site, consent, and VIS date, but no insurance BIN. Which conclusion is best?",
    "answers": [
      {
        "id": "opt1",
        "text": "The absence of an insurance BIN does not by itself make the legal vaccine-administration record deficient."
      },
      {
        "id": "opt2",
        "text": "The BIN is a mandatory Board-rule vaccine-record element."
      },
      {
        "id": "opt3",
        "text": "The entire record must be discarded and recreated."
      },
      {
        "id": "opt4",
        "text": "The vaccine administration is void."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado vaccine rules combine who may administer, what must be documented, three-year record retention, and same-day return of off-site vaccine stock.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Treat vaccine authority, records, and inventory movement as separate legal checks.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-VAX-04",
    "conceptId": "co-vax-integrated",
    "familyId": "co-vax-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A trained pharmacist delegates administration to an uncredentialed front-store employee who has CPR certification. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "CPR training alone does not place that employee within the pharmacy intern/technician delegation category."
      },
      {
        "id": "opt2",
        "text": "Any employee with CPR may administer."
      },
      {
        "id": "opt3",
        "text": "Delegation is valid for influenza vaccine only."
      },
      {
        "id": "opt4",
        "text": "Delegation is valid if the pharmacist watches by video."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado vaccine rules combine who may administer, what must be documented, three-year record retention, and same-day return of off-site vaccine stock.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Treat vaccine authority, records, and inventory movement as separate legal checks.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-VAX-05",
    "conceptId": "co-vax-integrated",
    "familyId": "co-vax-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient receives two vaccines on different dates. The pharmacy retains the first-dose record for 37 months and the second for 28 months. Which record presents the retention problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "Only the second-dose record."
      },
      {
        "id": "opt2",
        "text": "Only the first-dose record."
      },
      {
        "id": "opt3",
        "text": "Both records."
      },
      {
        "id": "opt4",
        "text": "Neither record."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado vaccine rules combine who may administer, what must be documented, three-year record retention, and same-day return of off-site vaccine stock.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Treat vaccine authority, records, and inventory movement as separate legal checks.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-CPPA-01",
    "conceptId": "co-cppa-integrated",
    "familyId": "co-cppa-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist with a current license and PharmD enters a CPPA but carries only $500,000 per-incident professional liability coverage. What is the issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The coverage is below the rule's stated minimum of $1 million per incident / $3 million aggregate."
      },
      {
        "id": "opt2",
        "text": "A PharmD eliminates the insurance requirement."
      },
      {
        "id": "opt3",
        "text": "Only the aggregate limit matters."
      },
      {
        "id": "opt4",
        "text": "Insurance is required only for controlled substances."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A CPPA can fail because of pharmacist qualifications, prescriber relationship, or agreement infrastructure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-CPPA-02",
    "conceptId": "co-cppa-integrated",
    "familyId": "co-cppa-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist with eight years of licensed experience but no PharmD otherwise meets the rule. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The experience pathway can satisfy the PharmD-or-five-years qualification element."
      },
      {
        "id": "opt2",
        "text": "A PharmD is always mandatory."
      },
      {
        "id": "opt3",
        "text": "Ten years of hospital practice is required."
      },
      {
        "id": "opt4",
        "text": "Only residency-trained pharmacists qualify."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A CPPA can fail because of pharmacist qualifications, prescriber relationship, or agreement infrastructure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-CPPA-03",
    "conceptId": "co-cppa-integrated",
    "familyId": "co-cppa-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist and prescriber create a CPPA but no process exists for communicating and documenting medication changes in the patient's medical record. Which deficiency is most direct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The agreement lacks the required communication/documentation process."
      },
      {
        "id": "opt2",
        "text": "The pharmacist must own part of the prescriber's practice."
      },
      {
        "id": "opt3",
        "text": "The patient must sign a DEA form."
      },
      {
        "id": "opt4",
        "text": "The prescriber must be physically present whenever the pharmacist acts."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A CPPA can fail because of pharmacist qualifications, prescriber relationship, or agreement infrastructure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-CPPA-04",
    "conceptId": "co-cppa-integrated",
    "familyId": "co-cppa-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "No statewide protocol applies. The collaborating prescriber has never established a relationship with the patient population served. What issue arises?",
    "answers": [
      {
        "id": "opt1",
        "text": "The required established prescriber-patient relationship condition is not met."
      },
      {
        "id": "opt2",
        "text": "The pharmacist can substitute an employer relationship."
      },
      {
        "id": "opt3",
        "text": "The rule is satisfied if the pharmacy has the patient's insurance card."
      },
      {
        "id": "opt4",
        "text": "No relationship is required under any circumstances."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A CPPA can fail because of pharmacist qualifications, prescriber relationship, or agreement infrastructure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-CPPA-05",
    "conceptId": "co-cppa-integrated",
    "familyId": "co-cppa-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist entering a CPPA is licensed but currently not engaged in the practice of pharmacy. Which qualification is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule's requirement that the pharmacist be engaged in pharmacy practice."
      },
      {
        "id": "opt2",
        "text": "Only the liability-insurance requirement."
      },
      {
        "id": "opt3",
        "text": "Only the patient-counseling requirement."
      },
      {
        "id": "opt4",
        "text": "None; current practice status is irrelevant."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A CPPA can fail because of pharmacist qualifications, prescriber relationship, or agreement infrastructure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-01",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A technician answers a prescriber's call for a new noncontrolled outpatient prescription and records it. A pharmacist verifies it before dispensing. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The intake step remains unauthorized under the general oral-order rule despite later pharmacist verification."
      },
      {
        "id": "opt2",
        "text": "The pharmacist's later verification cures any intake limitation."
      },
      {
        "id": "opt3",
        "text": "Technicians may receive oral orders if the drug is noncontrolled."
      },
      {
        "id": "opt4",
        "text": "The only limitation is whether the technician is provisional."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-02",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist independently prescribes a noncontrolled treatment for a 10-year-old under the 2026 expanded authority. The condition is minor and self-limiting and the product is used according to FDA labeling. What additional follow-up is important if treatment occurs?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the child's PCP as soon as practicable consistent with privacy law, or refer if no PCP is disclosed."
      },
      {
        "id": "opt2",
        "text": "Report the prescription to DEA within 24 hours."
      },
      {
        "id": "opt3",
        "text": "Obtain a collaborative practice agreement in every case."
      },
      {
        "id": "opt4",
        "text": "Require the child to be at least 12."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-03",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist proposes to use the 2026 under-12 independent prescriptive authority for a 7-year-old and a controlled substance. Which fact defeats the proposed pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The authority described applies to noncontrolled drugs/drug categories/devices."
      },
      {
        "id": "opt2",
        "text": "The patient is under 12."
      },
      {
        "id": "opt3",
        "text": "The pharmacist is not in a hospital."
      },
      {
        "id": "opt4",
        "text": "The prescription would be electronic."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-04",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist tests a 16-year-old and treats under the applicable independent authority but neither notifies the disclosed PCP nor refers for further care. Which requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The minor-patient PCP notification/referral requirement."
      },
      {
        "id": "opt2",
        "text": "A requirement that all treatment be under a CPPA."
      },
      {
        "id": "opt3",
        "text": "A requirement for DEA notification."
      },
      {
        "id": "opt4",
        "text": "A rule prohibiting pharmacist treatment of anyone under 18."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-05",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist uses the under-12 pathway for a 9-year-old with a condition requiring a completely new complex diagnosis outside the listed categories. Which is the best conclusion?",
    "answers": [
      {
        "id": "opt1",
        "text": "The scenario falls outside the described statutory categories for the under-12 authority."
      },
      {
        "id": "opt2",
        "text": "Age alone makes the authority unlimited."
      },
      {
        "id": "opt3",
        "text": "Any noncontrolled drug may be prescribed to any child older than five."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may proceed if the parent consents."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-SCOPE-06",
    "conceptId": "co-practice-scope-2026",
    "familyId": "co-practice-scope-2026",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist uses a CLIA-waived test for group A streptococcus in an 8-year-old and the proposed therapy is noncontrolled and consistent with FDA labeling. Which fact is most relevant to the new 2026 authority?",
    "answers": [
      {
        "id": "opt1",
        "text": "Group A streptococcus is among the listed test-guided conditions for the age 5-to-under-12 pathway."
      },
      {
        "id": "opt2",
        "text": "Only influenza testing is included."
      },
      {
        "id": "opt3",
        "text": "The pathway begins at age 12."
      },
      {
        "id": "opt4",
        "text": "All testing must occur under a CPPA."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado law expands independent pharmacist prescribing in defined noncontrolled circumstances and adds PCP notification/referral obligations for minors when testing or treatment occurs.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Age, drug class, condition category, FDA labeling, and follow-up obligations all matter.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EMERG-01",
    "conceptId": "co-emergency-integrated",
    "familyId": "co-emergency-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist lawfully provides an emergency supply of a qualifying chronic maintenance medication at 9:00 PM. The pharmacy waits until noon the next day to email the practitioner. What is the issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule calls for immediate written notice to the practitioner of record."
      },
      {
        "id": "opt2",
        "text": "Notice is never required."
      },
      {
        "id": "opt3",
        "text": "Notice must instead go only to the Board."
      },
      {
        "id": "opt4",
        "text": "The patient must provide the notice."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's emergency-dispensing and LTCF first-dose rules contain specific notification, quantity, and frequency conditions.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Emergency authority is conditional; identify the exact pathway before applying the exception.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EMERG-02",
    "conceptId": "co-emergency-integrated",
    "familyId": "co-emergency-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "After an emergency supply, the written notice contains drug name/strength, quantity, patient name/DOB, and date, but omits the dispensing pharmacy's contact information. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The notice is missing required pharmacy-identification/contact information."
      },
      {
        "id": "opt2",
        "text": "The notice is complete."
      },
      {
        "id": "opt3",
        "text": "Only the prescriber's DEA number is missing."
      },
      {
        "id": "opt4",
        "text": "Emergency-dispensing notices need only patient name and drug."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's emergency-dispensing and LTCF first-dose rules contain specific notification, quantity, and frequency conditions.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Emergency authority is conditional; identify the exact pathway before applying the exception.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EMERG-03",
    "conceptId": "co-emergency-integrated",
    "familyId": "co-emergency-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A duplicate LTCF chart order is used under Colorado's first-dose rule for immediate care. The pharmacist dispenses a 96-hour noncontrolled supply. What is the problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule's described maximum is 72 hours."
      },
      {
        "id": "opt2",
        "text": "The rule allows 7 days."
      },
      {
        "id": "opt3",
        "text": "The rule permits 96 hours if noncontrolled."
      },
      {
        "id": "opt4",
        "text": "No quantity/time limit applies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's emergency-dispensing and LTCF first-dose rules contain specific notification, quantity, and frequency conditions.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Emergency authority is conditional; identify the exact pathway before applying the exception.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EMERG-04",
    "conceptId": "co-emergency-integrated",
    "familyId": "co-emergency-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist uses the first-dose LTCF rule twice on the same order because the facility again requests an emergency quantity. Which limitation is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule is one time per order."
      },
      {
        "id": "opt2",
        "text": "The rule allows unlimited first doses if each is 72 hours or less."
      },
      {
        "id": "opt3",
        "text": "The rule applies only to controlled substances."
      },
      {
        "id": "opt4",
        "text": "The rule requires a 30-day supply."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's emergency-dispensing and LTCF first-dose rules contain specific notification, quantity, and frequency conditions.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Emergency authority is conditional; identify the exact pathway before applying the exception.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-01",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A new-therapy patient refuses counseling in Spanish. The pharmacist documents the refusal linked to the order and retains it for two years. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refusal pathway can satisfy the counseling rule even though alternative-language counseling would otherwise have been required."
      },
      {
        "id": "opt2",
        "text": "A language barrier invalidates a patient's refusal."
      },
      {
        "id": "opt3",
        "text": "The record must be retained only one year."
      },
      {
        "id": "opt4",
        "text": "A technician must countersign every refusal."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-02",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A 17-year-old is tested and treated by a pharmacist under an applicable independent-prescribing pathway. The patient identifies a PCP. Which action is most consistent with the 2026 amendment?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the PCP as soon as practicable consistent with privacy law."
      },
      {
        "id": "opt2",
        "text": "No follow-up is required because the patient is older than 12."
      },
      {
        "id": "opt3",
        "text": "Notify DEA rather than the PCP."
      },
      {
        "id": "opt4",
        "text": "Wait until the patient turns 18."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-03",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist delegates vaccine administration to a trained technician but asks the technician to independently decide whether a contraindication is clinically significant. Which distinction matters?",
    "answers": [
      {
        "id": "opt1",
        "text": "Administration may be delegable, but clinical judgment remains a pharmacist responsibility."
      },
      {
        "id": "opt2",
        "text": "Technicians always decide contraindications once trained to vaccinate."
      },
      {
        "id": "opt3",
        "text": "Contraindication review is unnecessary if consent is signed."
      },
      {
        "id": "opt4",
        "text": "The issue matters only for controlled substances."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-04",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist uses an FPV program and CPPA in the same pharmacy. Which activity still cannot simply be shifted to a technician merely because FPV is authorized?",
    "answers": [
      {
        "id": "opt1",
        "text": "Clinical judgment about therapeutic appropriateness."
      },
      {
        "id": "opt2",
        "text": "Physical verification of a noncontrolled product under the FPV safeguards."
      },
      {
        "id": "opt3",
        "text": "Barcode verification of a noncontrolled product."
      },
      {
        "id": "opt4",
        "text": "Second-person check of noncontrolled unit-dose repackaging."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-05",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient's counseling refusal is documented but cannot be retrieved during a Board inspection 14 months later. Which requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refusal record must remain readily retrievable for at least two years."
      },
      {
        "id": "opt2",
        "text": "The retention period expired at 12 months."
      },
      {
        "id": "opt3",
        "text": "Only paper refusals must be retrievable."
      },
      {
        "id": "opt4",
        "text": "Refusal records are confidential from inspectors and need not be produced."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-06",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist independently treats a 6-year-old for a condition outside the statutory categories using a noncontrolled drug. The drug itself is FDA-labeled for the child. What remains problematic?",
    "answers": [
      {
        "id": "opt1",
        "text": "FDA labeling alone does not eliminate the statutory limitations on eligible conditions."
      },
      {
        "id": "opt2",
        "text": "The patient's age is sufficient authority for any condition."
      },
      {
        "id": "opt3",
        "text": "Only controlled status matters."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may treat any condition if a PCP is later notified."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-07",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist's CPPA insurance policy provides $1 million per incident but only $2 million aggregate. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The aggregate coverage is below the rule's stated $3 million minimum."
      },
      {
        "id": "opt2",
        "text": "The coverage fully meets the stated minimum."
      },
      {
        "id": "opt3",
        "text": "Only per-incident coverage matters."
      },
      {
        "id": "opt4",
        "text": "The rule requires $3 million per incident and $1 million aggregate."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-EXTRA-08",
    "conceptId": "co-practice-integrated",
    "familyId": "co-practice-integrated",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A trained technician administers a vaccine off-site. The pharmacy documents the dose completely, returns unused doses that evening, and keeps the record four years. Which element is problematic?",
    "answers": [
      {
        "id": "opt1",
        "text": "None of those listed elements conflicts with the cited vaccine rules."
      },
      {
        "id": "opt2",
        "text": "Technician administration is categorically prohibited."
      },
      {
        "id": "opt3",
        "text": "The record should have been destroyed after three years exactly."
      },
      {
        "id": "opt4",
        "text": "Unused vaccine may never be returned to the pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "These items integrate personnel, counseling, immunization, prescribing, and collaborative-practice rules. The correct answer depends on identifying which legal duty remains with the pharmacist and which exceptions apply.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Do not let a valid delegation in one domain imply delegation of clinical judgment in another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A3-C34-01",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule IV prescription is dated March 12 with five refills. It is filled March 14 and refilled April 18, May 22, June 19, and August 2. On September 15 the patient requests transfer to another pharmacy that does not share a real-time online database. The prescription was already transferred once. Which action is permissible?",
    "answers": [
      {
        "id": "opt1",
        "text": "Do not transfer it again under the general one-time transfer rule; remaining refill authority does not create additional transfer authority."
      },
      {
        "id": "opt2",
        "text": "Transfer it because one refill remains."
      },
      {
        "id": "opt3",
        "text": "Transfer it only if the prescriber verbally approves the transfer."
      },
      {
        "id": "opt4",
        "text": "Dispense it as a Schedule II emergency supply."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-C34-02",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule III prescription dated January 10 was filled January 10 and refilled twice. On July 12 the patient asks for another refill. What is the controlling federal problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "The prescription is beyond the six-month fill/refill window even though fewer than five refills were used."
      },
      {
        "id": "opt2",
        "text": "No problem because fewer than five refills were used."
      },
      {
        "id": "opt3",
        "text": "Schedule III prescriptions are valid for one year."
      },
      {
        "id": "opt4",
        "text": "The prescription can be revived by transferring it."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-C34-03",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule IV prescription dated April 1 has been refilled five times by August 20. On September 1 the patient requests another refill. Which limit has been reached?",
    "answers": [
      {
        "id": "opt1",
        "text": "The five-refill maximum."
      },
      {
        "id": "opt2",
        "text": "Only the six-month time limit."
      },
      {
        "id": "opt3",
        "text": "Neither limit because September is within six months."
      },
      {
        "id": "opt4",
        "text": "Transfer law, not refill law, controls."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-C34-04",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule III prescription dated May 1 has three refills remaining. It was transferred once between pharmacies that do not share a qualifying real-time database. The patient wants another transfer June 15. What is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The general transfer authority has been exhausted even though refills remain."
      },
      {
        "id": "opt2",
        "text": "Three remaining refills permit three more transfers."
      },
      {
        "id": "opt3",
        "text": "The prescription became Schedule II after the first transfer."
      },
      {
        "id": "opt4",
        "text": "A technician may reset the transfer count."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-C34-05",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Two pharmacies share a qualifying real-time online database. A Schedule IV prescription has lawful refills remaining and is still within six months. Which statement best reflects transfer authority?",
    "answers": [
      {
        "id": "opt1",
        "text": "The shared-database exception can permit transfers up to the lawful refill/prescriber limits."
      },
      {
        "id": "opt2",
        "text": "A Schedule IV prescription may never move between pharmacies."
      },
      {
        "id": "opt3",
        "text": "The prescription is limited to one transfer despite the shared database."
      },
      {
        "id": "opt4",
        "text": "The database removes the five-refill/six-month limits."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-C34-06",
    "conceptId": "fed-c34-integrated",
    "familyId": "fed-c34-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule IV prescription is dated February 20 with five refills. The sixth-month anniversary passes before the patient attempts the fifth refill. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The unused refill authorization does not extend the prescription beyond the federal six-month window."
      },
      {
        "id": "opt2",
        "text": "The fifth refill remains valid forever because it was authorized originally."
      },
      {
        "id": "opt3",
        "text": "The prescription converts to noncontrolled after six months."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may extend the date by documenting a transfer."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal Schedule III-IV rules impose independent limits on time, refill count, and transfer count. A prescription can have refills remaining but be too old or have exhausted its transfer authority.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Track three separate variables: age of prescription, refills used, and transfers used.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-CII-01",
    "conceptId": "fed-cii-integrated",
    "familyId": "fed-cii-integrated",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule II prescription is written June 1 and partially filled June 1 at the patient's request under a qualifying pathway. The patient returns July 3 for the balance. State law otherwise permits the partial fill. What is the federal issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The remaining portion is beyond the general 30-day period from the written date for that patient/practitioner-requested partial-fill pathway."
      },
      {
        "id": "opt2",
        "text": "The balance is valid for 60 days in every Schedule II partial fill."
      },
      {
        "id": "opt3",
        "text": "A Schedule II partial fill must always be completed within 72 hours."
      },
      {
        "id": "opt4",
        "text": "No federal time limit applies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule II law contains several different pathways: no refills, multiple prescriptions up to a 90-day total under conditions, 72-hour unable-to-supply partial fills, 30-day patient/practitioner-requested partial fills, and a distinct LTCF/terminal-illness pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Before applying a number, identify which Schedule II pathway the facts describe.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-CII-02",
    "conceptId": "fed-cii-integrated",
    "familyId": "fed-cii-integrated",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy is unable to supply the full quantity of a Schedule II prescription and dispenses part on Monday at 10 AM. The remainder does not arrive until Friday. Which statement best fits the unable-to-supply rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The 72-hour remainder period has passed; the practitioner must be notified and a new prescription is needed for additional quantity."
      },
      {
        "id": "opt2",
        "text": "The pharmacy has 30 days because every Schedule II partial fill uses the same deadline."
      },
      {
        "id": "opt3",
        "text": "The balance remains valid for six months."
      },
      {
        "id": "opt4",
        "text": "The pharmacy may dispense the rest if the patient signs a waiver."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule II law contains several different pathways: no refills, multiple prescriptions up to a 90-day total under conditions, 72-hour unable-to-supply partial fills, 30-day patient/practitioner-requested partial fills, and a distinct LTCF/terminal-illness pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Before applying a number, identify which Schedule II pathway the facts describe.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-CII-03",
    "conceptId": "fed-cii-integrated",
    "familyId": "fed-cii-integrated",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A practitioner issues three separate Schedule II prescriptions at one visit, each for a 30-day supply, with appropriate earliest-fill instructions for later prescriptions. Which federal concept makes this potentially permissible?",
    "answers": [
      {
        "id": "opt1",
        "text": "The multiple-prescription rule allowing up to a 90-day total when all conditions are satisfied."
      },
      {
        "id": "opt2",
        "text": "Schedule II refills."
      },
      {
        "id": "opt3",
        "text": "A six-month validity period."
      },
      {
        "id": "opt4",
        "text": "The Schedule III-IV transfer exception."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule II law contains several different pathways: no refills, multiple prescriptions up to a 90-day total under conditions, 72-hour unable-to-supply partial fills, 30-day patient/practitioner-requested partial fills, and a distinct LTCF/terminal-illness pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Before applying a number, identify which Schedule II pathway the facts describe.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-CII-04",
    "conceptId": "fed-cii-integrated",
    "familyId": "fed-cii-integrated",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule II label in the pharmacy system shows '2 refills remaining.' The patient requests one. What should the pharmacist conclude?",
    "answers": [
      {
        "id": "opt1",
        "text": "The software display cannot create refill authority that federal law prohibits."
      },
      {
        "id": "opt2",
        "text": "Two refills are permitted because they appear in the system."
      },
      {
        "id": "opt3",
        "text": "Only one refill is prohibited; the second is allowed."
      },
      {
        "id": "opt4",
        "text": "Refill authority depends solely on patient consent."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule II law contains several different pathways: no refills, multiple prescriptions up to a 90-day total under conditions, 72-hour unable-to-supply partial fills, 30-day patient/practitioner-requested partial fills, and a distinct LTCF/terminal-illness pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Before applying a number, identify which Schedule II pathway the facts describe.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-CII-05",
    "conceptId": "fed-cii-integrated",
    "familyId": "fed-cii-integrated",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A qualifying LTCF resident has a Schedule II prescription dispensed in partial quantities. The patient remains on therapy 58 days after issue. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The special LTCF/terminal-illness provision can allow partial dispensing within a period not exceeding 60 days from issue, absent earlier discontinuation."
      },
      {
        "id": "opt2",
        "text": "All Schedule II partial fills expire after 30 days."
      },
      {
        "id": "opt3",
        "text": "The prescription can remain open for six months."
      },
      {
        "id": "opt4",
        "text": "Partial fills are prohibited in LTCF."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule II law contains several different pathways: no refills, multiple prescriptions up to a 90-day total under conditions, 72-hour unable-to-supply partial fills, 30-day patient/practitioner-requested partial fills, and a distinct LTCF/terminal-illness pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Before applying a number, identify which Schedule II pathway the facts describe.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-DISP-01",
    "conceptId": "dispensing-judgment-integrated",
    "familyId": "dispensing-judgment-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule IV prescription is facially complete, but the pharmacist has unresolved evidence that it was issued outside the usual course of professional practice. What is the most important legal principle?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist's corresponding responsibility remains even though the prescription is facially complete."
      },
      {
        "id": "opt2",
        "text": "An active DEA number requires dispensing."
      },
      {
        "id": "opt3",
        "text": "The prescriber's signature eliminates pharmacist responsibility."
      },
      {
        "id": "opt4",
        "text": "Only the Board may question medical purpose."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Dispensing law often requires the pharmacist to determine whether the order is legally valid, whether the transfer mechanism is authorized, and whether the dispensed label accurately represents the product.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A valid-looking form or active registration does not substitute for the pharmacist's legal evaluation.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Corresponding responsibility"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-DISP-02",
    "conceptId": "dispensing-judgment-integrated",
    "familyId": "dispensing-judgment-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado technician can orally transfer a noncontrolled prescription under state rule. The technician attempts the same traditional refill transfer for a Schedule IV prescription. What is the flaw?",
    "answers": [
      {
        "id": "opt1",
        "text": "The federal Schedule III-V refill-transfer pathway specifies direct pharmacist-to-pharmacist communication."
      },
      {
        "id": "opt2",
        "text": "Colorado technician authority overrides federal controlled-substance rules."
      },
      {
        "id": "opt3",
        "text": "Schedule IV prescriptions may never be transferred."
      },
      {
        "id": "opt4",
        "text": "The technician may transfer only after the fifth refill."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Dispensing law often requires the pharmacist to determine whether the order is legally valid, whether the transfer mechanism is authorized, and whether the dispensed label accurately represents the product.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A valid-looking form or active registration does not substitute for the pharmacist's legal evaluation.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Corresponding responsibility"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-DISP-03",
    "conceptId": "dispensing-judgment-integrated",
    "familyId": "dispensing-judgment-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient presents a paper marked 'COPY FOR REFERENCE ONLY' from another Colorado pharmacy and asks for dispensing. What should the receiving pharmacy recognize?",
    "answers": [
      {
        "id": "opt1",
        "text": "The copy is informational; dispensing requires a lawful prescription or transfer pathway."
      },
      {
        "id": "opt2",
        "text": "The copy is a valid order if it lists the drug and directions."
      },
      {
        "id": "opt3",
        "text": "The copy is valid only for controlled substances."
      },
      {
        "id": "opt4",
        "text": "The copy becomes valid when signed by the patient."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Dispensing law often requires the pharmacist to determine whether the order is legally valid, whether the transfer mechanism is authorized, and whether the dispensed label accurately represents the product.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A valid-looking form or active registration does not substitute for the pharmacist's legal evaluation.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Corresponding responsibility"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-DISP-04",
    "conceptId": "dispensing-judgment-integrated",
    "familyId": "dispensing-judgment-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A prescription label accurately names the prescribed brand, but the actual drug in the container is a different generic product after an undocumented substitution. Which Colorado labeling principle is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The label should correspond with the identity of the drug actually contained, subject to lawful practitioner direction."
      },
      {
        "id": "opt2",
        "text": "The label should always display the originally prescribed brand regardless of contents."
      },
      {
        "id": "opt3",
        "text": "Only the NDC matters; drug identity on the label is optional."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may intentionally mismatch label and contents if bioequivalent."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Dispensing law often requires the pharmacist to determine whether the order is legally valid, whether the transfer mechanism is authorized, and whether the dispensed label accurately represents the product.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A valid-looking form or active registration does not substitute for the pharmacist's legal evaluation.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Corresponding responsibility"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-DISP-05",
    "conceptId": "dispensing-judgment-integrated",
    "familyId": "dispensing-judgment-integrated",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist refuses to dispense a controlled-substance prescription after unresolved red flags. The prescriber has an active DEA registration. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Active registration does not eliminate the pharmacist's corresponding responsibility to determine legitimacy."
      },
      {
        "id": "opt2",
        "text": "Active registration makes refusal unlawful."
      },
      {
        "id": "opt3",
        "text": "Corresponding responsibility applies only to Schedule II."
      },
      {
        "id": "opt4",
        "text": "Only insurers may question legitimacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Dispensing law often requires the pharmacist to determine whether the order is legally valid, whether the transfer mechanism is authorized, and whether the dispensed label accurately represents the product.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A valid-looking form or active registration does not substitute for the pharmacist's legal evaluation.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Corresponding responsibility"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-RETURN-01",
    "conceptId": "co-return-to-stock",
    "familyId": "co-return-to-stock",
    "competencyArea": 3,
    "jurisdiction": "Colorado",
    "topic": "Returning / Reusing Drugs",
    "subtopic": "Returning / Reusing Drugs",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A prescription was delivered to another outlet for pickup but never reached the patient. It contains a controlled substance and is returned unopened to the originating pharmacy. Which Colorado rule is decisive?",
    "answers": [
      {
        "id": "opt1",
        "text": "Controlled-substance prescriptions may not be returned to stock under this return-to-stock pathway."
      },
      {
        "id": "opt2",
        "text": "Unopened packaging makes return to stock automatic."
      },
      {
        "id": "opt3",
        "text": "Any undelivered prescription may be returned to stock."
      },
      {
        "id": "opt4",
        "text": "Controlled substances may be returned if the lot number is known."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits return to stock only under defined conditions and expressly excludes controlled-substance prescriptions and compounded or flavored prescriptions from the cited pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Undelivered does not automatically mean returnable to stock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-RETURN-02",
    "conceptId": "co-return-to-stock",
    "familyId": "co-return-to-stock",
    "competencyArea": 3,
    "jurisdiction": "Colorado",
    "topic": "Returning / Reusing Drugs",
    "subtopic": "Returning / Reusing Drugs",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An undelivered compounded flavored prescription is returned to the originating pharmacy in apparently intact condition. May it be returned to stock under the cited Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "No; compounded or flavored prescriptions are excluded from return to stock under the rule."
      },
      {
        "id": "opt2",
        "text": "Yes, if the patient never touched it."
      },
      {
        "id": "opt3",
        "text": "Yes, if refrigerated continuously."
      },
      {
        "id": "opt4",
        "text": "Yes, but only for 24 hours."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits return to stock only under defined conditions and expressly excludes controlled-substance prescriptions and compounded or flavored prescriptions from the cited pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Undelivered does not automatically mean returnable to stock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-RETURN-03",
    "conceptId": "co-return-to-stock",
    "familyId": "co-return-to-stock",
    "competencyArea": 3,
    "jurisdiction": "Colorado",
    "topic": "Returning / Reusing Drugs",
    "subtopic": "Returning / Reusing Drugs",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An eligible noncontrolled, noncompounded prescription is returned to stock. Which record element is specifically required in the separate return-to-stock record?",
    "answers": [
      {
        "id": "opt1",
        "text": "Prescription number, drug name/strength, quantity returned, and date of return, plus central-fill location if applicable."
      },
      {
        "id": "opt2",
        "text": "Only patient name and prescriber DEA number."
      },
      {
        "id": "opt3",
        "text": "Only the reason the patient failed to pick up the drug."
      },
      {
        "id": "opt4",
        "text": "No separate record is required."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits return to stock only under defined conditions and expressly excludes controlled-substance prescriptions and compounded or flavored prescriptions from the cited pathway.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Undelivered does not automatically mean returnable to stock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-EXTRA-01",
    "conceptId": "controlled-integrated-advanced",
    "familyId": "controlled-integrated-advanced",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule III prescription is four months old, has one refill left, and has never been transferred. The patient requests a refill transfer to a non-shared-database pharmacy. Which factors must still be satisfied?",
    "answers": [
      {
        "id": "opt1",
        "text": "Both lawful refill authority and the separate one-time transfer rule."
      },
      {
        "id": "opt2",
        "text": "Only the transfer rule; prescription age is irrelevant."
      },
      {
        "id": "opt3",
        "text": "Only the six-month clock; transfer history is irrelevant."
      },
      {
        "id": "opt4",
        "text": "Neither, because Schedule III prescriptions are noncontrolled."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Controlled-substance questions often stack separate legal events: issuance, initial transfer, partial fill, refill, and refill transfer. Each event has its own rule.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Name the legal event before applying the rule.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      },
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-EXTRA-02",
    "conceptId": "controlled-integrated-advanced",
    "familyId": "controlled-integrated-advanced",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule II prescription is partially filled because the pharmacy lacks stock. The patient returns 48 hours later and stock is available. Which pathway controls the remaining quantity?",
    "answers": [
      {
        "id": "opt1",
        "text": "The unable-to-supply partial-fill rule, with its 72-hour remainder window."
      },
      {
        "id": "opt2",
        "text": "The 30-day patient-request partial-fill rule necessarily controls every stock shortage."
      },
      {
        "id": "opt3",
        "text": "The 60-day LTCF rule applies to every patient."
      },
      {
        "id": "opt4",
        "text": "The five-refill/six-month rule applies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Controlled-substance questions often stack separate legal events: issuance, initial transfer, partial fill, refill, and refill transfer. Each event has its own rule.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Name the legal event before applying the rule.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      },
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-EXTRA-03",
    "conceptId": "controlled-integrated-advanced",
    "familyId": "controlled-integrated-advanced",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A patient requests transfer of an electronic Schedule II prescription before any dispensing. The prescription remains electronic and two licensed pharmacists communicate the transfer. Which statement is most accurate in Colorado?",
    "answers": [
      {
        "id": "opt1",
        "text": "This can fit the one-time initial electronic controlled-substance transfer pathway if all other conditions are met."
      },
      {
        "id": "opt2",
        "text": "Schedule II electronic prescriptions can never be transferred for initial dispensing."
      },
      {
        "id": "opt3",
        "text": "The transfer must be converted to paper."
      },
      {
        "id": "opt4",
        "text": "The prescription may be transferred repeatedly until filled."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Controlled-substance questions often stack separate legal events: issuance, initial transfer, partial fill, refill, and refill transfer. Each event has its own rule.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Name the legal event before applying the rule.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      },
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A3-EXTRA-04",
    "conceptId": "controlled-integrated-advanced",
    "familyId": "controlled-integrated-advanced",
    "competencyArea": 3,
    "jurisdiction": "Both",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist receives an electronic Schedule IV prescription that was previously transferred once for initial dispensing, later filled, and now has lawful refills. The patient asks for a refill transfer. What must the pharmacist avoid assuming?",
    "answers": [
      {
        "id": "opt1",
        "text": "That the rules for initial electronic transfer and later refill transfer are the same legal event."
      },
      {
        "id": "opt2",
        "text": "That Schedule IV prescriptions may have refills."
      },
      {
        "id": "opt3",
        "text": "That controlled substances have recordkeeping requirements."
      },
      {
        "id": "opt4",
        "text": "That federal law applies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Controlled-substance questions often stack separate legal events: issuance, initial transfer, partial fill, refill, and refill transfer. Each event has its own rule.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Name the legal event before applying the rule.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Schedule II prescribing/refills"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Schedule II partial filling"
      },
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Schedule III-IV refills"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Schedule III-V transfers"
      },
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements"
  },
  {
    "id": "A4-OPS-01",
    "conceptId": "co-outlet-operations",
    "familyId": "co-outlet-operations",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado outlet permanently closes Monday at noon. The last pharmacist manager relocates prescriptions Thursday at 1 PM. What is the clearest issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The 72-hour relocation deadline has been exceeded."
      },
      {
        "id": "opt2",
        "text": "The manager has 30 days to relocate records."
      },
      {
        "id": "opt3",
        "text": "Record relocation is optional if patients are notified."
      },
      {
        "id": "opt4",
        "text": "Only controlled-substance records must be relocated."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational deadlines are independent: 72-hour closure duties and separate relocation/registration rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-OPS-02",
    "conceptId": "co-outlet-operations",
    "familyId": "co-outlet-operations",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An outlet closes and relocates prescription records within 72 hours but does not submit the Board closure notice until day 8. Which requirement was missed?",
    "answers": [
      {
        "id": "opt1",
        "text": "The closure notice also has a 72-hour deadline."
      },
      {
        "id": "opt2",
        "text": "The Board notice has a 30-day deadline."
      },
      {
        "id": "opt3",
        "text": "No Board notice is required if records are moved."
      },
      {
        "id": "opt4",
        "text": "The Board notice is required only for nonresident pharmacies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational deadlines are independent: 72-hour closure duties and separate relocation/registration rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-OPS-03",
    "conceptId": "co-outlet-operations",
    "familyId": "co-outlet-operations",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy relocates its physical outlet and submits the relocation application 45 days before the effective move date. Which timing rule is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule states the application is submitted no more than 30 days prior to the effective relocation date."
      },
      {
        "id": "opt2",
        "text": "The application must be filed at least 60 days before relocation."
      },
      {
        "id": "opt3",
        "text": "Relocation requires no Board application."
      },
      {
        "id": "opt4",
        "text": "The application can only be submitted after relocation."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational deadlines are independent: 72-hour closure duties and separate relocation/registration rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-OPS-04",
    "conceptId": "co-outlet-operations",
    "familyId": "co-outlet-operations",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A nonresident outlet relocates to a different state than the state shown on its Colorado registration and continues dispensing into Colorado under the old registration. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The existing Colorado registration becomes void/cancelled and a new Colorado registration is required before continuing business in Colorado."
      },
      {
        "id": "opt2",
        "text": "The old registration remains valid until annual renewal."
      },
      {
        "id": "opt3",
        "text": "Only a change of pharmacist manager affects registration."
      },
      {
        "id": "opt4",
        "text": "No Colorado registration is needed for nonresident outlets."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational deadlines are independent: 72-hour closure duties and separate relocation/registration rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-TELE-01",
    "conceptId": "co-tele-integrated",
    "familyId": "co-tele-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A central pharmacy oversees three telepharmacies. Each telepharmacy otherwise meets staffing and physical requirements. What is the problem?",
    "answers": [
      {
        "id": "opt1",
        "text": "The central pharmacy definition limits oversight to no more than two telepharmacies."
      },
      {
        "id": "opt2",
        "text": "A central pharmacy may oversee unlimited telepharmacies."
      },
      {
        "id": "opt3",
        "text": "The maximum is five."
      },
      {
        "id": "opt4",
        "text": "The issue depends only on floor space."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Telepharmacy operation combines central-pharmacy oversight limits, physical-space requirements, daily temperature monitoring, and Colorado credential requirements.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Telepharmacy questions can test facility, staffing, and storage rules simultaneously.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-TELE-02",
    "conceptId": "co-tele-integrated",
    "familyId": "co-tele-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A telepharmacy has 145 continuous square feet in its principal compounding/dispensing area. Everything else is compliant. Which requirement is not met?",
    "answers": [
      {
        "id": "opt1",
        "text": "The 150-continuous-square-foot minimum."
      },
      {
        "id": "opt2",
        "text": "A 100-square-foot minimum."
      },
      {
        "id": "opt3",
        "text": "A 225-square-foot minimum specifically for telepharmacies."
      },
      {
        "id": "opt4",
        "text": "No minimum applies."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Telepharmacy operation combines central-pharmacy oversight limits, physical-space requirements, daily temperature monitoring, and Colorado credential requirements.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Telepharmacy questions can test facility, staffing, and storage rules simultaneously.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-TELE-03",
    "conceptId": "co-tele-integrated",
    "familyId": "co-tele-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A telepharmacy refrigerator uses an electronic monitor that records temperature Monday through Friday but not weekends. Drugs remain stored continuously. Which rule is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The telepharmacy rule calls for electronic monitoring each calendar day."
      },
      {
        "id": "opt2",
        "text": "Business-day monitoring is sufficient."
      },
      {
        "id": "opt3",
        "text": "Weekly manual monitoring is the legal standard."
      },
      {
        "id": "opt4",
        "text": "Monitoring is unnecessary if the unit has an alarm."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Telepharmacy operation combines central-pharmacy oversight limits, physical-space requirements, daily temperature monitoring, and Colorado credential requirements.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Telepharmacy questions can test facility, staffing, and storage rules simultaneously.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-TELE-04",
    "conceptId": "co-tele-integrated",
    "familyId": "co-tele-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A telepharmacy employs a nationally certified technician who has not obtained the required Colorado technician credential. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "National certification alone does not substitute for the Colorado credential required for telepharmacy personnel."
      },
      {
        "id": "opt2",
        "text": "National certification alone is sufficient in telepharmacy."
      },
      {
        "id": "opt3",
        "text": "Telepharmacies may use any trained employee."
      },
      {
        "id": "opt4",
        "text": "Only interns need Colorado credentials."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Telepharmacy operation combines central-pharmacy oversight limits, physical-space requirements, daily temperature monitoring, and Colorado credential requirements.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Telepharmacy questions can test facility, staffing, and storage rules simultaneously.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-CENTRAL-01",
    "conceptId": "co-central-fill",
    "familyId": "co-central-fill",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Processing",
    "subtopic": "Central Fill / Processing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An originating pharmacy sends a controlled-substance prescription to a contract central-fill pharmacy. Which additional identifier belongs in the originating pharmacy's transmission record under the cited Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The receiving pharmacy's DEA registration."
      },
      {
        "id": "opt2",
        "text": "The patient's driver's-license number."
      },
      {
        "id": "opt3",
        "text": "The wholesaler's DEA registration."
      },
      {
        "id": "opt4",
        "text": "The insurer's BIN number."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado central-fill/centralized-processing rules require defined transmission records, confidentiality controls, patient notification processes, and traceability of responsibility.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Central fill is a record-and-accountability problem as much as a dispensing workflow.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-CENTRAL-02",
    "conceptId": "co-central-fill",
    "familyId": "co-central-fill",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Processing",
    "subtopic": "Central Fill / Processing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An originating pharmacy transmits a noncontrolled prescription to a contract central-fill pharmacy. Which item is part of the originating pharmacy's record?",
    "answers": [
      {
        "id": "opt1",
        "text": "Name/address of the receiving pharmacy, transmitting pharmacist, and transmission date."
      },
      {
        "id": "opt2",
        "text": "The patient's credit-card number."
      },
      {
        "id": "opt3",
        "text": "The receiving technician's home address."
      },
      {
        "id": "opt4",
        "text": "A DEA-222 number."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado central-fill/centralized-processing rules require defined transmission records, confidentiality controls, patient notification processes, and traceability of responsibility.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Central fill is a record-and-accountability problem as much as a dispensing workflow.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-CENTRAL-03",
    "conceptId": "co-central-fill",
    "familyId": "co-central-fill",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Processing",
    "subtopic": "Central Fill / Processing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A centralized prescription-processing agreement has no process for notifying patients that prescriptions may be outsourced and naming the processing pharmacy. Which operational requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The centralized-processing policies should address patient notification and the processing pharmacy's identity."
      },
      {
        "id": "opt2",
        "text": "Patient notification is prohibited."
      },
      {
        "id": "opt3",
        "text": "Only controlled substances require such policies."
      },
      {
        "id": "opt4",
        "text": "The deficiency is cured if the pharmacy shares ownership."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado central-fill/centralized-processing rules require defined transmission records, confidentiality controls, patient notification processes, and traceability of responsibility.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Central fill is a record-and-accountability problem as much as a dispensing workflow.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-CENTRAL-04",
    "conceptId": "co-central-fill",
    "familyId": "co-central-fill",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Processing",
    "subtopic": "Central Fill / Processing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A centralized processing system cannot identify which pharmacist/location performed particular dispensing functions. Which requirement is most directly implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "Records should identify the location and pharmacist responsible for all aspects of dispensing an order."
      },
      {
        "id": "opt2",
        "text": "Only the originating pharmacist needs to be identifiable."
      },
      {
        "id": "opt3",
        "text": "No individual responsibility record is necessary if pharmacies share ownership."
      },
      {
        "id": "opt4",
        "text": "The insurer is responsible for the audit trail."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado central-fill/centralized-processing rules require defined transmission records, confidentiality controls, patient notification processes, and traceability of responsibility.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Central fill is a record-and-accountability problem as much as a dispensing workflow.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-01",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Personnel compound Category 1 and Category 2 CSPs. After initial qualification, how often must they successfully complete the garbing competency under the cited Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least every 6 months."
      },
      {
        "id": "opt2",
        "text": "At least every 3 months."
      },
      {
        "id": "opt3",
        "text": "Every 12 months only."
      },
      {
        "id": "opt4",
        "text": "Only once at hire."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-02",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Personnel compound Category 3 CSPs. Which garbing competency frequency applies after initial qualification under the cited Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least every 3 months."
      },
      {
        "id": "opt2",
        "text": "At least every 6 months."
      },
      {
        "id": "opt3",
        "text": "Every 12 months."
      },
      {
        "id": "opt4",
        "text": "Every 24 months."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-03",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A supervisor directly oversees sterile compounding personnel but does not personally compound. What garbing competency frequency is specified?",
    "answers": [
      {
        "id": "opt1",
        "text": "Every 12 months."
      },
      {
        "id": "opt2",
        "text": "Every 3 months."
      },
      {
        "id": "opt3",
        "text": "Every 6 months."
      },
      {
        "id": "opt4",
        "text": "No recurring competency."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-04",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A nonsterile compounding sink contains unrelated items and is visibly soiled immediately before equipment cleaning. Which action best fits the Colorado compounding rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Empty unrelated items and clean the sink if visibly soiled before use."
      },
      {
        "id": "opt2",
        "text": "Proceed because sinks are not part of compounding controls."
      },
      {
        "id": "opt3",
        "text": "Use the sink only if sterile compounding is also occurring."
      },
      {
        "id": "opt4",
        "text": "Replace purified water with tap water."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-05",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A nonsterile formulation calls for water as an ingredient. Which water quality does the cited Colorado rule require?",
    "answers": [
      {
        "id": "opt1",
        "text": "Purified water or better quality water."
      },
      {
        "id": "opt2",
        "text": "Any potable tap water."
      },
      {
        "id": "opt3",
        "text": "Distilled water is prohibited."
      },
      {
        "id": "opt4",
        "text": "Sterile water for injection is always mandatory."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-COMP-06",
    "conceptId": "co-compounding-ops",
    "familyId": "co-compounding-ops",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy performs particle-generating nonsterile activity in the same room at the same time sterile compounding is underway, despite otherwise adequate PEC placement. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The cited rule prohibits particle-generating activity when sterile compounding is in process in that shared-room situation."
      },
      {
        "id": "opt2",
        "text": "It is allowed if the PECs are one meter apart."
      },
      {
        "id": "opt3",
        "text": "It is allowed only for Category 1 CSPs."
      },
      {
        "id": "opt4",
        "text": "It is required for environmental monitoring."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado compounding rules include recurring competency frequencies and environmental/cleaning controls that vary by compounding category and role.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Compounding questions often turn on category, role, frequency, or environmental condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-SPDO-01",
    "conceptId": "co-spdo-records",
    "familyId": "co-spdo-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A managing prescription drug outlet distributes drug stock to an SPDO. For how long must the managing outlet retain the distribution records under the cited rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least 2 years."
      },
      {
        "id": "opt2",
        "text": "At least 6 months."
      },
      {
        "id": "opt3",
        "text": "At least 1 year."
      },
      {
        "id": "opt4",
        "text": "At least 5 years."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "SPDO distribution records contain detailed traceability requirements and at least two years of retention; Schedule II distribution has an additional DEA-222 requirement.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational law frequently tests chain-of-custody and record content, not just dispensing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-SPDO-02",
    "conceptId": "co-spdo-records",
    "familyId": "co-spdo-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Schedule II controlled substance is distributed from a managing PDO to an SPDO. What additional requirement appears in the cited distribution rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Distribution only pursuant to receipt of a properly executed DEA-222 form."
      },
      {
        "id": "opt2",
        "text": "No record beyond an invoice is needed."
      },
      {
        "id": "opt3",
        "text": "The SPDO may obtain Schedule II stock from any source without documentation."
      },
      {
        "id": "opt4",
        "text": "Only the patient's name must be recorded."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "SPDO distribution records contain detailed traceability requirements and at least two years of retention; Schedule II distribution has an additional DEA-222 requirement.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational law frequently tests chain-of-custody and record content, not just dispensing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-SPDO-03",
    "conceptId": "co-spdo-records",
    "familyId": "co-spdo-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An SPDO's automated dispensing device releases medication stock for further dispensing rather than administration to a patient. Which operational restriction is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "SPDO stock is for drug administration, not for further dispensing."
      },
      {
        "id": "opt2",
        "text": "SPDO stock may be used for any retail dispensing."
      },
      {
        "id": "opt3",
        "text": "The restriction applies only to noncontrolled drugs."
      },
      {
        "id": "opt4",
        "text": "The rule requires all SPDO stock to be compounded."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "SPDO distribution records contain detailed traceability requirements and at least two years of retention; Schedule II distribution has an additional DEA-222 requirement.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational law frequently tests chain-of-custody and record content, not just dispensing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-SPDO-04",
    "conceptId": "co-spdo-records",
    "familyId": "co-spdo-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A distribution record from the managing PDO to an SPDO includes drug/quantity/date and both outlet addresses but omits the identities of the person issuing the drug and the person placing it into the SPDO automated device. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The cited rule includes those identities among the required record elements."
      },
      {
        "id": "opt2",
        "text": "Those identities are never required."
      },
      {
        "id": "opt3",
        "text": "Only controlled substances require staff identities."
      },
      {
        "id": "opt4",
        "text": "The omission matters only after five years."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "SPDO distribution records contain detailed traceability requirements and at least two years of retention; Schedule II distribution has an additional DEA-222 requirement.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational law frequently tests chain-of-custody and record content, not just dispensing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-REC-01",
    "conceptId": "co-ops-records",
    "familyId": "co-ops-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An eligible prescription is returned to stock. The pharmacy keeps no separate return-to-stock record because the original prescription profile still exists. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Colorado requires a separate written record or separately printable record identifying return-to-stock transactions."
      },
      {
        "id": "opt2",
        "text": "The original profile alone always satisfies the return-to-stock record rule."
      },
      {
        "id": "opt3",
        "text": "Return-to-stock records are required only for controlled substances."
      },
      {
        "id": "opt4",
        "text": "No record is needed if the drug is resold within 24 hours."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado operations law emphasizes separate auditable records, complete traceability, and time-specific inventories.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "If the question is operational, look for record content, retention, responsible person, and timing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-REC-02",
    "conceptId": "co-ops-records",
    "familyId": "co-ops-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A return-to-stock record lists prescription number, drug name/strength, quantity, and date, but the prescription was centrally filled and the record omits where it was filled. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The central-fill location is an additional listed element when applicable."
      },
      {
        "id": "opt2",
        "text": "Central-fill location is never part of the record."
      },
      {
        "id": "opt3",
        "text": "Only patient DOB is missing."
      },
      {
        "id": "opt4",
        "text": "The record is exempt because it was centrally filled."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado operations law emphasizes separate auditable records, complete traceability, and time-specific inventories.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "If the question is operational, look for record content, retention, responsible person, and timing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-REC-03",
    "conceptId": "co-ops-records",
    "familyId": "co-ops-records",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A new pharmacist manager delegates the manager-change controlled-substance inventory to another qualified person. The inventory is done within 72 hours as of close of business with date/time documented. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule permits the new manager or the new manager's designee to take the inventory."
      },
      {
        "id": "opt2",
        "text": "Only the manager personally may take it."
      },
      {
        "id": "opt3",
        "text": "Delegation is permitted only after 30 days."
      },
      {
        "id": "opt4",
        "text": "The inventory must be at noon."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado operations law emphasizes separate auditable records, complete traceability, and time-specific inventories.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "If the question is operational, look for record content, retention, responsible person, and timing.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-01",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An outlet closes, moves records on time, and files the Board notice on time but makes no reasonable effort to tell patrons where records are located. Which remaining duty is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The last pharmacist manager's duty to make a reasonable effort to inform patrons of the records' location."
      },
      {
        "id": "opt2",
        "text": "A requirement to mail every patron by certified mail."
      },
      {
        "id": "opt3",
        "text": "A requirement to publish in two newspapers."
      },
      {
        "id": "opt4",
        "text": "No patient-facing duty exists."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-02",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A nonresident pharmacy's Colorado registration has been expired for more than two years and it seeks reinstatement. Which additional inspection-document concept appears in the rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "A copy of the most recent resident-state Board inspection report dated within five years of the reinstatement application."
      },
      {
        "id": "opt2",
        "text": "A DEA inspection within 30 days."
      },
      {
        "id": "opt3",
        "text": "An FDA inspection within one year for every nonresident pharmacy."
      },
      {
        "id": "opt4",
        "text": "No inspection documentation is relevant."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-03",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy changes ownership. When should the controlled-substance inventory under the cited Colorado rule be taken?",
    "answers": [
      {
        "id": "opt1",
        "text": "Upon transfer of ownership, by the pharmacist manager or designee, as of opening or close of business activity."
      },
      {
        "id": "opt2",
        "text": "Only at the next federal biennial date."
      },
      {
        "id": "opt3",
        "text": "Within 30 days after the transfer at any time of day."
      },
      {
        "id": "opt4",
        "text": "Only if Schedule II drugs are stocked."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-04",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacy intends to use technician FPV but has no mechanism to record near-miss errors because no error reached a patient. Which operational safeguard is missing?",
    "answers": [
      {
        "id": "opt1",
        "text": "The continuous quality-assessment process must include recording and evaluating errors and potential errors, even if they do not reach the patient."
      },
      {
        "id": "opt2",
        "text": "Near misses never need to be considered."
      },
      {
        "id": "opt3",
        "text": "Only actual patient harm must be recorded."
      },
      {
        "id": "opt4",
        "text": "The requirement applies only to controlled substances."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-05",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A telepharmacy closes permanently but the central pharmacy assumes ordinary outlet-closure rules do not apply. Which is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Colorado telepharmacy rules also impose closure duties including a 72-hour record-relocation/notice pattern."
      },
      {
        "id": "opt2",
        "text": "Telepharmacies have no closure requirements."
      },
      {
        "id": "opt3",
        "text": "Telepharmacy records may simply be deleted."
      },
      {
        "id": "opt4",
        "text": "Only the central pharmacy Board registration matters."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-06",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A central-fill process protects confidentiality but lacks a contingency for dispensing when the filled prescription has not arrived from the fulfillment pharmacy. Which type of policy is missing?",
    "answers": [
      {
        "id": "opt1",
        "text": "A required centralized-processing operational policy addressing that circumstance."
      },
      {
        "id": "opt2",
        "text": "A vaccine-administration policy."
      },
      {
        "id": "opt3",
        "text": "A technician hardship-extension policy."
      },
      {
        "id": "opt4",
        "text": "A DEA quota policy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-07",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A nonsterile compounding area stores components directly on the floor. Which physical-environment requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "Components, non-freestanding equipment, and containers are to be stored off the floor to prevent contamination and permit inspection/cleaning."
      },
      {
        "id": "opt2",
        "text": "Floor storage is required for bulk chemicals."
      },
      {
        "id": "opt3",
        "text": "Only sterile compounding materials must be off the floor."
      },
      {
        "id": "opt4",
        "text": "The rule addresses lighting only."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A4-EXTRA-08",
    "conceptId": "co-operations-integrated",
    "familyId": "co-operations-integrated",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "Personnel who compound or directly oversee sterile compounding have not completed annual knowledge/competency training in calculations, aseptic technique, equipment use, and documentation. Which requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The cited Colorado rule requires recurring sterile-compounding training/competency in these areas at least every 12 months."
      },
      {
        "id": "opt2",
        "text": "Training is required only at initial hire."
      },
      {
        "id": "opt3",
        "text": "Only pharmacists require training."
      },
      {
        "id": "opt4",
        "text": "The rule applies only to nonsterile compounding."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Pharmacy operations questions test whether the facility has the required system, records, safeguards, and timing\u2014not merely whether a prescription can be dispensed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Operational compliance is often a chain: registration \u2192 facility \u2192 records \u2192 storage \u2192 accountability.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations"
  },
  {
    "id": "A1-AUDIT-039",
    "conceptId": "co-manager-change",
    "familyId": "co-manager-change",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: Following termination of the former pharmacist manager, the owner generally must employ a new pharmacist manager and apply to transfer the outlet registration within: Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "30 days"
      },
      {
        "id": "opt2",
        "text": "72 hours"
      },
      {
        "id": "opt3",
        "text": "10 days"
      },
      {
        "id": "opt4",
        "text": "60 days"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.00.70 states that the owner must employ a pharmacist manager and, within 30 days after termination of the former manager's employment, apply to transfer the registration and pay the transfer fee.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "PIC/manager change: distinguish the 30-day registration action from the 72-hour controlled-substance inventory.",
    "authority": [
      {
        "label": "Colorado Board Rules 5.00.60 / 5.00.70 / 5.01.10",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-AUDIT-040",
    "conceptId": "co-tech-ratio",
    "familyId": "co-tech-ratio",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: One pharmacist is supervising two pharmacy interns in a public-facing Colorado pharmacy. Under the general statutory ratio, what is the maximum number of additional pharmacy technicians the pharmacist may supervise at the same time? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "4"
      },
      {
        "id": "opt2",
        "text": "2"
      },
      {
        "id": "opt3",
        "text": "6"
      },
      {
        "id": "opt4",
        "text": "No statutory maximum"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The general ratio permits supervision of up to six persons who are interns or technicians, with no more than two interns. With two interns already included, up to four technicians fit within the six-person maximum.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "General ratio: up to 6 interns/techs total, with no more than 2 interns.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-122",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Colorado Revised Statutes, Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-AUDIT-041",
    "conceptId": "co-tech-majority",
    "familyId": "co-tech-majority",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: Four pharmacy technicians are on duty under the general Colorado supervision-ratio statute. Which staffing statement satisfies the certification mix requirement? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least three of the four must be fully certified."
      },
      {
        "id": "opt2",
        "text": "At least one of the four must be fully certified."
      },
      {
        "id": "opt3",
        "text": "At least two of the four must be fully certified."
      },
      {
        "id": "opt4",
        "text": "All four must be fully certified; provisional certification never counts as being on duty."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When three or more pharmacy technicians are on duty, the majority must be fully certified by the Board. For four technicians, a majority means at least three.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Three or more techs on duty: the majority must be fully Board-certified.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-122",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Colorado Revised Statutes, Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-AUDIT-042",
    "conceptId": "co-tech-cert",
    "familyId": "co-tech-cert",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: For a non-provisional Colorado pharmacy technician certification, the applicant must provide proof of certification by: Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "A nationally recognized certification board/body approved by NABP or NCCA."
      },
      {
        "id": "opt2",
        "text": "Any employer-approved pharmacy training program."
      },
      {
        "id": "opt3",
        "text": "Only PTCB; no other certifying body can qualify."
      },
      {
        "id": "opt4",
        "text": "A Colorado community college, regardless of national certification."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 29.00.30 defines the qualifying nationally recognized certification boards/bodies as those approved by NABP or NCCA.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Non-provisional Colorado technician certification requires qualifying national certification.",
    "authority": [
      {
        "label": "Colorado Board Rule 29.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-AUDIT-043",
    "conceptId": "co-tech-hardship",
    "familyId": "co-tech-hardship",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A Colorado provisional pharmacy technician seeks the hardship extension described in Rule 29.00.50. Which timing/duration combination is correct? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Apply at least 60 days before expiration; one-time extension of 9 months."
      },
      {
        "id": "opt2",
        "text": "Apply at least 30 days before expiration; extension up to 6 months."
      },
      {
        "id": "opt3",
        "text": "Apply before expiration; extension of 18 months."
      },
      {
        "id": "opt4",
        "text": "Apply within 30 days after expiration; extension of 9 months."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The Board considers a one-time, fee-waived nine-month hardship extension based on a detailed written explanation submitted at least 60 days before expiration.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Hardship extension: one time, 9 months, request at least 60 days before provisional certification expires.",
    "authority": [
      {
        "label": "Colorado Board Rule 29.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A1-AUDIT-044",
    "conceptId": "co-2026-fpv",
    "familyId": "co-2026-fpv",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: Under the 2026 Colorado amendment to C.R.S. \u00a7 12-280-122, a supervising pharmacist's new final-product-verification delegation authority described in subsection (5) applies to physical preparation/processing tasks for orders that are: Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Not for controlled substances."
      },
      {
        "id": "opt2",
        "text": "Only Schedule III-V controlled substances."
      },
      {
        "id": "opt3",
        "text": "Only Schedule II controlled substances."
      },
      {
        "id": "opt4",
        "text": "Any drug or device order without limitation."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "HB 26-1336 added subsection (5), allowing specified delegated tasks associated with physical preparation and processing of drug/device/product orders that are not for controlled substances.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "2026 FPV delegation provision: noncontrolled orders only.",
    "authority": [
      {
        "label": "HB 26-1336 / C.R.S. \u00a7 12-280-122(5)",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective Aug. 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Licensure / Personnel"
  },
  {
    "id": "A2-AUDIT-052",
    "conceptId": "co-counsel-new",
    "familyId": "co-counsel-new",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A patient is picking up a medication that represents new medication therapy. The patient has not declined counseling. Which statement best reflects the Colorado pharmacist's legal obligation? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist must provide patient counseling on the new medication therapy."
      },
      {
        "id": "opt2",
        "text": "Counseling is required only if the patient asks a drug-information question."
      },
      {
        "id": "opt3",
        "text": "Counseling may be delegated to any trained pharmacy technician."
      },
      {
        "id": "opt4",
        "text": "Written manufacturer information alone always satisfies the counseling requirement."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires pharmacist counseling on new medication therapy, subject to statutory exceptions. The obligation is not triggered only by a patient question.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "New medication therapy triggers pharmacist counseling unless an applicable exception or patient refusal applies.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-053",
    "conceptId": "co-counsel-refusal",
    "familyId": "co-counsel-refusal",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A patient clearly declines counseling for a new prescription. What must the pharmacy do with the refusal record under Colorado Board rules? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Keep it for at least 2 years."
      },
      {
        "id": "opt2",
        "text": "Keep it for at least 6 months."
      },
      {
        "id": "opt3",
        "text": "Keep it for at least 1 year."
      },
      {
        "id": "opt4",
        "text": "No record is required if the patient verbally refuses."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A patient's refusal must be clearly documented in the corresponding record and remain readily retrievable for at least two years following the refusal.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Document a counseling refusal and retain it in a readily retrievable form for at least 2 years.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-054",
    "conceptId": "co-counsel-language",
    "familyId": "co-counsel-language",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A pharmacist cannot counsel a patient orally because of a language barrier. Which response most closely follows Colorado law? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Use alternative means necessary to assure the patient is properly counseled in a way the patient understands."
      },
      {
        "id": "opt2",
        "text": "Skip counseling if the prescription label is printed in English."
      },
      {
        "id": "opt3",
        "text": "Ask a technician to decide whether counseling is necessary."
      },
      {
        "id": "opt4",
        "text": "Dispense only after the prescriber personally counsels the patient."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires the pharmacist to use alternative means when oral counseling cannot be provided because of a language barrier.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A language barrier changes the method, not the duty, of required pharmacist counseling.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.18",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-055",
    "conceptId": "co-oral-order",
    "familyId": "co-oral-order",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: In a Colorado community pharmacy, who may receive and reduce to writing an oral prescription order, apart from the chart-order exception? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "A pharmacist or pharmacy intern"
      },
      {
        "id": "opt2",
        "text": "A pharmacist, intern, or certified technician"
      },
      {
        "id": "opt3",
        "text": "Only the pharmacist manager"
      },
      {
        "id": "opt4",
        "text": "Any employee trained on prescription intake"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Board Rule 2.00.10 provides that only a pharmacist or intern may receive and reduce to writing an oral order, apart from the chart-order exception.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Colorado oral orders: pharmacist or intern, except the specified chart-order exception.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-056",
    "conceptId": "co-oral-order",
    "familyId": "co-oral-order",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A certified pharmacy technician answers a prescriber's telephone call and the prescriber dictates a new outpatient prescription. No chart-order exception applies. Which action is legally appropriate? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "The call must be handled by a pharmacist or pharmacy intern for receipt and reduction to writing."
      },
      {
        "id": "opt2",
        "text": "The technician records it because certification permits oral-order receipt."
      },
      {
        "id": "opt3",
        "text": "The technician records it if a pharmacist later performs final verification."
      },
      {
        "id": "opt4",
        "text": "The technician may receive it only if it is noncontrolled."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado does not authorize a pharmacy technician to receive and reduce a new oral order to writing under the general rule. A pharmacist or intern must do so.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Final verification does not expand who may legally receive an oral order.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-057",
    "conceptId": "co-reference-copy",
    "familyId": "co-reference-copy",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A patient asks a Colorado pharmacist for a written copy of a prescription for personal records. Which statement is correct? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "The copy must be marked 'COPY FOR REFERENCE ONLY,' and refill authority is not included."
      },
      {
        "id": "opt2",
        "text": "The copy may include refill authority if the patient requests it."
      },
      {
        "id": "opt3",
        "text": "A written copy is prohibited unless the prescriber approves it."
      },
      {
        "id": "opt4",
        "text": "The copy becomes a valid prescription at another pharmacy if signed by the pharmacist."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A pharmacist may issue a written copy conspicuously marked 'COPY FOR REFERENCE ONLY.' No information regarding authority to refill is to be issued in that written copy.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "A Colorado prescription copy is for reference only and does not carry refill authority.",
    "authority": [
      {
        "label": "Colorado Board Rules 2.00.10 / 2.01.50-2.01.53",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-058",
    "conceptId": "co-emergency-maintenance",
    "familyId": "co-emergency-maintenance",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A Colorado pharmacist properly dispenses an emergency supply of a qualifying chronic maintenance drug without a current valid order. What notification does the Board rule require? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the practitioner of record immediately in writing with the required dispensing details."
      },
      {
        "id": "opt2",
        "text": "Notify the practitioner by the end of the next business day; oral notice is sufficient."
      },
      {
        "id": "opt3",
        "text": "Notify the Board within 72 hours."
      },
      {
        "id": "opt4",
        "text": "No notice is required if the patient has used the drug for more than six months."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Emergency chronic-maintenance dispensing requires immediate written notice to the practitioner of record.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-059",
    "conceptId": "co-vax-counsel-crosscheck",
    "familyId": "co-vax-counsel-crosscheck",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist delegates vaccine administration to a properly trained technician. Before administration, the patient asks whether a newly prescribed oral medication can be taken with the vaccine. The technician proposes to answer the medication-therapy question independently and then administer the vaccine. Which action is most appropriate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The technician may administer within the delegated vaccine role, but the pharmacist should address the medication-therapy counseling question."
      },
      {
        "id": "opt2",
        "text": "The technician may answer any medication-therapy question once trained to administer vaccines."
      },
      {
        "id": "opt3",
        "text": "The pharmacist must personally administer the vaccine whenever the patient asks any question."
      },
      {
        "id": "opt4",
        "text": "The vaccine must be cancelled because counseling and administration cannot occur in the same visit."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado may allow trained technicians to perform delegated vaccine administration, but that delegation does not convert the technician into the pharmacist for medication-therapy counseling or clinical judgment.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt3": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt4": "This option does not satisfy the controlling Colorado rule in this scenario."
    },
    "ruleToRemember": "Do not let authority to perform a physical delegated task imply authority to perform pharmacist clinical judgment.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true
  },
  {
    "id": "A2-AUDIT-060",
    "conceptId": "co-ltcf-first-dose",
    "familyId": "co-ltcf-first-dose",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Long-Term Care",
    "subtopic": "Long-Term Care",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: Under Colorado's first-dose dispensing rule, a pharmacist at a prescription drug outlet may use a duplicate LTCF chart order from another outlet to provide immediate care for a resident. What is the maximum supply described by the rule? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "72 hours"
      },
      {
        "id": "opt2",
        "text": "24 hours"
      },
      {
        "id": "opt3",
        "text": "48 hours"
      },
      {
        "id": "opt4",
        "text": "7 days"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 3.00.25 permits up to a 72-hour supply of a noncontrolled prescription drug for this specific first-dose LTCF situation, one time per order and subject to the rule's conditions.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Colorado LTCF first-dose rule: up to 72 hours, noncontrolled, one time per order, with required documentation.",
    "authority": [
      {
        "label": "Colorado Board Rules 3.00.23 / 3.00.25",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-061",
    "conceptId": "co-vax-delegation",
    "familyId": "co-vax-delegation",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A trained Colorado pharmacist wishes to delegate vaccine administration. To whom may administration be delegated under Rule 19.01.20? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "Only a trained pharmacy intern or trained pharmacy technician."
      },
      {
        "id": "opt2",
        "text": "Any pharmacy employee who has current CPR."
      },
      {
        "id": "opt3",
        "text": "Only another pharmacist."
      },
      {
        "id": "opt4",
        "text": "A medical assistant employed by the pharmacy, regardless of pharmacy credentials."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A trained pharmacist may delegate vaccine and immunization administration only to a trained pharmacy intern or pharmacy technician.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Vaccine delegation is credential- and training-specific, not merely employer-specific.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-062",
    "conceptId": "co-vax-records",
    "familyId": "co-vax-records",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: How long must a Colorado prescription drug outlet maintain the vaccine-administration records required by Rule 19.01.40 for each dose? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "3 years"
      },
      {
        "id": "opt2",
        "text": "2 years"
      },
      {
        "id": "opt3",
        "text": "5 years"
      },
      {
        "id": "opt4",
        "text": "The life of the patient"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 19.01.40 requires the listed administration information to be maintained for three years for each dose.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Colorado vaccine-administration records: 3 years.",
    "authority": [
      {
        "label": "Colorado Board Rules 19.01.20-19.01.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-063",
    "conceptId": "co-minor-prescribing-crosscheck",
    "familyId": "co-minor-prescribing-crosscheck",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A Colorado pharmacist treats an 11-year-old using the 2026 independent-prescribing pathway for a listed test-guided condition. The drug is noncontrolled and used according to FDA labeling. The parent identifies the child's primary care provider. What additional step remains important?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the primary care provider as soon as practicable consistent with privacy law."
      },
      {
        "id": "opt2",
        "text": "No follow-up is required because the patient is older than five."
      },
      {
        "id": "opt3",
        "text": "Report the encounter to DEA because a prescription was issued."
      },
      {
        "id": "opt4",
        "text": "Convert the encounter to a collaborative practice agreement after the prescription is dispensed."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For patients younger than 12 treated under the new pathway, the statute includes PCP notification as soon as practicable, or referral if no PCP is disclosed.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt3": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt4": "This option does not satisfy the controlling Colorado rule in this scenario."
    },
    "ruleToRemember": "For minor independent-prescribing scenarios, check age, condition, drug class, FDA labeling, and PCP notification/referral.",
    "authority": [
      {
        "label": "HB 26-1336 / 2026 Colorado pharmacy amendments",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "Effective August 12, 2026"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true
  },
  {
    "id": "A2-AUDIT-064",
    "conceptId": "co-cppa-counsel-crosscheck",
    "familyId": "co-cppa-counsel-crosscheck",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "A pharmacist operates under a valid collaborative pharmacy practice agreement. A patient starts a new medication therapy under the agreement and does not refuse counseling. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The existence of the collaborative agreement does not by itself eliminate the pharmacist's Colorado new-therapy counseling duty."
      },
      {
        "id": "opt2",
        "text": "A collaborative agreement automatically waives all patient counseling requirements."
      },
      {
        "id": "opt3",
        "text": "Only the collaborating prescriber may counsel on medication initiated under the agreement."
      },
      {
        "id": "opt4",
        "text": "Counseling is optional whenever the pharmacist has professional liability insurance."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A collaborative-practice agreement changes the pharmacist's authorized patient-care activities but does not itself erase a separate counseling obligation that applies to new medication therapy.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt3": "This option does not satisfy the controlling Colorado rule in this scenario.",
      "opt4": "This option does not satisfy the controlling Colorado rule in this scenario."
    },
    "ruleToRemember": "When rules overlap, satisfy each independent legal duty unless a specific exception applies.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true
  },
  {
    "id": "A2-AUDIT-065",
    "conceptId": "co-cppa-insurance",
    "familyId": "co-cppa-insurance",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: What minimum professional liability coverage does Colorado Rule 17.00.30 specify for a pharmacist entering collaborative practice? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "$1 million per incident / $3 million aggregate"
      },
      {
        "id": "opt2",
        "text": "$500,000 per incident / $1 million aggregate"
      },
      {
        "id": "opt3",
        "text": "$2 million per incident / $2 million aggregate"
      },
      {
        "id": "opt4",
        "text": "$3 million per incident / $5 million aggregate"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule states coverage of at least $1,000,000 per incident and at least $3,000,000 aggregate.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "CPPA liability minimum: $1M per incident / $3M aggregate.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  },
  {
    "id": "A2-AUDIT-066",
    "conceptId": "co-cppa-patient",
    "familyId": "co-cppa-patient",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "scenario",
    "stem": "During a Colorado pharmacy compliance review, four staff members give different conclusions about the following issue: A pharmacist wants to enter a patient-specific collaborative practice arrangement. No statewide protocol applies. Which additional relationship condition is generally required by Colorado statute/rules? Which conclusion should the pharmacist accept?",
    "answers": [
      {
        "id": "opt1",
        "text": "The collaborating prescriber must have an established relationship with the patient(s) served."
      },
      {
        "id": "opt2",
        "text": "The pharmacist and patient must have had a dispensing relationship for at least one year."
      },
      {
        "id": "opt3",
        "text": "The pharmacist must be employed by the prescriber."
      },
      {
        "id": "opt4",
        "text": "The patient must have Medicare Part D coverage."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Absent a statewide protocol, collaborative practice generally requires the physician/APRN collaborator to have an established relationship with the patient or patients served.",
    "distractorExplanations": {
      "opt2": "This option does not satisfy the controlling rule in this scenario.",
      "opt3": "This option does not satisfy the controlling rule in this scenario.",
      "opt4": "This option does not satisfy the controlling rule in this scenario."
    },
    "ruleToRemember": "Without a statewide protocol, look for the collaborating prescriber's established patient relationship.",
    "authority": [
      {
        "label": "Colorado Board Rule 17.00.30",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1"
      },
      {
        "label": "C.R.S. \u00a7 12-280-602",
        "url": "https://content.leg.colorado.gov/agencies/office-legislative-legal-services/2026-crs-titles-download",
        "citation": "2026 Title 12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacist Practice"
  }
];
