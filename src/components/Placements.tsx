"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Landmark, ShieldCheck } from "lucide-react";

const recruiters = [
  "Tata Consultancy Services",
  "Wipro Limited",
  "Cognizant",
  "Tech Mahindra",
  "Infosys",
  "HCL Technologies",
  "Accenture",
  "IBM India",
  "Capgemini",
  "L&T Infotech",
];

export default function Placements() {
  const [activeTab, setActiveTab] = useState<"chart" | "stories">("chart");

  return (
    <section className="py-14 md:py-18 bg-[#f8fafc] border-b border-[#E2E8F0] overflow-hidden" id="placements">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[9px] font-bold tracking-widest text-burgundy uppercase font-sans mb-2.5 bg-burgundy/5 px-3 py-0.5 rounded-full inline-block">
              CAREER OUTCOMES
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Placement Excellence & Industry Connect
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-1 bg-white border border-[#E2E8F0] p-1 rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab("chart")}
              className={`px-4.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "chart"
                  ? "bg-burgundy text-white shadow-sm"
                  : "text-gray-500 hover:text-[#0f172a]"
              }`}
            >
              Placement Growth
            </button>
            <button
              onClick={() => setActiveTab("stories")}
              className={`px-4.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "stories"
                  ? "bg-burgundy text-white shadow-sm"
                  : "text-gray-500 hover:text-[#0f172a]"
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        {/* 2-Column Outcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Summary Stats */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-burgundy/5 flex items-center justify-center mb-4">
                <TrendingUp className="w-4.5 h-4.5 text-burgundy" />
              </div>
              <span className="font-montserrat text-[8px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
                Avg Package
              </span>
              <span className="font-outfit text-xl font-bold text-[#0f172a]">
                6.5 LPA
              </span>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-gold/5 flex items-center justify-center mb-4">
                <Landmark className="w-4.5 h-4.5 text-gold-dark" />
              </div>
              <span className="font-montserrat text-[8px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
                Highest Package
              </span>
              <span className="font-outfit text-xl font-bold text-[#0f172a]">
                24 LPA
              </span>
            </div>

            <div className="col-span-2 bg-[#0F0A0C] text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-burgundy/10 rounded-tl-full blur-xl pointer-events-none" />
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-4.5 h-4.5 text-gold" />
              </div>
              <span className="font-montserrat text-[8px] font-bold text-gold tracking-widest uppercase block mb-1">
                Corporate Tie-Ups
              </span>
              <span className="font-outfit text-xl font-bold block mb-1">
                120+ Recruiter Network
              </span>
              <p className="text-[9px] text-white/50 leading-relaxed font-light font-montserrat">
                Global collaborations bridging local talent to top tech parks and management firms.
              </p>
            </div>
          </div>

          {/* Right Tab Content Column */}
          <div className="lg:col-span-8 h-[280px] flex items-center justify-center bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm relative depth-card">
            
            {activeTab === "chart" ? (
              <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-base text-[#0f172a] mb-0.5">
                    Placement Success Rates (2022 - 2026)
                  </h3>
                  <p className="text-[10px] text-gray-500">
                    Interactive metric charting our annual placement rate percentages.
                  </p>
                </div>

                {/* HTML Bar Chart (Perfect Scale and Fit) */}
                <div className="relative w-full h-[150px] mt-2 flex items-end justify-around px-4">
                  {/* Baseline */}
                  <div className="absolute left-4 right-4 bottom-[30px] h-[1px] bg-gray-200" />

                  {/* 2022: 78% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gray-500 mb-1">78%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "78px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="w-7 sm:w-10 md:w-12 bg-slate-200 rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2022</span>
                  </div>

                  {/* 2023: 84% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gray-400 mb-1">84%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "84px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-7 sm:w-10 md:w-12 bg-slate-400 rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2023</span>
                  </div>

                  {/* 2024: 89% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gold-dark mb-1">89%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "89px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="w-7 sm:w-10 md:w-12 bg-gold-dark rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2024</span>
                  </div>

                  {/* 2025: 92% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-burgundy mb-1">92%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "92px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="w-7 sm:w-10 md:w-12 bg-burgundy rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2025</span>
                  </div>

                  {/* 2026: 95% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gold-dark mb-1">95%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "95px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="w-7 sm:w-10 md:w-12 bg-gold-dark rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2026 (Est)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2">
                <div className="p-4.5 border border-[#E2E8F0] bg-[#f8fafc] rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-bold tracking-widest text-[#c5a059] uppercase block mb-1">
                      WIPRO
                    </span>
                    <h4 className="font-outfit font-bold text-xs text-[#0f172a] mb-1.5 leading-snug">
                      Priya Sen — Software Engineer
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      &ldquo;The practical logic labs and mock assessments in MCA at Bharti gave me the edge to clear corporate selection tests.&rdquo;
                    </p>
                  </div>
                  <span className="text-[9px] text-burgundy font-bold tracking-wider uppercase mt-3">
                    Placed 2025
                  </span>
                </div>

                <div className="p-4.5 border border-[#E2E8F0] bg-[#f8fafc] rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-bold tracking-widest text-[#c5a059] uppercase block mb-1">
                      TECH MAHINDRA
                    </span>
                    <h4 className="font-outfit font-bold text-xs text-[#0f172a] mb-1.5 leading-snug">
                      Amit Roy — Associate Analyst
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      &ldquo;My BBA internship matched me with core project managers, converting to a full placement offer post graduation.&rdquo;
                    </p>
                  </div>
                  <span className="text-[9px] text-burgundy font-bold tracking-wider uppercase mt-3">
                    Placed 2025
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recruiter Logos Infinite Horizontal Marquee */}
        <div className="border-t border-[#E2E8F0] pt-6.5">
          <span className="text-[8px] font-bold tracking-widest text-[#c5a059] tracking-[0.2em] uppercase text-center block mb-5 font-sans">
            OUR ESTEEMED RECRUITMENT PARTNERS
          </span>
          <div className="w-full overflow-hidden relative py-3 bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
            <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {[...recruiters, ...recruiters].map((rec, idx) => (
                <span
                  key={idx}
                  className="mx-10 text-xs font-outfit font-bold text-gray-400 uppercase tracking-widest select-none cursor-default hover:text-burgundy transition-colors duration-300"
                >
                  {rec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
