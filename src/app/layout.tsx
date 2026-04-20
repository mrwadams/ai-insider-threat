import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AI Insider Threat Model | Actions Speak Louder Than Tokens",
  description:
    "A structured threat model treating frontier AI agents as insider threat actors. Adapts CERT insider threat dimensions for non-human actors, maps behaviours to STRIDE, and provides detection strategies using existing enterprise tooling.",
  authors: [{ name: "Matt Adams" }],
  keywords: [
    "AI insider threat",
    "threat model",
    "STRIDE",
    "CERT",
    "frontier AI",
    "agentic AI security",
    "insider threat programme",
    "CISO",
    "enterprise security",
    "AI governance",
  ],
  openGraph: {
    title: "Actions Speak Louder Than Tokens — An Insider Threat Model for Frontier AI Agents",
    description:
      "A structured threat model treating frontier AI agents as insider threat actors within enterprise security architecture.",
    type: "article",
    locale: "en_GB",
    siteName: "AI Insider Threat Model",
    url: "https://ai-insider-threat.matt-adams.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Actions Speak Louder Than Tokens",
    description:
      "An Insider Threat Model for Frontier AI Agents — by Matt Adams",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
