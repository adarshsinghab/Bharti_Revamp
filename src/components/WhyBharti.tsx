"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Cpu, Target } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Moral Integrity & Leadership",
    description: "Upholding value-based education that combines national values with international research perspectives."
  },
  {
    icon: Cpu,
    title: "Next-Gen Tech Curriculum",
    description: "AI-integrated smart classrooms and collaborative labs designed to match modern job requirements."
  },
  {
    icon: Target,
    title: "Vision 2030 Execution Plan",
    description: "A continuous roadmap aiming to establish Bharti Vishwavidyalaya as an elite global research hub."
  }
];

export default function WhyBharti() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  return (
    <section ref={containerRef} className="py-14 md:py-18 bg-white border-b border-[#E2E8F0]" id="why-bharti">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Photo with Parallax (Reduced Height to fit screen) */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl group shadow-lg h-[380px] bg-slate-50 depth-card">
            <div className="absolute inset-0 bg-burgundy/5 z-10 transition-colors group-hover:bg-transparent duration-500" />
            <motion.img
              src="/img/ou930t.png"
              alt="Bharti Vishwavidyalaya Architecture"
              className="absolute top-[-15%] left-0 w-full h-[130%] object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
              style={{ y: imageY }}
            />
            {/* Editorial overlay */}
            <div className="absolute bottom-5 left-5 z-20 bg-white/95 backdrop-blur-md p-5 rounded-xl max-w-xs border border-[#E2E8F0] shadow-md">
              <span className="font-montserrat text-[10px] font-bold text-burgundy tracking-[0.2em] block mb-1">
                VISION 2030 INFRASTRUCTURE
              </span>
              <p className="font-outfit text-[13px] text-[#0f172a] font-semibold leading-normal">
                Building spaces where legacy meets tomorrow.
              </p>
            </div>
          </div>
 
          {/* Right Column: Strategic Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-montserrat text-[11px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              WHY BHARTI VISHWAVIDYALAYA
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              A commitment to shape global futures
            </h2>
            <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed mb-8">
              Bharti Vishwavidyalaya provides an immersive academic environment where theory meets practical innovation. We ensure every student receives custom mentoring to excel in today's highly competitive industrial workspace.
            </p>

            <div className="space-y-6 w-full">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-9 h-9 rounded-full bg-burgundy/5 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-outfit text-sm font-bold text-[#0f172a] mb-1 group-hover:text-burgundy transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="font-outfit text-[13px] text-gray-500 font-light leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
