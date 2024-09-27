import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "much2share",
  description: "The connected workspace where better, faster work takes place",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/much2share_light.png",
        href: "/much2share_light.png"
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/much2share_dark.png",
        href: "/much2share_dark.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="meet2share-theme-2"
        >
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
