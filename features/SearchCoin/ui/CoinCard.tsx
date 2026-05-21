import Image from "next/image";
import { CoinInfo } from "../model/SearchCoinModel";

function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 2,
    }).format(value);
}

export default function CoinCard({ coin }: { coin: CoinInfo }) {
    return(
                <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:border-primary/40">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                #{coin.market_cap_rank}
                            </span>
                            <Image
                                className="shrink-0 rounded-full"
                                src={coin.image}
                                alt={coin.name}
                                width={40}
                                height={40}
                            />
                            <div className="min-w-0">
                                <h2 className="truncate text-base font-bold text-white">{coin.name}</h2>
                                <p className="text-xs font-semibold uppercase text-gray-400">{coin.symbol}</p>
                            </div>
                        </div>
                        <div className="shrink-0 text-right">
                            <p className="text-sm font-bold text-white">{formatCurrency(coin.current_price)}</p>
                            <p className={coin.price_change_percentage_24h >= 0 ? "text-xs font-semibold text-primary" : "text-xs font-semibold text-red-400"}>
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center text-sm">
                        <div>
                            <p className="text-xs text-gray-500">Market Cap</p>
                            <p className="mt-1 font-semibold text-white">{formatCurrency(coin.market_cap)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Volume 24h</p>
                            <p className="mt-1 font-semibold text-white">{formatCurrency(coin.total_volume)}</p>
                        </div>
                    </div>
                </div>
    )
}
