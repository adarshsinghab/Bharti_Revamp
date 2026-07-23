"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function IntroLoader({ onComplete, ready }: { onComplete: () => void; ready: boolean }) {
  const [showReveal, setShowReveal] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const completedRef = useRef(false);

  // Guarantee that the loader runs for at least 1.4 seconds for visual prestige
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Once both minimum time is elapsed and video is ready, trigger fade reveal
  useEffect(() => {
    if (minTimeElapsed && ready) {
      setShowReveal(true);
      const timer = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [minTimeElapsed, ready, onComplete]);

  // Fallback safety timeout
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setShowReveal(true);
      const timer = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 900);
      return () => clearTimeout(timer);
    }, 3500);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!completedRef.current && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showReveal ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 overflow-hidden z-[99999] flex items-center justify-center bg-[#FCFAF7]"
        >
          {/* Background Soft Ambient Light Spheres */}
          <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-[20%] right-[25%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Main Glassmorphic Loading Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: showReveal ? 0 : 1,
              scale: showReveal ? 1.06 : 1,
              filter: showReveal ? "blur(20px)" : "blur(0px)"
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-50 w-[360px] h-[360px] sm:w-[410px] sm:h-[410px] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-full p-8 flex flex-col items-center justify-center"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/40 rounded-full pointer-events-none" />
            
            {/* Pulsing Outer Rings */}
            <div className="absolute inset-2 border border-burgundy/10 rounded-full animate-ping [animation-duration:3s]" />
            <div className="absolute inset-4 border border-gold/20 rounded-full" />

            {/* University Logo Container */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="relative z-10 mb-3"
            >
              <img
                src="/img/logo.webp"
                alt="Bharti Vishwavidyalaya"
                className="w-56 sm:w-64 h-auto object-contain filter drop-shadow-md"
              />
            </motion.div>

            {/* Spinner */}
            <div className="relative z-10 w-7 h-7 flex items-center justify-center">
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
            <h3 className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.25em] uppercase mt-4 text-center relative z-10">
              BHARTI VISHWAVIDYALAYA
            </h3>
            <span className="font-outfit text-[9px] text-gray-400 font-light mt-1 tracking-wider uppercase relative z-10">
              ESTD. 1999 • DURG, CHHATTISGARH
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
