"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <SmoothScroll>
      <div className="min-h-full flex flex-col bg-[#FCFAF7] text-[#121212]">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          {/* Animated illustration container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10 w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center"
          >
            {/* Ambient decorative glowing backdrops */}
            <div className="absolute inset-0 bg-burgundy/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-10 bg-gold/10 rounded-full blur-2xl" />
            
            <motion.img
              src="/img/under_construction.png"
              alt="Under Construction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(91,14,45,0.08)]"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-outfit text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-4 uppercase tracking-tight"
          >
            don't worry, its not you it's us
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-outfit text-sm md:text-base text-gray-500 font-light max-w-md mx-auto mb-10 leading-relaxed"
          >
            we are working hard and will get this constructed asap
          </motion.p>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f60401] hover:bg-[#b80300] text-white rounded-full font-montserrat text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
