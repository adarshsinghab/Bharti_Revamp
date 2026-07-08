"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The computer science curriculum at Bharti Vishwavidyalaya gave me access to high-end GPU cluster servers and active research projects. The placement training program was defining—landing me a DevOps role at Tata Consultancy Services.",
    author: "Amit Sahu",
    role: "MCA Alumnus (Class of 2024)",
    company: "DevOps Engineer at TCS"
  },
  {
    quote: "Our moot courts and BCI approved legal clinics made public advocacy second-nature. The law professors don't just lecture; they simulate real courtrooms, teaching us how to brief and present cases professionally.",
    author: "Priya Sharma",
    role: "BA LL.B. Candidate (Senior Year)",
    company: "Legal Intern, High Court"
  },
  {
    quote: "My time at Bharti Pharmacy lab was defining. Formulating compounds and completing industrial internships gave me the confidence to join a global research laboratory right after graduation.",
    author: "Rajesh Kumar",
    role: "B.Pharm Graduate (Class of 2025)",
    company: "Research Analyst, Lupin Ltd"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFAF7] border-b border-[#EAEAEA] overflow-hidden" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-montserrat text-[10px] font-bold text-[#d4af37] tracking-[0.25em] uppercase block mb-3">
            STUDENT VOICES
          </span>
          <h2 className="font-outfit text-4xl font-extrabold text-[#121212] tracking-tight mb-4">
            Alumni Success & Stories
          </h2>
          <p className="font-outfit text-xs text-[#5A5A5A] font-light max-w-md leading-relaxed">
            Discover how Bharti Vishwavidyalaya graduates transform their academic knowledge into professional leadership across global firms.
          </p>
        </div>

        {/* Infinite Horizontal Testimonials Track */}
        <div className="w-full overflow-hidden relative py-4">
          {/* Left/Right soft fade gradients to make it look premium */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FCFAF7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FCFAF7] to-transparent z-10 pointer-events-none" />

          <div className="inline-block animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col justify-between w-[320px] md:w-[420px] h-[330px] md:h-[360px] whitespace-normal bg-white border border-[#EAEAEA] rounded-3xl p-6 md:p-8 mx-4 shadow-sm hover:shadow-md hover:border-[#d4af37]/30 transition-all duration-500 relative overflow-hidden align-top group"
              >
                {/* Accent line on top of card */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-burgundy/10 group-hover:bg-burgundy transition-colors duration-500" />
                
                {/* Quote Icon */}
                <div className="text-burgundy/10 mb-6 flex justify-between items-start">
                  <Quote className="w-8 h-8 transform -rotate-12" />
                  <span className="text-[9px] font-montserrat font-bold text-[#d4af37] tracking-wider">
                    VERIFIED ALUMNI
                  </span>
                </div>

                <p className="font-outfit text-xs md:text-sm text-[#121212] leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>

                <div className="mt-auto border-t border-[#EAEAEA]/60 pt-4">
                  <h4 className="font-outfit text-sm font-bold text-[#5b0e2d]">
                    {t.author}
                  </h4>
                  <p className="font-montserrat text-[9px] font-bold text-[#5A5A5A] tracking-wider mt-1 uppercase">
                    {t.role} — <span className="text-[#d4af37]">{t.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
