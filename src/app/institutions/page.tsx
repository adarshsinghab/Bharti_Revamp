"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Building2, Stethoscope, HeartPulse, Sprout, Wrench, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const INSTITUTIONS = [
  {
    id: "ayurved",
    name: "Bharti Ayurved Medical College & Hospital",
    tagline: "Bridging Ancient Wisdom & Modern Clinical Medicine",
    affiliation: "Affiliated to Ayush University, Raipur",
    icon: Stethoscope,
    badge: "AYUSH Approved",
    pageRef: "Prospectus p. 30",
    programs: [
      {
        degree: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
        duration: "5.5 Years (5 Years + 6 Months Internship)",
        eligibility: "Passed 10+2 with minimum aggregate 50% in PCB as compulsory subjects + NEET entrance exam qualified."
      }
    ],
    features: [
      "Integration of Ancient Ayurveda and Modern Clinical Research",
      "In-house 100+ Bedded Ayurvedic Hospital & Panchakarma Center",
      "Specialized Botanical Gardens & Herbariums",
      "Under guidance of experienced Ayurvedic Vaidyas & Clinical Doctors",
      "Ragging-free campus with 24/7 medical supervision"
    ],
    careers: ["Ayurvedic Physician", "Panchakarma Specialist", "AYUSH Officer", "Clinical Researcher", "Hospital Administrator"]
  },
  {
    id: "nursing",
    name: "Bharti College of Nursing",
    tagline: "Empowering Compassionate Healthcare Professionals",
    affiliation: "Affiliated to Ayush University, Raipur",
    icon: HeartPulse,
    badge: "INC & Ayush Approved",
    pageRef: "Prospectus p. 31",
    programs: [
      {
        degree: "Bachelor of Science in Nursing (B.Sc Nursing)",
        duration: "4 Years (Full Time)",
        eligibility: "Passed 10+2 with Physics, Chemistry, Biology & English as compulsory subjects + CG VYAPAM (PNT Entrance)."
      }
    ],
    features: [
      "State-of-the-art Clinical Simulation Labs & Anatomy Models",
      "Hands-on Hospital Rotations in Multi-Specialty Partner Hospitals",
      "Dedicated Nursing Service & Community Health Exposure",
      "Code of Ethics & Leadership Development Training",
      "Separate Girls & Boys Hostels with 24/7 Security"
    ],
    careers: ["Nursing Superintendent", "Community Health Nurse (CHN)", "Military Nurse", "Critical Care Specialist", "Nurse Educator"]
  },
  {
    id: "agriculture",
    name: "Bhartiya College of Agriculture",
    tagline: "Pioneering Sustainable Farming & Agricultural Innovation",
    affiliation: "Affiliated to Indira Gandhi Krishi Vishwavidyalaya (IGKV), Raipur",
    icon: Sprout,
    badge: "IGKV Affiliated",
    pageRef: "Prospectus p. 32",
    programs: [
      {
        degree: "B.Sc (Hons) Agriculture",
        duration: "4 Years (Full Time)",
        eligibility: "Passed 10+2 with Agriculture / PCB / PCM compulsory (45% SC/ST, 50% OBC/Other) + CG-PAT Entrance."
      },
      {
        degree: "B.Tech (Agricultural Engineering)",
        duration: "4 Years (Full Time)",
        eligibility: "Passed 10+2 with PCM compulsory + CG-PET Entrance."
      }
    ],
    features: [
      "Agronomy, Soil Science, Horticulture & Plant Pathology Labs",
      "Experimental Farm Plots & Greenhouses on Campus",
      "Field-based Practical Training & Farmers Outreach Projects",
      "Focus on Smart Agriculture, Drones & Sustainable Bio-tech",
      "Preparation for NABARD, ICAR & State Agri Service Exams"
    ],
    careers: ["Agriculture Extension Officer (RAEO)", "Bank AFO", "Soil Conservation Officer", "Agribusiness Entrepreneur", "Farm Manager"]
  },
  {
    id: "iti",
    name: "Sun Private ITI",
    tagline: "Industrial Skill Mastery & Technical Training",
    affiliation: "Affiliated to NCVT & DGT, Ministry of Skill Development, New Delhi",
    icon: Wrench,
    badge: "NCVT & DGT Approved",
    pageRef: "Prospectus p. 33",
    programs: [
      {
        degree: "Computer Operator & Programming Assistant (COPA)",
        duration: "1 Year",
        eligibility: "Passed 10th class under 10+2 system."
      },
      {
        degree: "Steno (Hindi)",
        duration: "1 Year",
        eligibility: "Passed 10th class under 10+2 system with Hindi."
      },
      {
        degree: "Electrician Trade",
        duration: "2 Years",
        eligibility: "Passed 10th class under 10+2 system with Science & Maths."
      },
      {
        degree: "Fitter Trade",
        duration: "2 Years",
        eligibility: "Passed 10th class under 10+2 system with Science & Maths."
      }
    ],
    features: [
      "Fully equipped Machine Workshops, Electrical Wiring & Fitting Labs",
      "Hands-on Industrial Apprentice Training",
      "Direct Recruitment pathways in Railways, ISRO, SAIL, NTPC & BHEL",
      "Government Trade Certification (NCVT)",
      "Contact: Chandkhuri, Durg | 9589158888, 8103853376"
    ],
    careers: ["Railways Technician", "PSU Apprentice (NTPC/SAIL)", "Industrial Electrician", "Precision Fitter", "Office Steno"]
  },
  {
    id: "school",
    name: "Sun Public School",
    tagline: "Holistic Foundation from Nursery to Class 12th",
    affiliation: "Affiliated to CBSE, New Delhi (Affiliation No: 3330215)",
    icon: GraduationCap,
    badge: "CBSE Affiliated",
    pageRef: "Prospectus p. 34",
    programs: [
      {
        degree: "Nursery to 12th CBSE (English Medium)",
        duration: "K-12 Day Boarding School",
        eligibility: "Open Admissions for English Medium CBSE Curriculum."
      }
    ],
    features: [
      "Co-curricular & Activity Based Learning Methodology",
      "Hi-tech Computer, Physics, Chemistry & Biology Laboratories",
      "Personality Development & Creative Model Making Workshops",
      "Sports Complex, Yoga & Safe Bus Transport Facilities",
      "Website: www.sunschool.co.in | 78982-11111, 91091-86601"
    ],
    careers: ["Holistic K-12 Foundation for Higher Education & National Competitions"]
  }
];

