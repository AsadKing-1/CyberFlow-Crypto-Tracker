"use client";

import CoinCard from "./CoinCard";

import { getCoins } from "../model/SearchCoinModel";
import { useQuery } from "@tanstack/react-query";

interface CoinListProps {
    searchValue: string,
    selectedCategory: "all" | "large" | "mid" | "small"
}

export default function CoinList({ searchValue, selectedCategory }: CoinListProps) {

    const {
        data: coins = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["top-coins"],
        queryFn: getCoins
    });

    const filteredCoins = coins.filter((coin) => {
        const matchesSearch =
            coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchValue.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === "large" && coin.market_cap >= 10_000_000_000 ||
            selectedCategory === "mid" && coin.market_cap >= 1_000_000_000 && coin.market_cap < 10_000_000_000 ||
            selectedCategory === "small" && coin.market_cap < 1_000_000_000;

        return matchesSearch && matchesCategory;
    });

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Array.from({ length: 10 }, (_, index) => (
                    <div key={index} className="glass-card h-36 animate-pulse rounded-2xl p-5" />
                ))}
            </div>
        );
    }

    if (isError) {
        const message = error instanceof Error ? error.message : "Failed to load coins";

        return (
            <div className="glass-card rounded-2xl border-red-500/20 bg-red-500/5 p-6">
                <p className="text-sm font-semibold text-red-300">{message}</p>
                <p className="mt-2 text-sm text-gray-400">
                    CoinGecko may be rate limiting requests. Wait a bit and refresh the page.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredCoins.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
            ))}
        </div>
    )
}
