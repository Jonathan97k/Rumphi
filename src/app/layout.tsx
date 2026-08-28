import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rumphi Honey | 100% Natural Honey from Rumphi, Malawi",
  description:
    "Buy 100% natural Rumphi Honey from Malawi. Order 250g and 500g honey directly through WhatsApp or enquire about bulk and wholesale quantities.",
  keywords: [
    "honey",
    "natural honey",
    "Malawi",
    "Rumphi",
    "bulk honey",
    "wholesale honey",
  ],
  openGraph: {
    title: "Rumphi Honey | 100% Natural Honey from Rumphi, Malawi",
    description:
      "Buy 100% natural Rumphi Honey from Malawi. Order 250g and 500g honey directly through WhatsApp.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}