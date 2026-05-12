"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoutButton from "@/shared/LogoutButton/LogoutButton";

const navLinks = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
            </svg>
        ),
    },
    {
        href: "/market",
        label: "Market",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        ),
    },
    {
        href: "/top",
        label: "Top Coins",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        ),
    },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
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
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-surface-container transition-all duration-200 cursor-pointer md:hidden"
                aria-label="Open menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Fullscreen Overlay Menu */}
            <div
                className={`
                    fixed inset-0 z-[100] md:hidden
                    flex flex-col
                    bg-surface-container-lowest
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                `}
            >
                {/* Top Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                    <span className="text-primary font-bold text-2xl">CyberFlow</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-surface-container transition-all duration-200 cursor-pointer"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links — centered */}
                <nav className="flex-1 flex flex-col items-start justify-center gap-2 px-6">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`
                                flex items-center gap-4 w-full px-6 py-4
                                rounded-xl text-white/70
                                hover:text-primary hover:bg-primary/5
                                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${isOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6"
                                }
                            `}
                            style={{ transitionDelay: isOpen ? `${150 + i * 80}ms` : "0ms" }}
                        >
                            <span className="text-white/40">{link.icon}</span>
                            <span className="text-xl font-semibold">{link.label}</span>
                        </Link>
                    ))}

                    {/* Divider */}
                    <div
                        className={`
                            w-full h-px bg-white/5 my-2
                            transition-all duration-500
                            ${isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                        `}
                        style={{ transitionDelay: isOpen ? "450ms" : "0ms" }}
                    />

                    {/* Extra Actions */}
                    <button
                        className={`
                            flex items-center gap-4 w-full px-6 py-4
                            rounded-xl text-white/50 cursor-pointer
                            hover:text-white hover:bg-surface-container
                            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                        `}
                        style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <span className="text-lg font-medium">Notifications</span>
                    </button>
                    <button
                        className={`
                            flex items-center gap-4 w-full px-6 py-4
                            rounded-xl text-white/50 cursor-pointer
                            hover:text-white hover:bg-surface-container
                            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                        `}
                        style={{ transitionDelay: isOpen ? "580ms" : "0ms" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="text-lg font-medium">Settings</span>
                    </button>
                </nav>

                {/* Logout at bottom */}
                <div
                    className={`
                        px-6 pb-8 pt-4 border-t border-white/5
                        transition-all duration-500
                        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                    style={{ transitionDelay: isOpen ? "650ms" : "0ms" }}
                >
                    <LogoutButton />
                </div>
            </div>
        </>
    );
}
