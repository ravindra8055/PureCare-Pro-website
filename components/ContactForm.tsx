
import React, { useState } from 'react';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_2, ADDRESS, SERVICES, AREAS, WHATSAPP_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Using Web3Forms for free storage and email notifications
            // Add VITE_WEB3FORMS_ACCESS_KEY to your .env file
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

            // If no key is provided, we simulate a successful submission for demo purposes
            if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
                console.log("Simulating submission:", data);
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSubmitted(true);
            } else {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: accessKey,
                        ...data,
                        subject: `New Enquiry for ${COMPANY_NAME} from ${data.name}`,
                        from_name: data.name,
                    }),
                });

                const result = await response.json();
                if (result.success) {
                    setSubmitted(true);
                } else {
                    setError("Something went wrong. Please try again or call us.");
                }
            }
        } catch (err) {
            setError("Network error. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
            if (submitted) window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleWhatsAppTrigger = () => {
        const message = encodeURIComponent(`Hi ${COMPANY_NAME}, I just submitted an enquiry on your website and wanted to follow up.`);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    if (submitted) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 className="text-4xl font-bold mb-4 dark:text-white">Request Successfully Sent!</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Thank you for reaching out. Your enquiry has been recorded and our team will contact you within 30 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleWhatsAppTrigger}
                        className="bg-[#25D366] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.113 2.95.048.074 2.095 3.199 5.074 4.484.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Follow up on WhatsApp
                    </button>
                    <a href="/" className="px-8 py-4 font-bold border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-white">
                        Return Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Contact Info Card */}
                <div className="flex flex-col-reverse lg:flex-col gap-8 w-full animate-in slide-in-from-left-10 duration-700">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visit Us</h2>
                        <div className="p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                    {ADDRESS}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:mb-0">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Talk to Us</h2>
                        <div className="p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-6">
                            <div className="flex gap-4 items-center group">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Main Line</p>
                                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-2xl font-black text-blue-600 hover:text-blue-700 transition-colors tracking-tight">
                                        {PHONE_NUMBER}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center group">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Support Line</p>
                                    <a href={`tel:${PHONE_NUMBER_2.replace(/\s+/g, '')}`} className="text-2xl font-black text-gray-900 dark:text-white hover:text-blue-600 transition-colors tracking-tight">
                                        {PHONE_NUMBER_2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Professional Form */}
                <div className="bg-white dark:bg-black rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-right-10 duration-700">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-gray-50 dark:bg-surface-dark border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black rounded-xl transition-all outline-none dark:text-white font-medium"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full px-6 py-4 bg-gray-50 dark:bg-surface-dark border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black rounded-xl transition-all outline-none dark:text-white font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Required Service</label>
                                <select
                                    name="service"
                                    className="w-full px-6 py-4 bg-gray-50 dark:bg-surface-dark border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black rounded-xl transition-all outline-none dark:text-white font-medium appearance-none"
                                >
                                    <option value="">Select a service</option>
                                    {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Your Area</label>
                                <select
                                    name="area"
                                    className="w-full px-6 py-4 bg-gray-50 dark:bg-surface-dark border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black rounded-xl transition-all outline-none dark:text-white font-medium appearance-none"
                                >
                                    <option value="">Select neighborhood</option>
                                    {AREAS.map(a => <option key={a.slug} value={a.name}>{a.name}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell us about your requirements..."
                                className="w-full px-6 py-4 bg-gray-50 dark:bg-surface-dark border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black rounded-xl transition-all outline-none dark:text-white font-medium resize-none"
                            ></textarea>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white p-6 font-bold text-xl rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all uppercase tracking-widest shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>Submit Enquiry</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
