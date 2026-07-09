import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Inter } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-numeric",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertmax: Measure your vertical. Verified by video.",
  description:
    "Vertmax turns your phone's camera into a vertical jump lab. Camera-verified measurements, adaptive training programs, and a streak that keeps you honest.",
  metadataBase: new URL("https://vertmax.app"),
  openGraph: {
    title: "Vertmax: Measure your vertical. Verified by video.",
    description:
      "Camera-verified vertical jump measurement, adaptive programs, and progress you can actually see.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivoBlack.variable} ${plexMono.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-ink text-text-primary antialiased selection:bg-volt selection:text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
