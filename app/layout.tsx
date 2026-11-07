import type { Metadata, Viewport } from "next";
import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const display = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-display" });
const body = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Happy Diwali 2026 🪔 | Festival of Lights",
  description: "Celebrate Diwali under a golden night sky with glowing diyas and fireworks.",
};
export const viewport: Viewport = { themeColor: "#050816" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
