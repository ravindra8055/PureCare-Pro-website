
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS, PRIMARY_CITY, COMPANY_NAME, PHONE_NUMBER, CLIENTS } from '../constants';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  // Select 4 random clients on component mount
  const featuredClients = React.useMemo(() => {
    return [...CLIENTS].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, []);

  const seoData = {
    title: `${COMPANY_NAME} | Best Cleaning Services in ${PRIMARY_CITY} | Tank, STP & Deep Cleaning`,
    description: `PureCare Pro offers professional Water Tank Cleaning, STP Maintenance, and Home Deep Cleaning in ${PRIMARY_CITY}. 25+ Years Experience. Trusted by 10k+ Clients. Book verified cleaners today.`,
    canonical: `https://purecarepro.com/`
  };

  return (
    <div className="overflow-hidden">
      <SEOHead data={seoData} />
      
      {/* 1. Hero Section: "CRED-like" Typography focus + Visuals */}
      <section className="relative min-h-screen flex items-center pt-20 bg-grid-pattern">
        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
        
        {/* Floating 3D Abstract Image for Desktop */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block opacity-80 pointer-events-none -z-10">
           <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
              alt="Abstract Hygiene" 
              className="w-full h-full object-cover rounded-l-3xl shadow-2xl shadow-blue-500/20 mask-image-gradient"
              style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-12 text-gray-900 dark:text-white">
              MASTER <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">HYGIENE.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-t border-gray-300 dark:border-gray-800 pt-8 gap-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl font-medium leading-relaxed">
                Your trusted partner for exceptional cleaning solutions in {PRIMARY_CITY}. We provide thorough cleaning beyond routine tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link to="/contact" className="group relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 font-bold text-lg uppercase tracking-wider">
                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors">Book Service</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600 dark:group-hover:bg-blue-300 opacity-20"></div>
                </Link>
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="px-10 py-5 border border-gray-300 dark:border-gray-700 font-bold text-lg uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Section (Updated) */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Our Reputation</p>
              <h2 className="text-3xl font-bold dark:text-white">Trusted by 500+ Corporations & Societies</h2>
            </div>
            <Link to="/clients" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest mt-6 md:mt-0 hover:text-blue-600 transition-colors dark:text-gray-300">
              Explore All Clients
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredClients.map((client, i) => (
              <div key={i} className="h-28 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center p-4 hover:border-blue-500 transition-colors cursor-default group">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-12 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" />
                ) : (
                  <span className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-600 uppercase tracking-tight text-center group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services: "Bento Box" Grid Layout - No Images, Clean Typography */}
      <section id="services" className="py-32 bg-white dark:bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Engineered for perfection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`group relative bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 ${index === 0 ? 'md:col-span-2 md:aspect-[2/1]' : 'md:aspect-square'}`}>
                
                {/* Clean Background - Removed Image */}
                <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 transition-colors duration-500"></div>

                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between md:justify-end">
                    <div className="absolute top-6 right-6 w-12 h-12 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    ↗
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">{service.longDesc}</p>
                      <Link to={`/services/${service.slug}`} className="inline-block text-sm font-bold uppercase tracking-widest border-b border-gray-300 dark:border-gray-700 pb-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500 transition-colors">
                      Explore
                      </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Stats: Minimalist */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left border-t border-gray-800 pt-12">
             {[
               { label: 'Years Experience', value: '25+' },
               { label: 'Happy Clients', value: '10K+' },
               { label: 'Service Areas', value: '50+' },
               { label: 'Rating', value: '4.9/5' },
             ].map((stat, i) => (
               <div key={i}>
                 <p className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">{stat.value}</p>
                 <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Why Us: Split Visual Layout */}
      <section className="py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-12">The {COMPANY_NAME} Standard</h2>
           
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-12 order-2 lg:order-1">
               {[
                 { title: "25+ Years Legacy", desc: "Decades of experience in maintaining overall sanitation of residential and commercial facilities." },
                 { title: "Beyond Routine", desc: "We provide thorough cleaning beyond routine tasks using advanced techniques and eco-friendly products." },
                 { title: "High Standards", desc: "Services designed to meet high cleanliness standards with a skilled team dedicated to spotless results." }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col md:items-start border-l-2 border-gray-200 dark:border-gray-800 pl-8 group hover:border-blue-600 transition-colors duration-300">
                   <span className="text-blue-600 font-mono text-xl mb-2">0{i+1}</span>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                   <p className="text-lg text-gray-500 dark:text-gray-400">{item.desc}</p>
                 </div>
               ))}
             </div>
             
             {/* Visual Infographic Side */}
             <div className="order-1 lg:order-2 relative h-[600px] w-full bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" 
                  alt="Modern Clean Interior" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-5xl font-extrabold mb-2">100%</div>
                  <div className="text-lg font-bold uppercase tracking-widest opacity-80">Satisfaction Guarantee</div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 6. Areas Grid */}
      <section id="locations" className="py-32 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <h2 className="text-4xl font-bold mb-12 dark:text-white">Serving {PRIMARY_CITY}</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {AREAS.map(area => (
               <Link 
                 key={area.slug} 
                 to={`/areas/${area.slug}`} 
                 className="px-8 py-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-none font-bold text-sm uppercase tracking-wider hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all dark:text-white"
               >
                 {area.name}
               </Link>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
