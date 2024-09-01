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

  // useLayoutEffect(() => {
  //   gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1 });
  // }, []);

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
    <SmoothScrollbar enabled={!context.state.isMenuOpen}>
      {() => {
        return (
          <div
            className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white`}
          >
            <GradientBG className={"absolute top-0 left-0 h-full"}></GradientBG>
            <div className="min-h-[250vh] w-full">
              <div className="w-full sticky top-0 left-0 z-0">
                <div
                  className="absolute w-full h-screen z-0"
                  style={{
                    backgroundImage: "url(./img/import_export.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="w-full sticky top-0 left-0 overflow-hidden z-20">
                <div className="relative w-full h-screen">
                  <Parallax
                    type={"contentHV"}
                    start={0}
                    end={0.8}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"0%"}
                    valueXEnd={"100%"}
                    className={"h-screen w-screen right-0"}
                  >
                    <div
                      className="absolute top-0 left-0 h-screen w-1/2 flex justify-center items-start whitespace-nowrap uppercase bg-black z-[10]"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      <p className="text-white text-5xl">{">>>>>>"}</p>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"contentHV"}
                    start={0}
                    end={0.8}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"0%"}
                    valueXEnd={"-100%"}
                    className={"h-screen w-screen right-0"}
                  >
                    <div
                      className="absolute top-0 right-0 h-screen w-1/2 flex justify-center items-end whitespace-nowrap uppercase bg-black z-[10]"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      <p className="text-white text-5xl">{">>>>>>"}</p>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"contentHV"}
                    start={0}
                    end={0.8}
                    valueYStart={"0%"}
                    valueYEnd={"-100%"}
                    valueXStart={"0%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-screen right-0"}
                  >
                    <div className="absolute top-0 right-0 h-screen w-screen flex justify-center items-end bg-black z-[10]">
                      <p className="text-white  text-2xl lg:text-6xl font-bold m-4">
                        About us
                      </p>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"contentHV"}
                    start={0}
                    end={0.8}
                    valueYStart={"0%"}
                    valueYEnd={"100%"}
                    valueXStart={"0%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-screen right-0"}
                  >
                    <div className="absolute top-0 right-0 h-screen w-screen flex justify-center items-start bg-black z-[10]">
                      <p className="text-white  text-2xl lg:text-6xl font-bold m-4">
                        Scroll to discover
                      </p>
                    </div>
                  </Parallax>
                  {/* <Parallax
                    type={"contentHV"}
                    start={0.5}
                    end={0.8}
                    valueYStart={"0%"}
                    valueYEnd={"-100%"}
                    valueXStart={"0%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-screen right-0"}
                  >
                    <div
                      className="whitespace-nowrap w-screen uppercase m-0 flex items-end"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      <p className="text-5xl">
                        SCROLL SCROLL SCROLL SCROLL SCROLL
                      </p>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"contentHV"}
                    start={0.5}
                    end={1}
                    valueYStart={"0%"}
                    valueYEnd={"-100%"}
                    valueXStart={"0%"}
                    valueXEnd={"0%"}
                    className={"h-screen  w-screen right-0 "}
                  >
                    <div
                      className="whitespace-nowrap w-screen uppercase m-0 flex "
                      style={{ writingMode: "vertical-lr" }}
                    >
                      <p className="text-5xl">
                        SCROLL SCROLL SCROLL SCROLL SCROLL
                      </p>
                    </div>
                  </Parallax> */}
                </div>
              </div>
              <div className="relative min-h-screen p-4 flex flex-col justify-center items-center max-w-[1920px] py-20 mx-auto z-10">
                <p className="text-4xl font-bold text-white drop-shadow-2xl mb-6">
                  About us
                </p>
                <p className="text-3xl text-white drop-shadow-2xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi eum nisi sequi aperiam sed, odit dolores
                  necessitatibus qui molestias ipsam eligendi cum doloremque
                  nobis a dignissimos rerum praesentium hic ex?
                </p>
                <p className="text-3xl text-white drop-shadow-2xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi eum nisi sequi aperiam sed, odit dolores
                  necessitatibus qui molestias ipsam eligendi cum doloremque
                  nobis a dignissimos rerum praesentium hic ex?
                </p>
              </div>
            </div>
            <div className="min-h-[200vh] w-full">
              <div className="w-full sticky top-0 left-0 z-0">
                <div
                  className="absolute w-full h-screen z-0"
                  style={{
                    backgroundImage: "url(./img/pexels-goumbik-928199.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="w-full h-[50vh] relative top-0 left-0 z-0"></div>
              <div className="relative min-h-screen p-4 flex flex-col justify-center items-center max-w-[1920px] py-20 mx-auto z-10">
                <p className="text-4xl font-bold text-white drop-shadow-2xl mb-6">
                  About us
                </p>
                <p className="text-3xl text-white drop-shadow-2xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi eum nisi sequi aperiam sed, odit dolores
                  necessitatibus qui molestias ipsam eligendi cum doloremque
                  nobis a dignissimos rerum praesentium hic ex?
                </p>
                <p className="text-3xl text-white drop-shadow-2xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi eum nisi sequi aperiam sed, odit dolores
                  necessitatibus qui molestias ipsam eligendi cum doloremque
                  nobis a dignissimos rerum praesentium hic ex?
                </p>
              </div>
            </div>
            <div className="relative h-screen w-full bg-yellow-400"></div>
            {/* Footer */}
            <div className="relative w-full bg-black z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto px-8 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
                <div className="relative col-span-1 lg:col-span-3 flex justify-between items-center pb-9">
                  <div className="max-w-[650px]">
                    <p className="pb-4">
                      <strong>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.?
                      </strong>
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minima sed natus animi, provident corrupti iure itaque.
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
                      <g
                        id="layer1"
                        transform="translate(-462.47673,-938.35465)"
                      >
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
                <div className="relative col-span-1 lg:col-span-3 pb-10">
                  <hr></hr>
                </div>
                <div className="relative col-span-1 lg:col-span-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex flex-row">
                      <div className="relative hidden lg:flex flex-col justify-end items-start mb-3 mr-24">
                        <p>Lorem 84b UK</p>
                        <p>Lorem 1055 ARG</p>
                      </div>
                      <div className="relative flex flex-col justify-end items-start mb-3 lg:mr-24">
                        <p>contact@primapports.com</p>
                        <p>contact@primapports.com</p>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-end items-start mb-3">
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
      }}
    </SmoothScrollbar>
  );
}

Home.displayName = "Home";
