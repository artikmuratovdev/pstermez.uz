import React, { useEffect, useRef, useState } from 'react';
import direktorImg from '../../images/direktor.jpg';
import safaraliImg from '../../images/Safarali.jpg';
import sunnatilloImg from '../../images/Sunnatillo.jpg';
import azizbekImg from '../../images/Azizbek.jpg';
import safarmurodImg from '../../images/safarmurod_allaqulov_p.JPG';
import musulmonImg from '../../images/musulmon_qahharov_p.jpg';
import p03 from '../../images/p03_portrait.jpg';
import p04 from '../../images/p04_portrait.jpg';
import p05 from '../../images/p05_portrait.jpg';
import p06 from '../../images/06.jpg';
import p07 from '../../images/p07_portrait.JPG';
import p08 from '../../images/p08_portrait.JPG';

// Scroll Animation Hook
function useScrollReveal(options = { threshold: 0.1 }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [options]);

    return [elementRef, isVisible];
}

function Reveal({ children, className = "", delay = 0 }) {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

const administration = [
    { id: 1, name: "Isaqova Elvina", role: "Ijrochi direktor", email: "director@pstmz.uz", image: direktorImg, type: "lead" },
    { id: 2, name: "Sunnatillo Safarov", role: "Ma'naviy va ma'rifiy ishlar bo'yicha direktor o'rinbosari", email: "sunnatillo@pstmz.uz", image: sunnatilloImg, type: "secondary" },
    { id: 3, name: "Esmaeili Malihe", role: "Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari", email: "m.esmaeili@piima.uz", image: "https://randomuser.me/api/portraits/women/68.jpg", type: "secondary" },
    { id: 4, name: "Sarang Amin", role: "Moliya masalalari bo'yicha menejer", email: "a.sarang@piima.uz", image: "https://randomuser.me/api/portraits/men/46.jpg", type: "secondary" },
    { id: 5, name: "Safarali Mamarasulov", role: "O'quv ishlari bo'yicha direktor o'rinbosari", email: "safarali@pstmz.uz", image: safaraliImg, type: "secondary" },
    { id: 6, name: "Azizbek Asamov", role: "Maktab maslahatchisi", email: "azizbek@pstmz.uz", image: azizbekImg, type: "secondary" },
    { id: 7, name: "Xolmatova Saodat", role: "Maktab hamshirasi", email: "s.xolmatova@piima.uz", image: "https://randomuser.me/api/portraits/women/12.jpg", type: "secondary" }
];

const teachers = [
    { id: 101, name: "Safarmurod Allaqulov", subject: "Computer Science", email: "s.allaqulov@pstmz.uz", image: safarmurodImg },
    { id: 102, name: "Musulmon Qahharov", subject: "Computer Science", email: "m.qahharov@pstmz.uz", image: musulmonImg },
    { id: 103, name: "Pedagog Ism Familiya 3", subject: "Ingliz tili", email: "p3@pstmz.uz", image: p05 },
    { id: 104, name: "Pedagog Ism Familiya 4", subject: "Informatika", email: "p4@pstmz.uz", image: p07 },
    { id: 105, name: "Pedagog Ism Familiya 5", subject: "Ona tili", email: "p5@pstmz.uz", image: p08 },
    { id: 106, name: "Pedagog Ism Familiya 6", subject: "Kimyo", email: "p6@pstmz.uz", image: p03, customScale: "scale-[2.5] object-top" },
    { id: 107, name: "Pedagog Ism Familiya 7", subject: "Biologiya", email: "p7@pstmz.uz", image: p04 },
    { id: 108, name: "Pedagog Ism Familiya 8", subject: "Tarix", email: "p8@pstmz.uz", image: p06 },
];

const internationalTeachers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 30,
    name: `International Teacher Name ${i + 1}`,
    country: ["Great Britain", "USA", "Canada", "Australia", "New Zealand"][i % 5],
    subject: ["Global Perspectives", "Economics", "Computer Science", "Physics", "Chemistry"][i % 5],
    email: `int.teacher${i + 1}@piima.uz`,
    image: `https://i.pravatar.cc/150?u=${i + 300}`
}));

