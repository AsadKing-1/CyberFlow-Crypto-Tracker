import axios from "axios";

export interface CoinInfo {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number;
}

export async function getCoins(): Promise<CoinInfo[]> {
    try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                page: 1,
            },
        });

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 429) {
            throw new Error("CoinGecko request limit reached. Try again in a minute.");
        }

        throw new Error("Failed to load coins from CoinGecko.");
    }
}

