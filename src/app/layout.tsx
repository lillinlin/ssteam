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
  title: "SCARLET STARS - SS",
  description: "SCARLET STARS.",
  keywords: ["SCARLET STARS", "esports", "CS2", "Counter-Strike"],
  authors: [{ name: "SCARLET STARS" }],
  creator: "SCARLET STARS",
  publisher: "SCARLET STARS",
  icons: {
    icon: "https://ssteam.pages.dev/lilss.png",
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
