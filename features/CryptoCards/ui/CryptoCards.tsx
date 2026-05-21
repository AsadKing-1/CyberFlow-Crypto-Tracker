"use client";

import { useState, useEffect } from "react";
import { GlobalMarketData } from "../model/CryptoCardsModel";
import { getGlobalData } from "../model/CryptoCardsModel";
import { formatNumber } from "../model/CryptoCardsModel";

export default function CryptoCards() {

    const [data, setData] = useState<GlobalMarketData | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        getGlobalData()
            .then((result) => {
                setData(result);
                requestAnimationFrame(() => setIsVisible(true));
            })
            .catch(() => setError(true));
    }, []);

    if (error) {
        return (
            <div className="w-full glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 border border-red-500/20 bg-red-500/5">
                <div className="p-4 rounded-full bg-red-500/10 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                        We couldn&apos;t load the global market data right now. Please check your connection or try again later.
                    </p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 border border-white/10 font-medium text-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
                >
                    Reload Page
                </button>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="grid gap-4 md:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-2xl glass-card p-6 animate-pulse">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5" />
                            <div className="h-3 w-24 rounded-full bg-white/5" />
                        </div>
                        <div className="h-8 w-32 rounded-lg bg-white/5 mb-2" />
                        <div className="h-3 w-20 rounded-full bg-white/5" />
                    </div>
                ))}
            </div>
        );
    }

    const cards = [
        {
            label: "Global Market Cap",
            value: formatNumber(data.marketCap),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
                </svg>
            ),
            accent: "primary",
            change: data.change24h,
        },
        {
            label: "24H Volume",
            value: formatNumber(data.volume24h),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            ),
            accent: "secondary",
            change: null,
        },
        {
            label: "BTC Dominance",
            value: `${data.btcDominance.toFixed(1)}%`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
            accent: "amber",
            dominance: data.btcDominance,
            change: null,
        },
    ];

    const accentStyles = {
        primary: {
            iconBg: "bg-[rgba(0,255,163,0.1)]",
            iconText: "text-primary",
            border: "hover:border-primary/30",
            glow: "hover:shadow-[0_0_30px_rgba(0,255,163,0.08)]",
            barBg: "bg-primary",
        },
        secondary: {
            iconBg: "bg-[rgba(255,0,229,0.1)]",
            iconText: "text-secondary",
            border: "hover:border-secondary/30",
            glow: "hover:shadow-[0_0_30px_rgba(255,0,229,0.08)]",
            barBg: "bg-secondary",
        },
        amber: {
            iconBg: "bg-amber-500/10",
            iconText: "text-amber-400",
            border: "hover:border-amber-400/30",
            glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
            barBg: "bg-gradient-to-r from-amber-500 to-amber-300",
        },
    };

    return (
        <section className="grid gap-4 md:grid-cols-3">
            {cards.map((card, i) => {
                const style = accentStyles[card.accent as keyof typeof accentStyles];
                return (
                    <div
                        key={card.label}
                        className={`
                            group relative rounded-2xl glass-card p-6
                            transition-all duration-500 ease-out
                            ${style.border} ${style.glow}
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }
                        `}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`
                                flex items-center justify-center w-10 h-10 rounded-xl
                                ${style.iconBg} ${style.iconText}
                                transition-transform duration-300 group-hover:scale-110
                            `}>
                                {card.icon}
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                {card.label}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <h2 className="shrink-0 text-3xl font-bold text-white leading-none">
                                {card.value}
                            </h2>
                            {card.change !== null && (
                                <span
                                    className={`
                                        inline-flex items-center gap-0.5 px-2 py-1 rounded-lg text-xs font-semibold
                                        ${card.change > 0
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                        }
                                    `}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className={`w-3 h-3 ${card.change < 0 ? "rotate-180" : ""}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                    {Math.abs(card.change).toFixed(1)}%
                                </span>
                            )}
                            {card.dominance !== undefined && (
                                <div className="h-2 flex-1 rounded-full bg-slate-700/60 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${style.barBg} transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isVisible ? `${card.dominance}%` : "0%",
                                            transitionDelay: `${i * 100 + 300}ms`,
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <div
                            className={`
                                absolute top-0 right-0 w-20 h-20 rounded-tr-2xl rounded-bl-[60px]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                pointer-events-none
                            `}
                            style={{
                                background: card.accent === "primary"
                                    ? "radial-gradient(circle at top right, rgba(0,255,163,0.06), transparent 70%)"
                                    : card.accent === "secondary"
                                    ? "radial-gradient(circle at top right, rgba(255,0,229,0.06), transparent 70%)"
                                    : "radial-gradient(circle at top right, rgba(245,158,11,0.06), transparent 70%)",
                            }}
                        />
                    </div>
                );
            })}
        </section>
    );
}