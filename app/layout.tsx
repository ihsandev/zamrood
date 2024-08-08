import type { Metadata } from "next";
import "./globals.css";
import { Unbounded, Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

const signature = localFont({
  src: "../public/fonts/Thesignature.ttf",
  display: "swap",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          unbounded.variable,
          albert_sans.variable,
          signature.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
