"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Landmark, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { PARTNER_LOGOS, PartnerLogo } from "@/data/partnersData";

function LogoImageCard({ partner }: { partner: PartnerLogo }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-5 py-3 shadow-sm hover:shadow-lg hover:scale-[1.03] hover:border-burgundy/30 transition-all duration-300 group cursor-pointer depth-card shrink-0">
      {!imgError ? (
        <img
          src={partner.logo}
          alt={partner.name}
          onError={() => setImgError(true)}
          className="w-7 h-7 object-contain rounded-md filter group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center font-montserrat text-[10px] font-extrabold text-white shrink-0 shadow-xs"
          style={{ backgroundColor: partner.brandColor || "#f60401" }}
        >
          {partner.shortName.substring(0, 2).toUpperCase()}
        </div>
      )}

      <div>
        <span className="font-outfit text-xs font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors block leading-tight">
          {partner.shortName}
        </span>
        <span className="font-montserrat text-[8px] font-bold text-gray-400 tracking-wider uppercase block">
          {partner.category}
        </span>
      </div>
    </div>
  );
}

export default function Placements() {
  const [activeTab, setActiveTab] = useState<"chart" | "stories">("chart");

  const halfIndex = Math.ceil(PARTNER_LOGOS.length / 2);
  const track1 = PARTNER_LOGOS.slice(0, halfIndex);
  const track2 = PARTNER_LOGOS.slice(halfIndex);

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-[#E2E8F0] overflow-hidden" id="placements">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[9px] font-bold tracking-widest text-burgundy uppercase font-sans mb-2.5 bg-burgundy/5 px-3 py-0.5 rounded-full inline-block border border-burgundy/10">
              CAREER OUTCOMES & CORPORATE RECRUITMENT
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Placement Excellence & Global Connect
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-1 bg-white border border-[#E2E8F0] p-1 rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab("chart")}
              className={`px-4.5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "chart"
                  ? "bg-burgundy text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0f172a]"
              }`}
            >
              Placement Growth
            </button>
            <button
              onClick={() => setActiveTab("stories")}
              className={`px-4.5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "stories"
                  ? "bg-burgundy text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0f172a]"
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        {/* 2-Column Outcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Summary Stats */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-burgundy/5 flex items-center justify-center mb-4 border border-burgundy/10">
                <TrendingUp className="w-4.5 h-4.5 text-burgundy" />
              </div>
              <span className="font-montserrat text-[8px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
                Avg Package
              </span>
              <span className="font-outfit text-2xl font-bold text-[#0f172a]">
                6.5 LPA
              </span>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-gold/5 flex items-center justify-center mb-4 border border-gold/10">
                <Landmark className="w-4.5 h-4.5 text-gold-dark" />
              </div>
              <span className="font-montserrat text-[8px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
                Highest Package
              </span>
              <span className="font-outfit text-2xl font-bold text-[#0f172a]">
                24 LPA
              </span>
            </div>

            <div className="col-span-2 bg-[#0F0A0C] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-28 h-28 bg-burgundy/20 rounded-tl-full blur-2xl pointer-events-none" />
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                <ShieldCheck className="w-4.5 h-4.5 text-gold" />
              </div>
              <span className="font-montserrat text-[9px] font-bold text-gold tracking-widest uppercase block mb-1">
                Corporate Network
              </span>
              <span className="font-outfit text-xl font-extrabold block mb-1">
                120+ Recruiter Network
              </span>
              <p className="text-[10px] text-white/70 leading-relaxed font-light font-montserrat">
                Global collaborations bridging regional scholars to top technology parks and corporate conglomerates.
              </p>
            </div>
          </div>

          {/* Right Tab Content Column */}
          <div className="lg:col-span-8 h-[300px] flex items-center justify-center bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm relative depth-card">
            
            {activeTab === "chart" ? (
              <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-[#0f172a] mb-0.5">
                    Placement Success Rates (2022 - 2026)
                  </h3>
                  <p className="text-[11px] text-gray-500 font-light">
                    Annual placement growth metrics across undergraduate and postgraduate divisions.
                  </p>
                </div>

                {/* HTML Bar Chart */}
                <div className="relative w-full h-[160px] mt-2 flex items-end justify-around px-4">
                  <div className="absolute left-4 right-4 bottom-[30px] h-[1px] bg-gray-200" />

                  {/* 2022: 78% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gray-500 mb-1">78%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "78px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="w-8 sm:w-12 bg-slate-200 rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2022</span>
                  </div>

                  {/* 2023: 84% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gray-500 mb-1">84%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "84px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-8 sm:w-12 bg-slate-400 rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2023</span>
                  </div>

                  {/* 2024: 89% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gold-dark mb-1">89%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "89px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="w-8 sm:w-12 bg-gold-dark rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2024</span>
                  </div>

                  {/* 2025: 92% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-burgundy mb-1">92%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "92px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="w-8 sm:w-12 bg-burgundy rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2025</span>
                  </div>

                  {/* 2026: 95% */}
                  <div className="flex flex-col items-center flex-1 h-full justify-end relative z-10">
                    <span className="text-[10px] font-bold text-gold-dark mb-1">95%</span>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "95px" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="w-8 sm:w-12 bg-gold-dark rounded-t-md" />
                    <span className="text-[10px] text-gray-500 mt-2 block h-[20px] leading-[20px]">2026 (Est)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-1">
                <div className="p-4 border border-[#E2E8F0] bg-[#f8fafc] rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-bold tracking-widest text-gold-dark uppercase block mb-1">
                      WIPRO
                    </span>
                    <h4 className="font-outfit font-bold text-xs text-[#0f172a] mb-1.5 leading-snug">
                      Priya Sen — Software Engineer
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      &ldquo;The practical logic labs and mock assessment training gave me the exact edge needed to clear corporate selection rounds.&rdquo;
                    </p>
                  </div>
                  <span className="text-[9px] text-burgundy font-bold tracking-wider uppercase mt-3">
                    Placed 2025 • 14.5 LPA
                  </span>
                </div>

                <div className="p-4 border border-[#E2E8F0] bg-[#f8fafc] rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-bold tracking-widest text-gold-dark uppercase block mb-1">
                      TECH MAHINDRA
                    </span>
                    <h4 className="font-outfit font-bold text-xs text-[#0f172a] mb-1.5 leading-snug">
                      Amit Roy — Associate Analyst
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      &ldquo;My BBA internship matched me with core project leaders, converting directly into a full-time corporate offer.&rdquo;
                    </p>
                  </div>
                  <span className="text-[9px] text-burgundy font-bold tracking-wider uppercase mt-3">
                    Placed 2025 • 12.0 LPA
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Corporate Recruitment Partners Animated Logo Marquee */}
        <div className="border-t border-[#E2E8F0] pt-8">
          <div className="text-center mb-6">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-burgundy uppercase block mb-1 flex items-center justify-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-gold-dark" /> ESTEEMED RECRUITMENT & PLACEMENT PARTNERS
            </span>
            <p className="font-outfit text-xs text-gray-500 font-light">
              Multinational corporate recruiters hiring Bharti Vishwavidlavaya graduates
            </p>
          </div>

          {/* Marquee Track 1 (Left Shift) */}
          <div className="w-full overflow-hidden relative py-2 mb-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />

            <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {[...track1, ...track1, ...track1].map((p, idx) => (
                <div key={idx} className="inline-block mx-2">
                  <LogoImageCard partner={p} />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2 (Right Reverse Shift) */}
          <div className="w-full overflow-hidden relative py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />

            <div className="inline-block animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
              {[...track2, ...track2, ...track2].map((p, idx) => (
                <div key={idx} className="inline-block mx-2">
                  <LogoImageCard partner={p} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
