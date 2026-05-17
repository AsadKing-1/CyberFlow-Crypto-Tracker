"use client";

import { logout } from "@/app/auth/actions";
import { useTransition } from "react";

export default function LogoutButton() {
    const [isPending, startTransition] = useTransition();

    const handleLogout = () => {
        startTransition(async () => {
            await logout();
        });
    };

    return (
        <button
            onClick={handleLogout}
            disabled={isPending}
            id="logout-button"
            className="
                flex items-center justify-center gap-2 px-4 py-2.5 w-full
                rounded-lg
                bg-surface-container-high
                text-white/70
                border border-white/10
                cursor-pointer
                transition-all duration-200
                hover:bg-red-500/10
                hover:text-red-400
                hover:border-red-500/30
                active:scale-[0.96]
                disabled:opacity-50 disabled:cursor-not-allowed
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
            </svg>
            <span className="text-sm font-medium">
                {isPending ? "Signing out..." : "Sign Out"}
            </span>
        </button>
    );
}
