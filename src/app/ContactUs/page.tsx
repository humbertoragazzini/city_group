"use client";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useRef } from "react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { RTFAText } from "@/components/Organims/RTFAnimations/RTFAComponents/RTFAText/RTFAText";
import RTFACLogo3D from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/RTFACLogo3D";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
import Link from "next/link";
import Accordion from "@/components/molecules/Accordions/Accordion";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";

export default function AboutUs() {
  const context = useAppContext();
  const aboutRef = useRef<any>(null);

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
            <MainBG></MainBG>

            <GradientBG className={"absolute top-0 left-0 h-full"}></GradientBG>
            {/* Section with us and the description */}
            <div className="w-full min-h-screen py-24 backdrop-blur-lg bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="absolute z-10 min-w-full h-full min-h-screen bg-gradient-to-b from-[rgba(0.0,0.0,0.0,0.55)] to-black"></div>
              <div className="grid grid-cols-2 w-full xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
                <div className="col-span-2 xl:col-span-1">
                  <div className="flex items-center justify-center w-full h-full">
                    <Heading
                      className={
                        "relative z-20 text-2xl text-center md:text-4xl"
                      }
                      text={[
                        {
                          language: "EN",
                          content: "Contact us",
                        },
                        {
                          language: "ES",
                          content: "Contactanos",
                        },
                        {
                          language: "CH",
                          content: "业的卓越水平",
                        },
                        {
                          language: "IT",
                          content: "Contacto",
                        },
                      ]}
                      level={2}
                    ></Heading>
                  </div>
                </div>
                <div className="relative z-20 col-span-2 xl:col-span-1">
                  <div className="items-start justify-center w-full">
                    <div className="flex items-center justify-center m-12">
                      <div className="w-full max-w-lg p-8 shadow-xl backdrop-blur-lg bg-white/10 rounded-2xl">
                        <form className="space-y-4">
                          <div>
                            <label
                              className="block mb-1 text-sm font-medium text-white"
                              htmlFor="fullName"
                            >
                              Full Name
                            </label>
                            <input
                              id="fullName"
                              type="text"
                              placeholder="Enter your full name"
                              className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label
                              className="block mb-1 text-sm font-medium text-white"
                              htmlFor="companyName"
                            >
                              Company Name
                            </label>
                            <input
                              id="companyName"
                              type="text"
                              placeholder="Enter your company name"
                              className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label
                              className="block mb-1 text-sm font-medium text-white"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label
                              className="block mb-1 text-sm font-medium text-white"
                              htmlFor="inquiry"
                            >
                              Your Inquiry
                            </label>
                            <textarea
                              id="inquiry"
                              placeholder="Enter your message"
                              rows={4}
                              className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            className="w-full p-3 mt-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                          >
                            Send Inquiry
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="relative z-10 w-full bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto p-4 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
                <div className="relative flex items-center justify-between col-span-1 lg:col-span-3 pb-9">
                  <div className="max-w-[650px]">
                    <Paragraph
                      type={"standfirst"}
                      className="pb-4 font-bold"
                      text={[
                        {
                          language: "ES",
                          content:
                            "¿Listo para hacer realidad tu proyecto? Contáctanos y trabajemos juntos.",
                        },
                        {
                          language: "EN",
                          content:
                            "Ready to bring your project to life? Contact us and let's work together.",
                        },
                        {
                          language: "IT",
                          content:
                            "Pronto a realizzare il tuo progetto? Contattaci e lavoriamo insieme.",
                        },
                        {
                          language: "CH",
                          content:
                            "准备好实现您的项目了吗？联系我们，让我们一起努力。",
                        },
                      ]}
                    ></Paragraph>
                    <Paragraph
                      type={"standfirst"}
                      className="pb-4"
                      text={[
                        {
                          language: "ES",
                          content: "Estamos aquí para ayudarte.",
                        },
                        {
                          language: "EN",
                          content: "We’re here to help you.",
                        },
                        {
                          language: "IT",
                          content: "Siamo qui per aiutarti.",
                        },
                        {
                          language: "CH",
                          content: "我们在聆听，我们在这里帮助您。",
                        },
                      ]}
                    ></Paragraph>
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
                <div className="relative pb-10 col-span-1 lg:col-span-3">
                  <hr></hr>
                </div>
                <div className="relative col-span-1 lg:col-span-3">
                  <div className="flex flex-col items-start justify-between sm:flex-row">
                    <div className="flex flex-row min-w-full">
                      <div className="relative flex-col items-start justify-end hidden mb-3 mr-24 lg:flex">
                        <p>Reigate UK</p>
                        <p>Cordoba capital ARG</p>
                      </div>
                      <div className="relative flex flex-col justify-between flex-1 mb-3 md:flex-row md:items-end">
                        <p className="mb-3 md:mb-0">
                          contact@primalports.com{" "}
                          <span className="block lg:hidden">Corboba ARG</span>
                          <span className="block lg:hidden"> Reigate UK</span>
                        </p>
                        <span className="block">
                          © 2025{" "}
                          <Link
                            className="mr-2"
                            href="https://github.com/humbertoragazzini/"
                          >
                            Tobe21 WebDeveloper.
                          </Link>
                          <span>
                            <Paragraph
                              className="inline-block"
                              type={"body"}
                              text={[
                                {
                                  language: "ES",
                                  content: "Todos los derechos reservados.",
                                },
                                {
                                  language: "EN",
                                  content: "All rights reserved.",
                                },
                                {
                                  language: "IT",
                                  content: "Tutti i diritti riservati.",
                                },
                                { language: "CH", content: "保留所有权利。" },
                              ]}
                            ></Paragraph>
                          </span>
                        </span>
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

AboutUs.displayName = "AboutUs";
