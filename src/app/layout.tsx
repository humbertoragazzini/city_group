import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ONavBar from "@/components/Organims/NavBar/ONavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimalPort",
  description: "Opening door to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ONavBar></ONavBar>
        {children}
      </body>
    </html>
  );
}
