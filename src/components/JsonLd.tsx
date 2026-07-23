"use client";

export default function JsonLd() {
  const universitySchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Bharti Vishwavidyalaya",
    "alternateName": ["Bharti University", "Bharti Vishwavidyalaya Durg"],
    "url": "https://bhartiuniversity.org",
    "logo": "https://bhartiuniversity.org/img/logo.webp",
    "image": "https://bhartiuniversity.org/img/logo_01.webp",
    "sameAs": [
      "https://share.google/RJ6MqRvNFwqoB5EEj",
      "https://facebook.com/bhartivishwavidyalaya",
      "https://instagram.com/bhartivishwavidyalaya",
      "https://linkedin.com/school/bhartivishwavidyalaya"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Balod Road, Chandkhuri",
      "addressLocality": "Durg",
      "addressRegion": "Chhattisgarh",
      "postalCode": "491221",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1901,
      "longitude": 81.2849
    },
    "telephone": "+91-62322-21101",
    "priceRange": "₹₹",
    "hasMap": "https://share.google/RJ6MqRvNFwqoB5EEj"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Bharti Vishwavidyalaya recognized by UGC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bharti Vishwavidyalaya is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956 and accredited by AICTE, PCI, BCI, NCTE, and CG-PURC."
        }
      },
      {
        "@type": "Question",
        "name": "What courses are offered at Bharti Vishwavidyalaya Durg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bharti Vishwavidyalaya offers undergraduate, postgraduate, diploma, and doctoral programs across Engineering (B.Tech/M.Tech), Pharmacy (B.Pharm/D.Pharm), Law (BA LLB/LLM), Management (BBA/MBA), Computer Applications (BCA/MCA), BAMS Ayurveda, Nursing, Agriculture, and ITI trades."
        }
      },
      {
        "@type": "Question",
        "name": "What scholarships are available for students at Bharti Vishwavidyalaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bharti Vishwavidyalaya offers merit scholarships (up to 100% waiver), Single Girl Child (20%), Farmers' Children (20%), Divyang PWD (20%), SC/ST/OBC Post-Matric Scholarships, and National Sports Player waivers."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(universitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
