"use client";
import { useState } from "react";
import CoinList from "./CoinList";

const buttonStyle = "glass-card h-10 w-full rounded-2xl px-6 text-sm font-semibold text-white transition-all duration-300 hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 md:w-auto md:hover:scale-[1.05] md:active:translate-y-2 md:active:scale-[0.98]"

export default function SearchCoin() {

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<"all" | "large" | "mid" | "small">("all")

    return (
        <section className="w-full flex flex-col gap-7">
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="group relative w-full md:max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pointer-events-none z-50 absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="glass-card h-11 w-full rounded-2xl py-2 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary/40 focus:ring-2 focus:ring-primary/30" type="text" placeholder="Search Coin..." />
                </div>
                <div className="grid w-full grid-cols-2 gap-2 md:w-auto md:grid-cols-4">
                    <button onClick={() => setSelectedCategory("all")} className={buttonStyle}>All</button>
                    <button onClick={() => setSelectedCategory("large")} className={buttonStyle}>Large Cap</button>
                    <button onClick={() => setSelectedCategory("mid")} className={buttonStyle}>Mid Cap</button>
                    <button onClick={() => setSelectedCategory("small")} className={buttonStyle}>Small Cap</button>
                </div>
            </div>
            <div>
                <CoinList 
                    searchValue={searchValue}
                    selectedCategory={selectedCategory}
                >
                </CoinList>
            </div>
        </section>
    );
}
