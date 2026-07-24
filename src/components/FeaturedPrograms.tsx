"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react";
import { COURSES_DATA, FACULTIES } from "@/data/coursesData";

const degreeLevels = ["ALL LEVELS", "Undergraduate", "Postgraduate", "Diploma", "Doctoral", "Group Institution"];

export default function FeaturedPrograms() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("ALL PROGRAMMES");
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL LEVELS");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Track open expanded course card names
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const facultyScrollRef = useRef<HTMLDivElement>(null);
  const carouselScrollRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (courseName: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [courseName]: !prev[courseName]
    }));
  };

  const scrollFaculty = (direction: "left" | "right") => {
    if (facultyScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      facultyScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselScrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      carouselScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredPrograms = useMemo(() => {
    return COURSES_DATA.filter((p) => {
      // Faculty filter
      const matchFaculty =
        selectedFaculty === "ALL PROGRAMMES" || p.faculty === selectedFaculty;

      // Degree level filter
      const matchLevel =
        selectedLevel === "ALL LEVELS" || p.category === selectedLevel;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.faculty.toLowerCase().includes(q) ||
        p.eligibility.toLowerCase().includes(q) ||
        (p.specializations && p.specializations.some((s) => s.toLowerCase().includes(q))) ||
        (p.careerOpportunities && p.careerOpportunities.some((c) => c.toLowerCase().includes(q)));

      return matchFaculty && matchLevel && matchSearch;
    });
  }, [selectedFaculty, selectedLevel, searchQuery]);

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#f8fafc] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
          <div>
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              ACADEMIC OFFERINGS & DEPARTMENTS
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Official Degree Programs & Faculties
            </h2>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, B.Tech, MBA, Law..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E2E8F0] rounded-full pl-11 pr-4 py-3 text-xs font-outfit text-[#0f172a] placeholder-gray-400 focus:outline-none focus:border-burgundy/50 focus:ring-2 focus:ring-burgundy/10 shadow-sm transition-all"
              />
            </div>
            
            <div className="bg-white border border-[#E2E8F0] px-4 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm text-xs font-montserrat font-bold text-slate-700">
              <BookOpen className="w-4 h-4 text-burgundy" />
              <span>{filteredPrograms.length} Courses Found</span>
            </div>
          </div>
        </div>

        {/* Faculty Department Tab Bar with Left/Right Arrow Controls */}
        <div className="relative mb-6 flex items-center gap-2">
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollFaculty("left")}
            aria-label="Scroll faculties left"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-slate-700 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all shrink-0 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Tab Track */}
          <div
            ref={facultyScrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar scroll-smooth flex-1"
          >
            {FACULTIES.map((fac) => {
              const isActive = selectedFaculty === fac;
              return (
                <button
                  key={fac}
                  onClick={() => setSelectedFaculty(fac)}
                  className={`relative px-4 py-2.5 rounded-full font-montserrat text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#0f172a] text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-[#E2E8F0]"
                  }`}
                >
                  {fac}
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollFaculty("right")}
            aria-label="Scroll faculties right"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-slate-700 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all shrink-0 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Degree Level Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-montserrat font-bold text-gray-400 tracking-wider uppercase mr-2 flex items-center gap-1">
              <Layers className="w-3 h-3 text-burgundy" /> DEGREE LEVEL:
            </span>
            {degreeLevels.map((lvl) => {
              const isActive = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1 rounded-md font-montserrat text-[10px] font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-burgundy text-white"
                      : "bg-slate-200/60 text-slate-700 hover:bg-slate-300/60"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>

          {/* Carousel Track Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Previous courses"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-slate-700 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Next courses"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-slate-700 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track Display (Closed by default, click to expand) */}
        <div className="relative min-h-[320px]">
          {filteredPrograms.length > 0 ? (
            <div
              ref={carouselScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-none no-scrollbar scroll-smooth snap-x snap-mandatory items-start"
            >
              {filteredPrograms.map((p, idx) => {
                const isExpanded = !!expandedCards[p.name];
                return (
                  <motion.div
                    key={p.name + idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
                    className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-burgundy/30 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden depth-card"
                  >
                    <div>
                      {/* Top Faculty & Accreditation Badges */}
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[9px] uppercase tracking-wider py-0.5 px-2.5 rounded-full inline-flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" /> {p.faculty}
                        </span>
                        
                        <span className="bg-[#f8fafc] text-gold-dark border border-gold-dark/30 font-montserrat font-bold text-[9px] uppercase tracking-wider py-0.5 px-2 rounded shrink-0">
                          {p.accreditation || p.category}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="font-outfit text-base font-extrabold text-[#0f172a] mb-2 leading-snug group-hover:text-burgundy transition-colors duration-300">
                        {p.name}
                      </h3>

                      {/* Duration & Category */}
                      <div className="flex items-center gap-3 text-slate-700 text-[11px] font-semibold font-montserrat mb-4 border-b border-[#E2E8F0] pb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-burgundy" /> {p.duration}
                        </span>
                        <span>•</span>
                        <span className="text-burgundy font-bold">{p.category}</span>
                      </div>

                      {/* Expandable Details Container */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden space-y-4 pt-2 border-t border-[#E2E8F0] mb-4"
                          >
                            {/* Eligibility */}
                            <div>
                              <span className="text-[10px] font-montserrat font-bold text-slate-900 uppercase tracking-wider block mb-1">
                                ELIGIBILITY CRITERIA:
                              </span>
                              <p className="font-outfit text-[12px] text-slate-700 font-normal leading-relaxed">
                                {p.eligibility}
                              </p>
                            </div>

                            {/* Specializations Pills */}
                            {p.specializations && p.specializations.length > 0 && (
                              <div>
                                <span className="text-[10px] font-montserrat font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
                                  SPECIALIZATIONS / MAJORS:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {p.specializations.map((s, sIdx) => (
                                    <span
                                      key={sIdx}
                                      className="bg-slate-100 text-slate-800 text-[10px] font-montserrat font-medium px-2 py-0.5 rounded"
                                    >
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Career Pathways */}
                            {p.careerOpportunities && p.careerOpportunities.length > 0 && (
                              <div>
                                <span className="text-[10px] font-montserrat font-bold text-slate-900 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                                  <Briefcase className="w-3 h-3 text-gold-dark" /> CAREER PATHWAYS:
                                </span>
                                <ul className="space-y-1.5">
                                  {p.careerOpportunities.map((c, cIdx) => (
                                    <li key={cIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-burgundy shrink-0" />
                                      <span>{c}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Action Controls Footer */}
                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
                      {/* Expand Toggle Trigger */}
                      <button
                        onClick={() => toggleExpand(p.name)}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-xl font-montserrat text-[10px] font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <Minus className="w-3.5 h-3.5 text-burgundy" /> COLLAPSE DETAILS
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-burgundy" /> EXPAND DETAILS & ELIGIBILITY
                          </>
                        )}
                      </button>

                      {/* Single-Tab Link Apply Trigger */}
                      {isExpanded && (
                        <Link
                          href="/scholarships"
                          className="w-full bg-[#0f172a] hover:bg-burgundy text-white py-2.5 rounded-xl font-montserrat text-[10px] font-bold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          APPLY FOR ADMISSION <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    {/* Hover border accent */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-burgundy/20 transition-colors duration-500 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center bg-white border border-[#E2E8F0] rounded-2xl p-8 max-w-xl mx-auto">
              <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-1">
                No matching programs found
              </h3>
              <p className="font-outfit text-xs text-gray-500 mb-4">
                Try adjusting your search terms or selecting "ALL PROGRAMMES".
              </p>
              <button
                onClick={() => { setSelectedFaculty("ALL PROGRAMMES"); setSelectedLevel("ALL LEVELS"); setSearchQuery(""); }}
                className="bg-burgundy text-white text-xs font-montserrat font-bold px-4 py-2 rounded-full cursor-pointer"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
