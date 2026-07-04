"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, GraduationCap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 md:py-36 bg-[#FCFAF7] border-t border-b border-[#EAEAEA] overflow-hidden relative" id="final-cta">
      {/* Soft background light-theme overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,14,45,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(91,14,45,0.01),transparent)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#5b0e2d]/5 border border-[#5b0e2d]/10 flex items-center justify-center mb-8 shadow-sm">
            <GraduationCap className="w-6 h-6 text-[#d4af37]" />
          </div>

          <span className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.3em] uppercase mb-4">
            ADMISSIONS OPEN FOR 2026-27
          </span>

          <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-8 leading-[1.1] text-balance text-[#121212]">
            Begin your story at a <span className="text-[#d4af37] italic font-serif font-normal">world class</span> vishwavidyalaya
          </h2>

          <p className="font-outfit text-sm md:text-base text-gray-500 max-w-2xl font-light leading-relaxed mb-12 text-balance">
            Join a vibrant community of over 5000 successful alumni. Download our digital prospectus or speak with our academic counselors today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <a
              href="https://bhartiuniversity.org/fee-structure.php"
              className="w-full sm:w-auto bg-[#5b0e2d] hover:bg-[#801d43] text-white border border-[#5b0e2d] font-montserrat text-[10px] font-bold tracking-widest px-8 py-5 rounded-full shadow-lg hover:shadow-[#5b0e2d]/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              APPLY ONLINE NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://bhartiuniversity.org/bhartiIMG/Bharti%20vishwavidyalayaProspectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#121212] border border-[#EAEAEA] font-montserrat text-[10px] font-bold tracking-widest px-8 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              DOWNLOAD PROSPECTUS <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
