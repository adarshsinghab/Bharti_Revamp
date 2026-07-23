"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CampusLifeComponent from "@/components/CampusLife";
import SectionScrollHandler from "@/components/SectionScrollHandler";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Heart,
  Trees,
  Users,
  Sparkles,
  CheckCircle2,
  BookOpen,
  FileText,
  Calendar,
  Download,
  Search,
  ArrowUpRight,
  Lightbulb,
  Medal,
  HeartHandshake,
  Microscope,
  Shield,
  Trophy,
  Globe,
  UserCheck,
  Smile,
  Briefcase,
  Music,
  Rocket,
  TreePine,
  X,
  ChevronRight,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GovernanceCell {
  id: string;
  name: string;
  category: string;
  icon: any;
  description: string;
  head: string;
}

const RICH_GOVERNANCE_CELLS: GovernanceCell[] = [
  {
    id: "iqac",
    name: "Internal Quality Assurance Cell (IQAC)",
    category: "Academic Quality",
    icon: Award,
    description: "Monitoring outcome-based education, accreditation compliance, curriculum benchmarks, and NIRF/NAAC readiness.",
    head: "Dr. Alok Bhatt (Pro Vice-Chancellor)"
  },
  {
    id: "anti-ragging",
    name: "Anti-Ragging Committee & Squad",
    category: "Student Safety",
    icon: ShieldCheck,
    description: "Strict 24/7 zero-tolerance squad enforcing UGC & Supreme Court anti-ragging mandates across campus & hostels.",
    head: "Dr. Virendra Kumar Swarnkar (Registrar)"
  },
  {
    id: "press-media",
    name: "Press & Media Cell",
    category: "Communications",
    icon: Sparkles,
    description: "Managing press releases, institutional media coverage, newsletter publications, and official communications.",
    head: "Prof. JMC Secretariat"
  },
  {
    id: "wgv-cell",
    name: "Women(S) Grievance Cell (WGV Cell)",
    category: "Women Equity",
    icon: Heart,
    description: "Fostering gender empowerment, safe campus environments, self-defense workshops, and confidential grievance redressal.",
    head: "Mrs. Shalini Chandrakar (Jt. MD)"
  },
  {
    id: "ipr-cell",
    name: "Intellectual Property Rights (IPR Cell)",
    category: "Research & Patents",
    icon: Lightbulb,
    description: "Guiding faculty & researchers in drafting, filing, and commercializing national/international patents and copyrights.",
    head: "Dr. R.P. Agrawal (Director Research)"
  },
  {
    id: "grievance-cell",
    name: "Students Grievance Redressal Cell",
    category: "Student Welfare",
    icon: GraduationCap,
    description: "Transparent portal for resolving academic, examination, hostel, and fee-related queries with time-bound redressal.",
    head: "Dr. Ghanshyam Sahu (Director Admin)"
  },
  {
    id: "sedg-cell",
    name: "Socio-Economically Disadvantaged Groups (SEDG)",
    category: "Inclusion & Equity",
    icon: Users,
    description: "Providing targeted mentoring, remedial classes, and fee concessions to first-generation & economically backward learners.",
    head: "SEDG Dean Office"
  },
  {
    id: "ncc",
    name: "National Cadet Corps (NCC Cell)",
    category: "Youth Leadership",
    icon: Medal,
    description: "Army wing training, Republic Day parade contingents, leadership camps, and national defense service pathways.",
    head: "Lt. NCC Commanding Officer"
  },
  {
    id: "nss",
    name: "National Service Scheme (NSS Cell)",
    category: "Social Service",
    icon: HeartHandshake,
    description: "Community outreach, blood donation drives, literacy camps, and adopted village developments in Konari & Pisegaon.",
    head: "NSS Program Officer"
  },
  {
    id: "research-cell",
    name: "Research and Development Cell",
    category: "R&D Innovation",
    icon: Microscope,
    description: "Disbursing seed research grants, facilitating interdisciplinary lab projects, and supporting Scopus journal publishing.",
    head: "Directorate of Research"
  },
  {
    id: "ugc-cell",
    name: "UGC Compliance Cell",
    category: "Statutory Governance",
    icon: CheckCircle2,
    description: "Ensuring 100% adherence to University Grants Commission (UGC) regulations, notifications, and 2(f) statutory norms.",
    head: "Registrar Secretariat"
  },
  {
    id: "icc-cell",
    name: "Internal Complaints Committee (ICC)",
    category: "Campus Safety",
    icon: Shield,
    description: "Statutory committee enforcing prevention, prohibition, and redressal of sexual harassment under the 2013 Act.",
    head: "Presiding Officer ICC"
  },
  {
    id: "sports-cell",
    name: "Sports & Fitness Committee",
    category: "Athletics",
    icon: Trophy,
    description: "Managing 54-acre sports infrastructure including Cricket, Football, Futsal, Tennis courts, and modern Gymnasiums.",
    head: "Director of Physical Education"
  },
  {
    id: "minority-cell",
    name: "Minority & Equity Committee",
    category: "Inclusion & Equity",
    icon: Globe,
    description: "Safeguarding constitutional rights and scholarship facilitation for religious & linguistic minority students.",
    head: "Equity Liaison Officer"
  },
  {
    id: "alumni-cell",
    name: "Alumni Relations Committee",
    category: "Corporate Connect",
    icon: UserCheck,
    description: "Connecting over 5,000+ global alumni for mentorship, career placement drives, seed capital funding, and guest lectures.",
    head: "Alumni Association President"
  },
  {
    id: "sc-st-cell",
    name: "SC & ST Welfare Cell",
    category: "Social Welfare",
    icon: Smile,
    description: "Facilitating State & Central Post-Matric scholarships, hostel seat reservations, and special skill coaching.",
    head: "SC/ST Nodal Officer"
  },
  {
    id: "career-cell",
    name: "Career & Counseling Cell",
    category: "Placements",
    icon: Briefcase,
    description: "Conducting corporate aptitude drills, mock technical interviews, resume building, and soft skill workshops.",
    head: "Head - Training & Placements"
  },
  {
    id: "cultural-cell",
    name: "Cultural Activities Committee",
    category: "Youth Heritage",
    icon: Music,
    description: "Organizing Hareli Festival, Navratri Garba, Annual Youth Fests, Inter-College Drama, Music, and Art competitions.",
    head: "Cultural Convener"
  },
  {
    id: "incubation-cell",
    name: "Technology Transfer & Incubation Cell",
    category: "Startups",
    icon: Rocket,
    description: "Providing seed capital, co-working space, patent filing assistance, and mentor networks to student tech startups.",
    head: "Incubation Center Head"
  },
  {
    id: "green-audit",
    name: "Environmental & Green Audit Cell",
    category: "Sustainability",
    icon: TreePine,
    description: "Managing solar energy harvesting, rainwater harvesting reservoirs, zero-plastic policy, and 'Ek Ped Maa Ke Naam' drives.",
    head: "Green Audit Committee"
  }
];

