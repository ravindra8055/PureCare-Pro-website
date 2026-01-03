
import React from 'react';
import { CLIENTS, COMPANY_NAME, PHONE_NUMBER, BASE_URL } from '../constants';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const ClientsPage: React.FC = () => {
  const seoData = {
    title: `Our Clients | Trusted by 500+ Corporations | ${COMPANY_NAME}`,
    description: `Prestigious clients in Bangalore trust ${COMPANY_NAME} for cleaning needs. Serving HM Group, Prestige, Brigade & more.`,
    canonical: `${BASE_URL}/clients`,
    hreflang: [
      { lang: 'en-in', href: `${BASE_URL}/clients` },
      { lang: 'x-default', href: `${BASE_URL}/clients` }
    ]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-light dark:bg-background-dark">
      <SEOHead data={seoData} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-gray-900 dark:text-white">
            Our Esteemed <span className="text-blue-600">Clientele.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We are proud to serve some of the most respected names in real estate, hospitality, and corporate sectors across Bangalore.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              className="group relative h-32 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 flex items-center justify-center p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {client.logo ? (
                <img src={client.logo} alt={`${client.name} logo`} className="max-h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
              ) : (
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {client.name}
                  </h3>
                </div>
              )}
              {/* Optional Decoration */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Join our list of happy customers</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider hover:bg-blue-700 transition">
              Book a Service
            </Link>
            <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="px-8 py-4 border border-gray-300 dark:border-gray-700 font-bold uppercase tracking-wider dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
