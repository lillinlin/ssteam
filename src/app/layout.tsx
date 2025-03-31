import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eternal Fire - Official Website",
  description: "Eternal Fire is a Turkey-based esports club founded in 2021. Eternal Fire's was established to create a sustainable culture of sportsmanship and success.",
  keywords: ["Eternal Fire", "esports", "CS2", "Counter-Strike", "VALORANT", "PUBG", "esports team", "Turkey esports"],
  authors: [{ name: "Eternal Fire" }],
  creator: "Eternal Fire",
  publisher: "Eternal Fire",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
