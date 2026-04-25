import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [weather, setWeather] = useState({ temp: '--', code: 0, isDay: 1 });
    const [lang, setLang] = useState('uz');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Fetch real-time weather for Termiz (Lat: 37.2242, Lon: 67.2783)
        fetch('https://api.open-meteo.com/v1/forecast?latitude=37.2242&longitude=67.2783&current_weather=true')
            .then(response => response.json())
            .then(data => {
                if (data && data.current_weather) {
                    setWeather({
                        temp: Math.round(data.current_weather.temperature),
                        code: data.current_weather.weathercode,
                        isDay: data.current_weather.is_day
                    });
                }
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
            });
    }, []);

    const renderWeatherIcon = () => {
        const { code, isDay } = weather;
        if (code <= 1) { // Clear
            return isDay ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm scale-95">
                    <path d="M12 2V4M12 20V22M4 12H2M22 12H20M4.92893 4.92893L6.34315 6.34315M17.6569 17.6569L19.0711 19.0711M4.92893 19.0711L6.34315 17.6569M17.6569 4.92893L19.0711 6.34315" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="5" fill="#FFD000" stroke="#1E293B" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="5" fill="#FFC107" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm scale-95">
                    <path d="M20.9 14.5A7.001 7.001 0 0113.5 6a7 7 0 00-6 10.5 7.001 7.001 0 0013.4-2z" fill="#94A3B8" stroke="#1E293B" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            );
        } else if (code <= 48) { // Cloudy or Fog
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm scale-95 -ml-1">
                    {isDay && <circle cx="9" cy="9" r="4" fill="#FFC107" stroke="#1E293B" strokeWidth="1.5" />}
                    <path d="M17.5 19H8.5A5.5 5.5 0 0 1 7 8.2a6 6 0 0 1 11.2-2.3 4.5 4.5 0 0 1-.7 9.1z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            );
        } else if (code >= 51 && code <= 67) { // Rain
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm scale-95 -ml-1">
                    <path d="M17.5 16H8.5A5.5 5.5 0 0 1 7 5.2a6 6 0 0 1 11.2-2.3 4.5 4.5 0 0 1-.7 9.1z" fill="#94A3B8" stroke="#1E293B" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M11 17L9 21M15 17L13 21" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        } else { // Snow
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm scale-95 -ml-1">
                    <path d="M17.5 16H8.5A5.5 5.5 0 0 1 7 5.2a6 6 0 0 1 11.2-2.3 4.5 4.5 0 0 1-.7 9.1z" fill="#CBD5E1" stroke="#1E293B" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M11 19h.01M15 19h.01M13 21h.01M9 21h.01" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        }
    };

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/20 transition-all duration-300">
                {/* Neon Progress Bar */}
                <div
                    className="absolute top-0 left-0 h-[3px] z-[60] transition-all duration-300 ease-out"
                    style={{
                        width: `${scrollProgress}%`,
                    }}
                />

                <div className="w-full max-w-[1300px] mx-auto px-4 md:px-6">
                    {/* Top thin header */}
                    <div className="hidden lg:flex items-center justify-between py-2 text-[12px] font-medium text-slate-800">
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-1.5 cursor-pointer group">
                                {renderWeatherIcon()}
                                <span className="text-[#0088cc] font-bold group-hover:text-[#006699] transition-colors">{weather.temp}°C Termiz</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/images/hamkor01.bmp" alt="Hamkor" className="h-[18px] w-auto object-contain mix-blend-multiply cursor-pointer hover:scale-105 transition-transform duration-300" />
                                <img src="/images/hamkor02.bmp" alt="Hamkor" className="h-[18px] w-auto object-contain mix-blend-multiply cursor-pointer hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="relative group cursor-pointer z-50">
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-slate-400">language</span>
                                    <span>{lang === 'uz' ? "O'zbekcha" : "English"}</span>
                                    <span className="material-symbols-outlined text-[15px] text-slate-400 transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                                </div>
                                <div className="absolute top-full right-0 w-32 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 py-1 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <button className="w-full text-left px-4 py-2 hover:bg-[#0088cc]/10 text-[13px] font-medium transition-colors" onClick={() => setLang('uz')}>O'zbekcha</button>
                                    <button className="w-full text-left px-4 py-2 hover:bg-[#0088cc]/10 text-[13px] font-medium transition-colors" onClick={() => setLang('en')}>English</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Floating Navbar */}
                    <nav className="w-full bg-white/40 backdrop-blur-xl rounded-2xl h-[64px] flex items-center justify-between px-3 md:px-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative transition-all duration-300 mt-1 lg:mt-0 mb-2 lg:mb-4">
                        <div className="flex items-center gap-4 lg:gap-6">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-2.5 pr-2 group" onClick={() => setIsMenuOpen(false)}>
                                <img src="/images/aa1 logo.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                                <div className="flex flex-col justify-center">
                                    <span className="font-['Cinzel',serif] font-bold text-[#004c91] tracking-wider text-[10px] md:text-[12px] leading-tight uppercase transition-colors">
                                        Termiz shahridagi
                                    </span>
                                    <span className="font-['Cinzel',serif] font-bold text-[#004c91] tracking-wider text-[10px] md:text-[12px] leading-tight uppercase transition-colors">
                                        Prezident Maktabi
                                    </span>
                                </div>
                            </Link>

                            {/* Nav Links (Desktop) */}
                            <div className="hidden lg:flex items-center h-full">
                                <Link className="h-[64px] flex items-center text-[13px] font-bold text-slate-800 hover:text-[#0088cc] transition-colors gap-1 px-3" to="/news">
                                    {lang === 'uz' ? 'Yangiliklar' : 'News'}
                                </Link>

                                <div className="relative group h-[64px] px-3 flex items-center cursor-pointer">
                                    <span className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] transition-colors flex items-center gap-1">
                                        {lang === 'uz' ? 'Maktab' : 'School'} <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                                    </span>
                                    <div className="absolute top-[64px] left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1">
                                            <Link to="/maktab-haqida" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Maktab haqida' : 'About School'}</Link>
                                            <Link to="/maktab-konstitutsiyasi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Maktab konstitutsiyasi' : 'School Constitution'}</Link>
                                            <Link to="/maktab-nizomi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Maktab Nizomi' : 'School Charter'}</Link>
                                            <Link to="/maktab-odob-axloqi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Maktab odob-axloq qoidalari' : 'Code of Conduct'}</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group h-[64px] px-3 flex items-center cursor-pointer">
                                    <span className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] transition-colors flex items-center gap-1">
                                        {lang === 'uz' ? 'Tuzilma' : 'Structure'} <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                                    </span>
                                    <div className="absolute top-[64px] left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1">
                                            <Link to="/maktab-jamoasi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Maktab jamoasi' : 'School Team'}</Link>
                                            <Link to="/rahbariyat" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Rahbariyat' : 'Management'}</Link>
                                            <Link to="/manaviyat" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Ma\'naviyat bo\'limi' : 'Spiritual Dept'}</Link>
                                            <Link to="/oquv-bolimi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'O\'quv bo\'limi' : 'Education Dept'}</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group h-[64px] px-3 flex items-center cursor-pointer">
                                    <span className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] transition-colors flex items-center gap-1">
                                        {lang === 'uz' ? 'Faoliyat' : 'Activity'} <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                                    </span>
                                    <div className="absolute top-[64px] left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1">
                                            <Link to="/qabul-2026" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Qabul-2026' : 'Admission-2026'}</Link>
                                            <Link to="/qabul-nizomi" className="block px-5 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0088cc] transition-colors">{lang === 'uz' ? 'Qabul nizomi' : 'Admission Rules'}</Link>
                                        </div>
                                    </div>
                                </div>

                                <Link className="h-[64px] flex items-center text-[13px] font-bold text-slate-800 hover:text-[#0088cc] transition-colors px-3" to="/videos">
                                    {lang === 'uz' ? 'Videolar' : 'Videos'}
                                </Link>
                                <Link className="h-[64px] flex items-center text-[13px] font-bold text-slate-800 hover:text-[#0088cc] transition-colors px-3" to="/aloqa">
                                    {lang === 'uz' ? 'Aloqa' : 'Contact'}
                                </Link>
                            </div>
                        </div>

                        {/* Social Icons (Desktop) */}
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <a href="https://t.me/pmtermiz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#0088cc] hover:text-white transition-all duration-300 group/social">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/pmtermiz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all duration-300">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Drawer (Side) */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100]" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-white w-[80%] h-full shadow-2xl flex flex-col p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                            <h2 className="font-bold text-[#004c91] uppercase tracking-wide">Menyu</h2>
                            <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 overflow-y-auto pb-10">
                            <Link to="/news" className="text-lg font-bold text-slate-800 hover:text-[#0088cc] transition-colors" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Yangiliklar' : 'News'}</Link>
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{lang === 'uz' ? 'Maktab' : 'School'}</h3>
                                <Link to="/maktab-haqida" className="block pl-4 text-slate-700 font-medium hover:text-[#0088cc]" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Maktab haqida' : 'About School'}</Link>
                                <Link to="/maktab-konstitutsiyasi" className="block pl-4 text-slate-700 font-medium hover:text-[#0088cc]" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Maktab konstitutsiyasi' : 'School Constitution'}</Link>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{lang === 'uz' ? 'Tuzilma' : 'Structure'}</h3>
                                <Link to="/maktab-jamoasi" className="block pl-4 text-slate-700 font-medium hover:text-[#0088cc]" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Maktab jamoasi' : 'School Team'}</Link>
                                <Link to="/rahbariyat" className="block pl-4 text-slate-700 font-medium hover:text-[#0088cc]" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Rahbariyat' : 'Management'}</Link>
                            </div>
                            <Link to="/videos" className="text-lg font-bold text-slate-800 hover:text-[#0088cc] transition-colors" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Videolar' : 'Videos'}</Link>
                            <Link to="/aloqa" className="text-lg font-bold text-slate-800 hover:text-[#0088cc] transition-colors" onClick={() => setIsMenuOpen(false)}>{lang === 'uz' ? 'Aloqa' : 'Contact'}</Link>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-3">
                            <div className="flex items-center gap-3 p-3 bg-[#f4f6fa] rounded-xl">
                                {renderWeatherIcon()}
                                <span className="text-[#0088cc] font-bold">{weather.temp}°C Termiz</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Mobile Navigation Bar - Fixed to Viewport Bottom */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 h-[64px] z-[90] flex items-center justify-around px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                <Link to="/" className="flex flex-col items-center justify-center p-2 group" onClick={() => setIsMenuOpen(false)}>
                    <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#0088cc]">home</span>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#0088cc]">{lang === 'uz' ? 'Bosh sahifa' : 'Home'}</span>
                </Link>

                <Link to="/news" className="flex flex-col items-center justify-center p-2 group" onClick={() => setIsMenuOpen(false)}>
                    <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#0088cc]">view_headline</span>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#0088cc]">{lang === 'uz' ? 'Yangiliklar' : 'News'}</span>
                </Link>

                <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center p-2 group">
                    <div className={`p-1 rounded-lg transition-colors ${isMenuOpen ? 'bg-[#0088cc] text-white' : 'text-slate-400 group-hover:text-[#0088cc]'}`}>
                        <span className="material-symbols-outlined text-[24px]">grid_view</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#0088cc]">{lang === 'uz' ? 'Menyu' : 'Menu'}</span>
                </button>

                <Link to="/videos" className="flex flex-col items-center justify-center p-2 group" onClick={() => setIsMenuOpen(false)}>
                    <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#0088cc]">movie</span>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#0088cc]">{lang === 'uz' ? 'Videolar' : 'Videos'}</span>
                </Link>

                <Link to="/maktab-jamoasi" className="flex flex-col items-center justify-center p-2 group" onClick={() => setIsMenuOpen(false)}>
                    <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#0088cc]">group</span>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#0088cc]">Team</span>
                </Link>
            </div>
        </>
    );
}
