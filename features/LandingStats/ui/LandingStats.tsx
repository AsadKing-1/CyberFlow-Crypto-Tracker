export default function LandingStats() {
    return (
        <section className="relative w-full py-12 overflow-hidden border-y border-white/5 bg-[#090f19]/30 backdrop-blur-md">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center">
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">$12B+</span>
                        <span className="text-xs md:text-sm text-primary font-bold tracking-[0.2em] uppercase">Quarterly Volume</span>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">2.5M+</span>
                        <span className="text-xs md:text-sm text-primary font-bold tracking-[0.2em] uppercase">Active Traders</span>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{"<"}1ms</span>
                        <span className="text-xs md:text-sm text-primary font-bold tracking-[0.2em] uppercase">Trade Latency</span>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">99.9%</span>
                        <span className="text-xs md:text-sm text-primary font-bold tracking-[0.2em] uppercase">Uptime SLA</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
