import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./override.css";
import Header from "./header";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sakkke.dev - sakkke's home page",
  description: "sakkke's home page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} terminal`}>
        <div className="flex flex-col min-h-dvh">
          <div className="bg-[var(--ctp-macchiato-mantle)]">
            <div className="container">
              <Header />
            </div>
          </div>
          <div className="grow">{children}</div>
          <div className="bg-[var(--ctp-macchiato-mantle)]">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
