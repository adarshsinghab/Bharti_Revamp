"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const links = {
  academics: [
    { name: "Programs Offered", href: "#programs" },
    { name: "Academic Collaboration", href: "https://bhartiuniversity.org/bhartiIMG/AC.pdf" },
    { name: "Library Infrastructure", href: "https://bhartiuniversity.org/bhartiIMG/Library.pdf" },
    { name: "Academic Calendar", href: "https://bhartiuniversity.org/bhartiIMG/ACADEMIC%20CALENDER%20BV%202025%2026.pdf" }
  ],
  governance: [
    { name: "UGC ApprovalStatus", href: "https://bhartiuniversity.org/bhartiIMG/Ugcapproval.pdf" },
    { name: "AICTE EOA 2025-26", href: "https://bhartiuniversity.org/bhartiIMG/AICTE%20EOA%20Report%202025-2026.pdf" },
    { name: "BCI EOA 2025-26", href: "https://bhartiuniversity.org/bhartiIMG/bcid1965%20Bharti%20Vishwavidyalaya,%20Durg,%20Chhattisgarh.pdf" },
    { name: "Shulk Nirdharan", href: "https://bhartiuniversity.org/bhartiIMG/shulk%20nirdharan%202025-26.pdf" }
  ],
  admissions: [
    { name: "Admission Process", href: "https://bhartiuniversity.org/adminssion-process.php" },
    { name: "Fee Structure", href: "https://bhartiuniversity.org/fee-structure.php" },
    { name: "Eligibility Criteria", href: "https://bhartiuniversity.org/adminssion-process.php#eligibility" },
    { name: "Refund Policy", href: "https://bhartiuniversity.org/bhartiIMG/Fee%20Refund%20Policy.pdf" }
  ]
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#121212] pt-24 pb-12 border-t border-[#EAEAEA] relative overflow-hidden">
      {/* Background soft blur mesh */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-[#d4af37]/3 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <a href="#" className="flex items-center group">
              <img
                src="/img/logo.png"
                alt="Bharti Vishwavidyalaya Logo"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-102 transition-transform duration-500"
              />
            </a>
            
            <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed max-w-sm">
              Established in 1999, Bharti Vishwavidyalaya has spent over 25 years cultivating professionals and academic leaders across information technology, law, pharmacy, and educational pedagogy.
            </p>

            <div className="flex flex-col gap-3 font-outfit text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5b0e2d]" /> +91 62322 21101
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5b0e2d]" /> info@bhartiuniversity.org
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5b0e2d]" /> Durg, Chhattisgarh, India
              </span>
            </div>
          </div>

          {/* Links Categories (6 cols: 3 categories of 2 cols) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6">
            <div>
              <h4 className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.2em] uppercase mb-6">
                ACADEMICS
              </h4>
              <ul className="space-y-3">
                {links.academics.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="text-gray-500 hover:text-[#5b0e2d] text-xs font-outfit font-light transition-colors duration-300">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.2em] uppercase mb-6">
                GOVERNANCE
              </h4>
              <ul className="space-y-3">
                {links.governance.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#5b0e2d] text-xs font-outfit font-light transition-colors duration-300">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.2em] uppercase mb-6">
                ADMISSIONS
              </h4>
              <ul className="space-y-3">
                {links.admissions.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} target={l.href.includes(".pdf") ? "_blank" : "_self"} className="text-gray-500 hover:text-[#5b0e2d] text-xs font-outfit font-light transition-colors duration-300">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Representation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat text-[10px] font-bold text-[#5b0e2d] tracking-[0.2em] uppercase mb-6">
              CAMPUS MAP
            </h4>
            <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 h-32 relative group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=300"
                alt="Map representation"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#5b0e2d]/10 group-hover:bg-[#5b0e2d]/0 transition-colors duration-300 flex items-center justify-center">
                <span className="font-montserrat text-[9px] font-bold text-white tracking-widest bg-black/50 px-2 py-1 rounded">
                  VIEW IN MAPS
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Credentials Bar */}
        <div className="border-t border-[#EAEAEA] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-montserrat text-gray-400 tracking-wider">
          <p>© {new Date().getFullYear()} BHARTI VISHWAVIDYALAYA DURG. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 font-semibold">
            <a href="https://bhartiuniversity.org/privacy_policy.php" target="_blank" className="hover:text-[#5b0e2d] transition-colors duration-300">PRIVACY POLICY</a>
            <a href="https://bhartiuniversity.org/bhartiIMG/MoA.pdf" target="_blank" className="hover:text-[#5b0e2d] transition-colors duration-300">VISHWAVIDYALAYA ORDINANCES</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
