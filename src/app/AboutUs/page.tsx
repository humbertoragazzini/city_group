//@ts-nocheck
"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Accordion from "@/components/molecules/Accordions/Accordion";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import AngledContainer from "@/components/Atoms/Containers/AngledContainer";

export default function AboutUs() {
  const context = useAppContext();

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
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white`}
    >
      {/* Section with us and the description */}
      <div className="w-full min-h-screen pt-10 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid grid-cols-2 w-full xl:w-full xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <div className="mb-10 col-span-2 xl:col-span-1">
            <div className="flex items-end justify-center w-full">
              <Heading
                className={"text-2xl mb-4 text-center md:text-4xl"}
                text={[
                  {
                    language: "EN",
                    content: "About us",
                  },
                  {
                    language: "ES",
                    content: "Acerca de nosotros",
                  },
                  {
                    language: "CH",
                    content: "业的卓越水平",
                  },
                  {
                    language: "IT",
                    content: "Chi siamo",
                  },
                ]}
                level={2}
              ></Heading>
            </div>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <div className="items-start justify-center w-full">
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
            </div>
          </div>
        </div>
      </div>

      {/* Section with photo of founders */}
      <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid grid-cols-3 gap-5 xl:gap-12 w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <div className="col-span-3 lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full mt-8 mb-7">
              <div className="w-full overflow-hidden rounded-md aspect-square">
                <img
                  className="min-w-full"
                  src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-2 text-xl font-bold mt-7">
                  Cristian Ragazzini
                </p>
                <p className="my-1 text-center text-md">
                  Co-Founder - Senior Market Analisys
                </p>
                <p className="my-1">Cordoba - AR</p>
                <div className="flex items-center justify-center gap-3">
                  <Link href="#">
                    <img src={"/icons/icons8-linkedin.svg"}></img>
                  </Link>
                  <Link href="#">
                    <img src={"/icons/icons8-instagram.svg"}></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full mt-8 mb-7">
              <div className="w-full overflow-hidden rounded-md aspect-square">
                <img
                  className="min-w-full"
                  src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-2 text-xl font-bold mt-7">
                  Humberto Ragazzini
                </p>
                <p className="my-1 text-center text-md">
                  Co-Founder - Full Stack Developer
                </p>
                <p className="my-1">Reigate - UK</p>
                <div className="flex items-center justify-center gap-3">
                  <Link href="#">
                    <img src={"/icons/icons8-linkedin.svg"}></img>
                  </Link>
                  <Link href="#">
                    <img src={"/icons/icons8-instagram.svg"}></img>
                  </Link>
                  <Link href="#">
                    <img src={"/icons/icons8-github.svg"}></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full mt-8 mb-7">
              <div className="w-full overflow-hidden rounded-md aspect-square">
                <img
                  className="min-w-full"
                  src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-2 text-xl font-bold mt-7">Diego Ragazzini</p>
                <p className="my-1 text-center text-md">
                  Co-Founder - Building Technician
                </p>
                <p className="my-1">Cordoba - UK</p>
                <div className="flex items-center justify-center gap-3">
                  <Link href="#">
                    <img src={"/icons/icons8-linkedin.svg"}></img>
                  </Link>
                  <Link href="#">
                    <img src={"/icons/icons8-instagram.svg"}></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our history */}
      <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid grid-cols-2 gap-8 xl:gap-12 xl:w-full xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="items-start justify-center w-full">
              <Heading
                className={
                  "text-2xl mb-4 text-center md:text-start md:text-4xl"
                }
                text={[
                  {
                    language: "EN",
                    content: "Our story",
                  },
                  {
                    language: "ES",
                    content: "Nuestra historia",
                  },
                  {
                    language: "CH",
                    content: "提升各行业",
                  },
                  {
                    language: "IT",
                    content: "Nuestra historia",
                  },
                ]}
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
            </div>
          </div>
          <div className="hidden h-full col-span-2 md:block lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full">
              <img
                className="w-full"
                src="
                    https://placehold.co/600x600"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Section our values */}
      <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid grid-cols-2 gap-8 xl:gap-12 xl:w-full xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <div className="hidden h-full col-span-2 lg:block lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full">
              <img
                className="w-full"
                src="
                    https://placehold.co/600x600"
              ></img>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="items-start justify-center w-full">
              <Heading
                className={
                  "text-2xl mb-4 text-center md:text-start md:text-4xl"
                }
                text={[
                  {
                    language: "EN",
                    content: "Our values",
                  },
                  {
                    language: "ES",
                    content: "Nuestros valores",
                  },
                  {
                    language: "CH",
                    content: "提升各行业的卓越水平",
                  },
                  {
                    language: "IT",
                    content: "Nuestros valores",
                  },
                ]}
                level={2}
              ></Heading>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>
              <Paragraph
                type={"standfirst"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content:
                      "Texto secundario de la pagina standfirst, and Retail (Ingles)",
                  },
                  {
                    language: "ES",
                    content:
                      "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                  },
                  {
                    language: "CH",
                    content: "进口、建筑和零售的综合解决方案 (Chino)",
                  },
                  {
                    language: "IT",
                    content:
                      "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                  },
                ]}
              ></Paragraph>{" "}
            </div>
          </div>
          <div className="h-full col-span-2 lg:hidden lg:col-span-1">
            <div className="flex flex-col items-center justify-center w-full">
              <img
                className="w-full"
                src="
                    https://placehold.co/600x600"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose Primalport */}
      <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="xl:w-full xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <Heading
            className={"text-2xl mb-4 text-center  md:text-4xl"}
            text={[
              {
                language: "EN",
                content: "Why choose Primalport",
              },
              {
                language: "ES",
                content: "Por que elegirnos",
              },
              {
                language: "CH",
                content: "提升各行业的卓越水平",
              },
              {
                language: "IT",
                content: "Por que elegirnos",
              },
            ]}
            level={2}
          ></Heading>
          <div className="flex justify-centerl">
            <Accordion></Accordion>
          </div>
        </div>
      </div>

      {/* Lets contact */}
      <div className="w-full min-h-screen pt-10 bg-gradient-to-b from-[rgba(0.0,0.0,0.0,0.55)] to-black flex flex-col justify-center items-center overflow-hidden relative">
        <div className="xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
          <Heading
            className={"text-2xl mb-7 text-center md:text-4xl"}
            text={[
              {
                language: "EN",
                content: "Lets contact",
              },
              {
                language: "ES",
                content: "Contactanos",
              },
              {
                language: "CH",
                content: "提升各行业的卓越水平",
              },
              {
                language: "IT",
                content: "Contactanos",
              },
            ]}
            level={2}
          ></Heading>
          <div className="flex flex-col items-center justify-center">
            <Paragraph
              className="text-center mb-7"
              type="standfirst"
              text={[
                {
                  language: "EN",
                  content:
                    "tLorem ipsum dolor sit amet, consectetur adipisicing elit.Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!etenetur fugit!tenetur fugit!ntenetur fugit!tenetur fugit!etur fugit!",
                },
                {
                  language: "ES",
                  content:
                    "tLorem ipsum dolor sit amet, consectetur adipisicing elit.Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!etenetur fugit!tenetur fugit!ntenetur fugit!tenetur fugit!etur fugit!",
                },
                {
                  language: "CH",
                  content:
                    "tLorem ipsum dolor sit amet, consectetur adipisicing elit.Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!etenetur fugit!tenetur fugit!ntenetur fugit!tenetur fugit!etur fugit!",
                },
                {
                  language: "IT",
                  content:
                    "tLorem ipsum dolor sit amet, consectetur adipisicing elit.Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!etenetur fugit!tenetur fugit!ntenetur fugit!tenetur fugit!etur fugit!",
                },
              ]}
            ></Paragraph>
            <Link
              href={"/"}
              className={`text-white text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl bg-red hover:bg-the-darkWhite mt-4 py4 px-6`}
            >
              <Paragraph
                className="mr-3"
                type="body"
                text={[
                  {
                    language: "EN",
                    content: "Contact us",
                  },
                  {
                    language: "ES",
                    content: "Contact us",
                  },
                  {
                    language: "CH",
                    content: "Contact us",
                  },
                  {
                    language: "IT",
                    content: "Contact us",
                  },
                ]}
              ></Paragraph>
              <FiArrowUpRight className="inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.displayName = "AboutUs";
