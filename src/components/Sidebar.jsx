import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../app/api/categories';
import { useGetNewsQuery } from '../app/api/news';
import { useGetRecommendationsQuery } from '../app/api/recommendations';
import { toNewsCard, toRecommendationCard } from '../utils/apiFormatters';

export default function Sidebar() {
    const { data: newsResponse } = useGetNewsQuery({ page: 1, limit: 3 });
    const { data: categoriesResponse } = useGetCategoriesQuery({ page: 1, limit: 10, type: 'news', isActive: true });
    const {
        data: recommendationsResponse,
        error: recommendationsError,
        isLoading: recommendationsLoading,
    } = useGetRecommendationsQuery({ page: 1, limit: 4 });
    const latestNews = newsResponse?.data?.map(toNewsCard) ?? [];
    const categories = categoriesResponse?.data ?? [];
    const recommendations = recommendationsResponse?.data?.map(toRecommendationCard) ?? [];

    return (
        <aside className="w-full lg:w-[320px] shrink-0 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[17px] font-bold text-slate-900 leading-tight">So'nggi<br />yangiliklar</h2>
                    <Link to="/news" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0088cc]">
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </Link>
                </div>

                <div className="space-y-4">
                    {latestNews.map((item, index) => (
                        <Link key={item.id} to={`/article/${item.id}`} className={`${index > 0 ? 'border-t border-slate-100 pt-4' : ''} block group`}>
                            <p className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] leading-snug mb-1">
                                {item.title}
                            </p>
                            <div className="flex items-center gap-1 text-[11px] text-slate-400">
                                <span className="material-symbols-outlined text-[13px]">calendar_today</span> {item.date}
                            </div>
                        </Link>
                    ))}

                    {latestNews.length === 0 && (
                        <div className="text-[13px] font-bold text-slate-400">
                            Yangiliklar topilmadi.
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <h2 className="text-[17px] font-bold text-slate-900 mb-4">Mashhur teglar</h2>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            to={`/category?category=${category._id}`}
                            className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50"
                        >
                            {category.name}
                        </Link>
                    ))}

                    {categories.length === 0 && (
                        <span className="text-[13px] font-bold text-slate-400">Kategoriyalar topilmadi.</span>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <h2 className="text-[17px] font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0088cc] text-xl">recommend</span>
                    Tavsiyalar
                </h2>
                <div className="space-y-3">
                    {recommendationsLoading && (
                        <div className="rounded-xl bg-[#f4f6fa] p-4 text-[13px] font-bold text-slate-400">
                            Tavsiyalar yuklanmoqda...
                        </div>
                    )}

                    {recommendationsError && (
                        <div className="rounded-xl bg-red-50 p-4 text-[13px] font-bold text-red-600">
                            Tavsiyalarni olishda xatolik yuz berdi.
                        </div>
                    )}

                    {recommendations.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#f4f6fa] rounded-xl p-4 group hover:bg-[#eaf0f7] transition-colors"
                        >
                            <span className="inline-block px-2.5 py-0.5 bg-white text-[#0088cc] text-[10px] font-bold rounded-full mb-2">
                                {item.source}
                            </span>
                            <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#0088cc]">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-1 text-[11px] text-slate-400">
                                <span className="material-symbols-outlined text-[13px]">schedule</span> {item.date}
                            </div>
                        </a>
                    ))}

                    {!recommendationsLoading && recommendations.length === 0 && (
                        <div className="rounded-xl bg-[#f4f6fa] p-4 text-[13px] font-bold text-slate-400">
                            Tavsiyalar topilmadi.
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
