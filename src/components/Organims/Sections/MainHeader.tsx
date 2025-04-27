// @ts-nocheck
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import LogoBG from "../RTFAnimations/RTFAComponents/Logo/LogoBG";

export default function MainHeader() {
  const pathname = usePathname();
  const homeRef = useRef();
  const aboutUsRef = useRef();
  const ourServicesRef = useRef();
  const contactUsRef = useRef();
  useLayoutEffect(() => {
    if (
      homeRef.current !== undefined &&
      aboutUsRef.current !== undefined &&
      ourServicesRef.current !== undefined &&
      contactUsRef.current !== undefined
    ) {
      switch (pathname) {
        case "/":
          gsap.to(homeRef.current, {
            opacity: 1,
            duration: 2,
            onStart: () => {
              gsap.set(homeRef.current, { display: "block" });
            },
          });
          gsap.set(aboutUsRef.current, { display: "none", opacity: 0 });
          gsap.set(ourServicesRef.current, { display: "none", opacity: 0 });
          gsap.set(contactUsRef.current, { display: "none", opacity: 0 });
          break;
        case "/AboutUs":
          gsap.set(homeRef.current, { display: "none", opacity: 0 });
          gsap.to(aboutUsRef.current, {
            opacity: 1,
            duration: 2,
            onStart: () => {
              gsap.set(aboutUsRef.current, { display: "block" });
            },
          });
          gsap.set(ourServicesRef.current, { display: "none", opacity: 0 });
          gsap.set(contactUsRef.current, { display: "none", opacity: 0 });
          break;
        case "/OurServices":
          gsap.set(homeRef.current, { display: "none", opacity: 0 });
          gsap.set(aboutUsRef.current, { display: "none", opacity: 0 });
          gsap.set(contactUsRef.current, { display: "none", opacity: 0 });
          gsap.to(ourServicesRef.current, {
            opacity: 1,
            duration: 2,
            onStart: () => {
              gsap.set(ourServicesRef.current, { display: "block" });
            },
          });

          break;
        case "/ContactUs":
          gsap.set(homeRef.current, { display: "none", opacity: 0 });
          gsap.set(aboutUsRef.current, { display: "none", opacity: 0 });
          gsap.set(ourServicesRef.current, { display: "none", opacity: 0 });
          gsap.to(contactUsRef.current, {
            opacity: 1,
            duration: 2,
            onStart: () => {
              gsap.set(contactUsRef.current, { display: "block" });
            },
          });
          break;
        default:
          break;
      }
    }
  }, [pathname]);

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center opacity-0"
        ref={homeRef}
      >
        <div className="">
          <div className={"grid grid-cols-4 gap-10"}>
            <div className="flex flex-col items-start justify-center col-span-2">
              <Heading
                className="mb-4 text-left lg:text-6xl xl:text-[150px] !leading-[150px]"
                text={[
                  {
                    language: "EN",
                    content: "Primalports",
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
                level={1}
              ></Heading>
              <Heading
                className="mb-4 text-left lg:text-3xl"
                text={[
                  {
                    language: "EN",
                    content: "Your Gateway to International Commerce",
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
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst3"}
                className="mb-4 text-left lg:text-lg"
                text={[
                  {
                    language: "EN",
                    content:
                      "We are a global import and export company dedicated to connecting markets and delivering tailored solutions. With a commitment to precision, trust, and innovation, we help our clients grow and thrive on the world stage.",
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
            </div>
            <div className="overflow-hidden col-span-2">
              <LogoBG
                className={
                  "relative block w-full translate-y-[0%] left-0 aspect-square"
                }
                width={null}
                rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
              ></LogoBG>
            </div>
          </div>
        </div>
      </div>
      <div className="relative opacity-0" ref={aboutUsRef}>
        <div className="">
          <div className={"grid grid-cols-4 gap-10"}>
            <div className="flex flex-col items-start justify-center col-span-2">
              <Heading
                className="mb-4 text-left lg:text-6xl xl:text-[150px] !leading-[150px]"
                text={[
                  {
                    language: "EN",
                    content: "Primalports",
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
                level={1}
              ></Heading>
              <Heading
                className="mb-4 text-left lg:text-3xl"
                text={[
                  {
                    language: "EN",
                    content: "Your Gateway to International Commerce",
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
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst3"}
                className="mb-4 text-left lg:text-lg"
                text={[
                  {
                    language: "EN",
                    content:
                      "We are a global import and export company dedicated to connecting markets and delivering tailored solutions. With a commitment to precision, trust, and innovation, we help our clients grow and thrive on the world stage.",
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
            </div>
            <div className="overflow-hidden col-span-2">
              <LogoBG
                className={
                  "relative block w-full translate-y-[0%] left-0 aspect-square"
                }
                width={null}
                rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
              ></LogoBG>
            </div>
          </div>
        </div>
      </div>
      <div className="relative opacity-0" ref={ourServicesRef}>
        <div className="">
          <div className={"grid grid-cols-4 gap-10"}>
            <div className="flex flex-col items-start justify-center col-span-2">
              <Heading
                className="mb-4 text-left lg:text-6xl xl:text-[150px] !leading-[150px]"
                text={[
                  {
                    language: "EN",
                    content: "Primalports",
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
                level={1}
              ></Heading>
              <Heading
                className="mb-4 text-left lg:text-3xl"
                text={[
                  {
                    language: "EN",
                    content: "Your Gateway to International Commerce",
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
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst3"}
                className="mb-4 text-left lg:text-lg"
                text={[
                  {
                    language: "EN",
                    content:
                      "We are a global import and export company dedicated to connecting markets and delivering tailored solutions. With a commitment to precision, trust, and innovation, we help our clients grow and thrive on the world stage.",
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
            </div>
            <div className="overflow-hidden col-span-2">
              <LogoBG
                className={
                  "relative block w-full translate-y-[0%] left-0 aspect-square"
                }
                width={null}
                rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
              ></LogoBG>
            </div>
          </div>
        </div>
      </div>
      <div className="relative opacity-0" ref={contactUsRef}>
        <div className="">
          <div className={"grid grid-cols-4 gap-10"}>
            <div className="flex flex-col items-start justify-center col-span-2">
              <Heading
                className="mb-4 text-left lg:text-6xl xl:text-[150px] !leading-[150px]"
                text={[
                  {
                    language: "EN",
                    content: "Primalports",
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
                level={1}
              ></Heading>
              <Heading
                className="mb-4 text-left lg:text-3xl"
                text={[
                  {
                    language: "EN",
                    content: "Your Gateway to International Commerce",
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
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst3"}
                className="mb-4 text-left lg:text-lg"
                text={[
                  {
                    language: "EN",
                    content:
                      "We are a global import and export company dedicated to connecting markets and delivering tailored solutions. With a commitment to precision, trust, and innovation, we help our clients grow and thrive on the world stage.",
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
            </div>
            <div className="overflow-hidden col-span-2">
              <LogoBG
                className={
                  "relative block w-full translate-y-[0%] left-0 aspect-square"
                }
                width={null}
                rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
              ></LogoBG>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
