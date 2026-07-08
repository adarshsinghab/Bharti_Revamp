"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import Hls from "hls.js";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920",
    tagline: "LEGACY OF ACADEMIC PRESTIGE",
    title: "Shaping World Class leaders",
    subtitle: "Since 1999, Bharti Vishwavidyalaya has been the beacon of premium education, building excellence in engineering, IT, management, and law."
  },
  {
    image: "https://images.unsplash.com/photo-1498243691581-b148c55361c5?q=80&w=1920",
    tagline: "CENTRE FOR INNOVATION & RESEARCH",
    title: "Where Ideas Meet impact",
    subtitle: "Pioneering new knowledge through cutting-edge journals, patents, and global research programs targeted for Vision 2030."
  },
  {
    image: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?q=80&w=1920",
    tagline: "GLOBAL PLACEMENT STANDARDS",
    title: "Launchpad to Global careers",
    subtitle: "Empowering 5000+ alumni through premier corporate connections and industry-leading career placements worldwide."
  }
];

export default function Hero({ onVideoLoaded }: { onVideoLoaded?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoError, setVideoError] = useState(false);
  const [videoPlayable, setVideoPlayable] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll parallax logic using Framer Motion
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.1]);
  const contentY = useTransform(scrollY, [0, 800], [0, -40]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize HLS streaming player with 5s chunk buffer sizing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = "/video/playlist.m3u8";
    let hls: Hls;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10, // Buffer max 10 seconds ahead
        maxBufferLength: 5,     // Buffer 5 seconds at a time to load in a speedy way
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        setVideoPlayable(true);
        onVideoLoaded?.();
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          setVideoError(true);
          onVideoLoaded?.();
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native fallback for Safari
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
      video.addEventListener("canplay", () => {
        setVideoPlayable(true);
        onVideoLoaded?.();
      });
      video.addEventListener("error", () => {
        setVideoError(true);
        onVideoLoaded?.();
      });
    } else {
      setVideoError(true);
      onVideoLoaded?.();
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [onVideoLoaded]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-30px)] w-full bg-[#121212] overflow-hidden flex items-center justify-center border-b border-white/5"
      id="hero"
    >

      {/* Background Cinematic Parallax Media (Local Video / Slideshow Fallback) */}
      <motion.div
        style={{ y: bgY, scale: bgScale, x: -mousePosition.x * 0.3 }}
        className="absolute inset-0 z-0"
      >
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={() => {
              setVideoError(true);
              onVideoLoaded?.();
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-[1.03] transition-opacity duration-[1500ms] ${videoPlayable ? "opacity-[0.45]" : "opacity-0"}`}
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
        )}

        {/* Ambient burgundy-gold spotlight glows */}
        <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-[#5b0e2d]/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      </motion.div>

      {/* Main Hero Elements (Compact Editorial Layout) */}
      <motion.div
        style={{ y: contentY }}
        className="max-w-[1600px] w-full mx-auto px-6 md:px-12 z-10 relative pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Typographic Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">

            {/* Tagline Badge */}
            <motion.div
              key={`tagline-${currentSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ delay: 28 }}
              className="flex items-center gap-2 mb-4 bg-burgundy/20 border border-burgundy/30 rounded-full px-3.5 py-1 pop-shadow"
            >
              <Award className="w-3.5 h-3.5 text-gold filter drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
              <span className="font-montserrat text-[9px] font-bold text-gold tracking-[0.2em] uppercase text-shadow-gold">
                {heroSlides[currentSlide].tagline}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="font-outfit text-[28px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-5 text-shadow-pop">
              {heroSlides[currentSlide].title.split(" ").map((word, idx) => (
                <span key={`${currentSlide}-${idx}`} className="inline-block overflow-hidden mr-3">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 0.08 * idx + 0.2,
                    }}
                    className={`inline-block ${idx === 2 || idx === 3 ? "text-gold italic font-serif font-normal text-shadow-gold" : ""
                      }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle / Program description */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-outfit text-sm md:text-base text-white/90 max-w-xl font-light leading-relaxed mb-8 text-balance text-shadow-subtle"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <a
                href="/fee-structure"
                className="bg-burgundy hover:bg-burgundy-light text-white border border-burgundy hover:border-burgundy-light font-montserrat text-[10px] font-bold tracking-widest px-6 py-3.5 rounded-full shadow-lg hover:shadow-burgundy/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                APPLY FOR ADMISSIONS <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-montserrat text-[10px] font-bold tracking-widest px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                EXPLORE CURRICULUM
              </a>
            </motion.div>

          </div>

          {/* Floating Glassmorphic Editorial Stats Card */}
          <div className="lg:col-span-4 hidden lg:flex justify-center relative">
            <motion.div
              style={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-[310px] glass-premium-dark rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] depth-card relative overflow-hidden"
            >
              {/* Card accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full blur-lg pointer-events-none" />

              <h3 className="font-montserrat text-[9px] font-bold text-gold tracking-[0.25em] uppercase mb-6">
                VISHWAVIDYALAYA SNAPSHOT
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="font-outfit text-2xl font-extrabold text-white flex items-baseline gap-1">
                    25+ <span className="text-[10px] text-white/50 font-normal">Years Legacy</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-medium font-montserrat">
                    Pioneering premium education since 1999
                  </p>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div>
                  <div className="font-outfit text-2xl font-extrabold text-white flex items-baseline gap-1">
                    5000+ <span className="text-[10px] text-white/50 font-normal">Alumni</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-medium font-montserrat">
                    Working at top global firms & institutions
                  </p>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div>
                  <div className="font-outfit text-xl font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold" /> UGC Approved
                  </div>
                  <p className="text-[10px] text-white/60 font-medium font-montserrat">
                    Full AICTE & State Board Affiliation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-montserrat text-[8px] font-bold text-white/60 tracking-[0.25em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-5 rounded-full bg-gold"
        />
      </div>
    </section>
  );
}
