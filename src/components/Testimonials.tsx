"use client";

import { useState } from "react";
import { Star, CheckCircle2, Building2, Sparkles } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  packageSecured?: string;
  batch: string;
  avatar: string;
  rating: number;
  quote: string;
  category: "TECH" | "LAW" | "PHARMA" | "MANAGEMENT";
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Amit Sahu",
    role: "DevOps Lead",
    company: "TCS",
    packageSecured: "14.5 LPA",
    batch: "MCA '24",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    rating: 5,
    quote: "The GPU server labs and faculty guidance prepared me for real engineering challenges, leading directly to my TCS offer.",
    category: "TECH"
  },
  {
    name: "Priya Sharma",
    role: "Legal Associate",
    company: "High Court Counsel",
    packageSecured: "12.0 LPA",
    batch: "B.A. LL.B '23",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    rating: 5,
    quote: "Simulated moot courts and legal aid clinics made courtroom advocacy second-nature right from senior year.",
    category: "LAW"
  },
  {
    name: "Rajesh Kumar",
    role: "R&D Scientist",
    company: "Lupin Ltd",
    packageSecured: "11.2 LPA",
    batch: "B.Pharm '24",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    quote: "Hands-on formulation labs and hospital training gave me the scientific edge to join Lupin's R&D division.",
    category: "PHARMA"
  },
  {
    name: "Ananya Deshmukh",
    role: "Brand Strategist",
    company: "Deloitte",
    packageSecured: "16.8 LPA",
    batch: "MBA '23",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    rating: 5,
    quote: "Executive case studies and business analytics projects prepared me to excel in corporate Deloitte interviews.",
    category: "MANAGEMENT"
  },
  {
    name: "Vikram Verma",
    role: "AI Engineer",
    company: "Wipro",
    packageSecured: "18.0 LPA",
    batch: "B.Tech CSE '24",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    rating: 5,
    quote: "Building neural networks and participating in national hackathons paved the way for my top-tier placement.",
    category: "TECH"
  },
  {
    name: "Siddharth Verma",
    role: "Corporate Counsel",
    company: "Ketan & Partners",
    packageSecured: "13.5 LPA",
    batch: "LL.M '23",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200",
    rating: 5,
    quote: "Specializing in corporate law at Bharti Vishwavidyalaya gave me direct expertise in compliance and advocacy.",
    category: "LAW"
  }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered = activeCategory === "ALL" 
    ? testimonialsData 
    : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-[#FCFAF7] border-b border-[#E2E8F0] overflow-hidden" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              STUDENT TESTIMONIALS
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Alumni Placements & Experiences
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "TECH", "LAW", "PHARMA", "MANAGEMENT"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-montserrat text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-burgundy text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 21st.dev Style Sleek Compact Marquee Carousel Track 1 */}
        <div className="w-full overflow-hidden relative py-2 mb-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />

          <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...filtered, ...filtered, ...filtered].map((t, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col justify-between w-[290px] sm:w-[320px] h-[230px] whitespace-normal bg-white border border-[#E2E8F0] rounded-2xl p-5 mx-2.5 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden align-top group depth-card"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-burgundy via-gold to-burgundy" />

                {/* Avatar Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover border border-burgundy/20 group-hover:border-burgundy transition-colors shrink-0"
                    />
                    <div>
                      <h4 className="font-outfit text-xs font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors flex items-center gap-1 leading-tight">
                        {t.name}
                        <CheckCircle2 className="w-3 h-3 text-burgundy fill-burgundy/10" />
                      </h4>
                      <span className="font-montserrat text-[9px] font-bold text-gray-400 block">
                        {t.batch}
                      </span>
                    </div>
                  </div>

                  {t.packageSecured && (
                    <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[9px] py-0.5 px-2 rounded-full inline-flex items-center gap-1 shrink-0">
                      <Sparkles className="w-2.5 h-2.5 text-gold-dark" /> {t.packageSecured}
                    </span>
                  )}
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-3 h-3 text-gold fill-gold" />
                  ))}
                  <span className="text-[9px] font-montserrat font-bold text-slate-500 ml-1">5.0 ALUMNI</span>
                </div>

                {/* Testimonial Quote */}
                <p className="font-outfit text-[12px] text-slate-700 font-normal leading-relaxed mb-3 italic line-clamp-3">
                  "{t.quote}"
                </p>

                {/* Footer Designation & Company */}
                <div className="border-t border-[#E2E8F0] pt-2.5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-slate-800 text-[10px] font-bold font-montserrat truncate">
                    <Building2 className="w-3 h-3 text-burgundy shrink-0" />
                    <span className="truncate">{t.role}</span>
                  </div>
                  <span className="text-[9px] font-montserrat font-extrabold text-gold-dark uppercase tracking-wider shrink-0 ml-2">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 21st.dev Style Track 2 */}
        <div className="w-full overflow-hidden relative py-1">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />

          <div className="inline-block animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...filtered, ...filtered, ...filtered].map((t, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col justify-between w-[290px] sm:w-[320px] h-[230px] whitespace-normal bg-white border border-[#E2E8F0] rounded-2xl p-5 mx-2.5 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden align-top group depth-card"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-burgundy to-gold" />

                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover border border-gold/30 group-hover:border-burgundy transition-colors shrink-0"
                    />
                    <div>
                      <h4 className="font-outfit text-xs font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors flex items-center gap-1 leading-tight">
                        {t.name}
                        <CheckCircle2 className="w-3 h-3 text-burgundy fill-burgundy/10" />
                      </h4>
                      <span className="font-montserrat text-[9px] font-bold text-gray-400 block">
                        {t.batch}
                      </span>
                    </div>
                  </div>

                  {t.packageSecured && (
                    <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[9px] py-0.5 px-2 rounded-full inline-flex items-center gap-1 shrink-0">
                      <Sparkles className="w-2.5 h-2.5 text-gold-dark" /> {t.packageSecured}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-3 h-3 text-gold fill-gold" />
                  ))}
                  <span className="text-[9px] font-montserrat font-bold text-slate-500 ml-1">5.0 ALUMNI</span>
                </div>

                <p className="font-outfit text-[12px] text-slate-700 font-normal leading-relaxed mb-3 italic line-clamp-3">
                  "{t.quote}"
                </p>

                <div className="border-t border-[#E2E8F0] pt-2.5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-slate-800 text-[10px] font-bold font-montserrat truncate">
                    <Building2 className="w-3 h-3 text-burgundy shrink-0" />
                    <span className="truncate">{t.role}</span>
                  </div>
                  <span className="text-[9px] font-montserrat font-extrabold text-gold-dark uppercase tracking-wider shrink-0 ml-2">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
