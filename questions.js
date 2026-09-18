window.APP_META = {
  "title": "Colorado MPJE Mastery",
  "version": "5.0.0",
  "lawVerifiedThrough": "2026-09-16",
  "questionCount": 120,
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
      "bankCount": 26
    },
    "2": {
      "name": "Pharmacist Practice",
      "weight": 33,
      "bankCount": 40
    },
    "3": {
      "name": "Dispensing Requirements",
      "weight": 24,
      "bankCount": 29
    },
    "4": {
      "name": "Pharmacy Operations",
      "weight": 21,
      "bankCount": 25
    }
  },
  "examSelection": {
    "1": 26,
    "2": 40,
    "3": 29,
    "4": 25
  },
  "difficultyNote": "Challenge bank emphasizes multi-step scenario/application items; exam mode hides jurisdiction and topic cues.",
  "auditWrapperQuestions": 0,
  "releaseNote": "Question wording revised to remove answer cues; see QUESTION_REVISION_NOTES.md.",
  "strictQualityBuild": true,
  "qualityGateVersion": "editorial-v5",
  "qualityAuditPassed": false,
  "qualityAuditDate": "2026-09-18"
};

window.QUESTION_BANK = [
  {
    "id": "A1-LIC-CHANGE-04",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "type": "multi",
    "stem": "A pharmacist changed residential address 35 days ago, changed legal name 18 days ago, and ceased serving as pharmacist manager this morning. Which reporting obligations are implicated now? Select ALL that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "The residential-address change is overdue under the 30-day reporting requirement."
      },
      {
        "id": "opt2",
        "text": "The legal-name change remains within the 30-day reporting period."
      },
      {
        "id": "opt3",
        "text": "The pharmacist-manager departure requires immediate written notice to the Board."
      },
      {
        "id": "opt4",
        "text": "The legal-name change is overdue because that change uses a 10-day reporting period."
      },
      {
        "id": "opt5",
        "text": "The pharmacist-manager departure may be reported within the same 30-day period as an address change."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3"
    ],
    "explanation": "Rule 4.05.00 uses different clocks: name and residential/e-mail address changes are reported within 30 days, while a pharmacist must immediately notify the Board in writing when the pharmacist ceases to be pharmacist manager.",
    "distractorExplanations": {
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Do not assume every Board notification uses the same clock.",
    "authority": [
      {
        "label": "Colorado Board Rule 4.05.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 4.05.00(a)-(c)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "subconceptId": "co-license-change-reporting",
    "nabpCompetencies": [
      "1.2"
    ]
  },
  {
    "id": "A1-IMPAIRMENT-06",
    "conceptId": "A1-IMPAIRMENT-REPORTING",
    "familyId": "A1-IMPAIRMENT-REPORTING",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 3,
    "type": "scenario",
    "stem": "During a shift, a pharmacist manager discovers that a staff pharmacist is impaired by alcohol and cannot perform duties competently. The staff pharmacist acknowledges an alcohol-use disorder and asks whether a confidential agreement can be used instead of the peer-health program. Which response best accounts for both pharmacists\u2019 obligations?",
    "answers": [
      {
        "id": "opt1",
        "text": "The manager reports the impairment immediately, and the pharmacist seeks assistance through the Diversion Program."
      },
      {
        "id": "opt2",
        "text": "The manager reports within 30 days, and the pharmacist may proceed through a confidential-agreement pathway."
      },
      {
        "id": "opt3",
        "text": "The manager reports immediately, and the pharmacist may use a confidential agreement after stopping clinical duties."
      },
      {
        "id": "opt4",
        "text": "The manager reports within 10 days, and the Diversion Program is used only after a Board referral."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 7.00.10 requires the pharmacist manager to report a pharmacist impaired by alcohol or drugs immediately upon discovery. Rule 24.00.50 directs a pharmacist or intern with a substance-use disorder or habitual/excessive use or abuse of alcohol or specified drugs to seek assistance from the Diversion Program and states that such individuals are not eligible for the cited confidential-agreement pathway.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Impairment at work triggers immediate manager reporting; substance-use disorder is routed to the Diversion Program.",
    "authority": [
      {
        "label": "Colorado Board Rules 7.00.10(c) and 24.00.50",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rules 7.00.10(c), 24.00.50"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "subconceptId": "co-impairment-dual-reporting",
    "nabpCompetencies": [
      "1.2"
    ]
  },
  {
    "id": "A1-LIC-REINSTATE-02",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A pharmacist applies to reactivate a Colorado license after 30 months of inactivity. Which combination meets the continuing-education and examination requirements? Assume other application requirements are met.",
    "answers": [
      {
        "id": "opt1",
        "text": "30 CE hours, including 24 in the preceding 24 months, plus the jurisprudence examination."
      },
      {
        "id": "opt2",
        "text": "24 CE hours in the preceding 24 months, plus the jurisprudence examination."
      },
      {
        "id": "opt3",
        "text": "30 CE hours, including 24 in the preceding 24 months, without an examination."
      },
      {
        "id": "opt4",
        "text": "30 CE hours during inactivity, plus both the jurisprudence and initial pharmacist examinations."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For a license inactive or expired more than 24 months, the pharmacist must submit one CE hour for each month inactive or expired, with 24 of those hours completed in the prior 24 months, and pass the approved jurisprudence examination. Thirty months therefore requires 30 CE hours total, which the facts supply.",
    "distractorExplanations": {
      "opt2": "For a license inactive or expired more than 24 months, the pharmacist must submit one CE hour for each month inactive or expired, with 24 of those hours completed in the prior 24 months, and pass the approved jurisprudence examination. Thirty months therefore requires 30 CE hours total, which the facts supply.",
      "opt3": "For a license inactive or expired more than 24 months, the pharmacist must submit one CE hour for each month inactive or expired, with 24 of those hours completed in the prior 24 months, and pass the approved jurisprudence examination. Thirty months therefore requires 30 CE hours total, which the facts supply.",
      "opt4": "For a license inactive or expired more than 24 months, the pharmacist must submit one CE hour for each month inactive or expired, with 24 of those hours completed in the prior 24 months, and pass the approved jurisprudence examination. Thirty months therefore requires 30 CE hours total, which the facts supply."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: 24 CE hours in the preceding 24 months, plus the jurisprudence examination.",
      "opt3": "Incorrect requirement or application: 30 CE hours, including 24 in the preceding 24 months, without an examination.",
      "opt4": "Incorrect requirement or application: 30 CE hours during inactivity, plus both the jurisprudence and initial pharmacist examinations."
    },
    "ruleToRemember": "Over 24 months inactive/expired: one CE hour per month, 24 recent hours, plus the jurisprudence examination.",
    "authority": [
      {
        "label": "Colorado Board Rule 4.03.00(a)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 4.03.00(a)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-license-reinstatement-over24",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A1-LIC-REINSTATE-03",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A pharmacist applies to reactivate a license after 18 months of inactivity. Which CE and examination combination applies under the ordinary reinstatement rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "24 CE hours within the preceding 24 months; no jurisprudence examination under this pathway."
      },
      {
        "id": "opt2",
        "text": "18 CE hours during inactivity; a jurisprudence examination under this pathway."
      },
      {
        "id": "opt3",
        "text": "24 CE hours within the preceding 24 months; a jurisprudence examination under this pathway."
      },
      {
        "id": "opt4",
        "text": "18 CE hours during inactivity; no jurisprudence examination under this pathway."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For inactivity or expiration of less than 24 months, Rule 4.03.00(b) requires the application and fee plus 24 hours of CE completed in the preceding 24 months. The jurisprudence examination appears in the over-24-month pathway.",
    "distractorExplanations": {
      "opt2": "For inactivity or expiration of less than 24 months, Rule 4.03.00(b) requires the application and fee plus 24 hours of CE completed in the preceding 24 months. The jurisprudence examination appears in the over-24-month pathway.",
      "opt3": "For inactivity or expiration of less than 24 months, Rule 4.03.00(b) requires the application and fee plus 24 hours of CE completed in the preceding 24 months. The jurisprudence examination appears in the over-24-month pathway.",
      "opt4": "For inactivity or expiration of less than 24 months, Rule 4.03.00(b) requires the application and fee plus 24 hours of CE completed in the preceding 24 months. The jurisprudence examination appears in the over-24-month pathway."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: 18 CE hours during inactivity; a jurisprudence examination under this pathway.",
      "opt3": "Incorrect requirement or application: 24 CE hours within the preceding 24 months; a jurisprudence examination under this pathway.",
      "opt4": "Incorrect requirement or application: 18 CE hours during inactivity; no jurisprudence examination under this pathway."
    },
    "ruleToRemember": "Under 24 months inactive/expired: application, fee, and 24 recent CE hours under the cited rule.",
    "authority": [
      {
        "label": "Colorado Board Rule 4.03.00(b)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 4.03.00(b)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-license-reinstatement-under24",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A1-LIC-TRANSFER-01",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A pharmacist applies for Colorado licensure by transfer using an active license from State A. The pharmacist also holds a current license in State B that is subject to an active disciplinary order. The applicant otherwise meets Colorado transfer requirements. Which conclusion best fits the Board rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The State B discipline prevents the applicant from meeting Colorado\u2019s good-standing requirement."
      },
      {
        "id": "opt2",
        "text": "The State B discipline is irrelevant because the transfer application relies on the State A license."
      },
      {
        "id": "opt3",
        "text": "The application qualifies if State A confirms at least one year of licensed pharmacy practice."
      },
      {
        "id": "opt4",
        "text": "The application qualifies if the State B order does not restrict dispensing within Colorado."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires the license used for transfer to be active, current, and in good standing, and all pharmacist licenses held in other states must also be in good standing. The rule defines good standing as not being subject to active disciplinary action in any state.",
    "distractorExplanations": {
      "opt2": "Colorado expressly considers all pharmacist licenses held by the applicant.",
      "opt3": "The experience requirement does not replace the separate good-standing requirement.",
      "opt4": "The rule turns on active discipline, not whether that order restricts Colorado dispensing."
    },
    "misconceptionTested": {
      "opt2": "Assumes only the transfer-state license is evaluated.",
      "opt3": "Treats one satisfied transfer criterion as replacing another.",
      "opt4": "Narrows good standing to discipline affecting Colorado practice."
    },
    "ruleToRemember": "For license transfer, active discipline on any pharmacist license defeats the rule\u2019s good-standing requirement.",
    "authority": [
      {
        "label": "Colorado Board Rule 4.00.40(f)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 4.00.40(f)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-license-transfer-good-standing",
    "nabpCompetencies": [
      "1.2"
    ]
  },
  {
    "id": "A1-FPV-02",
    "conceptId": "A1-DELEGATION-SCOPE",
    "familyId": "A1-DELEGATION-SCOPE",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 1,
    "type": "scenario",
    "stem": "Under the 2026 statutory final-product-verification framework, which task must remain with the pharmacist when processing a noncontrolled prescription?",
    "answers": [
      {
        "id": "opt1",
        "text": "Assessing whether the prescribed dose is appropriate for the patient."
      },
      {
        "id": "opt2",
        "text": "Comparing the prepared product with the pharmacist-reviewed order."
      },
      {
        "id": "opt3",
        "text": "Checking the strength on a prepared package against the reviewed order."
      },
      {
        "id": "opt4",
        "text": "Checking the quantity in a prepared package against the reviewed order."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
      "opt3": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
      "opt4": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan."
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-2026-fpv-advanced",
    "nabpCompetencies": [
      "1.1"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Comparing the prepared product with the pharmacist-reviewed order.",
      "opt3": "Incorrect requirement or application: Checking the strength on a prepared package against the reviewed order.",
      "opt4": "Incorrect requirement or application: Checking the quantity in a prepared package against the reviewed order."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-PIC-01",
    "conceptId": "A1-PIC-TRANSITION",
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
    "familyId": "A1-PIC-TRANSITION",
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "subconceptId": "co-manager-change",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ]
  },
  {
    "id": "A1-PIC-01",
    "conceptId": "A1-PIC-TRANSITION",
    "familyId": "A1-PIC-TRANSITION",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A former pharmacist manager leaves April 1. A replacement begins April 4. Which pair gives the ordinary deadlines for the owner\u2019s registration-transfer application and the incoming manager\u2019s inventory?",
    "answers": [
      {
        "id": "opt1",
        "text": "Application within thirty days of April 1; inventory within seventy-two hours of April 4."
      },
      {
        "id": "opt2",
        "text": "Application within thirty days of April 4; inventory within seventy-two hours of April 1."
      },
      {
        "id": "opt3",
        "text": "Application within seventy-two hours of April 1; inventory within thirty days of April 4."
      },
      {
        "id": "opt4",
        "text": "Application within seventy-two hours of April 4; inventory within thirty days of April 1."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
    "distractorExplanations": {
      "opt2": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
      "opt3": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity.",
      "opt4": "Manager-change rules contain separate clocks: the owner has 30 days for the registration-transfer application, while the new manager or designee has 72 hours for the controlled-substance inventory, taken as of opening or close of business activity."
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-manager-integrated",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Application within thirty days of April 4; inventory within seventy-two hours of April 1.",
      "opt3": "Incorrect requirement or application: Application within seventy-two hours of April 1; inventory within thirty days of April 4.",
      "opt4": "Incorrect requirement or application: Application within seventy-two hours of April 4; inventory within thirty days of April 1."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A1-CERT-02",
    "conceptId": "A1-TECH-CREDENTIALS",
    "familyId": "A1-TECH-CREDENTIALS",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 1,
    "type": "scenario",
    "stem": "A provisional technician seeks a hardship extension. The request is submitted 75 days before expiration. What extension may the Board grant under the rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "One nonrenewable extension of nine months."
      },
      {
        "id": "opt2",
        "text": "One nonrenewable extension of six months."
      },
      {
        "id": "opt3",
        "text": "One nonrenewable extension of twelve months."
      },
      {
        "id": "opt4",
        "text": "Two successive extensions of six months."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
    "distractorExplanations": {
      "opt2": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
      "opt3": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission.",
      "opt4": "Colorado distinguishes provisional certification from standard certification and defines the qualifying national-certification pathway. The hardship extension is one-time, nine months, and requires advance submission."
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-tech-cert-advanced",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: One nonrenewable extension of six months.",
      "opt3": "Incorrect requirement or application: One nonrenewable extension of twelve months.",
      "opt4": "Incorrect requirement or application: Two successive extensions of six months."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-TECH-02",
    "conceptId": "A1-TECH-STAFFING",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 1,
    "type": "scenario",
    "stem": "Four pharmacy technicians are on duty under the general Colorado supervision-ratio statute. Which staffing statement satisfies the certification mix requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "At least three of the four technicians must be fully Board-certified."
      },
      {
        "id": "opt2",
        "text": "At least two of the four technicians must be fully Board-certified."
      },
      {
        "id": "opt3",
        "text": "All four technicians must be fully Board-certified while three or more are on duty."
      },
      {
        "id": "opt4",
        "text": "Certification is measured across interns and technicians together rather than among technicians on duty."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When three or more pharmacy technicians are on duty, the majority must be fully certified by the Board. For four technicians, a majority means at least three.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
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
    "familyId": "A1-TECH-STAFFING",
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-tech-majority",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "A1-RATIO-CFG-1",
    "conceptId": "A1-TECH-STAFFING",
    "familyId": "A1-TECH-STAFFING",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 2,
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "subconceptId": "co-tech-ratio-advanced",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "A1-FPV-03",
    "conceptId": "A1-DELEGATION-SCOPE",
    "familyId": "A1-DELEGATION-SCOPE",
    "competencyArea": 1,
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 1,
    "type": "scenario",
    "stem": "A pharmacy proposes technician final product verification for Schedule IV prescriptions. Which is most accurate under the 2026 statutory delegation provision?",
    "answers": [
      {
        "id": "opt1",
        "text": "The cited FPV delegation pathway does not extend to controlled-substance orders."
      },
      {
        "id": "opt2",
        "text": "The pathway may be used for Schedule III-V orders after pharmacist clinical review."
      },
      {
        "id": "opt3",
        "text": "The pathway may be used for controlled orders when barcode verification is incorporated."
      },
      {
        "id": "opt4",
        "text": "The pathway may be used for controlled unit-dose orders when a pharmacist remains immediately available."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 Colorado statute permits specified final-product-verification delegation for noncontrolled orders after pharmacist clinical review, while preserving pharmacist judgment and requiring a continuous quality-assessment system and program plan.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-2026-fpv-advanced",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "A2-CONF-02",
    "conceptId": "A2-CONFIDENTIALITY",
    "familyId": "A2-CONFIDENTIALITY",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Confidentiality",
    "subtopic": "Confidentiality",
    "difficulty": 5,
    "type": "multi",
    "stem": "A pharmacist is evaluating requests for a patient\u2019s prescription information. Which recipients are expressly within categories to whom disclosure may be permitted under Rule 1.00.16, assuming the stated role is genuine and other applicable law is satisfied? Select ALL that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "A third-party entity responsible for payment of the patient's prescription claim."
      },
      {
        "id": "opt2",
        "text": "A pharmacist acquiring and maintaining the pharmacy's prescription records."
      },
      {
        "id": "opt3",
        "text": "A neighbor who transports the patient but has no patient authorization."
      },
      {
        "id": "opt4",
        "text": "A spouse who pays the patient's premiums but has no representative authority."
      },
      {
        "id": "opt5",
        "text": "An employer requesting the drug name for a routine attendance investigation."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2"
    ],
    "explanation": "Rule 1.00.16 expressly allows disclosure to pharmacy technicians, authorized law enforcement, another pharmacist acquiring and maintaining records, third-party entities responsible for payment, and other parties permitted by federal privacy law. A helpful neighbor without authorization is not included merely by habit.",
    "distractorExplanations": {
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Know permitted-recipient categories, but distinguish a person\u2019s role from actual authorization.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.16",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.16"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "subconceptId": "co-confidentiality-permitted-disclosure",
    "nabpCompetencies": [
      "2.5"
    ]
  },
  {
    "id": "A2-CONF-01",
    "conceptId": "A2-CONFIDENTIALITY",
    "familyId": "A2-CONFIDENTIALITY",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Confidentiality",
    "subtopic": "Confidentiality",
    "difficulty": 4,
    "type": "scenario",
    "stem": "An adult patient has expressly instructed the pharmacy not to disclose prescription information to their spouse. The spouse requests the medication name to reconcile an insurance claim. No independent disclosure authority applies. Which action is permitted?",
    "answers": [
      {
        "id": "opt1",
        "text": "Withhold the medication name pending patient authorization or another lawful basis."
      },
      {
        "id": "opt2",
        "text": "Release the medication name after verifying that the spouse is the policyholder."
      },
      {
        "id": "opt3",
        "text": "Release the medication name after matching the patient\u2019s date of birth and address."
      },
      {
        "id": "opt4",
        "text": "Release the medication name after limiting the response to the claim in dispute."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Payment of insurance premiums and identity verification do not override an express patient restriction or independently establish a lawful disclosure basis. Rule 1.00.16 limits recipients, and applicable federal privacy law also governs.",
    "distractorExplanations": {
      "opt2": "Payment of insurance premiums and identity verification do not override an express patient restriction or independently establish a lawful disclosure basis. Rule 1.00.16 limits recipients, and applicable federal privacy law also governs.",
      "opt3": "Payment of insurance premiums and identity verification do not override an express patient restriction or independently establish a lawful disclosure basis. Rule 1.00.16 limits recipients, and applicable federal privacy law also governs.",
      "opt4": "Payment of insurance premiums and identity verification do not override an express patient restriction or independently establish a lawful disclosure basis. Rule 1.00.16 limits recipients, and applicable federal privacy law also governs."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Release the medication name after verifying that the spouse is the policyholder.",
      "opt3": "Incorrect requirement or application: Release the medication name after matching the patient\u2019s date of birth and address.",
      "opt4": "Incorrect requirement or application: Release the medication name after limiting the response to the claim in dispute."
    },
    "ruleToRemember": "Payment of insurance premiums and identity verification do not override an express patient restriction or independently establish a lawful disclosure basis. Rule 1.00.16 limits recipients, and applicable federal privacy law also governs.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.16",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.16"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-confidentiality-authorized-recipient",
    "nabpCompetencies": [
      "2.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A2-EYEDROP-06",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 1,
    "type": "scenario",
    "stem": "At the original dispensing of a child\u2019s prescription eye drops, a parent requests another bottle for school. The prescription authorizes sufficient quantity. What must the original order state for Colorado\u2019s special additional-bottle provision?",
    "answers": [
      {
        "id": "opt1",
        "text": "That an additional bottle is needed for use at school."
      },
      {
        "id": "opt2",
        "text": "That the medication will be used for at least thirty days."
      },
      {
        "id": "opt3",
        "text": "That the parent may select the number of bottles dispensed."
      },
      {
        "id": "opt4",
        "text": "That the child is unable to self-administer the medication."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The special eye-drop rule requires several conditions together, including coverage, request at original dispensing, an original order stating that an additional bottle is needed for day care, school, or an adult day program, the one-additional-bottle-per-three-months limit, and compliance with total prescribed quantity.",
    "distractorExplanations": {
      "opt2": "The special eye-drop rule requires several conditions together, including coverage, request at original dispensing, an original order stating that an additional bottle is needed for day care, school, or an adult day program, the one-additional-bottle-per-three-months limit, and compliance with total prescribed quantity.",
      "opt3": "The special eye-drop rule requires several conditions together, including coverage, request at original dispensing, an original order stating that an additional bottle is needed for day care, school, or an adult day program, the one-additional-bottle-per-three-months limit, and compliance with total prescribed quantity.",
      "opt4": "The special eye-drop rule requires several conditions together, including coverage, request at original dispensing, an original order stating that an additional bottle is needed for day care, school, or an adult day program, the one-additional-bottle-per-three-months limit, and compliance with total prescribed quantity."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: That the medication will be used for at least thirty days.",
      "opt3": "Incorrect requirement or application: That the parent may select the number of bottles dispensed.",
      "opt4": "Incorrect requirement or application: That the child is unable to self-administer the medication."
    },
    "ruleToRemember": "The extra eye-drop bottle is a conditional exception; some satisfied conditions do not replace the required order statement.",
    "authority": [
      {
        "label": "Colorado Board Rule 3.00.20(b)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 3.00.20(b)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-eyedrop-additional-bottle",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A2-ADAPT-10",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 2,
    "type": "scenario",
    "stem": "A pharmacist changes the dosage form under Colorado\u2019s minor-adaptation authority. In addition to recording the adapted order, which information must document the adaptation?",
    "answers": [
      {
        "id": "opt1",
        "text": "Date of adaptation and identity of the adapting pharmacist."
      },
      {
        "id": "opt2",
        "text": "Date of dispensing and identity of the data-entry technician."
      },
      {
        "id": "opt3",
        "text": "Date of prescriber notification and identity of the office employee contacted."
      },
      {
        "id": "opt4",
        "text": "Date of patient consent and identity of the final product verifier."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 2.01.10(f) requires minor adaptations made under the statutory authority to detail the date and identity of the pharmacist making the adaptation.",
    "distractorExplanations": {
      "opt2": "Rule 2.01.10(f) requires minor adaptations made under the statutory authority to detail the date and identity of the pharmacist making the adaptation.",
      "opt3": "Rule 2.01.10(f) requires minor adaptations made under the statutory authority to detail the date and identity of the pharmacist making the adaptation.",
      "opt4": "Rule 2.01.10(f) requires minor adaptations made under the statutory authority to detail the date and identity of the pharmacist making the adaptation."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Date of dispensing and identity of the data-entry technician.",
      "opt3": "Incorrect requirement or application: Date of prescriber notification and identity of the office employee contacted.",
      "opt4": "Incorrect requirement or application: Date of patient consent and identity of the final product verifier."
    },
    "ruleToRemember": "A lawful minor adaptation still requires traceable documentation of when it occurred and who made it.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.10(f)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 2.01.10(f)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 1,
    "reasoningLevel": 2,
    "subconceptId": "co-minor-adaptation-documentation",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A2-OFFICEUSE-08",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 1,
    "type": "scenario",
    "stem": "A physician sends a nonpatient-specific order for commercially manufactured amoxicillin to keep in the clinic for future patients. A veterinarian separately requests a compounded prescription drug for office stock under the statutory veterinary pathway. Assuming the veterinary request otherwise qualifies, which decision best fits Rule 3.00.20(d)?",
    "answers": [
      {
        "id": "opt1",
        "text": "Decline the physician office-use order and evaluate the veterinary compounded office-stock request under its separate pathway."
      },
      {
        "id": "opt2",
        "text": "Fill the physician order as clinic stock and evaluate the veterinary request under the same general office-use standard."
      },
      {
        "id": "opt3",
        "text": "Decline both orders because a named patient is required for the physician order and the veterinary office-stock pathway."
      },
      {
        "id": "opt4",
        "text": "Fill the veterinary request only after converting it to a patient-specific order and decline the physician office-use order."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 3.00.20(d) states that a pharmacist may not dispense a prescription drug or controlled substance to a practitioner on an order without a specific patient and that an \u201coffice use\u201d prescription order is not valid. It separately recognizes compounded prescription drugs distributed to veterinarians for \u201coffice stock\u201d when the statutory and rule requirements are met.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "General office-use orders without a named patient are invalid; veterinary compounded office stock has a distinct pathway.",
    "authority": [
      {
        "label": "Colorado Board Rule 3.00.20(d)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 3.00.20(d)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-office-use-veterinary-exception",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ]
  },
  {
    "id": "A2-CLARIFY-13",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 2,
    "type": "scenario",
    "stem": "A technician documents a permissible prescription clarification. Beyond the clarification itself and the responsible employee\u2019s unique identifier, which pair must be recorded?",
    "answers": [
      {
        "id": "opt1",
        "text": "Date contacted and name of the person conveying the clarification."
      },
      {
        "id": "opt2",
        "text": "Date dispensed and name of the person collecting the prescription."
      },
      {
        "id": "opt3",
        "text": "Date contacted and license number of the prescribing practitioner."
      },
      {
        "id": "opt4",
        "text": "Date dispensed and identifier of the pharmacist releasing the product."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 2.01.20(a) requires any change or clarification to be documented with the initials or unique identifier of the responsible pharmacist, intern, or technician, the date contacted, and the name of the individual conveying the change or clarification.",
    "distractorExplanations": {
      "opt2": "Rule 2.01.20(a) requires any change or clarification to be documented with the initials or unique identifier of the responsible pharmacist, intern, or technician, the date contacted, and the name of the individual conveying the change or clarification.",
      "opt3": "Rule 2.01.20(a) requires any change or clarification to be documented with the initials or unique identifier of the responsible pharmacist, intern, or technician, the date contacted, and the name of the individual conveying the change or clarification.",
      "opt4": "Rule 2.01.20(a) requires any change or clarification to be documented with the initials or unique identifier of the responsible pharmacist, intern, or technician, the date contacted, and the name of the individual conveying the change or clarification."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Date dispensed and name of the person collecting the prescription.",
      "opt3": "Incorrect requirement or application: Date contacted and license number of the prescribing practitioner.",
      "opt4": "Incorrect requirement or application: Date dispensed and identifier of the pharmacist releasing the product."
    },
    "ruleToRemember": "A prescription clarification needs a traceable who/when audit trail; later final verification does not replace it.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.20(a)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 2.01.20(a)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 1,
    "reasoningLevel": 2,
    "subconceptId": "co-order-change-clarification-record",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A2-DISCLOSE-03",
    "conceptId": "A2-PROFESSIONAL-CONDUCT",
    "familyId": "A2-PROFESSIONAL-CONDUCT",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Professional Conduct",
    "subtopic": "Professional Conduct",
    "difficulty": 2,
    "type": "scenario",
    "stem": "On Monday, a patient schedules a Friday vaccination with a pharmacist subject to the covered sexual-misconduct disclosure requirement. No timing exception applies. When is the written disclosure due?",
    "answers": [
      {
        "id": "opt1",
        "text": "Monday, when the appointment is scheduled."
      },
      {
        "id": "opt2",
        "text": "Thursday, at least one day before the appointment."
      },
      {
        "id": "opt3",
        "text": "Friday, before vaccine screening begins."
      },
      {
        "id": "opt4",
        "text": "Friday, before vaccine administration begins."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.26 requires disclosure the same day a patient schedules a professional-services appointment. If an appointment is scheduled the same day services will occur, disclosure must occur before treatment. Administration of drugs and vaccines is included within professional services.",
    "distractorExplanations": {
      "opt2": "Rule 1.00.26 requires disclosure the same day a patient schedules a professional-services appointment. If an appointment is scheduled the same day services will occur, disclosure must occur before treatment. Administration of drugs and vaccines is included within professional services.",
      "opt3": "Rule 1.00.26 requires disclosure the same day a patient schedules a professional-services appointment. If an appointment is scheduled the same day services will occur, disclosure must occur before treatment. Administration of drugs and vaccines is included within professional services.",
      "opt4": "Rule 1.00.26 requires disclosure the same day a patient schedules a professional-services appointment. If an appointment is scheduled the same day services will occur, disclosure must occur before treatment. Administration of drugs and vaccines is included within professional services."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Thursday, at least one day before the appointment.",
      "opt3": "Incorrect requirement or application: Friday, before vaccine screening begins.",
      "opt4": "Incorrect requirement or application: Friday, before vaccine administration begins."
    },
    "ruleToRemember": "For covered professional services, disclosure timing begins when the appointment is scheduled.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.26",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.26(B)-(C)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 1,
    "reasoningLevel": 2,
    "subconceptId": "co-professional-services-disclosure-timing",
    "nabpCompetencies": [
      "2.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A2-SUB-11",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 4,
    "type": "scenario",
    "stem": "For an equivalent-product substitution, the record identifies the prescribed and dispensed drugs and the substitution date. Which additional identifier satisfies Colorado\u2019s product-source documentation requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "Distributor name as shown on the package, or the dispensed product\u2019s NDC."
      },
      {
        "id": "opt2",
        "text": "Manufacturer lot number, or the dispensing pharmacy\u2019s stock-item number."
      },
      {
        "id": "opt3",
        "text": "Wholesaler invoice number, or the dispensed product\u2019s manufacturer lot number."
      },
      {
        "id": "opt4",
        "text": "Distributor DEA number, or the prescribing practitioner\u2019s product identifier."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When a substitution is made, Rule 2.01.20 requires the names of the prescribed and actually dispensed drugs and the date, plus the distributor name as it appears on the package or the NDC number.",
    "distractorExplanations": {
      "opt2": "When a substitution is made, Rule 2.01.20 requires the names of the prescribed and actually dispensed drugs and the date, plus the distributor name as it appears on the package or the NDC number.",
      "opt3": "When a substitution is made, Rule 2.01.20 requires the names of the prescribed and actually dispensed drugs and the date, plus the distributor name as it appears on the package or the NDC number.",
      "opt4": "When a substitution is made, Rule 2.01.20 requires the names of the prescribed and actually dispensed drugs and the date, plus the distributor name as it appears on the package or the NDC number."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Manufacturer lot number, or the dispensing pharmacy\u2019s stock-item number.",
      "opt3": "Incorrect requirement or application: Wholesaler invoice number, or the dispensed product\u2019s manufacturer lot number.",
      "opt4": "Incorrect requirement or application: Distributor DEA number, or the prescribing practitioner\u2019s product identifier."
    },
    "ruleToRemember": "Substitution documentation identifies both what changed and the source/product identifier of what was dispensed.",
    "authority": [
      {
        "label": "Colorado Board Rule 2.01.20(b)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 2.01.20(b)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-substitution-record",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-CPP-01",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which are general pharmacist qualifications for a Colorado collaborative pharmacy practice agreement? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Holding a current Colorado pharmacist license."
      },
      {
        "id": "opt2",
        "text": "Being engaged in pharmacy practice."
      },
      {
        "id": "opt3",
        "text": "Holding a PharmD or having at least five years of licensed pharmacist experience."
      },
      {
        "id": "opt4",
        "text": "Holding a PharmD and having at least five years of licensed pharmacist experience."
      },
      {
        "id": "opt5",
        "text": "Completing an accredited residency regardless of the collaborative service offered."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3"
    ],
    "explanation": "Rule 17.00.30 includes current Colorado licensure, active pharmacy practice, PharmD or at least five years of licensed-pharmacist experience, and adequate professional liability insurance, among other requirements.",
    "distractorExplanations": {
      "opt4": "Rule 17.00.30 includes current Colorado licensure, active pharmacy practice, PharmD or at least five years of licensed-pharmacist experience, and adequate professional liability insurance, among other requirements.",
      "opt5": "Rule 17.00.30 includes current Colorado licensure, active pharmacy practice, PharmD or at least five years of licensed-pharmacist experience, and adequate professional liability insurance, among other requirements."
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
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt4": "Incorrect requirement or application: Holding a PharmD and having at least five years of licensed pharmacist experience.",
      "opt5": "Incorrect requirement or application: Completing an accredited residency regardless of the collaborative service offered."
    },
    "subconceptId": "co-cppa-qual",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-EMERG-02",
    "conceptId": "A2-EMERGENCY-LTCF",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which information must the written practitioner notice for a Colorado emergency chronic-maintenance supply contain? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Dispensing pharmacy identifying and contact information."
      },
      {
        "id": "opt2",
        "text": "Drug name, strength, dosage form, directions, and quantity."
      },
      {
        "id": "opt3",
        "text": "Date of the practitioner\u2019s most recent examination of the patient."
      },
      {
        "id": "opt4",
        "text": "Date on which the original prescription first became invalid."
      },
      {
        "id": "opt5",
        "text": "Results of the pharmacist\u2019s most recent medication reconciliation."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2"
    ],
    "explanation": "Rule 3.00.23 lists pharmacy identifiers/contact details, medication details, patient name and date of birth, and emergency-dispensing date. The three proposed clinical-history dates/results are not enumerated notice fields.",
    "distractorExplanations": {
      "opt3": "Rule 3.00.23 lists pharmacy identifiers/contact details, medication details, patient name and date of birth, and emergency-dispensing date. The three proposed clinical-history dates/results are not enumerated notice fields.",
      "opt4": "Rule 3.00.23 lists pharmacy identifiers/contact details, medication details, patient name and date of birth, and emergency-dispensing date. The three proposed clinical-history dates/results are not enumerated notice fields.",
      "opt5": "Rule 3.00.23 lists pharmacy identifiers/contact details, medication details, patient name and date of birth, and emergency-dispensing date. The three proposed clinical-history dates/results are not enumerated notice fields."
    },
    "ruleToRemember": "Rule 3.00.23 lists pharmacy identifiers/contact details, medication details, patient name and date of birth, and emergency-dispensing date. The three proposed clinical-history dates/results are not enumerated notice fields.",
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
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt3": "Incorrect requirement or application: Date of the practitioner\u2019s most recent examination of the patient.",
      "opt4": "Incorrect requirement or application: Date on which the original prescription first became invalid.",
      "opt5": "Incorrect requirement or application: Results of the pharmacist\u2019s most recent medication reconciliation."
    },
    "subconceptId": "co-emergency-maintenance",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-VAX-03",
    "conceptId": "A2-IMMUNIZATION",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which items are specifically required in Colorado\u2019s vaccine-administration record? Select all that apply.",
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
        "text": "Signed informed consent for the administration."
      },
      {
        "id": "opt4",
        "text": "Date the vaccine information statement was provided."
      },
      {
        "id": "opt5",
        "text": "Signature of the patient\u2019s primary care provider approving that dose."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3",
      "opt4"
    ],
    "explanation": "Rule 19.01.40 requires the first four items. It does not require the primary care provider\u2019s approval signature for each dose.",
    "distractorExplanations": {
      "opt5": "Rule 19.01.40 requires the first four items. It does not require the primary care provider\u2019s approval signature for each dose."
    },
    "ruleToRemember": "Rule 19.01.40 requires the first four items. It does not require the primary care provider\u2019s approval signature for each dose.",
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
    "familyId": "A2-IMMUNIZATION",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt5": "Incorrect requirement or application: Signature of the patient\u2019s primary care provider approving that dose."
    },
    "subconceptId": "co-vax-records",
    "nabpCompetencies": [
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-COUNSEL-02",
    "conceptId": "A2-COUNSELING",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 1,
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
    "familyId": "A2-COUNSELING",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-counsel-refusal",
    "nabpCompetencies": [
      "2.3"
    ]
  },
  {
    "id": "CO-CPP-02",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 1,
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
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-cppa-insurance",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ]
  },
  {
    "id": "A2-CPPA-03",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 2,
    "type": "scenario",
    "stem": "A pharmacist and prescriber establish a collaborative practice arrangement. Which process is expressly required as a general qualification under Rule 17.00.30?",
    "answers": [
      {
        "id": "opt1",
        "text": "Communication between the parties and documentation of medical-record changes."
      },
      {
        "id": "opt2",
        "text": "A face-to-face case conference between the parties every calendar month."
      },
      {
        "id": "opt3",
        "text": "Prescriber countersignature of each medication change before implementation."
      },
      {
        "id": "opt4",
        "text": "A new patient-specific written consent before each dose adjustment."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 17.00.30(a)(5) requires a process for prescriber-pharmacist communication and documentation of changes to the patient\u2019s medical record. The other choices impose specific processes that this general provision does not require.",
    "distractorExplanations": {
      "opt2": "Rule 17.00.30(a)(5) requires a process for prescriber-pharmacist communication and documentation of changes to the patient\u2019s medical record. The other choices impose specific processes that this general provision does not require.",
      "opt3": "Rule 17.00.30(a)(5) requires a process for prescriber-pharmacist communication and documentation of changes to the patient\u2019s medical record. The other choices impose specific processes that this general provision does not require.",
      "opt4": "Rule 17.00.30(a)(5) requires a process for prescriber-pharmacist communication and documentation of changes to the patient\u2019s medical record. The other choices impose specific processes that this general provision does not require."
    },
    "ruleToRemember": "Rule 17.00.30(a)(5) requires a process for prescriber-pharmacist communication and documentation of changes to the patient\u2019s medical record. The other choices impose specific processes that this general provision does not require.",
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
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A face-to-face case conference between the parties every calendar month.",
      "opt3": "Incorrect requirement or application: Prescriber countersignature of each medication change before implementation.",
      "opt4": "Incorrect requirement or application: A new patient-specific written consent before each dose adjustment."
    },
    "subconceptId": "co-cppa-integrated",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-LTCF-01",
    "conceptId": "A2-EMERGENCY-LTCF",
    "jurisdiction": "Colorado",
    "topic": "Long-Term Care",
    "subtopic": "Long-Term Care",
    "difficulty": 1,
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
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-ltcf-first-dose",
    "nabpCompetencies": [
      "2.1"
    ]
  },
  {
    "id": "A2-CPPA-04",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyArea": 2,
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 1,
    "type": "scenario",
    "stem": "For a collaborative practice agreement outside the statewide-protocol pathway, which patient relationship is required of the collaborating prescriber?",
    "answers": [
      {
        "id": "opt1",
        "text": "An established relationship with the patients served under the agreement."
      },
      {
        "id": "opt2",
        "text": "A referral arrangement with the pharmacy dispensing under the agreement."
      },
      {
        "id": "opt3",
        "text": "An employment relationship with the pharmacist providing the service."
      },
      {
        "id": "opt4",
        "text": "A consulting relationship with the facility receiving the service."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
      "opt3": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
      "opt4": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation."
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
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-cppa-integrated",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A referral arrangement with the pharmacy dispensing under the agreement.",
      "opt3": "Incorrect requirement or application: An employment relationship with the pharmacist providing the service.",
      "opt4": "Incorrect requirement or application: A consulting relationship with the facility receiving the service."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-EMERG-01",
    "conceptId": "A2-EMERGENCY-LTCF",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 1,
    "type": "scenario",
    "stem": "A pharmacist dispenses a qualifying emergency chronic-maintenance supply. Which practitioner-notification schedule and format does Colorado require?",
    "answers": [
      {
        "id": "opt1",
        "text": "Immediately, in writing."
      },
      {
        "id": "opt2",
        "text": "By the next business day, in writing."
      },
      {
        "id": "opt3",
        "text": "Within seventy-two hours, orally or in writing."
      },
      {
        "id": "opt4",
        "text": "Within seven calendar days, orally or in writing."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details.",
    "distractorExplanations": {
      "opt2": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details.",
      "opt3": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details.",
      "opt4": "When emergency dispensing occurs under Rule 3.00.23, the dispensing pharmacist or designee must immediately notify the practitioner of record in writing with specified details."
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
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-emergency-maintenance",
    "nabpCompetencies": [
      "2.1"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: By the next business day, in writing.",
      "opt3": "Incorrect requirement or application: Within seventy-two hours, orally or in writing.",
      "opt4": "Incorrect requirement or application: Within seven calendar days, orally or in writing."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-XFER-03",
    "conceptId": "A3-CONTROLLED-TRANSFER",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
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
        "text": "The receiving pharmacy retains the sending pharmacy's original prescription number."
      },
      {
        "id": "opt4",
        "text": "The sending pharmacy converts the electronic prescription to a fax before transfer."
      },
      {
        "id": "opt5",
        "text": "The receiving pharmacy obtains a new practitioner signature before initial dispensing."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2"
    ],
    "explanation": "Colorado's rule identifies pharmacist-to-pharmacist communication, continued electronic form, and no alteration as conditions. It does not state that the receiving pharmacy must preserve the sending pharmacy's prescription number.",
    "distractorExplanations": {
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
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
    "familyId": "A3-CONTROLLED-TRANSFER",
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-transfer-einitial",
    "nabpCompetencies": [
      "3.2"
    ]
  },
  {
    "id": "FED-CII-03",
    "conceptId": "A3-CII-LIFECYCLE",
    "jurisdiction": "Federal",
    "topic": "Federal Controlled Substances",
    "subtopic": "Federal Controlled Substances",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which are federal conditions for issuing multiple Schedule II prescriptions totaling up to 90 days? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Each prescription is issued for a legitimate medical purpose in the usual course of professional practice."
      },
      {
        "id": "opt2",
        "text": "Later prescriptions include appropriate earliest-fill instructions when they are not to be filled immediately."
      },
      {
        "id": "opt3",
        "text": "The practitioner determines that issuing multiple prescriptions does not create undue diversion or abuse risk."
      },
      {
        "id": "opt4",
        "text": "The arrangement is permissible under applicable state law."
      },
      {
        "id": "opt5",
        "text": "The patient signs a separate federal consent form acknowledging that the prescriptions cannot be refilled."
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
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
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
    "familyId": "A3-CII-LIFECYCLE",
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt5": "Misapplies a nearby legal rule."
    },
    "subconceptId": "fed-cii-multiple",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ]
  },
  {
    "id": "A3-EXTRA-02",
    "conceptId": "A3-RESTRICTED-NONRX",
    "familyId": "A3-RESTRICTED-NONRX",
    "competencyArea": 3,
    "jurisdiction": "Federal",
    "topic": "Restricted Nonprescription Products",
    "subtopic": "Restricted Nonprescription Products",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A customer purchased 2.4 g of pseudoephedrine base earlier today. No thirty-day limit or exception affects this transaction. What additional amount can be sold today under the federal daily limit?",
    "answers": [
      {
        "id": "opt1",
        "text": "1.2 g"
      },
      {
        "id": "opt2",
        "text": "1.5 g"
      },
      {
        "id": "opt3",
        "text": "2.4 g"
      },
      {
        "id": "opt4",
        "text": "3.6 g"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The daily limit is 3.6 g of pseudoephedrine base. Subtracting 2.4 g already purchased leaves 1.2 g.",
    "distractorExplanations": {
      "opt2": "The daily limit is 3.6 g of pseudoephedrine base. Subtracting 2.4 g already purchased leaves 1.2 g.",
      "opt3": "The daily limit is 3.6 g of pseudoephedrine base. Subtracting 2.4 g already purchased leaves 1.2 g.",
      "opt4": "The daily limit is 3.6 g of pseudoephedrine base. Subtracting 2.4 g already purchased leaves 1.2 g."
    },
    "ruleToRemember": "The daily limit is 3.6 g of pseudoephedrine base. Subtracting 2.4 g already purchased leaves 1.2 g.",
    "authority": [
      {
        "label": "DEA Drugs of Abuse Resource Guide (2024)",
        "url": "https://www.dea.gov/sites/default/files/2024-12/2024-Drugs-of-Abuse-508.pdf",
        "citation": "CMEA retail pseudoephedrine limits"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 2,
    "reasoningLevel": 1,
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: 1.5 g",
      "opt3": "Incorrect requirement or application: 2.4 g",
      "opt4": "Incorrect requirement or application: 3.6 g"
    },
    "subconceptId": "pseudoephedrine-sales-limits",
    "nabpCompetencies": [
      "3.8"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A3-DISP-03",
    "conceptId": "A4-PRODUCT-SELECTION",
    "familyId": "A4-PRODUCT-SELECTION",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Product Selection",
    "subtopic": "Product Selection",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A patient agrees to a therapeutic-class substitution because the prescribed product is on back order. The drug otherwise fits the Colorado therapeutic-class pathway, but the practitioner has clearly indicated that substitution is not permitted. Which action is appropriate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Dispense the prescribed product when available, or obtain new prescriber authorization before making the therapeutic-class substitution."
      },
      {
        "id": "opt2",
        "text": "Make the therapeutic-class substitution because patient agreement permits substitution despite the practitioner's no-substitution direction."
      },
      {
        "id": "opt3",
        "text": "Make the therapeutic-class substitution because back-order status permits substitution despite the practitioner's documented restriction."
      },
      {
        "id": "opt4",
        "text": "Make the therapeutic-class substitution after documenting the back order and notifying the practitioner after the replacement is dispensed."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The therapeutic-class authority does not apply when the practitioner has properly indicated that substitution is not permitted.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "ruleToRemember": "A valid no-substitution direction blocks the therapeutic-class substitution pathway even when another statutory purpose is present.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-125",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Practitioner limitation on substitution"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 3,
    "reasoningLevel": 2,
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "subconceptId": "product-selection-no-substitution",
    "nabpCompetencies": [
      "4.4"
    ]
  },
  {
    "id": "FED-34-01",
    "conceptId": "A4-PRODUCT-SELECTION",
    "jurisdiction": "Colorado",
    "topic": "Product Selection",
    "subtopic": "Product Selection",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A prescription specifies a brand-name drug and does not prohibit substitution. The pharmacy stocks a lower-cost product of the same generic drug type that the pharmacist judges therapeutically equivalent and interchangeable. Which action is consistent with Colorado's substitution statute?",
    "answers": [
      {
        "id": "opt1",
        "text": "Dispense the equivalent product when the statutory substitution conditions are satisfied."
      },
      {
        "id": "opt2",
        "text": "Dispense the brand product because substitution requires a prescriber-initiated generic prescription."
      },
      {
        "id": "opt3",
        "text": "Contact the prescriber before substitution because patient agreement cannot support an equivalent-product substitution."
      },
      {
        "id": "opt4",
        "text": "Use the equivalent product only when the prescribed brand is unavailable from every wholesaler."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits substitution of an equivalent drug product when the statutory criteria are met, including professional judgment regarding therapeutic equivalence/interchangeability and the absence of a valid no-substitution direction.",
    "distractorExplanations": {
      "opt2": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt3": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt4": "This choice applies a related legal rule or would fit a slightly different fact pattern."
    },
    "ruleToRemember": "Equivalent-product substitution is permitted under defined conditions; it is not limited to brand unavailability.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-125",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Substitution of prescribed drugs and biological products"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "A4-PRODUCT-SELECTION",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "misconceptionTested": {
      "opt2": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt3": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt4": "Applies a nearby rule to the wrong pathway or omits a required condition."
    },
    "subconceptId": "product-selection-equivalent",
    "nabpCompetencies": [
      "4.4"
    ]
  },
  {
    "id": "FED-PART-03",
    "conceptId": "A4-PRODUCT-SELECTION",
    "jurisdiction": "Colorado",
    "topic": "Product Selection",
    "subtopic": "Product Selection",
    "difficulty": 5,
    "type": "scenario",
    "stem": "An uninsured patient agrees to a lower-cost substitution within the same therapeutic class. The prescribed drug is not a biologic, narrow-therapeutic-index drug, or psychotropic drug, and the prescriber has not prohibited substitution. Which additional fact supports the Colorado therapeutic-class substitution pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The substitution maintains patient safety while lowering the uninsured patient's cost for therapy."
      },
      {
        "id": "opt2",
        "text": "The substitute is the least expensive product available from the pharmacy's contracted wholesaler."
      },
      {
        "id": "opt3",
        "text": "The substitute carries the same manufacturer labeler code as the originally prescribed drug."
      },
      {
        "id": "opt4",
        "text": "The substitution is made after the pharmacy obtains a replacement prescription naming that specific product."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's therapeutic-class substitution authority includes specified purposes, including lowering cost for an uninsured patient while maintaining safety, and excludes certain drug categories and prescriber-prohibited substitutions.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "ruleToRemember": "Therapeutic-class substitution is a conditional authority, not a general power to select any cheaper drug.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-125(1)(a.5)",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Therapeutic-class substitution conditions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "A4-PRODUCT-SELECTION",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 3,
    "reasoningLevel": 3,
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "subconceptId": "therapeutic-class-substitution",
    "nabpCompetencies": [
      "4.4"
    ]
  },
  {
    "id": "FED-PART-02",
    "conceptId": "A3-RESTRICTED-NONRX",
    "jurisdiction": "Federal",
    "topic": "Restricted Nonprescription Products",
    "subtopic": "Restricted Nonprescription Products",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A customer has purchased 8.4 g of pseudoephedrine base within the applicable thirty-day period and none today. Under ordinary federal limits, what additional quantity can be purchased today?",
    "answers": [
      {
        "id": "opt1",
        "text": "0.6 g"
      },
      {
        "id": "opt2",
        "text": "1.2 g"
      },
      {
        "id": "opt3",
        "text": "2.4 g"
      },
      {
        "id": "opt4",
        "text": "3.6 g"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The thirty-day limit is 9 g; 8.4 g already purchased leaves 0.6 g. The separate 3.6-g daily limit does not increase that remainder.",
    "distractorExplanations": {
      "opt2": "The thirty-day limit is 9 g; 8.4 g already purchased leaves 0.6 g. The separate 3.6-g daily limit does not increase that remainder.",
      "opt3": "The thirty-day limit is 9 g; 8.4 g already purchased leaves 0.6 g. The separate 3.6-g daily limit does not increase that remainder.",
      "opt4": "The thirty-day limit is 9 g; 8.4 g already purchased leaves 0.6 g. The separate 3.6-g daily limit does not increase that remainder."
    },
    "ruleToRemember": "The thirty-day limit is 9 g; 8.4 g already purchased leaves 0.6 g. The separate 3.6-g daily limit does not increase that remainder.",
    "authority": [
      {
        "label": "DEA Drugs of Abuse Resource Guide (2024)",
        "url": "https://www.dea.gov/sites/default/files/2024-12/2024-Drugs-of-Abuse-508.pdf",
        "citation": "CMEA retail pseudoephedrine limits"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "A3-RESTRICTED-NONRX",
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: 1.2 g",
      "opt3": "Incorrect requirement or application: 2.4 g",
      "opt4": "Incorrect requirement or application: 3.6 g"
    },
    "subconceptId": "pseudoephedrine-thirty-day",
    "nabpCompetencies": [
      "3.8"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-XFER-02",
    "conceptId": "A3-CONTROLLED-TRANSFER",
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
    "familyId": "A3-CONTROLLED-TRANSFER",
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-transfer-einitial",
    "nabpCompetencies": [
      "3.2"
    ]
  },
  {
    "id": "FED-CII-02",
    "conceptId": "A3-RESTRICTED-NONRX",
    "jurisdiction": "Federal",
    "topic": "Restricted Nonprescription Products",
    "subtopic": "Restricted Nonprescription Products",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A retailer sells pseudoephedrine products subject to CMEA. Which product-access arrangement meets the federal placement requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "Behind a counter or in a locked cabinet."
      },
      {
        "id": "opt2",
        "text": "In an open aisle within direct cashier sight."
      },
      {
        "id": "opt3",
        "text": "In an open aisle using electronic package tags."
      },
      {
        "id": "opt4",
        "text": "In an unlocked display beside the sales logbook."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Covered products must be kept behind the counter or in a locked cabinet. Staff visibility, tags, identification and logbook controls do not replace this placement requirement.",
    "distractorExplanations": {
      "opt2": "Covered products must be kept behind the counter or in a locked cabinet. Staff visibility, tags, identification and logbook controls do not replace this placement requirement.",
      "opt3": "Covered products must be kept behind the counter or in a locked cabinet. Staff visibility, tags, identification and logbook controls do not replace this placement requirement.",
      "opt4": "Covered products must be kept behind the counter or in a locked cabinet. Staff visibility, tags, identification and logbook controls do not replace this placement requirement."
    },
    "ruleToRemember": "Covered products must be kept behind the counter or in a locked cabinet. Staff visibility, tags, identification and logbook controls do not replace this placement requirement.",
    "authority": [
      {
        "label": "DEA Drugs of Abuse Resource Guide (2024)",
        "url": "https://www.dea.gov/sites/default/files/2024-12/2024-Drugs-of-Abuse-508.pdf",
        "citation": "CMEA product-placement and logbook requirements"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 3,
    "familyId": "A3-RESTRICTED-NONRX",
    "competencyAreaName": "Dispensing Requirements",
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: In an open aisle within direct cashier sight.",
      "opt3": "Incorrect requirement or application: In an open aisle using electronic package tags.",
      "opt4": "Incorrect requirement or application: In an unlocked display beside the sales logbook."
    },
    "subconceptId": "pseudoephedrine-retail-controls",
    "nabpCompetencies": [
      "3.8"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-CLOSE-01",
    "conceptId": "A4-CLOSURE-MANAGER-INVENTORY",
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
    "familyId": "A4-CLOSURE-MANAGER-INVENTORY",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "subconceptId": "co-closure-records",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ]
  },
  {
    "id": "A4-COMP-03",
    "conceptId": "A4-COMPOUNDING-HAZARDOUS",
    "familyId": "A4-COMPOUNDING-HAZARDOUS",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Compounding",
    "subtopic": "Compounding",
    "difficulty": 1,
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
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-compounding-ops",
    "nabpCompetencies": [
      "4.2",
      "4.5"
    ]
  },
  {
    "id": "A4-OPS-01",
    "conceptId": "A4-CLOSURE-MANAGER-INVENTORY",
    "familyId": "A4-CLOSURE-MANAGER-INVENTORY",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 2,
    "type": "scenario",
    "stem": "A Colorado prescription drug outlet permanently closes Monday at noon. No exception applies. What is the latest time for the last pharmacist manager to relocate the prescription records?",
    "answers": [
      {
        "id": "opt1",
        "text": "Thursday at noon."
      },
      {
        "id": "opt2",
        "text": "Tuesday at noon."
      },
      {
        "id": "opt3",
        "text": "Friday at close of business."
      },
      {
        "id": "opt4",
        "text": "Thirty calendar days after closure."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.00.60 requires relocation within 72 hours after closure. That clock expires Thursday at noon.",
    "distractorExplanations": {
      "opt2": "Rule 5.00.60 requires relocation within 72 hours after closure. That clock expires Thursday at noon.",
      "opt3": "Rule 5.00.60 requires relocation within 72 hours after closure. That clock expires Thursday at noon.",
      "opt4": "Rule 5.00.60 requires relocation within 72 hours after closure. That clock expires Thursday at noon."
    },
    "ruleToRemember": "Rule 5.00.60 requires relocation within 72 hours after closure. That clock expires Thursday at noon.",
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
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 1,
    "reasoningLevel": 2,
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Tuesday at noon.",
      "opt3": "Incorrect requirement or application: Friday at close of business.",
      "opt4": "Incorrect requirement or application: Thirty calendar days after closure."
    },
    "subconceptId": "co-outlet-operations",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-REFILLREC-01",
    "conceptId": "A4-RECORDS-DISTRIBUTION",
    "jurisdiction": "Colorado",
    "topic": "Recordkeeping",
    "subtopic": "Recordkeeping",
    "difficulty": 4,
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
    "familyId": "A4-RECORDS-DISTRIBUTION",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-refill-record",
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ]
  },
  {
    "id": "A4-SPDO-01",
    "conceptId": "A4-RECORDS-DISTRIBUTION",
    "familyId": "A4-RECORDS-DISTRIBUTION",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 1,
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
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-spdo-records",
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ]
  },
  {
    "id": "CO-TELE-01",
    "conceptId": "A4-RECORDS-DISTRIBUTION",
    "jurisdiction": "Colorado",
    "topic": "Ordering / Acquisition",
    "subtopic": "Ordering / Acquisition",
    "difficulty": 3,
    "type": "scenario",
    "stem": "A Colorado outlet is selecting a supplier for routine prescription stock. No statutory or investigational-drug exception applies. Which credential must the supplying entity hold under Rule 1.00.24?",
    "answers": [
      {
        "id": "opt1",
        "text": "Registration with the Colorado Board of Pharmacy."
      },
      {
        "id": "opt2",
        "text": "FDA establishment registration for its distribution location."
      },
      {
        "id": "opt3",
        "text": "NABP accreditation for its wholesale distribution operation."
      },
      {
        "id": "opt4",
        "text": "DEA registration covering the purchaser\u2019s drug schedules."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado Board Rule 1.00.24 requires a prescription drug outlet to ensure that prescription drugs and controlled substances are procured from an entity or person registered by the Board, subject to the stated exceptions.",
    "distractorExplanations": {
      "opt2": "Colorado Board Rule 1.00.24 requires a prescription drug outlet to ensure that prescription drugs and controlled substances are procured from an entity or person registered by the Board, subject to the stated exceptions.",
      "opt3": "Colorado Board Rule 1.00.24 requires a prescription drug outlet to ensure that prescription drugs and controlled substances are procured from an entity or person registered by the Board, subject to the stated exceptions.",
      "opt4": "Colorado Board Rule 1.00.24 requires a prescription drug outlet to ensure that prescription drugs and controlled substances are procured from an entity or person registered by the Board, subject to the stated exceptions."
    },
    "ruleToRemember": "For ordinary procurement, verify the supplier meets Colorado Board registration requirements in addition to other applicable authority.",
    "authority": [
      {
        "label": "Colorado Board Rule 1.00.24",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 1.00.24"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "A4-RECORDS-DISTRIBUTION",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "subconceptId": "procurement-board-registered-source",
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: FDA establishment registration for its distribution location.",
      "opt3": "Incorrect requirement or application: NABP accreditation for its wholesale distribution operation.",
      "opt4": "Incorrect requirement or application: DEA registration covering the purchaser\u2019s drug schedules."
    },
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-TELE-04",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 3,
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
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 3,
    "subconceptId": "co-tele-closure",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ]
  },
  {
    "id": "CO-TELE-02",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Delivery",
    "subtopic": "Central Fill / Delivery",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A central-fill pharmacy returns completed prescriptions to the originating pharmacy. Besides receipt date and delivery method, whose identity must the originating pharmacy record for receipt?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacy employee accepting the shipment."
      },
      {
        "id": "opt2",
        "text": "The pharmacist who performed final evaluation at central fill."
      },
      {
        "id": "opt3",
        "text": "The patient\u2019s agent designated to collect the prescription."
      },
      {
        "id": "opt4",
        "text": "The courier dispatcher responsible for the delivery route."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When an originating pharmacy receives a prescription from a fulfillment pharmacy, the cited rule requires the date of receipt, method of delivery, and name of the pharmacy employee accepting delivery.",
    "distractorExplanations": {
      "opt2": "When an originating pharmacy receives a prescription from a fulfillment pharmacy, the cited rule requires the date of receipt, method of delivery, and name of the pharmacy employee accepting delivery.",
      "opt3": "When an originating pharmacy receives a prescription from a fulfillment pharmacy, the cited rule requires the date of receipt, method of delivery, and name of the pharmacy employee accepting delivery.",
      "opt4": "When an originating pharmacy receives a prescription from a fulfillment pharmacy, the cited rule requires the date of receipt, method of delivery, and name of the pharmacy employee accepting delivery."
    },
    "ruleToRemember": "Central-fill receipt records identify when and how the prescription arrived and who accepted it.",
    "authority": [
      {
        "label": "Colorado Board Rule 20.00.90(c)",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 20.00.90(c)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "subconceptId": "central-fill-receipt-record",
    "nabpCompetencies": [
      "4.3",
      "4.6"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The pharmacist who performed final evaluation at central fill.",
      "opt3": "Incorrect requirement or application: The patient\u2019s agent designated to collect the prescription.",
      "opt4": "Incorrect requirement or application: The courier dispatcher responsible for the delivery route."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-TELE-03",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Delivery",
    "subtopic": "Central Fill / Delivery",
    "difficulty": 4,
    "type": "scenario",
    "stem": "Which pair belongs in the fulfillment pharmacy\u2019s record for a centrally filled prescription, in addition to its receipt and fulfillment dates?",
    "answers": [
      {
        "id": "opt1",
        "text": "Final-evaluation pharmacist; date and method of delivery."
      },
      {
        "id": "opt2",
        "text": "Originating technician; expected date of patient pickup."
      },
      {
        "id": "opt3",
        "text": "Delivery dispatcher; date of the patient\u2019s last office visit."
      },
      {
        "id": "opt4",
        "text": "Purchasing pharmacist; date of the wholesaler shipment."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The fulfillment pharmacy must retain an electronic record identifying the pharmacist responsible for final evaluation and the fulfillment and delivery details required by the rule.",
    "distractorExplanations": {
      "opt2": "The fulfillment pharmacy must retain an electronic record identifying the pharmacist responsible for final evaluation and the fulfillment and delivery details required by the rule.",
      "opt3": "The fulfillment pharmacy must retain an electronic record identifying the pharmacist responsible for final evaluation and the fulfillment and delivery details required by the rule.",
      "opt4": "The fulfillment pharmacy must retain an electronic record identifying the pharmacist responsible for final evaluation and the fulfillment and delivery details required by the rule."
    },
    "ruleToRemember": "A central-fill audit trail must identify responsibility and the fulfillment/delivery sequence.",
    "authority": [
      {
        "label": "Colorado Board Rule 20.01.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 20.01.00(a)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "competencyArea": 4,
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 1,
    "subconceptId": "fulfillment-pharmacy-audit-trail",
    "nabpCompetencies": [
      "4.3",
      "4.6"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Originating technician; expected date of patient pickup.",
      "opt3": "Incorrect requirement or application: Delivery dispatcher; date of the patient\u2019s last office visit.",
      "opt4": "Incorrect requirement or application: Purchasing pharmacist; date of the wholesaler shipment."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "A4-OPS-02",
    "conceptId": "A4-CLOSURE-MANAGER-INVENTORY",
    "familyId": "A4-CLOSURE-MANAGER-INVENTORY",
    "competencyArea": 4,
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 2,
    "type": "scenario",
    "stem": "An outlet permanently closes and relocates its records on time. Under the ordinary closure rule, when must the Board receive the closure notification?",
    "answers": [
      {
        "id": "opt1",
        "text": "Within seventy-two hours of closure."
      },
      {
        "id": "opt2",
        "text": "Within ten calendar days of closure."
      },
      {
        "id": "opt3",
        "text": "Within thirty calendar days of closure."
      },
      {
        "id": "opt4",
        "text": "Within thirty days of the next renewal date."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
      "opt3": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
      "opt4": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration."
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
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "subconceptId": "co-outlet-operations",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Within ten calendar days of closure.",
      "opt3": "Incorrect requirement or application: Within thirty calendar days of closure.",
      "opt4": "Incorrect requirement or application: Within thirty days of the next renewal date."
    },
    "editorialRevision": "5.0.0"
  },
  {
    "id": "CO-REFILLREC-02",
    "conceptId": "A4-RECORDS-DISTRIBUTION",
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
    "familyId": "A4-RECORDS-DISTRIBUTION",
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-refill-record",
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ]
  },
  {
    "id": "V3-A1-01",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An applicant for Colorado license transfer holds licenses in three states and applies using the license issued by examination in State A. Which licenses must meet the rule\u2019s good-standing requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "All three pharmacist licenses."
      },
      {
        "id": "opt2",
        "text": "The State A pharmacist license alone."
      },
      {
        "id": "opt3",
        "text": "The licenses used for practice during the preceding year."
      },
      {
        "id": "opt4",
        "text": "The licenses issued through examination rather than transfer."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's transfer rule looks to good standing across licenses held by the applicant, not just the license used for transfer.",
    "distractorExplanations": {
      "opt2": "Colorado's transfer rule looks to good standing across licenses held by the applicant, not just the license used for transfer.",
      "opt3": "Colorado's transfer rule looks to good standing across licenses held by the applicant, not just the license used for transfer.",
      "opt4": "Colorado's transfer rule looks to good standing across licenses held by the applicant, not just the license used for transfer."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The State A pharmacist license alone.",
      "opt3": "Incorrect requirement or application: The licenses used for practice during the preceding year.",
      "opt4": "Incorrect requirement or application: The licenses issued through examination rather than transfer."
    },
    "ruleToRemember": "Active discipline in another state can defeat the good-standing requirement.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 4.00.40"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "license-good-standing",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-02",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 1,
    "type": "single",
    "stem": "A pharmacist license has been inactive for 26 months. Which additional requirement distinguishes this from an 18-month inactive license under the cited reinstatement rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The longer lapse adds the Board-approved jurisprudence examination to the reinstatement requirements."
      },
      {
        "id": "opt2",
        "text": "The longer lapse adds a supervised pharmacist internship before the license may be reactivated."
      },
      {
        "id": "opt3",
        "text": "The longer lapse replaces continuing education with a new pharmacist license-transfer application."
      },
      {
        "id": "opt4",
        "text": "The longer lapse requires repeating the pharmacist licensure examination used for initial licensure."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The over-24-month pathway adds the jurisprudence examination and a month-based CE requirement.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "ruleToRemember": "More than 24 months inactive triggers the longer reinstatement pathway.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 4.03.00"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "license-reinstatement",
    "nabpCompetencies": [
      "1.2"
    ]
  },
  {
    "id": "V3-A1-03",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe Colorado reporting clocks for a pharmacist?\n\nI. A residential-address change uses a 10-day reporting period.\nII. A legal-name change uses a 30-day reporting period.\nIII. Cessation as pharmacist manager requires immediate written notice.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt4"
    ],
    "explanation": "Only statements II and III are correct. Address and legal-name changes use the 30-day framework; cessation as pharmacist manager is reported immediately.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Do not collapse address, name, and pharmacist-manager reporting into one deadline.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 4.05.00"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "license-reporting-clocks",
    "nabpCompetencies": [
      "1.2"
    ]
  },
  {
    "id": "V3-A1-04",
    "conceptId": "A1-IMPAIRMENT-REPORTING",
    "familyId": "A1-IMPAIRMENT-REPORTING",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "At 2 PM, a pharmacist manager discovers a staff pharmacist is impaired by alcohol and removes the pharmacist from duty. When must the manager report the impairment to the Board?",
    "answers": [
      {
        "id": "opt1",
        "text": "Immediately."
      },
      {
        "id": "opt2",
        "text": "Within one business day."
      },
      {
        "id": "opt3",
        "text": "Within ten calendar days."
      },
      {
        "id": "opt4",
        "text": "Within thirty calendar days."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The manager's incident-report duty for impairment is immediate.",
    "distractorExplanations": {
      "opt2": "The manager's incident-report duty for impairment is immediate.",
      "opt3": "The manager's incident-report duty for impairment is immediate.",
      "opt4": "The manager's incident-report duty for impairment is immediate."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Within one business day.",
      "opt3": "Incorrect requirement or application: Within ten calendar days.",
      "opt4": "Incorrect requirement or application: Within thirty calendar days."
    },
    "ruleToRemember": "Removing the pharmacist from duty does not replace immediate Board reporting.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 7.00.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "impairment-reporting",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-05",
    "conceptId": "A1-TECH-STAFFING",
    "familyId": "A1-TECH-STAFFING",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "One pharmacist supervises two interns and four technicians; three technicians are fully Board-certified. A fifth technician arrives while all other personnel remain. Which issue appears first under the general staffing rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The general total-person supervision limit is exceeded on this shift."
      },
      {
        "id": "opt2",
        "text": "The separate intern-count limit is exceeded on this shift."
      },
      {
        "id": "opt3",
        "text": "The technician-certification majority is no longer met on this shift."
      },
      {
        "id": "opt4",
        "text": "The pharmacist-manager designation no longer applies on this shift."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The general rule counts interns and technicians together. Adding a fifth technician makes seven supervised persons.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Check total supervised persons separately from intern and certification limits.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "C.R.S. \u00a7 12-280-122 / related Board rules"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "tech-ratio",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "V3-A1-06",
    "conceptId": "A1-TECH-STAFFING",
    "familyId": "A1-TECH-STAFFING",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "Five technicians work under one pharmacist; no interns are present and no exception applies. What is the minimum number of fully Board-certified technicians required on this shift?",
    "answers": [
      {
        "id": "opt1",
        "text": "Three."
      },
      {
        "id": "opt2",
        "text": "Two."
      },
      {
        "id": "opt3",
        "text": "Four."
      },
      {
        "id": "opt4",
        "text": "Five."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When three or more technicians are on duty under the general rule, a majority must be fully certified. Three is a majority of five.",
    "distractorExplanations": {
      "opt2": "When three or more technicians are on duty under the general rule, a majority must be fully certified. Three is a majority of five.",
      "opt3": "When three or more technicians are on duty under the general rule, a majority must be fully certified. Three is a majority of five.",
      "opt4": "When three or more technicians are on duty under the general rule, a majority must be fully certified. Three is a majority of five."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Two.",
      "opt3": "Incorrect requirement or application: Four.",
      "opt4": "Incorrect requirement or application: Five."
    },
    "ruleToRemember": "When three or more technicians are on duty under the general rule, a majority must be fully certified. Three is a majority of five.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "C.R.S. \u00a7 12-280-122"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "tech-majority",
    "nabpCompetencies": [
      "1.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-07",
    "conceptId": "A1-DELEGATION-SCOPE",
    "familyId": "A1-DELEGATION-SCOPE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A certified technician receives a new noncontrolled oral prescription and enters it. A pharmacist immediately reviews every detail before dispensing. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The later pharmacist review does not cure the unauthorized oral-order receipt step."
      },
      {
        "id": "opt2",
        "text": "The later pharmacist review makes the oral-order receipt step legally sufficient."
      },
      {
        "id": "opt3",
        "text": "Certification permits the receipt step when the drug is noncontrolled."
      },
      {
        "id": "opt4",
        "text": "The receipt step becomes valid if the prescriber later confirms the directions."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The general Colorado rule reserves receipt and reduction of oral orders to a pharmacist or intern, apart from stated exceptions.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Final verification does not expand who may legally receive an oral order.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.00.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "oral-order-scope",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "V3-A1-08",
    "conceptId": "A1-PIC-TRANSITION",
    "familyId": "A1-PIC-TRANSITION",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A former pharmacist manager leaves June 30 and the replacement starts July 1. An inventory is taken July 3 at close of business, and the manager-change registration-transfer application is filed July 20. Which timing conclusion follows?",
    "answers": [
      {
        "id": "opt1",
        "text": "Both actions fall within their respective deadlines."
      },
      {
        "id": "opt2",
        "text": "Only the inventory falls within its deadline."
      },
      {
        "id": "opt3",
        "text": "Only the registration-transfer application falls within its deadline."
      },
      {
        "id": "opt4",
        "text": "Neither action falls within its respective deadline."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The manager-change inventory uses a 72-hour window, while the registration-transfer action uses a different 30-day clock.",
    "distractorExplanations": {
      "opt2": "The manager-change inventory uses a 72-hour window, while the registration-transfer action uses a different 30-day clock.",
      "opt3": "The manager-change inventory uses a 72-hour window, while the registration-transfer action uses a different 30-day clock.",
      "opt4": "The manager-change inventory uses a 72-hour window, while the registration-transfer action uses a different 30-day clock."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Only the inventory falls within its deadline.",
      "opt3": "Incorrect requirement or application: Only the registration-transfer application falls within its deadline.",
      "opt4": "Incorrect requirement or application: Neither action falls within its respective deadline."
    },
    "ruleToRemember": "PIC changes can trigger separate deadlines; do not substitute one clock for another.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rules 5.00.70 and 5.01.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "manager-change",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-09",
    "conceptId": "A1-DELEGATION-SCOPE",
    "familyId": "A1-DELEGATION-SCOPE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe Colorado's 2026 final-product-verification delegation framework?\n\nI. The delegated verification pathway is limited to noncontrolled orders.\nII. The delegated task may not require technician clinical judgment.\nIII. Use of barcode verification eliminates the need for the program's continuous quality-assessment process.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Statements I and II are correct. Barcode technology may be part of the workflow, but it does not eliminate the statutory quality-assessment requirement.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "FPV delegation is not a delegation of therapeutic judgment.",
    "authority": [
      {
        "label": "HB 26-1336",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "2026 Colorado pharmacy amendments"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "fpv-delegation",
    "nabpCompetencies": [
      "1.1"
    ]
  },
  {
    "id": "V3-A1-10",
    "conceptId": "A1-IMPAIRMENT-REPORTING",
    "familyId": "A1-IMPAIRMENT-REPORTING",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist under the confidential-agreement framework experiences a significant improvement in a previously reported condition. Within what period must the change be reported?",
    "answers": [
      {
        "id": "opt1",
        "text": "Thirty days."
      },
      {
        "id": "opt2",
        "text": "Ten days."
      },
      {
        "id": "opt3",
        "text": "Sixty days."
      },
      {
        "id": "opt4",
        "text": "Ninety days."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Significant positive or negative changes in the condition are reportable.",
    "distractorExplanations": {
      "opt2": "Significant positive or negative changes in the condition are reportable.",
      "opt3": "Significant positive or negative changes in the condition are reportable.",
      "opt4": "Significant positive or negative changes in the condition are reportable."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Ten days.",
      "opt3": "Incorrect requirement or application: Sixty days.",
      "opt4": "Incorrect requirement or application: Ninety days."
    },
    "ruleToRemember": "A material improvement can trigger the same change-of-condition reporting duty.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 24.00.20"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "health-condition-reporting",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-11",
    "conceptId": "A1-TECH-CREDENTIALS",
    "familyId": "A1-TECH-CREDENTIALS",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 1,
    "type": "single",
    "stem": "A provisional technician submits a documented hardship request 75 days before expiration. Which extension duration is contemplated by the cited rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "A one-time nine-month extension."
      },
      {
        "id": "opt2",
        "text": "A one-time six-month extension."
      },
      {
        "id": "opt3",
        "text": "A renewable nine-month extension."
      },
      {
        "id": "opt4",
        "text": "A renewable twelve-month extension."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The hardship pathway provides a one-time nine-month extension when its conditions are met.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "The provisional hardship extension is one-time and nine months.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 29.00.50"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "provisional-tech",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ]
  },
  {
    "id": "V3-A1-12",
    "conceptId": "A1-LICENSURE-LIFECYCLE",
    "familyId": "A1-LICENSURE-LIFECYCLE",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Licensure / Personnel",
    "subtopic": "Licensure / Personnel",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A license-transfer applicant has held an out-of-state pharmacist license for eight months. Which alternative can satisfy Rule 4.00.40(d)?",
    "answers": [
      {
        "id": "opt1",
        "text": "An internship meeting Colorado requirements at the time of original licensure."
      },
      {
        "id": "opt2",
        "text": "An additional twenty-four hours of Colorado-approved continuing education."
      },
      {
        "id": "opt3",
        "text": "Six months of employment under a Colorado pharmacist manager."
      },
      {
        "id": "opt4",
        "text": "A current specialty certification recognized by the Colorado Board."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires at least one year of pharmacist licensure in another state OR an internship meeting Colorado requirements at original licensure. It does not describe the original item\u2019s claimed separate recent-practice requirement.",
    "distractorExplanations": {
      "opt2": "The rule requires at least one year of pharmacist licensure in another state OR an internship meeting Colorado requirements at original licensure. It does not describe the original item\u2019s claimed separate recent-practice requirement.",
      "opt3": "The rule requires at least one year of pharmacist licensure in another state OR an internship meeting Colorado requirements at original licensure. It does not describe the original item\u2019s claimed separate recent-practice requirement.",
      "opt4": "The rule requires at least one year of pharmacist licensure in another state OR an internship meeting Colorado requirements at original licensure. It does not describe the original item\u2019s claimed separate recent-practice requirement."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An additional twenty-four hours of Colorado-approved continuing education.",
      "opt3": "Incorrect requirement or application: Six months of employment under a Colorado pharmacist manager.",
      "opt4": "Incorrect requirement or application: A current specialty certification recognized by the Colorado Board."
    },
    "ruleToRemember": "The rule requires at least one year of pharmacist licensure in another state OR an internship meeting Colorado requirements at original licensure. It does not describe the original item\u2019s claimed separate recent-practice requirement.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 4.00.40"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "license-transfer-experience",
    "nabpCompetencies": [
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-01",
    "conceptId": "A2-COUNSELING",
    "familyId": "A2-COUNSELING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A patient declines counseling on a new prescription. Which method satisfies Colorado\u2019s refusal-documentation requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "A retrievable electronic refusal entry directly linked to the affected prescription."
      },
      {
        "id": "opt2",
        "text": "A retrievable patient-level refusal covering all future prescriptions."
      },
      {
        "id": "opt3",
        "text": "A daily counseling-refusal tally retained with the pharmacist\u2019s shift records."
      },
      {
        "id": "opt4",
        "text": "A patient-signed refusal retained independently of prescription identifiers."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.18 requires a clearly documented refusal directly linked to each affected order and retrievable for at least two years. A signature is not a substitute for linkage.",
    "distractorExplanations": {
      "opt2": "Rule 1.00.18 requires a clearly documented refusal directly linked to each affected order and retrievable for at least two years. A signature is not a substitute for linkage.",
      "opt3": "Rule 1.00.18 requires a clearly documented refusal directly linked to each affected order and retrievable for at least two years. A signature is not a substitute for linkage.",
      "opt4": "Rule 1.00.18 requires a clearly documented refusal directly linked to each affected order and retrievable for at least two years. A signature is not a substitute for linkage."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A retrievable patient-level refusal covering all future prescriptions.",
      "opt3": "Incorrect requirement or application: A daily counseling-refusal tally retained with the pharmacist\u2019s shift records.",
      "opt4": "Incorrect requirement or application: A patient-signed refusal retained independently of prescription identifiers."
    },
    "ruleToRemember": "Rule 1.00.18 requires a clearly documented refusal directly linked to each affected order and retrievable for at least two years. A signature is not a substitute for linkage.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "counsel-refusal",
    "nabpCompetencies": [
      "2.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-02",
    "conceptId": "A2-COUNSELING",
    "familyId": "A2-COUNSELING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Patient Counseling",
    "subtopic": "Patient Counseling",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A patient receiving new therapy understands written Spanish but not spoken English. The pharmacist does not speak Spanish and the patient has not refused counseling. Which method may satisfy Colorado\u2019s counseling rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Written Spanish counseling sufficient to assure the patient is properly counseled."
      },
      {
        "id": "opt2",
        "text": "An English medication guide accompanied by the usual translated container label."
      },
      {
        "id": "opt3",
        "text": "A technician-recorded refusal based on the patient\u2019s inability to converse in English."
      },
      {
        "id": "opt4",
        "text": "Deferral of the pharmacy\u2019s counseling obligation to the next prescriber visit."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.18(a) requires alternative means necessary to assure proper counseling when language is a barrier; it expressly permits written communication in a language the patient understands.",
    "distractorExplanations": {
      "opt2": "Rule 1.00.18(a) requires alternative means necessary to assure proper counseling when language is a barrier; it expressly permits written communication in a language the patient understands.",
      "opt3": "Rule 1.00.18(a) requires alternative means necessary to assure proper counseling when language is a barrier; it expressly permits written communication in a language the patient understands.",
      "opt4": "Rule 1.00.18(a) requires alternative means necessary to assure proper counseling when language is a barrier; it expressly permits written communication in a language the patient understands."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An English medication guide accompanied by the usual translated container label.",
      "opt3": "Incorrect requirement or application: A technician-recorded refusal based on the patient\u2019s inability to converse in English.",
      "opt4": "Incorrect requirement or application: Deferral of the pharmacy\u2019s counseling obligation to the next prescriber visit."
    },
    "ruleToRemember": "Rule 1.00.18(a) requires alternative means necessary to assure proper counseling when language is a barrier; it expressly permits written communication in a language the patient understands.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.18"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "counsel-language",
    "nabpCompetencies": [
      "2.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-03",
    "conceptId": "A2-CONFIDENTIALITY",
    "familyId": "A2-CONFIDENTIALITY",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Confidentiality",
    "subtopic": "Confidentiality",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "Which recipient is expressly listed in Colorado\u2019s prescription-confidentiality rule as a permitted recipient, assuming applicable privacy law is also satisfied?",
    "answers": [
      {
        "id": "opt1",
        "text": "Another pharmacist acquiring and maintaining the pharmacy\u2019s records."
      },
      {
        "id": "opt2",
        "text": "An employer verifying the reason for a patient\u2019s absence."
      },
      {
        "id": "opt3",
        "text": "A relative verifying insurance expenses without representative authority."
      },
      {
        "id": "opt4",
        "text": "A prospective purchaser reviewing identifiable records before acquisition."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.16(b) expressly lists another pharmacist acquiring and maintaining the records. Employment, family status or prospective acquisition alone does not establish disclosure authority.",
    "distractorExplanations": {
      "opt2": "Rule 1.00.16(b) expressly lists another pharmacist acquiring and maintaining the records. Employment, family status or prospective acquisition alone does not establish disclosure authority.",
      "opt3": "Rule 1.00.16(b) expressly lists another pharmacist acquiring and maintaining the records. Employment, family status or prospective acquisition alone does not establish disclosure authority.",
      "opt4": "Rule 1.00.16(b) expressly lists another pharmacist acquiring and maintaining the records. Employment, family status or prospective acquisition alone does not establish disclosure authority."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An employer verifying the reason for a patient\u2019s absence.",
      "opt3": "Incorrect requirement or application: A relative verifying insurance expenses without representative authority.",
      "opt4": "Incorrect requirement or application: A prospective purchaser reviewing identifiable records before acquisition."
    },
    "ruleToRemember": "Rule 1.00.16(b) expressly lists another pharmacist acquiring and maintaining the records. Employment, family status or prospective acquisition alone does not establish disclosure authority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.16"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "confidentiality",
    "nabpCompetencies": [
      "2.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-04",
    "conceptId": "A2-CONFIDENTIALITY",
    "familyId": "A2-CONFIDENTIALITY",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Confidentiality",
    "subtopic": "Confidentiality",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which recipients fall within categories expressly listed in Colorado\u2019s prescription-confidentiality rule? Assume no other authorization or exception.\n\nI. An employer conducting an attendance investigation.\nII. An attorney requesting records for an insurer, without patient or legal authority.\nIII. A third-party entity responsible for paying the prescription claim.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt2"
    ],
    "explanation": "Statement III is correct. Informal caregiving or payment of premiums does not itself create authorization to receive protected prescription information.",
    "distractorExplanations": {
      "opt1": "Statement III is correct. Informal caregiving or payment of premiums does not itself create authorization to receive protected prescription information.",
      "opt3": "Statement III is correct. Informal caregiving or payment of premiums does not itself create authorization to receive protected prescription information.",
      "opt4": "Statement III is correct. Informal caregiving or payment of premiums does not itself create authorization to receive protected prescription information.",
      "opt5": "Statement III is correct. Informal caregiving or payment of premiums does not itself create authorization to receive protected prescription information."
    },
    "misconceptionTested": {
      "opt1": "Incorrect requirement or application: I only",
      "opt3": "Incorrect requirement or application: I and II only",
      "opt4": "Incorrect requirement or application: II and III only",
      "opt5": "Incorrect requirement or application: I, II, and III"
    },
    "ruleToRemember": "Confidentiality analysis asks both who is requesting and why disclosure is authorized.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.16"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "confidentiality-recipients",
    "nabpCompetencies": [
      "2.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-05",
    "conceptId": "A2-TESTING-PRESCRIBING",
    "familyId": "A2-TESTING-PRESCRIBING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An appropriately trained Colorado pharmacist offers an FDA-authorized CLIA-waived test within the test\u2019s authorized limitations. What scope does Rule 1.00.25 give the pharmacist?",
    "answers": [
      {
        "id": "opt1",
        "text": "Authority to order and administer the test."
      },
      {
        "id": "opt2",
        "text": "Authority to administer, but not independently order, the test."
      },
      {
        "id": "opt3",
        "text": "Authority to order, but not personally administer, the test."
      },
      {
        "id": "opt4",
        "text": "Authority to order and administer only under a CPPA."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado authorizes appropriately trained pharmacists to order and administer CLIA-waived tests under the cited rule.",
    "distractorExplanations": {
      "opt2": "Colorado authorizes appropriately trained pharmacists to order and administer CLIA-waived tests under the cited rule.",
      "opt3": "Colorado authorizes appropriately trained pharmacists to order and administer CLIA-waived tests under the cited rule.",
      "opt4": "Colorado authorizes appropriately trained pharmacists to order and administer CLIA-waived tests under the cited rule."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Authority to administer, but not independently order, the test.",
      "opt3": "Incorrect requirement or application: Authority to order, but not personally administer, the test.",
      "opt4": "Incorrect requirement or application: Authority to order and administer only under a CPPA."
    },
    "ruleToRemember": "The testing rule grants both ordering and administration authority.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "clia-testing",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-06",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Which authorization supports dispensing an additional prescription eye-drop bottle for school under Colorado\u2019s special provision, assuming adequate quantity and coverage?",
    "answers": [
      {
        "id": "opt1",
        "text": "A school-use statement on the original prescription order."
      },
      {
        "id": "opt2",
        "text": "A school-use statement added by the parent at pickup."
      },
      {
        "id": "opt3",
        "text": "A school-use statement on the school nurse\u2019s request form."
      },
      {
        "id": "opt4",
        "text": "A school-use statement in the insurer\u2019s prior authorization."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The special exception requires several conditions together, including the prescription-order statement.",
    "distractorExplanations": {
      "opt2": "The special exception requires several conditions together, including the prescription-order statement.",
      "opt3": "The special exception requires several conditions together, including the prescription-order statement.",
      "opt4": "The special exception requires several conditions together, including the prescription-order statement."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A school-use statement added by the parent at pickup.",
      "opt3": "Incorrect requirement or application: A school-use statement on the school nurse\u2019s request form.",
      "opt4": "Incorrect requirement or application: A school-use statement in the insurer\u2019s prior authorization."
    },
    "ruleToRemember": "Meeting some conditions does not substitute for a missing required condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.20(b)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "eyedrop-school-bottle",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-07",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A qualifying thirty-day prescription eye-drop supply was dispensed twenty days ago. Under Colorado\u2019s special early-refill rule, how many more days must pass before the threshold is reached?",
    "answers": [
      {
        "id": "opt1",
        "text": "One day."
      },
      {
        "id": "opt2",
        "text": "Three days."
      },
      {
        "id": "opt3",
        "text": "Five days."
      },
      {
        "id": "opt4",
        "text": "Ten days."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For a thirty-day supply the threshold is twenty-one days after dispensing. At day twenty, one day remains.",
    "distractorExplanations": {
      "opt2": "For a thirty-day supply the threshold is twenty-one days after dispensing. At day twenty, one day remains.",
      "opt3": "For a thirty-day supply the threshold is twenty-one days after dispensing. At day twenty, one day remains.",
      "opt4": "For a thirty-day supply the threshold is twenty-one days after dispensing. At day twenty, one day remains."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Three days.",
      "opt3": "Incorrect requirement or application: Five days.",
      "opt4": "Incorrect requirement or application: Ten days."
    },
    "ruleToRemember": "For a thirty-day supply the threshold is twenty-one days after dispensing. At day twenty, one day remains.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.20(c)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "eyedrop-refill",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-08",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Which nonpatient-specific request is recognized as a separate statutory pathway in Colorado\u2019s office-use prescription rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Compounded prescription drugs for veterinary office stock."
      },
      {
        "id": "opt2",
        "text": "Manufactured prescription drugs for a physician\u2019s clinic stock."
      },
      {
        "id": "opt3",
        "text": "Manufactured controlled drugs for a dentist\u2019s treatment stock."
      },
      {
        "id": "opt4",
        "text": "Compounded prescription drugs for a physician\u2019s clinic stock."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado distinguishes invalid general office-use prescriptions from the veterinary compounded office-stock pathway.",
    "distractorExplanations": {
      "opt2": "Colorado distinguishes invalid general office-use prescriptions from the veterinary compounded office-stock pathway.",
      "opt3": "Colorado distinguishes invalid general office-use prescriptions from the veterinary compounded office-stock pathway.",
      "opt4": "Colorado distinguishes invalid general office-use prescriptions from the veterinary compounded office-stock pathway."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Manufactured prescription drugs for a physician\u2019s clinic stock.",
      "opt3": "Incorrect requirement or application: Manufactured controlled drugs for a dentist\u2019s treatment stock.",
      "opt4": "Incorrect requirement or application: Compounded prescription drugs for a physician\u2019s clinic stock."
    },
    "ruleToRemember": "Do not apply the general office-use rule without checking for a specific statutory exception.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.20(d)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "office-use",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-09",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Practice",
    "subtopic": "Pharmacist Practice",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Which order is expressly excepted from the ordinary valid practitioner-patient relationship requirement in Colorado Rule 3.00.20?",
    "answers": [
      {
        "id": "opt1",
        "text": "An opiate antagonist issued in good faith under the applicable statute."
      },
      {
        "id": "opt2",
        "text": "An antibiotic requested by an established patient\u2019s household member."
      },
      {
        "id": "opt3",
        "text": "A maintenance drug issued solely from a completed internet questionnaire."
      },
      {
        "id": "opt4",
        "text": "A replacement controlled prescription requested by a patient\u2019s caregiver."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires a valid relationship for ordinary orders while recognizing a specific opiate-antagonist exception.",
    "distractorExplanations": {
      "opt2": "The rule requires a valid relationship for ordinary orders while recognizing a specific opiate-antagonist exception.",
      "opt3": "The rule requires a valid relationship for ordinary orders while recognizing a specific opiate-antagonist exception.",
      "opt4": "The rule requires a valid relationship for ordinary orders while recognizing a specific opiate-antagonist exception."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An antibiotic requested by an established patient\u2019s household member.",
      "opt3": "Incorrect requirement or application: A maintenance drug issued solely from a completed internet questionnaire.",
      "opt4": "Incorrect requirement or application: A replacement controlled prescription requested by a patient\u2019s caregiver."
    },
    "ruleToRemember": "A valid relationship need not be in person, but it generally must exist unless an exception applies.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.21"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "patient-practitioner",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-10",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "For a minor prescription adaptation, which identity must the adaptation record capture?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist who made the adaptation."
      },
      {
        "id": "opt2",
        "text": "The practitioner who issued the original prescription."
      },
      {
        "id": "opt3",
        "text": "The employee who entered the adapted directions."
      },
      {
        "id": "opt4",
        "text": "The pharmacist manager responsible for outlet operations."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires traceable documentation of the adaptation date and pharmacist identity.",
    "distractorExplanations": {
      "opt2": "Colorado requires traceable documentation of the adaptation date and pharmacist identity.",
      "opt3": "Colorado requires traceable documentation of the adaptation date and pharmacist identity.",
      "opt4": "Colorado requires traceable documentation of the adaptation date and pharmacist identity."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The practitioner who issued the original prescription.",
      "opt3": "Incorrect requirement or application: The employee who entered the adapted directions.",
      "opt4": "Incorrect requirement or application: The pharmacist manager responsible for outlet operations."
    },
    "ruleToRemember": "A lawful adaptation still requires a clear audit trail.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.10(f)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "minor-adaptation",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-11",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "At a later refill, the substituted product\u2019s distributor changes. Which documentation approach meets Rule 2.01.20?",
    "answers": [
      {
        "id": "opt1",
        "text": "Record the new distributor or NDC while preserving earlier transaction records."
      },
      {
        "id": "opt2",
        "text": "Replace the distributor on the prescription so all transactions show the latest product."
      },
      {
        "id": "opt3",
        "text": "Retain the wholesaler invoice without changing the prescription transaction record."
      },
      {
        "id": "opt4",
        "text": "Update the container label without recording the new distributor in transaction history."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 2.01.20(b)(4) requires distributor or NDC changes to be recorded, allowing a transaction-specific computer update that does not alter prior transaction records.",
    "distractorExplanations": {
      "opt2": "Rule 2.01.20(b)(4) requires distributor or NDC changes to be recorded, allowing a transaction-specific computer update that does not alter prior transaction records.",
      "opt3": "Rule 2.01.20(b)(4) requires distributor or NDC changes to be recorded, allowing a transaction-specific computer update that does not alter prior transaction records.",
      "opt4": "Rule 2.01.20(b)(4) requires distributor or NDC changes to be recorded, allowing a transaction-specific computer update that does not alter prior transaction records."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Replace the distributor on the prescription so all transactions show the latest product.",
      "opt3": "Incorrect requirement or application: Retain the wholesaler invoice without changing the prescription transaction record.",
      "opt4": "Incorrect requirement or application: Update the container label without recording the new distributor in transaction history."
    },
    "ruleToRemember": "Rule 2.01.20(b)(4) requires distributor or NDC changes to be recorded, allowing a transaction-specific computer update that does not alter prior transaction records.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.20"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "substitution-record",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-12",
    "conceptId": "A2-PRESCRIPTION-CHANGES",
    "familyId": "A2-PRESCRIPTION-CHANGES",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A technician receives a permissible noninterpretive clarification from a prescriber\u2019s nurse. Whose name belongs in the field identifying the person who conveyed the clarification?",
    "answers": [
      {
        "id": "opt1",
        "text": "The nurse who conveyed it."
      },
      {
        "id": "opt2",
        "text": "The prescriber who issued the original order."
      },
      {
        "id": "opt3",
        "text": "The pharmacist who later verified the order."
      },
      {
        "id": "opt4",
        "text": "The technician who entered the clarification."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires date/contact identity information in the pharmacy record for a change or clarification.",
    "distractorExplanations": {
      "opt2": "Colorado requires date/contact identity information in the pharmacy record for a change or clarification.",
      "opt3": "Colorado requires date/contact identity information in the pharmacy record for a change or clarification.",
      "opt4": "Colorado requires date/contact identity information in the pharmacy record for a change or clarification."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The prescriber who issued the original order.",
      "opt3": "Incorrect requirement or application: The pharmacist who later verified the order.",
      "opt4": "Incorrect requirement or application: The technician who entered the clarification."
    },
    "ruleToRemember": "Final verification and transaction documentation are separate duties.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.20(a)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "clarification-record",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-13",
    "conceptId": "A2-PROFESSIONAL-CONDUCT",
    "familyId": "A2-PROFESSIONAL-CONDUCT",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Professional Conduct",
    "subtopic": "Professional Conduct",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "Which event triggers the professional-conduct rule\u2019s duty to report a pattern of misconduct to the Board?",
    "answers": [
      {
        "id": "opt1",
        "text": "Recognition of a practice pattern endangering patient or public safety."
      },
      {
        "id": "opt2",
        "text": "Completion of the employer\u2019s investigation confirming a patient injury."
      },
      {
        "id": "opt3",
        "text": "A final malpractice judgment attributing injury to the practice pattern."
      },
      {
        "id": "opt4",
        "text": "Confirmation of the practice pattern by a second licensed pharmacist."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The professional-conduct rule addresses a dangerous pattern before actual injury occurs.",
    "distractorExplanations": {
      "opt2": "The professional-conduct rule addresses a dangerous pattern before actual injury occurs.",
      "opt3": "The professional-conduct rule addresses a dangerous pattern before actual injury occurs.",
      "opt4": "The professional-conduct rule addresses a dangerous pattern before actual injury occurs."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Completion of the employer\u2019s investigation confirming a patient injury.",
      "opt3": "Incorrect requirement or application: A final malpractice judgment attributing injury to the practice pattern.",
      "opt4": "Incorrect requirement or application: Confirmation of the practice pattern by a second licensed pharmacist."
    },
    "ruleToRemember": "Internal remediation does not erase a separate professional reporting duty.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.22"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "misconduct-reporting",
    "nabpCompetencies": [
      "2.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-14",
    "conceptId": "A2-IMMUNIZATION",
    "familyId": "A2-IMMUNIZATION",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Which person may receive delegated vaccine-administration duties from a trained pharmacist under Colorado Board Rule 19.01.20?",
    "answers": [
      {
        "id": "opt1",
        "text": "A pharmacy technician trained in the required immunization course."
      },
      {
        "id": "opt2",
        "text": "A pharmacy cashier trained in the required immunization course."
      },
      {
        "id": "opt3",
        "text": "A pharmacy technician with CPR training but no immunization course."
      },
      {
        "id": "opt4",
        "text": "A pharmacy intern with CPR training but no immunization course."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule permits delegation to a trained pharmacy intern or technician. The required immunization training is distinct from CPR certification.",
    "distractorExplanations": {
      "opt2": "The rule permits delegation to a trained pharmacy intern or technician. The required immunization training is distinct from CPR certification.",
      "opt3": "The rule permits delegation to a trained pharmacy intern or technician. The required immunization training is distinct from CPR certification.",
      "opt4": "The rule permits delegation to a trained pharmacy intern or technician. The required immunization training is distinct from CPR certification."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A pharmacy cashier trained in the required immunization course.",
      "opt3": "Incorrect requirement or application: A pharmacy technician with CPR training but no immunization course.",
      "opt4": "Incorrect requirement or application: A pharmacy intern with CPR training but no immunization course."
    },
    "ruleToRemember": "The rule permits delegation to a trained pharmacy intern or technician. The required immunization training is distinct from CPR certification.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 19.01.20"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "vaccine-delegation",
    "nabpCompetencies": [
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-15",
    "conceptId": "A2-IMMUNIZATION",
    "familyId": "A2-IMMUNIZATION",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe Colorado vaccine-administration operations?\n\nI. Required administration records are retained for three years.\nII. Remaining vaccine from an off-site event may stay at the site overnight if continuously refrigerated.\nIII. A pharmacist may delegate administration to any employee who has current CPR certification.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Statement I is correct. Off-site vaccine stock is returned the same day, and delegation is limited to the trained pharmacy personnel identified by the rule.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Vaccine compliance requires checking personnel, records, and inventory handling.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 19.01.20-.50"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "vaccine-records",
    "nabpCompetencies": [
      "2.2"
    ]
  },
  {
    "id": "V3-A2-16",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist without a PharmD seeks to meet the general experience alternative for collaborative practice. What minimum licensed-pharmacist experience is required?",
    "answers": [
      {
        "id": "opt1",
        "text": "Five years."
      },
      {
        "id": "opt2",
        "text": "Two years."
      },
      {
        "id": "opt3",
        "text": "Three years."
      },
      {
        "id": "opt4",
        "text": "Ten years."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 17.00.30(a)(3) permits a PharmD OR at least five years of licensed-pharmacist experience. Additional qualifications may apply to the services offered.",
    "distractorExplanations": {
      "opt2": "Rule 17.00.30(a)(3) permits a PharmD OR at least five years of licensed-pharmacist experience. Additional qualifications may apply to the services offered.",
      "opt3": "Rule 17.00.30(a)(3) permits a PharmD OR at least five years of licensed-pharmacist experience. Additional qualifications may apply to the services offered.",
      "opt4": "Rule 17.00.30(a)(3) permits a PharmD OR at least five years of licensed-pharmacist experience. Additional qualifications may apply to the services offered."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Two years.",
      "opt3": "Incorrect requirement or application: Three years.",
      "opt4": "Incorrect requirement or application: Ten years."
    },
    "ruleToRemember": "Rule 17.00.30(a)(3) permits a PharmD OR at least five years of licensed-pharmacist experience. Additional qualifications may apply to the services offered.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 17.00.30"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cppa-eligibility",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-17",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "familyId": "A2-COLLABORATIVE-PRACTICE",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "All four pharmacists hold current Colorado licenses and adequate liability coverage. Which meets the general active-practice and degree/experience qualifications for collaborative practice?",
    "answers": [
      {
        "id": "opt1",
        "text": "An actively practicing BSPharm with six years of licensed experience."
      },
      {
        "id": "opt2",
        "text": "An actively practicing BSPharm with four years of licensed experience."
      },
      {
        "id": "opt3",
        "text": "A PharmD who has retired completely from the practice of pharmacy."
      },
      {
        "id": "opt4",
        "text": "A BSPharm with ten years of experience who has retired completely."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Current pharmacy practice is required independently of the degree/experience condition. A PharmD or five years of licensed experience satisfies that second condition.",
    "distractorExplanations": {
      "opt2": "Current pharmacy practice is required independently of the degree/experience condition. A PharmD or five years of licensed experience satisfies that second condition.",
      "opt3": "Current pharmacy practice is required independently of the degree/experience condition. A PharmD or five years of licensed experience satisfies that second condition.",
      "opt4": "Current pharmacy practice is required independently of the degree/experience condition. A PharmD or five years of licensed experience satisfies that second condition."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An actively practicing BSPharm with four years of licensed experience.",
      "opt3": "Incorrect requirement or application: A PharmD who has retired completely from the practice of pharmacy.",
      "opt4": "Incorrect requirement or application: A BSPharm with ten years of experience who has retired completely."
    },
    "ruleToRemember": "Current pharmacy practice is required independently of the degree/experience condition. A PharmD or five years of licensed experience satisfies that second condition.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 17.00.00"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cppa-structure",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-18",
    "conceptId": "A2-TESTING-PRESCRIBING",
    "familyId": "A2-TESTING-PRESCRIBING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 4,
    "type": "scenario",
    "stem": "Under the 2026 statutory expansion for patients age five through eleven, which medication remains outside the independent-prescribing pathway even when the condition otherwise qualifies?",
    "answers": [
      {
        "id": "opt1",
        "text": "A controlled substance."
      },
      {
        "id": "opt2",
        "text": "A noncontrolled prescription medication."
      },
      {
        "id": "opt3",
        "text": "A noncontrolled medication used within FDA labeling."
      },
      {
        "id": "opt4",
        "text": "A noncontrolled medication for a qualifying self-limiting condition."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The statutory expansion concerns drugs that are not controlled substances, subject to its other condition, medication and practice restrictions.",
    "distractorExplanations": {
      "opt2": "The statutory expansion concerns drugs that are not controlled substances, subject to its other condition, medication and practice restrictions.",
      "opt3": "The statutory expansion concerns drugs that are not controlled substances, subject to its other condition, medication and practice restrictions.",
      "opt4": "The statutory expansion concerns drugs that are not controlled substances, subject to its other condition, medication and practice restrictions."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A noncontrolled prescription medication.",
      "opt3": "Incorrect requirement or application: A noncontrolled medication used within FDA labeling.",
      "opt4": "Incorrect requirement or application: A noncontrolled medication for a qualifying self-limiting condition."
    },
    "ruleToRemember": "The statutory expansion concerns drugs that are not controlled substances, subject to its other condition, medication and practice restrictions.",
    "authority": [
      {
        "label": "HB 26-1336",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "2026 Colorado pharmacy amendments"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "minor-prescribing",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-19",
    "conceptId": "A2-TESTING-PRESCRIBING",
    "familyId": "A2-TESTING-PRESCRIBING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "2026 Law Changes",
    "subtopic": "2026 Law Changes",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist tests or treats a ten-year-old under the 2026 statutory authority. The parent does not disclose a primary care provider. What follow-up does the act require?",
    "answers": [
      {
        "id": "opt1",
        "text": "Refer the patient to a primary care provider for further care."
      },
      {
        "id": "opt2",
        "text": "Send the treatment record to the Colorado Board of Pharmacy."
      },
      {
        "id": "opt3",
        "text": "Obtain a collaborating prescriber before completing the encounter."
      },
      {
        "id": "opt4",
        "text": "Repeat the test before referring the patient for further care."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For patients under eighteen, the act requires primary-care notification, or referral for further care if the patient does not have or disclose a primary care provider.",
    "distractorExplanations": {
      "opt2": "For patients under eighteen, the act requires primary-care notification, or referral for further care if the patient does not have or disclose a primary care provider.",
      "opt3": "For patients under eighteen, the act requires primary-care notification, or referral for further care if the patient does not have or disclose a primary care provider.",
      "opt4": "For patients under eighteen, the act requires primary-care notification, or referral for further care if the patient does not have or disclose a primary care provider."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Send the treatment record to the Colorado Board of Pharmacy.",
      "opt3": "Incorrect requirement or application: Obtain a collaborating prescriber before completing the encounter.",
      "opt4": "Incorrect requirement or application: Repeat the test before referring the patient for further care."
    },
    "ruleToRemember": "For patients under eighteen, the act requires primary-care notification, or referral for further care if the patient does not have or disclose a primary care provider.",
    "authority": [
      {
        "label": "HB 26-1336",
        "url": "https://leg.colorado.gov/bills/HB26-1336",
        "citation": "2026 Colorado pharmacy amendments"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "minor-prescribing-followup",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-20",
    "conceptId": "A2-EMERGENCY-LTCF",
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "After an emergency chronic-maintenance supply, which communication satisfies the Colorado practitioner-notice requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "An immediate written message containing the required dispensing information."
      },
      {
        "id": "opt2",
        "text": "An immediate telephone message followed by a written summary next week."
      },
      {
        "id": "opt3",
        "text": "A written summary sent with the pharmacy\u2019s next business-day reports."
      },
      {
        "id": "opt4",
        "text": "A written summary placed in the patient\u2019s bag for delivery to the practitioner."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited emergency-dispensing pathway requires immediate written notification to the practitioner of record.",
    "distractorExplanations": {
      "opt2": "The cited emergency-dispensing pathway requires immediate written notification to the practitioner of record.",
      "opt3": "The cited emergency-dispensing pathway requires immediate written notification to the practitioner of record.",
      "opt4": "The cited emergency-dispensing pathway requires immediate written notification to the practitioner of record."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: An immediate telephone message followed by a written summary next week.",
      "opt3": "Incorrect requirement or application: A written summary sent with the pharmacy\u2019s next business-day reports.",
      "opt4": "Incorrect requirement or application: A written summary placed in the patient\u2019s bag for delivery to the practitioner."
    },
    "ruleToRemember": "Emergency authority comes with a prompt notification obligation.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.23"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "emergency-maintenance",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-21",
    "conceptId": "A2-EMERGENCY-LTCF",
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Long-Term Care",
    "subtopic": "Long-Term Care",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "For a qualifying LTCF first-dose request, which pairing states the maximum supply and permitted frequency per chart order?",
    "answers": [
      {
        "id": "opt1",
        "text": "Seventy-two hours; once per chart order."
      },
      {
        "id": "opt2",
        "text": "Ninety-six hours; once per chart order."
      },
      {
        "id": "opt3",
        "text": "Seventy-two hours; once per calendar month."
      },
      {
        "id": "opt4",
        "text": "Seven days; once per calendar month."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The first-dose pathway permits no more than a seventy-two-hour supply and may be used once for the same order.",
    "distractorExplanations": {
      "opt2": "The first-dose pathway permits no more than a seventy-two-hour supply and may be used once for the same order.",
      "opt3": "The first-dose pathway permits no more than a seventy-two-hour supply and may be used once for the same order.",
      "opt4": "The first-dose pathway permits no more than a seventy-two-hour supply and may be used once for the same order."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Ninety-six hours; once per chart order.",
      "opt3": "Incorrect requirement or application: Seventy-two hours; once per calendar month.",
      "opt4": "Incorrect requirement or application: Seven days; once per calendar month."
    },
    "ruleToRemember": "The first-dose pathway permits no more than a seventy-two-hour supply and may be used once for the same order.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "ltcf-first-dose",
    "nabpCompetencies": [
      "2.1"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A2-22",
    "conceptId": "A2-PROFESSIONAL-CONDUCT",
    "familyId": "A2-PROFESSIONAL-CONDUCT",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Professional Conduct",
    "subtopic": "Professional Conduct",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe Colorado's covered professional-services disclosure rule?\n\nI. When an appointment is scheduled in advance, disclosure may always wait until immediately before treatment.\nII. A change in required disclosure information during a treatment series can require an updated signed disclosure.\nIII. Certain unscheduled or last-minute encounters have timing exceptions.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt4"
    ],
    "explanation": "Statements II and III are correct. For a scheduled appointment, the rule ties disclosure to the scheduling date rather than universally allowing delay until treatment.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Disclosure analysis requires checking when the visit was scheduled, whether information changed, and whether an exception applies.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 1.00.26"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "professional-disclosure",
    "nabpCompetencies": [
      "2.5"
    ]
  },
  {
    "id": "V3-A2-23",
    "conceptId": "A3-VALIDITY-AND-AUTHORITY",
    "familyId": "A3-VALIDITY-AND-AUTHORITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Prescription Transfers",
    "subtopic": "Prescription Requirements",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A patient brings a paper reference copy of a noncontrolled prescription with refills remaining. Which step establishes dispensing authority at the receiving pharmacy?",
    "answers": [
      {
        "id": "opt1",
        "text": "Complete a lawful transfer with the pharmacy holding the order."
      },
      {
        "id": "opt2",
        "text": "Scan the reference copy into the receiving prescription system."
      },
      {
        "id": "opt3",
        "text": "Have a pharmacist authenticate the prescriber information on the copy."
      },
      {
        "id": "opt4",
        "text": "Obtain the patient\u2019s signature confirming the unused refill count."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A reference copy is informational and does not itself authorize dispensing.",
    "distractorExplanations": {
      "opt2": "A reference copy is informational and does not itself authorize dispensing.",
      "opt3": "A reference copy is informational and does not itself authorize dispensing.",
      "opt4": "A reference copy is informational and does not itself authorize dispensing."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Scan the reference copy into the receiving prescription system.",
      "opt3": "Incorrect requirement or application: Have a pharmacist authenticate the prescriber information on the copy.",
      "opt4": "Incorrect requirement or application: Obtain the patient\u2019s signature confirming the unused refill count."
    },
    "ruleToRemember": "Refill information and dispensing authority are separate concepts.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rules 2.01.40 and 2.01.50"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "reference-copy",
    "nabpCompetencies": [
      "3.1",
      "3.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-01",
    "conceptId": "A3-CIII-IV-LIFECYCLE",
    "familyId": "A3-CIII-IV-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A Schedule IV prescription was issued four months ago with five refills. Four refills have been dispensed. How many further refills may be dispensed within the original six-month period without additional authorization?",
    "answers": [
      {
        "id": "opt1",
        "text": "One."
      },
      {
        "id": "opt2",
        "text": "Two."
      },
      {
        "id": "opt3",
        "text": "Four."
      },
      {
        "id": "opt4",
        "text": "Five."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The original dispensing is not a refill. Four of five authorized refills have been used, leaving one within the six-month window.",
    "distractorExplanations": {
      "opt2": "The original dispensing is not a refill. Four of five authorized refills have been used, leaving one within the six-month window.",
      "opt3": "The original dispensing is not a refill. Four of five authorized refills have been used, leaving one within the six-month window.",
      "opt4": "The original dispensing is not a refill. Four of five authorized refills have been used, leaving one within the six-month window."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Two.",
      "opt3": "Incorrect requirement or application: Four.",
      "opt4": "Incorrect requirement or application: Five."
    },
    "ruleToRemember": "The original dispensing is not a refill. Four of five authorized refills have been used, leaving one within the six-month window.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal controlled-substance rule 1306.22"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "c34-time-refill",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-02",
    "conceptId": "A3-CIII-IV-LIFECYCLE",
    "familyId": "A3-CIII-IV-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A Schedule IV prescription is four months old, has two refills remaining, and has already been transferred once between pharmacies that do not share a qualifying real-time database. The patient requests another transfer. What is the controlling issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The general one-time transfer authority has already been used."
      },
      {
        "id": "opt2",
        "text": "The remaining two refills authorize two additional transfers."
      },
      {
        "id": "opt3",
        "text": "The prescription age bars transfer because four months have elapsed."
      },
      {
        "id": "opt4",
        "text": "The prescription may transfer again if the original pharmacy cancels its copy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Remaining refills do not create additional transfer authority under the general one-time rule.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Track refill count, prescription age, and transfer count separately.",
    "authority": [
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal controlled-substance rule 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "c34-transfer",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ]
  },
  {
    "id": "V3-A3-03",
    "conceptId": "A3-CIII-IV-LIFECYCLE",
    "familyId": "A3-CIII-IV-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A Schedule III prescription has four authorized refills remaining and is three months old. It has been transferred once. Which arrangement permits further transfers for refill dispensing under the federal exception?",
    "answers": [
      {
        "id": "opt1",
        "text": "Pharmacies sharing a real-time online prescription database."
      },
      {
        "id": "opt2",
        "text": "Pharmacies sharing ownership but maintaining separate prescription databases."
      },
      {
        "id": "opt3",
        "text": "Pharmacies using the same software vendor with separate patient databases."
      },
      {
        "id": "opt4",
        "text": "Pharmacies sharing a wholesaler and exchanging prescription images by fax."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The shared-database exception changes the transfer limit but not the underlying refill limits.",
    "distractorExplanations": {
      "opt2": "The shared-database exception changes the transfer limit but not the underlying refill limits.",
      "opt3": "The shared-database exception changes the transfer limit but not the underlying refill limits.",
      "opt4": "The shared-database exception changes the transfer limit but not the underlying refill limits."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Pharmacies sharing ownership but maintaining separate prescription databases.",
      "opt3": "Incorrect requirement or application: Pharmacies using the same software vendor with separate patient databases.",
      "opt4": "Incorrect requirement or application: Pharmacies sharing a wholesaler and exchanging prescription images by fax."
    },
    "ruleToRemember": "A shared database affects transfer authority, not refill authority.",
    "authority": [
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal controlled-substance rule 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "c34-shared-db",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-04",
    "conceptId": "A3-CII-LIFECYCLE",
    "familyId": "A3-CII-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 2,
    "reasoningLevel": 2,
    "legalDeterminations": 1,
    "type": "single",
    "stem": "A prescriber wants to authorize a ninety-day Schedule II course using three thirty-day dispensings. Which structure may comply with federal law when its other conditions are satisfied?",
    "answers": [
      {
        "id": "opt1",
        "text": "Three separate prescriptions with appropriate earliest-fill instructions."
      },
      {
        "id": "opt2",
        "text": "One prescription for thirty days with two monthly refills."
      },
      {
        "id": "opt3",
        "text": "One prescription for thirty days with oral authorization for each refill."
      },
      {
        "id": "opt4",
        "text": "One prescription for thirty days with two refills restricted to the same pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal law prohibits Schedule II refills.",
    "distractorExplanations": {
      "opt2": "Federal law prohibits Schedule II refills.",
      "opt3": "Federal law prohibits Schedule II refills.",
      "opt4": "Federal law prohibits Schedule II refills."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: One prescription for thirty days with two monthly refills.",
      "opt3": "Incorrect requirement or application: One prescription for thirty days with oral authorization for each refill.",
      "opt4": "Incorrect requirement or application: One prescription for thirty days with two refills restricted to the same pharmacy."
    },
    "ruleToRemember": "A software field cannot create authority that federal law does not permit.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal controlled-substance rule 1306.12"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cii-refill",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-05",
    "conceptId": "A3-CII-LIFECYCLE",
    "familyId": "A3-CII-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A pharmacy partially fills a Schedule II prescription because it cannot supply the full quantity. The remainder arrives 80 hours later. Which pathway controls the missing balance?",
    "answers": [
      {
        "id": "opt1",
        "text": "The stock-shortage remainder period has expired, so the remaining quantity cannot be completed under that prescription."
      },
      {
        "id": "opt2",
        "text": "The patient-requested 30-day partial-fill pathway applies because the patient accepted the first quantity."
      },
      {
        "id": "opt3",
        "text": "The LTCF 60-day partial-fill pathway applies because the shortage was documented by the pharmacy."
      },
      {
        "id": "opt4",
        "text": "The Schedule III-IV six-month refill rule applies because part of the prescription was dispensed."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The stock-shortage pathway uses a 72-hour remainder period and is distinct from other partial-fill rules.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Identify why the Schedule II prescription was partially filled before applying a deadline.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal controlled-substance rule 1306.13"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cii-partial-shortage",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ]
  },
  {
    "id": "V3-A3-06",
    "conceptId": "A3-CII-LIFECYCLE",
    "familyId": "A3-CII-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A non-LTCF patient presents a Schedule II prescription written June 1 and requests a partial fill June 10 for reasons unrelated to stock. By what deadline must remaining portions ordinarily be filled under the patient-request pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "Thirty days after June 1."
      },
      {
        "id": "opt2",
        "text": "Thirty days after June 10."
      },
      {
        "id": "opt3",
        "text": "Seventy-two hours after June 10."
      },
      {
        "id": "opt4",
        "text": "Sixty days after June 1."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The patient-request partial-fill deadline runs from the date the prescription was written, not the first dispensing. This corrects the earlier item\u2019s missing written date.",
    "distractorExplanations": {
      "opt2": "The patient-request partial-fill deadline runs from the date the prescription was written, not the first dispensing. This corrects the earlier item\u2019s missing written date.",
      "opt3": "The patient-request partial-fill deadline runs from the date the prescription was written, not the first dispensing. This corrects the earlier item\u2019s missing written date.",
      "opt4": "The patient-request partial-fill deadline runs from the date the prescription was written, not the first dispensing. This corrects the earlier item\u2019s missing written date."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Thirty days after June 10.",
      "opt3": "Incorrect requirement or application: Seventy-two hours after June 10.",
      "opt4": "Incorrect requirement or application: Sixty days after June 1."
    },
    "ruleToRemember": "The patient-request partial-fill deadline runs from the date the prescription was written, not the first dispensing. This corrects the earlier item\u2019s missing written date.",
    "authority": [
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal controlled-substance rule 1306.13"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cii-partial-request",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-07",
    "conceptId": "A3-CII-LIFECYCLE",
    "familyId": "A3-CII-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe federal Schedule II dispensing pathways?\n\nI. A Schedule II prescription is not refillable.\nII. Multiple prescriptions can total up to a 90-day supply when all regulatory conditions are satisfied.\nIII. A stock-shortage partial fill uses a different remainder deadline from a patient-request partial fill.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt5"
    ],
    "explanation": "All three statements are correct and describe distinct federal Schedule II pathways.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Classify the legal pathway before applying its number or deadline.",
    "authority": [
      {
        "label": "21 CFR 1306.12",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.12",
        "citation": "Federal controlled-substance rule 1306.12"
      },
      {
        "label": "21 CFR 1306.13",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.13",
        "citation": "Federal controlled-substance rule 1306.13"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "cii-pathways",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ]
  },
  {
    "id": "V3-A3-08",
    "conceptId": "A3-VALIDITY-AND-AUTHORITY",
    "familyId": "A3-VALIDITY-AND-AUTHORITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Under 21 CFR 1306.04(a), who bears responsibility for proper prescribing and dispensing of a controlled-substance prescription?",
    "answers": [
      {
        "id": "opt1",
        "text": "The prescriber, with corresponding responsibility on the dispensing pharmacist."
      },
      {
        "id": "opt2",
        "text": "The prescriber, with the pharmacist responsible only for prescription completeness."
      },
      {
        "id": "opt3",
        "text": "The pharmacist, with the prescriber responsible only for registration status."
      },
      {
        "id": "opt4",
        "text": "The prescriber and patient, with the pharmacist relying on their representations."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal law places a corresponding responsibility on the pharmacist who fills a controlled-substance prescription.",
    "distractorExplanations": {
      "opt2": "Federal law places a corresponding responsibility on the pharmacist who fills a controlled-substance prescription.",
      "opt3": "Federal law places a corresponding responsibility on the pharmacist who fills a controlled-substance prescription.",
      "opt4": "Federal law places a corresponding responsibility on the pharmacist who fills a controlled-substance prescription."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The prescriber, with the pharmacist responsible only for prescription completeness.",
      "opt3": "Incorrect requirement or application: The pharmacist, with the prescriber responsible only for registration status.",
      "opt4": "Incorrect requirement or application: The prescriber and patient, with the pharmacist relying on their representations."
    },
    "ruleToRemember": "Technical completeness is not the same as legal validity.",
    "authority": [
      {
        "label": "21 CFR 1306.04",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.04",
        "citation": "Federal controlled-substance rule 1306.04"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "corresponding-responsibility",
    "nabpCompetencies": [
      "3.1",
      "3.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-09",
    "conceptId": "A3-CONTROLLED-TRANSFER",
    "familyId": "A3-CONTROLLED-TRANSFER",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "For an initial-dispensing transfer of an unfilled electronic Schedule II prescription, which transfer frequency applies under the ordinary federal pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "Once between retail pharmacies at the patient\u2019s request."
      },
      {
        "id": "opt2",
        "text": "Once per pharmacy before any portion is dispensed."
      },
      {
        "id": "opt3",
        "text": "As often as requested while the prescription remains electronic."
      },
      {
        "id": "opt4",
        "text": "As often as requested if the pharmacies share a real-time database."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The initial electronic controlled-substance transfer pathway is one-time and has specific electronic-preservation conditions.",
    "distractorExplanations": {
      "opt2": "The initial electronic controlled-substance transfer pathway is one-time and has specific electronic-preservation conditions.",
      "opt3": "The initial electronic controlled-substance transfer pathway is one-time and has specific electronic-preservation conditions.",
      "opt4": "The initial electronic controlled-substance transfer pathway is one-time and has specific electronic-preservation conditions."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Once per pharmacy before any portion is dispensed.",
      "opt3": "Incorrect requirement or application: As often as requested while the prescription remains electronic.",
      "opt4": "Incorrect requirement or application: As often as requested if the pharmacies share a real-time database."
    },
    "ruleToRemember": "Initial EPCS transfer is a distinct one-time event.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.50"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal controlled-substance rule 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "epcs-initial-transfer",
    "nabpCompetencies": [
      "3.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-10",
    "conceptId": "A3-VALIDITY-AND-AUTHORITY",
    "familyId": "A3-VALIDITY-AND-AUTHORITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Prescription Transfers",
    "subtopic": "Prescription Transfers",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A paper reference copy shows an active noncontrolled prescription with three refills. The receiving pharmacy has not contacted the prescriber or transferring pharmacy. Which action is appropriate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Obtain dispensing authority through a lawful transfer or prescriber authorization first."
      },
      {
        "id": "opt2",
        "text": "Dispense one refill because the copy documents remaining refill authority."
      },
      {
        "id": "opt3",
        "text": "Dispense all three refills because the copy came from a licensed pharmacy."
      },
      {
        "id": "opt4",
        "text": "Convert the copy into an electronic prescription in the receiving pharmacy's system."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A reference copy is informational only.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Information about an order is not the same as legal authority to dispense it.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rules 2.01.40 and 2.01.50"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "reference-copy",
    "nabpCompetencies": [
      "3.1",
      "3.2"
    ]
  },
  {
    "id": "V3-A3-11",
    "conceptId": "A3-LABEL-PACKAGE-INTEGRITY",
    "familyId": "A3-LABEL-PACKAGE-INTEGRITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Labeling",
    "subtopic": "Labeling",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist substitutes an equivalent product. Absent a lawful practitioner direction to the contrary, which drug name belongs on the dispensing label?",
    "answers": [
      {
        "id": "opt1",
        "text": "The drug actually in the container."
      },
      {
        "id": "opt2",
        "text": "The prescribed product even when a different product is dispensed."
      },
      {
        "id": "opt3",
        "text": "The prescribed product followed by the wholesaler\u2019s stock code."
      },
      {
        "id": "opt4",
        "text": "Either product name if the NDC is retained in the pharmacy record."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires the container label to correspond to the identity of the actual drug, subject to lawful practitioner direction.",
    "distractorExplanations": {
      "opt2": "Colorado requires the container label to correspond to the identity of the actual drug, subject to lawful practitioner direction.",
      "opt3": "Colorado requires the container label to correspond to the identity of the actual drug, subject to lawful practitioner direction.",
      "opt4": "Colorado requires the container label to correspond to the identity of the actual drug, subject to lawful practitioner direction."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The prescribed product even when a different product is dispensed.",
      "opt3": "Incorrect requirement or application: The prescribed product followed by the wholesaler\u2019s stock code.",
      "opt4": "Incorrect requirement or application: Either product name if the NDC is retained in the pharmacy record."
    },
    "ruleToRemember": "The label should identify what is in the container.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 3.00.30"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "label-identity",
    "nabpCompetencies": [
      "3.5",
      "3.6",
      "3.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-12",
    "conceptId": "A2-SPECIAL-DISPENSING",
    "familyId": "A2-SPECIAL-DISPENSING",
    "competencyArea": 2,
    "competencyAreaName": "Pharmacist Practice",
    "jurisdiction": "Colorado",
    "topic": "Returning / Reusing Drugs",
    "subtopic": "Returning / Reusing Drugs",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Two undelivered prescriptions return unopened to the pharmacy: one is a controlled substance and the other is a flavored compounded product. Which is eligible under the cited return-to-stock pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "Neither prescription fits the cited return-to-stock pathway because one is controlled and the other is compounded/flavored."
      },
      {
        "id": "opt2",
        "text": "The controlled prescription may return to stock because the package is unopened, while the compounded prescription may not."
      },
      {
        "id": "opt3",
        "text": "The compounded prescription may return to stock because it never reached the patient, while the controlled prescription may not."
      },
      {
        "id": "opt4",
        "text": "Both prescriptions may return to stock if storage conditions, lot information, and expiration remain verifiable."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited Colorado pathway excludes controlled-substance prescriptions and compounded or flavored prescriptions.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Undelivered status alone does not make a prescription returnable to stock.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Return-to-stock provisions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "return-to-stock",
    "nabpCompetencies": [
      "2.1",
      "2.4"
    ]
  },
  {
    "id": "V3-A3-13",
    "conceptId": "A3-LABEL-PACKAGE-INTEGRITY",
    "familyId": "A3-LABEL-PACKAGE-INTEGRITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist makes an intentional therapeutic-class substitution. Besides the usual substitution record fields, what notation must be made on that date?",
    "answers": [
      {
        "id": "opt1",
        "text": "A statement identifying the intentional therapeutic drug class substitution."
      },
      {
        "id": "opt2",
        "text": "A statement that the dispensed product has the same active ingredient."
      },
      {
        "id": "opt3",
        "text": "A statement that the prescriber issued a new prescription for the substitute."
      },
      {
        "id": "opt4",
        "text": "A statement assigning a new prescription number to the substituted therapy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Therapeutic-class substitution carries an additional notation requirement beyond ordinary substitution documentation.",
    "distractorExplanations": {
      "opt2": "Therapeutic-class substitution carries an additional notation requirement beyond ordinary substitution documentation.",
      "opt3": "Therapeutic-class substitution carries an additional notation requirement beyond ordinary substitution documentation.",
      "opt4": "Therapeutic-class substitution carries an additional notation requirement beyond ordinary substitution documentation."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A statement that the dispensed product has the same active ingredient.",
      "opt3": "Incorrect requirement or application: A statement that the prescriber issued a new prescription for the substitute.",
      "opt4": "Incorrect requirement or application: A statement assigning a new prescription number to the substituted therapy."
    },
    "ruleToRemember": "A special substitution pathway can add documentation beyond the ordinary substitution fields.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.20"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "substitution-documentation",
    "nabpCompetencies": [
      "3.5",
      "3.6",
      "3.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-14",
    "conceptId": "A3-VALIDITY-AND-AUTHORITY",
    "familyId": "A3-VALIDITY-AND-AUTHORITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Prescription Requirements",
    "subtopic": "Prescription Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A prescriber telephones a new outpatient noncontrolled prescription. Who may receive and reduce the oral order to writing under Colorado\u2019s ordinary rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "A pharmacist or pharmacy intern."
      },
      {
        "id": "opt2",
        "text": "A pharmacist or fully certified technician."
      },
      {
        "id": "opt3",
        "text": "A pharmacist, intern, or fully certified technician."
      },
      {
        "id": "opt4",
        "text": "An intern or technician with subsequent pharmacist verification."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The general oral-order rule reserves receipt/reduction to a pharmacist or intern, apart from specific exceptions.",
    "distractorExplanations": {
      "opt2": "The general oral-order rule reserves receipt/reduction to a pharmacist or intern, apart from specific exceptions.",
      "opt3": "The general oral-order rule reserves receipt/reduction to a pharmacist or intern, apart from specific exceptions.",
      "opt4": "The general oral-order rule reserves receipt/reduction to a pharmacist or intern, apart from specific exceptions."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A pharmacist or fully certified technician.",
      "opt3": "Incorrect requirement or application: A pharmacist, intern, or fully certified technician.",
      "opt4": "Incorrect requirement or application: An intern or technician with subsequent pharmacist verification."
    },
    "ruleToRemember": "Later verification does not retroactively authorize an intake task.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.00.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "oral-order",
    "nabpCompetencies": [
      "3.1",
      "3.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-15",
    "conceptId": "A3-CIII-IV-LIFECYCLE",
    "familyId": "A3-CIII-IV-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A prescriber orally authorizes additional refills on an existing Schedule III prescription four months after issue. Which limit still controls the added authorization?",
    "answers": [
      {
        "id": "opt1",
        "text": "The added authorization remains subject to the original five-refill and six-month federal limits."
      },
      {
        "id": "opt2",
        "text": "The added authorization starts a new six-month period from the date of authorization."
      },
      {
        "id": "opt3",
        "text": "The added authorization permits five new refills beyond those already used on the prescription."
      },
      {
        "id": "opt4",
        "text": "The added authorization creates a new prescription for purposes of future transfer."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Additional refill authorization does not reset the original federal ceilings.",
    "distractorExplanations": {
      "opt2": "This option applies a different rule or misses a required condition.",
      "opt3": "This option applies a different rule or misses a required condition.",
      "opt4": "This option applies a different rule or misses a required condition."
    },
    "misconceptionTested": {
      "opt2": "Misapplies the governing rule.",
      "opt3": "Misapplies the governing rule.",
      "opt4": "Misapplies the governing rule."
    },
    "ruleToRemember": "Added refills do not restart the original six-month clock.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal controlled-substance rule 1306.22"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "c34-refill-added",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ]
  },
  {
    "id": "V3-A3-16",
    "conceptId": "A4-PRODUCT-SELECTION",
    "familyId": "A4-PRODUCT-SELECTION",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Product Selection",
    "subtopic": "Product Selection",
    "difficulty": 4,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A prescription drug outlet located in a Colorado town does not stock the prescribed product. The only qualifying equivalent product available in stock costs more than the prescribed product. Which fact is necessary before using the statutory higher-priced substitution pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The purchaser consents to receiving the higher-priced qualifying substitute that is available in stock."
      },
      {
        "id": "opt2",
        "text": "The prescriber issues a replacement order specifically naming the higher-priced qualifying substitute in stock."
      },
      {
        "id": "opt3",
        "text": "The pharmacy documents that no lower-priced qualifying substitute is available elsewhere in Colorado."
      },
      {
        "id": "opt4",
        "text": "The patient previously received the same manufacturer's qualifying substitute from the dispensing pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's statute contains a limited pathway allowing a higher-priced qualifying substitute at a prescription drug outlet located in a town when the purchaser consents.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "ruleToRemember": "The higher-priced substitution exception depends on the statutory setting and purchaser consent, not a statewide product search.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-125(5)",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Higher-priced substitution provision"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "product-selection-higher-price",
    "nabpCompetencies": [
      "4.4"
    ]
  },
  {
    "id": "V3-A3-17",
    "conceptId": "A3-CIII-IV-LIFECYCLE",
    "familyId": "A3-CIII-IV-LIFECYCLE",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Federal",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A Schedule III prescription is five months old, has one lawful refill remaining, and has never been transferred. The patient requests a refill transfer to a pharmacy without a shared database. What remains available after a lawful transfer?",
    "answers": [
      {
        "id": "opt1",
        "text": "One refill before six months from the original issue date."
      },
      {
        "id": "opt2",
        "text": "One refill before six months from the transfer date."
      },
      {
        "id": "opt3",
        "text": "Five refills before six months from the original issue date."
      },
      {
        "id": "opt4",
        "text": "Five refills before six months from the transfer date."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Transfer does not renew the six-month period or replenish refill authority. The receiving pharmacy inherits the remaining lawful refill under the original issue date.",
    "distractorExplanations": {
      "opt2": "Transfer does not renew the six-month period or replenish refill authority. The receiving pharmacy inherits the remaining lawful refill under the original issue date.",
      "opt3": "Transfer does not renew the six-month period or replenish refill authority. The receiving pharmacy inherits the remaining lawful refill under the original issue date.",
      "opt4": "Transfer does not renew the six-month period or replenish refill authority. The receiving pharmacy inherits the remaining lawful refill under the original issue date."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: One refill before six months from the transfer date.",
      "opt3": "Incorrect requirement or application: Five refills before six months from the original issue date.",
      "opt4": "Incorrect requirement or application: Five refills before six months from the transfer date."
    },
    "ruleToRemember": "Transfer does not renew the six-month period or replenish refill authority. The receiving pharmacy inherits the remaining lawful refill under the original issue date.",
    "authority": [
      {
        "label": "21 CFR 1306.22",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.22",
        "citation": "Federal controlled-substance rule 1306.22"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal controlled-substance rule 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "transfer-vs-refill",
    "nabpCompetencies": [
      "3.1",
      "3.4"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-18",
    "conceptId": "A3-CONTROLLED-TRANSFER",
    "familyId": "A3-CONTROLLED-TRANSFER",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Both",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe controlled-substance transfer rules relevant in Colorado?\n\nI. The traditional Schedule III-V refill-transfer pathway is generally pharmacist-to-pharmacist.\nII. A qualifying shared real-time database can change the transfer-frequency limitation.\nIII. Initial electronic Schedule II-V transfer for dispensing is governed by the same refill-transfer event and frequency rule.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt3"
    ],
    "explanation": "Statements I and II are correct. Initial EPCS transfer for dispensing is a distinct pathway from a later refill transfer.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Identify whether the question concerns initial electronic transfer or a refill transfer.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 2.01.50"
      },
      {
        "label": "21 CFR 1306.25",
        "url": "https://www.ecfr.gov/current/title-21/section-1306.25",
        "citation": "Federal controlled-substance rule 1306.25"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "transfer-rules",
    "nabpCompetencies": [
      "3.2"
    ]
  },
  {
    "id": "V3-A3-19",
    "conceptId": "A3-LABEL-PACKAGE-INTEGRITY",
    "familyId": "A3-LABEL-PACKAGE-INTEGRITY",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An outlet receives a written FDA request to recall a specific compounded sterile preparation. Which response does Colorado\u2019s sterile-compounding rule require?",
    "answers": [
      {
        "id": "opt1",
        "text": "Immediately recall distributed units and quarantine units remaining at the outlet."
      },
      {
        "id": "opt2",
        "text": "Quarantine remaining units and recall distributed units after confirming a defect."
      },
      {
        "id": "opt3",
        "text": "Recall distributed units and continue dispensing retained units that pass visual inspection."
      },
      {
        "id": "opt4",
        "text": "Stop new compounding and recall units only if an adverse event is reported."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 21.21.90(d) requires immediate recall after a written Board or FDA request, with immediate quarantine of remaining product and no further dispensing or distribution.",
    "distractorExplanations": {
      "opt2": "Rule 21.21.90(d) requires immediate recall after a written Board or FDA request, with immediate quarantine of remaining product and no further dispensing or distribution.",
      "opt3": "Rule 21.21.90(d) requires immediate recall after a written Board or FDA request, with immediate quarantine of remaining product and no further dispensing or distribution.",
      "opt4": "Rule 21.21.90(d) requires immediate recall after a written Board or FDA request, with immediate quarantine of remaining product and no further dispensing or distribution."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Quarantine remaining units and recall distributed units after confirming a defect.",
      "opt3": "Incorrect requirement or application: Recall distributed units and continue dispensing retained units that pass visual inspection.",
      "opt4": "Incorrect requirement or application: Stop new compounding and recall units only if an adverse event is reported."
    },
    "ruleToRemember": "Rule 21.21.90(d) requires immediate recall after a written Board or FDA request, with immediate quarantine of remaining product and no further dispensing or distribution.",
    "authority": [
      {
        "label": "Colorado sterile-compounding recalls",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 21.21.90(d)"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "packaging-integrity",
    "nabpCompetencies": [
      "3.5",
      "3.6",
      "3.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A3-20",
    "conceptId": "A3-PDMP-DUR",
    "familyId": "A3-PDMP-DUR",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "Dispensing Requirements",
    "subtopic": "Dispensing Requirements",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "Which action belongs to prospective drug-use review of a new prescription?",
    "answers": [
      {
        "id": "opt1",
        "text": "Assessing therapeutic duplication against the patient\u2019s medication profile."
      },
      {
        "id": "opt2",
        "text": "Comparing the prepared container\u2019s quantity against the reviewed order."
      },
      {
        "id": "opt3",
        "text": "Reconciling the drug\u2019s perpetual inventory after the transaction."
      },
      {
        "id": "opt4",
        "text": "Checking the shipping manifest against the completed prescription."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The current MPJE blueprint includes prospective DUR as part of pharmacist dispensing obligations.",
    "distractorExplanations": {
      "opt2": "The current MPJE blueprint includes prospective DUR as part of pharmacist dispensing obligations.",
      "opt3": "The current MPJE blueprint includes prospective DUR as part of pharmacist dispensing obligations.",
      "opt4": "The current MPJE blueprint includes prospective DUR as part of pharmacist dispensing obligations."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Comparing the prepared container\u2019s quantity against the reviewed order.",
      "opt3": "Incorrect requirement or application: Reconciling the drug\u2019s perpetual inventory after the transaction.",
      "opt4": "Incorrect requirement or application: Checking the shipping manifest against the completed prescription."
    },
    "ruleToRemember": "Prospective DUR occurs before dispensing and can require resolution of clinically significant problems.",
    "authority": [
      {
        "label": "NABP MPJE competency statement",
        "url": "https://nabp.pharmacy/programs/examinations/mpje/competency-statements/",
        "citation": "Area 3 prospective drug-use review"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "dur-prospective",
    "nabpCompetencies": [
      "3.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-01",
    "conceptId": "A3-PDMP-DUR",
    "familyId": "A3-PDMP-DUR",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "PDMP / Prospective DUR",
    "subtopic": "PDMP / Prospective DUR",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist authorizes a trained technician as a PDMP designee. Which employment relationship meets Colorado\u2019s designee condition?",
    "answers": [
      {
        "id": "opt1",
        "text": "The technician is employed by or contracted with the same prescription drug outlet."
      },
      {
        "id": "opt2",
        "text": "The technician works at another outlet under the same corporate ownership."
      },
      {
        "id": "opt3",
        "text": "The technician works for the wholesaler supplying the authorizing outlet."
      },
      {
        "id": "opt4",
        "text": "The technician works for the prescribing office serving the same patient."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado law permits a pharmacist to authorize qualifying designees associated with the same prescription drug outlet, but the pharmacist remains responsible for authorized use and confidentiality.",
    "distractorExplanations": {
      "opt2": "Colorado law permits a pharmacist to authorize qualifying designees associated with the same prescription drug outlet, but the pharmacist remains responsible for authorized use and confidentiality.",
      "opt3": "Colorado law permits a pharmacist to authorize qualifying designees associated with the same prescription drug outlet, but the pharmacist remains responsible for authorized use and confidentiality.",
      "opt4": "Colorado law permits a pharmacist to authorize qualifying designees associated with the same prescription drug outlet, but the pharmacist remains responsible for authorized use and confidentiality."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The technician works at another outlet under the same corporate ownership.",
      "opt3": "Incorrect requirement or application: The technician works for the wholesaler supplying the authorizing outlet.",
      "opt4": "Incorrect requirement or application: The technician works for the prescribing office serving the same patient."
    },
    "ruleToRemember": "PDMP delegation does not transfer the pharmacist's responsibility for appropriate access and confidentiality.",
    "authority": [
      {
        "label": "C.R.S. \u00a7\u00a7 12-280-403 to -404",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Colorado PDMP registration, designee, and access provisions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "pdmp-access-use",
    "nabpCompetencies": [
      "3.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-02",
    "conceptId": "A3-PDMP-DUR",
    "familyId": "A3-PDMP-DUR",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "PDMP / Prospective DUR",
    "subtopic": "PDMP / Prospective DUR",
    "difficulty": 4,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacist is considering dispensing a noncontrolled prescription to a current patient. The pharmacist wants to review the patient's PDMP history because the medication profile raises concern about possible drug misuse. Which statement best fits Colorado's access framework?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist or an authorized designee may query the program for the current patient within an authorized PDMP purpose."
      },
      {
        "id": "opt2",
        "text": "The pharmacist may query when the prescription under review is a controlled substance and the patient is currently receiving it."
      },
      {
        "id": "opt3",
        "text": "The pharmacist may query after the prescriber documents a diversion concern in the prescription or medical record."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may query after obtaining a patient authorization specific to the PDMP review being performed."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's PDMP access provisions permit pharmacist access concerning a current patient within the authorized statutory purposes; access is not limited solely to a controlled prescription currently being dispensed.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "ruleToRemember": "PDMP access turns on the authorized relationship and purpose, not simply the schedule of the prescription currently presented.",
    "authority": [
      {
        "label": "C.R.S. \u00a7 12-280-404",
        "url": "https://leg.colorado.gov/laws/colorado-revised-statutes",
        "citation": "Colorado PDMP access provisions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "pdmp-access-current-patient",
    "nabpCompetencies": [
      "3.3"
    ]
  },
  {
    "id": "V3-A4-03",
    "conceptId": "A3-PDMP-DUR",
    "familyId": "A3-PDMP-DUR",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "PDMP / Prospective DUR",
    "subtopic": "PDMP / Prospective DUR",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "A pharmacy must correct a PDMP transaction dispensed September 8. Under the cited monthly correction deadline, by what date must the corrected report be resubmitted?",
    "answers": [
      {
        "id": "opt1",
        "text": "October 1."
      },
      {
        "id": "opt2",
        "text": "September 15."
      },
      {
        "id": "opt3",
        "text": "September 30."
      },
      {
        "id": "opt4",
        "text": "October 8."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Errors for transactions from the first through the 15th are corrected by the first day of the following month.",
    "distractorExplanations": {
      "opt2": "Errors for transactions from the first through the 15th are corrected by the first day of the following month.",
      "opt3": "Errors for transactions from the first through the 15th are corrected by the first day of the following month.",
      "opt4": "Errors for transactions from the first through the 15th are corrected by the first day of the following month."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: September 15.",
      "opt3": "Incorrect requirement or application: September 30.",
      "opt4": "Incorrect requirement or application: October 8."
    },
    "ruleToRemember": "PDMP reporting and PDMP error-correction use different calendars.",
    "authority": [
      {
        "label": "Colorado Board Rule 23.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 23"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "pdmp-correction",
    "nabpCompetencies": [
      "3.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-04",
    "conceptId": "A3-PDMP-DUR",
    "familyId": "A3-PDMP-DUR",
    "competencyArea": 3,
    "competencyAreaName": "Dispensing Requirements",
    "jurisdiction": "Colorado",
    "topic": "PDMP / Prospective DUR",
    "subtopic": "PDMP / Prospective DUR",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "A pharmacy cannot correct a rejected PDMP transaction after reasonable efforts. What documentation does the cited rule require?",
    "answers": [
      {
        "id": "opt1",
        "text": "The error notification and the reason correction could not be completed."
      },
      {
        "id": "opt2",
        "text": "A zero-report replacement and the date the rejected entry was deleted."
      },
      {
        "id": "opt3",
        "text": "A prescriber attestation and a replacement prescription for the transaction."
      },
      {
        "id": "opt4",
        "text": "A manager attestation and an amended controlled-substance inventory."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires written documentation when an error cannot be corrected.",
    "distractorExplanations": {
      "opt2": "The rule requires written documentation when an error cannot be corrected.",
      "opt3": "The rule requires written documentation when an error cannot be corrected.",
      "opt4": "The rule requires written documentation when an error cannot be corrected."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A zero-report replacement and the date the rejected entry was deleted.",
      "opt3": "Incorrect requirement or application: A prescriber attestation and a replacement prescription for the transaction.",
      "opt4": "Incorrect requirement or application: A manager attestation and an amended controlled-substance inventory."
    },
    "ruleToRemember": "An uncorrectable PDMP error still needs a documented audit trail.",
    "authority": [
      {
        "label": "Colorado Board Rule 23.00.00",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "3 CCR 719-1, Rule 23"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "pdmp-uncorrected",
    "nabpCompetencies": [
      "3.3"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-05",
    "conceptId": "A4-CLOSURE-MANAGER-INVENTORY",
    "familyId": "A4-CLOSURE-MANAGER-INVENTORY",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An outlet permanently closes Monday at noon. What are the ordinary deadlines for relocating prescriptions and notifying the Colorado Board?",
    "answers": [
      {
        "id": "opt1",
        "text": "Relocation by Thursday noon; notice by Thursday noon."
      },
      {
        "id": "opt2",
        "text": "Relocation by Tuesday noon; notice by Thursday noon."
      },
      {
        "id": "opt3",
        "text": "Relocation by Thursday noon; notice within thirty days."
      },
      {
        "id": "opt4",
        "text": "Relocation within thirty days; notice by Thursday noon."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's closure rule uses a 72-hour deadline for both record relocation and Board notice.",
    "distractorExplanations": {
      "opt2": "Colorado's closure rule uses a 72-hour deadline for both record relocation and Board notice.",
      "opt3": "Colorado's closure rule uses a 72-hour deadline for both record relocation and Board notice.",
      "opt4": "Colorado's closure rule uses a 72-hour deadline for both record relocation and Board notice."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Relocation by Tuesday noon; notice by Thursday noon.",
      "opt3": "Incorrect requirement or application: Relocation by Thursday noon; notice within thirty days.",
      "opt4": "Incorrect requirement or application: Relocation within thirty days; notice by Thursday noon."
    },
    "ruleToRemember": "Calculate each closure duty from the time of closure.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 5.00.60"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "closure",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-06",
    "conceptId": "A4-CLOSURE-MANAGER-INVENTORY",
    "familyId": "A4-CLOSURE-MANAGER-INVENTORY",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Controlled Substances",
    "subtopic": "Controlled Substances",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Following a pharmacist-manager change, who may complete the controlled-substance inventory under the Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The incoming pharmacist manager or that manager\u2019s designee."
      },
      {
        "id": "opt2",
        "text": "The incoming pharmacist manager personally, without delegation."
      },
      {
        "id": "opt3",
        "text": "The outgoing pharmacist manager personally, without delegation."
      },
      {
        "id": "opt4",
        "text": "The outlet owner or an owner\u2019s designee without manager designation."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The new manager or designee may take the inventory within 72 hours, as of opening or close of business activity.",
    "distractorExplanations": {
      "opt2": "The new manager or designee may take the inventory within 72 hours, as of opening or close of business activity.",
      "opt3": "The new manager or designee may take the inventory within 72 hours, as of opening or close of business activity.",
      "opt4": "The new manager or designee may take the inventory within 72 hours, as of opening or close of business activity."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The incoming pharmacist manager personally, without delegation.",
      "opt3": "Incorrect requirement or application: The outgoing pharmacist manager personally, without delegation.",
      "opt4": "Incorrect requirement or application: The outlet owner or an owner\u2019s designee without manager designation."
    },
    "ruleToRemember": "Manager-change inventory is distinct from routine federal biennial inventory.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 5.01.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "manager-inventory",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-07",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Telepharmacy",
    "subtopic": "Telepharmacy",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "For refrigerated drug storage at a Colorado telepharmacy, how often must electronic temperature monitoring occur?",
    "answers": [
      {
        "id": "opt1",
        "text": "Each calendar day."
      },
      {
        "id": "opt2",
        "text": "Each day the telepharmacy opens."
      },
      {
        "id": "opt3",
        "text": "Each day a prescription is dispensed."
      },
      {
        "id": "opt4",
        "text": "Each day the central pharmacy opens."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The central-pharmacy count and floor area are satisfied; daily electronic temperature monitoring is not.",
    "distractorExplanations": {
      "opt2": "The central-pharmacy count and floor area are satisfied; daily electronic temperature monitoring is not.",
      "opt3": "The central-pharmacy count and floor area are satisfied; daily electronic temperature monitoring is not.",
      "opt4": "The central-pharmacy count and floor area are satisfied; daily electronic temperature monitoring is not."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Each day the telepharmacy opens.",
      "opt3": "Incorrect requirement or application: Each day a prescription is dispensed.",
      "opt4": "Incorrect requirement or application: Each day the central pharmacy opens."
    },
    "ruleToRemember": "Telepharmacy questions can require checking several independent facility rules.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 31.01.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "telepharmacy-ops",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-08",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Processing",
    "subtopic": "Central Fill / Processing",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "What must a central prescription-processing system be able to identify for the dispensing functions performed?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist and location responsible for each function."
      },
      {
        "id": "opt2",
        "text": "The originating pharmacist for every function regardless of location."
      },
      {
        "id": "opt3",
        "text": "The pharmacist manager of each facility in place of individual performers."
      },
      {
        "id": "opt4",
        "text": "The final-evaluation pharmacist in place of earlier function performers."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Centralized processing requires records that identify location and pharmacist responsibility for dispensing functions.",
    "distractorExplanations": {
      "opt2": "Centralized processing requires records that identify location and pharmacist responsibility for dispensing functions.",
      "opt3": "Centralized processing requires records that identify location and pharmacist responsibility for dispensing functions.",
      "opt4": "Centralized processing requires records that identify location and pharmacist responsibility for dispensing functions."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The originating pharmacist for every function regardless of location.",
      "opt3": "Incorrect requirement or application: The pharmacist manager of each facility in place of individual performers.",
      "opt4": "Incorrect requirement or application: The final-evaluation pharmacist in place of earlier function performers."
    },
    "ruleToRemember": "Central fill depends on traceability, not just transmission of the prescription.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Central fill / centralized processing provisions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "central-fill",
    "nabpCompetencies": [
      "4.3",
      "4.6"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-09",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Delivery / Storage",
    "subtopic": "Delivery / Storage",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "For requested temporary prescription storage outside the dispensing area, who approves the individual arrangement and who determines or approves its procedures?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist on duty; the pharmacist manager."
      },
      {
        "id": "opt2",
        "text": "The pharmacist manager; the Colorado Board."
      },
      {
        "id": "opt3",
        "text": "The pharmacy owner; the pharmacist on duty."
      },
      {
        "id": "opt4",
        "text": "The patient\u2019s prescriber; the pharmacist manager."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.01.34 assigns individual approval to the pharmacist on duty and procedures for storage, security, access, confidentiality, counseling and records to the pharmacist manager.",
    "distractorExplanations": {
      "opt2": "Rule 5.01.34 assigns individual approval to the pharmacist on duty and procedures for storage, security, access, confidentiality, counseling and records to the pharmacist manager.",
      "opt3": "Rule 5.01.34 assigns individual approval to the pharmacist on duty and procedures for storage, security, access, confidentiality, counseling and records to the pharmacist manager.",
      "opt4": "Rule 5.01.34 assigns individual approval to the pharmacist on duty and procedures for storage, security, access, confidentiality, counseling and records to the pharmacist manager."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The pharmacist manager; the Colorado Board.",
      "opt3": "Incorrect requirement or application: The pharmacy owner; the pharmacist on duty.",
      "opt4": "Incorrect requirement or application: The patient\u2019s prescriber; the pharmacist manager."
    },
    "ruleToRemember": "Rule 5.01.34 assigns individual approval to the pharmacist on duty and procedures for storage, security, access, confidentiality, counseling and records to the pharmacist manager.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 5.01.34"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "delivery-storage",
    "nabpCompetencies": [
      "4.3",
      "4.6"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-10",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An outlet has a March Board inspection report and a June self-inspection completed by the pharmacist manager using the Board form. Which report must be displayed in the principal dispensing area?",
    "answers": [
      {
        "id": "opt1",
        "text": "The June self-inspection report or its photocopy."
      },
      {
        "id": "opt2",
        "text": "The March Board inspection report until the next Board visit."
      },
      {
        "id": "opt3",
        "text": "Both reports until the next registration renewal."
      },
      {
        "id": "opt4",
        "text": "Either report at the pharmacist manager\u2019s discretion."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.01.31(p) requires the more recent Board inspection or pharmacist-manager self-inspection using the Board form.",
    "distractorExplanations": {
      "opt2": "Rule 5.01.31(p) requires the more recent Board inspection or pharmacist-manager self-inspection using the Board form.",
      "opt3": "Rule 5.01.31(p) requires the more recent Board inspection or pharmacist-manager self-inspection using the Board form.",
      "opt4": "Rule 5.01.31(p) requires the more recent Board inspection or pharmacist-manager self-inspection using the Board form."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The March Board inspection report until the next Board visit.",
      "opt3": "Incorrect requirement or application: Both reports until the next registration renewal.",
      "opt4": "Incorrect requirement or application: Either report at the pharmacist manager\u2019s discretion."
    },
    "ruleToRemember": "Rule 5.01.31(p) requires the more recent Board inspection or pharmacist-manager self-inspection using the Board form.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 5.01.31"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "inspection-display",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-11",
    "conceptId": "A4-COMPOUNDING-HAZARDOUS",
    "familyId": "A4-COMPOUNDING-HAZARDOUS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Hazardous Drugs",
    "subtopic": "Hazardous Drugs",
    "difficulty": 4,
    "reasoningLevel": 4,
    "legalDeterminations": 3,
    "type": "scenario",
    "stem": "Under Colorado\u2019s hazardous-drug preparation rule, which engineering-control and room arrangement is specified?",
    "answers": [
      {
        "id": "opt1",
        "text": "A Class II BSC or CACI in a separated ISO Class 7 area negative to the positive-pressure anteroom."
      },
      {
        "id": "opt2",
        "text": "A Class II BSC or CACI in an ISO Class 7 area positive to the adjacent anteroom."
      },
      {
        "id": "opt3",
        "text": "A horizontal laminar-airflow hood in a separated ISO Class 7 area negative to the anteroom."
      },
      {
        "id": "opt4",
        "text": "A Class II BSC or CACI in an unclassified area with a positive-pressure anteroom."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 21.22.10(a) specifies a vertical-flow Class II biological safety cabinet or CACI in a physically separated ISO Class 7 area, negative to the adjacent positive-pressure anteroom.",
    "distractorExplanations": {
      "opt2": "Rule 21.22.10(a) specifies a vertical-flow Class II biological safety cabinet or CACI in a physically separated ISO Class 7 area, negative to the adjacent positive-pressure anteroom.",
      "opt3": "Rule 21.22.10(a) specifies a vertical-flow Class II biological safety cabinet or CACI in a physically separated ISO Class 7 area, negative to the adjacent positive-pressure anteroom.",
      "opt4": "Rule 21.22.10(a) specifies a vertical-flow Class II biological safety cabinet or CACI in a physically separated ISO Class 7 area, negative to the adjacent positive-pressure anteroom."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: A Class II BSC or CACI in an ISO Class 7 area positive to the adjacent anteroom.",
      "opt3": "Incorrect requirement or application: A horizontal laminar-airflow hood in a separated ISO Class 7 area negative to the anteroom.",
      "opt4": "Incorrect requirement or application: A Class II BSC or CACI in an unclassified area with a positive-pressure anteroom."
    },
    "ruleToRemember": "Rule 21.22.10(a) specifies a vertical-flow Class II biological safety cabinet or CACI in a physically separated ISO Class 7 area, negative to the adjacent positive-pressure anteroom.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 21.22.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "hazardous-compounding",
    "nabpCompetencies": [
      "4.2",
      "4.5"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-12",
    "conceptId": "A4-COMPOUNDING-HAZARDOUS",
    "familyId": "A4-COMPOUNDING-HAZARDOUS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Hazardous Drugs",
    "subtopic": "Hazardous Drugs",
    "difficulty": 5,
    "reasoningLevel": 5,
    "legalDeterminations": 3,
    "type": "ktype",
    "stem": "Which statements correctly describe Colorado hazardous-drug preparation requirements under the cited rule?\n\nI. Hazardous-drug preparation may use the same noncontainment engineering control as nonhazardous compounding when aseptic technique is adequate.\nII. Appropriate safety and containment techniques are used together with sterile aseptic technique.\nIII. Written spill and generated-waste procedures belong in the policy and procedure manual.",
    "answers": [
      {
        "id": "opt1",
        "text": "I only"
      },
      {
        "id": "opt2",
        "text": "III only"
      },
      {
        "id": "opt3",
        "text": "I and II only"
      },
      {
        "id": "opt4",
        "text": "II and III only"
      },
      {
        "id": "opt5",
        "text": "I, II, and III"
      }
    ],
    "correctAnswers": [
      "opt4"
    ],
    "explanation": "Statements II and III are correct. Hazardous-drug preparation requires the specified containment controls rather than relying on noncontainment equipment.",
    "distractorExplanations": {
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "ruleToRemember": "Hazardous-drug compliance is broader than sterility alone.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 21.22.10"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "hazardous-compounding",
    "nabpCompetencies": [
      "4.2",
      "4.5"
    ]
  },
  {
    "id": "V3-A4-13",
    "conceptId": "A4-RECORDS-DISTRIBUTION",
    "familyId": "A4-RECORDS-DISTRIBUTION",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "An SPDO receives stock from its managing prescription drug outlet. Which personnel identities belong in the distribution record?",
    "answers": [
      {
        "id": "opt1",
        "text": "The person issuing the stock and the person placing it into the device."
      },
      {
        "id": "opt2",
        "text": "The purchasing agent and the practitioner who most recently ordered the drug."
      },
      {
        "id": "opt3",
        "text": "The wholesaler representative and the person delivering the shipping container."
      },
      {
        "id": "opt4",
        "text": "The outlet owner and the device manufacturer\u2019s service representative."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited SPDO rule requires detailed chain-of-custody information, including involved personnel.",
    "distractorExplanations": {
      "opt2": "The cited SPDO rule requires detailed chain-of-custody information, including involved personnel.",
      "opt3": "The cited SPDO rule requires detailed chain-of-custody information, including involved personnel.",
      "opt4": "The cited SPDO rule requires detailed chain-of-custody information, including involved personnel."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: The purchasing agent and the practitioner who most recently ordered the drug.",
      "opt3": "Incorrect requirement or application: The wholesaler representative and the person delivering the shipping container.",
      "opt4": "Incorrect requirement or application: The outlet owner and the device manufacturer\u2019s service representative."
    },
    "ruleToRemember": "Inventory movement records must identify both product and responsible people.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "SPDO distribution provisions"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "spdo-records",
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A4-14",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "familyId": "A4-PRACTICE-SETTING-OPS",
    "competencyArea": 4,
    "competencyAreaName": "Pharmacy Operations",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Operations",
    "subtopic": "Pharmacy Operations",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "No new-outlet exemption applies. Which weekly opening schedule meets Colorado\u2019s minimum designated-day and continuous-hour requirements?",
    "answers": [
      {
        "id": "opt1",
        "text": "Monday four continuous hours and Thursday four continuous hours."
      },
      {
        "id": "opt2",
        "text": "Monday eight continuous hours and no other opening that week."
      },
      {
        "id": "opt3",
        "text": "Monday three continuous hours and Thursday five continuous hours."
      },
      {
        "id": "opt4",
        "text": "Monday through Thursday two continuous hours on each day."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 5.01.40 requires at least two designated days per week, each with at least four continuous hours. Merely totaling eight weekly hours is insufficient.",
    "distractorExplanations": {
      "opt2": "Rule 5.01.40 requires at least two designated days per week, each with at least four continuous hours. Merely totaling eight weekly hours is insufficient.",
      "opt3": "Rule 5.01.40 requires at least two designated days per week, each with at least four continuous hours. Merely totaling eight weekly hours is insufficient.",
      "opt4": "Rule 5.01.40 requires at least two designated days per week, each with at least four continuous hours. Merely totaling eight weekly hours is insufficient."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Monday eight continuous hours and no other opening that week.",
      "opt3": "Incorrect requirement or application: Monday three continuous hours and Thursday five continuous hours.",
      "opt4": "Incorrect requirement or application: Monday through Thursday two continuous hours on each day."
    },
    "ruleToRemember": "Rule 5.01.40 requires at least two designated days per week, each with at least four continuous hours. Merely totaling eight weekly hours is insufficient.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 5.01.40"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "operating-hours",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-13",
    "conceptId": "A1-TECH-CREDENTIALS",
    "familyId": "A1-TECH-CREDENTIALS",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacy Technicians",
    "subtopic": "Pharmacy Technicians",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "For Colorado\u2019s standard pharmacy-technician certification pathway, which credential meets the national-certification element?",
    "answers": [
      {
        "id": "opt1",
        "text": "Current certification from a nationally recognized certifying body accepted by the Board."
      },
      {
        "id": "opt2",
        "text": "Completion of a pharmacy employer\u2019s internal technician competency program."
      },
      {
        "id": "opt3",
        "text": "Completion of a pharmacy-technician training course without national certification."
      },
      {
        "id": "opt4",
        "text": "A pharmacist manager\u2019s attestation of equivalent supervised work experience."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's standard technician certification pathway requires qualifying national certification; employer training alone is not the same requirement.",
    "distractorExplanations": {
      "opt2": "Colorado's standard technician certification pathway requires qualifying national certification; employer training alone is not the same requirement.",
      "opt3": "Colorado's standard technician certification pathway requires qualifying national certification; employer training alone is not the same requirement.",
      "opt4": "Colorado's standard technician certification pathway requires qualifying national certification; employer training alone is not the same requirement."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: Completion of a pharmacy employer\u2019s internal technician competency program.",
      "opt3": "Incorrect requirement or application: Completion of a pharmacy-technician training course without national certification.",
      "opt4": "Incorrect requirement or application: A pharmacist manager\u2019s attestation of equivalent supervised work experience."
    },
    "ruleToRemember": "Employer competency training and the Board's standard certification requirement are separate concepts.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 29.00.30"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "tech-national-cert",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  },
  {
    "id": "V3-A1-14",
    "conceptId": "A1-TECH-CREDENTIALS",
    "familyId": "A1-TECH-CREDENTIALS",
    "competencyArea": 1,
    "competencyAreaName": "Licensure / Personnel",
    "jurisdiction": "Colorado",
    "topic": "Pharmacist Manager / PIC",
    "subtopic": "Pharmacist Manager / PIC",
    "difficulty": 3,
    "reasoningLevel": 3,
    "legalDeterminations": 2,
    "type": "scenario",
    "stem": "Where must the pharmacist manager post the technician information required by the Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "In the principal compounding/dispensing area."
      },
      {
        "id": "opt2",
        "text": "In the manager\u2019s office with the outlet personnel files."
      },
      {
        "id": "opt3",
        "text": "In the public waiting area beside the hours-of-operation notice."
      },
      {
        "id": "opt4",
        "text": "In an electronic personnel folder available to Board inspectors."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado manager responsibilities include posting specified technician information in the compounding/dispensing area.",
    "distractorExplanations": {
      "opt2": "Colorado manager responsibilities include posting specified technician information in the compounding/dispensing area.",
      "opt3": "Colorado manager responsibilities include posting specified technician information in the compounding/dispensing area.",
      "opt4": "Colorado manager responsibilities include posting specified technician information in the compounding/dispensing area."
    },
    "misconceptionTested": {
      "opt2": "Incorrect requirement or application: In the manager\u2019s office with the outlet personnel files.",
      "opt3": "Incorrect requirement or application: In the public waiting area beside the hours-of-operation notice.",
      "opt4": "Incorrect requirement or application: In an electronic personnel folder available to Board inspectors."
    },
    "ruleToRemember": "Verifying a credential and posting required information are separate operational duties.",
    "authority": [
      {
        "label": "Colorado State Board of Pharmacy Rules",
        "url": "https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+719-1&ruleVersionId=11936",
        "citation": "Rule 7.00.30"
      }
    ],
    "effectiveDate": "Current",
    "lastVerified": "2026-09-16",
    "active": true,
    "subconceptId": "manager-tech-posting",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ],
    "editorialRevision": "5.0.0"
  }
];
