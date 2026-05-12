import AppHeader from "@/shared/AppHeader/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <AppHeader/>
            {children}
        </main>
    )
}
