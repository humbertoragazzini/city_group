"use client";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useRef } from "react";
import React from "react";
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

            {/* header section */}
            <div
              className="bg-gradient-to-b to-[rgba(0.0,0.0,0.0,0.55)] from-black w-full min-h-[400px] lg:min-h-[550px] xl:min-h-[650px] !bg-center !bg-cover flex flex-col justify-center items-center overflow-hidden relative"
              style={{ background: "url(img/import_export.jpg)" }}
            >
              <div className="flex flex-col items-center justify-center max-w-[1920px]">
                <Heading
                  className={"text-2xl text-center md:text-4xl"}
                  text={[
                    {
                      language: "EN",
                      content: "Titulo principal the la pagina (Ingles)",
                    },
                    {
                      language: "ES",
                      content: "Titulo principal de la pagina (Espaniol)",
                    },
                    {
                      language: "CH",
                      content: "提升各行业的卓越水平 (Chino)",
                    },
                    {
                      language: "IT",
                      content: "Titulo principal de la pagina (Italiano)",
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

            {/* Section with us and the description */}
            <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="grid grid-cols-2 w-full xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
                <div className="mb-10 col-span-2 xl:col-span-1">
                  <div className="flex items-end justify-center w-full">
                    <Heading
                      className={"text-2xl text-center md:text-4xl"}
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
                      <p className="mb-2 text-xl font-bold mt-7">
                        Diego Ragazzini
                      </p>
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
              <div className="grid grid-cols-2 gap-8 xl:gap-12 xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
                <div className="col-span-2 lg:col-span-1">
                  <div className="items-start justify-center w-full">
                    <Heading
                      className={
                        "text-2xl text-center md:text-start md:text-4xl"
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
              <div className="grid grid-cols-2 gap-8 xl:gap-12 xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
                <div className="hidden h-full col-span-2 md:block lg:col-span-1">
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
                        "text-2xl text-center md:text-start md:text-4xl"
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
              </div>
            </div>

            {/* Why choose Primalport */}
            <div className="w-full min-h-screen pt-10 bg-[rgba(0.0,0.0,0.0,0.55)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="xl:w-[75%] xl:max-w-[1920px] p-4 md:p-8 lg:p-12">
                <Heading
                  className={"text-2xl text-center  md:text-4xl"}
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
                  className={"text-2xl text-center md:text-4xl"}
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
                  <p className="text-lg text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim et illo perferendis, aliquid ipsam expedita deserunt ab
                    molestiae sequi qui necessitatibus laborum debitis provident
                    vitae dolore consequuntur porro tenetur fugit!
                  </p>
                  <p className="text-center text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <a className="px-5 py-3 mt-5 text-xl font-bold text-black bg-gray-400 border-2 border-black rounded-full hover:bg-gray-600">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="relative z-10 w-full bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto p-4 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
                <div className="relative flex items-center justify-between col-span-1 lg:col-span-3 pb-9">
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
                <div className="relative pb-10 col-span-1 lg:col-span-3">
                  <hr></hr>
                </div>
                <div className="relative col-span-1 lg:col-span-3">
                  <div className="flex flex-col items-start justify-between sm:flex-row">
                    <div className="flex flex-row">
                      <div className="relative flex-col items-start justify-end hidden mb-3 mr-24 lg:flex">
                        <p>Lorem 84b UK</p>
                        <p>Lorem 1055 ARG</p>
                      </div>
                      <div className="relative flex flex-col items-start justify-end mb-3 lg:mr-24">
                        <p>contact@primapports.com</p>
                        <p>contact@primapports.com</p>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-start justify-end mb-3">
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

AboutUs.displayName = "AboutUs";
