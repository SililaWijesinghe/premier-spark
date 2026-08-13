import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Users, Trophy, Globe, ArrowRight, Send, ExternalLink, RefreshCw, Laptop, Smartphone, Zap, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const tabs = ["All Projects", "Web Design", "Web Application", "Branding & Identity", "Digital Marketing"];

interface Project {
    title: string;
    category: string;
    url: string;
    description: string;
    tags: string[];
}

const projects: Project[] = [
    {
        title: "Premier Digital Agency",
        category: "Web Design",
        url: "https://premierdigital.lk",
        description: "Our flagship corporate website featuring high-performance animations, immersive typography, and dark-mode luxury design.",
        tags: ["React", "Tailwind CSS", "Motion"]
    },
    {
        title: "Aquamarine Chimpanzee",
        category: "Web Design",
        url: "https://aquamarine-chimpanzee-812307.hostingersite.com/",
        description: "Modern responsive web design with high-converting user experience and bold branding.",
        tags: ["Hosting", "Responsive", "UI/UX"]
    },
    {
        title: "BL Models",
        category: "Web Design",
        url: "https://blmodels.lk",
        description: "Sleek portfolio and talent showcase platform designed for elite modeling agency.",
        tags: ["Portfolio", "Gallery", "Branding"]
    },
    {
        title: "AMDA Official",
        category: "Web Application",
        url: "https://amdaofficial.lk/",
        description: "Professional organizational platform with robust information architecture and custom UI.",
        tags: ["Platform", "Security", "Portal"]
    },
    {
        title: "Cloud Books App",
        category: "Web Application",
        url: "https://cloud-books-app.vercel.app/",
        description: "Cloud-powered accounting and financial management web application with clean analytics.",
        tags: ["React", "Cloud", "Analytics"]
    },
    {
        title: "Suwa Arana Wedamadura",
        category: "Web Application",
        url: "https://suwaaranawedamadura.com/",
        description: "Dedicated healthcare and wellness information portal providing comprehensive patient care resources.",
        tags: ["Healthcare", "Responsive", "UI/UX"]
    },
    {
        title: "Lean Seven",
        category: "Web Design",
        url: "https://leanseven.com.au/",
        description: "Strategic business consulting and operational excellence platform built for modern enterprises.",
        tags: ["Corporate", "Strategy", "UI/UX"]
    },
    {
        title: "HNUF",
        category: "Web Design",
        url: "https://hnuf.org/",
        description: "Non-profit community foundation platform fostering educational and social development initiatives.",
        tags: ["Non-Profit", "Community", "Responsive"]
    },
    {
        title: "Alps Technical Services",
        category: "Web Design",
        url: "https://alpstechnicalservices.com/",
        description: "Professional technical engineering and industrial maintenance service solutions provider.",
        tags: ["Services", "Engineering", "Professional"]
    },
    {
        title: "Nature Surf Villas",
        category: "Web Design",
        url: "https://naturesurfvillas.lk/",
        description: "Exquisite coastal resort and surf villa retreat platform with immersive booking experiences.",
        tags: ["Hospitality", "Tourism", "Booking"]
    },
    {
        title: "Aalanga Escape",
        category: "Web Design",
        url: "https://aalangaescape.lk/",
        description: "Luxury boutique getaway and serene holiday villa experience web showcase.",
        tags: ["Hospitality", "Luxury", "UI/UX"]
    }
];

