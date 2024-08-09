import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { QCProvider } from "@/components/providers/query-client";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const signature = localFont({
  src: "../public/fonts/Thesignature.otf",
  display: "swap",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "./logo_colored.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={cn(
          unbounded.variable,
          albert_sans.variable,
          signature.variable
        )}
      >
        <QCProvider>{children}</QCProvider>
      </body>
    </html>
  );
}
