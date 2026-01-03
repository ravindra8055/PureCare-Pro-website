
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS, PRIMARY_CITY, COMPANY_NAME, PHONE_NUMBER, CLIENTS, BASE_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  // SEO Data
  const seoData = {
    title: `${COMPANY_NAME} | Best Cleaning Services in ${PRIMARY_CITY}`,
    description: `Expert Water Tank Cleaning, STP Maintenance & Deep Cleaning in ${PRIMARY_CITY}. 25+ Yrs Exp. Trusted by 10k+ Clients.`,
    canonical: BASE_URL,
    hreflang: [
      { lang: 'en-in', href: BASE_URL },
      { lang: 'x-default', href: BASE_URL }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": COMPANY_NAME,
      "image": `${BASE_URL}/images/hero-image.png`,
      "@id": BASE_URL,
      "url": BASE_URL,
      "telephone": PHONE_NUMBER,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "207, 4th Cross, 2nd Main, 2nd Stage, Nagarabhavi",
        "addressLocality": PRIMARY_CITY,
        "postalCode": "560072",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  };

  // Generic Features for the 6-Grid Section
  const FEATURES = [
    { title: "25+ Years Experience", desc: "Decades of expertise in industrial and residential cleaning.", icon: "🏆" },
    { title: "Certified Staff", desc: "Background verified and technically trained professionals.", icon: "👨‍🔧" },
    { title: "Eco-Friendly", desc: "100% safe, non-toxic, and biodegradable cleaning agents.", icon: "🌱" },
    { title: "Advanced Tech", desc: "UV radiation, high-pressure pumps, and mechanized scrubbing.", icon: "⚙️" },
    { title: "Satisfaction Guarantee", desc: "We don't leave until you are 100% happy with the result.", icon: "🤝" },
    { title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges.", icon: "🏷️" },
  ];

  // Aggregated FAQs
  const FAQS = [
    { q: "How often should I clean my water tank?", a: "We recommend cleaning residential tanks every 6 months and commercial tanks every 3 months." },
    { q: "Do you serve all areas in Bangalore?", a: "Yes, we cover all major areas including Whitefield, Indiranagar, Jayanagar, and RR Nagar." },
    { q: "Is the process safe for old tanks?", a: "Yes, our team inspects the tank structural integrity before proceeding with safe cleaning methods." },
    { q: "How long does a deep clean take?", a: "A typical 3BHK deep cleaning takes about 6-8 hours with a team of 3-4 professionals." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeArea, setActiveArea] = useState(0);

  const featuresRef = React.useRef<HTMLDivElement>(null);
  const testimonialsRef = React.useRef<HTMLDivElement>(null);
  const areasRef = React.useRef<HTMLDivElement>(null);

  // Marquee Logic (Duplicating clients for smooth loop)
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  // Generic Scroll Handler for Mobile
  const handleScroll = (ref: React.RefObject<HTMLDivElement>, setIndex: (i: number) => void) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const width = ref.current.clientWidth;
      if (width > 0) {
        setIndex(Math.round(scrollLeft / width));
      }
    }
  };

  const handleDesktopScroll = () => {
    if (areasRef.current) {
      const scrollLeft = areasRef.current.scrollLeft;
      const itemWidth = 280; // min-w-[280px]
      const gap = 32; // space-x-8
      const newIndex = Math.round(scrollLeft / (itemWidth + gap));
      setActiveArea(newIndex);
    }
  };

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, offset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToGroup = (groupIndex: number) => {
    if (areasRef.current) {
      const itemWidth = 280;
      const gap = 32;
      const scrollAmount = groupIndex * 3 * (itemWidth + gap);
      areasRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Helper to render dots
  const renderDots = (total: number, active: number) => (
    <div className="flex justify-center gap-2 mt-6 md:hidden">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${active === i ? 'bg-gray-800 dark:bg-white w-4' : 'bg-gray-300 dark:bg-gray-700'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <SEOHead data={seoData} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-12 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-[10px] md:text-sm font-bold tracking-wide uppercase mb-6">
                Professional Cleaning Services
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
                Best Cleaning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span> in {PRIMARY_CITY}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-lg">
                Expert Water Tank Cleaning, STP Maintenance, and Deep Cleaning solutions for modern living in {PRIMARY_CITY}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-center">
                  Book Service
                </Link>
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="px-8 py-4 border border-gray-300 dark:border-gray-700 font-bold text-lg rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center dark:text-white">
                  Call {PHONE_NUMBER}
                </a>
              </div>


            </div>

            {/* Right: Image (Rounded Card style) - HIDDEN ON MOBILE */}
            <div className="hidden lg:block relative h-[500px] w-full bg-gray-100 dark:bg-gray-800 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img
                src="images/hero-image.png"
                alt="Professional cleaning team providing deep cleaning services in Bangalore"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="text-4xl">✨</div>
                  <div>
                    <p className="font-bold text-lg">5-Star Rated</p>
                    <p className="text-sm opacity-80">By 10,000+ Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO MARQUEE: Full Width */}
      <section className="py-12 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">Trusted By Industry Leaders</div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll w-max">
            {marqueeClients.map((client, i) => (
              <div key={i} className="flex items-center justify-center min-w-[150px] md:min-w-[200px] grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                {client.logo ? <img src={client.logo} className="h-12 w-auto object-contain" alt={client.name} /> : <span className="text-xl font-bold dark:text-white">{client.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AREAS: Circular Grid (Mobile: Horizontal Scroll) */}
      <section className="py-12 md:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Serving Top Locations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We are present in over 50+ neighborhoods across {PRIMARY_CITY}. Here are our primary hubs.</p>
          </div>


          {/* Mobile View: Top 12 Locations in 2x2 Pages */}
          <div
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.clientWidth;
              if (width > 0) setActiveArea(Math.round(scrollLeft / width));
            }}
          >
            {Array.from({ length: Math.ceil(Math.min(AREAS.length, 12) / 4) }).map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full snap-center grid grid-cols-2 gap-4 p-4">
                {AREAS.slice(pageIndex * 4, Math.min((pageIndex + 1) * 4, 12)).map((area, i) => (
                  <Link key={i} to={`/areas/${area.slug}`} className="flex flex-col items-center gap-3 text-center">
                    <div className="w-24 h-24 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-md overflow-hidden relative">
                      <span className="text-2xl font-black text-gray-300 dark:text-gray-700 z-10">{area.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <h3 className="font-bold text-sm dark:text-white leading-tight">{area.name}</h3>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop View: All Locations */}
          <div className="hidden md:block relative group">
            <div
              ref={areasRef}
              onScroll={handleDesktopScroll}
              className="overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth scroll-pl-8"
            >
              <div className="flex py-8 pl-8 pr-40 space-x-8 w-max">
                {AREAS.map((area, i) => (
                  <Link key={i} to={`/areas/${area.slug}`} className="min-w-[280px] snap-start group/item flex flex-col items-center gap-4 text-center">
                    <div className="w-40 h-40 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover/item:scale-105 group-hover/item:border-blue-500 transition-all duration-300 shadow-lg relative">
                      <span className="text-3xl font-black text-gray-300 dark:text-gray-700 group-hover/item:text-blue-600 z-10 transition-colors">{area.name.substring(0, 2).toUpperCase()}</span>
                      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10 opacity-0 group-hover/item:opacity-100 transition-opacity rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-lg dark:text-white group-hover/item:text-blue-600 transition-colors uppercase tracking-tight">{area.name}</h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Navigation Controls: Moved Below */}
            <div className="flex items-center justify-center gap-8 mt-4">
              <button
                onClick={() => {
                  const currentGroup = Math.floor(activeArea / 3);
                  scrollToGroup(Math.max(0, currentGroup - 1));
                }}
                className="w-12 h-12 bg-white dark:bg-surface-dark rounded-full shadow-md border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-110 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95"
                aria-label="Scroll Left"
              >
                <span className="text-xl">←</span>
              </button>

              {/* Desktop Dots: Now Interactive */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(AREAS.length / 3) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToGroup(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeArea >= i * 3 && activeArea < (i + 1) * 3 ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-700 w-2 hover:bg-gray-400'}`}
                    aria-label={`Go to group ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const currentGroup = Math.floor(activeArea / 3);
                  const totalGroups = Math.ceil(AREAS.length / 3);
                  scrollToGroup(Math.min(totalGroups - 1, currentGroup + 1));
                }}
                className="w-12 h-12 bg-white dark:bg-surface-dark rounded-full shadow-md border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-110 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95"
                aria-label="Scroll Right"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
          {renderDots(Math.ceil(Math.min(AREAS.length, 12) / 4), activeArea)}
          <div className="text-center mt-12">
            <Link to="/locations" className="text-sm font-bold uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors dark:text-white">View All Locations</Link>
          </div>
        </div>
      </section>

      {/* 4. SERVICES: 3 Column Large Cards */}
      <section id="services" className="py-12 md:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Our Core Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Specialized cleaning solutions engineered for perfection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="group relative bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={`Professional ${service.name} service - Hygienic Cleaning Services`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 relative">
                  {/* Floating Number */}
                  <div className="absolute -top-8 right-8 w-16 h-16 bg-blue-600 text-white flex items-center justify-center font-bold text-2xl rounded-2xl shadow-lg border-4 border-white dark:border-surface-dark">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white pr-10">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">{service.shortDesc}</p>
                  <Link to={`/services/${service.slug}`} className="inline-block w-full py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center rounded-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURES: 3x2 Grid (Mobile: Horizontal Scroll) */}
      <section className="py-12 md:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Why Choose Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Standards that set us apart from the competition.</p>
          </div>

          <div
            ref={featuresRef}
            onScroll={() => handleScroll(featuresRef, setActiveFeature)}
            className="flex overflow-x-auto snap-x space-x-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:space-x-0 md:pb-0 no-scrollbar"
          >
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className="min-w-[85vw] md:min-w-0 snap-center bg-white dark:bg-black p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{feat.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
          {renderDots(FEATURES.length, activeFeature)}
        </div>
      </section>

      {/* 5.5 PROFESSIONAL INSIGHTS: Deep Content for SEO */}
      <section className="py-12 md:py-24 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white border-l-4 border-blue-600 pl-4">Expert Cleaning Solutions for {PRIMARY_CITY}'s Urban Living</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-6">
            <p>
              In the rapidly growing landscape of {PRIMARY_CITY}, maintaining a hygienic environment for your home or business is no longer a luxury—it's a necessity. At <strong>{COMPANY_NAME}</strong>, we've spent over 25 years perfecting our mechanized cleaning processes to tackle the unique challenges of urban sanitation. Whether you're managing a corporate facility or a residential apartment, our scientifically-backed methods ensure that your water sources and living spaces remain bacteria-free and safe.
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Mechanized Water Tank Cleaning Matters</h3>
            <p>
              Conventional tank cleaning often involves manual scrubbing with minimal equipment, which fails to remove microscopic bio-films and hardened sludge. Our 6-stage mechanized process involves high-pressure jetting and UV radiation, ensuring that every corner of your sump or overhead tank is sterilized. This process is essential in {PRIMARY_CITY} where groundwater quality can vary, preventing diseases like cholera and jaundice before they start.
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Precision STP Maintenance and Sewage Management</h3>
            <p>
              For commercial complexes and large residential societies, Sewage Treatment Plants (STP) are the heart of their sustainability efforts. Improper maintenance can lead to foul odors, equipment failure, and environmental penalties. Our experts specialize in the mechanical and biological upkeep of STPs, ensuring treated water meets all regulatory standards while prolonging the lifespan of your mechanical hardware.
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Deep Cleaning Redefined</h3>
            <p>
              Our home and office deep cleaning services go far beyond the surface. We utilize industrial-grade vacuum cleaners and biodegradable cleaning agents to sanitize high-touch areas, carpets, and upholstery. By focusing on allergen removal and deep disinfection, we transform your space into a pristine haven that improves indoor air quality and overall productivity.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS: Simple Grid (Mobile: Horizontal Scroll) */}
      <section className="py-12 md:py-24 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Mobile Only 5-Star Badge - Moved from Hero */}
          <div className="flex justify-center mb-8 lg:hidden">
            <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg w-fit">
              <div className="text-4xl">✨</div>
              <div className="text-left">
                <p className="font-bold text-lg dark:text-white">5-Star Rated</p>
                <p className="text-sm text-gray-500">By 10,000+ Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Client Voices</h2>
            <div className="flex gap-1 justify-center text-yellow-500 text-xl mb-2">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="text-gray-500">Based on 2000+ Reviews</p>
          </div>

          <div
            ref={testimonialsRef}
            onScroll={() => handleScroll(testimonialsRef, setActiveTestimonial)}
            className="flex overflow-x-auto snap-x space-x-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-x-0 md:pb-0 no-scrollbar"
          >
            {SERVICES.flatMap(s => s.testimonials).slice(0, 4).map((t, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-0 snap-center bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 relative">
                <span className="text-6xl text-blue-100 dark:text-blue-900 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10 text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  {t.content}
                </p>
                <div>
                  <p className="font-bold dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.area}</p>
                </div>
              </div>
            ))}
          </div>
          {renderDots(4, activeTestimonial)}
        </div>
      </section>

      {/* 7. FAQ: Accordion */}
      <section className="py-12 md:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Got Questions?</h2>
            <p className="text-gray-500">We have answers.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  {faq.q}
                  <span className={`transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`px-6 text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 py-6 border-t border-gray-100 dark:border-gray-800' : 'max-h-0'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
