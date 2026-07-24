"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, GraduationCap, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#FCFAF7] border-t border-b border-[#E2E8F0] overflow-hidden relative" id="final-cta">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,4,1,0.04),transparent)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-burgundy/5 border border-burgundy/10 flex items-center justify-center mb-8 shadow-sm">
            <GraduationCap className="w-8 h-8 text-burgundy" />
          </div>

          <span className="font-montserrat text-[10px] font-bold text-burgundy tracking-[0.3em] uppercase mb-4 bg-burgundy/5 border border-burgundy/10 px-4 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-dark" /> ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27
          </span>

          <h2 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-6 leading-[1.1] text-balance text-[#0f172a]">
            Begin your journey at a <span className="text-gold-dark italic font-serif font-normal">world class</span> vishwavidyalaya
          </h2>

          <p className="font-outfit text-sm md:text-base text-slate-700 max-w-2xl font-light leading-relaxed mb-10 text-balance">
            Join a vibrant academic community of over 5,000 successful alumni working at leading global institutions. Speak with our academic counselors today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <Link
              href="/scholarships"
              className="w-full sm:w-auto bg-burgundy hover:bg-[#cc0000] text-white border border-burgundy font-montserrat text-[10px] font-bold tracking-widest px-8 py-4.5 rounded-full shadow-lg hover:shadow-burgundy/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer flex-1"
            >
              APPLY ONLINE NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about#prospectus"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#0f172a] border border-[#E2E8F0] font-montserrat text-[10px] font-bold tracking-widest px-8 py-4.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer flex-1"
            >
              PROSPECTUS 2026 <Download className="w-4 h-4 text-burgundy" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
