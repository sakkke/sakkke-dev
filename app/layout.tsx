import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./override.css";
import Header from "./header";
import Footer from "./footer";
import ShareButtons from "./components/ShareButtons";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sakkke.dev",
  description: "Generated by create next app",
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
          <div className="container flex flex-col grow">
            <div className="grow">{children}</div>
            <ShareButtons />
            <hr />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
