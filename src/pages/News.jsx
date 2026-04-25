import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { newsData } from '../data/newsData';

export default function News() {
    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-12">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b-2 border-slate-200 pb-4">
                            So'nggi <span className="text-[#0088cc]">yangiliklar</span>
                        </h2>

                        <div className="space-y-10">
                            {newsData.map((item) => (
                                <Link key={item.id} to={`/article/${item.id}`} className="flex flex-col md:flex-row gap-6 group border-b border-slate-100 pb-8 last:border-0">
                                    <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                                        <div className="absolute top-3 left-3 px-2 py-1 bg-[#0088cc] text-white text-[9px] font-bold rounded uppercase tracking-wider">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span> {item.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#0088cc] leading-snug transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:block">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
