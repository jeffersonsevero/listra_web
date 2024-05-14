import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Listra - Financiamento de carros",
  description: "Listra - Financiamento de carros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-BR">

      <body className={`${inter.className} bg-gray-200`}>{children}


        <Footer />
      </body>
    </html>
  );
}
