"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/shared/LogoutButton/LogoutButton";

const navLinks = [
    {
        href: "/dashboard",
        label: "Dash",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
            </svg>
        ),
    },
    {
        href: "/market",
        label: "Market",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        ),
    },
    {
        href: "/topcoins",
        label: "Top",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        ),
    },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Prevent body scroll when bottom sheet is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            {/* BOTTOM NAV BAR */}
            <div className="fixed bottom-0 left-0 w-full z-90 bg-surface-container-lowest/85 backdrop-blur-3xl border-t border-white/5 pb-[env(safe-area-inset-bottom,12px)] shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-around px-2 py-1.5">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex flex-col items-center justify-center gap-1 w-16 p-2 rounded-2xl transition-all duration-300
                                    ${isActive ? 'text-primary' : 'text-white/40 hover:text-white/80'}
                                `}
                            >
                                <div className={`transition-transform duration-300 ${isActive ? '-translate-y-0.5 scale-110 drop-shadow-[0_0_8px_rgba(0,255,163,0.5)]' : ''}`}>
                                    {link.icon}
                                </div>
                                <span className={`text-[10px] font-semibold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}

                    {/* MORE BUTTON */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`
                            flex flex-col items-center justify-center gap-1 w-16 p-2 rounded-2xl transition-all duration-300
                            ${isOpen ? 'text-primary' : 'text-white/40 hover:text-white/80'}
                        `}
                    >
                        <div className={`transition-transform duration-300 ${isOpen ? '-translate-y-0.5 scale-110 drop-shadow-[0_0_8px_rgba(0,255,163,0.5)]' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <span className={`text-[10px] font-semibold transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                            More
                        </span>
                    </button>
                </div>
            </div>

            {/* BOTTOM SHEET FOR "MORE" */}
            {/* Backdrop */}
            <div 
                className={`
                    fixed inset-0 bg-black/60 backdrop-blur-sm z-95
                    transition-opacity duration-300 ease-in-out
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setIsOpen(false)}
            />

            {/* Sheet Content */}
            <div
                className={`
                    fixed bottom-[70px] left-2 right-2 z-100
                    flex flex-col
                    bg-surface-container-lowest border border-white/10 shadow-2xl rounded-3xl
                    transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-[120%] opacity-0 scale-95 pointer-events-none"}
                `}
            >
                <div className="p-4 flex flex-col gap-2">
                    <button
                        className="
                            flex items-center gap-4 w-full px-4 py-3.5
                            rounded-2xl text-white/60 cursor-pointer
                            hover:text-white hover:bg-white/5 active:bg-white/10
                            transition-all duration-200
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <span className="text-lg font-medium">Notifications</span>
                    </button>
                    <button
                        className="
                            flex items-center gap-4 w-full px-4 py-3.5
                            rounded-2xl text-white/60 cursor-pointer
                            hover:text-white hover:bg-white/5 active:bg-white/10
                            transition-all duration-200
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="text-lg font-medium">Settings</span>
                    </button>
                    
                    <div className="w-full h-px bg-white/10 my-1" />

                    {/* Logout at bottom */}
                    <div className="mt-1">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
