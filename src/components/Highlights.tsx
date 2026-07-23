"use client";

import { motion } from "framer-motion";
import { Award, Library, Users, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "25+ Years of Academic Heritage",
    description: "Est. 1999. Mentoring thousands of graduates who lead in technology and administrative domains worldwide.",
    number: "01"
  },
  {
    icon: Shield,
    title: "Accredited & Recognized",
    description: "Approved by UGC under Section 2(f). Certified by AICTE and BCI, upholding global academic benchmarks.",
    number: "02"
  },
  {
    icon: Library,
    title: "Architectural & Digital Library",
    description: "Featuring a rich archive of international journals, digital academic reserves, and premium quiet study zones.",
    number: "03"
  },
  {
    icon: Users,
    title: "Top-Tier Scientific Faculty",
    description: "Taught by active researchers, patent-holders, and industry experts committed to the Vision 2030 blueprint.",
    number: "04"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Highlights() {
  return (
    <section className="py-14 md:py-18 bg-[#f8fafc] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Asymmetric Header Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              THE BENCHMARK OF PRESTIGE
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-5">
              Bharti Vishwavidyalaya at a Glance
            </h2>
            <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed max-w-sm">
              We do not just train professionals. We build visionary leaders. Our academic foundation combines rigorous traditional wisdom with advanced technological resources.
            </p>
            
            {/* Elegant Indigo separator line */}
            <div className="w-12 h-[2px] bg-burgundy mt-6" />
          </div>

          {/* Grid Layout Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className={`bg-white border border-[#E2E8F0] p-6.5 rounded-2xl shadow-sm hover:shadow-lg hover:border-burgundy/15 depth-card transition-all duration-500 relative overflow-hidden group ${
                    idx === 1 || idx === 3 ? "sm:translate-y-6" : ""
                  }`}
                >
                  {/* Number Overlay */}
                  <span className="absolute top-4 right-6 font-montserrat font-extrabold text-4xl text-slate-100 group-hover:text-burgundy/5 select-none transition-colors duration-500">
                    {h.number}
                  </span>
                  
                  {/* Icon with Indigo style */}
                  <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy mb-5 group-hover:bg-burgundy group-hover:text-white transition-colors duration-500">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  
                  <h3 className="font-outfit text-base font-bold text-[#0f172a] mb-2.5 group-hover:text-burgundy transition-colors duration-300">
                    {h.title}
                  </h3>
                  
                  <p className="font-outfit text-[11px] text-gray-500 font-light leading-relaxed">
                    {h.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
