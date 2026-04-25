import React from 'react';
import Sidebar from '../components/Sidebar';

const videoData = [
    {
        id: 1,
        title: "Prezident maktabida Navro'z shodiyonasi",
        date: "2026-04-21T10:30:00",
        duration: "03:45",
        thumbnail: "/images/01.jpg",
        views: "1.2k"
    },
    {
        id: 2,
        title: "Xalqaro matematika olimpiadasi g'oliblari taqdirlandi",
        date: "2026-04-18T14:20:00",
        duration: "05:12",
        thumbnail: "/images/02.jpg",
        views: "850"
    },
    {
        id: 3,
        title: "Maktabimizda 'Zakovat' intellektual o'yini final bosqichi",
        date: "2026-04-15T09:00:00",
        duration: "12:30",
        thumbnail: "/images/03.jpg",
        views: "2.1k"
    },
    {
        id: 4,
        title: "Ingliz tili haftaligi doirasida tashkil etilgan tadbirlar",
        date: "2026-04-10T16:45:00",
        duration: "04:20",
        thumbnail: "/images/04.jpg",
        views: "640"
    },
    {
        id: 5,
        title: "Sport musobaqalari: Futbol bo'yicha maktab birinchiligi",
        date: "2026-04-05T11:15:00",
        duration: "08:15",
        thumbnail: "/images/01.jpg",
        views: "1.5k"
    }
];

export default function Videos() {
    // Sort videos by date (newest first)
    const sortedVideos = [...videoData].sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('uz-UZ', options);
    };

    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    <div className="border-b-2 border-slate-200 pb-4">
                        <h1 className="text-3xl font-black text-[#004c91] uppercase tracking-tight">Videolar</h1>
                        <p className="text-slate-500 mt-2">Maktab hayotiga oid eng so'nggi video lavhalar.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sortedVideos.map((video) => (
                            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-slate-100">
                                <div className="relative aspect-video bg-slate-200">
                                    <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                                            <span className="material-symbols-outlined text-white text-4xl filled">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-[11px] font-bold rounded">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-5 space-y-3">
                                    <h3 className="font-bold text-lg text-slate-800 line-clamp-2 group-hover:text-[#0088cc] transition-colors leading-snug">
                                        {video.title}
                                    </h3>
                                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            {formatDate(video.date)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                                            {video.views} ko'rildi
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
