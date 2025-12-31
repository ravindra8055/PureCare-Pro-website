
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_2, WHATSAPP_NUMBER, SERVICES, AREAS, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-md">
            <h3 className="text-2xl font-extrabold tracking-tighter mb-6">{COMPANY_NAME}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for exceptional cleaning solutions. With 25+ years of experience, we maintain overall sanitation and deliver spotless results using eco-friendly products.
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="font-bold uppercase tracking-widest text-xs mb-2 text-gray-500">Headquarters</p>
              <p className="leading-relaxed whitespace-pre-line">{ADDRESS}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-500">Services</h4>
              <ul className="space-y-4 font-medium">
                {SERVICES.map(s => (
                  <li key={s.id}><Link to={`/services/${s.slug}`} className="hover:text-blue-600 transition">{s.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-500">Locations</h4>
              <ul className="space-y-4 font-medium">
                {AREAS.slice(0, 4).map(a => (
                  <li key={a.slug}><Link to={`/areas/${a.slug}`} className="hover:text-blue-600 transition">{a.name}</Link></li>
                ))}
                <li><Link to="/#locations" className="text-blue-600">View All</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-500">Social</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="https://youtube.com/@purecarepro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">YouTube</a></li>
                <li><a href="https://x.com/purecarepro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">X (Twitter)</a></li>
                <li><a href="https://linkedin.com/company/purecarepro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a></li>
                <li><a href="https://instagram.com/purecarepro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Instagram</a></li>
                <li><a href="https://facebook.com/purecarepro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-500">Connect</h4>
              <ul className="space-y-4 font-medium">
                <li><a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-blue-600">{PHONE_NUMBER}</a></li>
                <li><a href={`tel:${PHONE_NUMBER_2.replace(/\s+/g, '')}`} className="hover:text-blue-600">{PHONE_NUMBER_2}</a></li>
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-blue-600">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-900 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-black dark:hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-black dark:hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
