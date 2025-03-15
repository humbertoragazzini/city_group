// @ts-nocheck
"use client";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import { AppProvider } from "@/context/AppContext";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
import Link from "next/link";
import MainHeader from "@/components/Organims/Sections/MainHeader";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ONavBar from "@/components/Organims/NavBar/ONavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Footer(){
    const pathname = usePathname();
    const scroll = useScrollbar();
    const footerRef = useRef();
    const footerAnimationRef = useRef();
   
    gsap.registerPlugin(ScrollTrigger);
   
    useEffect(() => {
      window.scrollTo(0, 0); // Instantly scroll to top
      if (footerRef.current) {
        const newTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "85% 85%",
            scrub: false,
            once: true,
            markers: true, // Remove in production
          }
        }).fromTo(
          footerRef.current.querySelectorAll(".item"),
          { y: 200, opacity: 0.25 },
          { y: 0, opacity: 1, stagger: 0.15 }
        );
    
        // Cleanup function to kill the animation on path change
        return () => {
          newTimeline.scrollTrigger?.kill();
          newTimeline.kill();
        };
      }
    }, [pathname]);

    return(
        <div ref={footerRef} className="relative z-10 w-full overflow-hidden text-white bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto p-4 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
          <div className="relative flex items-center justify-between col-span-1 lg:col-span-3 pb-9">
            <div className="max-w-[650px]">
              <Paragraph
                type={"standfirst"}
                className="pb-4 font-bold item"
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
                className="pb-4 item"
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
            <div className="hidden lg:block h-[150px] w-fit p-3 item">
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
          <div className="relative pb-10 col-span-1 lg:col-span-3 item">
            <hr></hr>
          </div>
          <div className="relative col-span-1 lg:col-span-3">
            <div className="flex flex-col items-start justify-between sm:flex-row">
              <div className="flex flex-row min-w-full">
                <div className="relative flex-col items-start justify-end hidden mb-3 mr-24 lg:flex">
                  <p className="item">Reigate UK</p>
                  <p className="item">Cordoba capital ARG</p>
                </div>
                <div className="relative flex flex-col justify-between flex-1 mb-3 md:flex-row md:items-end">
                  <p className="mb-3 md:mb-0">
                    contact@primalports.com{" "}
                    <span className="block lg:hidden item">Corboba ARG</span>
                    <span className="block lg:hidden item"> Reigate UK</span>
                  </p>
                  <span className="block">
                    © 2025{" "}
                    <Link
                      className="mr-2 item"
                      href="https://github.com/humbertoragazzini/"
                    >
                      Tobe21 WebDeveloper.
                    </Link>
                    <span>
                      <Paragraph
                        className="inline-block item"
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
    )
}