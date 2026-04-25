import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { newsData } from '../data/newsData';

export default function Article() {
    const { id } = useParams();
    const article = newsData.find(item => item.id === parseInt(id)) || newsData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        if (article.images && article.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % article.images.length);
        }
    };

    const prevImage = (e) => {
        e.preventDefault();
        if (article.images && article.images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + article.images.length) % article.images.length);
        }
    };

    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Article Content */}
                <div className="flex-1 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                        <Link to="/" className="hover:text-[#0088cc]">Asosiy</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link to="/news" className="hover:text-[#0088cc]">Yangiliklar</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-[#0088cc]">{article.category}</span>
                    </nav>

                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-6 py-6 border-y border-slate-100 text-sm text-slate-500 font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#0088cc]">calendar_today</span>
                            {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#0088cc]">visibility</span>
                            {Math.floor(Math.random() * 500) + 100} marta ko'rildi
                        </div>
                    </div>

                    {article.images && article.images.length > 0 ? (
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg group">
                            <img
                                src={article.images[currentImageIndex]}
                                className="w-full h-full object-cover transition-transform duration-700"
                                alt={article.title}
                            />

                            {article.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-20"
                                    >
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-20"
                                    >
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                        {article.images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#0088cc]' : 'w-2 bg-white/50'}`}
                                            ></div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                            <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
                        </div>
                    )}

                    <div
                        className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="pt-10 border-t border-slate-100 mt-10">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-slate-400">ULASHISH:</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="hidden lg:block shrink-0">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
