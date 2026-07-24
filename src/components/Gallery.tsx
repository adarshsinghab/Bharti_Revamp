"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
    title: "The Main Quadrangle & Academic Wings",
    subtitle: "Historic architecture housing advanced computer science, AI laboratories, and research wings."
  },
  {
    url: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?q=80&w=800",
    title: "Annual Convocation & Convocation Hall",
    subtitle: "Celebrating our graduating scholars as they step into global corporate leadership."
  },
  {
    url: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800",
    title: "Central Digital Library & Archive",
    subtitle: "A serene academic repository housing over 50,000 reference volumes and IEEE digital subscriptions."
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200",
    title: "Modern Interactive Smart Classrooms",
    subtitle: "Digitally-equipped learning environments engineered for collaborative research and seminars."
  }
];

function GalleryCard({ img, idx }: { img: typeof images[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
      className={`relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${
        idx === 0 || idx === 3 ? "col-span-12 md:col-span-8 h-[360px] md:h-[460px]" : "col-span-12 md:col-span-4 h-[360px] md:h-[460px]"
      }`}
    >
      {/* Light color filter overlay */}
      <div className="absolute inset-0 bg-[#f60401]/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
      
      {/* Parallax image */}
      <motion.img
        src={img.url}
        alt={img.title}
        className="absolute top-[-10%] left-0 w-full h-[120%] object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        style={{ y }}
      />
      
      {/* Text Description Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 flex flex-col justify-end p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <span className="font-montserrat text-[9px] font-bold text-gold tracking-[0.25em] uppercase mb-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-gold" /> BHARTI ARCHITECTURE & SPACES
        </span>
        <h3 className="font-outfit text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
          {img.title}
        </h3>
        <p className="font-outfit text-xs text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xl">
          {img.subtitle}
        </p>
      </div>
      
      {/* Glow border line overlay */}
      <div className="absolute inset-0 border border-white/0 rounded-3xl group-hover:border-gold/30 transition-colors duration-500 pointer-events-none z-30" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-montserrat text-[10px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5 flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-burgundy" /> VISUAL CAMPUS TOUR
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Campus Architecture & Life
          </h2>
          <p className="font-outfit text-xs text-gray-500 font-light max-w-md leading-relaxed">
            Experience our premium campus infrastructure, high-performance GPU server labs, historic archives, and student community spaces.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <GalleryCard img={img} idx={idx} key={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
