"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";

import { signup } from "@/app/auth/actions";
import { registerSchema, type RegisterFormData } from "@/lib/validator";

const inputClass = "w-full rounded-lg border border-white/10 bg-surface-container-low/80 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-primary/70 focus:bg-surface-container focus:ring-2 focus:ring-primary/30";
const iconClass = "pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-gray-500 transition-colors duration-200 peer-focus:text-primary";
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function RegisterForm() {
    const [serverError, setServerError] = useState<string | null>(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const hasMounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setServerError(null);

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);

        const result = await signup(formData);

        if (result?.error) {
            setServerError(result.error);
        }
    };

    return (
        <div className="w-full px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card relative mx-auto w-full max-w-md overflow-hidden rounded-lg border-primary/20 p-6 shadow-[0_0_45px_rgba(0,255,163,0.08)] sm:p-8"
            >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent" />

                <div className="flex flex-col items-center text-center">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary-container text-primary shadow-neon-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 4.28 3.263 7.8 7.437 8.209v1.291a.75.75 0 0 0 1.5 0v-1.291a8.252 8.252 0 0 0 7.563-8.209c0-4.556-3.694-8.25-8.25-8.25Zm0 3a.75.75 0 0 1 .75.75v3.494l2.47 2.47a.75.75 0 1 1-1.061 1.061l-2.69-2.69A.75.75 0 0 1 11.25 9.8V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                        Join <span className="text-primary">CyberFlow</span>
                    </h1>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                        Create your account and enter the secure trading flow.
                    </p>
                </div>

                <div className="mt-7 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="username">
                            Username
                        </label>
                        <div className="relative">
                            <input
                                {...register("username")}
                                id="username"
                                placeholder="Jane Doe"
                                type="text"
                                autoComplete="username"
                                className={`${inputClass} peer`}
                                required
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {errors.username && <span className="text-sm text-red-500">{errors.username.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                {...register("email")}
                                id="email"
                                placeholder="jane@cyberflow.io"
                                type="email"
                                autoComplete="email"
                                className={`${inputClass} peer`}
                                required
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </div>
                        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("password")}
                                id="password"
                                placeholder="Create password"
                                type="password"
                                autoComplete="new-password"
                                className={`${inputClass} peer`}
                                required
                                minLength={8}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                    </div>
                </div>

                <label className="mt-5 flex items-start gap-3 text-sm leading-5 text-gray-400" htmlFor="terms">
                    <input
                        checked={termsAccepted}
                        onChange={(event) => setTermsAccepted(event.target.checked)}
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="mt-1 size-4 rounded border-white/20 bg-surface-container text-primary accent-primary"
                        required
                    />
                    <span>I agree with CyberFlow security policy and account terms.</span>
                </label>

                {serverError && <p className="mt-4 text-sm text-red-500">{serverError}</p>}

                <button
                    disabled={hasMounted ? !termsAccepted || isSubmitting : undefined}
                    type="submit"
                    className="mt-6 w-full rounded-lg px-5 py-3 font-bold transition-all duration-200 bg-primary text-on-primary shadow-neon-primary hover:bg-primary/85 hover:shadow-[0_0_30px_rgba(0,255,163,0.35)] disabled:bg-gray-400 disabled:text-gray-200 disabled:shadow-none disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                >
                    {isSubmitting ? "Creating..." : "Create account"}
                </button>

                <p className="mt-5 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="font-semibold text-primary transition-colors duration-200 hover:text-white">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
}
