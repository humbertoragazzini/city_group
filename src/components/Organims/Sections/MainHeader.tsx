// @ts-nocheck
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

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
        <Heading
          className="py-3 mx-auto mb-4 !text-3xl text-center rounded-lg bg-the-red px-7 w-fit"
          text={[
            {
              language: "EN",
              content: "Imports, Construction, and Retail",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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

        <Heading
          className="mb-4 text-center"
          text={[
            {
              language: "EN",
              content: "Welcome to Primalport",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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
          className="mb-4 text-center"
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
      </div>
      <div className="relative opacity-0" ref={aboutUsRef}>
        <Heading
          className="py-3 mx-auto mb-4 !text-3xl text-center rounded-lg bg-the-red px-7 w-fit"
          text={[
            {
              language: "EN",
              content: "Imports, Construction, and Retail",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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

        <Heading
          className="mb-4 text-center"
          text={[
            {
              language: "EN",
              content: "Welcome to Primalport",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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
          className="mb-4 text-center"
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
      </div>
      <div className="relative opacity-0" ref={ourServicesRef}>
        <Heading
          className="py-3 mx-auto mb-4 !text-3xl text-center rounded-lg bg-the-red px-7 w-fit"
          text={[
            {
              language: "EN",
              content: "Imports, Construction, and Retail",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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

        <Heading
          className="mb-4 text-center"
          text={[
            {
              language: "EN",
              content: "Welcome to Primalport",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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
          className="mb-4 text-center"
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
      </div>
      <div className="relative opacity-0" ref={contactUsRef}>
        <Heading
          className="py-3 mx-auto mb-4 !text-3xl text-center rounded-lg bg-the-red px-7 w-fit"
          text={[
            {
              language: "EN",
              content: "Imports, Construction, and Retail",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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

        <Heading
          className="mb-4 text-center"
          text={[
            {
              language: "EN",
              content: "Welcome to Primalport",
            },
            {
              language: "ES",
              content: "Elevando la Excelencia en Todas las Industrias",
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
          className="mb-4 text-center"
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
      </div>
    </>
  );
}
