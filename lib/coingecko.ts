const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const DEFAULT_REVALIDATE_SECONDS = 60;

type QueryValue = string | number | boolean | undefined;

type NextFetchInit = RequestInit & {
    next?: {
        revalidate?: number;
    };
};

export type CoinMarket = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number | null;
    sparkline_in_7d?: {
        price: number[];
    };
};

export type CoinDetails = {
    id: string;
    symbol: string;
    name: string;
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    description: {
        en: string;
    };
    market_data: {
        current_price: Record<string, number>;
        market_cap: Record<string, number>;
        total_volume: Record<string, number>;
        price_change_percentage_24h: number | null;
        price_change_percentage_7d: number | null;
        price_change_percentage_30d: number | null;
    };
};

export type CoinMarketChart = {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
};

export type CoinSearchResult = {
    coins: Array<{
        id: string;
        name: string;
        symbol: string;
        market_cap_rank: number | null;
        thumb: string;
        large: string;
    }>;
};

function createUrl(path: string, query: Record<string, QueryValue> = {}) {
    const url = new URL(`${COINGECKO_API_URL}${path}`);

    Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.set(key, String(value));
        }
    });

    return url;
}

async function coingeckoFetch<T>(
    path: string,
    query?: Record<string, QueryValue>,
    revalidate = DEFAULT_REVALIDATE_SECONDS
) {
    const response = await fetch(createUrl(path, query), {
        next: { revalidate },
        headers: {
            accept: "application/json",
        },
    } satisfies NextFetchInit);

    if (!response.ok) {
        throw new Error(`CoinGecko request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}

export function getCoinMarkets({
    vsCurrency = "usd",
    page = 1,
    perPage = 20,
    ids,
    sparkline = true,
}: {
    vsCurrency?: string;
    page?: number;
    perPage?: number;
    ids?: string;
    sparkline?: boolean;
} = {}) {
    return coingeckoFetch<CoinMarket[]>("/coins/markets", {
        vs_currency: vsCurrency,
        order: "market_cap_desc",
        per_page: perPage,
        page,
        sparkline,
        price_change_percentage: "24h",
        ids,
    });
}

export function getCoinDetails(id: string) {
    return coingeckoFetch<CoinDetails>(`/coins/${id}`, {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
    });
}

export function getCoinMarketChart({
    id,
    vsCurrency = "usd",
    days = 7,
}: {
    id: string;
    vsCurrency?: string;
    days?: number;
}) {
    return coingeckoFetch<CoinMarketChart>(`/coins/${id}/market_chart`, {
        vs_currency: vsCurrency,
        days,
    });
}

export function searchCoins(query: string) {
    return coingeckoFetch<CoinSearchResult>("/search", { query }, 120);
}
