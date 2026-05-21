import CryptoCards from "@/features/CryptoCards/ui/CryptoCards";
import SearchCoin from "@/features/SearchCoin/ui/SearchCoin";


export default function TopCoinsPage() {
    return (
        <div className="pt-10 px-5">
            <h1 className="text-white text-3xl font-black font-sans">Top 100 Cryptocurrencies by Market Cap</h1>
            <p className="text-gray-400 mt-2 text-[15px]">Global crypto market perfomance, real-time data, and volume metrics updated continuously</p>
            <div className="mt-8">
                <CryptoCards />
            </div>
            <div className="mt-8">
                <SearchCoin/>
            </div>
        </div>
    )
}
