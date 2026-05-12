import Link from "next/link";
import LogoutButton from "@/shared/LogoutButton/LogoutButton";
import MobileMenu from "@/shared/MobileMenu/MobileMenu";

export default function AppHeader() {
    return (
        <header className="bg-surface-container-lowest/80 backdrop-blur-xl w-full sticky top-0 z-50 px-5 py-3.5 md:px-12 md:py-4 border-b border-white/5">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
                {/* Left: Logo + Nav */}
                <div className="flex gap-8 items-center">
                    <Link href="/dashboard">
                        <h1 className="text-primary font-bold text-2xl transition-all duration-200 active:scale-[0.98] hover:drop-shadow-[0_0_8px_rgba(0,255,163,0.4)]">
                            CyberFlow
                        </h1>
                    </Link>
                    <nav className="gap-6 items-center text-sm font-medium text-white/60 hidden md:flex">
                        <Link
                            href="/dashboard"
                            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/market"
                            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                        >
                            Market
                        </Link>
                        <Link
                            href="/top"
                            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                        >
                            Top Coins
                        </Link>
                    </nav>
                </div>

                {/* Right: Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="
                                bg-surface-container border border-white/10
                                rounded-lg pl-9 pr-4 py-2
                                text-sm text-white/80 placeholder:text-white/30
                                outline-none
                                transition-all duration-200
                                focus:border-primary/40 focus:shadow-[0_0_12px_rgba(0,255,163,0.1)]
                                w-48 focus:w-56
                            "
                        />
                    </div>

                    <div className="w-px h-6 bg-white/10" />

                    <button className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-surface-container transition-all duration-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>

                    <button className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-surface-container transition-all duration-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <LogoutButton />
                </div>

                {/* Mobile: Hamburger Menu */}
                <MobileMenu />
            </div>
        </header>
    );
}