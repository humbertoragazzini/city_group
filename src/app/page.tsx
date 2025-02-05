// @ts-nocheck
"use client";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
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
import AnimationController from "@/components/Organims/FramerAnimations/AnimationController";

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
      {/*<MainBG></MainBG>*/}
      {/*<GradientBG className={"absolute top-0 left-0 h-full"}></GradientBG>*/}

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

      {/* Footer */}
      <div className="relative z-10 w-full bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto px-8 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
          <div className="relative flex items-center justify-between col-span-1 lg:col-span-3 pb-9">
            <div className="max-w-[650px]">
              <p className="pb-4">
                <strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
                </strong>
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                sed natus animi, provident corrupti iure itaque.
              </p>
            </div>
            <div className="hidden lg:block h-[150px] w-fit p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full"
                width="335.1008mm"
                height="167.64732mm"
                viewBox="0 0 335.1008 167.64732"
                version="1.1"
                id="svg1"
              >
                <defs id="defs1" />
                <g id="layer1" transform="translate(-462.47673,-938.35465)">
                  <ellipse
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeWidth: 2.913,
                      strokeDasharray: "none",
                    }}
                    id="path4-5-8"
                    cx="621.6853"
                    cy="988.44244"
                    rx="48.540421"
                    ry="48.554413"
                  />
                  <path
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                    }}
                    d="m 571.66709,938.4348 v 2.01331"
                    id="path5-4-0"
                  />
                  <path
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                    }}
                    d="m 573.33549,939.12579 -1.4384,1.40875"
                    id="path5-8-7-0"
                  />
                  <path
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                    }}
                    d="m 573.71749,939.25925 -1.7986,-0.90458"
                    id="path5-8-2-4-8"
                  />
                  <path
                    id="path6-7-2"
                    style={{
                      fill: "#fff",
                      stroke: "#fff",
                      strokeWidth: 0.295824,
                      strokeDasharray: "none",
                    }}
                    d="m 622.02529,953.83851 -29.0463,48.95459 h 58.074 z m -30.4896,51.38699 -1.7105,2.8831 64.4033,0.04 -1.7332,-2.9228 z"
                  />
                  <text
                    xmlSpace="preserve"
                    style={{
                      fontSize: "47.625px",
                      fontFamily: "Microsoft Sans Serif",
                      fill: "#fff",
                      stroke: "#fff",
                      strokeWidth: "0.00499999",
                      strokeDasharray: "none",
                    }}
                    x="458.66553"
                    y="1082.6802"
                    id="text18-6-1"
                  >
                    <tspan
                      id="tspan18-1-8"
                      style={{
                        fontSize: "47.625px",
                        strokeWidth: "0.005",
                      }}
                      x="458.66553"
                      y="1082.6802"
                    >
                      PRIMALPORTS
                    </tspan>
                  </text>
                  <text
                    xmlSpace="preserve"
                    style={{
                      fontSize: "14.1111px",
                      fontFamily: "Microsoft Sans Serif",
                      fill: "#fff",
                      stroke: "#fff",
                      strokeWidth: "0.00499999",
                      strokeDasharray: "none",
                    }}
                    x="495.52203"
                    y="1104.0083"
                    id="text19-9-6"
                  >
                    <tspan
                      id="tspan19-7-0"
                      style={{
                        fontSize: "14.1111px",
                        strokeWidth: "0.005",
                      }}
                      x="495.52203"
                      y="1104.0083"
                    >
                      IMPORTS, RETAIL &amp; CONSTRUCTION
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
          </div>
          <div className="relative pb-10 col-span-1 lg:col-span-3">
            <hr></hr>
          </div>
          <div className="relative col-span-1 lg:col-span-3">
            <div className="flex flex-col items-start justify-between sm:flex-row">
              <div className="flex flex-row">
                <div className="relative flex-col items-start justify-end hidden mb-3 mr-24 lg:flex">
                  <p>Lorem 84b UK</p>
                  <p>Lorem 1055 ARG</p>
                </div>
                <div className="relative flex flex-col items-start justify-end mb-3 lg:mr-24">
                  <p>contact@primapports.com</p>
                  <p>contact@primapports.com</p>
                </div>
              </div>
              <div className="relative flex flex-col items-start justify-end mb-3">
                <div>
                  <p>Made by Tobe21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.displayName = "Home";
