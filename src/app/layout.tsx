import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Carolina - Uma Vida de Coragem e Fé",
  description: "Homenagem à Maria Carolina (29/03/2007 - 05/11/2025), uma guerreira que nos ensinou sobre coragem, fé e amor.",
  keywords: ["Maria Carolina", "homenagem", "coragem", "fé", "memória", "guerreira"],
  authors: [{ name: "Em memória de Maria Carolina" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Maria Carolina - Uma Vida de Coragem e Fé",
    description: "Homenagem à Maria Carolina, uma guerreira que nos ensinou sobre coragem, fé e amor.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Carolina - Uma Vida de Coragem e Fé",
    description: "Homenagem à Maria Carolina, uma guerreira que nos ensinou sobre coragem, fé e amor.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
