import Link from "next/link"

export default function LandingHero() {
    return (
        <section className="relative flex justify-center items-center w-full h-[calc(100dvh-75px)] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
            <div className="flex flex-col gap-6 max-w-5xl mx-auto items-center">
                <h1 className="relative z-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold px-5 leading-tight tracking-tight [text-shadow:0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.4)]">
                    WATCH THE CRYPTO MARKET <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-primary to-white [text-shadow:0_0_20px_rgba(255,255,255,0.8),0_0_40px_var(--color-primary)]">IN CYBER-FLOW</span>
                </h1>
                <p className="relative z-10 text-gray-400 text-base sm:text-lg md:text-xl text-center font-medium px-5 max-w-3xl">
                    Track crypto prices, market charts, volume, and watchlists in one clear dashboard. CyberFlow is built for market monitoring, not for buying, selling, or executing trades.
                </p>
                <div className="flex flex-col md:flex-row px-10 justify-center gap-4 mt-2">
                    <Link className="z-10 bg-primary text-on-primary flex justify-center gap-2 items-center text-center px-5 py-2 rounded-xl border border-primary/80 hover:bg-primary/80 shadow-[0_0_12px_rgba(58,151,244,0.6)] shadow-primary/50 transition-all duration-200 hover:scale-[1.1] active:scale-[0.98]" href={"/auth/login"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        View Market Dashboard
                    </Link>
                    <Link className="z-10 bg-transparent text-primary flex justify-center gap-2.5 items-center text-center px-5 py-2 rounded-xl border border-primary hover:bg-primary/80 hover:text-white shadow-[0_0_12px_rgba(58,151,244,0.6)] shadow-primary/50 transition-all duration-200 hover:scale-[1.1]  active:scale-[0.98]" href={"/auth/register"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        Create Watchlist
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-80 pointer-events-none">
                <span className="text-[10px] text-gray-400 font-bold tracking-[0.3em] uppercase">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    )
}
