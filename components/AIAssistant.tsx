
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, SERVICES, AREAS, PRIMARY_CITY } from '../constants';

// System prompt to ground the AI in company context
const SYSTEM_PROMPT = `
You are the AI Assistant for ${COMPANY_NAME}, a professional cleaning service provider in ${PRIMARY_CITY} with 25+ years of experience.
Your goal is to help users with questions about our services, areas we cover, and how to contact us.

Key Information:
- Company Name: ${COMPANY_NAME}
- Services: ${SERVICES.map(s => s.name).join(', ')}
- Location: Based in ${PRIMARY_CITY}, serving over 50+ neighborhoods including ${AREAS.slice(0, 5).map(a => a.name).join(', ')}.
- Contact: Phone ${PHONE_NUMBER}, Email ${EMAIL}.
- Booking: Users can book via the "Book Service" button or by calling us.

Tone: Professional, helpful, clean, and efficient.
If you don't know an answer, suggest the user call us at ${PHONE_NUMBER}.
`;

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
        { role: 'ai', text: `Hi! I'm your ${COMPANY_NAME} assistant. How can I help you today?` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initialize Gemini using Vite environment variables
    // For local dev, add VITE_GEMINI_API_KEY to your .env file
    // For Hugging Face, add VITE_GEMINI_API_KEY to Settings -> Secrets
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        const newUserMessage = { role: 'user' as const, text: userMsg };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);
        setInput('');

        try {
            if (!API_KEY) {
                console.warn("Gemini API Key is missing. Please check your .env file.");
                setMessages(prev => [...prev, { role: 'ai', text: "I'm currently in 'Demo Mode'. To enable my full intelligence, please provide a Gemini API Key in the .env file and restart the server." }]);
                setIsLoading(false);
                return;
            }

            console.log("Initializing Gemini Model: gemini-1.5-flash");
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            // Build history: Inject system prompt as the first exchange for better compatibility
            const history = [
                { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
                { role: "model", parts: [{ text: "Understood. I am the AI assistant for " + COMPANY_NAME + ". How can I help?" }] },
                ...messages.slice(1).map(m => ({
                    role: m.role === 'ai' ? 'model' : 'user',
                    parts: [{ text: m.text }],
                }))
            ];

            const chat = model.startChat({ history });
            const result = await chat.sendMessage(userMsg);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'ai', text }]);
        } catch (error) {
            console.error("Gemini Error:", error);
            setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please call us at " + PHONE_NUMBER + " for immediate assistance." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const SHOW_AI = !!import.meta.env.VITE_GEMINI_API_KEY;

    return (
        <div className="md:fixed md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-3 font-sans print:hidden">

            {/* Desktop Floating Menu (Hidden on Mobile) */}
            <div className={`hidden md:flex flex-col gap-3 transition-all duration-500 origin-bottom ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>

                {/* AI Assistant (Only if Key exists) */}
                {SHOW_AI && (
                    <button
                        onClick={() => { setIsOpen(true); setIsExpanded(false); }}
                        className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 group relative"
                        title="AI Assistant"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>
                )}

                {/* WhatsApp */}
                <a
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "919986655556"}?text=Hi, I would like to enquire about your cleaning services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
                >
                    <svg className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.113 2.95.048.074 2.095 3.199 5.074 4.484.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>

                {/* Call */}
                <a
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                    className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>
            </div>

            {/* Desktop Toggle Button (Hidden on Mobile) */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`hidden md:flex w-16 h-16 rounded-full shadow-2xl items-center justify-center text-white transition-all duration-500 hover:scale-110 active:scale-95 z-10 ${isExpanded ? 'bg-gray-900 rotate-180' : 'bg-blue-600'}`}
            >
                {isExpanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-[8px] font-bold uppercase tracking-tighter -mt-1">Support</span>
                    </div>
                )}
            </button>

            {/* Mobile Bottom Navigation Bar (Visible on Mobile Only) */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 px-1 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all animate-in slide-in-from-bottom duration-500">

                {/* Home */}
                <Link to="/" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase">Home</span>
                </Link>

                {/* Call Us */}
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase">Call US</span>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "919986655556"}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 text-gray-500 hover:text-green-600 transition-colors">
                    <svg className="w-6 h-6 mb-1 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.113 2.95.048.074 2.095 3.199 5.074 4.484.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase">WhatsApp</span>
                </a>

                {/* AI Assistant */}
                {SHOW_AI && (
                    <button onClick={() => setIsOpen(true)} className={`flex flex-col items-center p-2 transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="text-[10px] font-bold uppercase">AI Help</span>
                    </button>
                )}
            </nav>

            {/* Chat Window */}
            {SHOW_AI && isOpen && (
                <div className="fixed md:absolute bottom-0 md:bottom-20 right-0 md:right-0 w-full md:w-[400px] h-full md:h-[600px] bg-white dark:bg-background-dark md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border-t md:border border-gray-200 dark:border-gray-800 animate-in slide-in-from-bottom-10 duration-500 backdrop-blur-xl z-[120]">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white flex justify-between items-center bg-grid-pattern shrink-0">
                        <div>
                            <h3 className="font-bold text-lg">AI Assistant</h3>
                            <p className="text-xs opacity-80 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online & Ready
                            </p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-gray-100 dark:bg-surface-dark text-gray-800 dark:text-gray-200 rounded-tl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none flex gap-1">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer / Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-black/50">
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about services, pricing..."
                                className="w-full pl-4 pr-12 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-full text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                            />
                            <button
                                onClick={handleSend}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-center mt-3 text-gray-400">Powered by Gemini AI • Protected by SSL</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;
