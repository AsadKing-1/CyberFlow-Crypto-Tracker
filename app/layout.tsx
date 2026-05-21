import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/shared/Providers";

export const metadata: Metadata = {
  title: "CyberFlow",
  description: "Crypto market tracking, charts, prices, and portfolio watchlists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className="bg-surface-container-lowest">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
