import type { ReactNode } from "react";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

import {
  Inter,
  Caveat,
  Kalam,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Gayatri Samal | AI Solution Architect",
  description:
    "Premium AI engineer portfolio showcasing product design, motion experiences, and web innovation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${inter.variable} ${caveat.variable} ${kalam.variable} ${mono.variable}`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}