export default function CampusLifePage() {
  const [selectedCell, setSelectedCell] = useState<GovernanceCell | null>(null);

  return (
    <SmoothScroll>
      <Header />
      <SectionScrollHandler />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Student Life & Campus Governance • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Life at Bharti Vishwavidyalaya
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              A vibrant 54-acre ecosystem fostering academic rigor, research excellence, sports, cultural heritage, leadership, and active community outreach.
            </p>
          </div>
        </section>

        {/* 1st Convocation 2025 Highlight Section */}
        <div id="convocation-2025" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-gradient-to-r from-[#5b0e2d] via-[#78143c] to-[#5b0e2d] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 z-10 relative">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-montserrat font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" /> Landmark Milestone • 13th December 2025
                </div>
                <h2 className="font-outfit text-2xl md:text-4xl font-extrabold text-white">
                  First Convocation Ceremony
                </h2>
                <p className="font-outfit text-sm md:text-base text-gray-200 font-light leading-relaxed">
                  Bharti Vishwavidyalaya celebrated its landmark 1st Convocation Ceremony with distinguished national leaders, conferring degrees upon 635 scholars.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-montserrat font-semibold text-gray-200">
                  <span>🏛️ Chief Guest: <strong>Shri Tankram Verma Ji</strong> (Hon'ble Minister for Higher Education, Govt. of CG)</span>
                  <span>🏅 Guest of Honor: <strong>Dr. V. K. Goyal</strong> (Chairman, CG-PURC)</span>
                </div>
              </div>

              {/* Degrees Stats Cards */}
              <div className="grid grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
                  <span className="font-outfit text-2xl md:text-3xl font-extrabold text-gold block">85</span>
                  <span className="text-[10px] font-montserrat font-bold text-gray-200 uppercase">Ph.D. Degrees</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
                  <span className="font-outfit text-2xl md:text-3xl font-extrabold text-gold block">215</span>
                  <span className="text-[10px] font-montserrat font-bold text-gray-200 uppercase">Postgraduate</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
                  <span className="font-outfit text-2xl md:text-3xl font-extrabold text-gold block">335</span>
                  <span className="text-[10px] font-montserrat font-bold text-gray-200 uppercase">Undergraduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section Component */}
        <div id="facilities" className="mb-16 scroll-mt-32">
          <CampusLifeComponent />
        </div>

        {/* 23 GRAPHICAL GOVERNANCE CELLS CARDS GRID */}
        <div id="cells-list" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EAEAEA] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="px-3.5 py-1 bg-[#5b0e2d]/10 text-[#5b0e2d] font-montserrat text-xs font-bold uppercase rounded-full tracking-wider">
                  STATUTORY GOVERNANCE & WELFARE
                </span>
                <h2 className="font-outfit text-2xl md:text-4xl font-extrabold text-[#0f172a] mt-2 mb-1">
                  Academic Councils & Campus Cells
                </h2>
                <p className="font-outfit text-xs md:text-sm text-gray-500 font-light">
                  The 23 specialized administrative cells ensuring student safety, research excellence, and equity (Prospectus p. 28)
                </p>
              </div>
            </div>

            {/* Graphical Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RICH_GOVERNANCE_CELLS.map((cell) => {
                const IconComp = cell.icon;
                return (
                  <motion.div
                    key={cell.id}
                    id={cell.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedCell(cell)}
                    className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-2xs hover:border-[#5b0e2d]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden scroll-mt-32"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5b0e2d]/20 to-transparent group-hover:via-[#5b0e2d]" />

                    <div>
                      {/* Icon & Category Badge Row */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] text-[#5b0e2d] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#5b0e2d] group-hover:text-white transition-all duration-300">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200/80 rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider">
                          {cell.category}
                        </span>
                      </div>

                      {/* Cell Title */}
                      <h3 className="font-outfit text-base md:text-lg font-extrabold text-[#0f172a] mb-2 group-hover:text-[#5b0e2d] transition-colors leading-snug">
                        {cell.name}
                      </h3>

                      {/* Description */}
                      <p className="font-outfit text-xs md:text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                        {cell.description}
                      </p>
                    </div>

                    {/* Officer Badge */}
                    <div className="pt-3 border-t border-gray-200/70 flex items-center justify-between text-xs font-outfit text-gray-500">
                      <span className="font-medium text-gray-700 truncate max-w-[200px]">
                        📍 {cell.head}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#5b0e2d] group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RESEARCH SECTION (Publications, Books, Patents & Seminars) */}
        <div id="research" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAEAEA] shadow-sm">
            <div className="mb-8">
              <span className="px-3 py-1 bg-burgundy/10 text-burgundy font-montserrat text-xs font-bold uppercase rounded-full tracking-wider">
                R&D CELL & PUBLICATIONS
              </span>
              <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mt-2 mb-1">
                Research & Innovation Directory
              </h2>
              <p className="font-outfit text-xs md:text-sm text-gray-500 font-light">
                Explore faculty publications, patents, research books, and academic conferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Journal Publications */}
              <div id="research-journals" className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] scroll-mt-32">
                <div className="w-10 h-10 rounded-xl bg-[#5b0e2d]/10 text-[#5b0e2d] flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Journal Publications</h3>
                <p className="font-outfit text-xs text-gray-600 font-light mb-4 leading-relaxed">
                  Over 150+ high-impact research papers published by Bharti Vishwavidyalaya faculty members in Scopus, Web of Science, and UGC CARE-listed journals.
                </p>
                <a href="#research" className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#5b0e2d] hover:underline">
                  View Publications Catalog <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Books Publication */}
              <div id="research-books" className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] scroll-mt-32">
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold-dark flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Books & Monograph Publications</h3>
                <p className="font-outfit text-xs text-gray-600 font-light mb-4 leading-relaxed">
                  Academic textbooks, monographs, and edited chapters authored across Engineering, Pharmacy, Law, and Social Sciences.
                </p>
                <a href="#research" className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#5b0e2d] hover:underline">
                  Explore Published Books <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Patents Filed */}
              <div id="research-patents" className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] scroll-mt-32">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Patents Filed & Granted</h3>
                <p className="font-outfit text-xs text-gray-600 font-light mb-4 leading-relaxed">
                  Innovations in Pharmaceutical Formulations, Smart Agricultural Devices, and AI E-Security patents published with Indian Patent Office.
                </p>
                <a href="#research" className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#5b0e2d] hover:underline">
                  Patents Repository <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Seminars & Conferences */}
              <div id="research-seminars" className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] scroll-mt-32">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Seminars & Conferences</h3>
                <p className="font-outfit text-xs text-gray-600 font-light mb-4 leading-relaxed">
                  Year-round national and international symposiums hosting guest speakers, industry leaders, and research paper presentations.
                </p>
                <a href="#research" className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#5b0e2d] hover:underline">
                  Conference Proceedings <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* NCRISD-2026 CONFERENCE SECTION */}
        <div id="ncrisd" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 border border-[#334155] shadow-xl">
            <div className="max-w-3xl mb-8">
              <span className="px-3.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-montserrat font-bold uppercase tracking-wider mb-3 inline-block">
                NATIONAL CONFERENCE 2026
              </span>
              <h2 className="font-outfit text-2xl md:text-4xl font-extrabold text-white mb-3">
                NCRISD-2026: National Conference on Interdisciplinary Research
              </h2>
              <p className="font-outfit text-sm text-gray-300 font-light leading-relaxed">
                National Conference on Interdisciplinary Research, Innovation and Sustainable Development hosted at Bharti Vishwavidyalaya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* NCRISD Brochure */}
              <div id="ncrisd-brochure" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 scroll-mt-32">
                <h3 className="font-outfit font-extrabold text-lg text-white mb-2">NCRISD-2026 Official Brochure</h3>
                <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed">
                  Download conference tracks, keynote speaker lineup, call for papers, and formatting guidelines.
                </p>
                <a
                  href="/about#prospectus"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[#0F172A] rounded-xl text-xs font-montserrat font-bold hover:bg-gold-light transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Brochure PDF
                </a>
              </div>

              {/* NCRISD Registration */}
              <div id="ncrisd-registration" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 scroll-mt-32">
                <h3 className="font-outfit font-extrabold text-lg text-white mb-2">NCRISD-2026 Author Registration</h3>
                <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed">
                  Register as an author, presenter, or delegate for the national conference. Early bird registration active.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5b0e2d] text-white rounded-xl text-xs font-montserrat font-bold hover:bg-[#78143c] transition-colors"
                >
                  Register Online <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Cell Detail Modal */}
        <AnimatePresence>
          {selectedCell && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#EAEAEA] shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedCell(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5b0e2d] text-white flex items-center justify-center shadow-md">
                    <selectedCell.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full font-montserrat text-[10px] font-bold uppercase">
                      {selectedCell.category}
                    </span>
                    <h3 className="font-outfit text-lg font-extrabold text-[#0f172a] mt-1">
                      {selectedCell.name}
                    </h3>
                  </div>
                </div>

                <p className="font-outfit text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {selectedCell.description}
                </p>

                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] space-y-2 text-xs font-outfit">
                  <p><strong>Officer in Charge:</strong> {selectedCell.head}</p>
                  <p><strong>Status:</strong> Active Statutory Cell • Prospectus 2026</p>
                  <p><strong>Grievance Helpline:</strong> info@bhartiuniversity.org</p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedCell(null)}
                    className="px-5 py-2.5 bg-[#5b0e2d] text-white rounded-xl font-montserrat text-xs font-bold"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