function LaptopFrame({ url, title, refreshKey }: { url: string; title: string; refreshKey: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.45);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                if (w > 0) {
                    setScale(w / 1440);
                }
            }
        });
        observer.observe(containerRef.current);
        setScale(containerRef.current.clientWidth / 1440);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full max-w-[720px] flex flex-col items-center mx-auto">
            <div className="flex items-center justify-between w-full mb-3 px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A5B0C3]">
                    <Laptop className="w-4 h-4 text-[#E71919]" />
                    <span>MacBook Pro • Retina Landscape (1440×900)</span>
                </div>
                <span className="text-[10px] font-mono text-[#A5B0C3] bg-[#10192A]/80 px-2.5 py-1 rounded-md border border-[#26354D]">16:10 Ratio</span>
            </div>

            {/* Ultra-Thin Vector Lined Chassis */}
            <div className="w-full bg-[#111113] rounded-t-[12px] p-1.5 border-[0.5px] border-[#26354D]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                <style>{`
                    .hide-all-scrollbars::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                    .hide-all-scrollbars {
                        scrollbar-width: none !important;
                        -ms-overflow-style: none !important;
                    }
                `}</style>
                {/* Minimal Notch Camera */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#060B16] rounded-b-md z-30 flex items-center justify-center border-b border-[#26354D]">
                    <div className="w-1 h-1 rounded-full bg-[#10192A] border border-[#26354D]" />
                </div>

                {/* Screen Container strictly 16:10 landscape */}
                <div ref={containerRef} className="bg-[#060B16] rounded-[6px] overflow-hidden relative border border-[#26354D] w-full aspect-[16/10] shadow-inner hide-all-scrollbars">
                    <div className="absolute inset-0 overflow-hidden bg-white hide-all-scrollbars">
                        <div 
                            className="absolute top-0 left-0 origin-top-left bg-white hide-all-scrollbars"
                            style={{ 
                                width: '1440px', 
                                height: '900px', 
                                transform: `scale(${scale})`,
                                overflow: 'hidden'
                            }}
                        >
                            <iframe 
                                key={`desktop-${refreshKey}`}
                                src={url} 
                                title={`${title} Desktop View`}
                                className="w-[1440px] h-[900px] border-0 bg-white hide-all-scrollbars"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                loading="lazy"
                                style={{ overflow: 'hidden' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ultra-Thin MacBook Base / Hinge Bar */}
            <div className="w-full bg-gradient-to-b from-[#1c1c1f] to-[#0a0a0c] h-2.5 rounded-b-lg shadow-md flex items-center justify-center border-t border-[#26354D]/30 relative">
                <div className="w-20 h-0.5 bg-zinc-700/40 rounded-full" />
            </div>
        </div>
    );
}

function MobileFrame({ url, title, refreshKey }: { url: string; title: string; refreshKey: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.55);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                if (w > 0) {
                    setScale(w / 390);
                }
            }
        });
        observer.observe(containerRef.current);
        setScale(containerRef.current.clientWidth / 390);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full max-w-[260px] flex flex-col items-center mx-auto">
            <div className="flex items-center justify-between w-full mb-3 px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A5B0C3]">
                    <Smartphone className="w-4 h-4 text-[#E71919]" />
                    <span>iPhone 16 Pro • Mobile View</span>
                </div>
            </div>

            {/* iPhone Ultra-Thin Vector Chassis */}
            <div className="w-[210px] bg-[#111113] rounded-[36px] p-1.5 border-[0.5px] border-[#26354D]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                <div className="absolute -left-[3px] top-18 w-[2px] h-7 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -left-[3px] top-28 w-[2px] h-9 bg-zinc-600 rounded-l-sm" />
                <div className="absolute -right-[3px] top-24 w-[2px] h-11 bg-zinc-600 rounded-r-sm" />

                {/* Screen */}
                <div ref={containerRef} className="bg-[#060B16] rounded-[30px] overflow-hidden relative border border-[#26354D] h-[420px] w-full hide-all-scrollbars">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-3.5 bg-[#060B16] rounded-full z-30 border border-[#26354D] flex items-center justify-end pr-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#060B16] border border-[#26354D]" />
                    </div>

                    <div className="absolute inset-0 overflow-hidden bg-white hide-all-scrollbars">
                        <div 
                            className="absolute top-0 left-0 origin-top-left bg-white hide-all-scrollbars"
                            style={{ 
                                width: '390px', 
                                height: '844px', 
                                transform: `scale(${scale})`,
                                overflow: 'hidden'
                            }}
                        >
                            <iframe 
                                key={`mobile-${refreshKey}`}
                                src={url} 
                                title={`${title} Mobile View`}
                                className="w-[390px] h-[844px] border-0 bg-white hide-all-scrollbars"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                loading="lazy"
                                style={{ overflow: 'hidden' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface OurWorksProps {
    isHomePage?: boolean;
    initialLimit?: number;
}

export default function OurWorks({ isHomePage = false, initialLimit = 6 }: OurWorksProps) {
    const [activeTab, setActiveTab] = useState("All Projects");
    const [refreshKeys, setRefreshKeys] = useState<Record<string, number>>({});
    const [mobileViews, setMobileViews] = useState<Record<string, 'desktop' | 'mobile'>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [displayCount, setDisplayCount] = useState<number>(initialLimit);

    const handleRetry = () => {
        setIsLoading(true);
        setIsError(false);
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    };

    const simulateNetworkError = () => {
        setIsError(true);
    };

    const filteredProjects = activeTab === "All Projects" 
        ? projects 
        : projects.filter(p => p.category === activeTab);

    const visibleProjects = isHomePage 
        ? filteredProjects.slice(0, displayCount) 
        : filteredProjects;

    const hasMoreOnHome = isHomePage && displayCount < filteredProjects.length;

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setDisplayCount(initialLimit);
    };

    const handleRefresh = (title: string) => {
        setRefreshKeys(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
    };

    return (
        <section id="work" className="py-20 md:py-32 bg-[#060B16] text-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#E71919]/10 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#FF7A00]/10 blur-[140px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]">
                            <Zap className="w-3.5 h-3.5" /> Our Work & Live Previews
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            Ideas. Strategy.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">
                                Live Device Previews.
                            </span>
                        </h2>
                        <p className="text-[#A5B0C3] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            Explore our client websites rendered in real-time inside sleek, vector-lined thin-bezel Apple MacBook Pro and iPhone hardware frames.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:pt-4">
                        {[
                            { icon: Target, number: "250+", label: "Projects Completed" },
                            { icon: Users, number: "200+", label: "Happy Clients" },
                            { icon: Trophy, number: "8+", label: "Years Experience" },
                            { icon: Globe, number: "Global", label: "Client Reach" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#0E1728] border border-[#26354D] flex items-center justify-center text-[#E71919] group-hover:border-[#E71919]/60 transition-colors shadow-lg relative">
                                    <div className="absolute inset-0 bg-[#E71919] blur-[12px] opacity-20 rounded-2xl" />
                                    <stat.icon className="w-5 h-5 relative z-10" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">{stat.number}</div>
                                    <div className="text-xs sm:text-sm text-[#A5B0C3] font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex overflow-x-auto pb-4 mb-16 custom-scrollbar border-b border-[#26354D]">
                    <div className="flex space-x-3">
                        {tabs.map(tab => (
                            <button 
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                                    activeTab === tab 
                                    ? "bg-gradient-to-r from-[#E71919] to-[#FF7A00] text-[#F8FAFC] shadow-[0_0_25px_rgba(231,25,25,0.4)]" 
                                    : "text-[#A5B0C3] hover:text-[#F8FAFC] hover:bg-[#0E1728] bg-[#141F33]/40 border border-[#26354D]"
                                }}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Showcase Grid / Fallback State */}
                {isLoading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[1, 2].map((n) => (
                            <div key={n} className="bg-[#141F33] border border-[#26354D] rounded-[32px] p-12 h-[600px] flex flex-col items-center justify-center animate-pulse">
                                <div className="w-16 h-16 rounded-full bg-[#26354D] mb-6" />
                                <div className="w-3/4 h-8 bg-[#26354D] rounded-lg mb-4" />
                                <div className="w-1/2 h-4 bg-[#26354D] rounded-lg" />
                            </div>
                        ))}
                    </div>
                ) : isError ? (
                    <div className="bg-[#141F33] border border-red-500/30 rounded-[32px] p-12 text-center max-w-2xl mx-auto shadow-[0_0_50px_rgba(255,0,0,0.1)]">
                        <div className="w-16 h-16 rounded-2xl bg-[#E71919]/10 border border-red-500/30 text-[#E71919] flex items-center justify-center mx-auto mb-6">
                            <RefreshCw className="w-8 h-8 animate-spin" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">Unable to Load Projects</h3>
                        <p className="text-[#A5B0C3] text-base mb-8">
                            We encountered a temporary connection issue while fetching our latest project showcases. Please check your connection and try again.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={handleRetry}
                                className="bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:opacity-90 text-[#F8FAFC] px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(231,25,25,0.4)] flex items-center gap-2 cursor-pointer"
                            >
                                <RefreshCw className="w-4 h-4" /> Retry Loading
                            </button>
                        </div>
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="bg-[#141F33] border border-[#26354D] rounded-[32px] p-12 text-center max-w-xl mx-auto">
                        <div className="w-16 h-16 rounded-2xl bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] flex items-center justify-center mx-auto mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">No Projects Found</h3>
                        <p className="text-[#A5B0C3] text-base mb-8">
                            No projects match the selected category &quot;{activeTab}&quot;. Try exploring another category or view all projects.
                        </p>
                        <button
                            onClick={() => setActiveTab("All Projects")}
                            className="bg-[#0E1728] border border-[#26354D] hover:border-[#E71919] text-[#F8FAFC] px-8 py-3.5 rounded-full text-sm font-bold transition-all cursor-pointer"
                        >
                            View All Projects
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-end mb-6">
                            <button
                                onClick={simulateNetworkError}
                                className="text-xs font-mono text-[#A5B0C3] hover:text-[#F8FAFC] underline cursor-pointer"
                            >
                                Test Error Fallback State
                            </button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {visibleProjects.map((project, idx) => {
                                const keyVal = refreshKeys[project.title] || 0;
                                const mobileView = mobileViews[project.title] || 'desktop';

                                return (
                                    <motion.div 
                                        key={project.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="group relative bg-[#141F33] border border-[#26354D] rounded-[32px] overflow-hidden hover:border-[#E71919]/60 transition-all shadow-[0_20px_50px_rgba(6,11,22,0.8)]"
                                    >
                                        {/* Card Top Bar Info */}
                                        <div className="p-6 sm:p-8 pb-6 flex flex-col gap-6 border-b border-[#26354D] bg-[#0E1728]/50">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-xs font-bold text-[#E71919] uppercase tracking-wider">
                                                        <Sparkles className="w-3 h-3" /> {project.category}
                                                    </span>
                                                    <div className="hidden sm:flex items-center gap-2">
                                                        {project.tags.map(t => (
                                                            <span key={t} className="text-[11px] font-medium text-[#A5B0C3] px-2.5 py-0.5 rounded-md bg-[#0E1728] border border-[#26354D]">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <h3 className="text-3xl font-extrabold text-[#F8FAFC] group-hover:text-[#E71919] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-[#A5B0C3] text-base max-w-2xl font-medium">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#26354D]">
                                                <span className="text-xs font-mono text-[#A5B0C3] truncate max-w-[200px] sm:max-w-xs">{project.url}</span>
                                                <div className="flex items-center gap-3">
                                                    <button 
                                                        onClick={() => handleRefresh(project.title)}
                                                        className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#0E1728] border border-[#26354D] text-[#A5B0C3] hover:text-[#F8FAFC] hover:bg-[#26354D] transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
                                                        title="Reload Live Viewport"
                                                    >
                                                        <RefreshCw className="w-3.5 h-3.5" />
                                                        <span className="hidden sm:inline">Refresh</span>
                                                    </button>
                                                    <a 
                                                        href={project.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:opacity-90 text-[#F8FAFC] text-xs font-bold transition-all inline-flex items-center gap-2 shadow-[0_5px_20px_rgba(231,25,25,0.4)] whitespace-nowrap"
                                                    >
                                                        <span>Launch Live Site</span>
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Device Switcher Tab (Visible on all screens) */}
                                        <div className="flex items-center justify-center pt-6 px-6">
                                            <div className="flex items-center gap-2 bg-[#0E1728] p-1.5 rounded-2xl border border-[#26354D] w-full max-w-xs shadow-lg">
                                                <button
                                                    onClick={() => setMobileViews(prev => ({ ...prev, [project.title]: 'desktop' }))}
                                                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                        mobileView === 'desktop'
                                                        ? 'bg-gradient-to-r from-[#E71919] to-[#FF7A00] text-[#F8FAFC] shadow-md'
                                                        : 'text-[#A5B0C3] hover:text-[#F8FAFC]'
                                                    }`}
                                                >
                                                    <Laptop className="w-4 h-4" /> MacBook Pro
                                                </button>
                                                <button
                                                    onClick={() => setMobileViews(prev => ({ ...prev, [project.title]: 'mobile' }))}
                                                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                        mobileView === 'mobile'
                                                        ? 'bg-gradient-to-r from-[#E71919] to-[#FF7A00] text-[#F8FAFC] shadow-md'
                                                        : 'text-[#A5B0C3] hover:text-[#F8FAFC]'
                                                    }`}
                                                >
                                                    <Smartphone className="w-4 h-4" /> iPhone View
                                                </button>
                                            </div>
                                        </div>

                                        {/* Vector-Lined Precision Device Showcase Area */}
                                        <div className="p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#060B16] via-[#0E1728]/50 to-[#141F33] flex items-center justify-center relative overflow-hidden min-h-[460px]">
                                            {/* Subtle grid background */}
                                            <div className="absolute inset-0 bg-[radial-gradient(#26354D_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

                                            {/* Active Device Container */}
                                            <div className="w-full flex items-center justify-center">
                                                {mobileView === 'desktop' ? (
                                                    <div className="w-full transition-all duration-300 flex justify-center">
                                                        <LaptopFrame url={project.url} title={project.title} refreshKey={keyVal} />
                                                    </div>
                                                ) : (
                                                    <div className="w-full transition-all duration-300 flex justify-center">
                                                        <MobileFrame url={project.url} title={project.title} refreshKey={keyVal} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Load More Button on Home Page */}
                        {hasMoreOnHome && (
                            <div className="mt-16 text-center">
                                <button
                                    onClick={() => setDisplayCount(prev => prev + 4)}
                                    className="bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:opacity-90 text-[#F8FAFC] px-10 py-4 rounded-full text-sm font-bold transition-all shadow-[0_0_30px_rgba(231,25,25,0.4)] inline-flex items-center gap-3 cursor-pointer"
                                >
                                    <span>Load More Works</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <div className="mt-4">
                                    <Link 
                                        to="/works" 
                                        className="text-xs text-[#A5B0C3] hover:text-[#F8FAFC] underline transition-colors"
                                    >
                                        Or view all projects on our dedicated Works page &rarr;
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
