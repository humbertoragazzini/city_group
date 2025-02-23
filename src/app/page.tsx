// @ts-nocheck
"use client";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import { useAppContext } from "@/context/AppContext";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GlobalCanvas, useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useTransform } from "framer-motion";
import { useTrackerMotionValue } from "@/CustomHooks/useTrackerMotionValue";
import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";
import Parallax from "@/components/Organims/FramerAnimations/Parallax";
import gsap from "gsap";

import React from "react";
import { useScroll } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import SectionL from "@/components/Organims/Sections/Desktop/SectionL";
import SectionR from "@/components/Organims/Sections/Desktop/SectionR";
import SectionMob from "@/components/Organims/Sections/Mobile/SectionMob";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";

export default function Home() {
  const context = useAppContext();
  const [themeSelected, setThemeSelected] = useState<any>("white");
  const [Index, setIndex] = useState<any>(0);
  const headerRef = useRef();
  const themes = [
    "red",
    "black",
    "darkGrey",
    "lightGrey",
    "lightRed",
    "darkWhite",
    "darkerGrey",
    "lightWhite",
    "white",
    "darkBlack",
    "yellow",
  ];

  useLayoutEffect(() => {
    // gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  useEffect(() => {
    if (context.state.isMenuOpen) {
      const scrollPosition = window.pageYOffset;
      window.onscroll = () => {
        window.scrollTo(0, scrollPosition);
      };
    } else {
      window.onscroll = null;
    }
  }, [context.state.isMenuOpen]);

  return (
    <div
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white `}
      ref={headerRef}
    >
      {/* MOBILE */}
      <SectionMob
        imgContent={{
          imgUrl: "/img/import_export.jpg",
          size: {
            width: 1920,
            height: 1080,
          },
          aria: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          heading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          subheading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
        }}
        textContent={{
          heading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          text: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          learn: {
            link: "/",
            label: [
              {
                language: "EN",
                content: "Learn more",
              },
              {
                language: "ES",
                content: "Acerca de",
              },
              {
                language: "CH",
                content: "了解更多",
              },
              {
                language: "IT",
                content: "Scopri di più",
              },
            ],
          },
        }}
      ></SectionMob>

      {/* DESKTOP */}
      <SectionL
        heading={[
          {
            language: "EN",
            content: "Welcome to our website",
          },
          {
            language: "ES",
            content: "Bienvenido a nuestro sitio web",
          },
          {
            language: "CH",
            content: "欢迎来到我们的网站",
          },
          {
            language: "IT",
            content: "Benvenuti nel nostro sito web",
          },
        ]}
        content={[
          {
            language: "EN",
            content: "We provide the best services to meet your needs.",
          },
          {
            language: "ES",
            content:
              "Ofrecemos los mejores servicios para satisfacer sus necesidades.",
          },
          {
            language: "CH",
            content: "我们提供最优质的服务以满足您的需求。",
          },
          {
            language: "IT",
            content:
              "Offriamo i migliori servizi per soddisfare le tue esigenze.",
          },
        ]}
        marke={[
          {
            language: "EN",
            content: "Trust, Quality, and Excellence.",
          },
          {
            language: "ES",
            content: "Confianza, Calidad y Excelencia.",
          },
          {
            language: "CH",
            content: "信任，质量和卓越。",
          },
          {
            language: "IT",
            content: "Fiducia, Qualità ed Eccellenza.",
          },
        ]}
        learn={{
          link: "/",
          label: [
            {
              language: "EN",
              content: "Learn more",
            },
            {
              language: "ES",
              content: "Acerca de",
            },
            {
              language: "CH",
              content: "了解更多",
            },
            {
              language: "IT",
              content: "Scopri di più",
            },
          ],
        }}
      ></SectionL>

      <SectionR
        heading={[
          {
            language: "EN",
            content: "Welcome to our website",
          },
          {
            language: "ES",
            content: "Bienvenido a nuestro sitio web",
          },
          {
            language: "CH",
            content: "欢迎来到我们的网站",
          },
          {
            language: "IT",
            content: "Benvenuti nel nostro sito web",
          },
        ]}
        content={[
          {
            language: "EN",
            content: "We provide the best services to meet your needs.",
          },
          {
            language: "ES",
            content:
              "Ofrecemos los mejores servicios para satisfacer sus necesidades.",
          },
          {
            language: "CH",
            content: "我们提供最优质的服务以满足您的需求。",
          },
          {
            language: "IT",
            content:
              "Offriamo i migliori servizi per soddisfare le tue esigenze.",
          },
        ]}
        marke={[
          {
            language: "EN",
            content: "Trust, Quality, and Excellence.",
          },
          {
            language: "ES",
            content: "Confianza, Calidad y Excelencia.",
          },
          {
            language: "CH",
            content: "信任，质量和卓越。",
          },
          {
            language: "IT",
            content: "Fiducia, Qualità ed Eccellenza.",
          },
        ]}
        learn={{
          link: "/",
          label: [
            {
              language: "EN",
              content: "Learn more",
            },
            {
              language: "ES",
              content: "Acerca de",
            },
            {
              language: "CH",
              content: "了解更多",
            },
            {
              language: "IT",
              content: "Scopri di più",
            },
          ],
        }}
      ></SectionR>
    </div>
  );
}

Home.displayName = "Home";
