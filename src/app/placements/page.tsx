"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Briefcase, Award, CheckCircle2, Rocket, ArrowRight, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PARTNER_LOGOS, PartnerLogo } from "@/data/partnersData";

function PartnerLogoCard({ partner, index }: { partner: PartnerLogo; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.3) }}
      className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-burgundy/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center group cursor-pointer depth-card relative overflow-hidden"
    >
      {/* Top Category Badge */}
      <span className="text-[8px] font-montserrat font-extrabold text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full uppercase tracking-wider mb-3">
        {partner.category}
      </span>

      {/* Corporate Logo / Fallback Badge */}
      <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-[#E2E8F0] flex items-center justify-center p-2.5 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-xs">
        {!imgError ? (
          <img
            src={partner.logo}
            alt={partner.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <div
            className="w-full h-full rounded-xl flex items-center justify-center font-montserrat text-xs font-extrabold text-white shadow-xs"
            style={{ backgroundColor: partner.brandColor || "#f60401" }}
          >
            {partner.shortName.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Company Name */}
      <span className="font-outfit text-xs font-extrabold text-[#0f172a] group-hover:text-burgundy transition-colors leading-snug">
        {partner.name}
      </span>

      {/* Decorative hover accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-burgundy/0 group-hover:bg-burgundy transition-colors duration-300" />
    </motion.div>
  );
}

export default function PlacementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "TECH", "AUTO", "FINANCE", "PHARMA", "CONSTRUCTION", "RETAIL"];

  const filteredPartners = selectedCategory === "ALL"
    ? PARTNER_LOGOS
    : PARTNER_LOGOS.filter((p) => p.category === selectedCategory);

  return (
    <SmoothScroll>
      <Header />
      <main className="min-h-screen bg-[#FCFAF7] text-[#0f172a] pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FCFAF7] via-[#f8fafc] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#E2E8F0] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4 border border-burgundy/10">
              <Briefcase className="w-4 h-4" /> Training & Corporate Placements • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-4">
              Career & Corporate Placements
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Empowering 5,000+ alumni globally through technical training, industry internship pipelines, and multi-national corporate recruitment drives.
            </p>
          </div>
        </section>

        {/* ISRO Achievement Spotlight Banner */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-14">
          <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-8 md:p-10 border border-[#334155] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/10 to-transparent pointer-events-none" />

            <div className="space-y-3 z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 text-xs font-montserrat font-bold tracking-wide uppercase">
                <Rocket className="w-4 h-4" /> National Achievement Spotlight
              </div>
              <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-white">
                Student Selected in ISRO in 2024
              </h2>
              <p className="font-outfit text-sm text-gray-300 font-light leading-relaxed">
                Bharti Vishwavidyalaya takes immense pride in celebrating <strong className="text-gold font-semibold">Derhu Prasad</strong> for securing a prestigious selection at the Indian Space Research Organisation (ISRO) in 2024.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center shrink-0 w-full md:w-64 z-10">
              <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-outfit font-extrabold text-base text-white">Derhu Prasad</h3>
              <p className="text-xs text-blue-300 font-montserrat font-semibold">ISRO Selection 2024</p>
            </div>
          </div>
        </div>

        {/* Training & Placement Cell Overview */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Cell Functions */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
              <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-4">
                Career Guidance & Counseling Cell Functions
              </h2>
              <p className="font-outfit text-sm text-gray-600 font-light mb-6 leading-relaxed">
                The Training & Placement Department acts as a vital bridge between students and top tier national/international employers, organizing recruitment drives, pre-placement workshops, and skill customization modules.
              </p>
              
              <ul className="space-y-4">
                {[
                  "On-job and off-job technical and soft-skill enhancement training",
                  "Campus recruitment drives with potential national & multinational partners",
                  "Career counseling, mock interviews, and resume building workshops",
                  "Collaborations with government and non-government research organizations",
                  "Information hub for higher education, scholarships, and competitive examinations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-outfit text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-burgundy/5 rounded-2xl p-6 border border-burgundy/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-burgundy mb-1">120+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Recruitment Partners</span>
              </div>
              <div className="bg-burgundy/5 rounded-2xl p-6 border border-burgundy/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-burgundy mb-1">5000+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Alumni Worldwide</span>
              </div>
              <div className="bg-burgundy/5 rounded-2xl p-6 border border-burgundy/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-burgundy mb-1">25+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Years Legacy</span>
              </div>
              <div className="bg-burgundy/5 rounded-2xl p-6 border border-burgundy/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-burgundy mb-1">100%</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Placement Support</span>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Corporate Recruitment Partners Logo Showcase Grid */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <span className="font-montserrat text-[10px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-burgundy" /> CORPORATE NETWORK
              </span>
              <h2 className="font-outfit text-2xl md:text-4xl font-extrabold text-[#0f172a]">
                Our Esteemed Placement & Recruitment Partners
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-montserrat text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-burgundy text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-[#E2E8F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredPartners.map((partner, pIdx) => (
              <PartnerLogoCard key={partner.name + pIdx} partner={partner} index={pIdx} />
            ))}
          </div>

          {/* Placement Contact Footer */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-outfit text-lg font-extrabold text-[#0f172a] mb-2">
              Are you a corporate recruiter interested in conducting a campus placement drive?
            </h3>
            <p className="font-outfit text-xs text-gray-500 max-w-xl mx-auto mb-6">
              Our Training & Placement Cell provides state-of-the-art auditorium spaces, online assessment labs, and dedicated lodging facilities for visiting recruitment teams.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy hover:bg-[#cc0000] text-white rounded-full text-xs font-montserrat font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-burgundy/30 cursor-pointer"
            >
              Contact Placement Cell <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
