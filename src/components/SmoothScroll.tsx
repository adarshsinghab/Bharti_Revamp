"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children, loading }: { children: React.ReactNode; loading?: boolean }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
    } as any);

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Save lenis to window object for access by GSAP or ScrollTrigger
    (window as any).lenis = lenis;

    if (loading) {
      lenis.stop();
    }

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (loading) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [loading]);

  return <>{children}</>;
}
