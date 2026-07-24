"use client";

import { useState } from "react";
import { Star, CheckCircle2, Quote, Award, Building2, Sparkles } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  packageSecured?: string;
  batch: string;
  avatar: string;
  rating: number;
  quote: string;
  category: "TECH" | "LAW" | "PHARMA" | "MANAGEMENT" | "GLOBAL";
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Amit Sahu",
    role: "DevOps Lead",
    company: "Tata Consultancy Services",
    packageSecured: "14.5 LPA",
    batch: "MCA '24",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
    rating: 5,
    quote: "The high-performance GPU lab clusters and faculty mentoring at Bharti Vishwavidyalaya gave me a massive headstart. The placement training cell simulated technical rounds perfectly.",
    category: "TECH"
  },
  {
    name: "Priya Sharma",
    role: "Senior Legal Associate",
    company: "High Court Counsel",
    packageSecured: "12.0 LPA",
    batch: "B.A. LL.B '23",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250",
    rating: 5,
    quote: "Our moot court competitions and legal aid clinics made public advocacy second-nature. The professors simulated real courtroom proceedings, teaching us precise legal briefing.",
    category: "LAW"
  },
  {
    name: "Rajesh Kumar",
    role: "Formulation R&D Scientist",
    company: "Lupin Pharmaceuticals",
    packageSecured: "11.2 LPA",
    batch: "B.Pharm '24",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
    rating: 5,
    quote: "My years in the pharmaceutical research lab were defining. Formulating compounds and completing hospital internships gave me the confidence to join a top global laboratory.",
    category: "PHARMA"
  },
  {
    name: "Ananya Deshmukh",
    role: "Strategic Brand Manager",
    company: "Deloitte Digital",
    packageSecured: "16.8 LPA",
    batch: "MBA '23",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250",
    rating: 5,
    quote: "The executive case studies and industry mentorship at Bharti Vishwavidyalaya shaped my corporate vision. Working on real marketing analytics projects set me apart in Deloitte interviews.",
    category: "MANAGEMENT"
  },
  {
    name: "Vikramaditya Verma",
    role: "AI Systems Engineer",
    company: "Wipro Technologies",
    packageSecured: "18.0 LPA",
    batch: "B.Tech CSE '24",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250",
    rating: 5,
    quote: "From building neural networks in the AI lab to competing in national hackathons, Bharti Vishwavidyalaya provided the resources to land a top tier engineering package.",
    category: "TECH"
  },
  {
    name: "Siddharth Verma",
    role: "Corporate Law Advisor",
    company: "Ketan & Partners",
    packageSecured: "13.5 LPA",
    batch: "LL.M '23",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250",
    rating: 5,
    quote: "Specializing in corporate compliance at Bharti Vishwavidyalaya gave me rigorous exposure to statutory regulations. The moot court sessions prepared me directly for client court trials.",
    category: "LAW"
  }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered = activeCategory === "ALL" 
    ? testimonialsData 
    : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-b border-[#E2E8F0] overflow-hidden" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              21ST DEV TESTIMONIAL SHOWCASE
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Student Voices & Global Placements
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "TECH", "LAW", "PHARMA", "MANAGEMENT"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-montserrat text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-burgundy text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 21st.dev Style Marquee Carousel Track 1 (Left Shift) */}
        <div className="w-full overflow-hidden relative py-4 mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />

          <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...filtered, ...filtered, ...filtered].map((t, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col justify-between w-[310px] sm:w-[380px] md:w-[420px] whitespace-normal bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 mx-3 shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden align-top group depth-card"
              >
                {/* Accent Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-burgundy via-gold to-burgundy" />

                {/* Top Avatar & Package Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-burgundy/20 group-hover:border-burgundy transition-colors"
                    />
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors flex items-center gap-1">
                        {t.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-burgundy fill-burgundy/10" />
                      </h4>
                      <span className="font-montserrat text-[10px] font-bold text-gray-400 block">
                        {t.batch}
                      </span>
                    </div>
                  </div>

                  {t.packageSecured && (
                    <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[10px] py-1 px-2.5 rounded-full inline-flex items-center gap-1 shrink-0">
                      <Sparkles className="w-3 h-3 text-gold-dark" /> {t.packageSecured}
                    </span>
                  )}
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                  <span className="text-[10px] font-montserrat font-bold text-slate-500 ml-1">5.0 / 5.0 VERIFIED</span>
                </div>

                {/* Testimonial Quote */}
                <p className="font-outfit text-[13px] md:text-[14px] text-slate-700 font-normal leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Footer Designation & Company */}
                <div className="border-t border-[#E2E8F0] pt-4 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-slate-800 text-[11px] font-bold font-montserrat">
                    <Building2 className="w-3.5 h-3.5 text-burgundy shrink-0" />
                    <span>{t.role}</span>
                  </div>
                  <span className="text-[10px] font-montserrat font-extrabold text-gold-dark uppercase tracking-wider">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 21st.dev Style Marquee Carousel Track 2 (Reverse Shift) */}
        <div className="w-full overflow-hidden relative py-2">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#FCFAF7] via-[#FCFAF7]/80 to-transparent z-10 pointer-events-none" />

          <div className="inline-block animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...filtered, ...filtered, ...filtered].map((t, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col justify-between w-[310px] sm:w-[380px] md:w-[420px] whitespace-normal bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 mx-3 shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden align-top group depth-card"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-burgundy to-gold" />

                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/30 group-hover:border-burgundy transition-colors"
                    />
                    <div>
                      <h4 className="font-outfit text-sm font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors flex items-center gap-1">
                        {t.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-burgundy fill-burgundy/10" />
                      </h4>
                      <span className="font-montserrat text-[10px] font-bold text-gray-400 block">
                        {t.batch}
                      </span>
                    </div>
                  </div>

                  {t.packageSecured && (
                    <span className="bg-burgundy/5 text-burgundy border border-burgundy/10 font-montserrat font-extrabold text-[10px] py-1 px-2.5 rounded-full inline-flex items-center gap-1 shrink-0">
                      <Sparkles className="w-3 h-3 text-gold-dark" /> {t.packageSecured}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                  <span className="text-[10px] font-montserrat font-bold text-slate-500 ml-1">5.0 / 5.0 VERIFIED</span>
                </div>

                <p className="font-outfit text-[13px] md:text-[14px] text-slate-700 font-normal leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                <div className="border-t border-[#E2E8F0] pt-4 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-slate-800 text-[11px] font-bold font-montserrat">
                    <Building2 className="w-3.5 h-3.5 text-burgundy shrink-0" />
                    <span>{t.role}</span>
                  </div>
                  <span className="text-[10px] font-montserrat font-extrabold text-gold-dark uppercase tracking-wider">
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
