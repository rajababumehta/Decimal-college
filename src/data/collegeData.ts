import { Program, Notice } from '../types';

export const COLLEGE_INFO = {
  name: "Decimal College",
  tagline: "Empowering Minds, Shaping Leaders for Tomorrow",
  level: "+2 Secondary Education & Higher Learning",
  location: "Panitanki-8, Birgunj, Parsa, Nepal",
  shortLocation: "Panitanki-8, Birgunj, Nepal",
  establishedBS: "2072 B.S.",
  establishedAD: "2015 A.D.",
  affiliation: "Far Western University",
  affiliationFull: "Affiliated with Far Western University (FWU) & National Examinations Board (+2)",
  phone: "+977 982-5223245",
  rawPhone: "9779825223245",
  email: "decimalcollege@gmail.com",
  logoUrl: "/decimal-logo.jpg",
  logoUrlCdn: "https://images.weserv.nl/?url=https://i.ibb.co/WNJbHhmS/img-2-1790093333178.jpg",
  logoUrlMedium: "https://i.ibb.co/dsYdfT8n/img-2-1790093333178.jpg",
  logoIbbUrl: "https://ibb.co/4wr6FqhB",
  googleMapsUrl: "https://maps.app.goo.gl/JbFz6s61GvcDYLAt7?g_st=ac",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.498877028148!2d84.871861!3d27.014389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb0032e54db9%3A0xc3e658ec2d48c8b4!2sDecimal%20College!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063905773179",
  whatsappUrl: "https://wa.me/9779825223245?text=Hello%20Decimal%20College,%20I%20would%20like%20to%20inquire%20about%20+2%20admissions.",
  officeHours: "Sunday – Friday: 6:30 AM – 4:30 PM (Saturday: Closed)",
  stats: [
    { label: "Established In", value: "2072 B.S.", icon: "Calendar" },
    { label: "Graduated Scholars", value: "2,800+", icon: "GraduationCap" },
    { label: "Specialized Streams", value: "5 Programs", icon: "BookOpen" },
    { label: "Board Pass Rate", value: "98.4%", icon: "Award" }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "science",
    name: "+2 Science",
    badge: "High Demand",
    shortDesc: "Comprehensive pre-university curriculum in physical and biological sciences with cutting-edge laboratories.",
    fullDesc: "Our +2 Science program provides an in-depth foundation for students aspiring to pursue careers in Medicine (MBBS/BDS), Engineering, Computer Science, Biotechnology, and Pure Sciences. Equipped with modern physics, chemistry, and biology labs, students gain both rigorous theoretical insights and hands-on experimental proficiency.",
    duration: "2 Years (Class 11 & 12)",
    affiliation: "National Examinations Board (NEB) / FWU Framework",
    eligibility: "Minimum GPA 2.0 or above in SEE with minimum 'C+' in Science & Compulsory Mathematics.",
    keySubjects: [
      "Physics (Theory & Practical)",
      "Chemistry (Theory & Practical)",
      "Biology / Computer Science",
      "Mathematics",
      "Compulsory English & Nepali"
    ],
    careerProspects: [
      "Medicine & Health Sciences (MBBS, BDS, B.Sc. Nursing, Pharmacy)",
      "Engineering (Civil, Computer, Electrical, Mechanical)",
      "IT & Software Engineering (B.Sc. CSIT, BCA, BIT)",
      "Aviation, Agriculture & Forestry Research"
    ],
    highlights: [
      "State-of-the-art Physics, Chemistry, and Biology Laboratories",
      "Dedicated pre-entrance preparation for CEE (Medical) and IOE (Engineering)",
      "Audio-visual smart lecture halls with interactive multimedia",
      "Regular science exhibitions, robotics demos, and field visits"
    ],
    icon: "Atom",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "management",
    name: "+2 Management",
    badge: "Most Popular",
    shortDesc: "Dynamic business, finance, accounting, and computer management education for aspiring entrepreneurs.",
    fullDesc: "Designed to nurture the next generation of business executives, chartered accountants, and digital entrepreneurs. The +2 Management program integrates core accounting, business studies, economics, and hotel/computer fundamentals to develop analytical sharpness and leadership skills.",
    duration: "2 Years (Class 11 & 12)",
    affiliation: "National Examinations Board (NEB) / FWU Framework",
    eligibility: "Minimum GPA 1.6 or above in SEE with passing grades in all core subjects.",
    keySubjects: [
      "Principles of Accounting",
      "Economics & Business Studies",
      "Business Mathematics / Marketing",
      "Computer Science / Hotel Management",
      "Compulsory English & Nepali"
    ],
    careerProspects: [
      "Chartered Accountancy (CA, ACCA) & CPA",
      "Bachelor of Business Administration (BBA, BBS, BBM)",
      "Banking, Financial Analysis & Stock Market",
      "Corporate Leadership & Entrepreneurship"
    ],
    highlights: [
      "Tally ERP and modern computerized accounting lab sessions",
      "Industrial visits to prominent manufacturing plants in Birgunj-Pathlaiya corridor",
      "Business plan pitch competitions and leadership workshops",
      "Specialized coaching for CMAT, KUUMAT, and CA foundation"
    ],
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "law",
    name: "+2 Law",
    badge: "Premier Program",
    shortDesc: "In-depth foundation in jurisprudence, constitutional rights, procedural laws, and legal advocacy.",
    fullDesc: "Decimal College's +2 Law stream prepares visionary students for the judiciary, human rights advocacy, corporate consultancy, and public civil service. Students develop critical reasoning, public speaking, moot court argumentation, and constitutional legal interpretation under the mentorship of practicing advocates.",
    duration: "2 Years (Class 11 & 12)",
    affiliation: "National Examinations Board (NEB) / FWU Framework",
    eligibility: "Minimum GPA 1.6 or above in SEE with sound aptitude in social studies and language.",
    keySubjects: [
      "Jurisprudence & Legal Theories",
      "Procedural Law & Civil/Criminal Justice",
      "Constitutional Law & Human Rights",
      "General Principles of Law",
      "Compulsory English & Nepali"
    ],
    careerProspects: [
      "Bachelor of Arts & Bachelor of Laws (BALLB / LLB)",
      "Judicial Services, Public Prosecutors & Bench Officers",
      "Corporate Legal Counsel & Compliance Advisors",
      "Human Rights Organizations, NGOs & UN Agencies"
    ],
    highlights: [
      "Regular in-house Moot Court simulations and parliamentary debates",
      "Observational field visits to Parsa District Court and High Court Janakpur (Birgunj Bench)",
      "Lectures by senior advocates and former judges",
      "Extensive law library with Nepal Law Reports and international statutes"
    ],
    icon: "Scale",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hotel-management",
    name: "+2 Hotel Management",
    badge: "High Placement",
    shortDesc: "Hands-on hospitality culinary training, front-office operations, and international tourism standards.",
    fullDesc: "Hospitality is one of the fastest growing global industries. The +2 Hotel Management program equips students with real-world culinary craftsmanship, food and beverage service, housekeeping excellence, and front-desk diplomacy with our modern on-campus training kitchen and demo guest suite.",
    duration: "2 Years (Class 11 & 12)",
    affiliation: "National Examinations Board (NEB) / FWU Framework",
    eligibility: "Minimum GPA 1.6 or above in SEE with an interest in hospitality and communications.",
    keySubjects: [
      "Food Production & Patisserie (Theory & Practical)",
      "Food & Beverage Service Operations",
      "Front Office & Hospitality Management",
      "Housekeeping Management",
      "Compulsory English & Nepali"
    ],
    careerProspects: [
      "Bachelor of Hotel Management (BHM) & Culinary Arts",
      "Executive Chef, Pastry Chef & F&B Manager",
      "International Cruise Lines & 5-Star Hotel Chains",
      "Aviation Cabin Crew & Luxury Resort Management"
    ],
    highlights: [
      "Fully equipped commercial training kitchen and mock bar set-up",
      "Mandatory internships and workshops at leading hotels in Birgunj and Kathmandu",
      "Wine tasting etiquette, table setting, and flair bartending demonstrations",
      "Personality grooming, international etiquette, and fluency coaching"
    ],
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "education",
    name: "+2 Education",
    badge: "Foundation of Society",
    shortDesc: "Professional grounding in pedagogical methods, child psychology, linguistics, and instructional leadership.",
    fullDesc: "Transforming passion into impact, the +2 Education stream trains future educators, academic administrators, curriculum designers, and public policy thinkers. Grounded in student-centered pedagogy, educational psychology, and classroom technology, our students graduate ready to inspire future generations.",
    duration: "2 Years (Class 11 & 12)",
    affiliation: "National Examinations Board (NEB) / FWU Framework",
    eligibility: "Minimum GPA 1.6 or above in SEE with a passion for teaching and social leadership.",
    keySubjects: [
      "Foundations of Education & Pedagogy",
      "Educational Psychology & Child Development",
      "Curriculum Design & Evaluation Techniques",
      "Major English / Nepali / Health Education",
      "Compulsory English & Nepali"
    ],
    careerProspects: [
      "Bachelor of Education (B.Ed) & Master of Education (M.Ed)",
      "School & College Teaching, Educational Administration",
      "Curriculum Development Centers & Educational NGOs",
      "Public Service Commission (Lok Sewa / Shikshak Sewa Aayog)"
    ],
    highlights: [
      "Supervised micro-teaching and classroom teaching internships in Birgunj schools",
      "Workshops on modern digital learning tools and interactive whiteboard teaching",
      "Preparation assistance for Teacher Service Commission (TSC)",
      "Focus on inclusive education and counseling skills"
    ],
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Faculty Members",
    desc: "Mentorship by seasoned professors, industry practitioners, and certified educationists passionate about individual student progress.",
    icon: "Users"
  },
  {
    title: "Advanced Laboratories & Kitchen",
    desc: "Separated Physics, Chemistry, Biology labs, high-tech Computer networking lab, and a commercial Hotel Management training kitchen.",
    icon: "FlaskConical"
  },
  {
    title: "Far Western University Affiliation",
    desc: "Rigorous academic standards, verified course structures, and recognized certifications adhering to national educational benchmarks.",
    icon: "ShieldCheck"
  },
  {
    title: "Merit & Need-Based Scholarships",
    desc: "Generous tuition fee waivers for SEE board toppers, underprivileged, marginalized communities, and sports achievers.",
    icon: "Sparkles"
  },
  {
    title: "Prime & Accessible Location",
    desc: "Situated centrally at Panitanki-8, Birgunj, with seamless transport connectivity from across Parsa, Bara, and neighboring districts.",
    icon: "MapPin"
  },
  {
    title: "Holistic Extracurriculars",
    desc: "Annual sports meets, literary symposia, moot court tournaments, cultural festivals, and community outreach campaigns.",
    icon: "Trophy"
  }
];

