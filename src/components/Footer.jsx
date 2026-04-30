import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 bg-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
                <div className="space-y-4">
                    <div className="text-xl font-bold text-slate-900">pstermez.uz</div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Termiz shahridagi Prezident maktabi rasmiy veb-portali. Barcha yangiliklar va ma'lumotlar shu yerda.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Bo'limlar</h4>
                    <div className="flex flex-col space-y-2">
                        <Link className="text-slate-500 hover:underline decoration-2 transition-all text-sm" to="/news">Yangiliklar</Link>
                        <Link className="text-slate-500 hover:underline decoration-2 transition-all text-sm" to="/videos">Videolar</Link>
                        <Link className="text-slate-500 hover:underline decoration-2 transition-all text-sm" to="/school-life">Maktab hayoti</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Ma'lumot</h4>
                    <div className="flex flex-col space-y-2">
                        <Link className="text-slate-500 hover:underline decoration-2 transition-all text-sm" to="/aloqa">Bog‘lanish</Link>
                        <Link className="text-slate-500 hover:underline decoration-2 transition-all text-sm" to="/privacy-policy">Maxfiylik siyosati</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-200 text-center">
                <p className="text-slate-500 text-sm">© 2026 pstermez.uz. Barcha huquqlar himoyalangan.</p>
            </div>
        </footer>
    );
}
