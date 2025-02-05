"use client";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import { AppProvider } from "@/context/AppContext";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
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
                        "left-[0%] lg:top-[-65%] 3xl:top-[-50%] 4xl:top-[0%] 5xl:top-[0%] hidden xl:block"
                      }
                      width={1300}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>
                </div>
              </GlassHScreen>
              {children}
            </>
          );
        }}
      </SmoothScrollbar>
    </AppProvider>
  );
}

AppWraper.displayName = "AppWraper";
