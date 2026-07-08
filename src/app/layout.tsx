import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
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
  title: "Bharti Vishwavidyalaya | Vision 2030 Premium Editorial Homepage",
  description:
    "Bharti Vishwavidyalaya, Durg — established 1999. UGC approved, AICTE certified. Offering B.Tech, MCA, BCA, B.Ed, MBA, B.Pharm & more. Shape your future with Vision 2030.",
  keywords: [
    "Bharti Vishwavidyalaya",
    "Durg Vishwavidyalaya",
    "Chhattisgarh Vishwavidyalaya",
    "B.Tech Admission",
    "MCA College Durg",
    "Vision 2030",
    "UGC Approved",
    "AICTE College",
  ],
  openGraph: {
    title: "Bharti Vishwavidyalaya | Vision 2030",
    description:
      "Experience premium education at Bharti Vishwavidyalaya, Durg. Shaping world-class leaders since 1999.",
    url: "https://bhartiuniversity.org",
    siteName: "Bharti Vishwavidyalaya",
    locale: "en_IN",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}

