"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowRight, Bell } from "lucide-react";

const newsItems = [
  {
    date: "July 01, 2026",
    tag: "CONFERENCE",
    title: "National Conference NCRISD-2026 Call for Research Papers",
    description: "Scholars are invited to register and submit papers focusing on Interdisciplinary Research, Innovation and Sustainable Development.",
    link: "https://budurg.opencompas.com/superadmin/uni_event_name_list.php?schoolid=Mjkw"
  },
  {
    date: "June 25, 2026",
    tag: "ADMISSIONS",
    title: "Admission Open for PG, UG & Professional Diploma Courses 2026-27",
    description: "Verify eligibility requirements, download prospectus, and apply online for IT, Computer Science, Law, and Pharmacy streams.",
    link: "https://bhartiuniversity.org/adminssion-process.php"
  },
  {
    date: "June 18, 2026",
    tag: "ACADEMICS",
    title: "Academic Calendar for the Session 2026-27 Released",
    description: "Plan your session activities, exams, holidays, and internship intervals according to the newly released academic calendar.",
    link: "https://bhartiuniversity.org/bhartiIMG/ACADEMIC%20CALENDER%20BV%202025%2026.pdf"
  }
];

export default function NewsAndEvents() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll parallax mapping for the featured image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} id="news" className="py-14 md:py-18 bg-[#f8fafc] border-b border-[#E2E8F0]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              CAMPUS CHRONICLES
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              News, Events & Notices
            </h2>
          </div>
          <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed max-w-sm">
            Stay updated with active student events, scholarship opportunities, policy changes, and national academic workshops at our campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Featured Press Release (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group relative depth-card">
            <div className="overflow-hidden relative h-[180px] bg-slate-50">
              <div className="absolute top-3.5 left-3.5 bg-burgundy text-white font-montserrat text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-full z-20">
                FEATURED EVENT
              </div>
              <motion.img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
                alt="Bharti Vishwavidyalaya Seminar"
                className="absolute top-[-10%] left-0 w-full h-[120%] object-cover scale-105"
                style={{ y: imageY }}
              />
            </div>
            <div className="p-6">
              <span className="text-[9px] font-montserrat font-bold text-gray-500 tracking-wider block mb-2.5">
                NCRISD-2026 CONFERENCE
              </span>
              <h3 className="font-outfit text-base font-bold text-[#0f172a] mb-2.5 group-hover:text-burgundy transition-colors leading-snug duration-300">
                National Seminar on Interdisciplinary Research
              </h3>
              <p className="font-outfit text-[11px] text-gray-500 font-light leading-relaxed mb-5">
                Explore pathways to sustainable engineering, corporate analytics, legal reforms, and clinical sciences in the upcoming annual session. Submissions close soon.
              </p>
              <a
                href="https://bhartiuniversity.org/bhartiIMG/p17809202602512.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy font-montserrat text-[9px] font-bold tracking-widest uppercase flex items-center gap-2 hover:text-burgundy-dark transition-colors duration-300 cursor-pointer"
              >
                VIEW BROCHURE DETAILS <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Notices List (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="border-b border-[#E2E8F0] pb-3 mb-4.5 flex items-center justify-between">
              <h3 className="font-outfit text-base font-bold text-[#0f172a] flex items-center gap-1.5">
                <Bell className="w-4.5 h-4.5 text-burgundy" /> Important Notices
              </h3>
              <span className="font-montserrat text-[8px] font-bold text-gray-500 tracking-wider">
                CHRONOLOGICAL ORDER
              </span>
            </div>

            <div className="space-y-5">
              {newsItems.map((item, idx) => (
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex flex-col sm:flex-row gap-3 justify-between items-start border-b border-[#E2E8F0] pb-4.5 hover:border-burgundy transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[9px] text-burgundy font-montserrat font-bold tracking-wider bg-burgundy/5 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-[9px] text-gray-500 font-medium font-montserrat tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                      </span>
                    </div>
                    <h4 className="font-outfit text-sm font-bold text-[#0f172a] group-hover:text-burgundy transition-colors duration-300 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="font-outfit text-[11px] text-gray-500 font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-2.5 sm:mt-0 p-2 rounded-full border border-[#E2E8F0] text-gray-500 group-hover:bg-burgundy group-hover:text-white group-hover:border-burgundy transition-all duration-300 flex-shrink-0">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