const educators = Array.from({ length: 5 }, (_, i) => ({
    id: i + 50,
    name: `Tarbiyachi Ism Familiya ${i + 1}`,
    role: "Pedagog-Tarbiyachi",
    email: `educator${i + 1}@piima.uz`,
    image: `https://i.pravatar.cc/150?u=${i + 200}`
}));

export default function SchoolTeam() {
    const leadAdmin = administration.find(m => m.type === 'lead');
    const secondaryAdmins = administration.filter(m => m.type === 'secondary');

    return (
        <div className="min-h-screen bg-[#f8fafc] pt-[180px] pb-24 px-4 md:px-10 relative overflow-x-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#f1f5f9_100%)] opacity-80" />

            <div className="max-w-[1500px] mx-auto relative z-10 px-4 md:px-0">

                <Reveal className="text-center mb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-['Cinzel',serif] text-[#004c91] font-bold mb-6 tracking-wider">BIZNING JAMOAMIZ</h1>
                    <div className="w-20 h-1 bg-[#0088cc] mx-auto rounded-full" />
                </Reveal>

                {/* 1. ADMINISTRATION SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0 mb-40 max-w-[1300px] mx-auto">
                    {/* Left 3 members */}
                    <div className="lg:col-span-3 flex flex-col gap-5 items-center lg:items-end order-2 lg:order-1">
                        {secondaryAdmins.slice(0, 3).map((member, idx) => (
                            <Reveal key={member.id} delay={idx * 200} className="w-full flex justify-center lg:justify-end">
                                <CompactAdminCard member={member} />
                            </Reveal>
                        ))}
                    </div>

                    {/* Center Leader */}
                    <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 px-2">
                        <Reveal delay={100}>
                            <CompactLeadAdminCard member={leadAdmin} />
                        </Reveal>
                    </div>

                    {/* Right 3 members */}
                    <div className="lg:col-span-3 flex flex-col gap-5 items-center lg:items-start order-3">
                        {secondaryAdmins.slice(3, 6).map((member, idx) => (
                            <Reveal key={member.id} delay={400 + (idx * 200)} className="w-full flex justify-center lg:justify-start">
                                <CompactAdminCard member={member} />
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 2. TEACHERS SECTION - Pedagoglar bo`limi */}
                <div className="mb-32">
                    <Reveal>
                        <SectionHeader title="Pedagoglar" icon="menu_book" />
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {teachers.map((teacher, idx) => (
                            <Reveal key={teacher.id} delay={(idx % 5) * 100} className="h-full">
                                <StaffCard member={teacher} subField={teacher.subject} />
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 3. INTERNATIONAL TEACHERS SECTION */}
                <div className="mb-32">
                    <Reveal>
                        <SectionHeader title="International Teachers" icon="public" />
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {internationalTeachers.map((teacher, idx) => (
                            <Reveal key={teacher.id} delay={(idx % 5) * 100} className="h-full">
                                <StaffCard member={teacher} subField={teacher.subject} country={teacher.country} />
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 4. EDUCATORS SECTION */}
                <div className="mb-20 lg:mb-24">
                    <Reveal>
                        <SectionHeader title="Pedagog-Tarbiyachilar" icon="psychology" />
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {educators.map((educator, idx) => (
                            <Reveal key={educator.id} delay={(idx % 5) * 100} className="h-full">
                                <StaffCard member={educator} subField={educator.role} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionHeader({ title, icon }) {
    return (
        <div className="flex flex-col items-center mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-12 md:w-20 bg-[#004c91]/20" />
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0088cc] text-[20px]">{icon}</span>
                    <h2 className="text-2xl md:text-3xl font-['Cinzel',serif] text-[#004c91] font-bold">{title}</h2>
                </div>
                <div className="h-[1px] w-12 md:w-20 bg-[#004c91]/20" />
            </div>
            <div className="w-12 h-0.5 bg-[#0088cc] rounded-full" />
        </div>
    );
}

function CompactLeadAdminCard({ member }) {
    return (
        <div className="relative group w-full max-w-[440px] animate-slide-up">
            <div className="relative bg-white border border-slate-100 rounded-[60px] p-8 md:p-14 pb-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)] ring-1 ring-slate-50 text-center transition-all duration-700 hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#004c91] text-white px-10 py-2 rounded-full text-[11px] uppercase font-black tracking-[0.3em] shadow-lg">
                    Ijrochi direktor
                </div>
                <div className="w-52 h-64 mx-auto mb-10 relative">
                    <div className="absolute inset-0 bg-[#f8fafc] rounded-[40px] border-[5px] border-white shadow-xl overflow-hidden">
                        <img src={member.image} className="w-full h-full object-cover transition-all duration-1000 scale-[1.3] group-hover:scale-[1.4]" alt="lead" />
                    </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#004c91] mb-2 font-['Cinzel',serif] uppercase tracking-wider">{member.name}</h3>
                <p className="text-[#0088cc] font-black text-[12px] uppercase tracking-widest mb-8">{member.role}</p>
                <div className="flex items-center justify-center gap-3 text-slate-400 text-xs font-bold border-t border-slate-50 pt-8 group-hover:text-[#004c91] transition-all">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    {member.email}
                </div>
            </div>
        </div>
    );
}

function CompactAdminCard({ member }) {
    return (
        <div className="relative group w-full max-w-[280px] animate-slide-up">
            <div className="relative bg-white border border-slate-100 rounded-[35px] p-4 pr-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[#0088cc]/30 hover:-translate-y-1 flex items-center gap-4">
                <div className="w-16 h-20 shrink-0 relative">
                    <div className="absolute inset-0 bg-[#f1f5f9] rounded-2xl border-2 border-white shadow-sm overflow-hidden">
                        <img src={member.image} className="w-full h-full object-cover scale-[1.2]" alt="admin" />
                    </div>
                </div>
                <div className="flex flex-col min-w-0">
                    <h4 className="text-[#004c91] font-bold text-[14px] mb-0.5 leading-tight group-hover:text-[#0088cc] transition-colors">{member.name}</h4>
                    <p className="text-[#0088cc] text-[8px] uppercase font-black tracking-tighter opacity-80 leading-tight">
                        {member.role}
                    </p>
                    <div className="text-[9px] text-slate-300 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                        <span className="material-symbols-outlined text-[12px]">mail</span>
                        <span className="truncate">{member.email.split('@')[0]}...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AdminCard({ member }) { return <CompactAdminCard member={member} />; }
function LeadAdminCard({ member }) { return <CompactLeadAdminCard member={member} />; }

function StaffCard({ member, subField, country }) {
    const scaleClass = member.customScale || "scale-[1.2]";
    return (
        <div className="bg-white border border-slate-100 rounded-[30px] p-5 pb-8 text-center transition-all duration-500 hover:shadow-xl hover:border-[#0088cc]/20 hover:-translate-y-2 group h-full flex flex-col">
            <div className="aspect-[3/4] w-full mb-5 relative overflow-hidden rounded-2xl bg-slate-50 border-4 border-white shadow-sm">
                <img src={member.image} className={`w-full h-full object-cover transition-all duration-700 ${scaleClass} group-hover:scale-[1.3]`} alt="staff" />
                {country && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-black text-[#004c91] shadow-sm border border-slate-100">
                        {country}
                    </div>
                )}
            </div>
            <h4 className="text-[#004c91] font-bold text-[15px] mb-1 leading-tight group-hover:text-[#0088cc] transition-colors">
                {member.name}
            </h4>
            <p className="text-[#0088cc] text-[10px] uppercase font-black tracking-widest mb-4 opacity-80">{subField}</p>
            <div className="mt-auto text-[10px] text-slate-400 font-bold flex items-center justify-center gap-1.5 pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                {member.email}
            </div>
        </div>
    );
}

const SocialIcon = ({ icon }) => (
    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all cursor-pointer">
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </div>
);
