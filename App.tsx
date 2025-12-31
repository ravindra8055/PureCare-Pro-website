import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { COMPANY_NAME, CLIENTS, ADDRESS, PHONE_NUMBER, PHONE_NUMBER_2 } from './constants';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const AreaDirectory = React.lazy(() => import('./pages/AreaDirectory'));
const LocationsPage = React.lazy(() => import('./pages/LocationsPage'));
const ClientsPage = React.lazy(() => import('./pages/ClientsPage'));

// Inline Components (kept as they were)
const AboutPage = () => (
  <div className="min-h-screen bg-background-light dark:bg-background-dark">
    {/* Hero Section */}
    <section className="relative pt-32 pb-12 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase mb-6">
          Our Story
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
          25 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Your trusted partner for exceptional cleaning solutions. We go beyond routine tasks to ensure optimal hygiene.
        </p>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">

      <div className="mb-16 w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
          alt="Our Professional Team"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl leading-relaxed mb-8">
          At <span className="font-bold text-blue-600">{COMPANY_NAME}</span>, our services include meticulous tank and sump cleaning, thorough sewage treatment plant (STP) maintenance, and comprehensive home deep cleaning. We utilize advanced techniques and eco-friendly products to ensure optimal hygiene and efficiency in every task.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
          <div className="p-8 bg-surface-light dark:bg-surface-dark border-t-4 border-blue-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Skilled Team</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our skilled team is dedicated to delivering spotless results, whether it's removing sludge from tanks, maintaining STPs, or transforming your home into a pristine haven.
            </p>
          </div>
          <div className="p-8 bg-surface-light dark:bg-surface-dark border-t-4 border-blue-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Overall Sanitation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We maintain overall sanitation of facilities with services designed to meet high cleanliness standards, providing thorough cleaning beyond routine tasks.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          With a focus on quality and customer satisfaction, we guarantee a cleaner, healthier environment for you and your loved ones. Experience unparalleled cleanliness and professionalism with us today.
        </p>

        <div className="mt-20 not-prose border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Distinguished Clientele</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLIENTS.map((client, i) => (
              <div key={i} className="p-4 bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800 flex items-center justify-center text-center font-semibold text-gray-600 dark:text-gray-400 text-sm hover:border-blue-500 transition-colors">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPlaceholder = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
              <span className="text-4xl text-green-600">✓</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
              Request <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Received</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              Thank you for choosing {COMPANY_NAME}. Our support team will call you shortly to confirm your slot.
            </p>
            <Link to="/" className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all text-center">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pb-20 bg-background-light dark:bg-background-dark overflow-hidden bg-grid-pattern border-b border-gray-200 dark:border-gray-800">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white uppercase">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Ready to experience master hygiene? Our experts are standing by to assist you with your cleaning needs.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-20">
        <div className="bg-surface-light dark:bg-surface-dark p-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold mb-4 dark:text-white">Visit Us</h3>
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {ADDRESS}
          </p>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark p-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold mb-4 dark:text-white">Call Us</h3>
          <div className="flex flex-col gap-2">
            <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-xl font-bold text-blue-600 hover:underline">{PHONE_NUMBER}</a>
            <a href={`tel:${PHONE_NUMBER_2.replace(/\s+/g, '')}`} className="text-xl font-bold text-blue-600 hover:underline">{PHONE_NUMBER_2}</a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required type="text" placeholder="Name" className="w-full p-6 bg-gray-50 dark:bg-surface-dark border-0 rounded-none border-b-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-0 transition outline-none dark:text-white" />
          <input required type="tel" placeholder="Phone" className="w-full p-6 bg-gray-50 dark:bg-surface-dark border-0 rounded-none border-b-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-0 transition outline-none dark:text-white" />
        </div>
        <select className="w-full p-6 bg-gray-50 dark:bg-surface-dark border-0 rounded-none border-b-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-0 transition outline-none dark:text-white">
          <option>Select Service</option>
          <option>Tank Cleaning</option>
          <option>STP Maintenance</option>
          <option>Deep Cleaning</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white p-6 font-bold text-xl hover:bg-blue-700 transition uppercase tracking-widest mt-8">Submit Request</button>
      </form>
    </div>
  );
};

// Scroll to top on route change, handling hash links for anchors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Loading Component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/services/:serviceSlug" element={<ServicePage />} />
                <Route path="/areas/:areaSlug" element={<AreaDirectory />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPlaceholder />} />
                {/* Dynamic Catch-all for SEO friendly Service+Area URLs */}
                <Route path="/:seoSlug" element={<ServicePage isAreaPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
