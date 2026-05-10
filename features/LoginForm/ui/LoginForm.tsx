"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/validator";

import { login } from "@/app/auth/actions";
import { useState } from "react";

import Link from "next/link"

const inputClass = "w-full rounded-lg border border-white/10 bg-surface-container-low/80 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-primary/70 focus:bg-surface-container focus:ring-2 focus:ring-primary/30"
const iconClass = "pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-gray-500 transition-colors duration-200 peer-focus:text-primary"

export default function LoginForm() {
    const [serverError, setServerError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (data: LoginFormData) => {
        setServerError(null);

        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);

        const result = await login(formData);

        if (result?.error) {
            setServerError(result.error);
        }
    }

    return (
        <div className="w-full px-4">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card relative mx-auto w-full max-w-md overflow-hidden rounded-lg border-primary/20 p-6 shadow-[0_0_45px_rgba(0,255,163,0.08)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent" />

                <div className="flex flex-col items-center text-center">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary-container text-primary shadow-neon-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                        Welcome Back
                    </h1>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                        Sign in to continue to your market dashboard.
                    </p>
                </div>

                <div className="mt-7 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            className="text-sm font-medium text-gray-300"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                {...register("email")}
                                id="email"
                                name="email"
                                placeholder="jane@cyberflow.io"
                                type="email"
                                autoComplete="email"
                                className={`${inputClass} peer`}
                                required
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={iconClass}
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </div>
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="text-sm font-medium text-gray-300"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("password")}
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                type="password"
                                autoComplete="current-password"
                                className={`${inputClass} peer`}
                                required
                                minLength={8}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={iconClass}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="mt-8 w-full rounded-lg bg-primary py-3 text-base font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:shadow-none disabled:hover:bg-gray-400"
                >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                </button>

                {serverError && <p className="mt-4 text-sm text-red-500">{serverError}</p>}
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                    href="/auth/register"
                    className="font-semibold text-primary transition-colors hover:text-primary/80"
                >
                    Create an account
                </Link>
            </p>
        </div>
    )
}