export const NOTICES: Notice[] = [
  {
    id: "n1",
    title: "Admission Open for Class XI (+2) - Academic Session 2082/83 B.S.",
    date: "Bhadra 15, 2082",
    category: "Admission",
    description: "Decimal College cordially announces admissions open for +2 Science, Management, Law, Hotel Management, and Education for the academic year 2082/83. Forms can be collected from the administration office or submitted online. Early registration scholarships available.",
    isImportant: true
  },
  {
    id: "n2",
    title: "Merit Scholarship Entrance Examination Notice",
    date: "Bhadra 22, 2082",
    category: "Exam",
    description: "The scholarship entrance assessment for newly registered applicants will be conducted at the college premises. Eligible students must carry their SEE admit card and registration receipt.",
    isImportant: true
  },
  {
    id: "n3",
    title: "Annual Inter-College Moot Court Competition - Congratulations to Law Stream",
    date: "Shrawan 28, 2082",
    category: "Academic",
    description: "Heartiest congratulations to our +2 Law students for securing the Runner-Up trophy at the Madhesh Province Inter-College Legal Debate & Moot Court tournament.",
    isImportant: false
  },
  {
    id: "n4",
    title: "Workshop on Artificial Intelligence & Modern Accounting Practices",
    date: "Shrawan 14, 2082",
    category: "Event",
    description: "A two-day specialized hands-on workshop on AI tools, computerized tax filings, and fintech solutions organized exclusively for our +2 Management and Computer Science scholars.",
    isImportant: false
  }
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Complete the online application form on our website or visit the Admissions Desk at Panitanki-8, Birgunj to obtain the physical application kit."
  },
  {
    step: "02",
    title: "Entrance Assessment",
    desc: "Appear for the Decimal College Aptitude & Scholarship Entrance Test assessing foundational stream knowledge and general reasoning."
  },
  {
    step: "03",
    title: "Counseling & Interview",
    desc: "One-on-one personal interview along with parents/guardians to discuss stream alignment, career ambitions, and scholarship eligibility."
  },
  {
    step: "04",
    title: "Enrollment & Orientation",
    desc: "Submit verified copies of SEE marksheets, secure fee confirmation, collect uniforms & syllabus kits, and attend the grand Freshers' Induction."
  }
];

