
import { ServiceInfo, AreaInfo, SEOData } from '../types';
import { COMPANY_NAME, PRIMARY_CITY, PHONE_NUMBER, ADDRESS_OBJ, BASE_URL } from '../constants';

export const generateAreaSpecificContent = (service: ServiceInfo, area: AreaInfo) => {
  const templates = [
    `Is your ${service.name.toLowerCase()} up to date? Don't let your property in ${area.name} suffer from hygiene issues. ${COMPANY_NAME} provides top-rated professional ${service.name} in ${area.name}, ${area.city} for both residential and commercial clients. Trusted near ${area.landmarks[0]}, we ensure bacteria-free results.`,
    `We are the leading providers of ${service.name} near ${area.landmarks[1]} and across ${area.name}. Our professional team uses high-pressure jets and eco-friendly solutions to guarantee safe results for residents of ${area.name}.`,
    `${COMPANY_NAME} specializes in ${service.name} for homes and offices located in ${area.name}. Trusted by thousands near ${area.landmarks[2]}, we offer the best quality cleaning with a 100% satisfaction guarantee.`
  ];

  const index = area.name.length % templates.length;
  return templates[index];
};

export const generateServiceSchema = (service: ServiceInfo, areaName?: string) => {
  const location = areaName || PRIMARY_CITY;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} in ${location}`,
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_NAME,
      "telephone": PHONE_NUMBER,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressRegion": ADDRESS_OBJ.region,
        "addressCountry": ADDRESS_OBJ.country
      }
    },
    "areaServed": {
      "@type": "City",
      "name": location
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": service.avgRating,
      "reviewCount": service.reviewCount
    }
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateMeta = (service: ServiceInfo, area?: AreaInfo): SEOData => {
  const city = PRIMARY_CITY;

  let title = "";
  let description = "";

  if (area) {
    // Area-Specific SEO Strategy
    // Title: Service + Area + City + Modifier (Best/Top)
    // Example: Water Tank Cleaning Services in Rajarajeshwari Nagar, Bangalore | Best Cleaners
    title = `${service.name} in ${area.name}, ${city} | Best ${service.name.replace(' Services', '')} near ${area.landmarks[0]}`;

    // Description: Localized problem/solution + Landmarks + CTA
    // Includes: Service Name, Area Name, Landmarks, Specific Service Benefit (from shortDesc), Phone Number
    description = `Professional ${service.name} in ${area.name}, ${city}. Serving near ${area.landmarks.join(', ')}. ${service.shortDesc} Verified experts, ${service.avgRating}/5 rating. Call ${PHONE_NUMBER} for a free quote in ${area.name}.`;

  } else {
    // Master Service Page SEO Strategy
    // Title: Service Name + City + Brand
    title = `${service.name} in ${city} | #1 Professional Cleaning Services ${city} | ${COMPANY_NAME}`;

    // Description: Broad appeal + USP
    description = `Looking for ${service.name} in ${city}? ${COMPANY_NAME} offers expert ${service.name.toLowerCase()} with 6-stage scientific process. ${service.shortDesc} Book now for homes and offices.`;
  }

  // Ensure description length is optimal (roughly 150-160 chars)
  if (description.length > 300) {
    description = description.substring(0, 297) + '...';
  }

  return {
    title: title,
    description: description.length > 130 ? description.substring(0, 127) + '...' : description,
    canonical: area
      ? `${BASE_URL}/best-${service.slug}-in-${area.slug}-${city.toLowerCase()}`
      : `${BASE_URL}/services/${service.slug}`,
    hreflang: [
      {
        lang: 'en-in', href: area
          ? `${BASE_URL}/best-${service.slug}-in-${area.slug}-${city.toLowerCase()}`
          : `${BASE_URL}/services/${service.slug}`
      },
      {
        lang: 'x-default', href: area
          ? `${BASE_URL}/best-${service.slug}-in-${area.slug}-${city.toLowerCase()}`
          : `${BASE_URL}/services/${service.slug}`
      }
    ]
  };
};
