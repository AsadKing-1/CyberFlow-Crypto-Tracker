import AppHeader from "@/shared/AppHeader/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <AppHeader />
            <div className="w-full max-w-6xl mx-auto">
                {children}
            </div>
        </main>
    )
}
