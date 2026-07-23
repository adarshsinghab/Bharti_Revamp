export interface Program {
  name: string;
  duration: string;
  eligibility: string;
  accreditation?: string;
  category: string;
  faculty: string;
  specializations?: string[];
  careerOpportunities?: string[];
}

export const FACULTIES = [
  "ALL PROGRAMMES",
  "PHARMACY",
  "LAW",
  "ENGINEERING & TECH",
  "EDUCATION",
  "SCIENCE",
  "COMMERCE & MANAGEMENT",
  "ARTS & HUMANITIES",
  "HEALTH & ALLIED SCIENCE",
  "LIBRARY SCIENCE",
  "JOURNALISM & MASS COMM",
  "HOTEL MANAGEMENT",
  "AYURVED MEDICAL COLLEGE",
  "COLLEGE OF NURSING",
  "AGRICULTURE COLLEGE",
  "SUN PRIVATE ITI",
  "SUN PUBLIC SCHOOL"
] as const;

export const COURSES_DATA: Program[] = [
  // Faculty of Pharmacy (Prospectus p. 13)
  {
    name: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years (Full Time)",
    eligibility: "10+2 with Physics & Chemistry as compulsory with Maths/Bio (Min 45%, 40% reserved)",
    accreditation: "PCI Approved",
    category: "Diploma",
    faculty: "PHARMACY",
    careerOpportunities: ["Community Pharmacist", "Chemist Shop", "Hospital Pharmacist", "Medical Sales Representative"]
  },
  {
    name: "Bachelor of Pharmacy (B.Pharm)",
    duration: "4 Years (Full Time)",
    eligibility: "10+2 with Physics & Chemistry with Maths/Bio/Biotech (Min 45%, 40% reserved) + Entrance Test",
    accreditation: "PCI Approved",
    category: "Undergraduate",
    faculty: "PHARMACY",
    careerOpportunities: ["Quality Control Officer", "R&D Scientist", "Formulation Development", "Regulatory Affairs"]
  },
  {
    name: "Master of Pharmacy (M.Pharm)",
    duration: "2 Years (Full Time)",
    eligibility: "Passed B.Pharm degree from PCI recognized institution with minimum 50% marks",
    accreditation: "PCI Approved",
    category: "Postgraduate",
    faculty: "PHARMACY",
    specializations: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry"],
    careerOpportunities: ["Research Scientist", "Product Development", "Toxicologist", "Clinical Research Associate"]
  },
  {
    name: "Ph.D. in Pharmaceutical Sciences",
    duration: "3 Years Minimum",
    eligibility: "Master's Degree (M.Pharm) in relevant discipline with valid research score",
    accreditation: "UGC / PCI",
    category: "Doctoral",
    faculty: "PHARMACY"
  },

  // Faculty of Law (Prospectus p. 14)
  {
    name: "B.A. LL.B. (Integrated)",
    duration: "5 Years (Full Time)",
    eligibility: "10+2 or Equivalent from recognized Board (Min 45%)",
    accreditation: "BCI Approved",
    category: "Undergraduate",
    faculty: "LAW",
    careerOpportunities: ["Corporate Lawyer", "Judiciary Aspirant", "Advocate", "Legal Consultant"]
  },
  {
    name: "B.Com. LL.B. (Integrated)",
    duration: "5 Years (Full Time)",
    eligibility: "10+2 or Equivalent with Commerce/Arts/Science",
    accreditation: "BCI Approved",
    category: "Undergraduate",
    faculty: "LAW",
    careerOpportunities: ["Corporate Law Counselor", "Tax Auditor", "Legal Advisor", "Compliance Officer"]
  },
  {
    name: "Bachelor of Laws (LL.B.)",
    duration: "3 Years (Full Time)",
    eligibility: "Graduation in any stream from recognized University (Min 45%)",
    accreditation: "BCI Approved",
    category: "Undergraduate",
    faculty: "LAW",
    careerOpportunities: ["Judicial Clerkship", "ADR Courts", "High Court / District Court Practitioner"]
  },
  {
    name: "Master of Laws (LL.M.)",
    duration: "2 Years (Full Time)",
    eligibility: "Passed LL.B. or 5-Year Integrated Law Degree",
    accreditation: "BCI Approved",
    category: "Postgraduate",
    faculty: "LAW",
    specializations: ["Constitutional & Administrative Law", "Criminal Law", "Corporate Law"],
    careerOpportunities: ["Law Professor", "Legal Researcher", "Corporate Counsel", "Human Rights Practitioner"]
  },

  // Faculty of Engineering & Technology (Prospectus p. 15)
  {
    name: "Diploma in Engineering (Polytechnic)",
    duration: "3 Years (Full Time)",
    eligibility: "Passed 10th Standard or Equivalent",
    accreditation: "AICTE Approved",
    category: "Diploma",
    faculty: "ENGINEERING & TECH",
    specializations: ["Civil Engineering", "Mechanical Engineering", "Electronics & Telecom", "Computer Science", "Electrical Engg"],
    careerOpportunities: ["Junior Engineer", "Technician", "Site Supervisor", "CAD Draftsman"]
  },
  {
    name: "B.Tech (Bachelor of Technology)",
    duration: "4 Years (Full Time)",
    eligibility: "10+2 with Physics & Maths + Chem/Bio/Biotech (Min 45%, 40% reserved) + Entrance",
    accreditation: "AICTE Approved",
    category: "Undergraduate",
    faculty: "ENGINEERING & TECH",
    specializations: ["Civil Engineering", "Mechanical Engineering", "Electronics & Telecom", "Computer Science", "Electrical Engg"],
    careerOpportunities: ["Software Architect", "Structural Consultant", "Automobile Engineer", "Power Systems Engineer"]
  },
  {
    name: "B.Tech (Lateral Entry)",
    duration: "3 Years (Full Time)",
    eligibility: "Passed 3-year Diploma in Engineering or B.Sc. with Maths (Min 45%)",
    accreditation: "AICTE Approved",
    category: "Undergraduate",
    faculty: "ENGINEERING & TECH"
  },
  {
    name: "M.Tech (Master of Technology)",
    duration: "2 Years (Full Time)",
    eligibility: "Passed B.Tech / B.E. in relevant branch with 45% (40% reserved)",
    accreditation: "AICTE Approved",
    category: "Postgraduate",
    faculty: "ENGINEERING & TECH",
    specializations: ["Computer Tech / E-Security / Software Engg", "Civil (Structural / Geotechnical / Construction / Highway)", "Mechanical (Production / Energy / Thermal / Safety)", "Electrical (Power System / Power Electronics)"]
  },

  // Faculty of Education (Prospectus p. 16)
  {
    name: "Diploma in Elementary Education (D.El.Ed)",
    duration: "2 Years (Full Time)",
    eligibility: "10+2 or Equivalent + State Entrance Exam",
    accreditation: "NCTE Recognized",
    category: "Diploma",
    faculty: "EDUCATION",
    careerOpportunities: ["Primary School Teacher", "Educational Content Developer", "Curriculum Designer"]
  },
  {
    name: "Bachelor of Education (B.Ed)",
    duration: "2 Years (Full Time)",
    eligibility: "Graduation or Post Graduation in any discipline + Entrance Exam",
    accreditation: "NCTE Recognized",
    category: "Undergraduate",
    faculty: "EDUCATION",
    careerOpportunities: ["Trained Graduate Teacher (TGT)", "High School Teacher", "Educational Administrator"]
  },
  {
    name: "Master of Education (M.Ed)",
    duration: "2 Years (Full Time)",
    eligibility: "Passed B.Ed with minimum 50% marks",
    accreditation: "NCTE Recognized",
    category: "Postgraduate",
    faculty: "EDUCATION",
    careerOpportunities: ["College Lecturer", "School Principal / Headmaster", "Educational Researcher"]
  },

  // Faculty of Science (Prospectus p. 17-18)
  {
    name: "Bachelor of Science (B.Sc. Plain & Hons)",
    duration: "3 Years / 4 Years (NEP Research)",
    eligibility: "10+2 with Science stream (Physics/Chem/Maths/Bio)",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "SCIENCE",
    specializations: ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology", "Biotechnology", "Microbiology", "Psychology", "Food & Nutrition"]
  },
  {
    name: "Master of Science (M.Sc.)",
    duration: "2 Years (Full Time)",
    eligibility: "B.Sc. degree in relevant major subject",
    accreditation: "UGC Approved",
    category: "Postgraduate",
    faculty: "SCIENCE",
    specializations: ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology", "Biotechnology", "Microbiology", "Psychology", "Food & Nutrition"]
  },
  {
    name: "B.Sc. / M.Sc. Forensic Science",
    duration: "3+1 Yrs (B.Sc) / 2 Yrs (M.Sc)",
    eligibility: "10+2 Science (for B.Sc) / B.Sc Forensic or Science (for M.Sc)",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "SCIENCE",
    careerOpportunities: ["Crime Scene Investigator", "Forensic Expert", "Toxicologist", "Cyber Crime Analyst"]
  },
  {
    name: "Bachelor & Master of Computer Applications (BCA / PGDCA / MCA)",
    duration: "BCA (3+1 Yrs), PGDCA (1 Yr)",
    eligibility: "10+2 for BCA / Graduation for PGDCA",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "SCIENCE",
    careerOpportunities: ["Software Developer", "Web Framework Developer", "Database Administrator", "System Analyst"]
  },
  {
    name: "B.An & VFX (Animation & Visual Effects)",
    duration: "3 Years (Full Time)",
    eligibility: "10+2 in any stream",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "SCIENCE",
    careerOpportunities: ["3D Animator", "VFX Artist", "Game Asset Designer", "Video Editor"]
  },

  // Faculty of Commerce & Management (Prospectus p. 19-20)
  {
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years / 4 Years (NEP Research)",
    eligibility: "10+2 in any stream from recognized Board",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "COMMERCE & MANAGEMENT",
    specializations: ["Finance", "Marketing", "Human Resource Management"],
    careerOpportunities: ["Management Trainee", "HR Specialist", "Business Analyst", "Marketing Executive"]
  },
  {
    name: "Master of Business Administration (MBA)",
    duration: "2 Years (Full Time)",
    eligibility: "Graduation in any discipline with minimum 50% (45% reserved)",
    accreditation: "AICTE Approved",
    category: "Postgraduate",
    faculty: "COMMERCE & MANAGEMENT",
    specializations: ["Finance Management", "Marketing Analytics", "Human Resource Management", "General Management"],
    careerOpportunities: ["Corporate Manager", "Business Consultant", "Project Manager", "Investment Analyst"]
  },
  {
    name: "Bachelor of Commerce (B.Com Plain & Hons)",
    duration: "3 Years / 4 Years (NEP Research)",
    eligibility: "10+2 Commerce or Science",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "COMMERCE & MANAGEMENT",
    specializations: ["Marketing", "Financial Accounting", "Banking & Insurance"]
  },
  {
    name: "Master of Commerce (M.Com)",
    duration: "2 Years (Full Time)",
    eligibility: "B.Com degree from recognized University",
    accreditation: "UGC Approved",
    category: "Postgraduate",
    faculty: "COMMERCE & MANAGEMENT"
  },
  {
    name: "Diploma Programs in Management (D.E.Com / DMBC / DNM / DDM)",
    duration: "1 Year Diplomas",
    eligibility: "10+2 or Graduation",
    accreditation: "UGC Approved",
    category: "Diploma",
    faculty: "COMMERCE & MANAGEMENT",
    specializations: ["Digital Marketing", "NGO Management", "e-Commerce", "Office Management"]
  },

  // Faculty of Arts & Humanities (Prospectus p. 21-22)
  {
    name: "Bachelor of Arts (B.A. Plain & Hons)",
    duration: "3 Years / 4 Years (NEP Research)",
    eligibility: "10+2 in any stream",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "ARTS & HUMANITIES",
    specializations: ["English", "Hindi", "Chhattisgarhi", "History & Archaeology", "Economics", "Sociology", "Political Science", "Geography", "Psychology", "Philosophy", "Public Admin", "Sanskrit"]
  },
  {
    name: "Master of Arts (M.A.)",
    duration: "2 Years (Full Time)",
    eligibility: "Graduation in relevant discipline",
    accreditation: "UGC Approved",
    category: "Postgraduate",
    faculty: "ARTS & HUMANITIES"
  },
  {
    name: "Bachelor & Master of Social Work (BSW / MSW)",
    duration: "BSW (4 Yrs), MSW (2 Yrs)",
    eligibility: "10+2 for BSW / Graduation for MSW",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "ARTS & HUMANITIES",
    careerOpportunities: ["NGO Project Manager", "Community Development Officer", "CSR Executive", "Medical Social Worker"]
  },

  // Faculty of Health & Allied Science (Prospectus p. 23)
  {
    name: "Master of Public Health (MPH)",
    duration: "2 Years (Full Time)",
    eligibility: "Graduation in Medical / Health Sciences (MBBS / BDS / BPT / B.Pharm / B.Sc Nursing)",
    accreditation: "UGC Recognized",
    category: "Postgraduate",
    faculty: "HEALTH & ALLIED SCIENCE",
    careerOpportunities: ["Public Health Officer", "Epidemiologist", "WHO / NGO Consultant", "Health Administrator"]
  },
  {
    name: "Diploma / B.Sc / M.Sc in Yoga Science",
    duration: "Dip (1 Yr), B.Sc (3/4 Yrs), M.Sc (2 Yrs), PG Dip (1 Yr)",
    eligibility: "10+2 for UG / Graduation for PG",
    accreditation: "UGC Recognized",
    category: "Undergraduate",
    faculty: "HEALTH & ALLIED SCIENCE",
    careerOpportunities: ["Yoga Therapist", "Wellness Coach", "Corporate Yoga Trainer", "Studio Owner"]
  },

  // Faculty of Library & Information Science (Prospectus p. 24)
  {
    name: "B.Lib.I.Sc & M.Lib.I.Sc",
    duration: "1 Year Each",
    eligibility: "Graduation for B.Lib / B.Lib for M.Lib",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "LIBRARY SCIENCE",
    careerOpportunities: ["University Librarian", "Information Scientist", "Knowledge Manager", "Digital Archivist"]
  },

  // Faculty of Journalism & Mass Communication (Prospectus p. 25)
  {
    name: "B.A. & M.A. in Journalism & Mass Communication (BJMC / MJMC)",
    duration: "BJMC (3+1 Yrs), MJMC (2 Yrs)",
    eligibility: "10+2 for BJMC / Graduation for MJMC",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "JOURNALISM & MASS COMM",
    careerOpportunities: ["News Anchor", "Reporter / Editor", "PR Executive", "Media Designer", "Content Strategist"]
  },

  // Faculty of Hotel Management (Prospectus p. 26)
  {
    name: "Bachelor & Master of Hotel Management (BHM / MHM)",
    duration: "BHM (4 Yrs), MHM (2 Yrs)",
    eligibility: "10+2 for BHM / BHM for MHM",
    accreditation: "UGC Approved",
    category: "Undergraduate",
    faculty: "HOTEL MANAGEMENT",
    specializations: ["Front Office", "Food & Beverage Service", "Food Production", "Housekeeping", "Event Management", "Hospitality Marketing"],
    careerOpportunities: ["Hotel Executive", "Flight Cabin Crew", "Cruise Line Manager", "Resort Manager"]
  },

  // Group Institutions (Prospectus p. 30-34)
  {
    name: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
    duration: "5.5 Years (5 Yrs + 6 Mo Internship)",
    eligibility: "10+2 PCB with 50% aggregate + NEET Qualifier",
    accreditation: "Affiliated to Ayush Univ, Raipur",
    category: "Group Institution",
    faculty: "AYURVED MEDICAL COLLEGE",
    careerOpportunities: ["Ayurvedic Medical Officer", "General Practitioner", "Panchakarma Specialist", "AYUSH Officer"]
  },
  {
    name: "B.Sc. Nursing",
    duration: "4 Years (Full Time)",
    eligibility: "10+2 PCB with 45% aggregate + CG-PNT Entrance",
    accreditation: "Affiliated to Ayush Univ, Raipur",
    category: "Group Institution",
    faculty: "COLLEGE OF NURSING",
    careerOpportunities: ["Nursing Superintendent", "Community Health Nurse", "Staff Nurse", "Military Nurse"]
  },
  {
    name: "B.Sc. Agriculture & B.Tech Agricultural Engg",
    duration: "4 Years (Full Time)",
    eligibility: "10+2 Ag / PCB / PCM + CG-PAT / CG-PET Entrance",
    accreditation: "Affiliated to IGKV, Raipur",
    category: "Group Institution",
    faculty: "AGRICULTURE COLLEGE",
    careerOpportunities: ["Agriculture Extension Officer (RAEO)", "Bank AFO", "Farm Manager", "Soil Conservation Officer"]
  },
  {
    name: "Sun Private ITI (COPA / Steno / Electrician / Fitter)",
    duration: "1 Year to 2 Years",
    eligibility: "10th Class under 10+2 system with Science & Maths",
    accreditation: "NCVT & DGT, New Delhi Affiliated",
    category: "Group Institution",
    faculty: "SUN PRIVATE ITI",
    careerOpportunities: ["Technician in Railways/ISRO/SAIL/NTPC/DRDO", "Electrician", "Stenographer", "Power Plant Operator"]
  },
  {
    name: "Sun Public School (Nursery to 12th)",
    duration: "K-12 Education",
    eligibility: "Open Admissions for CBSE Curriculum",
    accreditation: "Affiliated to CBSE, New Delhi (#3330215)",
    category: "Group Institution",
    faculty: "SUN PUBLIC SCHOOL"
  }
];
