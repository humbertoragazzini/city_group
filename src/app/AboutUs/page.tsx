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
            {/* header section */}
            <div
              className="w-full min-h-[400px] !bg-center !bg-cover flex flex-col justify-center items-center overflow-hidden relative"
              style={{ background: "url(img/import_export.jpg)" }}
            >
              <h1 className="text-4xl">
                Some title with the intro for our about us
              </h1>
              <h2>Some small title talking about how good is our service</h2>
            </div>

            {/* Section with us and the description */}
            <div className="w-full min-h-[800px] bg-[rgba(0.0,0.0,0.0,0.85)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="grid grid-cols-2 max-w-[75%] p-8">
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="w-full flex justify-center items-end">
                    <h2 className="text-4xl">About us</h2>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="w-full justify-center items-start">
                    <p>
                      We’re a cutting-edge software development agency company
                      that works with you to solve your tech problems.
                    </p>

                    <p>
                      From best friends at university to business owners. We
                      launched Forward Digital during a global pandemic and
                      provide industry leading software solutions for our
                      clients.
                    </p>

                    <p>
                      We have the expertise to help our clients and we do it in
                      a relaxed and personable way. We’re easy to talk to and
                      most importantly – we get the job done.
                    </p>

                    <p>
                      Our collaborative approach ensures we can provide
                      exceptional tailored solutions to solve our client's
                      specific problems.
                    </p>

                    <p>
                      We’re not a big corporate organisation and we don’t want
                      to be. That’s what sets us apart and why our clients love
                      working with us. We avoid off-the-shelf products and take
                      time to build a product to meet and exceed our client's
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section with photo of founders */}
            <div className="w-full min-h-[800px] bg-[rgba(0.0,0.0,0.0,0.85)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="grid grid-cols-3 max-w-[75%] pb-8 pl-8 pr-8">
                <div className="md:col-span-3 lg:col-span-1">
                  <div className="mb-7 mt-8 mx-8">
                    <div className="max-w-[350px] aspect-square rounded-md overflow-hidden">
                      <img
                        className="min-h-full"
                        src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                      ></img>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-2 mt-7 font-bold text-xl">
                        Cristian Ragazzini
                      </p>
                      <p className="my-1 text-md text-center">
                        Co-Founder - Senior Market Analisys
                      </p>
                      <p className="my-1">Cordoba - AR</p>
                      <div className="flex justify-center items-center gap-3">
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
                <div className="md:col-span-3 lg:col-span-1">
                  <div className="mb-7 mt-8 mx-8">
                    <div className="max-w-[350px] aspect-square rounded-md overflow-hidden">
                      <img
                        className="min-h-full"
                        src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                      ></img>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-2 mt-7 font-bold text-xl">
                        Humberto Ragazzini
                      </p>
                      <p className="my-1 text-md text-center">
                        Co-Founder - Full Stack Developer
                      </p>
                      <p className="my-1">Reigate - UK</p>
                      <div className="flex justify-center items-center gap-3">
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
                <div className="md:col-span-3 lg:col-span-1">
                  <div className="mb-7 mt-8 mx-8">
                    <div className="max-w-[350px] aspect-square rounded-md overflow-hidden">
                      <img
                        className="min-h-full"
                        src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
                      ></img>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-2 mt-7 font-bold text-xl">
                        Diego Ragazzini
                      </p>
                      <p className="my-1 text-md text-center">
                        Co-Founder - Building Technician
                      </p>
                      <p className="my-1">Cordoba - UK</p>
                      <div className="flex justify-center items-center gap-3">
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

            {/* Section with us and the description */}
            <div className="w-full min-h-[800px] bg-[rgba(0.0,0.0,0.0,0.85)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="grid grid-cols-2 max-w-[75%] p-8">
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="w-full justify-center items-start">
                    <h2 className="text-4xl mb-7">Our story</h2>
                    <p className="mb-2">
                      We’re a cutting-edge software development agency company
                      that works with you to solve your tech problems.
                    </p>

                    <p className="mb-2">
                      From best friends at university to business owners. We
                      launched Forward Digital during a global pandemic and
                      provide industry leading software solutions for our
                      clients.
                    </p>

                    <p className="mb-2">
                      We have the expertise to help our clients and we do it in
                      a relaxed and personable way. We’re easy to talk to and
                      most importantly – we get the job done.
                    </p>

                    <p className="mb-2">
                      Our collaborative approach ensures we can provide
                      exceptional tailored solutions to solve our client's
                      specific problems.
                    </p>

                    <p className="mb-2">
                      We’re not a big corporate organisation and we don’t want
                      to be. That’s what sets us apart and why our clients love
                      working with us. We avoid off-the-shelf products and take
                      time to build a product to meet and exceed our client's
                      needs.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1 h-full">
                  <div className="w-full flex flex-col justify-center items-center">
                    <img
                      className="max-h-[500px]"
                      src="
                    https://placehold.co/600x800"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            {/* Section with us and the description */}
            <div className="w-full min-h-[800px] bg-[rgba(0.0,0.0,0.0,0.85)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="grid grid-cols-2 max-w-[75%] p-8">
                <div className="md:col-span-2 lg:col-span-1 h-full">
                  <div className="w-full flex flex-col justify-center items-center">
                    <img
                      className="max-h-[500px]"
                      src="
                    https://placehold.co/600x800"
                    ></img>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="w-full justify-center items-start">
                    <h2 className="text-4xl mb-7">Our values</h2>
                    <p className="mb-2">
                      We’re a cutting-edge software development agency company
                      that works with you to solve your tech problems.
                    </p>

                    <p className="mb-2">
                      From best friends at university to business owners. We
                      launched Forward Digital during a global pandemic and
                      provide industry leading software solutions for our
                      clients.
                    </p>

                    <p className="mb-2">
                      We have the expertise to help our clients and we do it in
                      a relaxed and personable way. We’re easy to talk to and
                      most importantly – we get the job done.
                    </p>

                    <p className="mb-2">
                      Our collaborative approach ensures we can provide
                      exceptional tailored solutions to solve our client's
                      specific problems.
                    </p>

                    <p className="mb-2">
                      We’re not a big corporate organisation and we don’t want
                      to be. That’s what sets us apart and why our clients love
                      working with us. We avoid off-the-shelf products and take
                      time to build a product to meet and exceed our client's
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose Primalport */}
            <div className="w-full min-h-[800px] bg-[rgba(0.0,0.0,0.0,0.85)] flex flex-col justify-center items-center overflow-hidden relative">
              <div className="max-w-[75%] p-8">
                <h2 className="text-4xl">Why choose Primalports</h2>
                <Accordion></Accordion>
              </div>
            </div>

            {/* footer */}
            <div className="relative w-full bg-black z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto px-8 lg:px-9 xl:px-14 2xl:px-20 pb-10 pt-10">
                <div className="relative col-span-1 lg:col-span-3 flex justify-between items-center pb-9">
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
                <div className="relative col-span-1 lg:col-span-3 pb-10">
                  <hr></hr>
                </div>
                <div className="relative col-span-1 lg:col-span-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex flex-row">
                      <div className="relative hidden lg:flex flex-col justify-end items-start mb-3 mr-24">
                        <p>Lorem 84b UK</p>
                        <p>Lorem 1055 ARG</p>
                      </div>
                      <div className="relative flex flex-col justify-end items-start mb-3 lg:mr-24">
                        <p>contact@primapports.com</p>
                        <p>contact@primapports.com</p>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-end items-start mb-3">
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
