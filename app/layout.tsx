import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monkey Lick Studios",
  description: "Monkey Lick Studios is a game development studio that creates fun and engaging games.",
  metadataBase: new URL("https://www.monkeylick.studio"),
  openGraph: {
    images: [
      {
        url: "/metadata.png",
        alt: "Monkey Lick Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/metadata.png",
        alt: "Monkey Lick Studios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
