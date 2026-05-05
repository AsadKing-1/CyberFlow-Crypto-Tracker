import type { Metadata } from "next";
import "@/styles/globals.css";

import LandingHeader from "@/shared/LandingHeader/LandingHeader";

export const metadata: Metadata = {
  title: "CyberFlow",
  description: "CyberFlow project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface-container-lowest">
        <LandingHeader />
        {children}
      </body>
    </html>
  );
}
