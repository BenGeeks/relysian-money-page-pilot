import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import GoogleAnalytics from "./components/google-analytics";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Personal Training Zurich - Relysian Wellness Experts",
  description: "Personal Training Zurich - Relysian Wellness Experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}>
        <HeaderComponent />
        {children}
        <FooterComponent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
