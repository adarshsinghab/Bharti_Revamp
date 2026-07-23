"use client";

import { useState, useEffect } from "react";
import IntroLoader from "@/components/IntroLoader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestNotices from "@/components/LatestNotices";
import Highlights from "@/components/Highlights";
import WhyBharti from "@/components/WhyBharti";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Research from "@/components/Research";
import CampusLife from "@/components/CampusLife";
import Placements from "@/components/Placements";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showConstruction, setShowConstruction] = useState(false);

  // Prevent scrolling during loading phase or when construction modal is open
  useEffect(() => {
    if (loading || showConstruction) {
      document.documentElement.classList.add("loading");
      document.body.classList.add("loading");
    } else {
      document.documentElement.classList.remove("loading");
      document.body.classList.remove("loading");
    }
    return () => {
      document.documentElement.classList.remove("loading");
      document.body.classList.remove("loading");
    };
  }, [loading, showConstruction]);

  // Intercept unbuilt mock route clicks to open the modal on the same page
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        // Intercept any local route that isn't homepage, existing pages (/about, /admin), hash anchors, or mailto
        if (
          href &&
          href.startsWith("/") &&
          href !== "/" &&
          !href.startsWith("/about") &&
          !href.startsWith("/admin") &&
          !href.startsWith("/academics") &&
          !href.startsWith("/institutions") &&
          !href.startsWith("/placements") &&
          !href.startsWith("/scholarships") &&
          !href.startsWith("/campus-life") &&
          !href.startsWith("/contact") &&
          !href.startsWith("#") &&
          !href.startsWith("mailto:")
        ) {
          e.preventDefault();
          setShowConstruction(true);
        }
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <>
      {/* Intro morph loader */}
      {loading && (
        <IntroLoader
          onComplete={() => setLoading(false)}
          ready={true} // Load page immediately while video streams in background
        />
      )}

      {/* Main Page Layout Wrapper */}
      <SmoothScroll loading={loading || showConstruction}>
        <div className={`transition-opacity duration-1000 ${loading ? "opacity-0 select-none pointer-events-none" : "opacity-100"}`}>
          <Header />
          <main className="flex flex-col w-full">
            <Hero onVideoLoaded={() => setVideoLoaded(true)} />
            <LatestNotices />
            <Highlights />
            <WhyBharti />
            <FeaturedPrograms />
            <Research />
            <CampusLife />
            <Placements />
            <NewsAndEvents />
            <Testimonials />
            <Gallery />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </SmoothScroll>

      {/* In-page Under Construction Modal Overlay */}
      <AnimatePresence>
        {showConstruction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FCFAF7]/95 backdrop-blur-xl px-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowConstruction(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#121212]/5 hover:bg-[#121212]/10 text-[#121212] transition-colors duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-w-md w-full text-center flex flex-col items-center justify-center">
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-burgundy/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-8 bg-gold/10 rounded-full blur-2xl" />
                
                <motion.img
                  src="/img/under_construction.webp"
                  alt="Under Construction"
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(91,14,45,0.08)]"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 0.5, -0.5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-outfit text-xl sm:text-2xl font-extrabold text-[#0f172a] mb-3 uppercase tracking-tight"
              >
                don't worry, its not you it's us
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-outfit text-xs sm:text-sm text-gray-500 font-light mb-8 leading-relaxed max-w-sm"
              >
                we are working hard and will get this constructed asap
              </motion.p>

              {/* Back CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  onClick={() => setShowConstruction(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f60401] hover:bg-[#b80300] text-white rounded-full font-montserrat text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Return to Home
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

