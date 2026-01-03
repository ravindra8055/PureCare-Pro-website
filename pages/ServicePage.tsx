
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, AREAS, COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, PRIMARY_CITY } from '../constants';
import { generateMeta, generateServiceSchema, generateFAQSchema, generateAreaSpecificContent } from '../utils/seo';
import SEOHead from '../components/SEOHead';

const ServicePage: React.FC<{ isAreaPage?: boolean }> = ({ isAreaPage = false }) => {
  const { serviceSlug, seoSlug } = useParams();

  let service, area;

  if (seoSlug) {
    // Parse SEO Slug: [optional-best]-[service-slug]-in-[area-slug]-bangalore
    // 1. Remove '-bangalore' suffix (case insensitive)
    const withoutCity = seoSlug.replace(new RegExp(`-${PRIMARY_CITY.toLowerCase()}$`, 'i'), '');

    // 2. Remove 'best-' prefix if it exists
    const canonicalSlug = withoutCity.startsWith('best-') ? withoutCity.slice(5) : withoutCity;

    // 3. Iterate services to find a match at the start
    for (const s of SERVICES) {
      const prefix = `${s.slug}-in-`;
      if (canonicalSlug.startsWith(prefix)) {
        service = s;
        const areaSlugPart = canonicalSlug.replace(prefix, '');
        area = AREAS.find(a => a.slug === areaSlugPart);
        break;
      }
    }
  } else {
    // Standard Route: /services/:serviceSlug
    service = SERVICES.find(s => s.slug === serviceSlug);
    // Area is undefined here unless passed via other means (not used in current routing for standard service page)
  }

  // Fallback if no service found (or invalid slug)
  if (!service) {
    // In a real app, this should render a 404 component
    service = SERVICES[0];
  }

  const seoData = generateMeta(service, area || undefined);
  const serviceSchema = generateServiceSchema(service, area?.name);
  const faqSchema = generateFAQSchema(service.faqs);

  const finalSeoData = {
    ...seoData,
    schema: {
      "@graph": [serviceSchema, faqSchema]
    }
  };

  const locationName = area ? area.name : PRIMARY_CITY;

  // Format service name for the insight section
  const serviceNameForInsight = service.name.toLowerCase().replace(/ services$/i, '');

  return (
    <div className="service-page">
      <SEOHead data={finalSeoData} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase mb-6">
            Premium Cleaning Service
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
            {service.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">in {locationName}</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="md:col-span-2">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {isAreaPage && area
                  ? generateAreaSpecificContent(service, area)
                  : `Professional and certified ${service.name.toLowerCase()} for residential and commercial properties across ${locationName}. Safe, effective, and hygiene-focused.`
                }
              </p>
              <div className="mt-10 flex gap-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                  Book Now
                </Link>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="border border-gray-300 dark:border-white/30 text-gray-900 dark:text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-50 dark:hover:bg-white/10 transition backdrop-blur-sm">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Spec Card (Theme Aware Glassmorphism) */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 shadow-2xl">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{service.serviceTime}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Team Size</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{service.staffSent}</p>
              </div>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Rating</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{service.avgRating}/5.0</p>
              </div>
              <div className="pt-6 border-t border-gray-200 dark:border-white/10 text-center">
                <span className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-widest">Backed By 25+ Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 dark:text-white">Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{service.longDesc}</p>
            {area && (
              <div className="my-8 p-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 flex gap-4 items-start">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">Local {area.name} Insight</p>
                  <p className="text-blue-900 dark:text-blue-100 m-0">
                    Serving residents near {area.landmarks.join(', ')}. We understand the specific {serviceNameForInsight} needs of the {area.zipCodes[0]} area.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 md:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 dark:text-white">The Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, i) => {
              // Icon selection based on index
              const icons = [
                <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                <svg key="star" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
                <svg key="zap" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
                <svg key="heart" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              ];

              return (
                <div key={i} className="group relative p-8 bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {icons[i % icons.length]}
                    </div>

                    <h3 className="text-4xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-4 -z-10 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300 select-none">
                      0{i + 1}
                    </h3>

                    <p className="font-bold text-gray-900 dark:text-gray-100 leading-snug">
                      {benefit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Infographic */}
      <section className="py-12 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 md:mb-16 text-center dark:text-white">Process Execution</h2>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">
              {service.workflow.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-4 md:p-8">
                    <div className={`bg-white dark:bg-surface-dark p-6 border border-gray-100 dark:border-gray-800 shadow-sm rounded-lg hover:border-blue-500 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-2 block">Step 0{i + 1}</span>
                      <p className="text-lg font-medium dark:text-gray-200">{step}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-[50%] -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-black z-10 flex items-center justify-center shadow-lg hidden md:flex">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 md:py-24 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center dark:text-white">Do's and Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-black p-8 border-t-4 border-green-500 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-5 text-green-500 text-9xl font-black -mr-4 -mt-4">✓</div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white relative z-10">
                <span className="text-green-500 text-2xl">✓</span> What We Do
              </h3>
              <ul className="space-y-4 relative z-10">
                {service.dos.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-300 items-start">
                    <span className="text-green-500 mt-1 min-w-[10px]">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-black p-8 border-t-4 border-red-500 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-5 text-red-500 text-9xl font-black -mr-4 -mt-4">✕</div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white relative z-10">
                <span className="text-red-500 text-2xl">✕</span> Important Guidelines
              </h3>
              <ul className="space-y-4 relative z-10">
                {service.donts.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-300 items-start">
                    <span className="text-red-500 mt-1 min-w-[10px]">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center dark:text-white">Queries</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 open:border-blue-500 dark:open:border-blue-500 transition-colors">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg dark:text-white">
                  {faq.question}
                  <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment (Tags) */}
      <section className="py-12 md:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Professional Grade Arsenal</p>
          <div className="flex flex-wrap justify-center gap-3">
            {service.equipmentUsed.map((eq, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-surface-dark text-gray-800 dark:text-gray-300 text-sm font-semibold rounded-sm border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                {eq}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations - SEO Friendly Internal Linking */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-6 items-center">
          <span className="text-gray-500 font-bold uppercase text-xs">Available In:</span>
          {AREAS.map(a => (
            <Link
              key={a.slug}
              to={`/best-${service.slug}-in-${a.slug}-${PRIMARY_CITY.toLowerCase()}`}
              className="text-sm font-bold hover:text-blue-400 transition"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServicePage;
