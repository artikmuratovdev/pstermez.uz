import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useGetVideosQuery } from '../app/api/videos';
import { toVideoCard } from '../utils/apiFormatters';

export default function Videos() {
    const { data, error, isLoading } = useGetVideosQuery({ page: 1, limit: 20 });
    const sortedVideos = (data?.data?.map(toVideoCard) ?? [])
        .sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));

    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-8">
                    <div className="border-b-2 border-slate-200 pb-4">
                        <h1 className="text-3xl font-black text-[#004c91] uppercase tracking-tight">Videolar</h1>
                        <p className="text-slate-500 mt-2">Maktab hayotiga oid eng so'nggi video lavhalar.</p>
                    </div>

                    {isLoading && (
                        <div className="rounded-xl border border-slate-100 bg-white p-6 text-sm font-bold text-slate-500">
                            Videolar yuklanmoqda...
                        </div>
                    )}

                    {error && (
                        <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-600">
                            API dan videolarni olishda xatolik yuz berdi.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sortedVideos.map((video) => (
                            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-slate-100">
                                <div className="relative aspect-video bg-slate-200">
                                    {video.videoUrl ? (
                                        <video
                                            className="h-full w-full object-cover"
                                            controls
                                            preload="metadata"
                                            poster={video.thumbnail || undefined}
                                        >
                                            <source src={video.videoUrl} type={video.mimeType || 'video/mp4'} />
                                        </video>
                                    ) : video.thumbnail ? (
                                        <Link to={`/article/${video.id}`} className="block h-full w-full">
                                            <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                                        </Link>
                                    ) : (
                                        <Link to={`/article/${video.id}`} className="w-full h-full flex items-center justify-center text-slate-400">
                                            <span className="material-symbols-outlined text-5xl">play_circle</span>
                                        </Link>
                                    )}
                                    {!video.videoUrl && (
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                                            <span className="material-symbols-outlined text-white text-4xl filled">play_arrow</span>
                                        </div>
                                        </div>
                                    )}
                                    {video.duration && (
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-[11px] font-bold rounded">
                                            {video.duration}
                                        </div>
                                    )}
                                </div>
                                <div className="p-5 space-y-3">
                                    <Link to={`/article/${video.id}`} className="block font-bold text-lg text-slate-800 line-clamp-2 group-hover:text-[#0088cc] transition-colors leading-snug">
                                        {video.title}
                                    </Link>
                                    {video.description && (
                                        <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                                            {video.description}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            {video.date}
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

                    {!isLoading && sortedVideos.length === 0 && (
                        <div className="rounded-xl border border-slate-100 bg-white p-8 text-center text-sm font-bold text-slate-400">
                            Hozircha videolar yo'q.
                        </div>
                    )}
                </div>

                <div className="hidden lg:block">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
