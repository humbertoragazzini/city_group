import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ONavBar from "@/components/Organims/NavBar/ONavBar";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
import { AppProvider } from "@/context/AppContext";
import AppWraper from "@/components/Atoms/AppWraper";

const inter = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

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
      <body className={inter.className + " main_body relative"}>
        <AppWraper>
          <ONavBar></ONavBar>
          {children}
          <MainBG></MainBG>
        </AppWraper>
      </body>
    </html>
  );
}

RootLayout.displayName = "RootLayout";
