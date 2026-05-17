import Link from "next/link";
import LogoutButton from "@/shared/LogoutButton/LogoutButton";
import MobileMenu from "@/shared/MobileMenu/MobileMenu";

export default function AppHeader() {
    return (
        <header className="bg-surface-container-lowest/70 backdrop-blur-2xl w-full sticky top-0 z-50 px-5 py-3.5 md:px-12 md:py-4 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <Link href="/dashboard" className="group">
                        <h1 className="text-primary font-bold text-2xl tracking-wide transition-all duration-300 group-active:scale-[0.96] group-hover:drop-shadow-[0_0_12px_rgba(0,255,163,0.6)]">
                            CyberFlow
                        </h1>
                    </Link>
                    <nav className="gap-6 items-center text-sm font-medium text-white/50 hidden md:flex">
                        <Link
                            href="/dashboard"
                            className="hover:text-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_8px_rgba(0,255,163,0.4)]"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/market"
                            className="hover:text-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_8px_rgba(0,255,163,0.4)]"
                        >
                            Market
                        </Link>
                        <Link
                            href="/topcoins"
                            className="hover:text-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_8px_rgba(0,255,163,0.4)]"
                        >
                            Top Coins
                        </Link>
                    </nav>
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <div className="w-px h-6 bg-white/10" />
                    <div className="flex items-center gap-2">
                        <button className="p-2.5 rounded-xl text-white/40 bg-white/5 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        <button className="p-2.5 rounded-xl text-white/40 bg-white/5 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="pl-2">
                        <LogoutButton />
                    </div>
                </div>
                <MobileMenu />
            </div>
        </header>
    );
}