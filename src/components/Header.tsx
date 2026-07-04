"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X, ChevronDown, ArrowUpRight, GraduationCap } from "lucide-react";

const aboutLinks = {
  university: [
    { name: "About BU", href: "https://bhartiuniversity.org/about_us.php" },
    { name: "Vision & Mission", href: "https://bhartiuniversity.org/vision-mission.php" },
    { name: "Chancellor Message", href: "https://bhartiuniversity.org/chancellors.php" },
    { name: "Vice Chancellor Message", href: "https://bhartiuniversity.org/vice-chancellors.php" },
    { name: "Registrar Message", href: "https://bhartiuniversity.org/registrar.php" },
    { name: "Joint Director Message", href: "https://bhartiuniversity.org/joint-director.php" },
    { name: "Administration", href: "https://bhartiuniversity.org/bhartiIMG/Administration.pdf" },
    { name: "Council", href: "https://bhartiuniversity.org/bhartiIMG/councils.pdf" },
    { name: "Academic Leadership", href: "https://bhartiuniversity.org/bhartiIMG/LIST OF HOD.pdf" },
    { name: "RTI", href: "https://bhartiuniversity.org/bhartiIMG/RTI1.pdf" }
  ],
  records: [
    { name: "UGC Approval", href: "https://bhartiuniversity.org/bhartiIMG/Ugcapproval.pdf" },
    { name: "Ordinance", href: "https://bhartiuniversity.org/bhartiIMG/MoA.pdf" },
    { name: "Audit Report", href: "https://bhartiuniversity.org/bhartiIMG/audit%20report.pdf" },
    { name: "Annual Report", href: "https://bhartiuniversity.org/bhartiIMG/Annual%20Report.pdf" },
    { name: "AICTE EOA 2025-26", href: "https://bhartiuniversity.org/bhartiIMG/AICTE%20EOA%20Report%202025-2026.pdf" },
    { name: "Shulk Nirdharan 2025-26", href: "https://bhartiuniversity.org/bhartiIMG/shulk%20nirdharan%202025-26.pdf" },
    { name: "BCI EOA 2025-26", href: "https://bhartiuniversity.org/bhartiIMG/bcid1965%20Bharti%20Vishwavidyalaya,%20Durg,%20Chhattisgarh.pdf" }
  ],
  academic: [
    { name: "Courses Offered", href: "#programs" },
    { name: "Academic Collaboration", href: "https://bhartiuniversity.org/bhartiIMG/AC.pdf" },
    { name: "Academic Calendar", href: "https://bhartiuniversity.org/bhartiIMG/ACADEMIC%20CALENDER%20BV%202025%2026.pdf" },
    { name: "Library Facilities", href: "https://bhartiuniversity.org/bhartiIMG/Library.pdf" },
    { name: "IQAC Setup", href: "https://bhartiuniversity.org/bhartiIMG/IQAC.pdf" },
    { name: "Prospectus", href: "https://bhartiuniversity.org/bhartiIMG/Bharti%20vishwavidyalayaProspectus.pdf" }
  ]
};

const admissionsLinks = {
  process: [
    { name: "Eligibility Criteria", href: "https://bhartiuniversity.org/adminssion-process.php#eligibility" },
    { name: "Admission Process", href: "https://bhartiuniversity.org/adminssion-process.php" },
    { name: "Fee Structure 2025-26", href: "https://bhartiuniversity.org/fee-structure.php" },
    { name: "Required Documents", href: "https://bhartiuniversity.org/adminssion-process.php#required-Admission" }
  ],
  committees: [
    { name: "Committees & Cell List", href: "https://bhartiuniversity.org/bhartiIMG/REVISED_Committee_&_Cell.pdf" },
    { name: "Anti Ragging Cell", href: "https://bhartiuniversity.org/bhartiIMG/Anti%20Ragging%20Committee.pdf" },
    { name: "Press And Media Cell", href: "https://bhartiuniversity.org/bhartiIMG/Press%20&%20Media%20Cell.pdf" },
    { name: "WGV Cell", href: "https://bhartiuniversity.org/bhartiIMG/Women%20Grievance%20Redressal%20Cell.pdf" },
    { name: "IPR Cell", href: "https://bhartiuniversity.org/bhartiIMG/IPR.pdf" },
    { name: "Student Grievance Cell", href: "https://bhartiuniversity.org/bhartiIMG/Students%20Grievance%20Redressal%20Committee.pdf" },
    { name: "Legal Aide Cell", href: "https://bhartiuniversity.org/bhartiIMG/LAC.pdf" }
  ],
  cells: [
    { name: "SEDG Cell", href: "https://bhartiuniversity.org/bhartiIMG/eoc.pdf" },
    { name: "National Cadet Corps (NCC)", href: "https://bhartiuniversity.org/bhartiIMG/NCC%20Cell.pdf" },
    { name: "National Service Scheme (NSS)", href: "https://bhartiuniversity.org/bhartiIMG/NSS%20Cell.pdf" },
    { name: "Research Cell", href: "#research" },
    { name: "UGC Cell", href: "https://bhartiuniversity.org/bhartiIMG/UGC.pdf" },
    { name: "Internal Complaints (ICC)", href: "https://bhartiuniversity.org/bhartiIMG/Internal%20Complaints%20Committee.pdf" }
  ]
};

