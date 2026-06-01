// Decision Tree Data - from ayyushnegii/7-path-decision-tree
// This file contains the tree structure and outcome data
var TREE_DATA = {
  "start": {
    "l": 0,
    "tag": "ROOT",
    "title": "Finished 10th Grade",
    "st": "One decision changes everything.",
    "c": [
      {
        "l": "Choose Stream",
        "tl": "Unlocks Science, Commerce, Arts",
        "n": "ss"
      }
    ]
  },
  "ss": {
    "l": 1,
    "tag": "STREAM",
    "title": "Select Career Stream",
    "st": "Pick your stream",
    "c": [
      {
        "l": "Science",
        "tl": "Engineering, medicine, research",
        "n": "sc"
      },
      {
        "l": "Commerce",
        "tl": "Business, finance, hustle",
        "n": "cp"
      },
      {
        "l": "Arts / Humanities",
        "tl": "Creative, civil services, law",
        "n": "ap"
      }
    ]
  },
  "sc": {
    "l": 2,
    "tag": "SCI-MIX",
    "title": "Science Combination",
    "st": "PCM / PCB / PCMB",
    "c": [
      {
        "l": "PCM",
        "tl": "Engineering, BCA, B.Arch",
        "n": "pcm"
      },
      {
        "l": "PCB",
        "tl": "Medical, Dental, Nursing",
        "n": "pcb"
      },
      {
        "l": "PCMB",
        "tl": "ALL paths open",
        "n": "sp"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "sp": {
    "l": 3,
    "tag": "SCI-PCMB",
    "title": "Science All Paths",
    "st": "All paths open",
    "c": [
      {
        "l": "S1 - JEE",
        "tl": "IIT/NIT median Rs.16-25 LPA",
        "n": "s1"
      },
      {
        "l": "S2 - NEET",
        "tl": "24L applicants 1.1L seats",
        "n": "s2"
      },
      {
        "l": "S3 - BSc+Research",
        "tl": "BSc median Rs.3.6 LPA",
        "n": "s3"
      },
      {
        "l": "S4 - Skill-First",
        "tl": "Bootcamp, design",
        "n": "s4"
      },
      {
        "l": "S5 - Defence NDA",
        "tl": "SSB 3%",
        "n": "s5"
      },
      {
        "l": "S6 - Sci/Tech Hybrid",
        "tl": "44% premium",
        "n": "s6"
      },
      {
        "l": "S7 - BCA/BSc CS",
        "tl": "No JEE needed",
        "n": "s7"
      },
      {
        "l": "S8 - B.Arch",
        "tl": "NATA 80K+",
        "n": "s8"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "pcm": {
    "l": 3,
    "tag": "PCM",
    "title": "PCM No Biology",
    "st": "Engineering, IT, Defence",
    "c": [
      {
        "l": "S1 - JEE",
        "n": "s1"
      },
      {
        "l": "S3 - BSc+Research",
        "n": "s3"
      },
      {
        "l": "S7 - BCA/BSc CS",
        "n": "s7"
      },
      {
        "l": "S8 - B.Arch",
        "n": "s8"
      },
      {
        "l": "S5 - Defence NDA",
        "n": "s5"
      },
      {
        "l": "S9 - Merchant Navy",
        "tl": "Starting Rs.8-15 LPA",
        "n": "s9"
      },
      {
        "l": "S4 - Skill-First",
        "n": "s4"
      },
      {
        "l": "S6 - Sci/Tech Hybrid",
        "n": "s6"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "pcb": {
    "l": 3,
    "tag": "PCB",
    "title": "PCB No Maths",
    "st": "Medical, AYUSH, Nursing",
    "c": [
      {
        "l": "S2 - NEET/MBBS",
        "tl": "24L applicants 4.6% selection",
        "n": "s2"
      },
      {
        "l": "S10 - BDS/Dental",
        "tl": "27K seats",
        "n": "s10"
      },
      {
        "l": "S11 - AYUSH",
        "tl": "Growing demand",
        "n": "s11"
      },
      {
        "l": "S12 - BSc Nursing",
        "tl": "Global demand",
        "n": "s12"
      },
      {
        "l": "S13 - B.Pharm",
        "tl": "Rs.4-8 LPA",
        "n": "s13"
      },
      {
        "l": "S14 - Allied Health",
        "tl": "Growing 15% YoY",
        "n": "s14"
      },
      {
        "l": "S3 - BSc Life Sci",
        "n": "s3"
      },
      {
        "l": "S15 - Veterinary",
        "n": "s15"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "cp": {
    "l": 2,
    "tag": "COMM",
    "title": "Commerce Paths",
    "st": "CA, B.Com, govt, tech hybrid",
    "c": [
      {
        "l": "C1 - The CA Grind",
        "tl": "Final pass 13-20%",
        "n": "c1"
      },
      {
        "l": "C2 - College B.Com/BBA",
        "tl": "Default path",
        "n": "oc_2bc"
      },
      {
        "l": "C3 - Drop+Retry CUET",
        "tl": "DU selection 8.1%",
        "n": "c3"
      },
      {
        "l": "C4 - Skill-First",
        "tl": "No degree digital skills",
        "n": "c4"
      },
      {
        "l": "C5 - Govt Jobs",
        "tl": "SSC CGL Bank PO",
        "n": "c5"
      },
      {
        "l": "C6 - Entrepreneur",
        "tl": "90% fail in 5yrs",
        "n": "c6"
      },
      {
        "l": "C7 - Comm+Tech Hybrid",
        "tl": "Data 50% more pay",
        "n": "c7"
      },
      {
        "l": "C8 - Finance Certs",
        "tl": "CFA ACCA CMA CS",
        "n": "c8"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "ap": {
    "l": 2,
    "tag": "ARTS",
    "title": "Arts & Humanities",
    "st": [
      {
        "l": "A1 - UPSC Civil Services",
        "tl": "0.17% selection",
        "n": "a1"
      },
      {
        "l": "A2 - Law BA LLB",
        "tl": "CLAT 4% NLU",
        "n": "a2"
      },
      {
        "l": "A3 - Journalism/Media",
        "tl": "Digital growing 28%",
        "n": "a3"
      },
      {
        "l": "A4 - Psychology",
        "tl": "RCI license needed",
        "n": "a4"
      },
      {
        "l": "A5 - Design/Fine Arts",
        "tl": "Portfolio-driven",
        "n": "a5"
      },
      {
        "l": "A6 - Arts+Digital Hybrid",
        "tl": "25% YoY growth",
        "n": "a6"
      },
      {
        "l": "Universal Paths",
        "n": "up"
      },
      {
        "l": "Combine Both",
        "n": "cb"
      }
    ]
  },
  "s1": {
    "l": 3,
    "tag": "JEE",
    "title": "Engineering College",
    "st": "IIT/NIT: Rs.16-23 LPA",
    "c": [
      {
        "l": "Top IITs/NITs/BITS",
        "n": "s1t"
      },
      {
        "l": "State Govt College",
        "n": "s1sg"
      },
      {
        "l": "Private College",
        "n": "s1p"
      },
      {
        "l": "Deemed University",
        "n": "s1d"
      }
    ]
  },
  "s1t": {
    "l": 4,
    "tag": "TOP-ENG",
    "title": "Top College Branch",
    "c": [
      {
        "l": "CS/IT",
        "n": "oc_1cs"
      },
      {
        "l": "Core Branch",
        "n": "oc_1co"
      }
    ]
  },
  "s1sg": {
    "l": 4,
    "tag": "STATE-ENG",
    "title": "State Govt Branch",
    "c": [
      {
        "l": "CS/IT",
        "n": "oc_1cs"
      },
      {
        "l": "Core Branch",
        "n": "oc_1co"
      }
    ]
  },
  "s1p": {
    "l": 4,
    "tag": "PVT-ENG",
    "title": "Private College",
    "c": [
      {
        "l": "Upskill+Coding",
        "n": "oc_1pp"
      },
      {
        "l": "Standard",
        "n": "oc_1ps"
      }
    ]
  },
  "s1d": {
    "l": 4,
    "tag": "DEEMED",
    "title": "Deemed University",
    "c": [
      {
        "l": "Upskill+Coding",
        "n": "oc_1pp"
      },
      {
        "l": "Standard",
        "n": "oc_1ps"
      }
    ]
  },
  "s2": {
    "l": 3,
    "tag": "NEET",
    "title": "NEET Result",
    "st": "24L appeared, 4.6% selection",
    "c": [
      {
        "l": "Govt MBBS Seat",
        "tl": "~60K seats",
        "n": "s2g"
      },
      {
        "l": "Private MBBS Seat",
        "tl": "~47K seats",
        "n": "s2p"
      },
      {
        "l": "No MBBS Seat",
        "tl": "BDS/AYUSH/Allied",
        "n": "s2nb"
      }
    ]
  },
  "s2g": {
    "l": 4,
    "tag": "GOVT-MBBS",
    "title": "Govt MBBS",
    "c": [
      {
        "l": "Specialize MD/MS",
        "n": "oc_2sp"
      },
      {
        "l": "Dont Specialize",
        "n": "oc_2gp"
      }
    ]
  },
  "s2p": {
    "l": 4,
    "tag": "PVT-MBBS",
    "title": "Private MBBS",
    "c": [
      {
        "l": "Specialize MD/MS",
        "n": "oc_2sp"
      },
      {
        "l": "General Practice",
        "n": "oc_2gp"
      }
    ]
  },
  "s2nb": {
    "l": 4,
    "tag": "NEET-BAK",
    "title": "NEET Backup",
    "c": [
      {
        "l": "BDS/AYUSH/Nursing",
        "n": "s10"
      },
      {
        "l": "Retry NEET",
        "n": "s2r"
      },
      {
        "l": "Switch Stream",
        "n": "up"
      }
    ]
  },
  "c1": {
    "l": 3,
    "tag": "CA",
    "title": "CA Path",
    "c": [
      {
        "l": "Cleared All Levels",
        "n": "oc_1ca"
      },
      {
        "l": "Left Midway",
        "n": "oc_1cl"
      }
    ]
  },
  "c3": {
    "l": 3,
    "tag": "DROP",
    "title": "Drop+Retry CUET",
    "c": [
      {
        "l": "Got Into DU/IPMAT",
        "n": "oc_3du"
      },
      {
        "l": "Didnt Improve",
        "n": "oc_3st"
      }
    ]
  },
  "c4": {
    "l": 3,
    "tag": "COMM-SKILL",
    "title": "Skill-First No Degree",
    "c": [
      {
        "l": "Successful Freelancer",
        "n": "oc_4su"
      },
      {
        "l": "Struggling",
        "n": "oc_4fa"
      }
    ]
  },
  "c5": {
    "l": 3,
    "tag": "COMM-GOVT",
    "title": "Govt Job Hunter",
    "c": [
      {
        "l": "Cleared SSC/Bank/PSC",
        "n": "oc_5se"
      },
      {
        "l": "Still Trying",
        "n": "oc_5st"
      }
    ]
  },
  "c6": {
    "l": 3,
    "tag": "BIZ",
    "title": "Entrepreneur",
    "c": [
      {
        "l": "Profitable Business",
        "n": "c6p"
      },
      {
        "l": "Breakeven",
        "n": "c6b"
      },
      {
        "l": "Failed",
        "n": "c6f"
      }
    ]
  },
  "c6p": {
    "l": 4,
    "tag": "PROFIT",
    "title": "Profitable",
    "c": [
      {
        "l": "Scale Up",
        "n": "oc_6sc"
      },
      {
        "l": "Stay Profitable",
        "n": "oc_6co"
      }
    ]
  },
  "c6b": {
    "l": 4,
    "tag": "BREAKEVEN",
    "title": "Breakeven",
    "c": [
      {
        "l": "Part-Time Job+Biz",
        "n": "oc_6hj"
      },
      {
        "l": "Go All-In",
        "n": "oc_6co"
      }
    ]
  },
  "c6f": {
    "l": 4,
    "tag": "FAIL-BIZ",
    "title": "Business Failed",
    "c": [
      {
        "l": "Pivot to Job",
        "n": "oc_6pj"
      },
      {
        "l": "No Degree No Biz",
        "n": "oc_6st"
      }
    ]
  },
  "c7": {
    "l": 3,
    "tag": "HYB",
    "title": "Comm+Tech Hybrid",
    "c": [
      {
        "l": "Strong Portfolio",
        "n": "c7s"
      },
      {
        "l": "Weak Portfolio",
        "n": "c7w"
      }
    ]
  },
  "c7s": {
    "l": 4,
    "tag": "STRONG-H",
    "title": "Strong Portfolio",
    "c": [
      {
        "l": "India Corporate",
        "n": "oc_7ic"
      },
      {
        "l": "Product Tech",
        "n": "oc_7pt"
      },
      {
        "l": "Relocate Abroad",
        "n": "oc_7ab"
      },
      {
        "l": "Analytics Consulting",
        "n": "oc_7ac"
      }
    ]
  },
  "c7w": {
    "l": 4,
    "tag": "WEAK-H",
    "title": "Weak Portfolio",
    "c": [
      {
        "l": "Stay Comfortable",
        "n": "oc_7co"
      },
      {
        "l": "Generic B.Com Job",
        "n": "oc_7bc"
      }
    ]
  },
  "c8": {
    "l": 3,
    "tag": "CERT",
    "title": "Finance Certifications",
    "c": [
      {
        "l": "CFA Charterholder",
        "n": "oc_8cf"
      },
      {
        "l": "ACCA Member",
        "n": "oc_8ac"
      },
      {
        "l": "CMA Certified",
        "n": "oc_8cm"
      },
      {
        "l": "CS Qualified",
        "n": "oc_8cs"
      },
      {
        "l": "Left All Midway",
        "n": "oc_8cl"
      }
    ]
  },
  "a1": {
    "l": 3,
    "tag": "UPSC",
    "title": "UPSC Civil Services",
    "c": [
      {
        "l": "Cleared All",
        "n": "oa_1cl"
      },
      {
        "l": "Prelims Only",
        "n": "oa_1pr"
      },
      {
        "l": "Didnt Clear",
        "n": "oa_1fa"
      }
    ]
  },
  "a2": {
    "l": 3,
    "tag": "LAW",
    "title": "Law BA LLB",
    "c": [
      {
        "l": "NLU Graduate",
        "n": "oa_2nl"
      },
      {
        "l": "Non-NLU Graduate",
        "n": "oa_2nn"
      }
    ]
  },
  "a3": {
    "l": 3,
    "tag": "JOURNALISM",
    "title": "Journalism/Media",
    "c": [
      {
        "l": "Digital Media",
        "n": "oa_3di"
      },
      {
        "l": "Print/TV",
        "n": "oa_3tr"
      }
    ]
  },
  "a4": {
    "l": 3,
    "tag": "PSYCH",
    "title": "Psychology",
    "c": [
      {
        "l": "Clinical RCI",
        "n": "oa_4cl"
      },
      {
        "l": "Counseling/Social Work",
        "n": "oa_4co"
      }
    ]
  },
  "a5": {
    "l": 3,
    "tag": "DESIGN",
    "title": "Design/Fine Arts",
    "c": [
      {
        "l": "UI/UX Design",
        "n": "oa_5ux"
      },
      {
        "l": "Graphic Design",
        "n": "oa_5gr"
      },
      {
        "l": "Fine Arts",
        "n": "oa_5fa"
      }
    ]
  },
  "a6": {
    "l": 3,
    "tag": "ARTS-HYB",
    "title": "Arts+Digital Skills",
    "c": [
      {
        "l": "Content Strategist",
        "n": "oa_6cs"
      },
      {
        "l": "Digital Producer",
        "n": "oa_6dp"
      },
      {
        "l": "HR/Talent",
        "n": "oa_6hr"
      }
    ]
  },
  "s3": {
    "l": 4,
    "tag": "BSc",
    "title": "BSc+Research",
    "st": "IISc/IISER, MSc+PhD, Corporate R&D",
    "c": [
      {
        "l": "IISc/IISER",
        "n": "os_3is"
      },
      {
        "l": "MSc+PhD",
        "n": "os_3ph"
      },
      {
        "l": "Corporate R&D",
        "n": "os_3co"
      }
    ]
  },
  "s4": {
    "l": 4,
    "tag": "SKILL",
    "title": "Skill-First Science",
    "st": "Developer, Data Science, Design",
    "c": [
      {
        "l": "Software Developer",
        "n": "os_4de"
      },
      {
        "l": "Data Science",
        "n": "os_4ds"
      },
      {
        "l": "Design/Creative",
        "n": "os_4dr"
      }
    ]
  },
  "s5": {
    "l": 4,
    "tag": "DEF",
    "title": "Defence NDA/CDS",
    "st": "NDA, CDS",
    "c": [
      {
        "l": "SSB Cleared NDA",
        "n": "os_5nd"
      },
      {
        "l": "CDS IMA/OTA",
        "n": "os_5cd"
      }
    ]
  },
  "s6": {
    "l": 4,
    "tag": "SCI-HYB",
    "title": "Sci+Tech Hybrid",
    "st": "PM, DA, Consultant",
    "c": [
      {
        "l": "Product Manager",
        "n": "os_6pm"
      },
      {
        "l": "Data Analyst",
        "n": "os_6da"
      },
      {
        "l": "Tech Consultant",
        "n": "os_6tc"
      }
    ]
  },
  "s7": {
    "l": 4,
    "tag": "BCA",
    "title": "BCA/BSc CS",
    "st": "MCA, IT Job, Startup",
    "c": [
      {
        "l": "MCA Top College",
        "n": "os_7mc"
      },
      {
        "l": "Direct IT Job",
        "n": "os_7it"
      },
      {
        "l": "Startup/Freelance",
        "n": "os_7st"
      }
    ]
  },
  "s8": {
    "l": 4,
    "tag": "ARCH",
    "title": "B.Arch",
    "st": "Top Firm, Independent",
    "c": [
      {
        "l": "Top Architecture Firm",
        "n": "os_8tf"
      },
      {
        "l": "Independent Practice",
        "n": "os_8in"
      }
    ]
  },
  "s9": {
    "l": 4,
    "tag": "NAVY",
    "title": "Merchant Navy",
    "st": "GP Rating, Nautical",
    "c": [
      {
        "l": "GP Rating",
        "n": "os_9gp"
      },
      {
        "l": "BSc Nautical Science",
        "n": "os_9bs"
      }
    ]
  },
  "s10": {
    "l": 4,
    "tag": "BDS",
    "title": "BDS/Dental",
    "st": "Private, Govt",
    "c": [
      {
        "l": "Private Practice",
        "n": "os_10pr"
      },
      {
        "l": "Govt Hospital",
        "n": "os_10go"
      }
    ]
  },
  "s11": {
    "l": 4,
    "tag": "AYUSH",
    "title": "AYUSH BAMS/BHMS",
    "st": "Private, Integrative",
    "c": [
      {
        "l": "Private Practice",
        "n": "os_11pr"
      },
      {
        "l": "Integrative Medicine",
        "n": "os_11in"
      }
    ]
  },
  "s12": {
    "l": 4,
    "tag": "NURSE",
    "title": "BSc Nursing",
    "st": "Govt, Abroad",
    "c": [
      {
        "l": "Govt Hospital",
        "n": "os_12go"
      },
      {
        "l": "Abroad UK/Canada",
        "n": "os_12ab"
      }
    ]
  },
  "s13": {
    "l": 4,
    "tag": "PHARMA",
    "title": "B.Pharm",
    "st": "Industry, Retail, Research",
    "c": [
      {
        "l": "Pharma Industry",
        "n": "os_13in"
      },
      {
        "l": "Retail Pharmacy",
        "n": "os_13re"
      },
      {
        "l": "M.Pharm+Research",
        "n": "os_13rs"
      }
    ]
  },
  "s14": {
    "l": 4,
    "tag": "ALLIED",
    "title": "Allied Healthcare",
    "st": "Lab, Radiology, Physio",
    "c": [
      {
        "l": "Lab Technician",
        "n": "os_14la"
      },
      {
        "l": "Radiology",
        "n": "os_14ra"
      },
      {
        "l": "Physiotherapy",
        "n": "os_14ph"
      }
    ]
  },
  "s15": {
    "l": 4,
    "tag": "VET",
    "title": "Veterinary BVSc",
    "st": "Govt, Private",
    "c": [
      {
        "l": "Govt Vet Officer",
        "n": "os_15go"
      },
      {
        "l": "Private Practice",
        "n": "os_15pr"
      }
    ]
  },
  "s2r": {
    "l": 4,
    "tag": "NEET-RETRY",
    "title": "Drop+Retry NEET",
    "st": "Success, Fail",
    "c": [
      {
        "l": "Cleared Next Attempt",
        "n": "os_2rs"
      },
      {
        "l": "Didnt Clear",
        "n": "os_2rf"
      }
    ]
  },
  "up": {
    "l": 4,
    "tag": "UNIV",
    "title": "Universal Career Paths",
    "st": "20 paths open to all",
    "c": [
      {
        "l": "Content Creation",
        "n": "ou_co"
      },
      {
        "l": "Influencer Marketing",
        "n": "ou_in"
      },
      {
        "l": "Podcasting",
        "n": "ou_po"
      },
      {
        "l": "Writing/Blogging",
        "n": "ou_wr"
      },
      {
        "l": "Music/Singing",
        "n": "ou_mu"
      },
      {
        "l": "Acting/Filmmaking",
        "n": "ou_ac"
      },
      {
        "l": "Photography",
        "n": "ou_ph"
      },
      {
        "l": "Entrepreneurship",
        "n": "ou_en"
      },
      {
        "l": "E-Commerce",
        "n": "ou_ec"
      },
      {
        "l": "Agency Business",
        "n": "ou_ag"
      },
      {
        "l": "Freelancing",
        "n": "ou_fr"
      },
      {
        "l": "Graphic Design",
        "n": "ou_gd"
      },
      {
        "l": "UI/UX Design",
        "n": "ou_ux"
      },
      {
        "l": "Digital Marketing",
        "n": "ou_dm"
      },
      {
        "l": "Sales/BD",
        "n": "ou_sa"
      },
      {
        "l": "Politics",
        "n": "ou_po2"
      },
      {
        "l": "NGO/Social Work",
        "n": "ou_ng"
      },
      {
        "l": "Sports",
        "n": "ou_sp"
      },
      {
        "l": "Coaching/Training",
        "n": "ou_ct"
      },
      {
        "l": "Creator Economy",
        "n": "ou_ce"
      }
    ]
  },
  "cb": {
    "l": 4,
    "tag": "COMBINE",
    "title": "Hybrid Stream+Universal",
    "st": "8 hybrid paths",
    "c": [
      {
        "l": "Finance+Creator",
        "n": "cb_fc"
      },
      {
        "l": "Law+Creator",
        "n": "cb_lc"
      },
      {
        "l": "Science+EdTech",
        "n": "cb_se"
      },
      {
        "l": "Arts+Design Agency",
        "n": "cb_da"
      },
      {
        "l": "Commerce+E-Com",
        "n": "cb_ec"
      },
      {
        "l": "Psych+Coaching",
        "n": "cb_wc"
      },
      {
        "l": "Tech+Startup",
        "n": "cb_ts"
      },
      {
        "l": "Any+Dig Agency",
        "n": "cb_dg"
      }
    ]
  },
  "oc_1cs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CS/IT @ IIT/NIT",
    "outcome": {
      "sal": "Rs.25-60 LPA",
      "nw": "Rs.2-8Cr",
      "p": "35%",
      "r": "Low",
      "pt": [
        "Science",
        "Engineering",
        "CS/IT"
      ],
      "bt": "Highest paying branch. IIT CS median Rs.23 LPA. FAANG offers Rs.40-80 LPA with RSUs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_1co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Core Branch @ IIT/NIT",
    "outcome": {
      "sal": "Rs.15-35 LPA",
      "nw": "Rs.1.5-4Cr",
      "p": "65%",
      "r": "Low",
      "pt": [
        "Science",
        "Engineering",
        "Core"
      ],
      "bt": "Core branches lower starting pay but strong long-term PSU growth. GATE gateway to PSU jobs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_1pp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Private College+Upskilled",
    "outcome": {
      "sal": "Rs.12-30 LPA",
      "nw": "Rs.80L-3Cr",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Science",
        "Engineering",
        "Upskilled"
      ],
      "bt": "Competitive coding grind required. Top 10% of private college students crack product companies.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_1ps": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Private College+Standard",
    "outcome": {
      "sal": "Rs.6-15 LPA",
      "nw": "Rs.40-80L",
      "p": "60%",
      "r": "Medium",
      "pt": [
        "Science",
        "Engineering",
        "Standard"
      ],
      "bt": "Mass recruiters Rs.3.5-6 LPA. Service-based companies dominate placements.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_2sp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "MD/MS Specialist Doctor",
    "outcome": {
      "sal": "Rs.20-80 LPA",
      "nw": "Rs.2-8Cr",
      "p": "15%",
      "r": "Low",
      "pt": [
        "Science",
        "Medical",
        "Specialist"
      ],
      "bt": "Dermatology Radiology Ortho highest paying. 5.5yr MD + 3yr residency. Govt PG seats limited.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_2gp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "General Practitioner",
    "outcome": {
      "sal": "Rs.10-20 LPA",
      "nw": "Rs.80L-1.5Cr",
      "p": "40%",
      "r": "Low",
      "pt": [
        "Science",
        "Medical",
        "GP"
      ],
      "bt": "Open own clinic after MBBS. Income grows with reputation. Rural areas underserved.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_3is": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "IISc/IISER",
    "outcome": {
      "sal": "Rs.12-30 LPA",
      "nw": "Rs.1-3Cr",
      "p": "10%",
      "r": "Low",
      "pt": [
        "Science",
        "Research",
        "IISc"
      ],
      "bt": "IISc BS Research top tier. Direct PhD pathway. KVPY/JEE Adv/NEET route for entry.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_3ph": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "PhD Researcher",
    "outcome": {
      "sal": "Rs.8-20 LPA",
      "nw": "Rs.50L-1Cr",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Science",
        "Research",
        "PhD"
      ],
      "bt": "PhD stipend Rs.31-35K/mo CSIR/UGC. Postdoc abroad 0-80K. Academic jobs scarce in India.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_3co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Corporate R&D",
    "outcome": {
      "sal": "Rs.10-25 LPA",
      "nw": "Rs.80L-2Cr",
      "p": "60%",
      "r": "Medium",
      "pt": [
        "Science",
        "Research",
        "Corp"
      ],
      "bt": "DRDO ISRO BARC CSIR labs hire GATE qualified. PSU jobs via GATE offer job security.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_4de": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Developer No Degree",
    "outcome": {
      "sal": "Rs.5-20 LPA",
      "nw": "Rs.30L-1Cr",
      "p": "35%",
      "r": "High",
      "pt": [
        "Science",
        "Skills",
        "Developer"
      ],
      "bt": "Self-taught struggle for first job. Portfolio+GitHub+DSA needed. Bootcamps cost Rs.2-5L no guarantee.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_4ds": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Data Scientist No Degree",
    "outcome": {
      "sal": "Rs.6-25 LPA",
      "nw": "Rs.40L-2Cr",
      "p": "20%",
      "r": "High",
      "pt": [
        "Science",
        "Skills",
        "DataSci"
      ],
      "bt": "AI/ML prefer Masters/PhD. Without degree need Kaggle rankings. Saturated entry level.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_4dr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Designer No Degree",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.20-60L",
      "p": "45%",
      "r": "Medium",
      "pt": [
        "Science",
        "Skills",
        "Designer"
      ],
      "bt": "UI/UX pays Rs.5-12 LPA. Figma mandatory. Portfolio > degree. Motion/3D pay premium.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_5nd": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "NDA Officer",
    "outcome": {
      "sal": "Rs.8-18 LPA",
      "nw": "Rs.60L-1.5Cr",
      "p": "5%",
      "r": "Low",
      "pt": [
        "Science",
        "Defence",
        "NDA"
      ],
      "bt": "SSB 0.1-0.2%. 3-yr training Khadakwasla. Mandatory service 5+ yrs. Army/Navy/Air Force commission.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_5cd": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CDS IMA/OTA Officer",
    "outcome": {
      "sal": "Rs.8-20 LPA",
      "nw": "Rs.80L-2Cr",
      "p": "3%",
      "r": "Low",
      "pt": [
        "Science",
        "Defence",
        "CDS"
      ],
      "bt": "CDS exam after graduation. IMA Dehradun 18-month training. Short Service Commission 5+5 yrs option.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_6pm": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Product Manager",
    "outcome": {
      "sal": "Rs.15-50 LPA",
      "nw": "Rs.1-5Cr",
      "p": "20%",
      "r": "Medium",
      "pt": [
        "Science",
        "Hybrid",
        "PM"
      ],
      "bt": "Google/Uber Rs.40-70 LPA. Need tech+MBA or 3+ yrs experience. Top 5% of career paths.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_6da": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Data Analyst",
    "outcome": {
      "sal": "Rs.8-25 LPA",
      "nw": "Rs.60L-2Cr",
      "p": "50%",
      "r": "Low",
      "pt": [
        "Science",
        "Hybrid",
        "DA"
      ],
      "bt": "SQL+Python+Tableau needed. Entry Rs.6-10 LPA. Senior Rs.15-20 LPA in 4-5 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_6tc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Tech Consultant",
    "outcome": {
      "sal": "Rs.15-40 LPA",
      "nw": "Rs.1-4Cr",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Science",
        "Hybrid",
        "Consultant"
      ],
      "bt": "Big 4 hire science grads. Travel 80%. Exit to industry Rs.20-35 LPA after 2-3 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_7mc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "MCA Top College",
    "outcome": {
      "sal": "Rs.12-30 LPA",
      "nw": "Rs.1-3Cr",
      "p": "25%",
      "r": "Medium",
      "pt": [
        "Science",
        "BCA",
        "MCA"
      ],
      "bt": "NIT MCA pays off. NIMCET gateway. Top Rs.20-30 LPA at product companies.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_7it": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Direct IT Job",
    "outcome": {
      "sal": "Rs.4-15 LPA",
      "nw": "Rs.30-80L",
      "p": "55%",
      "r": "Medium",
      "pt": [
        "Science",
        "BCA",
        "IT"
      ],
      "bt": "BCA grads start Rs.3.5-5 LPA. Upskilling needed for Rs.10-15 LPA range.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_7st": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "BCA Startup/Freelance",
    "outcome": {
      "sal": "Rs.0-25 LPA",
      "nw": "Rs.0-2Cr",
      "p": "20%",
      "r": "V.High",
      "pt": [
        "Science",
        "BCA",
        "Startup"
      ],
      "bt": "Without degree credibility clients question expertise. Freelance income highly variable.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_8tf": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Top Architecture Firm",
    "outcome": {
      "sal": "Rs.10-25 LPA",
      "nw": "Rs.80L-2Cr",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Science",
        "Arch",
        "Firm"
      ],
      "bt": "NATA/CEPA needed. 5-yr B.Arch. Internship essential. Top firms Rs.25-50 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_8in": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Independent Architect",
    "outcome": {
      "sal": "Rs.6-20 LPA",
      "nw": "Rs.30-80L",
      "p": "70%",
      "r": "High",
      "pt": [
        "Science",
        "Arch",
        "Indie"
      ],
      "bt": "COA registration required. First 2-3 yrs struggle. Connections matter more than talent.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_9gp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "GP Rating Merchant Navy",
    "outcome": {
      "sal": "Rs.6-12 LPA",
      "nw": "Rs.30-60L",
      "p": "50%",
      "r": "High",
      "pt": [
        "Science",
        "Navy",
        "Rating"
      ],
      "bt": "6-month pre-sea course. 6-9 months on ship. No income tax for NRI days. Sea time grueling.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_9bs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "BSc Nautical Science",
    "outcome": {
      "sal": "Rs.10-25 LPA",
      "nw": "Rs.1-3Cr",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Science",
        "Navy",
        "Nautical"
      ],
      "bt": "DNS or BSc Nautical Science at IMU. Deck officer path. Mate to Captain in 8-12 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_10pr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Dental Private Practice",
    "outcome": {
      "sal": "Rs.8-25 LPA",
      "nw": "Rs.80L-3Cr",
      "p": "60%",
      "r": "Medium",
      "pt": [
        "Science",
        "Dental",
        "Private"
      ],
      "bt": "BDS + 2-3 yrs practice setup. MDS doubles income. Dental chairs cost Rs.5-15L startup.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_10go": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Govt Hospital Dentist",
    "outcome": {
      "sal": "Rs.8-15 LPA",
      "nw": "Rs.60L-1Cr",
      "p": "40%",
      "r": "Low",
      "pt": [
        "Science",
        "Dental",
        "Govt"
      ],
      "bt": "Dental Surgeon in state govt. NEET MDS for PG. Stable but capped salary.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_11pr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "AYUSH Private Practice",
    "outcome": {
      "sal": "Rs.5-15 LPA",
      "nw": "Rs.30L-1Cr",
      "p": "60%",
      "r": "Medium",
      "pt": [
        "Science",
        "AYUSH",
        "Private"
      ],
      "bt": "BAMS/BHMS growing post-COVID. Naturopathy + yoga centers booming.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_11in": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Integrative Medicine",
    "outcome": {
      "sal": "Rs.8-25 LPA",
      "nw": "Rs.50L-2Cr",
      "p": "20%",
      "r": "Medium",
      "pt": [
        "Science",
        "AYUSH",
        "Integrated"
      ],
      "bt": "Combines modern + traditional medicine. Medical tourism angle. MD in Ayurveda for senior roles.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_12go": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Govt Hospital Nurse",
    "outcome": {
      "sal": "Rs.5-10 LPA",
      "nw": "Rs.30-60L",
      "p": "50%",
      "r": "Low",
      "pt": [
        "Science",
        "Nursing",
        "Govt"
      ],
      "bt": "Staff Nurse in state govt. Low starting salary but job security.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_12ab": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Nurse Abroad UK/Canada",
    "outcome": {
      "sal": "Rs.15-40 LPA",
      "nw": "Rs.1-3Cr",
      "p": "25%",
      "r": "Medium",
      "pt": [
        "Science",
        "Nursing",
        "Abroad"
      ],
      "bt": "IELTS/OET required. NMC UK or NNAS Canada registration. Commonwealth countries prefer Indian nurses.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_13in": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Pharma Industry",
    "outcome": {
      "sal": "Rs.5-15 LPA",
      "nw": "Rs.30-80L",
      "p": "55%",
      "r": "Medium",
      "pt": [
        "Science",
        "Pharma",
        "Industry"
      ],
      "bt": "Sun Pharma Dr.Reddys Cipla hire B.Pharm. Production/QA/QC roles. M.Pharm for R&D.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_13re": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Retail Pharmacy Owner",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.20-60L",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Science",
        "Pharma",
        "Retail"
      ],
      "bt": "Pharmacist license needed. Online pharmacy disrupting margins.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_13rs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "M.Pharm+Research",
    "outcome": {
      "sal": "Rs.6-18 LPA",
      "nw": "Rs.40L-1Cr",
      "p": "15%",
      "r": "Medium",
      "pt": [
        "Science",
        "Pharma",
        "Research"
      ],
      "bt": "GPAT for NIPER admission. Clinical research CRO growing 15% YoY.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_14la": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Lab Technician",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.15-40L",
      "p": "60%",
      "r": "Low",
      "pt": [
        "Science",
        "Allied",
        "Lab"
      ],
      "bt": "BMLT 3-yr diploma. Private labs hire in bulk. Low starting Rs.10-15K/mo.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_14ra": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Radiology/Imaging",
    "outcome": {
      "sal": "Rs.5-15 LPA",
      "nw": "Rs.30-80L",
      "p": "25%",
      "r": "Medium",
      "pt": [
        "Science",
        "Allied",
        "Radiology"
      ],
      "bt": "BSc Radiology. CT/MRI operation. Teleradiology expanding.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_14ph": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Physiotherapist",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.20-60L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Science",
        "Allied",
        "Physio"
      ],
      "bt": "BPT 4.5 yrs then MPT. Sports physio pays premium Rs.10-20 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_15go": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Govt Veterinary Officer",
    "outcome": {
      "sal": "Rs.8-18 LPA",
      "nw": "Rs.60L-1.5Cr",
      "p": "30%",
      "r": "Low",
      "pt": [
        "Science",
        "Vet",
        "Govt"
      ],
      "bt": "BVSc+AH from recognized college. State govt veterinary officer via PSC.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_15pr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Private Vet Practice",
    "outcome": {
      "sal": "Rs.6-20 LPA",
      "nw": "Rs.30-80L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Science",
        "Vet",
        "Private"
      ],
      "bt": "Pet care market growing 20% YoY. Urban pet clinics Rs.8-20L. Dairy/poultry in rural.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_2rs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "NEET Retry Success",
    "outcome": {
      "sal": "Rs.10-80 LPA",
      "nw": "Rs.1-5Cr",
      "p": "20%",
      "r": "High",
      "pt": [
        "Science",
        "Medical",
        "Retry"
      ],
      "bt": "82% of repeaters dont improve. Burnout and mental health risks high during drop year.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "os_2rf": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "NEET Retry Failed",
    "outcome": {
      "sal": "Rs.3-6 LPA",
      "nw": "Rs.15-30L",
      "p": "80%",
      "r": "V.High",
      "pt": [
        "Science",
        "Medical",
        "Fail"
      ],
      "bt": "Lost 1-2 years. Switch to BDS/AYUSH or non-medical field. Career gap affects placements.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_1ca": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CA Cleared All Levels",
    "outcome": {
      "sal": "Rs.10-40 LPA",
      "nw": "Rs.80L-4Cr",
      "p": "10%",
      "r": "Low",
      "pt": [
        "Commerce",
        "CA",
        "Cleared"
      ],
      "bt": "CA Final pass rate 13-20%. Big 4 start Rs.10-14 LPA. 5-7 yrs to Rs.25-40 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_1cl": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CA Left Midway",
    "outcome": {
      "sal": "Rs.4-10 LPA",
      "nw": "Rs.20-50L",
      "p": "60%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "CA",
        "Dropped"
      ],
      "bt": "CA Inter/Semi-qualified. Roles in accounting/tax Rs.3-6 LPA. Full CA needed for partnership.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_2bc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "B.Com/BBA Graduate",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.15-40L",
      "p": "70%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "College",
        "BCom"
      ],
      "bt": "Default path no differentiation. Mass recruiters Rs.2.5-4 LPA. Need certifications or PG.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_3du": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "DU/IPMAT Selected",
    "outcome": {
      "sal": "Rs.4-15 LPA",
      "nw": "Rs.20-80L",
      "p": "15%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "College",
        "DU"
      ],
      "bt": "DU B.Com Hons 3-yr. Placement Rs.5-8 LPA average. Top 10% crack Rs.12-20 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_3st": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Drop Year No Improvement",
    "outcome": {
      "sal": "Rs.3-6 LPA",
      "nw": "Rs.10-30L",
      "p": "50%",
      "r": "High",
      "pt": [
        "Commerce",
        "College",
        "Stuck"
      ],
      "bt": "82% of repeaters dont score better. Lost 1 year + mental pressure.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_4su": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Successful Freelancer",
    "outcome": {
      "sal": "Rs.6-25 LPA",
      "nw": "Rs.40L-2Cr",
      "p": "25%",
      "r": "High",
      "pt": [
        "Commerce",
        "Skills",
        "Success"
      ],
      "bt": "3-5 yrs to build client base. Income inconsistent first 2 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_4fa": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Struggling Freelancer",
    "outcome": {
      "sal": "Rs.2-6 LPA",
      "nw": "Rs.10-25L",
      "p": "75%",
      "r": "V.High",
      "pt": [
        "Commerce",
        "Skills",
        "Struggling"
      ],
      "bt": "Global competition drives rates down. Indian freelancers earn 1/3 US rates.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_5se": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Govt Job Cleared",
    "outcome": {
      "sal": "Rs.5-12 LPA",
      "nw": "Rs.50L-1Cr",
      "p": "10%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Govt",
        "Selected"
      ],
      "bt": "SSC CGL/Bank PO/State PSC. 10-15L applicants per exam. Defined pension + perks.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_5st": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Still Trying Govt",
    "outcome": {
      "sal": "Rs.2-5 LPA",
      "nw": "Rs.5-20L",
      "p": "60%",
      "r": "High",
      "pt": [
        "Commerce",
        "Govt",
        "Stuck"
      ],
      "bt": "3-5 yrs attempting while doing odd jobs. Age limits 25-32 create pressure.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_6sc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Enterprise Founder Scaled",
    "outcome": {
      "sal": "Rs.50L-Rs.3Cr+",
      "nw": "Rs.2-10Cr",
      "p": "5%",
      "r": "High",
      "pt": [
        "Commerce",
        "Entrepreneur",
        "Scale"
      ],
      "bt": "Top 3% of entrepreneurs achieve Rs.1Cr+ income. SaaS/tech highest exit. Most take 7-10 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_6co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Profitable No Scale",
    "outcome": {
      "sal": "Rs.8-15 LPA",
      "nw": "Rs.50L-1Cr",
      "p": "45%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "Entrepreneur",
        "Comfortable"
      ],
      "bt": "Lifestyle business. Stable income but capped growth. Common in retail food service.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_6hj": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Hybrid Founder+Job",
    "outcome": {
      "sal": "Rs.15-25 LPA",
      "nw": "Rs.50-90L",
      "p": "60%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Entrepreneur",
        "Hybrid"
      ],
      "bt": "Side hustle + day job. Lower risk. Most recommended path for first-time founders.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_6pj": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Corporate Ops Manager",
    "outcome": {
      "sal": "Rs.15-28 LPA",
      "nw": "Rs.60L-1.2Cr",
      "p": "75%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Entrepreneur",
        "Rebuilt"
      ],
      "bt": "Failed founder Rs.8-12 LPA re-entry. Biz experience valued 20% higher than fresh grads.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_6st": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Struggling No Degree",
    "outcome": {
      "sal": "Rs.8-12 LPA",
      "nw": "Rs.20-45L",
      "p": "25%",
      "r": "High",
      "pt": [
        "Commerce",
        "Entrepreneur",
        "Struggle"
      ],
      "bt": "Failed biz + no degree = resume gap. Rs.3-5 LPA re-entry. Bankruptcy Rs.5-15L avg.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7ic": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Director Analytics India",
    "outcome": {
      "sal": "Rs.35-60 LPA",
      "nw": "Rs.2-4Cr",
      "p": "35%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Hybrid",
        "Corp"
      ],
      "bt": "Rs.30-45 LPA median. 3-4 yr promotion cycle. 15% reach director in 15 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7pt": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Principal Analyst Product Tech",
    "outcome": {
      "sal": "Rs.50-90 LPA",
      "nw": "Rs.3-6Cr",
      "p": "25%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Hybrid",
        "Product"
      ],
      "bt": "Google/Uber/Bangalore Rs.40-70 LPA. RSUs add 30-50%. Top 10% command Rs.1Cr+ TC.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7ab": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Global FinTech Advisor",
    "outcome": {
      "sal": "Rs.80L-Rs.1.5Cr eq",
      "nw": "Rs.4-8Cr",
      "p": "20%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "Hybrid",
        "Abroad"
      ],
      "bt": "US/UK/SG Rs.80-150K. H1B approval 25%. Purchasing Power 2-3x India.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7ac": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Private Analytics Consultant",
    "outcome": {
      "sal": "Rs.40-80 LPA",
      "nw": "Rs.2-5Cr",
      "p": "20%",
      "r": "High",
      "pt": [
        "Commerce",
        "Hybrid",
        "Consultant"
      ],
      "bt": "Rs.25-50 LPA. Independent Rs.5-15K/hr. Client acquisition = 40% of time.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Senior Business Analyst",
    "outcome": {
      "sal": "Rs.20-30 LPA",
      "nw": "Rs.80L-1.5Cr",
      "p": "75%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Hybrid",
        "Comfortable"
      ],
      "bt": "Rs.15-22 LPA median. 8-10% annual hikes. Switching yields 20-30% bump.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_7bc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Generic Finance Executive",
    "outcome": {
      "sal": "Rs.12-20 LPA",
      "nw": "Rs.50-90L",
      "p": "80%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Hybrid",
        "BCom"
      ],
      "bt": "Generic B.Com roles Rs.4-6 LPA. Without SQL/analytics ceiling at Rs.10-12 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_8cf": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CFA Charterholder",
    "outcome": {
      "sal": "Rs.18-30 LPA",
      "nw": "Rs.1.5-3Cr",
      "p": "70%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Cert",
        "CFA"
      ],
      "bt": "CFA charterholder median Rs.18 LPA. Portfolio managers Rs.25-35 LPA. Only 20% finish all 3 levels.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_8cl": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CFA Left Midway",
    "outcome": {
      "sal": "Rs.6-12 LPA",
      "nw": "Rs.25-50L",
      "p": "75%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "Cert",
        "CFA-Left"
      ],
      "bt": "Partial CFA adds 10-15% resume premium. Does not unlock charter-level roles. 80% never finish.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_8ac": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "ACCA Member",
    "outcome": {
      "sal": "Rs.10-20 LPA",
      "nw": "Rs.80L-1.5Cr",
      "p": "75%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Cert",
        "ACCA"
      ],
      "bt": "ACCA members avg Rs.10-20 LPA. Strong in MNC finance. UK qualification global mobility.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_8cm": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "CMA Certified",
    "outcome": {
      "sal": "Rs.8-15 LPA",
      "nw": "Rs.60L-1Cr",
      "p": "80%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Cert",
        "CMA"
      ],
      "bt": "US CMA avg Rs.12-15 LPA. Indian CMA Rs.8-12 LPA. Strong in cost management.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oc_8cs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Qualified CS",
    "outcome": {
      "sal": "Rs.7-14 LPA",
      "nw": "Rs.50L-1Cr",
      "p": "80%",
      "r": "Low",
      "pt": [
        "Commerce",
        "Cert",
        "CS"
      ],
      "bt": "CS avg Rs.7-12 LPA. Mandatory for listed company secretary. Statutory compliance valued.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_1cl": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "UPSC Cleared IAS/IPS/IFS",
    "outcome": {
      "sal": "Rs.15-35 LPA+",
      "nw": "Rs.1-5Cr+",
      "p": "0.5%",
      "r": "Low",
      "pt": [
        "Arts",
        "UPSC",
        "Cleared"
      ],
      "bt": "Rs.15-25 LPA entry 7th Pay Commission. Chief Secretary Rs.2.5L/mo. Power prestige impact unmatched.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_1pr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "UPSC Prelims Only",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.15-40L",
      "p": "10%",
      "r": "Medium",
      "pt": [
        "Arts",
        "UPSC",
        "Prelims"
      ],
      "bt": "Cleared prelims = top 5%. Many become YouTube educators coaches. Alternate: State PCS or SSC.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_1fa": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "UPSC Not Cleared",
    "outcome": {
      "sal": "Rs.3-6 LPA",
      "nw": "Rs.10-30L",
      "p": "40%",
      "r": "High",
      "pt": [
        "Arts",
        "UPSC",
        "Failed"
      ],
      "bt": "5.95L appeared 1009 selected 0.17%. Attempts cost 2-5 yrs. Backup: State PSC banking PG.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_2nl": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "NLU Law Graduate",
    "outcome": {
      "sal": "Rs.12-40 LPA",
      "nw": "Rs.1-5Cr",
      "p": "30%",
      "r": "Low",
      "pt": [
        "Arts",
        "Law",
        "NLU"
      ],
      "bt": "National Law Universities Rs.12-20 LPA at top firms. Supreme Court clerkship Rs.6-10 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_2nn": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Non-NLU Law Grad",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.20-60L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Law",
        "Non-NLU"
      ],
      "bt": "5-yr BA LLB state university. Moot court internships matter. CLAT for NLU.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_3di": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Digital Media",
    "outcome": {
      "sal": "Rs.4-15 LPA",
      "nw": "Rs.20-80L",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Journalism",
        "Digital"
      ],
      "bt": "Digital media growing 28% YoY. SEO social media video editing mandatory.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_3tr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Print/TV Media",
    "outcome": {
      "sal": "Rs.3-10 LPA",
      "nw": "Rs.15-50L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Journalism",
        "Traditional"
      ],
      "bt": "Print declining 12% annually. TV news stable but entry Rs.15-20K/mo.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_4cl": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Clinical Psychologist",
    "outcome": {
      "sal": "Rs.5-20 LPA",
      "nw": "Rs.40L-2Cr",
      "p": "25%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Psych",
        "Clinical"
      ],
      "bt": "RCI license required. MPhil/PhD needed. Rs.1.5-3K/session in cities.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_4co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Counselor/Social Worker",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.15-40L",
      "p": "55%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Psych",
        "Counseling"
      ],
      "bt": "MSW helps. NGOs pay Rs.2-5 LPA. Corporate wellness Rs.5-10 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_5ux": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "UI/UX Designer",
    "outcome": {
      "sal": "Rs.5-20 LPA",
      "nw": "Rs.40L-2Cr",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Design",
        "UI/UX"
      ],
      "bt": "Highest-paying design field. Figma mandatory. Product design Rs.12-20 LPA. Portfolio > degree.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_5gr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Graphic Designer",
    "outcome": {
      "sal": "Rs.3-12 LPA",
      "nw": "Rs.15-50L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Design",
        "Graphic"
      ],
      "bt": "Canva eating low-end. Motion/3D pay Rs.6-12 LPA. In-house > agency for stability.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_5fa": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Fine Arts/Illustrator",
    "outcome": {
      "sal": "Rs.2-10 LPA",
      "nw": "Rs.10-40L",
      "p": "30%",
      "r": "High",
      "pt": [
        "Arts",
        "Design",
        "FineArts"
      ],
      "bt": "Portfolio critical. Art direction Rs.8-15 LPA after 5+ yrs. Freelance Rs.500-5K/piece.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_6cs": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Content Strategist",
    "outcome": {
      "sal": "Rs.5-18 LPA",
      "nw": "Rs.30L-1Cr",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Hybrid",
        "Content"
      ],
      "bt": "Blend writing + analytics + SEO. Rs.4-8 LPA entry. Senior Rs.12-18 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_6dp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Digital Producer",
    "outcome": {
      "sal": "Rs.4-15 LPA",
      "nw": "Rs.20-80L",
      "p": "35%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Hybrid",
        "Producer"
      ],
      "bt": "Multi-format content. Agency Rs.4-8 LPA. In-house Rs.6-12 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "oa_6hr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "HR/Talent Manager",
    "outcome": {
      "sal": "Rs.5-15 LPA",
      "nw": "Rs.30-80L",
      "p": "50%",
      "r": "Low",
      "pt": [
        "Arts",
        "Hybrid",
        "HR"
      ],
      "bt": "CHRM/SHRM certifications help. Campus hiring + L&D. Rs.4-8 LPA entry.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_co": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Content Creator",
    "outcome": {
      "sal": "Rs.2-20 LPA",
      "nw": "Rs.5L-2Cr",
      "p": "12%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Creator"
      ],
      "bt": "Top 1% earn 80% of money. 99% make <Rs.50K/mo. Consistency 2-3 yrs before real income.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_in": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Influencer",
    "outcome": {
      "sal": "Rs.2-15 LPA",
      "nw": "Rs.3L-1Cr",
      "p": "8%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Influencer"
      ],
      "bt": "Rs.2000Cr industry but 95% to top 5%. Brand deals unreliable. Platform dependency real.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_po": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Podcaster",
    "outcome": {
      "sal": "Rs.3-15 LPA",
      "nw": "Rs.5L-1.5Cr",
      "p": "15%",
      "r": "High",
      "pt": [
        "Any",
        "Universal",
        "Podcaster"
      ],
      "bt": "3M+ podcasts exist. Most <150 downloads/episode. Monetization 1-2 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_wr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Writer/Blogger",
    "outcome": {
      "sal": "Rs.2-8 LPA",
      "nw": "Rs.5L-50L",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Writer"
      ],
      "bt": "AI disrupting content writing. Technical/UX writing pay Rs.6-12 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_mu": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Musician/Singer",
    "outcome": {
      "sal": "Rs.1-15 LPA",
      "nw": "Rs.2L-1Cr",
      "p": "5%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Musician"
      ],
      "bt": "Streaming pays Rs.0.003/stream. Live performances teaching session work sustain most.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ac": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Actor/Filmmaker",
    "outcome": {
      "sal": "Rs.2-50 LPA",
      "nw": "Rs.2L-5Cr",
      "p": "3%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Actor"
      ],
      "bt": "50K+ struggling actors in Mumbai. Theatre/networking matter. 99% have side gigs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ph": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Photographer",
    "outcome": {
      "sal": "Rs.3-10 LPA",
      "nw": "Rs.3L-50L",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Photo"
      ],
      "bt": "Wedding most reliable. Gear Rs.50K-5L. Smartphone reducing demand. Niche pays better.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_en": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Startup Founder",
    "outcome": {
      "sal": "Rs.0-50 LPA",
      "nw": "Rs.0-10Cr",
      "p": "10%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Startup"
      ],
      "bt": "90% fail. 35% survive past 3 yrs. SaaS highest exit. Most had 3-5 yrs experience first.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ec": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "E-Commerce Seller",
    "outcome": {
      "sal": "Rs.3-20 LPA",
      "nw": "Rs.5L-2Cr",
      "p": "20%",
      "r": "High",
      "pt": [
        "Any",
        "Universal",
        "E-Com"
      ],
      "bt": "Amazon/Flipkart take 15-30%. Returns 5-15%. 10L+ sellers. D2C better margins.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ag": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Agency Owner",
    "outcome": {
      "sal": "Rs.4-20 LPA",
      "nw": "Rs.5L-1.5Cr",
      "p": "25%",
      "r": "High",
      "pt": [
        "Any",
        "Universal",
        "Agency"
      ],
      "bt": "Hard to scale beyond 5-10 people. Client acquisition hardest. 50% fail year 1.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_fr": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Freelancer",
    "outcome": {
      "sal": "Rs.3-15 LPA",
      "nw": "Rs.3L-60L",
      "p": "35%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Freelancer"
      ],
      "bt": "Global competition drives rates down. Indian freelancers earn 1/3 US rates.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_gd": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Graphic Designer",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.3L-40L",
      "p": "45%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Graphic"
      ],
      "bt": "Canva eating low-end. Motion/3D pay Rs.6-12 LPA. Portfolio > degree.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ux": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "UI/UX Designer",
    "outcome": {
      "sal": "Rs.5-12 LPA",
      "nw": "Rs.5L-80L",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "UI/UX"
      ],
      "bt": "Highest-paying design field. Figma mandatory. Product design Rs.12-20 LPA.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_dm": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Digital Marketer",
    "outcome": {
      "sal": "Rs.3-10 LPA",
      "nw": "Rs.5L-60L",
      "p": "50%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Digital"
      ],
      "bt": "Oversupplied entry level. Specialize SEO/PPC/email. Performance marketing 2x general.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_sa": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Sales Professional",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.5L-80L",
      "p": "55%",
      "r": "Low",
      "pt": [
        "Any",
        "Universal",
        "Sales"
      ],
      "bt": "Most meritocratic career. Income = results. Tech SaaS Rs.8-20 LPA top performers.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_po2": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Politician",
    "outcome": {
      "sal": "Rs.2-10 LPA",
      "nw": "Rs.5L-5Cr",
      "p": "2%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Politics"
      ],
      "bt": "70% of MPs have family connections. Student politics entry. 5-10 yrs before ticket.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ng": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "NGO/Social Worker",
    "outcome": {
      "sal": "Rs.3-8 LPA",
      "nw": "Rs.3L-30L",
      "p": "35%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "NGO"
      ],
      "bt": "MSW helps. International NGOs Rs.10-20 LPA but need Masters + 5 yrs.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_sp": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Athlete/Sports",
    "outcome": {
      "sal": "Rs.2-20 LPA",
      "nw": "Rs.5L-5Cr",
      "p": "5%",
      "r": "V.High",
      "pt": [
        "Any",
        "Universal",
        "Sports"
      ],
      "bt": "Careers short 5-15 yrs. Cricket 80% of Indian sports funding. Coaching more reliable.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ct": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Coach/Trainer",
    "outcome": {
      "sal": "Rs.3-10 LPA",
      "nw": "Rs.3L-50L",
      "p": "40%",
      "r": "Medium",
      "pt": [
        "Any",
        "Universal",
        "Coach"
      ],
      "bt": "NEET/JEE tutors Rs.5-15 LPA. Online courses need audience. 1-on-1 capped income.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "ou_ce": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Creator Economy Pro",
    "outcome": {
      "sal": "Rs.3-15 LPA",
      "nw": "Rs.5L-2Cr",
      "p": "15%",
      "r": "High",
      "pt": [
        "Any",
        "Universal",
        "CreatorE"
      ],
      "bt": "Multi-platform YT+newsletter+courses+community. Revenue diversification key.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_fc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Finance Creator",
    "outcome": {
      "sal": "Rs.5-25 LPA",
      "nw": "Rs.10L-2Cr",
      "p": "20%",
      "r": "Medium",
      "pt": [
        "Commerce",
        "Hybrid",
        "FinCreator"
      ],
      "bt": "Finance content most monetizable high CPM. CA/CFA credibility. Examples: Finance With Sharan.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_lc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Legal Creator",
    "outcome": {
      "sal": "Rs.6-18 LPA",
      "nw": "Rs.10L-1.5Cr",
      "p": "18%",
      "r": "Medium",
      "pt": [
        "Law",
        "Hybrid",
        "LegalCreator"
      ],
      "bt": "Legal content high engagement. Niche: contract/property/constitutional law.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_se": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "EdTech Creator",
    "outcome": {
      "sal": "Rs.5-20 LPA",
      "nw": "Rs.8L-1.5Cr",
      "p": "22%",
      "r": "Medium",
      "pt": [
        "Science",
        "Hybrid",
        "EdTech"
      ],
      "bt": "EdTech = Rs.30000Cr market. Teaching YT + courses. JEE/NEET content highest demand.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_da": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Design Agency Owner",
    "outcome": {
      "sal": "Rs.5-15 LPA",
      "nw": "Rs.5L-1Cr",
      "p": "25%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Hybrid",
        "DesignAgency"
      ],
      "bt": "Need both creative + biz dev. Most fail at selling. Specialization beats generalist.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_ec": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "D2C Brand Founder",
    "outcome": {
      "sal": "Rs.5-25 LPA",
      "nw": "Rs.10L-3Cr",
      "p": "15%",
      "r": "High",
      "pt": [
        "Commerce",
        "Hybrid",
        "D2C"
      ],
      "bt": "Rs.5-10L minimum capital. Most fail year 1. Instagram-first brands with strong visual identity.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_wc": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Wellness Coach",
    "outcome": {
      "sal": "Rs.4-12 LPA",
      "nw": "Rs.5L-60L",
      "p": "30%",
      "r": "Medium",
      "pt": [
        "Arts",
        "Hybrid",
        "Wellness"
      ],
      "bt": "Mental wellness growing 20% YoY. RCI for clinical. Niche: corporate wellness student health.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_ts": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Tech Startup Founder",
    "outcome": {
      "sal": "Rs.0-100 LPA",
      "nw": "Rs.0-10Cr",
      "p": "8%",
      "r": "V.High",
      "pt": [
        "Science",
        "Hybrid",
        "TechFounder"
      ],
      "bt": "SaaS highest exit category. YC startups 5% unicorn rate. Most fail due to no market need 42%.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  },
  "cb_dg": {
    "l": 6,
    "isOutcome": true,
    "tag": "OUT",
    "title": "Digital Agency Founder",
    "outcome": {
      "sal": "Rs.5-20 LPA",
      "nw": "Rs.8L-1.5Cr",
      "p": "20%",
      "r": "High",
      "pt": [
        "Any",
        "Hybrid",
        "DigAgency"
      ],
      "bt": "Easy to start hard to scale. First 10 clients hardest. Retainer revenue goal. Specialized 2x rates.",
      "cd": [
        50,
        50,
        50,
        50,
        50
      ]
    }
  }
};
