"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { COURSES_DATA, FACULTIES, Program } from "@/data/coursesData";
import { Search, GraduationCap, Clock, Award, CheckCircle2, Briefcase, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = ["ALL LEVELS", "Undergraduate", "Postgraduate", "Diploma", "Doctoral", "Group Institution"];

export default function AcademicsPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("ALL PROGRAMMES");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL LEVELS");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesFaculty =
      selectedFaculty === "ALL PROGRAMMES" || course.faculty.toUpperCase() === selectedFaculty.toUpperCase();
    const matchesCategory =
      selectedCategory === "ALL LEVELS" || course.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.specializations && course.specializations.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesFaculty && matchesCategory && matchesSearch;
  });

  return (
    <SmoothScroll>
      <Header />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Page Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <GraduationCap className="w-4 h-4" /> Academic Excellence • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Explore Our Academic Programs
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Discover industry-aligned degree, diploma, and doctoral programs across 11 University Faculties and 5 specialized Sister Colleges at Bharti Vishwavidyalaya.
            </p>
          </div>
        </section>

        {/* Filters & Search Container */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAEAEA] flex flex-col gap-6">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs by name, specialization, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-outfit focus:outline-none focus:border-[#5b0e2d] transition-colors"
              />
            </div>

            {/* Level Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-wider mr-2 shrink-0">
                Level:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-montserrat font-semibold shrink-0 transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#5b0e2d] text-white shadow-md"
                      : "bg-[#F1F5F9] text-gray-600 hover:bg-[#E2E8F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Faculty Dropdown & Quick Selector */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#F1F5F9]">
              <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-wider shrink-0">
                Faculty:
              </span>
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs font-montserrat font-bold text-[#5b0e2d] focus:outline-none cursor-pointer"
              >
                {FACULTIES.map((fac) => (
                  <option key={fac} value={fac}>
                    {fac}
                  </option>
                ))}
              </select>
              <span className="ml-auto text-xs font-outfit text-gray-500">
                Showing <strong>{filteredCourses.length}</strong> program{filteredCourses.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 p-8">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-outfit text-lg font-bold text-gray-700 mb-2">No programs found</h3>
              <p className="text-xs text-gray-500 mb-4">Try adjusting your search filters or faculty selection.</p>
              <button
                onClick={() => {
                  setSelectedFaculty("ALL PROGRAMMES");
                  setSelectedCategory("ALL LEVELS");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-[#5b0e2d] text-white rounded-xl text-xs font-montserrat font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                  className="bg-white rounded-2xl p-6 border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5b0e2d] to-[#d4af37]" />

                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#5b0e2d]/5 text-[#5b0e2d] font-montserrat text-[10px] font-bold tracking-wider uppercase">
                        {program.faculty}
                      </span>
                      {program.accreditation && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-montserrat font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          <Award className="w-3 h-3" /> {program.accreditation}
                        </span>
                      )}
                    </div>

                    {/* Program Title */}
                    <h3 className="font-outfit text-base font-extrabold text-[#0f172a] mb-2 group-hover:text-[#5b0e2d] transition-colors leading-snug">
                      {program.name}
                    </h3>

                    {/* Duration & Eligibility */}
                    <div className="space-y-2 mb-4 text-xs text-gray-600 font-outfit">
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Clock className="w-4 h-4 text-[#5b0e2d] shrink-0" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-gray-500 font-light">{program.eligibility}</span>
                      </div>
                    </div>

                    {/* Specializations list if any */}
                    {program.specializations && program.specializations.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-gray-100">
                        <span className="text-[10px] font-montserrat font-bold text-gray-400 uppercase tracking-wider block mb-2">
                          Specializations:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {program.specializations.map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 bg-[#F8FAFC] text-gray-600 rounded text-[11px] font-outfit border border-[#E2E8F0]"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Career Opportunities */}
                    {program.careerOpportunities && program.careerOpportunities.length > 0 && (
                      <div className="mb-4 pt-2">
                        <span className="text-[10px] font-montserrat font-bold text-gray-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-[#5b0e2d]" /> Career Pathways:
                        </span>
                        <p className="text-xs text-gray-500 font-light line-clamp-2 leading-relaxed">
                          {program.careerOpportunities.join(" • ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-montserrat font-bold text-gray-400 uppercase">
                      Category: <span className="text-gray-700">{program.category}</span>
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#5b0e2d] hover:text-[#d4af37] transition-colors"
                    >
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
