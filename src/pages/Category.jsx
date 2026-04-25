import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Category() {
    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-8">
                    <div className="border-b-2 border-slate-200 pb-4">
                        <h1 className="text-3xl font-black text-primary">Jahon</h1>
                        <p className="text-slate-500 mt-2">Dunyo bo'ylab eng so'nggi va muhim yangiliklar.</p>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Link to="/article" key={item} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-surface-container-high pb-6 last:border-0 hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                <div className="w-full md:w-64 aspect-video flex-shrink-0 overflow-hidden rounded-xl bg-surface-container-low relative">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" alt="News" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZU7Epe6IBlkzhgXLKdtk_p2pAsaoSGQqORdq1ljjuPBswH0jvdPfVUoPmKmNN9t9Gg4s-tOYmTRS73iSkLljP6QJbFJGubEw0GZb8rt3Xzr6KcVXCZwoq3eFx0zLW_Y5lSPjW96z3VFI6xPR5zmLLVhEeg0RSZDFXt5FH9bR5-hRVr_xa_ijEAiLbYCDMXpavSqINLo1utIkxTRukJS-TT8jNvqm5_Vpbg7-wK_-709dWS0Ba__7IjFOlh3yIoS6AOapiQOyjRqd" />
                                </div>
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-label text-xs text-primary font-bold uppercase tracking-wider">Siyosat</span>
                                        <span className="text-slate-400 text-xs">• 2 soat oldin</span>
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">AQSh va Xitoy o'rtasidagi muzokaralar yangi bosqichga ko'tarildi</h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 md:line-clamp-3">Ikki davlat rahbarlari yashil energiya va savdo aloqalari bo'yicha muhim kelishuvlarga erishdilar. Bu haqda xalqaro axborot agentliklari xabar bermoqda.</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center pt-8">
                        <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                            Yana yuklash
                        </button>
                    </div>
                </div>

                <Sidebar />
            </div>
        </main>
    );
}
