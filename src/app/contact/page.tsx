"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import SectionScrollHandler from "@/components/SectionScrollHandler";
import { MapPin, Phone, Mail, Clock, Send, Navigation, CheckCircle2, FileText, UserCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <SmoothScroll>
      <Header />
      <SectionScrollHandler />
      <main className="min-h-screen bg-[#FAF8F5] text-[#121212] pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FAF8F5] via-[#FCFAF7] to-[#F3EFEA] text-[#0f172a] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#EAEAEA] mb-12">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-montserrat font-bold tracking-widest uppercase mb-4">
              <MapPin className="w-4 h-4" /> Contact Us & Location Map • Prospectus 2026
            </div>
            <h1 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#5b0e2d] mb-4">
              Get in Touch with Admission Helpdesk
            </h1>
            <p className="font-outfit text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              Have questions regarding admissions, course eligibility, fees, or campus visits? Connect with our dedicated counselor desk.
            </p>
          </div>
        </section>

        {/* Contact Info & Inquiry Form Container */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Direct Helpline Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-[#EAEAEA] shadow-sm">
                <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-6">
                  Admission Enquiries
                </h2>

                <div className="space-y-6 text-sm font-outfit">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#5b0e2d]/10 text-[#5b0e2d] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs font-montserrat uppercase mb-1">Direct Helplines</h4>
                      <p className="text-gray-600 font-semibold">+91 62322 21101 / 02 / 03 / 04 / 05 / 06 / 07</p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">Mon - Sat: 9:00 AM to 5:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#5b0e2d]/10 text-[#5b0e2d] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs font-montserrat uppercase mb-1">Email Addresses</h4>
                      <p className="text-gray-600 font-semibold">info@bhartiuniversity.org</p>
                      <p className="text-gray-500 font-light text-xs">bhartiuniversity.in@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#5b0e2d]/10 text-[#5b0e2d] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs font-montserrat uppercase mb-1">Campus Address</h4>
                      <p className="text-gray-700 font-medium">Bharti Vishwavidyalaya</p>
                      <p className="text-gray-500 font-light leading-relaxed">
                        Chandkhuri, Distt. Durg, Chhattisgarh, India, Pin Code: 491001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sister Institutions Quick Contacts */}
              <div className="bg-[#5b0e2d]/5 rounded-3xl p-6 border border-[#5b0e2d]/10">
                <h3 className="font-outfit text-base font-extrabold text-[#5b0e2d] mb-3">
                  Sister Institutions Helpline
                </h3>
                <ul className="space-y-2 text-xs font-outfit text-gray-600">
                  <li><strong>Sun Private ITI:</strong> 9589158888, 8103853376, 9109186606</li>
                  <li><strong>Sun Public School:</strong> 7898211111, 9109186601, 9109186607</li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div id="admission-process" className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-[#EAEAEA] shadow-sm scroll-mt-32">
              <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-2">
                Send Admission Query & Online Application
              </h2>
              <p className="font-outfit text-xs md:text-sm text-gray-500 font-light mb-6">
                Fill in your details below and an academic counselor will contact you regarding eligibility, fee details, and admission procedure.
              </p>

              {formSubmitted ? (
                <div className="text-center py-12 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-outfit text-lg font-bold text-emerald-900 mb-1">Inquiry Submitted Successfully!</h3>
                  <p className="text-xs text-emerald-700 font-light mb-4">
                    Thank you for reaching out. Our admission counseling team will call you back soon.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-montserrat font-bold"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-outfit text-xs md:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#5b0e2d]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#5b0e2d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#5b0e2d]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Program / Faculty of Interest</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#5b0e2d]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Faculty of Pharmacy">Faculty of Pharmacy</option>
                      <option value="Faculty of Law">Faculty of Law</option>
                      <option value="Faculty of Engineering & Tech">Faculty of Engineering & Tech</option>
                      <option value="Faculty of Education">Faculty of Education</option>
                      <option value="Faculty of Science">Faculty of Science</option>
                      <option value="Faculty of Commerce & Management">Faculty of Commerce & Management</option>
                      <option value="Faculty of Arts & Humanities">Faculty of Arts & Humanities</option>
                      <option value="Bharti Ayurved Medical College">Bharti Ayurved Medical College (BAMS)</option>
                      <option value="Bharti College of Nursing">Bharti College of Nursing (B.Sc Nursing)</option>
                      <option value="Bhartiya College of Agriculture">Bhartiya College of Agriculture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Your Message / Query</label>
                    <textarea
                      rows={4}
                      placeholder="Mention your query regarding admission process, fee structure, hostel, etc..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#5b0e2d]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#5b0e2d] hover:bg-[#78143c] text-white rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Enquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Required Documents Section */}
        <div id="required-documents" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAEAEA] shadow-sm">
            <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-2 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#5b0e2d]" /> Required Documents Checklist for Admissions
            </h2>
            <p className="font-outfit text-xs md:text-sm text-gray-500 font-light mb-6">
              Essential certificates & documents required during reporting and verification (Prospectus p. 38)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-outfit">
              {[
                "10th Standard Marksheet & Passing Certificate",
                "12th Standard Marksheet (10+2 system)",
                "Graduation Marksheets & Degree (For PG applicants)",
                "Transfer Certificate (TC) & Character Certificate",
                "Migration Certificate (for non-CG board/university)",
                "Domicile Certificate (Chhattisgarh Resident proof)",
                "Caste Certificate (SC/ST/OBC non-creamy layer)",
                "Entrance Score Card (NEET / CG-PAT / CG-PET / PNT if applicable)",
                "Income Certificate (for Govt Scholarship applicants)",
                "Aadhaar Card copy & 6 Passport size photographs"
              ].map((docItem, dIdx) => (
                <div key={dIdx} className="p-3.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-gray-700">{docItem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Route Map & Distance Breakdown Section (Prospectus p. 48) */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAEAEA] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Navigation className="w-6 h-6 text-[#5b0e2d]" />
              <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a]">
                Campus Location & Route Map
              </h2>
            </div>
            <p className="font-outfit text-xs md:text-sm text-gray-500 font-light mb-8">
              Easily accessible from Durg Railway Station, Bus Stand, and Rajnandgaon Road (Prospectus p. 48)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <span className="font-montserrat text-xs font-bold text-[#5b0e2d] uppercase block mb-1">From Chandkhuri Chowk</span>
                <span className="font-outfit text-2xl font-extrabold text-[#0f172a]">4.7 km</span>
                <p className="text-xs text-gray-500 font-light mt-1">Direct access via Chandkhuri Main Road</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <span className="font-montserrat text-xs font-bold text-[#5b0e2d] uppercase block mb-1">From Ganjpara Chowk</span>
                <span className="font-outfit text-2xl font-extrabold text-[#0f172a]">2.8 km</span>
                <p className="text-xs text-gray-500 font-light mt-1">Via Pulgaon Chowk & Wholesale Market</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <span className="font-montserrat text-xs font-bold text-[#5b0e2d] uppercase block mb-1">From Maharaja Chowk</span>
                <span className="font-outfit text-2xl font-extrabold text-[#0f172a]">3.2 km</span>
                <p className="text-xs text-gray-500 font-light mt-1">Connecting D-Mart & River Bridge</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <span className="font-montserrat text-xs font-bold text-[#5b0e2d] uppercase block mb-1">From Railway Station</span>
                <span className="font-outfit text-2xl font-extrabold text-[#0f172a]">Durg Station</span>
                <p className="text-xs text-gray-500 font-light mt-1">Convenient auto/bus connectivity to campus</p>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