const researchLinks = [
  { name: "Journal Publication", href: "https://bhartiuniversity.org/bhartiIMG/1_Journal%20Publication.pdf" },
  { name: "Books Publication", href: "https://bhartiuniversity.org/bhartiIMG/2_Books%20Publication.pdf" },
  { name: "Patents Filed", href: "https://bhartiuniversity.org/bhartiIMG/3_Patents.pdf" },
  { name: "Seminars & Conferences", href: "https://bhartiuniversity.org/bhartiIMG/4_SEMINAR,%20CONFERENCE,%20WORKSHOP,%20WEBINAR.pdf" }
];

const conferenceLinks = [
  { name: "NCRISD-2026 Brochure", href: "https://bhartiuniversity.org/bhartiIMG/p17809202602512.pdf" },
  { name: "NCRISD-2026 Registration", href: "https://budurg.opencompas.com/superadmin/uni_event_name_list.php?schoolid=Mjkw" }
];

const marqueeItems = [
  "✨ Admissions Open for Academic Year 2026-2027 — Apply Today",
  "🏆 Ranked #1 in Regional Vishwavidyalaya Placement Excellence",
  "📅 National Conference on Interdisciplinary Research, Innovation and Sustainable Development (NCRISD-2026)",
  "🎓 UGC Approved & AICTE EOA Accredited Programs",
  "💼 Over 5000+ Placed Alumni Worldwide — 25 Years of Legacy since 1999"
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Nav */}
      <div className="hidden lg:block bg-[#FCFAF7] text-[#5A5A5A] py-2.5 px-6 border-b border-[#EAEAEA] text-[11px] font-montserrat font-semibold tracking-wider relative z-50">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a href="https://budurg.bhartiuniversity.org/" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors flex items-center gap-1 text-[#5A5A5A]">
              Result Portal <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://budurg.bhartiuniversity.org/superadmin/university_fee_login.php?schid=Mjkw" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors flex items-center gap-1 text-[#5A5A5A]">
              Online Fee Payment <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://bhartiuniversity.org/bhartiIMG/Fee%20Refund%20Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors flex items-center gap-1 text-[#5A5A5A]">
              Refund Policy <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://budurghr.iaudithrm.com/hrmanagement/login.php?urlmid=qZ0=&resume=1" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors flex items-center gap-1 text-[#5A5A5A]">
              Careers <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <span className="opacity-85">📞 Enquiry: +91 62322 21101</span>
            <span className="opacity-85">📧 info@bhartiuniversity.org</span>
            <a href="http://budurg.bhartiuniversity.org/" target="_blank" rel="noopener noreferrer" className="text-burgundy font-bold hover:text-gold hover:underline flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> ERP LOGIN
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Navbar */}
      <header
        className={`fixed left-0 right-0 ${activeDropdown ? "z-[60]" : "z-40"} transition-all duration-500 border-b ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-xl border-[#EAEAEA]/80 shadow-sm py-3 text-[#121212]"
            : "top-0 lg:top-[38px] bg-gradient-to-b from-[#0f0a0c] to-black/80 backdrop-blur-md border-white/10 py-4 text-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo with native horizontal dimensions - fully readable */}
          <a href="#" className="flex items-center group relative">
            {/* Light Mode Logo (logo.png) */}
            <img
              src="/img/logo.png"
              alt="Bharti Vishwavidyalaya Logo"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-102 ${
                scrolled ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"
              }`}
            />
            {/* Dark Mode Logo (logo_1.png) */}
            <img
              src="/img/logo_1.png"
              alt="Bharti Vishwavidyalaya Logo"
              className={`absolute inset-0 h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-102 ${
                scrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-montserrat text-xs font-bold tracking-wider">
            {/* Home */}
            <a
              href="#"
              className={`hover:text-burgundy transition-colors relative py-2 ${scrolled ? "text-[#121212]" : "text-white"}`}
            >
              HOME
            </a>

            {/* About (Mega Menu Trigger) */}
            <div
              className="relative group py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`flex items-center gap-1 transition-colors group-hover:text-burgundy ${scrolled ? "text-[#121212]" : "text-white"}`}>
                ABOUT <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </div>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[680px] bg-white border border-[#EAEAEA] shadow-2xl rounded-xl p-8 grid grid-cols-3 gap-8 cursor-default text-[#121212]"
                  >
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        The Vishwavidyalaya
                      </h4>
                      <ul className="space-y-2">
                        {aboutLinks.university.slice(0, 6).map((l, i) => (
                          <li key={i}>
                            <a href={l.href} target={l.href.includes(".pdf") ? "_blank" : "_self"} className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        Governance & Audits
                      </h4>
                      <ul className="space-y-2">
                        {aboutLinks.records.map((l, i) => (
                          <li key={i}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        Academic Resources
                      </h4>
                      <ul className="space-y-2">
                        {aboutLinks.academic.map((l, i) => (
                          <li key={i}>
                            <a href={l.href} target={l.href.includes(".pdf") ? "_blank" : "_self"} className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admissions & Committees */}
            <div
              className="relative group py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("admissions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`flex items-center gap-1 transition-colors group-hover:text-burgundy ${scrolled ? "text-[#121212]" : "text-white"}`}>
                ADMISSIONS & CELLS <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </div>
              <AnimatePresence>
                {activeDropdown === "admissions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[680px] bg-white border border-[#EAEAEA] shadow-2xl rounded-xl p-8 grid grid-cols-3 gap-8 cursor-default text-[#121212]"
                  >
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        Admissions Info
                      </h4>
                      <ul className="space-y-2">
                        {admissionsLinks.process.map((l, i) => (
                          <li key={i}>
                            <a href={l.href} className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        Committees
                      </h4>
                      <ul className="space-y-2">
                        {admissionsLinks.committees.slice(0, 6).map((l, i) => (
                          <li key={i}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-burgundy border-b border-[#EAEAEA] pb-2 mb-3 tracking-normal">
                        Cells & Activities
                      </h4>
                      <ul className="space-y-2">
                        {admissionsLinks.cells.slice(0, 6).map((l, i) => (
                          <li key={i}>
                            <a href={l.href} target={l.href.includes(".pdf") ? "_blank" : "_self"} className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-relaxed">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Research & Publications */}
            <div
              className="relative group py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("research")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`flex items-center gap-1 transition-colors group-hover:text-burgundy ${scrolled ? "text-[#121212]" : "text-white"}`}>
                RESEARCH <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </div>
              <AnimatePresence>
                {activeDropdown === "research" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[240px] bg-white border border-[#EAEAEA] shadow-2xl rounded-xl p-5 cursor-default text-[#121212]"
                  >
                    <ul className="space-y-3">
                      {researchLinks.map((l, i) => (
                        <li key={i}>
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-normal">
                             {l.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conference */}
            <div
              className="relative group py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("conference")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`flex items-center gap-1 transition-colors group-hover:text-burgundy ${scrolled ? "text-[#121212]" : "text-white"}`}>
                CONFERENCE <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </div>
              <AnimatePresence>
                {activeDropdown === "conference" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[260px] bg-white border border-[#EAEAEA] shadow-2xl rounded-xl p-5 cursor-default text-[#121212]"
                  >
                    <ul className="space-y-3">
                      {conferenceLinks.map((l, i) => (
                        <li key={i}>
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] font-medium hover:text-burgundy transition-colors block text-[11px] tracking-normal leading-normal">
                            {l.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Placements */}
            <a
              href="#placements"
              className={`hover:text-burgundy transition-colors py-2 ${scrolled ? "text-[#121212]" : "text-white"}`}
            >
              PLACEMENTS
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className={`hover:text-burgundy transition-colors py-2 ${scrolled ? "text-[#121212]" : "text-white"}`}
            >
              CONTACT
            </a>
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="flex items-center gap-4">
            <button className={`hover:text-burgundy transition-all p-2 rounded-full hover:bg-black/5 ${scrolled ? "text-[#121212]" : "text-white"}`}>
              <Search className="w-4.5 h-4.5" />
            </button>
            <a
              href="https://bhartiuniversity.org/fee-structure.php"
              className="hidden sm:inline-block px-5 py-2.5 rounded-full font-montserrat text-[10px] font-bold tracking-widest text-center shadow-lg transition-all duration-300 bg-burgundy text-white hover:bg-burgundy-light"
            >
              APPLY NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full hover:bg-black/5 ${scrolled ? "text-[#121212]" : "text-white"}`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Announcement Ribbon */}
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-500 bg-[#FAF8F5] border-b border-[#EAEAEA] py-3.5 shadow-sm ${
          scrolled ? "top-[64px]" : "top-[80px] lg:top-[118px]"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 overflow-hidden flex items-center gap-4">
          <div className="bg-burgundy/10 text-burgundy font-montserrat font-bold text-[9px] uppercase tracking-widest py-1 px-3 rounded flex-shrink-0">
            LATEST UPDATES
          </div>
          <div className="relative w-full overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap cursor-pointer">
              {marqueeItems.concat(marqueeItems).map((item, idx) => (
                <span key={idx} className="font-outfit font-medium text-xs text-[#121212] mr-20 hover:text-burgundy transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F0A0C]/98 backdrop-blur-lg flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <img src="/img/logo_1.png" alt="Bharti Vishwavidyalaya" className="h-9 w-auto object-contain" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#d4af37] p-2 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 font-outfit text-lg font-bold text-white overflow-y-auto max-h-[60vh] pr-2 scrollbar-none">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#d4af37] transition-colors py-1">
                HOME
              </a>
              
              <div className="border-t border-white/5 pt-4">
                <span className="text-[#d4af37] text-[10px] font-montserrat font-bold tracking-widest block mb-2 uppercase">ABOUT THE VISHWAVIDYALAYA</span>
                <div className="grid grid-cols-1 gap-1.5 pl-3 text-sm font-medium text-white/70">
                  <a href="https://bhartiuniversity.org/about_us.php" target="_blank" className="hover:text-white transition-colors py-1">About BU</a>
                  <a href="https://bhartiuniversity.org/vision-mission.php" target="_blank" className="hover:text-white transition-colors py-1">Vision & Mission</a>
                  <a href="https://bhartiuniversity.org/bhartiIMG/Administration.pdf" target="_blank" className="hover:text-white transition-colors py-1">Administration Portal</a>
                  <a href="https://bhartiuniversity.org/fee-structure.php" className="hover:text-white transition-colors py-1">Fee Structure</a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-[#d4af37] text-[10px] font-montserrat font-bold tracking-widest block mb-2 uppercase">RESEARCH & NCRISD</span>
                <div className="grid grid-cols-1 gap-1.5 pl-3 text-sm font-medium text-white/70">
                  <a href="https://bhartiuniversity.org/bhartiIMG/1_Journal%20Publication.pdf" target="_blank" className="hover:text-white transition-colors py-1">Publications List</a>
                  <a href="https://bhartiuniversity.org/bhartiIMG/3_Patents.pdf" target="_blank" className="hover:text-white transition-colors py-1">Patents Directory</a>
                  <a href="https://bhartiuniversity.org/bhartiIMG/p17809202602512.pdf" target="_blank" className="hover:text-white transition-colors py-1">NCRISD-2026 Brochure</a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <a href="#placements" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#d4af37] transition-colors block py-1">
                  PLACEMENTS
                </a>
              </div>

              <div className="border-t border-white/5 pt-4">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#d4af37] transition-colors block py-1">
                  CONTACT US
                </a>
              </div>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href="http://budurg.bhartiuniversity.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-montserrat text-xs font-semibold py-4 rounded-xl text-center transition-all"
              >
                ERP PORTAL LOGIN
              </a>
              <a
                href="https://bhartiuniversity.org/fee-structure.php"
                className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat text-xs font-bold py-4 rounded-xl text-center transition-all tracking-widest text-shadow-subtle hover:shadow-lg hover:shadow-gold/20"
              >
                APPLY FOR ADMISSION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
