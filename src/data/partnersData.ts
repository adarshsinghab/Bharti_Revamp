export interface PartnerLogo {
  name: string;
  domain: string;
  logo: string;
  category: "TECH" | "AUTO" | "FINANCE" | "PHARMA" | "CONSTRUCTION" | "RETAIL";
  brandColor: string;
  shortName: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    name: "Tata Consultancy Services",
    shortName: "TCS",
    domain: "tcs.com",
    logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128",
    category: "TECH",
    brandColor: "#000000"
  },
  {
    name: "Wipro Limited",
    shortName: "Wipro",
    domain: "wipro.com",
    logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128",
    category: "TECH",
    brandColor: "#1A5B9C"
  },
  {
    name: "Infosys Limited",
    shortName: "Infosys",
    domain: "infosys.com",
    logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128",
    category: "TECH",
    brandColor: "#007CC3"
  },
  {
    name: "Tech Mahindra",
    shortName: "Tech Mahindra",
    domain: "techmahindra.com",
    logo: "https://www.google.com/s2/favicons?domain=techmahindra.com&sz=128",
    category: "TECH",
    brandColor: "#E31837"
  },
  {
    name: "Cognizant Technology",
    shortName: "Cognizant",
    domain: "cognizant.com",
    logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128",
    category: "TECH",
    brandColor: "#0033A0"
  },
  {
    name: "Accenture",
    shortName: "Accenture",
    domain: "accenture.com",
    logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
    category: "TECH",
    brandColor: "#A100FF"
  },
  {
    name: "IBM India",
    shortName: "IBM",
    domain: "ibm.com",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    category: "TECH",
    brandColor: "#052FAD"
  },
  {
    name: "HCL Technologies",
    shortName: "HCLTech",
    domain: "hcltech.com",
    logo: "https://www.google.com/s2/favicons?domain=hcltech.com&sz=128",
    category: "TECH",
    brandColor: "#005696"
  },
  {
    name: "Reliance Jio",
    shortName: "Jio",
    domain: "jio.com",
    logo: "https://www.google.com/s2/favicons?domain=jio.com&sz=128",
    category: "TECH",
    brandColor: "#0A2540"
  },
  {
    name: "Suzuki Motors",
    shortName: "Suzuki",
    domain: "marutisuzuki.com",
    logo: "https://www.google.com/s2/favicons?domain=marutisuzuki.com&sz=128",
    category: "AUTO",
    brandColor: "#003A70"
  },
  {
    name: "Ashok Leyland",
    shortName: "Ashok Leyland",
    domain: "ashokleyland.com",
    logo: "https://www.google.com/s2/favicons?domain=ashokleyland.com&sz=128",
    category: "AUTO",
    brandColor: "#004B87"
  },
  {
    name: "Mahindra & Mahindra",
    shortName: "Mahindra",
    domain: "mahindra.com",
    logo: "https://www.google.com/s2/favicons?domain=mahindra.com&sz=128",
    category: "AUTO",
    brandColor: "#E31837"
  },
  {
    name: "Bajaj Auto",
    shortName: "Bajaj",
    domain: "bajajauto.com",
    logo: "https://www.google.com/s2/favicons?domain=bajajauto.com&sz=128",
    category: "AUTO",
    brandColor: "#003A70"
  },
  {
    name: "John Deere",
    shortName: "John Deere",
    domain: "deere.com",
    logo: "https://www.google.com/s2/favicons?domain=deere.com&sz=128",
    category: "AUTO",
    brandColor: "#367C2B"
  },
  {
    name: "L&T Construction",
    shortName: "L&T",
    domain: "larsentoubro.com",
    logo: "https://www.google.com/s2/favicons?domain=larsentoubro.com&sz=128",
    category: "CONSTRUCTION",
    brandColor: "#00529B"
  },
  {
    name: "Genpact",
    shortName: "Genpact",
    domain: "genpact.com",
    logo: "https://www.google.com/s2/favicons?domain=genpact.com&sz=128",
    category: "TECH",
    brandColor: "#003366"
  },
  {
    name: "Flipkart",
    shortName: "Flipkart",
    domain: "flipkart.com",
    logo: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128",
    category: "RETAIL",
    brandColor: "#2874F0"
  },
  {
    name: "Paytm",
    shortName: "Paytm",
    domain: "paytm.com",
    logo: "https://www.google.com/s2/favicons?domain=paytm.com&sz=128",
    category: "FINANCE",
    brandColor: "#002E6E"
  },
  {
    name: "SBI Life Insurance",
    shortName: "SBI Life",
    domain: "sbilife.co.in",
    logo: "https://www.google.com/s2/favicons?domain=sbilife.co.in&sz=128",
    category: "FINANCE",
    brandColor: "#0083CA"
  },
  {
    name: "IDBI Bank",
    shortName: "IDBI Bank",
    domain: "idbibank.in",
    logo: "https://www.google.com/s2/favicons?domain=idbibank.in&sz=128",
    category: "FINANCE",
    brandColor: "#00563F"
  },
  {
    name: "Bandhan Bank",
    shortName: "Bandhan",
    domain: "bandhanbank.com",
    logo: "https://www.google.com/s2/favicons?domain=bandhanbank.com&sz=128",
    category: "FINANCE",
    brandColor: "#A6192E"
  },
  {
    name: "AU Small Finance Bank",
    shortName: "AU Bank",
    domain: "aubank.in",
    logo: "https://www.google.com/s2/favicons?domain=aubank.in&sz=128",
    category: "FINANCE",
    brandColor: "#6A2B85"
  },
  {
    name: "Apollo Pharmacy",
    shortName: "Apollo",
    domain: "apollopharmacy.in",
    logo: "https://www.google.com/s2/favicons?domain=apollopharmacy.in&sz=128",
    category: "PHARMA",
    brandColor: "#00A859"
  },
  {
    name: "Lupin Pharmaceuticals",
    shortName: "Lupin",
    domain: "lupin.com",
    logo: "https://www.google.com/s2/favicons?domain=lupin.com&sz=128",
    category: "PHARMA",
    brandColor: "#0066B2"
  },
  {
    name: "Macleods Pharma",
    shortName: "Macleods",
    domain: "macleodspharma.com",
    logo: "https://www.google.com/s2/favicons?domain=macleodspharma.com&sz=128",
    category: "PHARMA",
    brandColor: "#E30613"
  },
  {
    name: "Eureka Forbes",
    shortName: "Eureka Forbes",
    domain: "eurekaforbes.com",
    logo: "https://www.google.com/s2/favicons?domain=eurekaforbes.com&sz=128",
    category: "RETAIL",
    brandColor: "#00529B"
  },
  {
    name: "Justdial",
    shortName: "Justdial",
    domain: "justdial.com",
    logo: "https://www.google.com/s2/favicons?domain=justdial.com&sz=128",
    category: "TECH",
    brandColor: "#FF6600"
  },
  {
    name: "Randstad India",
    shortName: "Randstad",
    domain: "randstad.in",
    logo: "https://www.google.com/s2/favicons?domain=randstad.in&sz=128",
    category: "TECH",
    brandColor: "#0088CC"
  },
  {
    name: "Vivo Smartphone",
    shortName: "Vivo",
    domain: "vivo.com",
    logo: "https://www.google.com/s2/favicons?domain=vivo.com&sz=128",
    category: "TECH",
    brandColor: "#008CD6"
  },
  {
    name: "Suzlon Energy",
    shortName: "Suzlon",
    domain: "suzlon.com",
    logo: "https://www.google.com/s2/favicons?domain=suzlon.com&sz=128",
    category: "CONSTRUCTION",
    brandColor: "#007A33"
  }
];
