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
    gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <SmoothScrollbar enabled={!context.state.isMenuOpen}>
      {() => {
        return (
          <>
            <div
              className={
                "relative z-10 overflow-hidden m-auto pt-[0px] text-white lg:pr-[45px] " +
                (!context.state.isMenuOpen ? "" : "h-screen")
              }
              ref={headerRef}
            >
              <GradientBG className={"absolute top-0 left-0"}></GradientBG>

              <GlassHScreen>
                <div className="opacity-0 animate-fade-in delay-[5500ms] grid h-fit lg:h-screen grid-cols-1 xl:grid-cols-3 max-w-[1920px] mx-auto pb-12 ">
                  <div className=" relative col-span-1 xl:col-span-2 px-4 pt-[90px]  md:pt-[60px] md:px-16 flex flex-col justify-center items-start">
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "PrimalPorts",
                        },
                        {
                          language: "ES",
                          content: "PrimalPorts ",
                        },
                      ]}
                      level={1}
                    ></Heading>

                    <Heading
                      className="mb-4"
                      text={[
                        {
                          language: "EN",
                          content: "Elevating Excellence Across Industries",
                        },
                        {
                          language: "ES",
                          content:
                            "Elevando la Excelencia en Todas las Industrias",
                        },
                      ]}
                      level={1}
                    ></Heading>

                    <Paragraph
                      type={"standfirst3"}
                      className="mb-4"
                      text={[
                        {
                          language: "EN",
                          content:
                            "Comprehensive Solutions in Imports, Construction, and Retail",
                        },
                        {
                          language: "ES",
                          content:
                            "PrimalPorts Elevating Excellence Across Industries",
                        },
                      ]}
                    ></Paragraph>

                    <Paragraph
                      type={"standfirst"}
                      text={[
                        {
                          language: "EN",
                          content:
                            "At PrimalPort, we harmonize the art of innovation with the science of expertise to offer transcendent services in Imports, Construction, and Retail. Explore how our holistic approach and unwavering dedication to quality foster success and transformation across a myriad of sectors.",
                        },
                        {
                          language: "ES",
                          content:
                            "Comprehensive Solutions in Imports, Construction, and Retail",
                        },
                      ]}
                    ></Paragraph>
                  </div>
                  <div className="relative hidden col-span-1 m-4 lg:block">
                    <LogoBG
                      className={
                        "left-[0%] lg:top-[-65%] 3xl:top-[-50%] 4xl:top-[0%] 5xl:top-[0%] hidden xl:block"
                      }
                      width={1300}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>
                </div>
              </GlassHScreen>

              {/* MOBILE */}
              <TextParallaxContentExample></TextParallaxContentExample>

              {/* DESKTOP */}

              <div className="hidden lg:grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="hidden lg:grid relative col-span-1 lg:col-span-1 gap-2 h-full w-full z-0">
                  <Parallax
                    type={"contentHV"}
                    start={-0.5}
                    end={0.5}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"-100%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-[50vw] right-0"}
                  >
                    <div className="absolute top-0 right-0 col-span-2 h-screen w-[60vw] p-12 bg-[rgba(214,245,39,0.75)] backdrop-blur-sm skew-x-12 flex justify-end items-center">
                      <div className="-skew-x-12 w-[40vw]">
                        <Heading
                          text={[
                            {
                              language: "EN",
                              content: "Imports and Exports",
                            },
                            {
                              language: "ES",
                              content: "Importaciones y Exportaciones",
                            },
                          ]}
                          level={3}
                          className="text-white pb-8 drop-shadow-xl"
                        ></Heading>

                        <p className="text-white pb-8 drop-shadow-xl">
                          In our Import Division, we traverse the globe to
                          source the finest materials and products. Our
                          extensive network of international suppliers ensures
                          that we deliver unparalleled quality and innovation.
                          We bring the world's best to your doorstep, tailored
                          to meet the unique demands of your projects.
                        </p>
                      </div>
                    </div>
                  </Parallax>
                </div>
                <div className="relative h-full col-span-1 z-10">
                  <Parallax
                    type={"contentHV"}
                    start={-0.5}
                    end={0.5}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"100%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-[50vw] left-0"}
                  >
                    <div className="absolute min-h-[100vh] min-w-[60vw] left-0 skew-x-12 overflow-hidden">
                      <Image
                        src={"/img/import_export.jpg"}
                        width={1920}
                        height={1080}
                        className="absolute min-h-[100vh] min-w-[160vh] top-0 -left-[25vw] -skew-x-12"
                      ></Image>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"textV"}
                    start={0}
                    end={1}
                    className={"right-0"}
                  >
                    <span className="lg:py-40 text-[75px] lg:text-[150px] drop-shadow-md">
                      Imports and Exports
                    </span>
                  </Parallax>
                </div>
              </div>

              <div className="hidden lg:grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="relative h-full col-span-1 z-10">
                  <Parallax
                    type={"contentHV"}
                    start={-0.5}
                    end={0.5}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"-100%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-[50vw] right-0"}
                  >
                    <div className="absolute min-h-[100vh] min-w-[60vw] right-0 -skew-x-12 overflow-hidden">
                      <Image
                        src={"/img/import_export.jpg"}
                        width={1920}
                        height={1080}
                        className="absolute min-h-[100vh] min-w-[160vh] top-0 -right-[25vw] skew-x-12"
                      ></Image>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"contentHV"}
                    start={-0.5}
                    end={0.5}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"-100%"}
                    valueXEnd={"0%"}
                    className={
                      "block lg:hidden w-[100vw] h-screen justify-center items-end right-0"
                    }
                  >
                    <div className="absolute h-screen w-full flex justify-end items-center">
                      <div className="right-0 overflow-hidden bg-red-100 mr-[60px] w-[65%] p-5">
                        <Heading
                          text={[
                            {
                              language: "EN",
                              content: "Imports and Exports",
                            },
                            {
                              language: "ES",
                              content: "Importaciones y Exportaciones",
                            },
                          ]}
                          level={3}
                          className="text-white pb-8 drop-shadow-xl"
                        ></Heading>

                        <p className="text-white pb-8 drop-shadow-xl">
                          In our Import Division, we traverse the globe to
                          source the finest materials and products. Our
                          extensive network of international suppliers ensures
                          that we deliver unparalleled quality and innovation.
                          We bring the world's best to your doorstep, tailored
                          to meet the unique demands of your projects.
                        </p>
                      </div>
                    </div>
                  </Parallax>
                  <Parallax
                    type={"textV"}
                    start={0}
                    end={1}
                    className={"left-0"}
                  >
                    <span className="lg:py-40 text-[75px] lg:text-[150px] drop-shadow-md">
                      Imports and Exports
                    </span>
                  </Parallax>
                </div>
                <div className="hidden lg:grid relative col-span-1 lg:col-span-1 gap-2 h-full w-full z-0">
                  <Parallax
                    type={"contentHV"}
                    start={-0.5}
                    end={0.5}
                    valueYStart={"0%"}
                    valueYEnd={"0%"}
                    valueXStart={"100%"}
                    valueXEnd={"0%"}
                    className={"h-screen w-[60vw] rigth-0"}
                  >
                    <div className="absolute top-0 left-0 col-span-2 h-screen w-[60vw] p-12 bg-[rgba(245,76,39,0.75)] backdrop-blur-sm -skew-x-12 flex justify-start items-center">
                      <div className="w-[40vw] skew-x-12 text-right">
                        <Heading
                          text={[
                            {
                              language: "EN",
                              content: "Imports and Exports",
                            },
                            {
                              language: "ES",
                              content: "Importaciones y Exportaciones",
                            },
                          ]}
                          level={3}
                          className="text-white pb-8 drop-shadow-xl"
                        ></Heading>

                        <p className="text-white pb-8 drop-shadow-xl">
                          In our Import Division, we traverse the globe to
                          source the finest materials and products. Our
                          extensive network of international suppliers ensures
                          that we deliver unparalleled quality and innovation.
                          We bring the world's best to your doorstep, tailored
                          to meet the unique demands of your projects.
                        </p>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>

              <div className="relative bg-the-lightWhite z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto mx-auto px-8 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
                  <div className="relative col-span-1 lg:col-span-3 flex justify-between items-center pb-9">
                    <div className="max-w-[650px]">
                      <p className="pb-4">
                        <strong>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.?
                        </strong>
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima sed natus animi, provident corrupti iure
                        itaque.
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

                  <div className="relative col-span-1 lg:col-span-3 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative col-span-1 lg:col-span-2 flex flex-col justify-end items-start mb-3">
                        <p>Lorem 84b UK</p>
                        <p>Lorem 1055 ARG</p>
                      </div>
                      <div className="relative col-span-1 lg:col-span-2 flex flex-col justify-end items-start mb-3">
                        <p>T +44 (0) 555 3333 UK</p>
                        <p>T +54 (0) 555 3333 ARG</p>
                      </div>
                      <div className="relative col-span-1 lg:col-span-2 flex flex-col justify-end items-start mb-3">
                        <p>Email: contact@primapports.com</p>
                        <p>contact@primapports.com</p>
                      </div>
                      <div className="relative col-span-1 flex flex-col justify-end items-end mb-3">
                        <div>
                          <p>Design and Developed by:</p>
                          <p>Tobe21 Studios a division of Primalports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </SmoothScrollbar>
  );
}