export const REQUIRED_DOCUMENTS = [
  "Attested copy of SEE (Class 10) Grade-Sheet / Marksheet",
  "Original Character Certificate from the previous school",
  "Photocopy of Birth Certificate or Citizenship card",
  "Four recent passport-size color photographs (formal background)",
  "Migration Certificate (for students from boards other than NEB, if applicable)",
  "Scholarship recommendation letter (if applying under institutional quota)"
];

export const CAMPUS_FACILITIES = [
  {
    title: "Spacious Smart Classrooms",
    desc: "Ventilated, multimedia-enabled lecture rooms designed for interactive learning and focused pedagogical engagement.",
    icon: "Presentation"
  },
  {
    title: "Full-Featured Science Laboratories",
    desc: "Dedicated experimental setups for Physics, Chemistry, and Biology compliant with NEB and international safety standards.",
    icon: "Microscope"
  },
  {
    title: "Computer Networking Lab",
    desc: "Latest high-speed systems with broadband internet, programming tools, and ERP accounting software.",
    icon: "MonitorCheck"
  },
  {
    title: "Hotel Management Training Suite",
    desc: "Commercial setup kitchen, bakery unit, mock guest room, and dining service lab for practical culinary mastery.",
    icon: "Utensils"
  },
  {
    title: "Well-Stocked Academic Library",
    desc: "Thousands of reference books, international journals, law encyclopedias, and a quiet self-study reading zone.",
    icon: "BookOpenCheck"
  },
  {
    title: "Sports & Recreation Ground",
    desc: "Facilities for volleyball, badminton, table tennis, chess, and annual district-level sports meets.",
    icon: "Activity"
  }
];
