import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import QueryProvider from "@/components/providers/query-provider";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const dinCyr = localFont({
  src: "./fonts/dincyr-medium.ttf",
  variable: "--font-din",
  weight: "500",
});

// мобилки
export const viewport: Viewport = {
  themeColor: "#ccdb2a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Метаданные PWA
export const metadata: Metadata = {
  title: "LabQuest",
  description: "Анализы и медицинские услуги",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LabQuest",
  },
  formatDetection: {
    telephone: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html lang="ru">
      <body className={`${dinCyr.variable} antialiased`}>
        <ScrollToTop />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}