export default function InstitutionsPage() {
  const [activeTab, setActiveTab] = useState<string>("ayurved");

  const currentInst = INSTITUTIONS.find((inst) => inst.id === activeTab) || INSTITUTIONS[0];

  return (
    <SmoothScroll>
      <Header />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Page Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-4 h-4" /> Group Institutions & Sister Campuses
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Sister Colleges & Specialized Wings
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Explore specialized institutions operating under the Bharti Shikshan Samiti umbrella, including Ayurvedic Medical Hospital, Nursing, Agriculture, ITI, and Public School.
            </p>
          </div>
        </section>

        {/* Institution Selector Navigation */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none border-b border-gray-200">
            {INSTITUTIONS.map((inst) => {
              const IconComp = inst.icon;
              const isActive = activeTab === inst.id;
              return (
                <button
                  key={inst.id}
                  onClick={() => setActiveTab(inst.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-montserrat text-xs font-bold transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-[#5b0e2d] text-white shadow-lg shadow-[#5b0e2d]/20 scale-102"
                      : "bg-white text-gray-700 border border-[#EAEAEA] hover:bg-gray-50"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-gold" : "text-[#5b0e2d]"}`} />
                  {inst.name.split(" ")[1]} {inst.name.split(" ")[2]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Institution Details Showcase */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            key={currentInst.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-[#EAEAEA] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5b0e2d] via-[#d4af37] to-[#5b0e2d]" />

            {/* Institution Badge & Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-montserrat text-xs font-bold tracking-wide">
                {currentInst.badge}
              </span>
              <span className="text-xs font-montserrat font-semibold text-gray-400">
                {currentInst.affiliation} • {currentInst.pageRef}
              </span>
            </div>

            <h2 className="font-outfit text-2xl md:text-4xl font-extrabold text-[#0f172a] mb-3">
              {currentInst.name}
            </h2>
            <p className="font-outfit text-base text-[#5b0e2d] font-medium mb-8">
              {currentInst.tagline}
            </p>

            {/* Grid Layout: Programs Offered vs Key Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
              
              {/* Programs Column */}
              <div className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#5b0e2d]" /> Programs Offered
                </h3>
                <div className="space-y-4">
                  {currentInst.programs.map((prog, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-2xs">
                      <h4 className="font-outfit font-extrabold text-sm text-[#0f172a] mb-1">{prog.degree}</h4>
                      <p className="text-xs font-montserrat text-[#5b0e2d] font-bold mb-2">Duration: {prog.duration}</p>
                      <p className="text-xs font-outfit text-gray-500 font-light leading-relaxed">
                        <strong className="font-semibold text-gray-700">Eligibility:</strong> {prog.eligibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Features Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#0f172a] mb-4">
                    Key Infrastructure & Features
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {currentInst.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm font-outfit text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Pathways Banner */}
                <div className="bg-[#5b0e2d]/5 rounded-2xl p-5 border border-[#5b0e2d]/10">
                  <span className="text-xs font-montserrat font-bold text-[#5b0e2d] uppercase tracking-wider block mb-2">
                    Career Opportunities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentInst.careers.map((car, cIdx) => (
                      <span key={cIdx} className="px-2.5 py-1 bg-white text-gray-700 rounded-lg text-xs font-outfit font-medium border border-gray-200">
                        {car}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-outfit text-gray-500">
                Direct Admission Enquiries for {currentInst.name.split(" ")[0]} {currentInst.name.split(" ")[1]}
              </span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b0e2d] hover:bg-[#78143c] text-white rounded-xl text-xs font-montserrat font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                Inquire Admission <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
