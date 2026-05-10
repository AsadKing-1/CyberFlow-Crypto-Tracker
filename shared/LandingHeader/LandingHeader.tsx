import Link from "next/link"

export default function LandingHeader(){
    return(
        <header className="bg-surface-container-lowest w-full sticky top-0 z-50 px-5 py-4 md:px-12 md:py-5 border-b border-primary-container">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-primary font-bold text-2xl transition-all duration-200 active:scale-[0.98]">CyberFlow</h1>
                </div>
                <nav className="flex gap-5 items-center">
                    <Link href={"/auth/login"} className="cursor-pointer bg-primary text-on-primary px-5 py-1.5 rounded-twelve font-semibold border border-primary/80 hover:bg-primary/80 shadow-[0_0_12px_rgba(58,151,244,0.6)] shadow-primary/50 transition-all duration-200 active:scale-[0.98]">Open Dashboard</Link>
                </nav>  
            </div>
        </header>
    )
}
