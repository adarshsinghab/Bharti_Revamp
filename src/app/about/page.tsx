"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import SectionScrollHandler from "@/components/SectionScrollHandler";
import { 
  Building2, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Compass, 
  Target, 
  FileText, 
  Download, 
  ShieldCheck,
  ChevronRight,
  GraduationCap
} from "lucide-react";

function VisualMediaCard({ label, imageUrl, category }: { label: string; imageUrl: string; category: string }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#FAF8F5] shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-end p-5">
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 text-white">
        <span className="font-montserrat text-[9px] font-bold text-gold tracking-widest uppercase block mb-1">
          {category}
        </span>
        <h4 className="font-outfit text-sm font-bold leading-snug drop-shadow-sm text-white">
          {label}
        </h4>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <SmoothScroll>
      <SectionScrollHandler />
      <div className="min-h-screen bg-[#FAF8F5] text-[#121212] font-outfit">
        <Header />

        {/* HERO BANNER SECTION (SOOTHING LIGHT ACADEMIC PALETTE) */}
        <section className="relative pt-40 md:pt-44 pb-16 bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] overflow-hidden border-b border-[#EAEAEA]">
          <div className="absolute top-0 right-[15%] w-[450px] h-[450px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <span className="px-3.5 py-1 bg-burgundy/10 text-burgundy font-montserrat text-xs font-bold uppercase rounded-full tracking-widest inline-block mb-3">
              INSTITUTIONAL OVERVIEW & GOVERNANCE
            </span>
            <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5b0e2d] tracking-tight leading-tight max-w-4xl mb-4">
              About Bharti Vishwavidyalaya
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Established in 1999, Bharti Vishwavidyalaya is a premier seat of higher learning in Chhattisgarh, recognized by the UGC under Section 2(f) and accredited by AICTE, NCTE, PCI, and BCI.
            </p>
          </div>
        </section>

        {/* MAIN ABOUT CONTENT CONTAINER */}
        <section className="py-16 md:py-24 bg-[#FCFAF7]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">

                {/* 1. ABOUT BU */}
                <div id="about-bu" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    INSTITUTIONAL FOUNDATION
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    About Bharti Vishwavidyalaya
                  </h2>
                  <p className="font-outfit text-sm text-gray-600 font-light leading-relaxed mb-6">
                    Bharti Vishwavidyalaya, Durg, Chhattisgarh was founded under the aegis of the Bharti Shikshan Samiti (Est. 1999). Over the past 25+ years, the institution has grown into an acclaimed center for higher education, scientific research, and technological advancement.
                  </p>
                  <p className="font-outfit text-sm text-gray-600 font-light leading-relaxed mb-8">
                    Spread across a lush, state-of-the-art campus, the University houses specialized faculties in Engineering & Technology, Computer Applications, Management Studies, Pharmaceutical Sciences, Legal Studies, Education, and Humanities.
                  </p>

                  <div className="mb-6 h-[260px]">
                    <VisualMediaCard label="Bharti Vishwavidyalaya Main Campus View" imageUrl="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200" category="CAMPUS ARCHITECTURE" />
                  </div>
                </div>

                {/* 2. VISION & MISSION */}
                <div id="vision-mission" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    VISION & MISSION
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Institutional Vision & Mission
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-6">
                      <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy mb-4">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Our Vision</h3>
                      <p className="font-outfit text-xs text-gray-600 font-light leading-relaxed">
                        To emerge as a premier global Vishwavidyalaya that fosters transformative education, multi-disciplinary research, ethical leadership, and innovation aligned with National Education Policy (NEP 2020) and Vision 2030 objectives.
                      </p>
                    </div>

                    <div className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-6">
                      <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy mb-4">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-2">Our Mission</h3>
                      <p className="font-outfit text-xs text-gray-600 font-light leading-relaxed">
                        To deliver outcome-based education, empower students from all socio-economic backgrounds with Industry 4.0 skills, promote high-impact scientific publications, and serve society through ethical practice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. CHANCELLOR MESSAGE */}
                <div id="chancellor-msg" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    CHANCELLOR'S DESK
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Chancellor's Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 h-[280px]">
                      <VisualMediaCard label="Honorable Chancellor" imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" category="CHANCELLOR OFFICE" />
                    </div>
                    <div className="md:col-span-7 space-y-4 font-outfit text-xs text-gray-600 font-light leading-relaxed">
                      <blockquote className="border-l-2 border-burgundy pl-4 italic text-sm text-[#0f172a] font-medium">
                        "Education is not merely the acquisition of knowledge; it is the building of character, intellect, and global responsibility."
                      </blockquote>
                      <p>
                        Welcome to Bharti Vishwavidyalaya. Since our founding in 1999, we have remained steadfast in our commitment to provide world-class education rooted in strong moral values.
                      </p>
                      <p>
                        We invite scholars, thinkers, and aspiring leaders to join us on this journey of discovery and excellence as we pave the pathway towards Vision 2030.
                      </p>
                      <div className="pt-2">
                        <span className="font-outfit text-sm font-bold text-[#0f172a] block">Hon'ble Chancellor</span>
                        <span className="font-montserrat text-[10px] text-gray-500 font-medium">Bharti Vishwavidyalaya, Durg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. VICE CHANCELLOR MESSAGE */}
                <div id="vc-msg" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    VICE CHANCELLOR SECRETARIAT
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Vice Chancellor's Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 h-[280px]">
                      <VisualMediaCard label="Vice Chancellor Secretariat" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" category="ACADEMIC LEADERSHIP" />
                    </div>
                    <div className="md:col-span-7 space-y-4 font-outfit text-xs text-gray-600 font-light leading-relaxed">
                      <p>
                        At Bharti Vishwavidyalaya, our focus centers on outcome-driven pedagogy, active research publications, and corporate readiness.
                      </p>
                      <p>
                        Our faculties are equipped with AI-assisted smart classrooms, digital repositories, and high-performance computation labs to ensure our students excel in competitive global arenas.
                      </p>
                      <div className="pt-2">
                        <span className="font-outfit text-sm font-bold text-[#0f172a] block">Vice Chancellor</span>
                        <span className="font-montserrat text-[10px] text-gray-500 font-medium">Bharti Vishwavidyalaya, Durg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. REGISTRAR MESSAGE */}
                <div id="registrar-msg" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    REGISTRAR ADMINISTRATIVE DESK
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Registrar's Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 h-[240px]">
                      <VisualMediaCard label="Registrar Office" imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" category="ADMINISTRATIVE SECRETARIAT" />
                    </div>
                    <div className="md:col-span-7 space-y-4 font-outfit text-xs text-gray-600 font-light leading-relaxed">
                      <p>
                        The Registrar Secretariat ensures seamless academic governance, statutory compliance, student welfare cell operations, and transparent administrative disclosures per UGC guidelines.
                      </p>
                      <div className="pt-2">
                        <span className="font-outfit text-sm font-bold text-[#0f172a] block">Registrar</span>
                        <span className="font-montserrat text-[10px] text-gray-500 font-medium">Bharti Vishwavidyalaya, Durg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. JOINT DIRECTOR MESSAGE */}
                <div id="joint-director-msg" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    JOINT DIRECTOR'S DESK
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Joint Director's Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 h-[240px]">
                      <VisualMediaCard label="Joint Director Leadership" imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" category="EXECUTIVE DIRECTORATE" />
                    </div>
                    <div className="md:col-span-7 space-y-4 font-outfit text-xs text-gray-600 font-light leading-relaxed">
                      <p>
                        Our mission is to continually upgrade university infrastructure, industry linkages, campus placement drives, and student incubation support.
                      </p>
                      <div className="pt-2">
                        <span className="font-outfit text-sm font-bold text-[#0f172a] block">Joint Director</span>
                        <span className="font-montserrat text-[10px] text-gray-500 font-medium">Bharti Vishwavidyalaya, Durg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. GOVERNANCE & STATUTORY DISCLOSURES */}
                <div id="ugc-approval" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    STATUTORY COMPLIANCE & ACCREDITATION
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Governance, Approvals & Audits
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "UGC 2(f) Recognition Letter", id: "ugc-approval", size: "1.4 MB" },
                      { title: "University State Act & Ordinance", id: "ordinance", size: "3.2 MB" },
                      { title: "Statutory Financial Audit Report", id: "audit-report", size: "2.1 MB" },
                      { title: "Annual Academic Report 2025-26", id: "annual-report", size: "4.5 MB" },
                      { title: "AICTE Extension of Approval (EOA)", id: "aicte-eoa", size: "1.1 MB" },
                      { title: "Bar Council of India (BCI) Approval", id: "bci-eoa", size: "950 KB" },
                      { title: "Fee Regulation Authority Guidelines", id: "fee-regulation", size: "1.3 MB" },
                    ].map((doc, idx) => (
                      <div key={idx} id={doc.id} className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-5 flex items-center justify-between hover:border-burgundy/30 transition-colors">
                        <div>
                          <h4 className="font-outfit text-xs font-bold text-[#0f172a] mb-1">{doc.title}</h4>
                          <span className="font-montserrat text-[10px] text-gray-400">PDF Document ({doc.size})</span>
                        </div>
                        <a href="#" className="p-2.5 rounded-full bg-burgundy/5 hover:bg-burgundy text-burgundy hover:text-white transition-colors cursor-pointer">
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. ACADEMIC RESOURCES & PROSPECTUS */}
                <div id="prospectus" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm scroll-mt-36 depth-card">
                  <span className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                    ACADEMIC REPOSITORY
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Academic Resources & Prospectus
                  </h2>

                  <div className="space-y-6">
                    <div id="courses-offered" className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-6">
                      <h3 className="font-outfit text-base font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-burgundy" /> Courses Offered 2026-27
                      </h3>
                      <p className="font-outfit text-xs text-gray-600 font-light leading-relaxed mb-4">
                        Offering UG, PG, Diploma, and Doctoral research programs across Engineering, IT, Law, Pharmacy, Management, and Education streams per NEP guidelines.
                      </p>
                      <a href="/academics" className="text-burgundy font-montserrat text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                        EXPLORE PROGRAM CATALOG <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div id="library" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-[220px]">
                        <VisualMediaCard label="Central Library & IEEE Digital Repository" imageUrl="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800" category="KNOWLEDGE REPOSITORY" />
                      </div>
                      <div className="h-[220px]">
                        <VisualMediaCard label="Advanced Research & Computation Lab" imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800" category="RESEARCH FACILITIES" />
                      </div>
                    </div>

                    {/* Official Prospectus Download Box (Soothing Academic Light Gradient) */}
                    <div className="bg-gradient-to-r from-[#5b0e2d] via-[#78143c] to-[#5b0e2d] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                      <div>
                        <span className="font-montserrat text-[9px] font-bold text-gold tracking-widest uppercase block mb-1">
                          OFFICIAL PUBLICATION
                        </span>
                        <h4 className="font-outfit text-lg font-bold text-white mb-1">
                          Bharti Vishwavidyalaya Information Prospectus 2026-27
                        </h4>
                        <p className="font-outfit text-xs text-gray-200 font-light">
                          Comprehensive guide containing curriculum structures, faculty rosters, fee breakdown, and campus amenities.
                        </p>
                      </div>
                      <a
                        href="#"
                        className="bg-gold hover:bg-gold-light text-[#0f172a] font-montserrat text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full shrink-0 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Download className="w-4 h-4" /> DOWNLOAD PROSPECTUS PDF
                      </a>
                    </div>
                  </div>
                </div>

          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
