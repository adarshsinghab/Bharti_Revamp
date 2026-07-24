"use client";

import { useState, useMemo } from "react";
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
  Layers
} from "lucide-react";
import { COURSES_DATA, FACULTIES } from "@/data/coursesData";

const degreeLevels = ["ALL LEVELS", "Undergraduate", "Postgraduate", "Diploma", "Doctoral", "Group Institution"];

export default function FeaturedPrograms() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("ALL PROGRAMMES");
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL LEVELS");
  const [searchQuery, setSearchQuery] = useState("");

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
    <section id="programs" className="py-16 md:py-24 bg-[#f8fafc] border-b border-[#E2E8F0]">
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

        {/* Horizontal Scrollable Faculties Tab Bar */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none no-scrollbar">
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
        </div>

        {/* Degree Level Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-10 pb-4 border-b border-[#E2E8F0]">
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

        {/* Course Cards Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFaculty + selectedLevel + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 depth-card transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      {/* Faculty Badge & Accreditation */}
                      <div className="flex justify-between items-start gap-2 mb-4">
                        <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[9px] uppercase tracking-wider py-0.5 px-2.5 rounded-full inline-flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" /> {p.faculty}
                        </span>
                        
                        <span className="bg-[#f8fafc] text-gold-dark border border-gold-dark/30 font-montserrat font-bold text-[9px] uppercase tracking-wider py-0.5 px-2 rounded shrink-0">
                          {p.accreditation || p.category}
                        </span>
                      </div>

                      {/* Program Title */}
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

                      {/* Eligibility */}
                      <div className="mb-4">
                        <span className="text-[10px] font-montserrat font-bold text-slate-900 uppercase tracking-wider block mb-1">
                          ELIGIBILITY CRITERIA:
                        </span>
                        <p className="font-outfit text-[12px] text-slate-700 font-normal leading-relaxed">
                          {p.eligibility}
                        </p>
                      </div>

                      {/* Specializations Pills if present */}
                      {p.specializations && p.specializations.length > 0 && (
                        <div className="mb-4">
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

                      {/* Career Opportunities List if present */}
                      {p.careerOpportunities && p.careerOpportunities.length > 0 && (
                        <div className="mb-6 border-t border-[#E2E8F0] pt-3">
                          <span className="text-[10px] font-montserrat font-bold text-slate-900 uppercase tracking-wider block mb-2 flex items-center gap-1">
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
                    </div>

                    {/* Single-Tab Link Apply Trigger */}
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                      <Link
                        href="/scholarships"
                        className="w-full bg-[#0f172a] hover:bg-burgundy text-white py-3 rounded-full font-montserrat text-[11px] font-bold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-burgundy/30"
                      >
                        APPLY FOR ADMISSION <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Hover border accent */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-burgundy/20 transition-colors duration-500 pointer-events-none" />
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center bg-white border border-[#E2E8F0] rounded-2xl p-8">
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
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
