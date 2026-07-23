import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bharti Vishwavidyalaya | Top UGC Approved University in Durg Chhattisgarh",
  description:
    "Bharti Vishwavidyalaya, Durg (Est. 1999) — Premier UGC 2(f) recognized university offering B.Tech, B.Pharm, BA LLB, MBA, BCA, BAMS Ayurveda & Nursing admissions 2026-27.",
  keywords: [
    "Bharti Vishwavidyalaya",
    "Bharti Vishwavidyalaya Durg",
    "Best University in Durg Chhattisgarh",
    "B.Tech Admission Durg",
    "B.Pharm College Durg",
    "BA LLB Admission Bhilai",
    "MBA College Durg",
    "BAMS Ayurvedic College Durg",
    "UGC Approved University Chhattisgarh",
  ],
  openGraph: {
    title: "Bharti Vishwavidyalaya | Premier UGC Approved University in Durg",
    description:
      "Transforming higher education through 60+ industry-aligned programs, state-of-the-art research labs, and 5,000+ global alumni placements.",
    url: "https://bhartiuniversity.org",
    siteName: "Bharti Vishwavidyalaya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bhartiuniversity.org/img/logo_01.webp",
        width: 1200,
        height: 630,
        alt: "Bharti Vishwavidyalaya Durg Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharti Vishwavidyalaya | Durg Chhattisgarh",
    description: "Premier UGC recognized university in Durg offering engineering, pharmacy, law, management & medical programs.",
    images: ["https://bhartiuniversity.org/img/logo_01.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#121212] overflow-x-hidden selection:bg-[#5b0e2d]/10 selection:text-[#5b0e2d]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

