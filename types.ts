
export interface ServiceInfo {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  whyChooseUs: string[];
  workflow: string[];
  dos: string[];
  donts: string[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; area: string; content: string; rating: number }[];
  avgRating: number;
  reviewCount: number;
  // New Specification Fields
  serviceTime: string;
  staffSent: string;
  equipmentUsed: string[];
  image: string; // New field for service imagery
}

export interface AreaInfo {
  slug: string;
  name: string;
  city: string;
  landmarks: string[];
  zipCodes: string[];
}

export interface Client {
  name: string;
  logo?: string; // Optional URL for the logo image
}

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  schema?: any;
  hreflang?: { lang: string; href: string }[];
}
