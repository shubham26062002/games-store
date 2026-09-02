import type { Metadata } from "next";
import { Geist_Mono, Inter, Outfit } from "next/font/google";

import "@/app/globals.css";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Games Store",
  description: "Games Store",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      className={cn(
        "antialiased dark scheme-dark font-sans",
        inter.className,
        inter.variable,
        geistMono.variable,
        outfit.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-dvh min-w-90 antialiased flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