const TextParallaxContentExample = () => {
  return (
    <div className="lg:hidden">
      <TextParallaxContent
        imgUrl="/img/import_export.jpg"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/img/import_export.jpg"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/img/import_export.jpg"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div>
      <div className="relative h-fit">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-10 overflow-hidden"
    >
      <motion.div className="h-[100vh] aspect-video">
        <video src="./images/import_export.jpg" autoPlay loop muted></video>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-neutral-950/70 "
        // style={{
        //   backdropFilter: blur,
        // }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-10"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "150vh"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["100vh", "150vh"]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 1], [0, 1, 0]);
  const opacityBg = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <div
      ref={targetRef}
      className="relative mx-auto min-h-screen flex justify-center items-center grid max-w-5xl grid-cols-1 gap-8 px-16 pb-24 pt-12 z-0"
    >
      <div className="fixed h-screen w-screen top-0 left-0 p-4">
        <motion.div
          className="absolute h-full w-full"
          style={{ y: yBg, scale, opacityBg, opacity }}
        >
          {/* <div className="w-full h-full bg-[rgba(214,245,39,0.75)] backdrop-blur-sm"></div> */}
        </motion.div>
        <div className="col-span-1">
          <motion.div style={{ y, scale }}>
            <h2 className="text-2xl md:text-3xl font-bold md:col-span-4 pb-7">
              Additional content explaining the above card here
            </h2>
          </motion.div>

          <div className="md:col-span-8">
            <motion.div style={{ y, scale }}>
              <p className="mb-4 text-lg md:text-xl text-black-600 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                blanditiis soluta eius quam modi aliquam quaerat odit deleniti
                minima maiores voluptate est ut saepe accusantium maxime
                doloremque nulla consectetur possimus.
              </p>
              <p className="mb-8 text-lg md:text-xl text-black-600 md:text-2xl pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reiciendis blanditiis aliquam aut fugit sint.
              </p>

              <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                Learn more <FiArrowUpRight className="inline" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Home";
