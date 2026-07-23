"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionScrollHandler() {
  const pathname = usePathname();
  const [highlightedTitle, setHighlightedTitle] = useState<string | null>(null);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        // Start from top of page first
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

        // Smooth scroll down after short DOM render tick
        setTimeout(() => {
          const headerOffset = 140;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth"
          });

          // Apply Section Glow Pulse Animation
          element.classList.add("section-target-glow");
          
          // Extract pretty section title
          const heading = element.querySelector("h2, h3, h4");
          const titleText = heading?.textContent || targetId.replace(/-/g, " ").toUpperCase();
          setHighlightedTitle(titleText);

          setTimeout(() => {
            element.classList.remove("section-target-glow");
          }, 2500);

          setTimeout(() => {
            setHighlightedTitle(null);
          }, 3500);
        }, 150);
      }
    };

    // Run on initial load & whenever pathname or hash changes
    const timeout = setTimeout(handleHashScroll, 200);
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {highlightedTitle && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed top-28 right-6 z-50 bg-[#0F172A]/90 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gold/40 shadow-xl flex items-center gap-2 text-xs font-montserrat font-bold tracking-wide pointer-events-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
          <MapPin className="w-4 h-4 text-gold shrink-0" />
          <span>Navigated to: <strong className="text-gold font-semibold">{highlightedTitle}</strong></span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
