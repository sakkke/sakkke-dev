import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "terminal.css";
import Header from "./header";
import Footer from "./footer";

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
        <div className="container">
          <Header />
        </div>
        <div className="container">
          {children}
          <hr />
          <Footer />
        </div>
      </body>
    </html>
  );
}
