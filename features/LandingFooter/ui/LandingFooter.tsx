import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="relative w-full overflow-hidden">
            <div className="relative w-full flex flex-col items-center justify-center py-24 px-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
                <h2 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl text-center font-extrabold tracking-tight leading-tight [text-shadow:0_0_15px_rgba(255,255,255,0.3)]">
                    Ready to Watch The <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-primary to-white">Market</span>?
                </h2>
                <p className="relative z-10 text-gray-400 text-base md:text-lg text-center mt-4 max-w-xl">
                    Build a cleaner view of crypto prices, charts, and watchlists. CyberFlow does not process trades or hold funds.
                </p>
                <Link href={"/auth/register"} className="relative z-10 bg-primary text-black font-bold mt-8 px-10 py-3.5 md:py-4 text-lg md:text-xl text-center rounded-full hover:shadow-[0_0_40px_rgba(58,151,244,0.5)] hover:scale-105 transition-all duration-300 active:scale-[0.98]">
                    Create Free Account
                </Link>
            </div>
            <div className="w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="w-full border-t border-white/5">
                <div className="max-w-6xl mx-auto px-5 py-8 flex items-center justify-between gap-3">
                    <h3 className="text-primary font-bold text-2xl">CyberFlow</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1.5">
                        Made with
                        <span className="inline-flex animate-pulse">
                            <span className="text-red-500">❤️</span>
                        </span>
                        <Link href="https://github.com/Asadking-1" target="_blank" className="text-primary hover:text-white font-semibold transition-colors duration-200">
                            AsadKing-1
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
