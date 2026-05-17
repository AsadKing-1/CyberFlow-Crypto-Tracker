import LoginForm from "@/features/LoginForm/ui/LoginForm";

export default function LoginPage() {
    return (
        <div className=" relative min-h-[calc(100dvh-80px)] items-center justify-center overflow-hidden px-4 py-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_75%_75%_at_50%_50%,#000_15%,transparent_100%)]" />
            <div className="relative z-10 w-full">
                <LoginForm />
            </div>
        </div>
    )
}