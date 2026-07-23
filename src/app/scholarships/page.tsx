"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import SectionScrollHandler from "@/components/SectionScrollHandler";
import { GraduationCap, Award, Percent, Phone, Heart, Landmark, CheckCircle2, ShieldCheck, Calculator, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ScholarshipsPage() {
  const [marks, setMarks] = useState<number>(88);
  const [category, setCategory] = useState<string>("general");

  const calculateScholarship = () => {
    let percentage = 0;
    let reason = "Standard Tuition Fee";

    if (marks >= 96) {
      percentage = 100;
      reason = "100% Full Tuition Waiver (Merit Score >= 96%)";
    } else if (marks >= 85) {
      percentage = 10;
      reason = "10% Merit Concession (Merit Score 85% - 95%)";
    }

    if (category === "girl_child") {
      percentage = Math.max(percentage, 20);
      reason = "20% Girl Child Special Scholarship";
    } else if (category === "kissan" || category === "divyang") {
      percentage = Math.max(percentage, 20);
      reason = "20% Farmers' Children / PWD Concession";
    } else if (category === "reserve" || category === "sports" || category === "bpl") {
      percentage = Math.max(percentage, 10);
      reason = "10% Reserved Category / Sports / BPL Concession";
    }

    return { percentage, reason };
  };

  const { percentage, reason } = calculateScholarship();

  return (
    <SmoothScroll>
      <Header />
      <SectionScrollHandler />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <Award className="w-4 h-4" /> Financial Aid & Scholarships • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Fee Structure & Merit Scholarships
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              We believe quality higher education should be accessible to all deserving students through merit concessions, government scholarships, and bank education loan tie-ups.
            </p>
          </div>
        </section>

        {/* INTERACTIVE SCHOLARSHIP CALCULATOR WIDGET (SOOTHING LIGHT PALETTE) */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EAEAEA] shadow-md relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-montserrat font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" /> Interactive Scholarship Estimator
              </div>
              <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                Check Your Scholarship Eligibility Instantly
              </h2>
              <p className="font-outfit text-xs md:text-sm text-gray-500 font-light">
                Adjust your 12th / Qualifying Marks and select your category to calculate your estimated tuition fee concession.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Input Controls Column */}
              <div className="lg:col-span-7 space-y-6 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div>
                  <div className="flex justify-between items-center mb-2 font-outfit text-xs font-semibold text-gray-700">
                    <span>Class 12th / Qualifying Score (%)</span>
                    <span className="text-[#5b0e2d] font-bold text-base">{marks}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={marks}
                    onChange={(e) => setMarks(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5b0e2d]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-montserrat mt-1">
                    <span>50%</span>
                    <span>85% (10% Waiver)</span>
                    <span>96%+ (100% Waiver)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-outfit font-semibold text-gray-700 mb-2">
                    Special Category Eligibility
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-[#5b0e2d] cursor-pointer"
                  >
                    <option value="general">General Candidate</option>
                    <option value="girl_child">Single Girl Child (20% Scholarship)</option>
                    <option value="kissan">Farmers' Son / Daughter (20% Scholarship)</option>
                    <option value="divyang">Divyang / PWD Student (20% Scholarship)</option>
                    <option value="reserve">Reserved Category SC/ST/OBC (10% Scholarship)</option>
                    <option value="sports">National Sports Player (10% Scholarship)</option>
                    <option value="bpl">BPL Card Holder (10% Scholarship)</option>
                  </select>
                </div>
              </div>

              {/* Instant Output Display Column */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#5b0e2d] to-[#3a091d] rounded-2xl p-6 border border-gold/30 text-center flex flex-col items-center justify-center">
                <span className="font-montserrat text-[10px] font-bold text-gold uppercase tracking-widest block mb-1">
                  ESTIMATED TUITION CONCESSION
                </span>
                <span className="font-outfit text-5xl md:text-6xl font-extrabold text-gold my-2">
                  {percentage}%
                </span>
                <p className="font-outfit text-xs text-gray-200 font-light mb-4 px-2 leading-relaxed">
                  {reason}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[#0F172A] hover:bg-gold-light rounded-xl font-montserrat text-xs font-bold transition-all shadow-md"
                >
                  Apply with Scholarship <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Section 1: Fee Structure & Merit-Based Scholarships */}
        <div id="fee-structure" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAEAEA] shadow-sm mb-12">
            <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-2 flex items-center gap-2">
              <Percent className="w-6 h-6 text-[#5b0e2d]" /> Approved Fee Structure & Merit Concessions
            </h2>
            <p className="font-outfit text-xs md:text-sm text-gray-500 font-light mb-6">
              Tuition fee concessions awarded on academic excellence in qualifying examinations (Prospectus p. 39 & Shulk Nirdharan)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-5 border border-[#5b0e2d]/10 text-center">
                <span className="font-outfit text-3xl font-extrabold text-[#5b0e2d] block mb-1">100%</span>
                <span className="font-montserrat text-xs font-bold text-gray-800 uppercase block mb-1">Tuition Scholarship</span>
                <span className="text-xs font-outfit text-gray-500">For 96% and above marks</span>
              </div>
              <div className="bg-[#5b0e2d]/5 rounded-2xl p-5 border border-[#5b0e2d]/10 text-center">
                <span className="font-outfit text-3xl font-extrabold text-[#5b0e2d] block mb-1">10%</span>
                <span className="font-montserrat text-xs font-bold text-gray-800 uppercase block mb-1">Tuition Scholarship</span>
                <span className="text-xs font-outfit text-gray-500">For 85% to 95% marks</span>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 text-center">
                <span className="font-outfit text-3xl font-extrabold text-amber-800 block mb-1">20%</span>
                <span className="font-montserrat text-xs font-bold text-amber-900 uppercase block mb-1">Girl Child Scholarship</span>
                <span className="text-xs font-outfit text-amber-700">For single girl child (divided for twins)</span>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 text-center">
                <span className="font-outfit text-3xl font-extrabold text-emerald-800 block mb-1">20%</span>
                <span className="font-montserrat text-xs font-bold text-emerald-900 uppercase block mb-1">Kissan & Divyang</span>
                <span className="text-xs font-outfit text-emerald-700">For Farmers' children & PWD students</span>
              </div>
            </div>

            {/* Special Categories List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5b0e2d] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-outfit text-gray-700">
                  <strong className="font-semibold text-gray-900">10% Reserve Category:</strong> Granted to SC, ST, and OBC students.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5b0e2d] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-outfit text-gray-700">
                  <strong className="font-semibold text-gray-900">10% National Players:</strong> Granted to students with recognized National Sports representation.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5b0e2d] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-outfit text-gray-700">
                  <strong className="font-semibold text-gray-900">10% BPL Card Holders:</strong> Granted to candidates holding valid Below Poverty Line cards.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5b0e2d] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-outfit text-gray-700">
                  <strong className="font-semibold text-gray-900">Course Scope:</strong> Merit scholarships are applicable on selected degree programs as per university norms.
                </span>
              </div>
            </div>

          </div>

          {/* Section 2: Government Scholarships */}
          <div className="bg-white rounded-3xl p-8 border border-[#EAEAEA] shadow-sm mb-12">
            <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#5b0e2d]" /> State & Central Government Scholarships
            </h2>
            <p className="font-outfit text-xs md:text-sm text-gray-500 font-light mb-6">
              Assistance offered under Chhattisgarh State Post-Matric & Central Sector Schemes for meritorious and reserved category candidates.
            </p>

            <div className="space-y-4 text-xs md:text-sm font-outfit text-gray-600">
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <h4 className="font-bold text-gray-800 mb-1">State Scholarship (Chhattisgarh Resident):</h4>
                <p className="font-light">
                  Must be a permanent resident of Chhattisgarh. Annual family income threshold: ≤ Rs 2,50,000 for SC/ST, and ≤ Rs 1,00,000 for OBC (Non-Creamy Layer).
                </p>
              </div>
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <h4 className="font-bold text-gray-800 mb-1">Central Sector Scholarship:</h4>
                <p className="font-light">
                  Supports meritorious students from economically weaker sections scoring &gt; 80th percentile in 10+2. Family annual income limit ≤ Rs 8,00,000 per annum.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Bank Education Loan Contacts */}
          <div className="bg-gradient-to-r from-[#5b0e2d] via-[#78143c] to-[#5b0e2d] text-white rounded-3xl p-8 md:p-10 shadow-md">
            <h2 className="font-outfit text-2xl font-extrabold text-white mb-2 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-gold" /> Bank Education Loan Assistance
            </h2>
            <p className="font-outfit text-xs md:text-sm text-gray-300 font-light mb-8">
              Nationalized and private banks provide education loan financing covering college fees, hostel charges, and study expenses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* SBI */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                <h3 className="font-outfit font-extrabold text-lg text-white mb-1">SBI Bank</h3>
                <p className="text-xs text-gray-300 mb-4 font-montserrat font-medium">State Bank of India</p>
                <div className="space-y-2 text-xs font-outfit text-gold">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> +91 97547 58609
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> +91 99815 59477
                  </p>
                </div>
              </div>

              {/* Bank of Baroda */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                <h3 className="font-outfit font-extrabold text-lg text-white mb-1">Bank of Baroda</h3>
                <p className="text-xs text-gray-300 mb-4 font-montserrat font-medium">Bank of Baroda Helpdesk</p>
                <div className="space-y-2 text-xs font-outfit text-gold">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> +91 78922 63697
                  </p>
                </div>
              </div>

              {/* HDFC */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                <h3 className="font-outfit font-extrabold text-lg text-white mb-1">HDFC Bank</h3>
                <p className="text-xs text-gray-300 mb-4 font-montserrat font-medium">HDFC Education Loans</p>
                <div className="space-y-2 text-xs font-outfit text-gold">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> +91 91798 37545
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
