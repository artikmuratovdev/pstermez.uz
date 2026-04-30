import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useGetRecommendationByIdQuery } from '../app/api/recommendations';
import { toRecommendationCard } from '../utils/apiFormatters';

export default function RecommendationDetail() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetRecommendationByIdQuery(id, {
        skip: !id,
    });
    const recommendation = data?.data ? toRecommendationCard(data.data) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    {isLoading && (
                        <div className="rounded-xl border border-slate-100 bg-white p-6 text-sm font-bold text-slate-500">
                            Tavsiya yuklanmoqda...
                        </div>
                    )}

                    {(error || (!isLoading && !recommendation)) && (
                        <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-sm font-bold text-red-600">
                            Tavsiya topilmadi yoki API xatolik qaytardi.
                        </div>
                    )}

                    {recommendation && (
                        <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-6">
                            <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <Link to="/" className="hover:text-[#0088cc]">Asosiy</Link>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="text-[#0088cc]">Tavsiya</span>
                            </nav>

                            <div className="space-y-3">
                                <span className="inline-block px-3 py-1 bg-[#f4f6fa] text-[#0088cc] text-xs font-bold rounded-full">
                                    {recommendation.source}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                                    {recommendation.title}
                                </h1>
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-bold">
                                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                                    {recommendation.date}
                                </div>
                            </div>

                            <a
                                href={recommendation.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#0088cc] px-5 py-3 text-sm font-bold text-white hover:bg-[#006699] transition-colors"
                            >
                                Open source
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            </a>
                        </article>
                    )}
                </div>

                <div className="hidden lg:block shrink-0">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
