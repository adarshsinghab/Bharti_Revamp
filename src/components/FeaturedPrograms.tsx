"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const categories = ["IT & COMPUTER SCIENCE", "EDUCATION", "PHARMACY", "MANAGEMENT", "LAW"];

const programsData: Record<string, Array<{
  name: string;
  duration: string;
  accreditation: string;
  description: string;
  highlights: string[];
}>> = {
  "IT & COMPUTER SCIENCE": [
    {
      name: "B.Tech Computer Science Engineering",
      duration: "4 Years (Full Time)",
      accreditation: "AICTE Approved",
      description: "Advanced study of software engineering, artificial intelligence, cyber security, and machine learning systems.",
      highlights: ["AI & Data Science Labs", "Industry Internship", "GPU Server Lab access"]
    },
    {
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years (Full Time)",
      accreditation: "UGC Approved",
      description: "Foundational software application development, database management, and networking systems.",
      highlights: ["Web Frameworks", "Mobile App Dev", "SQL Database design"]
    }
  ],
  "EDUCATION": [
    {
      name: "Bachelor of Education (B.Ed)",
      duration: "2 Years (Full Time)",
      accreditation: "NCTE Recognized",
      description: "Empowering educators with modern pedagogical techniques, student psychology, and teaching skills.",
      highlights: ["Pedagogical Labs", "Staging Internships", "Curriculum Designing"]
    },
    {
      name: "Master of Education (M.Ed)",
      duration: "2 Years (Full Time)",
      accreditation: "NCTE Recognized",
      description: "Advanced research in educational administration, curriculum development, and educational psychology.",
      highlights: ["Academic Research", "Pedagogy Innovation", "Policy Making"]
    }
  ],
  "PHARMACY": [
    {
      name: "Bachelor of Pharmacy (B.Pharm)",
      duration: "4 Years (Full Time)",
      accreditation: "PCI Approved",
      description: "Comprehensive pharmacology, medicinal chemistry, pharmaceutics, and industrial drug manufacturing.",
      highlights: ["Advanced Chemistry Lab", "Drug Formulation research", "Hospital Internships"]
    },
    {
      name: "Diploma in Pharmacy (D.Pharm)",
      duration: "2 Years (Full Time)",
      accreditation: "PCI Approved",
      description: "Core pharmacy techniques, hospital distribution, and drug dispensing methodologies.",
      highlights: ["Practical Dispensing", "Basic Pharmacology", "Store Management"]
    }
  ],
  "MANAGEMENT": [
    {
      name: "Master of Business Administration (MBA)",
      duration: "2 Years (Full Time)",
      accreditation: "AICTE Approved",
      description: "Global business strategy, financial management, executive leadership, and marketing analytics.",
      highlights: ["Case Study Studies", "Executive Networking", "Summer Internships"]
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 Years (Full Time)",
      accreditation: "UGC Approved",
      description: "Foundational business administration principles, marketing, sales, and organizational behavior.",
      highlights: ["Startup Incubator access", "Entrepreneurship Track", "Seminar Projects"]
    }
  ],
  "LAW": [
    {
      name: "Bachelor of Laws (LL.B)",
      duration: "3 Years (Full Time)",
      accreditation: "BCI Approved",
      description: "Core Indian constitution studies, criminal law, corporate law, and advocacy techniques.",
      highlights: ["Moot Court Trials", "Legal Aid Cell practice", "High Court Internships"]
    },
    {
      name: "B.A. LL.B. (Integrated)",
      duration: "5 Years (Full Time)",
      accreditation: "BCI Approved",
      description: "Comprehensive dual degree combining humanities with legal studies for professional counsel.",
      highlights: ["Moot Court Debates", "Corporate Internship", "Constitutional Law focus"]
    }
  ]
};

export default function FeaturedPrograms() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="programs" className="py-14 md:py-18 bg-[#f8fafc] border-b border-[#E2E8F0]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              ACADEMIC OFFERINGS
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Featured Programs & Courses
            </h2>
          </div>
          <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed max-w-sm">
            Our curriculum is designed in collaboration with top corporate leaders and academic researchers to prepare students for the global marketplace.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap gap-2.5 border-b border-[#E2E8F0] pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative px-5 py-2 font-montserrat text-[11px] font-bold tracking-widest transition-colors duration-300 focus:outline-none cursor-pointer rounded-full"
            >
              <span className={`relative z-10 ${activeTab === cat ? "text-white" : "text-gray-500 hover:text-[#0f172a]"}`}>
                {cat}
              </span>
              {activeTab === cat && (
                <motion.div
                  layoutId="activeProgramTab"
                  className="absolute inset-0 bg-burgundy"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {programsData[activeTab].map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6.5 shadow-sm hover:shadow-lg hover:border-burgundy/10 depth-card transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Program Duration & Badge */}
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-bold font-montserrat tracking-wider">
                        <Clock className="w-3.5 h-3.5" /> {p.duration}
                      </div>
                      <span className="bg-[#f8fafc] text-gold-dark border border-gold-dark/30 font-montserrat font-bold text-[10px] uppercase tracking-wider py-0.5 px-2 rounded text-shadow-gold">
                        {p.accreditation}
                      </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="font-outfit text-base font-bold text-[#0f172a] mb-3 group-hover:text-burgundy transition-colors duration-300">
                      {p.name}
                    </h3>

                    {/* Description */}
                    <p className="font-outfit text-[13px] text-gray-500 font-light leading-relaxed mb-5">
                      {p.description}
                    </p>

                    {/* Highlights Checklist */}
                    <ul className="space-y-2 mb-6 border-t border-[#E2E8F0] pt-4.5">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-[12px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Trigger */}
                  <a
                    href="/fee-structure"
                    className="w-full bg-white hover:bg-burgundy text-[#0f172a] hover:text-white border border-[#E2E8F0] hover:border-burgundy py-3 rounded-full font-montserrat text-[11px] font-bold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer hover:shadow-burgundy/20"
                  >
                    APPLY NOW <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Hover highlight border accent */}
                  <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-burgundy/10 transition-colors duration-500 pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
