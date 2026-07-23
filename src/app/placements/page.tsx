"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Briefcase, Award, Building, UserCheck, CheckCircle2, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PLACEMENT_PARTNERS = [
  "Ashok Leyland", "Suzuki Motors", "Tata Consultancy Services (TCS)", "Wipro Ltd.", "L&T Construction",
  "Genpact", "Macleods Pharmaceuticals", "BOC India Ltd.", "Hira Power & Steel", "HCL Infosystems Ltd",
  "John Deere", "IDBI Bank Limited", "SBI Life Insurance", "I.B Group", "Vivo Smart Phone",
  "Maintec Technologies", "Mahindra & Mahindra Ltd.", "Bajaj Motors Ltd.", "Jindal Electrical", "Jain Irrigation Systems Ltd.",
  "Suzlon Energy Ltd.", "Yazaki Group", "Promac Advisors", "Dhoot Transmissions", "Silverton Structures",
  "Shriram Pistons & Rings", "Varroc Engineering", "Michigan Tyres", "GSS Projects", "Justdial Limited",
  "Blue Mount Appliances", "Ronch Polymer", "Reliance Jio Infocomm", "Eureka Forbes Ltd.", "Aditya Biotech Lab",
  "Bhive-Design", "Layam Flexi Solutions", "QSpiders", "Shree Ram Techno Solutions", "Infinite Computer Solutions",
  "Beyond Alliance", "UFlex Ltd.", "Marelli Motherson", "Bandhan Bank", "Advik Hi-Tech",
  "Ojas Agro Chemicals", "Sandeep Engineering", "Flash Viven Machining", "Apollo Pharmacy", "Kalpatru Power Transmission",
  "Pricol Pune", "Nature Touch Landscape", "Arts Watermatics", "AU Small Finance Bank", "Randstad",
  "Technotask", "Flipkart", "Paytm", "BM Shah", "AgroStar", "MedPlus", "Sybrox", "Square", "Sun Agro"
];

export default function PlacementsPage() {
  return (
    <SmoothScroll>
      <Header />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <Briefcase className="w-4 h-4" /> Training & Corporate Placements • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Career & Corporate Placements
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Empowering 5,000+ alumni globally through rigorous technical training, industry internship pipelines, and multi-national corporate placement drives.
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
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EAEAEA] shadow-sm">
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
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-6 border border-[#5b0e2d]/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-[#5b0e2d] mb-1">60+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Recruitment Partners</span>
              </div>
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-6 border border-[#5b0e2d]/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-[#5b0e2d] mb-1">5000+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Alumni Worldwide</span>
              </div>
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-6 border border-[#5b0e2d]/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-[#5b0e2d] mb-1">25+</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Years Legacy</span>
              </div>
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-6 border border-[#5b0e2d]/10 flex flex-col justify-center text-center">
                <span className="font-outfit text-3xl md:text-4xl font-extrabold text-[#5b0e2d] mb-1">100%</span>
                <span className="font-montserrat text-xs font-bold text-gray-600 uppercase">Placement Support</span>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Recruitment Partners Marquee / Grid */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-2">
              Our Esteemed Placement & Recruitment Partners
            </h2>
            <p className="font-outfit text-xs md:text-sm text-gray-500 font-light">
              Companies and organizations that regularly recruit Bharti Vishwavidyalaya graduates (Prospectus p. 36)
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLACEMENT_PARTNERS.map((partner, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(pIdx * 0.01, 0.3) }}
                className="bg-white rounded-xl p-3.5 border border-[#EAEAEA] shadow-2xs hover:border-[#5b0e2d]/30 hover:shadow-xs transition-all flex items-center justify-center text-center"
              >
                <span className="font-montserrat text-xs font-bold text-gray-700 leading-tight">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Placement Contact Footer */}
          <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-[#EAEAEA]">
            <p className="font-outfit text-sm text-gray-600 mb-3">
              Are you a corporate recruiter interested in conducting a campus placement drive?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5b0e2d] hover:bg-[#78143c] text-white rounded-xl text-xs font-montserrat font-bold transition-colors"
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
