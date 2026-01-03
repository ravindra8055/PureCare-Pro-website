
import React, { useState, useEffect } from 'react';
import { CTA_CONFIG, PHONE_NUMBER, PRIMARY_CITY, WHATSAPP_NUMBER, COMPANY_NAME } from '../constants';

const CTAPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        // 1. Check if suppressed (7 days cookie/storage logic)
        const closedAt = localStorage.getItem(CTA_CONFIG.STORAGE_KEY);
        if (closedAt) {
            const lastClosed = parseInt(closedAt, 10);
            const now = Date.now();
            const diffDays = (now - lastClosed) / (1000 * 60 * 60 * 24);
            if (diffDays < CTA_CONFIG.COOKIE_EXPIRY_DAYS) {
                return; // Suppress
            }
        }

        // 2. Timer Trigger
        const timer = setTimeout(() => {
            triggerPopup();
        }, CTA_CONFIG.SHOW_DELAY_MS);

        // 3. Scroll Trigger
        const handleScroll = () => {
            if (hasTriggered) return;

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            if (scrollPercent >= CTA_CONFIG.SCROLL_DEPTH_PERCENT) {
                triggerPopup();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasTriggered]);

    const triggerPopup = () => {
        if (!hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
        }
    };

    const closePopup = () => {
        setIsVisible(false);
        localStorage.setItem(CTA_CONFIG.STORAGE_KEY, Date.now().toString());
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Overlay Backdrop Click to Exit */}
            <div className="absolute inset-0" onClick={closePopup}></div>

            <div className="relative w-full max-w-lg bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-100 dark:border-gray-800">
                {/* Close Button ("X") */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white rounded-full transition-all duration-200 group"
                    aria-label="Close Popup"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Visual Side */}
                    <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col justify-center items-center text-white space-y-4">
                        <div className="text-6xl animate-bounce">✨</div>
                        <div className="text-center font-bold text-lg leading-tight">LIMITED TIME OFFER</div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                            Ready for a<br />Pristine Home?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Book your Water Tank or Deep Cleaning session today and get 15% OFF on your first service!
                        </p>

                        <div className="flex flex-col space-y-3">
                            <a
                                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-center shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <span>📞</span> Call Now & Save
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${COMPANY_NAME}, I'm interested in your cleaning services. Please provide more details.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-center shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <span>💬</span> WhatsApp Us
                            </a>
                            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
                                Trusted by 10,000+ Families in {PRIMARY_CITY}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAPopup;
