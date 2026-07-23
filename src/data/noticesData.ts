export type NoticeCategory = 'all' | 'admissions' | 'examinations' | 'circulars' | 'scholarships' | 'events';
export type NoticeType = 'pdf' | 'link' | 'article' | 'external';

export interface NoticeItem {
  id: string;
  title: string;
  category: NoticeCategory;
  type: NoticeType;
  date: string;
  isImportant?: boolean;
  isNew?: boolean;
  department: string;
  excerpt: string;
  fileSize?: string;
  downloadUrl?: string;
  linkUrl?: string;
  publishedBy?: string;
}

export interface QuickAccessLink {
  id: string;
  label: string;
  icon: string;
  count: number;
  filterCategory: NoticeCategory;
  filterKeyword?: string; // optional keyword to sub-filter within category
}

export const QUICK_ACCESS: QuickAccessLink[] = [
  { id: "qa-1", label: "Result Declarations", icon: "trophy", count: 3, filterCategory: "examinations", filterKeyword: "result" },
  { id: "qa-2", label: "Admission Updates", icon: "graduation", count: 5, filterCategory: "admissions" },
  { id: "qa-3", label: "Exam Datesheets", icon: "calendar", count: 2, filterCategory: "examinations", filterKeyword: "schedule" },
  { id: "qa-4", label: "Fee & Scholarship", icon: "wallet", count: 4, filterCategory: "scholarships" },
  { id: "qa-5", label: "Official Circulars", icon: "scroll", count: 6, filterCategory: "circulars" },
  { id: "qa-6", label: "Events & Seminars", icon: "mic", count: 2, filterCategory: "events" },
];

export const CATEGORY_FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "All Notices" },
  { key: "admissions", label: "Admissions" },
  { key: "examinations", label: "Examinations" },
  { key: "circulars", label: "Circulars" },
  { key: "scholarships", label: "Scholarships" },
  { key: "events", label: "Events & Conferences" }
];

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: "notice-1",
    title: "Official Admissions Announcement 2026-27: UG, PG, Diploma & Ph.D. Programs",
    category: "admissions",
    type: "pdf",
    date: "22 Jul 2026",
    isImportant: true,
    isNew: true,
    department: "Directorate of Admissions",
    excerpt: "Applications invited from eligible candidates across India. Fee waivers up to 100% under Chancellor's Merit Scholarship.",
    fileSize: "2.4 MB",
    downloadUrl: "#",
    publishedBy: "Registrar Secretariat"
  },
  {
    id: "notice-2",
    title: "Spring 2026 End-Term Examination Schedule & Admit Card Portal",
    category: "examinations",
    type: "pdf",
    date: "20 Jul 2026",
    isImportant: true,
    isNew: true,
    department: "Controller of Examinations",
    excerpt: "Subject-wise schedule for B.Tech, BCA, MCA, MBA, B.Sc, and Law. Admit cards available from 28 July.",
    fileSize: "1.8 MB",
    downloadUrl: "#",
    publishedBy: "Exam Cell"
  },
  {
    id: "notice-3",
    title: "Chancellor's Merit & Sports Excellence Scholarship 2026-27",
    category: "scholarships",
    type: "pdf",
    date: "18 Jul 2026",
    isImportant: false,
    isNew: true,
    department: "Student Affairs & Financial Aid",
    excerpt: "Eligibility and application for merit scholarships, EWS grants, and national athlete support.",
    fileSize: "1.1 MB",
    downloadUrl: "#",
    publishedBy: "Scholarship Committee"
  },
  {
    id: "notice-4",
    title: "NCRISD-2026: Call for Research Papers & Delegate Registration",
    category: "events",
    type: "external",
    date: "15 Jul 2026",
    isImportant: false,
    isNew: false,
    department: "Research & Development Cell",
    excerpt: "Submissions open for SCOPUS / UGC-CARE indexed tracks. Keynotes by IIT and global faculty.",
    linkUrl: "/conference-registration",
    publishedBy: "Dean R&D"
  },
  {
    id: "notice-5",
    title: "UGC & AICTE Statutory Disclosure & Anti-Ragging Affidavit 2026",
    category: "circulars",
    type: "pdf",
    date: "12 Jul 2026",
    isImportant: true,
    isNew: false,
    department: "Office of the Registrar",
    excerpt: "All admitted and returning students must submit online anti-ragging undertakings per UGC 2026 Regulations.",
    fileSize: "850 KB",
    downloadUrl: "#",
    publishedBy: "Registrar Secretariat"
  },
  {
    id: "notice-6",
    title: "Central Library Extended Hours & IEEE / ScienceDirect E-Portal",
    category: "circulars",
    type: "article",
    date: "10 Jul 2026",
    isImportant: false,
    isNew: false,
    department: "University Central Library",
    excerpt: "Login credentials dispatched via institutional email. Physical reading rooms open 24/7 during exams.",
    publishedBy: "Chief Librarian"
  },
  {
    id: "notice-7",
    title: "B.Tech / MCA / BCA — Semester VI Result Declaration Notice",
    category: "examinations",
    type: "pdf",
    date: "08 Jul 2026",
    isImportant: true,
    isNew: true,
    department: "Controller of Examinations",
    excerpt: "Results for Spring 2026 Semester VI now available on the online portal. Re-evaluation window open until 20 July.",
    fileSize: "620 KB",
    downloadUrl: "#",
    publishedBy: "Exam Cell"
  },
  {
    id: "notice-8",
    title: "Hostel Allotment & Fee Payment Deadline Extension for Session 2026-27",
    category: "admissions",
    type: "link",
    date: "05 Jul 2026",
    isImportant: false,
    isNew: false,
    department: "Dean of Student Welfare",
    excerpt: "Last date for hostel fee payment extended to 30 July. Room allotment list published on notice board.",
    linkUrl: "#",
    publishedBy: "DSW Office"
  }
];
