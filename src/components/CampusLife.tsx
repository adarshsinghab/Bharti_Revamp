"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Heart, Landmark, ArrowUpRight } from "lucide-react";

const activities = [
  {
    title: "National Cadet Corps (NCC) Cell",
    description: "Developing discipline, leadership, and national service among cadets through specialized camps, parades and state events.",
    link: "/ncc",
    icon: ShieldCheck
  },
  {
    title: "National Service Scheme (NSS)",
    description: "Engaging students in rural development, blood donation drives, health camps, and local social-welfare programs.",
    link: "/nss",
    icon: Heart
  },
  {
    title: "Social-Economically Disadvantaged Cell",
    description: "Supporting students from underprivileged backgrounds, securing scholarships, and ensuring academic accessibility.",
    link: "/sedg-cell",
    icon: Landmark
  }
];

export default function CampusLife() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll parallax mapping
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const img3Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const img4Y = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-2.5, 2.5]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [1, -1]);

  return (
    <section ref={sectionRef} className="py-14 md:py-18 bg-[#f8fafc] border-b border-[#E2E8F0] overflow-hidden" id="campus">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Student Life Cells */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              CAMPUS EXPERIENCE
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              A vibrant ecosystem for holistic growth
            </h2>
            <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed mb-8">
              Academic excellence is only half the equation. Bharti Vishwavidyalaya nurtures civic responsibility, national leadership, and social integrity through our highly active campus cells.
            </p>

            {/* Activities List (Compact) */}
            <div className="space-y-4.5 w-full">
              {activities.map((act, idx) => {
                const Icon = act.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4 depth-card"
                  >
                    <div className="w-9 h-9 rounded-full bg-burgundy/5 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="font-outfit text-sm font-bold text-[#0f172a] group-hover:text-burgundy transition-colors duration-300">
                          {act.title}
                        </h3>
                        <a
                          href={act.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-dark hover:text-burgundy flex items-center gap-1 text-[10px] font-bold font-montserrat tracking-widest uppercase transition-colors"
                        >
                          DOCUMENT <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="font-outfit text-[12px] text-gray-500 font-light leading-normal">
                        {act.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Parallax Collage (Reduced Heights to prevent scroll overflow) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative h-[440px] px-4">
            {/* Background blue glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#4f46e5]/3 blur-3xl rounded-full -z-10" />

            {/* Image 1 - Top Left Large */}
            <motion.div 
              style={{ y: img1Y, rotate: rotate1 }}
              className="col-span-8 relative overflow-hidden rounded-2xl shadow-xl h-[200px] bg-slate-100 border border-white/20 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
                alt="Student activities"
                className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
              />
            </motion.div>
            
            {/* Image 2 - Top Right Small */}
            <motion.div 
              style={{ y: img2Y, rotate: rotate2 }}
              className="col-span-4 relative overflow-hidden rounded-2xl shadow-xl h-[160px] bg-slate-100 border border-white/20 self-end z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?q=80&w=600"
                alt="Convocation"
                className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
              />
            </motion.div>

            {/* Image 3 - Bottom Left Small */}
            <motion.div 
              style={{ y: img3Y, rotate: rotate3 }}
              className="col-span-4 relative overflow-hidden rounded-2xl shadow-xl h-[160px] bg-slate-100 border border-white/20 z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600"
                alt="Library"
                className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
              />
            </motion.div>

            {/* Image 4 - Bottom Right Large */}
            <motion.div 
              style={{ y: img4Y, rotate: rotate4 }}
              className="col-span-8 relative overflow-hidden rounded-2xl shadow-xl h-[220px] bg-slate-100 border border-white/20 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800"
                alt="Academic Campus"
                className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
