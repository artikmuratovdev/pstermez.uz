import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useGetCategoriesQuery } from '../app/api/categories';
import { useGetNewsQuery } from '../app/api/news';
import { toNewsCard } from '../utils/apiFormatters';

export default function Category() {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category') ?? undefined;
    const { data: categoriesResponse } = useGetCategoriesQuery({ page: 1, limit: 20, type: 'news', isActive: true });
    const activeCategory = categoriesResponse?.data?.find((category) => category._id === categoryId);
    const { data, error, isLoading } = useGetNewsQuery({
        page: 1,
        limit: 20,
        category: categoryId,
    });
    const newsList = data?.data?.map(toNewsCard) ?? [];

    return (
        <main className="pt-[160px] pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-8">
                    <div className="border-b-2 border-slate-200 pb-4">
                        <h1 className="text-3xl font-black text-primary">{activeCategory?.name ?? 'Yangiliklar'}</h1>
                        <p className="text-slate-500 mt-2">Tanlangan rukn bo'yicha so'nggi yangiliklar.</p>
                    </div>

                    {isLoading && (
                        <div className="rounded-xl border border-slate-100 bg-white p-6 text-sm font-bold text-slate-500">
                            Yangiliklar yuklanmoqda...
                        </div>
                    )}

                    {error && (
                        <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-600">
                            Kategoriya yangiliklarini olishda xatolik yuz berdi.
                        </div>
                    )}

                    <div className="space-y-6">
                        {newsList.map((item) => (
                            <Link to={`/article/${item.id}`} key={item.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-surface-container-high pb-6 last:border-0 hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                <div className="w-full md:w-64 aspect-video flex-shrink-0 overflow-hidden rounded-xl bg-surface-container-low relative">
                                    {item.image ? (
                                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" alt={item.title} src={item.image} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <span className="material-symbols-outlined text-5xl">image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-label text-xs text-primary font-bold uppercase tracking-wider">{item.category}</span>
                                        <span className="text-slate-400 text-xs">- {item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 md:line-clamp-3">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {!isLoading && newsList.length === 0 && (
                        <div className="rounded-xl border border-slate-100 bg-white p-8 text-center text-sm font-bold text-slate-400">
                            Bu ruknda hozircha yangilik yo'q.
                        </div>
                    )}
                </div>

                <Sidebar />
            </div>
        </main>
    );
}
