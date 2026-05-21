import AppHeader from "@/shared/AppHeader/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-dvh pb-24 md:pb-0">
            <AppHeader />
            <div className="w-full max-w-6xl mx-auto">
                {children}
            </div>
        </main>
    )
}
