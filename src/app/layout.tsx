import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emociones-matutinas.pages.dev"),
  title: "Emociones Matutinas 💝 - Regalos, Desayunos y Sorpresas en Bogotá",
  description: "Haz sonreír a quien más amas. Regalos, desayunos sorpresa, flores, peluches y más. Entregas programadas en Bogotá. Pedidos hasta las 7pm.",
  keywords: ["regalos", "desayunos", "sorpresas", "Bogotá", "flores", "peluches", "cumpleaños", "aniversarios"],
  authors: [{ name: "Emociones Matutinas" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💝</text></svg>",
  },
  openGraph: {
    title: "Emociones Matutinas 💝 - Regalos, Desayunos y Sorpresas en Bogotá",
    description: "Haz sonreír a quien más amas. Regalos, desayunos sorpresa, flores, peluches y más. Entregas programadas en Bogotá. Pedidos hasta las 7pm.",
    type: "website",
    url: "https://emociones-matutinas.pages.dev",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Emociones Matutinas - Regalos y Sorpresas en Bogotá",
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
