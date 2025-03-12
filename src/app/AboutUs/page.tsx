//@ts-nocheck
"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Accordion from "@/components/molecules/Accordions/Accordion";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import AngledContainer from "@/components/Atoms/Containers/AngledContainer";
import { motion } from "framer-motion";
import ContainerWithImage from "@/components/Organims/FramerAnimations/ContainerWithImage";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const context = useAppContext();
  const founder1Ref = useRef();
  const founder2Ref = useRef();
  const founder3Ref = useRef();
  const angled1Ref = useRef();
  const angled2Ref = useRef();
  const angled3Ref = useRef();

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

  useLayoutEffect(() => {
    // About us side boxes angled
    [angled1Ref, angled2Ref, angled3Ref].forEach((ref, index) => {
      if (ref.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "85% 85%",
              scrub: false,
              once: true,
              markers: false, // Remove in production
            },
          })
          .fromTo(
            ref.current.querySelector(".angled_container"),
            { y: -400, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            0
          )
          .fromTo(
            ref.current.querySelector(".box_background_out"),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5 },
            0
          )
          .fromTo(
            ref.current.querySelector(".box_right_out"),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5 },
            0.15
          )
          .fromTo(
            ref.current.querySelector(".box_left_out"),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5 },
            0.15
          )
          .fromTo(
            ref.current.querySelector(".title_out"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, scale: 1, duration: 0.25 },
            0.25
          )
          .fromTo(
            ref.current.querySelector(".content_out"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, scale: 1, duration: 0.25 },
            0.5
          );
      }
    });
    // founder animations
    [founder1Ref, founder2Ref, founder3Ref].forEach((ref) => {
      if (ref.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top 60%",
              end: "85% 60%",
              scrub: true,
              once: true,
              markers: false, // Remove in production
            },
          })
          .fromTo(
            ref.current.querySelector(".image_out"),
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 4 },
            0
          )
          .fromTo(
            ref.current.querySelector(".title_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            1
          )
          .fromTo(
            ref.current.querySelector(".content_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            2
          )
          .fromTo(
            ref.current.querySelector(".name_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            3
          )
          .fromTo(
            ref.current.querySelector(".position_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            4
          )
          .fromTo(
            ref.current.querySelector(".location_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            5
          )
          .fromTo(
            ref.current.querySelector(".links_out"),
            { opacity: 0, y: -50, scale: 0.75 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            6
          );
      }
    });
    //
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white`}
    >
      {/* Section with us and the description */}
      <div
        ref={angled1Ref}
        className="relative flex flex-col items-center justify-center mb-[25vh] p-5 xl:p-12"
      >
        <div className="grid w-full grid-cols-12 max-w-7xl xl:w-full">
          <div className="w-full col-start-1 col-end-13 mb-10 angled_container md:col-start-1 md:col-end-11 lg:col-start-1 lg:col-end-10 xl:col-start-1 xl:col-end-7">
            <AngledContainer themeName={"burgundy"} className={"!px-0 !py-0"}>
              <div className="flex items-end justify-center w-full">
                <Heading
                  theme={"white"}
                  className={
                    "text-2xl mb-4 md:text-4xl text-start w-full title_out"
                  }
                  text={[
                    {
                      language: "EN",
                      content: "Our mission",
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
              <div className="items-start justify-center w-full content_out">
                <Paragraph
                  type={"body"}
                  className="mb-4"
                  text={[
                    {
                      language: "EN",
                      content:
                        "Provide efficient and affordable solutions for the importation of high-quality products, ensuring our customers a reliable, fast, and tailored service. We focus on optimizing costs, time, and logistics processes to guarantee a hassle-free experience.",
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
            </AngledContainer>
          </div>
        </div>
      </div>

      {/* Section with us and the description */}
      <div
        ref={angled2Ref}
        className="relative flex flex-col items-center justify-center mb-[25vh] p-5 xl:p-12"
      >
        <div className="grid w-full grid-cols-12 max-w-7xl xl:w-full">
          <div className="w-full col-start-1 col-end-13 mb-10 angled_container md:col-start-3 md:col-end-13 lg:col-start-5 lg:col-end-13 xl:col-start-7 xl:col-end-13">
            <AngledContainer
              tilt={true}
              themeName={"burgundy"}
              className={"!px-0 !py-0"}
            >
              <div className="flex items-end justify-center w-full">
                <Heading
                  theme={"white"}
                  className={
                    "text-2xl mb-4 md:text-4xl text-end w-full title_out"
                  }
                  text={[
                    {
                      language: "EN",
                      content: "Vision",
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
              <div className="items-start justify-center w-full content_out">
                <Paragraph
                  type={"body"}
                  className="mb-4 text-end"
                  text={[
                    {
                      language: "EN",
                      content:
                        "Ser la empresa importadora de referencia en el mercado, reconocida por nuestra excelencia en gestión, innovación y compromiso con la satisfacción del cliente. Aspiramos a expandir nuestra presencia en el sector y consolidarnos como socios estratégicos para empresas y emprendedores que buscan productos de calidad al mejor precio.",
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
            </AngledContainer>
          </div>
        </div>
      </div>

      {/* Section with us and the description */}
      <div
        ref={angled3Ref}
        className="relative flex flex-col items-center justify-center mb-[25vh] p-5 xl:p-12"
      >
        <div className="grid w-full grid-cols-12 max-w-7xl xl:w-full">
          <div className="w-full col-start-1 col-end-13 mb-10 angled_container md:col-start-1 md:col-end-11 lg:col-start-1 lg:col-end-10 xl:col-start-1 xl:col-end-7">
            <AngledContainer
              themeName={"burgundy"}
              className={"!px-0 !py-0 w-full"}
            >
              <div className="flex items-end justify-center w-full">
                <Heading
                  theme={"white"}
                  className={
                    "text-2xl mb-4 md:text-4xl text-start w-full title_out"
                  }
                  text={[
                    {
                      language: "EN",
                      content: "Valores",
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
              <div className="items-start justify-center w-full content_out">
                <Paragraph
                  type={"body"}
                  className="mb-4"
                  text={[
                    {
                      language: "EN",
                      content: `<span style="display:block;margin-top:5px;"><strong>Compromiso</strong>: Nos esforzamos por cumplir cada operación con responsabilidad y eficiencia.</span>
                                <span style="display:block;margin-top:10px;"><strong>Transparencia</strong>: Operamos con honestidad y claridad en cada transacción.</span>
                                <span style="display:block;margin-top:10px;"><strong>Innovación</strong>: Buscamos constantemente mejorar nuestros procesos y servicios.</span>
                                <span style="display:block;margin-top:10px;"><strong>Calidad</strong>: Priorizamos productos y proveedores que cumplan con altos estándares.</span>
                                <span style="display:block;margin-top:10px;"><strong>Orientación al cliente</strong>: La satisfacción de nuestros clientes es nuestra prioridad.</span>`,
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
            </AngledContainer>
          </div>
        </div>
      </div>

      {/* Section with photo of founders */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-5 overflow-hidden xl:p-12">
        <div className="grid mb-[25vh] grid-cols-3 gap-5 xl:gap-12 w-full xl:max-w-7xl">
          {/** Co funders */}
          <div ref={founder1Ref} className="col-span-3">
            <div className="grid grid-cols-10 xl:gap-12 mb-[25vh]">
              <div className="order-1 col-span-10 mb-12 xl:mb-0 xl:order-1 lg:col-span-3">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full overflow-hidden aspect-square">
                    <img
                      className="min-w-full rounded-full image_out"
                      src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="order-2 col-span-10 xl:order-2 lg:col-span-7">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Heading
                      className="w-full mb-3 text-2xl text-start title_out"
                      text={[
                        {
                          language: "EN",
                          content: "A comment from one of the co-funders",
                        },
                      ]}
                      level={3}
                    ></Heading>
                    <div className="w-full">
                      <Paragraph
                        className="mb-3 text-start content_out"
                        type="body"
                        text={[
                          {
                            language: "EN",
                            content:
                              "tLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!etenetur fugit!tenetur fugit!ntenetur fugit!tenetur fugit!etur fugit!",
                          },
                        ]}
                      ></Paragraph>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="mb-2 text-xl font-bold name_out">
                        Cristian Ragazzini
                      </p>
                      <p className="mb-1 text-center text-md position_out">
                        Co-Founder - Senior Market Analysis
                      </p>
                      <p className="my-1 location_out">Cordoba - AR</p>
                      <div className="flex items-center justify-center gap-3 links_out">
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
          </div>

          {/** Co funders */}
          <div ref={founder2Ref} className="col-span-3">
            <div className="grid grid-cols-10 xl:gap-12 mb-[25vh]">
              <div className="order-2 col-span-10 xl:order-1 lg:col-span-7">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Heading
                      className="w-full mb-3 text-2xl text-start title_out"
                      text={[
                        {
                          language: "EN",
                          content: "A comment from one of the co-funders",
                        },
                      ]}
                      level={3}
                    ></Heading>
                    <div className="w-full">
                      <Paragraph
                        className="mb-3 text-start content_out"
                        type="body"
                        text={[
                          {
                            language: "EN",
                            content:
                              "tLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et illo perferendis, aliquid ipsam expedita deserunt ab molestiae sequi qui necessitatibus laborum debitis provident vitae dolore consequuntur porro ttenetur fugit!",
                          },
                        ]}
                      ></Paragraph>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="mb-2 text-xl font-bold name_out">
                        Humberto Ragazzini
                      </p>
                      <p className="mb-1 text-center text-md position_out">
                        Co-Founder - Full Stack Developer
                      </p>
                      <p className="my-1 location_out">Reigate - UK</p>
                      <div className="flex items-center justify-center gap-3 links_out">
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
              </div>
              <div className="order-1 col-span-10 mb-12 xl:mb-0 xl:order-2 lg:col-span-3">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full overflow-hidden aspect-square">
                    <img
                      className="min-w-full rounded-full image_out"
                      src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** Co funders */}
          <div ref={founder3Ref} className="col-span-3">
            <div className="grid grid-cols-10 xl:gap-12">
              <div className="order-1 col-span-10 mb-12 xl:mb-0 xl:order-1 lg:col-span-3">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full overflow-hidden aspect-square">
                    <img
                      className="min-w-full rounded-full image_out"
                      src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="order-2 col-span-10 xl:order-2 lg:col-span-7">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Heading
                      className="w-full mb-3 text-2xl text-start title_out"
                      text={[
                        {
                          language: "EN",
                          content: "A comment from one of the co-funders",
                        },
                      ]}
                      level={3}
                    ></Heading>
                    <div className="w-full">
                      <Paragraph
                        className="mb-3 text-start content_out"
                        type="body"
                        text={[
                          {
                            language: "EN",
                            content:
                              "tLorem ipsum dolor sit amet, consectetur adipisicing elit...",
                          },
                        ]}
                      ></Paragraph>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="mb-2 text-xl font-bold name_out">
                        Diego Ragazzini
                      </p>
                      <p className="mb-1 text-center text-md position_out">
                        Co-Founder - Building Technician
                      </p>
                      <p className="my-1 location_out">Cordoba - UK</p>
                      <div className="flex items-center justify-center gap-3 links_out">
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
          </div>
        </div>
      </div>

      {/* Our history */}
      {/* <div className="relative flex flex-col items-center justify-center min-h-screen p-5 xl:p-12">
        <div className="grid grid-cols-12 max-w-7xl">
          <div className="col-span-12 xl:col-start-2 xl:col-end-12">
            <ContainerWithImage
              imageOne={
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gallet_clamshell_600x600_movement.jpg?20120102182331"
              }
              imageTwo={
                "https://www.makiramen.com/wp-content/uploads/2024/04/NICOLSON-ST--600x600.jpg"
              }
              imageThree={
                "https://archive.starbucks.com/uploads/2018/12/50a-nodl-our-name-sbx20080316-7785-1528x1080.jpg"
              }
              themeName={"burgundy"}
              className={""}
            >
              <heading
                classname={"text-2xl mb-4 text-start md:text-4xl"}
                text={[
                  {
                    language: "en",
                    content: "our story",
                  },
                  {
                    language: "es",
                    content: "nuestra historia",
                  },
                  {
                    language: "ch",
                    content: "提升各行业",
                  },
                  {
                    language: "it",
                    content: "nuestra historia",
                  },
                ]}
                level={2}
              ></heading>
              <paragraph
                type={"standfirst"}
                classname="mb-4"
                text={[
                  {
                    language: "en",
                    content:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'content here, content here', making it look like readable english. many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                  },
                  {
                    language: "es",
                    content:
                      "titulo secundario de la pagina standfirst, al por menor (espaniol)",
                  },
                  {
                    language: "ch",
                    content: "进口、建筑和零售的综合解决方案 (chino)",
                  },
                  {
                    language: "it",
                    content:
                      "titulo secundario de la pagina standfirst, al dettaglio (italiano)",
                  },
                ]}
              ></paragraph>
            </ContainerWithImage>
          </div>
        </div>
      </div> */}

      {/* Why choose Primalport */}
      <div className="p-5 xl:p-12 min-h-screen flex flex-col justify-center items-center overflow-hidden relative bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.50)]">
        <div className="xl:w-full xl:max-w-[1920px]">
          <div className="flex justify-centerl">
            <Accordion></Accordion>
          </div>
        </div>
      </div>

      {/* Lets contact */}
      <div className="p-5 xl:p-12 bg-gradient-to-b from-[rgba(0.0,0.0,0.0,0.50)] to-black flex flex-col justify-center items-center overflow-hidden relative">
        <div className="xl:w-[75%] xl:max-w-[1920px] pb-[25vh]">
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
