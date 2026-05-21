import axios from "axios";

export interface GlobalMarketData {
    marketCap: number;
    volume24h: number;
    btcDominance: number;
    change24h: number;
}

export async function getGlobalData(): Promise<GlobalMarketData> {
    const res = await axios.get(
        "https://api.coingecko.com/api/v3/global"
    );

    const global = res.data.data;

    return {
        marketCap: global.total_market_cap.usd,
        volume24h: global.total_volume.usd,
        btcDominance: global.market_cap_percentage.btc,
        change24h: global.market_cap_change_percentage_24h_usd,
    };
}

export function formatNumber(num: number) {
    if (num >= 1e12) {
        return `$${(num / 1e12).toFixed(2)}T`;
    }

    if (num >= 1e9) {
        return `$${(num / 1e9).toFixed(2)}B`;
    }

    if (num >= 1e6) {
        return `$${(num / 1e6).toFixed(2)}M`;
    }

    return `$${num}`;
}