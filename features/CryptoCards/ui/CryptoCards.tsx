"use client";

import { useState, useEffect } from "react";
import { GlobalMarketData } from "../model/CryptoCardsAssets";
import { getGlobalData } from "../model/CryptoCardsAssets";
import { formatNumber } from "../model/CryptoCardsAssets";

export default function CryptoCards() {

    const [data, setData] = useState<GlobalMarketData | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getGlobalData()
            .then(setData)
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
                        We couldn't load the global market data right now. Please check your connection or try again later.
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
            <div className="w-full glass-card rounded-2xl p-8 flex items-center justify-center min-h-[160px]">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    <p className="text-sm text-slate-400 animate-pulse">Loading global data...</p>
                </div>
            </div>
        );
    }


    return (
        <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl glass-card p-6">
                <p className="text-xs font-bold uppercase text-slate-400">
                    Global Market Cap
                </p>

                <div className="mt-3 flex items-center gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        {formatNumber(data.marketCap)}
                    </h2>

                    <span className="text-green-400 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                        </svg>
                        {data.change24h.toFixed(1)}%
                    </span>
                </div>
            </div>

            <div className="rounded-2xl glass-card p-6">
                <p className="text-xs font-bold uppercase text-slate-400">
                    24H Volume
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                    {formatNumber(data.volume24h)}
                </h2>
            </div>

            <div className="rounded-2xl glass-card p-6">
                <p className="text-xs font-bold uppercase text-slate-400">
                    BTC Dominance
                </p>

                <div className="mt-3 flex items-center gap-4">
                    <h2 className="shrink-0 text-3xl font-bold text-white">
                        {data.btcDominance.toFixed(1)}%
                    </h2>

                    <div className="h-2 flex-1 rounded-full bg-slate-700">
                        <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{
                                width: `${data.btcDominance}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}