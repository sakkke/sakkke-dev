import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./override.css";
import Header from "./header";
import Footer from "./footer";
import ShareButtons from "./components/ShareButtons";
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
          <div className="container w-full">
            <Header />
          </div>
          <div className="container flex flex-col grow w-full">
            <div className="grow">{children}</div>
            <div className="flex flex-row-reverse">
              <div className="flex gap-2">
                <ShareButtons />
              </div>
            </div>
            <hr />
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
