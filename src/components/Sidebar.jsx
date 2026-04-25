import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-[320px] shrink-0 space-y-6">

            {/* So'nggi yangiliklar Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[17px] font-bold text-slate-900 leading-tight">So'nggi<br />yangiliklar</h2>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0088cc]">
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="group cursor-pointer">
                        <p className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] leading-snug mb-1">
                            "STEM Expo-2026" ko‘rgazmasida maktabimiz o‘quvchilari innovatsion loyihalarini taqdim etishdi
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">calendar_today</span> 25 Aprel, 2026
                        </div>
                    </div>
                    <div className="border-t border-slate-100 pt-4 group cursor-pointer">
                        <p className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] leading-snug mb-1">
                            Prezident maktabiga qabul jarayonlari: eng ko'p beriladigan savollarga javoblar
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">calendar_today</span> 24 Aprel, 2026
                        </div>
                    </div>
                    <div className="border-t border-slate-100 pt-4 group cursor-pointer">
                        <p className="text-[13px] font-bold text-slate-800 group-hover:text-[#0088cc] leading-snug mb-1">
                            "Kitob - eng yaqin do'st" shiori ostida yangi adabiyotlar taqdimoti o'tkazildi
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">calendar_today</span> 23 Aprel, 2026
                        </div>
                    </div>
                </div>
            </div>

            {/* Mashhur teglar Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <h2 className="text-[17px] font-bold text-slate-900 mb-4">Mashhur teglar</h2>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Dunyo</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">O'zbekiston</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Texnologiya</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Sport</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Ma'naviyat</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Ilm-fan</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Olimpiada</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Pedagoglar</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">E'lonlar</span>
                    <span className="px-3 py-1.5 rounded-md border border-slate-100 text-[#0088cc] text-[12px] font-medium hover:bg-slate-50 cursor-pointer">Dunyo</span>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                <h2 className="text-[17px] font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0088cc] text-xl">recommend</span>
                    Tavsiyalar
                </h2>
                <div className="space-y-3">
                    <a href="https://grantlar.uz/tom-howard-margaret-reid-poetry-contest-tanlovi/" target="_blank" rel="noopener noreferrer" className="block bg-[#f4f6fa] rounded-xl p-4 group hover:bg-[#eaf0f7] transition-colors">
                        <span className="inline-block px-2.5 py-0.5 bg-white text-[#0088cc] text-[10px] font-bold rounded-full mb-2">Grantlar.uz</span>
                        <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#0088cc]">
                            Tom Howard Poetry Contest: mukofot – 3500 AQSh dollarigacha!
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">schedule</span> 25 Aprel, 14:15
                        </div>
                    </a>

                    <a href="https://grantlar.uz/esd-okayama-award-tashkilotlar-uchun-talim-boyicha-mahalliy-loyihalar-tanlovi/" target="_blank" rel="noopener noreferrer" className="block bg-[#f4f6fa] rounded-xl p-4 group hover:bg-[#eaf0f7] transition-colors">
                        <span className="inline-block px-2.5 py-0.5 bg-white text-[#0088cc] text-[10px] font-bold rounded-full mb-2">Imkoniyat</span>
                        <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#0088cc]">
                            ESD Okayama Award: Taʼlim boʻyicha mahalliy loyihalar tanlovi
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">schedule</span> 25 Aprel, 12:40
                        </div>
                    </a>

                    <a href="https://grantlar.uz/weinstein-jams-international-fellowship/" target="_blank" rel="noopener noreferrer" className="block bg-[#f4f6fa] rounded-xl p-4 group hover:bg-[#eaf0f7] transition-colors">
                        <span className="inline-block px-2.5 py-0.5 bg-white text-[#0088cc] text-[10px] font-bold rounded-full mb-2">Stipendiya</span>
                        <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#0088cc]">
                            Weinstein Fellowship: AQSHda amaliyot uchun 20 ming dollar!
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">schedule</span> 24 Aprel, 18:20
                        </div>
                    </a>

                    <a href="https://grantlar.uz/scientific-internships-bakalavriat-va-magistratura-talabalari-hamda-bitiruvchilari-uchun-avstriyada-amaliyot/" target="_blank" rel="noopener noreferrer" className="block bg-[#f4f6fa] rounded-xl p-4 group hover:bg-[#eaf0f7] transition-colors">
                        <span className="inline-block px-2.5 py-0.5 bg-white text-[#0088cc] text-[10px] font-bold rounded-full mb-2">Amaliyot</span>
                        <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#0088cc]">
                            Scientific Internships: Avstriyada amaliyot; oylik – 1583 yevro!
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <span className="material-symbols-outlined text-[13px]">schedule</span> 24 Aprel, 10:33
                        </div>
                    </a>
                </div>
            </div>

        </aside>
    );
}
