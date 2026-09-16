window.APP_META = {
  "title": "Colorado MPJE Mastery v3 Strict",
  "version": "4.0.0",
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
  "releaseNote": "Whole-bank adversarial review passed project acceptance gates.",
  "strictQualityBuild": true,
  "qualityGateVersion": "adversarial-v4",
  "qualityAuditPassed": true,
  "qualityAuditDate": "2026-09-16"
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
    "stem": "A Colorado pharmacist license has been inactive for 30 months. The pharmacist completed 24 hours of continuing education during the most recent 24 months and six additional qualifying hours earlier in the inactive period. Which remaining step is required, assuming the application and fee are submitted?",
    "answers": [
      {
        "id": "opt1",
        "text": "Pass the Board-approved jurisprudence examination before the license is reinstated or reactivated."
      },
      {
        "id": "opt2",
        "text": "Complete another 24 hours of continuing education because recent hours cannot count toward reinstatement."
      },
      {
        "id": "opt3",
        "text": "Practice under direct pharmacist supervision for six months before requesting full reactivation."
      },
      {
        "id": "opt4",
        "text": "Repeat the pharmacist licensure examination because inactivity beyond 24 months cancels prior exam credit."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For a license inactive or expired more than 24 months, the pharmacist must submit one CE hour for each month inactive or expired, with 24 of those hours completed in the prior 24 months, and pass the approved jurisprudence examination. Thirty months therefore requires 30 CE hours total, which the facts supply.",
    "distractorExplanations": {
      "opt2": "The recent 24 hours are part of the total, not an additional block beyond it.",
      "opt3": "The cited reinstatement rule does not impose a six-month supervised-practice requirement.",
      "opt4": "The rule requires the jurisprudence examination, not repetition of the pharmacist licensure examination."
    },
    "misconceptionTested": {
      "opt2": "Double-counts the recent-CE requirement.",
      "opt3": "Imports an internship-style requirement into reinstatement.",
      "opt4": "Confuses jurisprudence requalification with repeating the full licensure exam."
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
    ]
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
    "stem": "A Colorado pharmacist license has been inactive for 18 months. The pharmacist submits the reinstatement application and fee with 24 hours of continuing education completed during the 24 months before application. No other disqualifying facts are present. Which statement best describes this pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The under-24-month pathway uses 24 recent CE hours without adding the jurisprudence examination required for longer inactivity."
      },
      {
        "id": "opt2",
        "text": "The under-24-month pathway uses one CE hour per inactive month and also requires the jurisprudence examination before reactivation."
      },
      {
        "id": "opt3",
        "text": "The under-24-month pathway uses 24 recent CE hours and also requires the jurisprudence examination before the license is reactivated."
      },
      {
        "id": "opt4",
        "text": "The under-24-month pathway uses one CE hour per inactive month without adding the jurisprudence examination used after longer inactivity."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "For inactivity or expiration of less than 24 months, Rule 4.03.00(b) requires the application and fee plus 24 hours of CE completed in the preceding 24 months. The jurisprudence examination appears in the over-24-month pathway.",
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
    ]
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-2026-fpv-advanced",
    "nabpCompetencies": [
      "1.1"
    ]
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 2,
    "reasoningLevel": 4,
    "subconceptId": "co-manager-integrated",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ]
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
    "competencyAreaName": "Licensure / Personnel",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-tech-cert-advanced",
    "nabpCompetencies": [
      "1.1",
      "1.2"
    ]
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
    "stem": "A patient\u2019s spouse calls and asks which antidepressant was dispensed last week. The spouse pays the patient\u2019s insurance premiums but is not the patient\u2019s authorized representative, and the patient has not otherwise authorized disclosure. Which action best fits Colorado\u2019s confidentiality rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Decline disclosure unless the spouse becomes an authorized recipient under law or patient authorization."
      },
      {
        "id": "opt2",
        "text": "Disclose the drug because a spouse who pays premiums is automatically the patient\u2019s authorized representative."
      },
      {
        "id": "opt3",
        "text": "Disclose the drug if the caller verifies the patient\u2019s address and date of birth without authorization."
      },
      {
        "id": "opt4",
        "text": "Disclose the drug because prescription identity is no longer protected after a third-party payer processes the claim."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.16 limits disclosure of prescription and medical information to specified recipients, including the patient, authorized representative, treating practitioners, pharmacy personnel serving the patient, persons authorized by law or the patient, and other permitted recipients. Payment of premiums alone does not establish authorization.",
    "distractorExplanations": {
      "opt2": "Paying premiums does not itself create authorized-representative status.",
      "opt3": "Identity verification confirms who is calling but does not create authority to receive the information.",
      "opt4": "Third-party payment does not make prescription information generally public."
    },
    "misconceptionTested": {
      "opt2": "Equates family/financial status with legal authorization.",
      "opt3": "Confuses authentication with authorization.",
      "opt4": "Assumes claim processing extinguishes confidentiality."
    },
    "ruleToRemember": "Confidentiality turns on legal or patient authorization, not family status or financial involvement by itself.",
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
    ]
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
    "stem": "A parent asks at the original dispensing for a second bottle of a covered prescription eye drop so the child can keep one bottle at school. The prescription authorizes enough total quantity, but the order does not state that an additional bottle is needed for school use. Which conclusion best fits the special rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The additional-bottle pathway is not met because the original order lacks the required school-use statement."
      },
      {
        "id": "opt2",
        "text": "The additional bottle may be supplied when the request occurs at the original dispensing and total quantity is sufficient."
      },
      {
        "id": "opt3",
        "text": "The additional bottle may be supplied after pharmacist documentation of the school need in the dispensing record."
      },
      {
        "id": "opt4",
        "text": "The additional bottle may be supplied when the payer confirms coverage and the patient has not used the benefit recently."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The special eye-drop rule requires several conditions together, including coverage, request at original dispensing, an original order stating that an additional bottle is needed for day care, school, or an adult day program, the one-additional-bottle-per-three-months limit, and compliance with total prescribed quantity.",
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
    ]
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
    "stem": "A pharmacist makes a minor adaptation to a prescription that is otherwise permitted by Colorado law. The final order accurately reflects the adapted directions, but the record does not show when the adaptation occurred or which pharmacist made it. What is the clearest documentation defect?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record must identify both the date of the adaptation and the pharmacist who made it."
      },
      {
        "id": "opt2",
        "text": "The corrected directions on the final label are sufficient when the adaptation does not alter drug strength."
      },
      {
        "id": "opt3",
        "text": "The adaptation record must identify the prescriber contact and the technician who entered the corrected directions."
      },
      {
        "id": "opt4",
        "text": "The additional adaptation record is required only when the change affects quantity rather than dosage form or directions."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 2.01.10(f) requires minor adaptations made under the statutory authority to detail the date and identity of the pharmacist making the adaptation.",
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
    ]
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
    "stem": "A pharmacy technician receives a prescription clarification that does not require professional interpretation. The technician updates the electronic prescription record with the clarified information but records neither the date of contact nor the name of the person who conveyed the clarification. Which statement best reflects Colorado\u2019s rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record is incomplete because it must include the contact date and the identity of the person conveying the clarification."
      },
      {
        "id": "opt2",
        "text": "The record is complete if the technician's identifier and the final pharmacist verifier are both captured electronically."
      },
      {
        "id": "opt3",
        "text": "The record is incomplete because a technician may enter the clarification only when the prescriber personally speaks to the pharmacist."
      },
      {
        "id": "opt4",
        "text": "The record is complete if the prescriber's office maintains its own retrievable documentation of the same clarification."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 2.01.20(a) requires any change or clarification to be documented with the initials or unique identifier of the responsible pharmacist, intern, or technician, the date contacted, and the name of the individual conveying the change or clarification.",
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
    ]
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
    "stem": "A pharmacist who is currently subject to a qualifying practice limitation based on sexual misconduct has a patient call on Monday to schedule a face-to-face vaccine appointment for Friday. No exception applies. When must the required written disclosure be provided?",
    "answers": [
      {
        "id": "opt1",
        "text": "On Monday, the same day the patient schedules the professional-services appointment."
      },
      {
        "id": "opt2",
        "text": "On Friday, immediately before the vaccine is administered but not earlier."
      },
      {
        "id": "opt3",
        "text": "Within 30 days after the vaccine encounter as part of the pharmacist\u2019s treatment record."
      },
      {
        "id": "opt4",
        "text": "At the next prescription pickup because vaccination is not included within professional services."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Rule 1.00.26 requires disclosure the same day a patient schedules a professional-services appointment. If an appointment is scheduled the same day services will occur, disclosure must occur before treatment. Administration of drugs and vaccines is included within professional services.",
    "distractorExplanations": {
      "opt2": "Waiting until Friday misses the same-day-as-scheduling requirement.",
      "opt3": "The rule requires advance disclosure, not post-encounter documentation.",
      "opt4": "Drug and vaccine administration are expressly included within professional services."
    },
    "misconceptionTested": {
      "opt2": "Assumes pre-treatment disclosure is always sufficient.",
      "opt3": "Confuses disclosure timing with other 30-day reports.",
      "opt4": "Assumes the duty applies only to dispensing or counseling."
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
    ]
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
    "stem": "A pharmacist lawfully substitutes a different manufacturer\u2019s equivalent product. The order records the prescribed drug, the drug actually dispensed, and the date of substitution, but records neither the distributor name nor the dispensed product\u2019s NDC. Which conclusion best fits Rule 2.01.20?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record is incomplete because it must also identify the distributor as on the package or the NDC."
      },
      {
        "id": "opt2",
        "text": "The record is complete because recording both drug names eliminates the need for a product-source identifier."
      },
      {
        "id": "opt3",
        "text": "The record is incomplete only for Schedule II prescriptions because noncontrolled substitutions require fewer details."
      },
      {
        "id": "opt4",
        "text": "The record is complete if the pharmacist can retrieve the wholesaler invoice later during an inspection."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When a substitution is made, Rule 2.01.20 requires the names of the prescribed and actually dispensed drugs and the date, plus the distributor name as it appears on the package or the NDC number.",
    "distractorExplanations": {
      "opt2": "The rule requires a distributor name or NDC in addition to the drug names and date.",
      "opt3": "The cited documentation rule is not limited to Schedule II prescriptions.",
      "opt4": "A later-retrievable invoice does not replace required prescription-record information."
    },
    "misconceptionTested": {
      "opt2": "Assumes therapeutic identity replaces product-source traceability.",
      "opt3": "Incorrectly narrows documentation to controlled substances.",
      "opt4": "Treats external purchasing records as a substitute."
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
    ]
  },
  {
    "id": "CO-CPP-01",
    "conceptId": "A2-COLLABORATIVE-PRACTICE",
    "jurisdiction": "Colorado",
    "topic": "Collaborative Practice",
    "subtopic": "Collaborative Practice",
    "difficulty": 5,
    "type": "multi",
    "stem": "Which are express Colorado pharmacist qualifications for entering a collaborative pharmacy practice agreement under Rule 17.00.30? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "Current Colorado pharmacist licensure."
      },
      {
        "id": "opt2",
        "text": "Current engagement in the practice of pharmacy."
      },
      {
        "id": "opt3",
        "text": "PharmD degree or at least five years of licensed-pharmacist experience."
      },
      {
        "id": "opt4",
        "text": "Ten years of hospital pharmacy experience."
      },
      {
        "id": "opt5",
        "text": "Ownership interest in the collaborating prescriber's practice."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2",
      "opt3"
    ],
    "explanation": "Rule 17.00.30 includes current Colorado licensure, active pharmacy practice, PharmD or at least five years of licensed-pharmacist experience, and adequate professional liability insurance, among other requirements.",
    "distractorExplanations": {
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
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
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-cppa-qual",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ]
  },
  {
    "id": "CO-EMERG-02",
    "conceptId": "A2-EMERGENCY-LTCF",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 5,
    "type": "multi",
    "stem": "The written notice after a Colorado emergency supply of a chronic maintenance drug must include which items? Select all that apply.",
    "answers": [
      {
        "id": "opt1",
        "text": "The dispensing pharmacy's identifying/contact information."
      },
      {
        "id": "opt2",
        "text": "The drug name, strength, dosage form, directions, and quantity dispensed."
      },
      {
        "id": "opt3",
        "text": "The patient's insurance group number."
      },
      {
        "id": "opt4",
        "text": "The pharmacy's acquisition cost for the emergency quantity."
      },
      {
        "id": "opt5",
        "text": "The wholesaler invoice number for the dispensed lot."
      }
    ],
    "correctAnswers": [
      "opt1",
      "opt2"
    ],
    "explanation": "Rule 3.00.23 specifies the pharmacy identifiers/contact information, drug details, patient name/DOB, and date of emergency dispensing. It does not list the insurance group number.",
    "distractorExplanations": {
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
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
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-emergency-maintenance",
    "nabpCompetencies": [
      "2.1"
    ]
  },
  {
    "id": "CO-VAX-03",
    "conceptId": "A2-IMMUNIZATION",
    "jurisdiction": "Colorado",
    "topic": "Immunizations",
    "subtopic": "Immunizations",
    "difficulty": 5,
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
        "text": "The date the vaccine information statement was provided."
      },
      {
        "id": "opt5",
        "text": "The patient's prescription-insurance BIN number."
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
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
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
    "familyId": "A2-IMMUNIZATION",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 3,
    "reasoningLevel": 5,
    "misconceptionTested": {
      "opt5": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-vax-records",
    "nabpCompetencies": [
      "2.2"
    ]
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
    "stem": "A pharmacist and prescriber create a CPPA but no process exists for communicating and documenting medication changes in the patient's medical record. Which deficiency is most direct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The agreement lacks the required process for communication and documentation of medication changes."
      },
      {
        "id": "opt2",
        "text": "The agreement lacks a required schedule for in-person pharmacist-prescriber case review."
      },
      {
        "id": "opt3",
        "text": "The agreement lacks a required provision assigning the prescriber exclusive responsibility for documentation."
      },
      {
        "id": "opt4",
        "text": "The agreement lacks a required patient-specific consent form for each medication change made under the agreement."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Collaborative-practice eligibility and operation involve several independent requirements, including current licensure, practice status, training/experience, insurance, patient relationship requirements where applicable, and communication/documentation.",
    "distractorExplanations": {
      "opt2": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts."
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
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "misconceptionTested": {
      "opt2": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule."
    },
    "subconceptId": "co-cppa-integrated",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ]
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
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-cppa-integrated",
    "nabpCompetencies": [
      "2.1",
      "2.2"
    ]
  },
  {
    "id": "CO-EMERG-01",
    "conceptId": "A2-EMERGENCY-LTCF",
    "jurisdiction": "Colorado",
    "topic": "Emergency Dispensing",
    "subtopic": "Emergency Dispensing",
    "difficulty": 1,
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
    "familyId": "A2-EMERGENCY-LTCF",
    "competencyAreaName": "Pharmacist Practice",
    "legalDeterminations": 1,
    "reasoningLevel": 1,
    "subconceptId": "co-emergency-maintenance",
    "nabpCompetencies": [
      "2.1"
    ]
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
    "stem": "A customer purchased 2.4 grams of pseudoephedrine base earlier today and now attempts to buy another package containing 1.5 grams of pseudoephedrine base. Assume no special exception applies. What is the federal retail-sales issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The additional sale would put the customer above the 3.6-gram daily sales limit."
      },
      {
        "id": "opt2",
        "text": "The sale is permitted because the customer remains below the nine-gram 30-day purchase limit."
      },
      {
        "id": "opt3",
        "text": "The sale is permitted when the second transaction occurs at a different retail location."
      },
      {
        "id": "opt4",
        "text": "The additional sale is barred only after the customer reaches nine grams during the same calendar day."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The federal CMEA retail framework limits sales of scheduled listed chemical products to 3.6 grams per purchaser per day and also imposes a separate nine-gram 30-day purchase limit.",
    "distractorExplanations": {
      "opt2": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt3": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt4": "This choice applies a related legal rule or would fit a slightly different fact pattern."
    },
    "ruleToRemember": "Apply the daily and 30-day pseudoephedrine limits independently; satisfying one does not excuse exceeding the other.",
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
      "opt2": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt3": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt4": "Applies a nearby rule to the wrong pathway or omits a required condition."
    },
    "subconceptId": "pseudoephedrine-sales-limits",
    "nabpCompetencies": [
      "3.8"
    ]
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
    "stem": "A customer has purchased 8.4 grams of pseudoephedrine base during the preceding 30 days and has made no purchase today. The customer requests a package containing 1.2 grams. Assume the ordinary federal retail limit applies. Which conclusion is correct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The sale would exceed the nine-gram 30-day purchase limit even though the separate daily limit has not been reached today."
      },
      {
        "id": "opt2",
        "text": "The sale fits the federal limits because the customer has not reached the 3.6-gram daily amount during the current day."
      },
      {
        "id": "opt3",
        "text": "The sale fits the federal limits because the customer signs the required logbook and presents acceptable identification for this transaction."
      },
      {
        "id": "opt4",
        "text": "The sale fits the federal limits because the product remains behind the counter and the requested package contains less than 3.6 grams."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 3.6-gram daily limit and nine-gram 30-day limit are separate federal restrictions. The proposed purchase would raise the 30-day amount to 9.6 grams.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
    },
    "ruleToRemember": "Pseudoephedrine retail compliance requires checking both the daily and rolling 30-day limits.",
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
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "subconceptId": "pseudoephedrine-thirty-day",
    "nabpCompetencies": [
      "3.8"
    ]
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
    "stem": "A retail pharmacy keeps pseudoephedrine products in an unlocked customer-accessible aisle but requires identification and a signed logbook at the register. Which federal compliance problem remains?",
    "answers": [
      {
        "id": "opt1",
        "text": "The placement violates the requirement to keep covered products behind the counter or in a locked cabinet."
      },
      {
        "id": "opt2",
        "text": "The placement is compliant because identification and logbook controls replace the separate secured-placement requirement."
      },
      {
        "id": "opt3",
        "text": "The placement is compliant because the package contains less than the federal daily purchase limit."
      },
      {
        "id": "opt4",
        "text": "The placement is compliant when an electronic sales log is used and acceptable identification is checked."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The federal CMEA framework includes product-placement controls in addition to identification, logbook, and quantity limits.",
    "distractorExplanations": {
      "opt2": "This option applies a related requirement but does not match the controlling facts.",
      "opt3": "This option applies a related requirement but does not match the controlling facts.",
      "opt4": "This option applies a related requirement but does not match the controlling facts."
    },
    "ruleToRemember": "Pseudoephedrine compliance is cumulative: placement, identification/logbook, and quantity restrictions are separate requirements.",
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
      "opt2": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt3": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt4": "Confuses a nearby rule or exception with the controlling requirement."
    },
    "subconceptId": "pseudoephedrine-retail-controls",
    "nabpCompetencies": [
      "3.8"
    ]
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
    "stem": "A Colorado outlet permanently closes Monday at noon. The last pharmacist manager relocates prescriptions Thursday at 1 PM. What is the clearest issue?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record relocation was late because it occurred outside the 72-hour closure period required by the cited rule."
      },
      {
        "id": "opt2",
        "text": "The record relocation was timely because the Board closure notice could satisfy the same 72-hour period independently."
      },
      {
        "id": "opt3",
        "text": "The record relocation was timely because patrons retained reasonable access to the pharmacy that received the prescription records."
      },
      {
        "id": "opt4",
        "text": "The record relocation was timely because the pharmacist manager completed the transfer before the next regular pharmacy business day."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado outlet-operation rules impose specific deadlines for closure, relocation, and changes affecting registration.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
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
    "legalDeterminations": 1,
    "reasoningLevel": 2,
    "misconceptionTested": {
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "subconceptId": "co-outlet-operations",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ]
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
    "stem": "A Colorado prescription drug outlet plans to purchase routine prescription stock from a supplier that is federally authorized to distribute the products but is not registered with the Colorado Board. No investigational-drug exception applies. Which compliance issue is most direct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The outlet should not use that supplier for routine stock because the cited rule requires procurement from a Board-registered source."
      },
      {
        "id": "opt2",
        "text": "The outlet may use the supplier because federal distribution authority satisfies the Colorado procurement requirement for routine stock."
      },
      {
        "id": "opt3",
        "text": "The outlet may use the supplier for noncontrolled prescription drugs but not for controlled substances under the cited Colorado rule."
      },
      {
        "id": "opt4",
        "text": "The outlet may use the supplier for a one-time purchase when the pharmacist manager documents the reason and verifies product integrity."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado Board Rule 1.00.24 requires a prescription drug outlet to ensure that prescription drugs and controlled substances are procured from an entity or person registered by the Board, subject to the stated exceptions.",
    "distractorExplanations": {
      "opt2": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt3": "This option applies a related legal rule or a nearby but different factual pathway.",
      "opt4": "This option applies a related legal rule or a nearby but different factual pathway."
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
      "opt2": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt3": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway.",
      "opt4": "Confuses the controlling rule with a related exception, timing rule, or authorization pathway."
    },
    "nabpCompetencies": [
      "4.1",
      "4.2"
    ]
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
    "stem": "A fulfillment pharmacy sends a completed prescription back to the originating pharmacy rather than directly to the patient. The originating pharmacy records the date received and the carrier type but not who accepted the delivery. Which requirement is incomplete?",
    "answers": [
      {
        "id": "opt1",
        "text": "The receipt record is missing the name of the pharmacy employee who accepted the delivery."
      },
      {
        "id": "opt2",
        "text": "The receipt record is missing a patient signature confirming receipt from the originating pharmacy."
      },
      {
        "id": "opt3",
        "text": "The receipt record is missing the fulfillment pharmacist's individual license-renewal date."
      },
      {
        "id": "opt4",
        "text": "The receipt record is missing a second prescription number assigned by the fulfillment pharmacy."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "When an originating pharmacy receives a prescription from a fulfillment pharmacy, the cited rule requires the date of receipt, method of delivery, and name of the pharmacy employee accepting delivery.",
    "distractorExplanations": {
      "opt2": "This option applies a related requirement but does not match the controlling facts.",
      "opt3": "This option applies a related requirement but does not match the controlling facts.",
      "opt4": "This option applies a related requirement but does not match the controlling facts."
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
      "opt2": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt3": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt4": "Confuses a nearby rule or exception with the controlling requirement."
    }
  },
  {
    "id": "CO-TELE-03",
    "conceptId": "A4-PRACTICE-SETTING-OPS",
    "jurisdiction": "Colorado",
    "topic": "Central Fill / Delivery",
    "subtopic": "Central Fill / Delivery",
    "difficulty": 4,
    "type": "scenario",
    "stem": "A fulfillment pharmacy can show when an order was received and fulfilled, but its record cannot identify the pharmacist responsible for final evaluation or the date and method of delivery. Which requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record lacks required responsibility and delivery-traceability elements for the completed order."
      },
      {
        "id": "opt2",
        "text": "The record is sufficient because receipt and fulfillment dates establish the required audit trail."
      },
      {
        "id": "opt3",
        "text": "The record is sufficient when the originating pharmacy separately maintains the original prescription."
      },
      {
        "id": "opt4",
        "text": "The record is deficient only when the fulfilled prescription is a controlled substance."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The fulfillment pharmacy must retain an electronic record identifying the pharmacist responsible for final evaluation and the fulfillment and delivery details required by the rule.",
    "distractorExplanations": {
      "opt2": "This option applies a related requirement but does not match the controlling facts.",
      "opt3": "This option applies a related requirement but does not match the controlling facts.",
      "opt4": "This option applies a related requirement but does not match the controlling facts."
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
      "opt2": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt3": "Confuses a nearby rule or exception with the controlling requirement.",
      "opt4": "Confuses a nearby rule or exception with the controlling requirement."
    }
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
    "competencyAreaName": "Pharmacy Operations",
    "legalDeterminations": 2,
    "reasoningLevel": 2,
    "subconceptId": "co-outlet-operations",
    "nabpCompetencies": [
      "4.2",
      "4.7"
    ]
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
    "stem": "A pharmacist holds current licenses in Colorado and another state. The other-state license becomes subject to active discipline while the Colorado license remains unrestricted. Which fact is most relevant to Colorado's good-standing analysis for a later transfer application?",
    "answers": [
      {
        "id": "opt1",
        "text": "The active discipline on the other-state license matters to good standing."
      },
      {
        "id": "opt2",
        "text": "The Colorado license status alone controls the transfer review."
      },
      {
        "id": "opt3",
        "text": "The pharmacist's employer decides whether the discipline is material."
      },
      {
        "id": "opt4",
        "text": "The discipline matters only if it involved a controlled substance."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's transfer rule looks to good standing across licenses held by the applicant, not just the license used for transfer.",
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
    ]
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
    "stem": "A pharmacist manager learns at 2 PM that a staff pharmacist is impaired by alcohol and removes the pharmacist from duty. The manager plans to report the event with the monthly compliance file. Which step remains deficient?",
    "answers": [
      {
        "id": "opt1",
        "text": "The Board report should be made immediately rather than delayed."
      },
      {
        "id": "opt2",
        "text": "The report should wait until a medication error is confirmed."
      },
      {
        "id": "opt3",
        "text": "The report should be sent only after the staff pharmacist resigns."
      },
      {
        "id": "opt4",
        "text": "The report should be deferred until the next license renewal."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The manager's incident-report duty for impairment is immediate.",
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
    ]
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
    "stem": "Five technicians are on duty; three are fully Board-certified and two are provisional. No other staffing issue exists. Which conclusion best fits the majority-certification requirement?",
    "answers": [
      {
        "id": "opt1",
        "text": "The staffing mix satisfies the majority-certification element because three of five technicians are fully certified."
      },
      {
        "id": "opt2",
        "text": "The staffing mix fails because a majority requires four of five technicians to be fully certified."
      },
      {
        "id": "opt3",
        "text": "The staffing mix satisfies the rule only if one provisional technician is removed from the shift."
      },
      {
        "id": "opt4",
        "text": "The staffing mix fails because provisional technicians are excluded when determining the technician count."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Three of five is a majority, so the certification-mix requirement is met.",
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
    "ruleToRemember": "When three or more technicians are on duty, test whether a majority are fully certified.",
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
    ]
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
    "stem": "A new pharmacist manager begins July 1. The controlled-substance inventory is completed July 3 at close of business, while the ownership paperwork is filed July 20. Which timing conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Both actions can fit their separate Colorado timing requirements."
      },
      {
        "id": "opt2",
        "text": "The inventory is timely but the ownership paperwork is necessarily late."
      },
      {
        "id": "opt3",
        "text": "The paperwork is timely but the inventory is necessarily late."
      },
      {
        "id": "opt4",
        "text": "Both actions are late because each uses a 72-hour deadline."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The manager-change inventory uses a 72-hour window, while the registration-transfer action uses a different 30-day clock.",
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
    ]
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
    "stem": "A pharmacist previously reported a condition that limited safe practice. Four months later, treatment materially improves the condition and restrictions are reduced. Which reporting approach best fits the confidential-agreement rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Report the significant positive change within the required 30-day period."
      },
      {
        "id": "opt2",
        "text": "Delay reporting unless the condition later worsens during active practice."
      },
      {
        "id": "opt3",
        "text": "Report the improvement at the pharmacist's next license renewal."
      },
      {
        "id": "opt4",
        "text": "Delay reporting unless the pharmacist also changes employment or practice setting."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Significant positive or negative changes in the condition are reportable.",
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
    ]
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
    "stem": "A pharmacist seeking Colorado licensure by transfer meets the education, examination, and good-standing requirements but lacks the required recent practice or qualifying alternative experience. Which conclusion best follows?",
    "answers": [
      {
        "id": "opt1",
        "text": "The transfer application remains incomplete because the experience element is independent."
      },
      {
        "id": "opt2",
        "text": "The experience element is waived once good standing is established."
      },
      {
        "id": "opt3",
        "text": "The experience element is waived if the pharmacist has national certification."
      },
      {
        "id": "opt4",
        "text": "The experience element applies only to pharmacists transferring from outside the United States."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Transfer criteria operate cumulatively; satisfying other elements does not erase the experience requirement.",
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
    "ruleToRemember": "Licensure by transfer is a multi-element test, not a pick-one pathway.",
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
    ]
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
    "stem": "A patient declines counseling on a new therapy. The pharmacy documents the refusal in a note that is not linked to the prescription and cannot be retrieved from the patient profile. Which defect is most important?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refusal record is not directly linked and readily retrievable as required."
      },
      {
        "id": "opt2",
        "text": "The patient should have been required to accept counseling before dispensing."
      },
      {
        "id": "opt3",
        "text": "The refusal is invalid unless the prescriber also signs the note."
      },
      {
        "id": "opt4",
        "text": "The refusal is valid only when the patient signs a paper form."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits refusal but requires documentation in the corresponding record and ready retrievability.",
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
    "ruleToRemember": "A valid refusal does not eliminate the documentation requirement.",
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
    ]
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
    "stem": "A patient cannot understand the pharmacist's spoken English and has not refused counseling. Which next step best fits Colorado law?",
    "answers": [
      {
        "id": "opt1",
        "text": "Use an alternative method that allows the patient to understand the counseling."
      },
      {
        "id": "opt2",
        "text": "Provide the English label and treat the counseling duty as completed."
      },
      {
        "id": "opt3",
        "text": "Ask the technician to document a refusal on the patient's behalf."
      },
      {
        "id": "opt4",
        "text": "Delay the prescription until the prescriber performs the counseling."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A language barrier changes how counseling is delivered; it does not remove the duty.",
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
    "ruleToRemember": "Use an alternative means when oral counseling cannot be understood.",
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
    ]
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
    "stem": "A caller correctly states a patient's name, address, and date of birth but has no patient authorization and no independent legal authority to receive prescription information. What should the pharmacist conclude?",
    "answers": [
      {
        "id": "opt1",
        "text": "Successful identity verification does not create authority to receive the information."
      },
      {
        "id": "opt2",
        "text": "Successful identity verification is enough to permit disclosure of the drug name."
      },
      {
        "id": "opt3",
        "text": "Disclosure is permitted if the caller knows the prescription number."
      },
      {
        "id": "opt4",
        "text": "Disclosure is permitted if the caller agrees not to share the information."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Authentication and authorization are distinct. The rule identifies categories of permitted recipients.",
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
    "ruleToRemember": "Knowing patient identifiers proves identity, not permission to receive protected information.",
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
    ]
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
    "stem": "Which statements describe recipients who fall within Colorado's permitted disclosure categories on the stated facts?\n\nI. A neighbor who routinely drives the patient but has no authorization.\nII. A spouse who pays the patient's premiums but has no representative authority.\nIII. A third-party payer receiving information needed to process the patient's claim.",
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
      "opt1": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt3": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt4": "This option applies a related rule but does not satisfy the controlling facts.",
      "opt5": "This option applies a related rule but does not satisfy the controlling facts."
    },
    "misconceptionTested": {
      "opt1": "Misapplies a nearby legal rule.",
      "opt3": "Misapplies a nearby legal rule.",
      "opt4": "Misapplies a nearby legal rule.",
      "opt5": "Misapplies a nearby legal rule."
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
    ]
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
    "stem": "An appropriately trained pharmacist wants to order and administer an FDA-authorized CLIA-waived test in the pharmacy. Which statement best fits the cited Board rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "The trained pharmacist may order and administer the qualifying CLIA-waived test subject to applicable FDA limitations."
      },
      {
        "id": "opt2",
        "text": "The trained pharmacist may administer the test after a practitioner issues a patient-specific order."
      },
      {
        "id": "opt3",
        "text": "The trained pharmacist may order the test when the pharmacy has a collaborative practice agreement covering that condition."
      },
      {
        "id": "opt4",
        "text": "The trained pharmacist may administer the test independently but needs practitioner authorization to order it."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado authorizes appropriately trained pharmacists to order and administer CLIA-waived tests under the cited rule.",
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
    ]
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
    "stem": "At the original dispensing, a parent requests an extra eye-drop bottle for school. Insurance coverage and total quantity are adequate, but the prescription itself does not state a school-use need. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The special additional-bottle pathway is unavailable because the original order lacks the required school-use statement."
      },
      {
        "id": "opt2",
        "text": "The additional bottle may be dispensed because the request was made at the original dispensing and total quantity is adequate."
      },
      {
        "id": "opt3",
        "text": "The additional bottle may be dispensed when the parent documents the school location in the prescription record."
      },
      {
        "id": "opt4",
        "text": "The additional bottle may be dispensed when the pharmacist reduces each bottle so total quantity remains unchanged."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The special exception requires several conditions together, including the prescription-order statement.",
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
    ]
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
    "stem": "A 30-day eye-drop supply was last dispensed 20 days ago. The patient asks for an early refill under Colorado's special eye-drop rule, and the order otherwise qualifies. Which conclusion follows?",
    "answers": [
      {
        "id": "opt1",
        "text": "The request is one day before the 21-day threshold for a 30-day supply."
      },
      {
        "id": "opt2",
        "text": "The request meets the threshold because two-thirds of the supply has elapsed."
      },
      {
        "id": "opt3",
        "text": "The request meets the threshold because the order authorizes additional quantity."
      },
      {
        "id": "opt4",
        "text": "The request is barred until the full 30-day period has elapsed."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited rule uses specific 21/42/63-day thresholds for 30/60/90-day supplies.",
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
    "ruleToRemember": "Use the rule's specified threshold rather than a general fraction-of-days heuristic.",
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
    ]
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
    "stem": "A physician sends a nonpatient-specific order for commercially manufactured antibiotics for clinic stock. A veterinarian sends a separate request for compounded office stock under the veterinary pathway. Which distinction matters?",
    "answers": [
      {
        "id": "opt1",
        "text": "The general office-use order is invalid, while the veterinary compounded-stock pathway has separate requirements."
      },
      {
        "id": "opt2",
        "text": "Both requests are valid because both practitioners may prescribe prescription drugs."
      },
      {
        "id": "opt3",
        "text": "Both requests are invalid because no office-stock pathway exists in Colorado."
      },
      {
        "id": "opt4",
        "text": "The physician request is valid, while the veterinarian request is barred because it is compounded."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado distinguishes invalid general office-use prescriptions from the veterinary compounded office-stock pathway.",
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
    ]
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
    "stem": "A routine prescription comes from a practitioner with no valid patient-practitioner relationship. A separate opiate-antagonist order is issued in good faith under the statutory exception. Which conclusion best fits Colorado law?",
    "answers": [
      {
        "id": "opt1",
        "text": "The routine order has a relationship problem; the antagonist order may fit the exception."
      },
      {
        "id": "opt2",
        "text": "Both orders are valid because a lawful relationship does not require an in-person examination."
      },
      {
        "id": "opt3",
        "text": "Both orders are invalid because each prescription requires a prior in-person examination."
      },
      {
        "id": "opt4",
        "text": "The routine order is valid, while the antagonist order requires a preexisting relationship."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires a valid relationship for ordinary orders while recognizing a specific opiate-antagonist exception.",
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
    ]
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
    "stem": "A pharmacist makes a lawful minor adaptation and updates the directions, but the record omits the date and pharmacist identifier. Which requirement is missing?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record should identify when the adaptation occurred and who made it."
      },
      {
        "id": "opt2",
        "text": "The record should contain a new prescription number for the adapted order."
      },
      {
        "id": "opt3",
        "text": "The record should contain the wholesaler invoice for the dispensed product."
      },
      {
        "id": "opt4",
        "text": "The record should contain a patient waiver of counseling for the adapted order."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires traceable documentation of the adaptation date and pharmacist identity.",
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
    ]
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
    "stem": "A lawful manufacturer substitution is documented with both drug names and the substitution date, but neither the distributor name nor NDC appears. Which conclusion is correct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The substitution record remains incomplete because a required product-source identifier is missing."
      },
      {
        "id": "opt2",
        "text": "The substitution record is complete because both drug names and date are present."
      },
      {
        "id": "opt3",
        "text": "The substitution record is incomplete only when the substituted drug is controlled."
      },
      {
        "id": "opt4",
        "text": "The substitution record is complete if a wholesaler invoice remains retrievable later."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited rule requires the distributor name or NDC in addition to drug names and date.",
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
    "ruleToRemember": "Substitution records must identify what changed and the actual product source.",
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
    ]
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
    "stem": "A technician documents a permissible clarification but omits the date of contact and the name of the person conveying the change. A pharmacist later verifies the prescription. Which statement is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Final verification does not replace the missing clarification audit-trail elements."
      },
      {
        "id": "opt2",
        "text": "Final verification cures the missing documentation because the drug is noncontrolled."
      },
      {
        "id": "opt3",
        "text": "The clarification is void because technicians may not document clarifications."
      },
      {
        "id": "opt4",
        "text": "The clarification is valid if the prescriber's office keeps its own call record."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires date/contact identity information in the pharmacy record for a change or clarification.",
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
    ]
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
    "stem": "A pharmacist observes a repeated verification shortcut that creates a continuing patient-safety risk, although no injury has yet occurred. Management starts internal remediation. Which duty remains?",
    "answers": [
      {
        "id": "opt1",
        "text": "The repeated dangerous practice creates a timely Board-reporting responsibility even before documented patient injury."
      },
      {
        "id": "opt2",
        "text": "The pharmacist may rely on the employer's corrective-action process unless the conduct results in patient injury."
      },
      {
        "id": "opt3",
        "text": "The pharmacist may defer Board reporting while the internal investigation remains open and patient harm has not occurred."
      },
      {
        "id": "opt4",
        "text": "The pharmacist should report after the pattern is substantiated by a second pharmacist or compliance officer."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The professional-conduct rule addresses a dangerous pattern before actual injury occurs.",
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
    ]
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
    "stem": "A trained technician is delegated vaccine administration. The patient then asks whether a complex drug interaction creates a contraindication. Which task remains with the pharmacist?",
    "answers": [
      {
        "id": "opt1",
        "text": "Evaluate the clinical interaction while the technician may perform the delegated administration task."
      },
      {
        "id": "opt2",
        "text": "Allow the technician to resolve the interaction because administration authority includes clinical judgment."
      },
      {
        "id": "opt3",
        "text": "Cancel the vaccine because delegation ends when the patient asks a medication question."
      },
      {
        "id": "opt4",
        "text": "Refer the question to the prescriber because pharmacists may not assess interaction risk."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Delegated administration does not transfer pharmacist clinical judgment.",
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
    "ruleToRemember": "Separate a delegable physical task from a clinical decision.",
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
    ]
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
    "stem": "A pharmacist has eight years of licensed practice, adequate insurance, and a current Colorado license but no PharmD. Which CPPA qualification element is satisfied by the experience pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The experience can satisfy the alternative experience-based qualification for collaborative practice."
      },
      {
        "id": "opt2",
        "text": "The experience cannot substitute because a PharmD is required for collaborative practice."
      },
      {
        "id": "opt3",
        "text": "The experience qualifies when the full period occurred in hospital practice."
      },
      {
        "id": "opt4",
        "text": "The experience qualifies when the collaborating prescriber directly employs the pharmacist."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited rule permits a PharmD or at least five years of licensed-pharmacist experience.",
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
    "ruleToRemember": "CPPA eligibility includes an alternative experience pathway.",
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
    ]
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
    "stem": "A pharmacist has a current Colorado license, a PharmD, and adequate professional liability coverage but is not currently engaged in the practice of pharmacy. Which CPPA qualification is most directly implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The rule's requirement that the pharmacist be engaged in the practice of pharmacy."
      },
      {
        "id": "opt2",
        "text": "The rule's requirement that the pharmacist have at least five years of licensed practice despite holding a PharmD."
      },
      {
        "id": "opt3",
        "text": "The rule's requirement that the pharmacist be employed by the collaborating prescriber before entering the agreement."
      },
      {
        "id": "opt4",
        "text": "The rule's requirement that the pharmacist maintain a separate controlled-substance registration for collaborative practice."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The CPPA qualification rule includes being currently engaged in the practice of pharmacy as an independent qualification.",
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
    "ruleToRemember": "A CPPA is not just authorization; it needs operational communication and documentation.",
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
    ]
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
    "stem": "A pharmacist considers treating a 9-year-old after a qualifying test. The proposed drug is noncontrolled and FDA-labeled for the child, but the condition is outside the statutory categories. Which fact prevents use of the cited independent-prescribing pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "The condition falls outside the categories authorized for that age group."
      },
      {
        "id": "opt2",
        "text": "The patient is younger than twelve despite meeting the other stated conditions."
      },
      {
        "id": "opt3",
        "text": "The drug is noncontrolled rather than a controlled substance."
      },
      {
        "id": "opt4",
        "text": "The drug is being used according to FDA labeling."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 pathway is conditional on age, condition category, drug status, and other requirements.",
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
    "ruleToRemember": "FDA labeling alone does not expand the statute's condition categories.",
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
    ]
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
    "stem": "A pharmacist lawfully tests and treats a 10-year-old and the parent identifies a primary care provider. Which additional duty remains relevant after treatment?",
    "answers": [
      {
        "id": "opt1",
        "text": "Notify the primary care provider as soon as practicable consistent with privacy law."
      },
      {
        "id": "opt2",
        "text": "Wait until the next refill before communicating with the primary care provider."
      },
      {
        "id": "opt3",
        "text": "Report the treatment to DEA because the pharmacist issued a prescription."
      },
      {
        "id": "opt4",
        "text": "Convert the encounter into a collaborative practice agreement after dispensing."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The 2026 minor-patient pathway includes PCP notification or referral requirements.",
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
    "ruleToRemember": "Minor-patient authority includes follow-up duties, not just prescribing criteria.",
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
    ]
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
    "stem": "A pharmacist lawfully provides an emergency chronic-maintenance supply but waits until the next afternoon to notify the practitioner in writing. Which condition was not met?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist failed the requirement for immediate written practitioner notification after dispensing."
      },
      {
        "id": "opt2",
        "text": "The pharmacist should have reported the emergency supply to the Board instead."
      },
      {
        "id": "opt3",
        "text": "The patient should have delivered written notice before receiving the emergency medication."
      },
      {
        "id": "opt4",
        "text": "The pharmacist should have waited for a new prescription instead of dispensing."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited emergency-dispensing pathway requires immediate written notification to the practitioner of record.",
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
    ]
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
    "stem": "An LTCF first-dose request otherwise qualifies, but the pharmacy proposes a 96-hour noncontrolled supply and has already used the first-dose pathway once for the same order. Which defects are present?",
    "answers": [
      {
        "id": "opt1",
        "text": "Both the quantity limit and the one-time-per-order condition are exceeded."
      },
      {
        "id": "opt2",
        "text": "The quantity is acceptable, but the repeat use is not acceptable."
      },
      {
        "id": "opt3",
        "text": "The repeat use is acceptable, but the quantity is not acceptable."
      },
      {
        "id": "opt4",
        "text": "Neither condition is a problem because the drug is noncontrolled."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The first-dose pathway is limited to up to 72 hours and one use per order.",
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
    "ruleToRemember": "Check both the quantity ceiling and the frequency limit.",
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
    ]
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
    "stem": "A patient presents a paper marked 'COPY FOR REFERENCE ONLY' with refills remaining. A technician can process a lawful noncontrolled transfer. Which action is appropriate?",
    "answers": [
      {
        "id": "opt1",
        "text": "Use the copy as information, then obtain authority through a lawful transfer or prescriber authorization."
      },
      {
        "id": "opt2",
        "text": "Dispense directly from the copy because the remaining refills make it a valid prescription."
      },
      {
        "id": "opt3",
        "text": "Have the technician convert the copy into a new oral prescription before dispensing."
      },
      {
        "id": "opt4",
        "text": "Dispense one refill from the copy, then complete a transfer for future refills."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "A reference copy is informational and does not itself authorize dispensing.",
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
    ]
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
    "stem": "A Schedule IV prescription is five months old and has already been refilled five times. The patient requests another refill. Which limit controls?",
    "answers": [
      {
        "id": "opt1",
        "text": "The five-refill maximum has been reached even though six months have not elapsed."
      },
      {
        "id": "opt2",
        "text": "The refill is permitted because the prescription is still within six months."
      },
      {
        "id": "opt3",
        "text": "The refill is permitted if the pharmacy has not transferred the prescription."
      },
      {
        "id": "opt4",
        "text": "The refill is permitted if the prescriber originally wrote 'PRN refills'."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Schedule III-IV prescriptions must satisfy both the time limit and refill-count limit.",
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
    "ruleToRemember": "The six-month clock and five-refill ceiling are independent.",
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
    ]
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
    "stem": "Two pharmacies share the qualifying real-time online database. A Schedule III prescription is three months old, has lawful refills remaining, and was previously moved between the two pharmacies. Which fact changes the ordinary one-transfer analysis?",
    "answers": [
      {
        "id": "opt1",
        "text": "The shared database can permit additional transfers while lawful refill authority remains."
      },
      {
        "id": "opt2",
        "text": "The prior transfer permanently prevents future dispensing by either participating pharmacy."
      },
      {
        "id": "opt3",
        "text": "The prescription's age converts the remaining refills into noncontrolled refill authority."
      },
      {
        "id": "opt4",
        "text": "The shared database removes the underlying federal refill-count and time limitations."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The shared-database exception changes the transfer limit but not the underlying refill limits.",
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
    ]
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
    "stem": "A valid Schedule II prescription appears in the pharmacy system with two refills remaining. Which legal conclusion controls?",
    "answers": [
      {
        "id": "opt1",
        "text": "The software field does not create refill authority for Schedule II prescriptions."
      },
      {
        "id": "opt2",
        "text": "The software field authorizes the two refills if the prescription was electronic."
      },
      {
        "id": "opt3",
        "text": "The software field authorizes one refill if the prescriber confirms it verbally."
      },
      {
        "id": "opt4",
        "text": "The software field authorizes the refills until six months from the written date."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal law prohibits Schedule II refills.",
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
    ]
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
    "stem": "A patient requests a permissible partial fill of a Schedule II prescription on June 1 for reasons unrelated to stock. The patient returns July 2 for the balance. Which issue is most important?",
    "answers": [
      {
        "id": "opt1",
        "text": "The patient-request partial-fill pathway generally requires completion within 30 days of the written date."
      },
      {
        "id": "opt2",
        "text": "The stock-shortage partial-fill pathway controls because any partial Schedule II dispensing uses the 72-hour remainder rule."
      },
      {
        "id": "opt3",
        "text": "The LTCF partial-fill pathway controls because the prescription remains open after the initial partial dispensing."
      },
      {
        "id": "opt4",
        "text": "The multiple-prescription pathway controls when the patient requests the remainder after the first partial dispensing."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The patient/practitioner-requested pathway generally uses 30 days from the written date.",
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
    "ruleToRemember": "Different Schedule II partial-fill pathways have different clocks.",
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
    ]
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
    "stem": "A controlled-substance prescription is complete on its face, but unresolved facts strongly suggest it was not issued for a legitimate medical purpose. The prescriber's DEA registration is active. Which principle controls?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist's corresponding responsibility remains despite the facial completeness and active registration."
      },
      {
        "id": "opt2",
        "text": "The active DEA registration resolves the legitimacy question unless DEA has suspended the prescriber."
      },
      {
        "id": "opt3",
        "text": "The complete prescription form requires dispensing unless the patient requests a transfer."
      },
      {
        "id": "opt4",
        "text": "The pharmacist may ignore the red flags if the prescription quantity is within usual dosing limits."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Federal law places a corresponding responsibility on the pharmacist who fills a controlled-substance prescription.",
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
    ]
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
    "stem": "An unfilled electronic Schedule II prescription is transferred once between Colorado pharmacies by licensed pharmacists, remains electronic, and is not altered. Which event would most clearly defeat this initial-transfer pathway?",
    "answers": [
      {
        "id": "opt1",
        "text": "A second request to transfer the same prescription again before initial dispensing."
      },
      {
        "id": "opt2",
        "text": "The receiving pharmacist assigns the prescription an internal pharmacy identifier."
      },
      {
        "id": "opt3",
        "text": "The patient asks to pick up the prescription at the receiving pharmacy."
      },
      {
        "id": "opt4",
        "text": "The receiving pharmacy documents the source pharmacy in its record."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The initial electronic controlled-substance transfer pathway is one-time and has specific electronic-preservation conditions.",
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
    ]
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
    "stem": "A pharmacy lawfully substitutes an equivalent product but prints a container label naming a different product than the drug actually placed in the container. Which rule is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The label should identify the drug actually contained in the package, subject to lawful practitioner direction."
      },
      {
        "id": "opt2",
        "text": "The label should preserve the originally prescribed product name when an equivalent product is substituted."
      },
      {
        "id": "opt3",
        "text": "The label may identify either product if the substitution record contains the dispensed product's NDC."
      },
      {
        "id": "opt4",
        "text": "The label may use the prescribed product name when the pharmacist documents therapeutic equivalence in the record."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado requires the container label to correspond to the identity of the actual drug, subject to lawful practitioner direction.",
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
    ]
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
    "stem": "A lawful substitution record contains both drug names, the substitution date, and the NDC but omits a required notation identifying an intentional therapeutic-class substitution. Which defect remains?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record lacks the required notation identifying the therapeutic-class substitution."
      },
      {
        "id": "opt2",
        "text": "The record lacks a second prescription number assigned to the substituted product."
      },
      {
        "id": "opt3",
        "text": "The record lacks a patient waiver covering counseling before the substitution occurred."
      },
      {
        "id": "opt4",
        "text": "The record lacks a new prescriber signature obtained after the substitution occurred."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Therapeutic-class substitution carries an additional notation requirement beyond ordinary substitution documentation.",
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
    ]
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
    "stem": "A certified technician receives a new oral noncontrolled prescription and a pharmacist verifies the transcription before dispensing. Which part of the transaction is legally defective?",
    "answers": [
      {
        "id": "opt1",
        "text": "The technician's receipt and reduction of the new oral order."
      },
      {
        "id": "opt2",
        "text": "The pharmacist's final verification of the transcribed order."
      },
      {
        "id": "opt3",
        "text": "The noncontrolled status of the prescribed medication."
      },
      {
        "id": "opt4",
        "text": "The use of an electronic record after the telephone call."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The general oral-order rule reserves receipt/reduction to a pharmacist or intern, apart from specific exceptions.",
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
    ]
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
    "stem": "A Schedule III prescription is five months old, has one refill left, and has never been transferred. The patient requests transfer to a non-shared-database pharmacy. Which facts must be checked independently before transfer?",
    "answers": [
      {
        "id": "opt1",
        "text": "The remaining refill authority and the separate transfer authority."
      },
      {
        "id": "opt2",
        "text": "The remaining refill authority alone because transfer count follows refill count."
      },
      {
        "id": "opt3",
        "text": "The transfer authority alone because prescription age does not matter."
      },
      {
        "id": "opt4",
        "text": "The prescriber's DEA registration alone because it supersedes transfer limits."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Transfer validity depends on more than one independent controlled-substance rule.",
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
    "ruleToRemember": "Refill authority and transfer authority are separate legal questions.",
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
    ]
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
    "stem": "A pharmacist discovers that a manufacturer's container seal is compromised and the product's integrity cannot be established. Which dispensing principle should control?",
    "answers": [
      {
        "id": "opt1",
        "text": "Do not dispense the product until integrity and suitability are established."
      },
      {
        "id": "opt2",
        "text": "Dispense the product if the expiration date has not passed."
      },
      {
        "id": "opt3",
        "text": "Dispense the product if the patient accepts the packaging condition."
      },
      {
        "id": "opt4",
        "text": "Dispense the product if the prescription label includes the lot number."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The current MPJE blueprint includes product conditions prohibiting dispensing; product integrity is a threshold issue.",
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
    "ruleToRemember": "A valid prescription does not make an unsuitable product dispensable.",
    "authority": [
      {
        "label": "NABP MPJE competency statement",
        "url": "https://nabp.pharmacy/programs/examinations/mpje/competency-statements/",
        "citation": "Area 3 product conditions prohibiting dispensing"
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
    ]
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
    "stem": "Before dispensing a new prescription, the pharmacist identifies a clinically significant duplication with an active therapy and cannot resolve the issue from the available record. Which legal-practice function is most directly implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "Prospective drug-use review before dispensing the prescription."
      },
      {
        "id": "opt2",
        "text": "Inventory reconciliation after dispensing the prescription."
      },
      {
        "id": "opt3",
        "text": "Transfer documentation before moving the prescription."
      },
      {
        "id": "opt4",
        "text": "Registration renewal before processing the prescription."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The current MPJE blueprint includes prospective DUR as part of pharmacist dispensing obligations.",
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
    ]
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
    "stem": "A Colorado pharmacist maintains an active PDMP user account and wants a technician to query the program on the pharmacist's behalf. The technician works for the same prescription drug outlet and has been trained to use the program. Which additional condition is central to the delegation?",
    "answers": [
      {
        "id": "opt1",
        "text": "The pharmacist remains responsible for limiting the designee's access to authorized purposes and protecting confidentiality."
      },
      {
        "id": "opt2",
        "text": "The technician must hold an individual DEA registration before accessing the pharmacist's PDMP account."
      },
      {
        "id": "opt3",
        "text": "The pharmacist must obtain patient-specific prescriber approval before authorizing the technician as a designee."
      },
      {
        "id": "opt4",
        "text": "The technician may use the PDMP only when the prescription under review is itself a controlled substance."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado law permits a pharmacist to authorize qualifying designees associated with the same prescription drug outlet, but the pharmacist remains responsible for authorized use and confidentiality.",
    "distractorExplanations": {
      "opt2": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt3": "This choice applies a related legal rule or would fit a slightly different fact pattern.",
      "opt4": "This choice applies a related legal rule or would fit a slightly different fact pattern."
    },
    "misconceptionTested": {
      "opt2": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt3": "Applies a nearby rule to the wrong pathway or omits a required condition.",
      "opt4": "Applies a nearby rule to the wrong pathway or omits a required condition."
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
    ]
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
    "stem": "The PDMP flags an error in a transaction dispensed on September 8. The pharmacy can correct it. Which deadline applies under the cited correction rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Correct and resubmit no later than October 1."
      },
      {
        "id": "opt2",
        "text": "Correct and resubmit no later than September 16."
      },
      {
        "id": "opt3",
        "text": "Correct and resubmit no later than October 16."
      },
      {
        "id": "opt4",
        "text": "Correct and resubmit with the pharmacy's next license renewal."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Errors for transactions from the first through the 15th are corrected by the first day of the following month.",
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
    ]
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
    "stem": "A PDMP error cannot be corrected after reasonable efforts. Which record is required under the cited Colorado rule?",
    "answers": [
      {
        "id": "opt1",
        "text": "Retain written documentation describing the error notice and why correction was not possible."
      },
      {
        "id": "opt2",
        "text": "Delete the rejected transaction after documenting that correction could not be completed."
      },
      {
        "id": "opt3",
        "text": "Replace the rejected transaction with a zero report for the reporting period."
      },
      {
        "id": "opt4",
        "text": "Transfer responsibility for the unresolved error to the prescribing practitioner."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires written documentation when an error cannot be corrected.",
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
    ]
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
    "stem": "A Colorado outlet closes Monday at noon. Prescription records are relocated Thursday at 1 PM, while the Board closure notice was sent Wednesday. Which requirement is violated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The record relocation exceeded the applicable 72-hour deadline after closure."
      },
      {
        "id": "opt2",
        "text": "The Board notice exceeded the applicable 72-hour deadline after closure."
      },
      {
        "id": "opt3",
        "text": "Both closure duties exceeded their applicable 24-hour deadlines after closure."
      },
      {
        "id": "opt4",
        "text": "Neither closure duty is late because both use a 30-day period."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's closure rule uses a 72-hour deadline for both record relocation and Board notice.",
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
    ]
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
    "stem": "A new pharmacist manager begins Monday morning. The manager's designee completes the controlled-substance inventory Wednesday at close of business and records the date and time. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The inventory can satisfy the manager-change rule on these facts."
      },
      {
        "id": "opt2",
        "text": "The inventory is invalid because the manager personally must perform it."
      },
      {
        "id": "opt3",
        "text": "The inventory is late because it had to occur before Monday opening."
      },
      {
        "id": "opt4",
        "text": "The inventory is premature because it should wait for the next biennial inventory."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The new manager or designee may take the inventory within 72 hours, as of opening or close of business activity.",
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
    ]
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
    "stem": "A central pharmacy oversees two telepharmacies. One telepharmacy has 150 continuous square feet but its refrigerated drug storage is monitored only on weekdays. Which defect remains?",
    "answers": [
      {
        "id": "opt1",
        "text": "The refrigerated storage is not electronically monitored each calendar day."
      },
      {
        "id": "opt2",
        "text": "The central pharmacy exceeds the permitted telepharmacy count."
      },
      {
        "id": "opt3",
        "text": "The telepharmacy principal area is below the minimum square footage."
      },
      {
        "id": "opt4",
        "text": "The telepharmacy must double its floor area when refrigerated drugs are stocked."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The central-pharmacy count and floor area are satisfied; daily electronic temperature monitoring is not.",
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
    ]
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
    "stem": "A central-fill arrangement can identify the originating pharmacy but cannot identify which pharmacist and location performed specific dispensing functions. Which operational requirement is deficient?",
    "answers": [
      {
        "id": "opt1",
        "text": "The arrangement lacks the required ability to identify the pharmacist and location responsible for dispensing functions."
      },
      {
        "id": "opt2",
        "text": "The arrangement lacks a required second prescription number that distinguishes the originating and processing pharmacies."
      },
      {
        "id": "opt3",
        "text": "The arrangement lacks a required patient authorization identifying each pharmacy that performs a processing function."
      },
      {
        "id": "opt4",
        "text": "The arrangement lacks a required separate registration for each pharmacist who performs centralized processing."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Centralized processing requires records that identify location and pharmacist responsibility for dispensing functions.",
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
    ]
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
    "stem": "At a patient's request, a pharmacist approves temporary storage of a filled prescription outside the dispensing area. Which operational safeguard is required?",
    "answers": [
      {
        "id": "opt1",
        "text": "The storage arrangement must satisfy the rule's conditions for security, environment, patient request, and pharmacist approval."
      },
      {
        "id": "opt2",
        "text": "The storage arrangement is permissible when patient request and pharmacist approval are documented, regardless of location controls."
      },
      {
        "id": "opt3",
        "text": "The storage arrangement is permissible when the prescription remains in the manufacturer's original container during temporary storage."
      },
      {
        "id": "opt4",
        "text": "The storage arrangement is permissible when the medication is noncontrolled and the patient has waived in-person counseling."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado permits delivery/temporary storage outside the dispensing area with pharmacist approval and manager-approved procedures.",
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
    "ruleToRemember": "Alternative pickup locations require controlled procedures for security, confidentiality, counseling, and records.",
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
    ]
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
    "stem": "A pharmacy has the most recent Board inspection report filed in the manager's office but displays an older inspection report in the principal dispensing area. Which operational requirement is implicated?",
    "answers": [
      {
        "id": "opt1",
        "text": "The current inspection report or newer self-inspection should be displayed."
      },
      {
        "id": "opt2",
        "text": "The inspection report should remain in the pharmacist manager's office."
      },
      {
        "id": "opt3",
        "text": "The older displayed report remains acceptable until the next registration renewal."
      },
      {
        "id": "opt4",
        "text": "The display requirement applies to nonresident pharmacies and telepharmacy sites."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The rule requires display of the most recent Board inspection report or the more recent self-inspection.",
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
    "ruleToRemember": "Inspection documentation must be both current and displayed in the specified area.",
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
    ]
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
    "stem": "A sterile compounding program prepares hazardous drugs using appropriate aseptic technique but has no written procedures for major/minor spills or generated waste. Which requirement remains unmet?",
    "answers": [
      {
        "id": "opt1",
        "text": "The hazardous-drug program lacks required spill and waste procedures in its policy manual."
      },
      {
        "id": "opt2",
        "text": "The program is compliant because aseptic technique replaces separate containment procedures."
      },
      {
        "id": "opt3",
        "text": "The program is compliant if spill procedures are available from the drug manufacturer."
      },
      {
        "id": "opt4",
        "text": "The program is deficient only if a spill has already occurred in the compounding area."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The hazardous-drug rule requires written spill/waste procedures in addition to aseptic technique and containment controls.",
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
    "ruleToRemember": "Sterility and hazardous-drug containment are overlapping but separate compliance systems.",
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
    "stem": "A managing prescription drug outlet distributes stock to an SPDO and records the drug, quantity, and date but not who issued the stock or who placed it into the automated device. Which defect is most direct?",
    "answers": [
      {
        "id": "opt1",
        "text": "The distribution record lacks required identification of the personnel handling the stock."
      },
      {
        "id": "opt2",
        "text": "The distribution record is complete because drug, quantity, and date are documented."
      },
      {
        "id": "opt3",
        "text": "The distribution record is incomplete only when the distributed drug is Schedule II."
      },
      {
        "id": "opt4",
        "text": "The distribution record is complete if month-end inventory totals reconcile correctly."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited SPDO rule requires detailed chain-of-custody information, including involved personnel.",
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
    ]
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
    "stem": "A prescription drug outlet opens one day each week for eight continuous hours and remains closed the rest of the week. Which cited minimum-hours requirement is not met?",
    "answers": [
      {
        "id": "opt1",
        "text": "The outlet lacks the required two designated operating days per week."
      },
      {
        "id": "opt2",
        "text": "The outlet lacks enough total weekly hours because sixteen hours are required."
      },
      {
        "id": "opt3",
        "text": "The outlet lacks a required weekend operating period."
      },
      {
        "id": "opt4",
        "text": "The outlet lacks a required daily four-hour opening on every weekday."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "The cited rule requires at least two designated days each week and at least four continuous hours on each such day.",
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
    "ruleToRemember": "The minimum-hours rule tests both number of days and continuous hours per designated day.",
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
    ]
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
    "stem": "A technician completes an employer training program and has extensive pharmacy experience but does not hold certification from a nationally recognized certifying body accepted under Colorado's standard certification pathway. Which conclusion is most accurate?",
    "answers": [
      {
        "id": "opt1",
        "text": "The employer training alone does not satisfy the standard national-certification element."
      },
      {
        "id": "opt2",
        "text": "The employer training substitutes for national certification after one year of employment."
      },
      {
        "id": "opt3",
        "text": "The experience substitutes for national certification if the pharmacist manager approves it."
      },
      {
        "id": "opt4",
        "text": "The experience substitutes for national certification when the pharmacy is independently owned."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado's standard technician certification pathway requires qualifying national certification; employer training alone is not the same requirement.",
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
    ]
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
    "stem": "A pharmacist manager has verified every technician's current credential but keeps the information only in a private spreadsheet that is not posted as required in the dispensing area. Which responsibility remains unmet?",
    "answers": [
      {
        "id": "opt1",
        "text": "The manager has not satisfied the cited posting requirement for technician information."
      },
      {
        "id": "opt2",
        "text": "The manager has satisfied the rule because electronic verification replaces posting."
      },
      {
        "id": "opt3",
        "text": "The manager has satisfied the rule if the spreadsheet is available during inspections."
      },
      {
        "id": "opt4",
        "text": "The manager has not satisfied the rule unless every technician also holds an intern license."
      }
    ],
    "correctAnswers": [
      "opt1"
    ],
    "explanation": "Colorado manager responsibilities include posting specified technician information in the compounding/dispensing area.",
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
    ]
  }
];
