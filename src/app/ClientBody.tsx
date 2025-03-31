"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "font-sans antialiased";
  }, []);

  return (
    <body className="font-sans antialiased bg-[#15141a] text-white" suppressHydrationWarning>
      <Header />
      {children}
      <Footer />
    </body>
  );
}
