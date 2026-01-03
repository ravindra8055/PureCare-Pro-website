
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AREAS, SERVICES, COMPANY_NAME, PRIMARY_CITY, BASE_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const AreaDirectory: React.FC = () => {
  const { areaSlug } = useParams();
  const area = AREAS.find(a => a.slug === areaSlug);

  if (!area) return <div className="p-32 text-center text-2xl font-bold dark:text-white">Area not found</div>;

  const seoData = {
    title: `Best Cleaning Services in ${area.name} | Expert ${COMPANY_NAME}`,
    description: `Top-rated professional cleaning services in ${area.name}, Bangalore. Tank cleaning, STP maintenance, and Deep cleaning. Book now for reliable service near ${area.landmarks[0]}.`,
    canonical: `${BASE_URL}/areas/${area.slug}`
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <SEOHead data={seoData} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase mb-6">
            Regional Service Hub
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
            Focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{area.name}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Premium cleaning solutions deployed for residents near <span className="text-blue-600 dark:text-blue-400 font-semibold">{area.landmarks.join(', ')}</span>.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-20 pb-16 md:pb-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-md py-4 rounded-xl border border-white/20">Available Services in {area.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map(s => (
            <Link
              key={s.id}
              to={`/best-${s.slug}-in-${area.slug}-${PRIMARY_CITY.toLowerCase()}`}
              className="group bg-white dark:bg-surface-dark p-6 md:p-10 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{s.name}</h3>
                <span className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400">↗</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">Tailored {s.name.toLowerCase()} for the {area.name} ecosystem.</p>
              <span className="inline-block border-b border-gray-300 dark:border-gray-700 pb-1 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white group-hover:border-blue-500 transition-colors">
                View Pricing
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaDirectory;
