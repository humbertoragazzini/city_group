// @ts-nocheck
"use client";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
import { useAppContext } from "@/context/AppContext";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GlobalCanvas, useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useTransform } from "framer-motion";
import { useTrackerMotionValue } from "@/CustomHooks/useTrackerMotionValue";

export default function Home() {
  const context = useAppContext();
  const [themeSelected, setThemeSelected] = useState<any>("white");
  const [Index, setIndex] = useState<any>(0);
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

  function VerticalParallax({ children, type }: any) {
    const el = useRef<any>(null);
    const tracker = useTracker(el);
    const progress = useTrackerMotionValue(tracker);
    const textY = useTransform(progress, [0, 1], ["25%", "-25%"]);
    const textX = useTransform(progress, [0, 0.5], ["-100%", "0%"]);
    const imageY = useTransform(progress, [0, 1], ["50", "0%"]);
    const imageOpacity = useTransform(progress, [0, 0.5], ["0", "1"]);

    return (
      <section
        ref={el}
        className="absolute h-screen flex items-center justify-center w-full"
      >
        <>
          {type === "textV" && (
            <motion.div
              className="absolute min-h-full right-0"
              style={{ y: textY }}
            >
              <div
                className="block text-[250px] text-deep-pink whitespace-nowrap uppercase m-0"
                style={{ writingMode: "vertical-lr" }}
              >
                {children}
              </div>
            </motion.div>
          )}
        </>
        <>
          {type === "textH" && (
            <motion.div
              className="absolute min-h-full left-0"
              style={{ x: textX }}
            >
              <div className="block text-[250px] uppercase m-0 text-nowrap">
                {children}
              </div>
            </motion.div>
          )}
        </>
        <>
          {type === "image" && (
            <motion.div
              className="absolute min-h-full min-w-full"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              <div className="block min-w-full">{children}</div>
            </motion.div>
          )}
        </>
      </section>
    );
  }

  return (
    <SmoothScrollbar enabled={!context.state.isMenuOpen}>
      {() => {
        return (
          <>
            <div
              className={
                "relative z-10 overflow-hidden m-auto pt-[0px] text-white " +
                (!context.state.isMenuOpen ? "" : "h-screen")
              }
            >
              <GradientBG className={"absolute top-0 left-0"}></GradientBG>
              {/* <GlassHScreen>
                <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3 max-w-[1700px] mx-auto p-2 md:p-3 lg:p-9 xl:p-14 2xl:p-20 pt-[90px]">
                  <div className="relative col-span-1 lg:col-span-2">
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H1)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H1)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H1)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H1)",
                        },
                      ]}
                      level={1}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H2)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H2)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H2)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H2)",
                        },
                      ]}
                      level={2}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H3)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H3)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H3)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H3)",
                        },
                      ]}
                      level={3}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (h4)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (h4)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (h4)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (h4)",
                        },
                      ]}
                      level={4}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H5)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H5)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H5)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H5)",
                        },
                      ]}
                      level={5}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H6)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H6)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H6)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H6)",
                        },
                      ]}
                      level={6}
                      theme={themeSelected}
                    ></Heading>
                    <Paragraph
                      type={"body"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst2"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst3"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst4"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                  </div>
                  <div className="relative col-span-1">
                    <button
                      className="bg-the-red p-8 text-white"
                      onClick={() => {
                        if (Index > 9) {
                          setIndex(0);
                          setThemeSelected(themes[Index]);
                        } else {
                          setIndex(Index + 1);
                          setThemeSelected(themes[Index]);
                        }
                      }}
                    >
                      Change color
                    </button>
                  </div>
                </div>
              </GlassHScreen> */}
              <GlassHScreen>
                <div className="grid h-screen grid-cols-1 xl:grid-cols-3 max-w-[1920px] mx-auto">
                  <div className="relative col-span-1 xl:col-span-2 px-4 pt-[90px] md:pt-[0px] md:px-16 flex flex-col justify-center items-start">
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content:
                            "PrimalPorts Elevating Excellence Across Industries",
                        },
                        {
                          language: "ES",
                          content:
                            "PrimalPorts Elevando la Excelencia en Todas las Industrias",
                        },
                      ]}
                      level={1}
                    ></Heading>

                    <Paragraph
                      type={"standfirst"}
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
                      type={"standfirst2"}
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

              <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3 max-w-[1700px] mx-auto p-2 md:p-3 lg:p-9 xl:p-14 2xl:p-20 ">
                <div className="relative col-span-1 lg:col-span-2 flex justify-center items-center">
                  <Image
                    src={"/img/pexels-goumbik-928199.jpg"}
                    width={1920}
                    height={1080}
                    alt="test image"
                    className="w-full rounded-xl"
                  ></Image>
                </div>
                <div className="relative col-span-1"></div>
              </div>

              <div className="relative min-h-screen bg-[#267788] z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto max-w-[1700px] mx-auto p-8 md:p-16 lg:p-9 xl:p-14 2xl:p-20">
                  <div className="relative col-span-1 lg:col-span-2">
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H1)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H1)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H1)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H1)",
                        },
                      ]}
                      level={1}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H2)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H2)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H2)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H2)",
                        },
                      ]}
                      level={2}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H3)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H3)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H3)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H3)",
                        },
                      ]}
                      level={3}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (h4)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (h4)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (h4)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (h4)",
                        },
                      ]}
                      level={4}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H5)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H5)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H5)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H5)",
                        },
                      ]}
                      level={5}
                      theme={themeSelected}
                    ></Heading>
                    <Heading
                      text={[
                        {
                          language: "EN",
                          content: "Title example size and style (H6)",
                        },
                        {
                          language: "ES",
                          content: "Ejemplo de titulo con estilo (H6)",
                        },
                        {
                          language: "CH",
                          content: "标题样式示例 (H6)",
                        },
                        {
                          language: "IT",
                          content: "Esempio di titolo con stile (H6)",
                        },
                      ]}
                      level={6}
                      theme={themeSelected}
                    ></Heading>
                    <Paragraph
                      type={"body"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst2"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst3"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst4"}
                      text={[
                        {
                          language: "EN",
                          content: "Paragraph component testing",
                        },
                        {
                          language: "ES",
                          content: "Testeo del component de parrafos",
                        },
                        {
                          language: "CH",
                          content: "段落组件的测试",
                        },
                        {
                          language: "IT",
                          content: "Test del componente di paragrafi",
                        },
                      ]}
                      theme={themeSelected}
                    ></Paragraph>
                  </div>
                  <div className="relative col-span-1"></div>
                </div>
              </div>

              <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-3 max-w-[1700px] mx-auto p-2 md:p-3 lg:p-9 xl:p-14 2xl:p-20 z-0">
                <div className="relative col-span-1 lg:col-span-2 flex justify-center items-center">
                  <VerticalParallax type="image">
                    <Image
                      src={"/img/pexels-goumbik-928199.jpg"}
                      width={1920}
                      height={1080}
                      alt="test image"
                      className="w-full rounded-xl"
                    ></Image>
                  </VerticalParallax>
                </div>
                <div className="relative col-span-1  -m-2 md:-m-3 lg:-m-9 xl:-m-14 2xl:-m-20 ">
                  <VerticalParallax type={"textV"}>
                    Vertical text
                  </VerticalParallax>
                </div>
              </div>

              <div className="relative min-h-screen bg-[#267788] z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto max-w-[1700px] mx-auto p-8 md:p-16 lg:p-9 xl:p-14 2xl:p-20 ">
                  <div className="relative col-span-1 lg:col-span-3">
                    <VerticalParallax type={"textH"}>
                      Horizontal text
                    </VerticalParallax>
                  </div>
                  <div className="relative col-span-1"></div>
                </div>
              </div>

              <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-3 max-w-[1700px] mx-auto p-2 md:p-3 lg:p-9 xl:p-14 2xl:p-20 z-0">
                <div className="relative col-span-1 lg:col-span-2 flex justify-center items-center">
                  <VerticalParallax type="image">
                    <Image
                      src={"/img/pexels-goumbik-928199.jpg"}
                      width={1920}
                      height={1080}
                      alt="test image"
                      className="w-full rounded-xl"
                    ></Image>
                  </VerticalParallax>
                </div>
                <div className="relative col-span-1  -m-2 md:-m-3 lg:-m-9 xl:-m-14 2xl:-m-20 "></div>
              </div>

              <div className="relative bg-the-lightWhite z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto max-w-[1700px] mx-auto px-8 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
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
                    <div className="h-[150px] w-fit p-3">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11">
                      <div className="relative col-span-2 flex flex-col justify-end items-start">
                        <p>Lorem 84b UK</p>
                        <p>Lorem 1055 ARG</p>
                      </div>
                      <div className="relative col-span-2 flex flex-col justify-end items-start">
                        <p>T +44 (0) 555 3333 UK</p>
                        <p>T +54 (0) 555 3333 ARG</p>
                      </div>
                      <div className="relative col-span-2 flex flex-col justify-end items-start">
                        <p>Email: contact@primapports.com</p>
                        <p>{"       "}contact@primapports.com</p>
                      </div>
                      <div className="relative col-span-5 flex flex-col justify-end items-end">
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

Home.displayName = "Home";
