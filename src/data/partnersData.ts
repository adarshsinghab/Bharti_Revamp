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
    logo: "https://logo.clearbit.com/tcs.com",
    category: "TECH",
    brandColor: "#000000"
  },
  {
    name: "Wipro Limited",
    shortName: "Wipro",
    domain: "wipro.com",
    logo: "https://logo.clearbit.com/wipro.com",
    category: "TECH",
    brandColor: "#1A5B9C"
  },
  {
    name: "Infosys Limited",
    shortName: "Infosys",
    domain: "infosys.com",
    logo: "https://logo.clearbit.com/infosys.com",
    category: "TECH",
    brandColor: "#007CC3"
  },
  {
    name: "Tech Mahindra",
    shortName: "Tech Mahindra",
    domain: "techmahindra.com",
    logo: "https://logo.clearbit.com/techmahindra.com",
    category: "TECH",
    brandColor: "#E31837"
  },
  {
    name: "Cognizant Technology",
    shortName: "Cognizant",
    domain: "cognizant.com",
    logo: "https://logo.clearbit.com/cognizant.com",
    category: "TECH",
    brandColor: "#0033A0"
  },
  {
    name: "Accenture",
    shortName: "Accenture",
    domain: "accenture.com",
    logo: "https://logo.clearbit.com/accenture.com",
    category: "TECH",
    brandColor: "#A100FF"
  },
  {
    name: "IBM India",
    shortName: "IBM",
    domain: "ibm.com",
    logo: "https://logo.clearbit.com/ibm.com",
    category: "TECH",
    brandColor: "#052FAD"
  },
  {
    name: "HCL Technologies",
    shortName: "HCLTech",
    domain: "hcltech.com",
    logo: "https://logo.clearbit.com/hcltech.com",
    category: "TECH",
    brandColor: "#005696"
  },
  {
    name: "Reliance Jio",
    shortName: "Jio",
    domain: "jio.com",
    logo: "https://logo.clearbit.com/jio.com",
    category: "TECH",
    brandColor: "#0A2540"
  },
  {
    name: "Suzuki Motors",
    shortName: "Suzuki",
    domain: "marutisuzuki.com",
    logo: "https://logo.clearbit.com/marutisuzuki.com",
    category: "AUTO",
    brandColor: "#003A70"
  },
  {
    name: "Ashok Leyland",
    shortName: "Ashok Leyland",
    domain: "ashokleyland.com",
    logo: "https://logo.clearbit.com/ashokleyland.com",
    category: "AUTO",
    brandColor: "#004B87"
  },
  {
    name: "Mahindra & Mahindra",
    shortName: "Mahindra",
    domain: "mahindra.com",
    logo: "https://logo.clearbit.com/mahindra.com",
    category: "AUTO",
    brandColor: "#E31837"
  },
  {
    name: "Bajaj Auto",
    shortName: "Bajaj",
    domain: "bajajauto.com",
    logo: "https://logo.clearbit.com/bajajauto.com",
    category: "AUTO",
    brandColor: "#003A70"
  },
  {
    name: "John Deere",
    shortName: "John Deere",
    domain: "deere.com",
    logo: "https://logo.clearbit.com/deere.com",
    category: "AUTO",
    brandColor: "#367C2B"
  },
  {
    name: "L&T Construction",
    shortName: "L&T",
    domain: "larsentoubro.com",
    logo: "https://logo.clearbit.com/larsentoubro.com",
    category: "CONSTRUCTION",
    brandColor: "#00529B"
  },
  {
    name: "Genpact",
    shortName: "Genpact",
    domain: "genpact.com",
    logo: "https://logo.clearbit.com/genpact.com",
    category: "TECH",
    brandColor: "#003366"
  },
  {
    name: "Flipkart",
    shortName: "Flipkart",
    domain: "flipkart.com",
    logo: "https://logo.clearbit.com/flipkart.com",
    category: "RETAIL",
    brandColor: "#2874F0"
  },
  {
    name: "Paytm",
    shortName: "Paytm",
    domain: "paytm.com",
    logo: "https://logo.clearbit.com/paytm.com",
    category: "FINANCE",
    brandColor: "#002E6E"
  },
  {
    name: "SBI Life Insurance",
    shortName: "SBI Life",
    domain: "sbilife.co.in",
    logo: "https://logo.clearbit.com/sbilife.co.in",
    category: "FINANCE",
    brandColor: "#0083CA"
  },
  {
    name: "IDBI Bank",
    shortName: "IDBI Bank",
    domain: "idbibank.in",
    logo: "https://logo.clearbit.com/idbibank.in",
    category: "FINANCE",
    brandColor: "#00563F"
  },
  {
    name: "Bandhan Bank",
    shortName: "Bandhan",
    domain: "bandhanbank.com",
    logo: "https://logo.clearbit.com/bandhanbank.com",
    category: "FINANCE",
    brandColor: "#A6192E"
  },
  {
    name: "AU Small Finance Bank",
    shortName: "AU Bank",
    domain: "aubank.in",
    logo: "https://logo.clearbit.com/aubank.in",
    category: "FINANCE",
    brandColor: "#6A2B85"
  },
  {
    name: "Apollo Pharmacy",
    shortName: "Apollo",
    domain: "apollopharmacy.in",
    logo: "https://logo.clearbit.com/apollopharmacy.in",
    category: "PHARMA",
    brandColor: "#00A859"
  },
  {
    name: "Lupin Pharmaceuticals",
    shortName: "Lupin",
    domain: "lupin.com",
    logo: "https://logo.clearbit.com/lupin.com",
    category: "PHARMA",
    brandColor: "#0066B2"
  },
  {
    name: "Macleods Pharma",
    shortName: "Macleods",
    domain: "macleodspharma.com",
    logo: "https://logo.clearbit.com/macleodspharma.com",
    category: "PHARMA",
    brandColor: "#E30613"
  },
  {
    name: "Eureka Forbes",
    shortName: "Eureka Forbes",
    domain: "eurekaforbes.com",
    logo: "https://logo.clearbit.com/eurekaforbes.com",
    category: "RETAIL",
    brandColor: "#00529B"
  },
  {
    name: "Justdial",
    shortName: "Justdial",
    domain: "justdial.com",
    logo: "https://logo.clearbit.com/justdial.com",
    category: "TECH",
    brandColor: "#FF6600"
  },
  {
    name: "Randstad India",
    shortName: "Randstad",
    domain: "randstad.in",
    logo: "https://logo.clearbit.com/randstad.in",
    category: "TECH",
    brandColor: "#0088CC"
  },
  {
    name: "Vivo Smartphone",
    shortName: "Vivo",
    domain: "vivo.com",
    logo: "https://logo.clearbit.com/vivo.com",
    category: "TECH",
    brandColor: "#008CD6"
  },
  {
    name: "Suzlon Energy",
    shortName: "Suzlon",
    domain: "suzlon.com",
    logo: "https://logo.clearbit.com/suzlon.com",
    category: "CONSTRUCTION",
    brandColor: "#007A33"
  }
];
