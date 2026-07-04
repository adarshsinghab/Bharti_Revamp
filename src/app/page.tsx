"use client";

import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* Intro morph loader */}
      {loading && (
        <IntroLoader
          onComplete={() => setLoading(false)}
          ready={videoLoaded}
        />
      )}

      {/* Main Page Layout Wrapper */}
      <SmoothScroll>
        <div className={`transition-opacity duration-1000 ${loading ? "opacity-0 select-none pointer-events-none" : "opacity-100"}`}>
          <Header />
          <main className="flex flex-col w-full">
            <Hero onVideoLoaded={() => setVideoLoaded(true)} />
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
    </>
  );
}

