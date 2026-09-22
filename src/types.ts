export type PageId = 'home' | 'about' | 'programs' | 'admission' | 'contact';

export interface Program {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  affiliation: string;
  eligibility: string;
  careerProspects: string[];
  keySubjects: string[];
  icon: string;
  image: string;
  badge?: string;
  highlights: string[];
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Exam' | 'Event';
  description: string;
  isImportant?: boolean;
}

export interface AdmissionInquiry {
  fullName: string;
  phone: string;
  email: string;
  program: string;
  seeGpa: string;
  schoolName: string;
  address: string;
  message?: string;
}
