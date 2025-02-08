"use client";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import { AppProvider } from "@/context/AppContext";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
import Link from "next/link";
export default function AppWraper({ children }: any) {
  return (
    <AppProvider>
      <MainBG></MainBG>
      <SmoothScrollbar enabled={true}>
        {() => {
          return (
            <>
              <GlassHScreen>
                <div className="opacity-0 animate-fade-in delay-[5500ms] grid h-fit lg:h-screen grid-cols-1 xl:grid-cols-3 max-w-[1920px] mx-auto pb-12 ">
                  <div className=" relative col-span-1 xl:col-span-2 pt-[150px] pb-[100px] px-4 md:px-16 flex flex-col justify-center items-start">
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
                        {
                          language: "CH",
                          content: "提升各行业的卓越水平",
                        },
                        {
                          language: "IT",
                          content: "Elevare l'Eccellenza in Tutti i Settori",
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
                            "Soluciones Integrales en Importaciones, Construcción y Venta al por Menor",
                        },
                        {
                          language: "CH",
                          content: "进口、建筑和零售的综合解决方案",
                        },
                        {
                          language: "IT",
                          content:
                            "Soluzioni Complete per Importazioni, Costruzioni e Vendita al Dettaglio",
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
                            "En PrimalPort, armonizamos el arte de la innovación con la ciencia de la experiencia para ofrecer servicios trascendentes en Importaciones, Construcción y Venta al por Menor. Descubre cómo nuestro enfoque holístico y nuestra dedicación inquebrantable a la calidad fomentan el éxito y la transformación en una multitud de sectores.",
                        },
                        {
                          language: "CH",
                          content:
                            "在PrimalPort，我们将创新的艺术与专业的科学相结合，提供卓越的进口、建筑和零售服务。探索我们全方位的方法和对质量的坚定承诺如何促进各个领域的成功与转型。",
                        },
                        {
                          language: "IT",
                          content:
                            "In PrimalPort, armonizziamo l'arte dell'innovazione con la scienza dell'esperienza per offrire servizi trascendenti in Importazioni, Costruzioni e Vendita al Dettaglio. Scopri come il nostro approccio olistico e la nostra dedizione incrollabile alla qualità favoriscono il successo e la trasformazione in una moltitudine di settori.",
                        },
                      ]}
                    ></Paragraph>
                  </div>
                  <div className="relative hidden overflow-hidden col-span-1 xl:block">
                    <LogoBG
                      className={
                        "left-[-30%] lg:top-[-20%] 3xl:top-[-20] 4xl:top-[-20%] 5xl:top-[-20%] hidden xl:block"
                      }
                      width={1300}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>
                </div>
              </GlassHScreen>
              {children}
              {/*footer*/}
              <div className="relative z-10 w-full text-white bg-black">
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
            </>
          );
        }}
      </SmoothScrollbar>
    </AppProvider>
  );
}

AppWraper.displayName = "AppWraper";
