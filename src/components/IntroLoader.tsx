"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function IntroLoader({ onComplete, ready }: { onComplete: () => void; ready: boolean }) {
  const [showReveal, setShowReveal] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const completedRef = useRef(false);

  // Guarantee that the loader runs for at least 1.8 seconds for visual prestige
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Once both the minimum time is elapsed and the background video is ready, trigger the reveal
  useEffect(() => {
    if (minTimeElapsed && ready) {
      setShowReveal(true);
      // Wait for the reveal animation to finish before calling onComplete
      const timer = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [minTimeElapsed, ready, onComplete]);

  // Fallback safety timeout to ensure the site loads even if video loading stalls
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setShowReveal(true);
      const timer = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 1600);
      return () => clearTimeout(timer);
    }, 4500); // 4.5 seconds maximum load screen time
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 overflow-hidden z-[99999] flex items-center justify-center bg-[#FCFAF7]">
      {/* Background Soft Ambient Light Spheres */}
      {!showReveal && (
        <>
          <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-[20%] right-[25%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      {/* Main Glassmorphic Loading Orb */}
      <AnimatePresence>
        {!showReveal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-50 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_rgba(91,14,45,0.04)] rounded-full p-8 flex flex-col items-center justify-center"
          >
            {/* Shimmer overlay on the glass orb */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/40 rounded-full pointer-events-none" />
            
            {/* Pulsing Outer Ring */}
            <div className="absolute inset-2 border border-burgundy/5 rounded-full animate-ping [animation-duration:3s]" />
            <div className="absolute inset-4 border border-gold/10 rounded-full" />

            {/* University Logo Container */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative z-10 mb-3"
            >
              <img
                src="/img/logo.png"
                alt="Bharti Vishwavidyalaya"
                className="w-44 sm:w-52 h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
              />
            </motion.div>

            {/* Spinner */}
            <div className="relative z-10 w-8 h-8 flex items-center justify-center">
              <svg className="w-full h-full animate-spin text-burgundy" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="35, 150"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Title / Tagline */}
            <h3 className="font-montserrat text-[9px] font-bold text-[#5b0e2d] tracking-[0.25em] uppercase mt-5 text-center relative z-10">
              BHARTI VISHWAVIDYALAYA
            </h3>
            <span className="font-outfit text-[8px] text-gray-400 font-light mt-1 tracking-wider uppercase relative z-10">
              ESTD. 1999
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic White Reveal Panels */}
      {showReveal && (
        <>
          {/* Light flare beam */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.4 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[400px] bg-gold/15 blur-[120px] z-40 pointer-events-none"
          />

          {/* Left curtain panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 h-full w-1/2 z-30 bg-[#FCFAF7] border-r border-black/5 shadow-[30px_0_90px_rgba(0,0,0,0.03)]"
          />

          {/* Right curtain panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 top-0 h-full w-1/2 z-30 bg-[#FCFAF7] border-l border-black/5 shadow-[-30px_0_90px_rgba(0,0,0,0.03)]"
          />
        </>
      )}
    </div>
  );
}
