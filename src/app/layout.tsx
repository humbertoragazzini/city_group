// @ts-nocheck
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ONavBar from "@/components/Organims/NavBar/ONavBar";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
import AppWraper from "@/components/Atoms/Layout/AppWraper";
import Head from "next/head";
import RightNavBar from "@/components/Organims/NavBar/RightNavbar";

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
    <html lang="en" style={{ background: "#000000" }}>
      <Head>
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </Head>
      <body className={inter.className + " main_body"}>
        <AppWraper>
          {/* <RightNavBar></RightNavBar> */}
          {children}
        </AppWraper>
      </body>
    </html>
  );
}

RootLayout.displayName = "RootLayout";
