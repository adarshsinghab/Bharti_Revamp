"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
    title: "The Main Quadrangle",
    subtitle: "Historic architecture housing computer science and research wings."
  },
  {
    url: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?q=80&w=800",
    title: "Annual Convocation",
    subtitle: "Celebrating our scholars as they step out as global leaders."
  },
  {
    url: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800",
    title: "Central Library Archive",
    subtitle: "A silent repository housing over 50,000 reference resources."
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200",
    title: "Modern Smart Classrooms",
    subtitle: "Digitally-equipped learning spaces designed for interactive pedagogy."
  }
];

function GalleryCard({ img, idx }: { img: typeof images[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Custom scroll progress per card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax offset translation
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      className={`relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${
        idx === 0 || idx === 3 ? "col-span-12 md:col-span-8 h-[350px] md:h-[450px]" : "col-span-12 md:col-span-4 h-[350px] md:h-[450px]"
      }`}
    >
      {/* Light color filter overlay */}
      <div className="absolute inset-0 bg-[#5b0e2d]/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
      
      {/* Parallax image */}
      <motion.img
        src={img.url}
        alt={img.title}
        className="absolute top-[-10%] left-0 w-full h-[120%] object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        style={{ y }}
      />
      
      {/* Text Description Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="font-montserrat text-[9px] font-bold text-[#d4af37] tracking-[0.2em] uppercase mb-2">
          BHARTI SPACES
        </span>
        <h3 className="font-outfit text-xl font-bold text-white mb-2 leading-none">
          {img.title}
        </h3>
        <p className="font-outfit text-xs text-white/60 font-light leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {img.subtitle}
        </p>
      </div>
      
      {/* Glow border line overlay */}
      <div className="absolute inset-0 border border-white/0 rounded-3xl group-hover:border-[#d4af37]/20 transition-colors duration-500 pointer-events-none z-30" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#EAEAEA] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-montserrat text-[10px] font-bold text-[#d4af37] tracking-[0.25em] uppercase block mb-3">
            VISUAL TOUR
          </span>
          <h2 className="font-outfit text-4xl font-extrabold text-[#121212] tracking-tight mb-4">
            Campus Architecture & Life
          </h2>
          <p className="font-outfit text-xs text-[#5A5A5A] font-light max-w-sm leading-relaxed">
            Experience our premium campus spaces, high-tech labs, historic libraries, and the community structures designed for Vision 2030.
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
