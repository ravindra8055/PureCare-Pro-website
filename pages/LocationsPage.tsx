
import React from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '../constants';
import SEOHead from '../components/SEOHead';

const LocationsPage: React.FC = () => {
    const seoData = {
        title: "Service Areas | Hygienic Cleaning Services",
        description: "Find Hygienic Cleaning Services near you. We cover over 50+ neighborhoods in Bangalore including Whitefield, Indiranagar, and Jayanagar.",
        canonical: "https://purecarepro.com/locations"
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <SEOHead data={seoData} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Service Areas</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        We bring professional hygiene solutions to every corner of Bangalore. Expert cleaning at your doorstep.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {AREAS.map((area, i) => (
                        <Link key={i} to={`/areas/${area.slug}`} className="block p-4 md:p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-600 dark:hover:border-blue-600 transition-colors group text-center">
                            <h3 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors break-words [hyphens:auto]">{area.name}</h3>
                            <p className="text-xs text-gray-500 mt-2 break-all">{area.zipCodes.join(', ')}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;
