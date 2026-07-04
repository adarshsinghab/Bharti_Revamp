"use client";

import { motion } from "framer-motion";
import { BookOpen, FileCode, Radio, FileText, ArrowRight } from "lucide-react";

const publications = [
  {
    title: "Journal Publications",
    description: "Browse the extensive list of academic research articles published by our scholars across national & international journals.",
    link: "https://bhartiuniversity.org/bhartiIMG/1_Journal%20Publication.pdf",
    icon: BookOpen
  },
  {
    title: "Books & Monographs",
    description: "Discover books and academic chapters authored by our faculty members, setting standards in diverse domains.",
    link: "https://bhartiuniversity.org/bhartiIMG/2_Books%20Publication.pdf",
    icon: FileText
  },
  {
    title: "Patents & Inventions",
    description: "Review patented technologies filed and published by Bharti research departments in science, engineering and pharmacy.",
    link: "https://bhartiuniversity.org/bhartiIMG/3_Patents.pdf",
    icon: FileCode
  },
  {
    title: "Seminars, Conferences & Workshops",
    description: "A chronological directory of international webinars, national workshops, and scientific panels held at our campus.",
    link: "https://bhartiuniversity.org/bhartiIMG/4_SEMINAR,%20CONFERENCE,%20WORKSHOP,%20WEBINAR.pdf",
    icon: Radio
  }
];

export default function Research() {
  return (
    <section id="research" className="py-14 md:py-18 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: NCRISD-2026 Conference Spotlight */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] text-[#0f172a] rounded-2xl p-6.5 md:p-8 shadow-sm relative overflow-hidden group depth-card">
            {/* Elegant pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(246,4,1,0.02),transparent)] pointer-events-none" />
            
            <span className="font-montserrat text-[9px] font-bold text-burgundy bg-burgundy/5 border border-burgundy/10 rounded-full px-3 py-0.5 tracking-[0.25em] uppercase inline-block mb-4">
              CONFERENCE SPOTLIGHT
            </span>
            
            <h3 className="font-outfit text-2xl font-extrabold mb-3 tracking-tight leading-tight text-[#0f172a] group-hover:text-burgundy transition-colors duration-300">
              NCRISD-2026
            </h3>
            
            <p className="font-montserrat text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4 leading-normal">
              National Conference on Interdisciplinary Research, Innovation and Sustainable Development
            </p>
            
            <p className="font-outfit text-[11px] text-gray-500 font-light leading-relaxed mb-6">
              Bharti Vishwavidyalaya invites scholars, scientists, and educators to submit original scientific papers to NCRISD-2026. Join global minds discussing pathways to sustainable development, tech disruption, and academic innovation.
            </p>

            {/* Conference Stats / Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-[#E2E8F0] py-4">
              <div>
                <span className="text-[9px] font-montserrat font-bold text-burgundy uppercase tracking-wider block mb-0.5">
                  CALL FOR PAPERS
                </span>
                <span className="text-xs font-outfit font-bold text-[#0f172a]">
                  Submissions Open
                </span>
              </div>
              <div>
                <span className="text-[9px] font-montserrat font-bold text-burgundy uppercase tracking-wider block mb-0.5">
                  CONFERENCE VENUE
                </span>
                <span className="text-xs font-outfit font-bold text-[#0f172a]">
                  BU Campus Durg
                </span>
              </div>
            </div>

            {/* Conference CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://bhartiuniversity.org/bhartiIMG/p17809202602512.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-[9px] font-bold tracking-widest px-5 py-3.5 rounded-full text-center shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 flex-1 cursor-pointer hover:shadow-burgundy/20"
              >
                DOWNLOAD BROCHURE <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="https://budurg.opencompas.com/superadmin/uni_event_name_list.php?schoolid=Mjkw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-[#0f172a] font-montserrat text-[9px] font-bold tracking-widest px-5 py-3.5 rounded-full text-center border border-[#E2E8F0] transition-all duration-300 flex items-center justify-center flex-1 shadow-sm cursor-pointer"
              >
                REGISTER ONLINE
              </a>
            </div>
          </div>

          {/* Right Column: General Research Directories */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              ACADEMIC REPOSITORY
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-5">
              Pioneering research for social advancement
            </h2>
            <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed mb-8">
              At Bharti Vishwavidyalaya, innovation isn't secondary—it's foundational. Our academic repository indexes patents, research publications, and educational seminars led by our faculty and postgraduate fellows.
            </p>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {publications.map((pub, idx) => {
                const Icon = pub.icon;
                return (
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group border-b border-[#E2E8F0] pb-4.5 flex gap-4 items-start hover:border-burgundy transition-colors duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-500 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-outfit text-xs font-bold text-[#0f172a] mb-1 flex items-center gap-1 group-hover:text-burgundy transition-colors duration-300">
                        {pub.title} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="font-outfit text-[10px] text-gray-500 font-light leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
