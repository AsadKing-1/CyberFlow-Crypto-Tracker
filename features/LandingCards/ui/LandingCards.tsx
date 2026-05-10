export default function LandingCards() {
    return (
        <section className="w-full pt-5 pb-5 md:min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-col py-12 items-center justify-center gap-4 px-5">
                    <h2 className="text-3xl md:text-5xl text-center text-white font-extrabold tracking-tight [text-shadow:0_0_15px_rgba(255,255,255,0.3)]">
                        Built for <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-primary to-white [text-shadow:0_0_20px_var(--color-primary)]">Market Clarity</span>
                    </h2>
                    <p className="text-gray-400 px-5 text-center text-lg md:text-xl font-medium max-w-2xl mt-1">
                        Follow price action, compare assets, and understand market movement without placing trades inside the app.
                    </p>
                </div>
                <div className="flex flex-col gap-6 px-5 md:flex-row md:justify-center w-full max-w-7xl mx-auto">
                    <div className="w-full md:w-1/3">
                        <div className="relative group flex flex-col h-full gap-4 text-white bg-[#090f19] bg-linear-to-br from-[#090f19] to-[#0a1220] border border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(58,151,244,0.3)] overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                            
                            <div className="relative z-10 w-fit p-4 bg-primary/10 text-primary rounded-xl border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <h3 className="relative z-10 text-2xl text-white font-bold mt-2">
                                Account Privacy
                            </h3>
                            <p className="relative z-10 text-gray-400 text-base font-medium leading-relaxed">
                                Keep your saved watchlists and dashboard preferences tied to your account while market data stays easy to scan.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="relative group flex flex-col h-full gap-4 text-white bg-[#090f19] bg-linear-to-br from-[#090f19] to-[#0a1220] border border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(58,151,244,0.3)] overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                            
                            <div className="relative z-10 w-fit p-4 bg-primary/10 text-primary rounded-xl border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                            </div>
                            <h3 className="relative z-10 text-2xl text-white font-bold mt-2">
                                Real-Time Analytics
                            </h3>
                            <p className="relative z-10 text-gray-400 text-base font-medium leading-relaxed">
                                Live market data and clean charting tools help you follow price changes, volume, and momentum.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="relative group flex flex-col h-full gap-4 text-white bg-[#090f19] bg-linear-to-br from-[#090f19] to-[#0a1220] border border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(58,151,244,0.3)] overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                            
                            <div className="relative z-10 w-fit p-4 bg-primary/10 text-primary rounded-xl border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                            </div>
                            <h3 className="relative z-10 text-2xl text-white font-bold mt-2">
                                Market Overview
                            </h3>
                            <p className="relative z-10 text-gray-400 text-base font-medium leading-relaxed">
                                Compare major cryptocurrencies by price, market cap, daily change, and trend signals from one dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
