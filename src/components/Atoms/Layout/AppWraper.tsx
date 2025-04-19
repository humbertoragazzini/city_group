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
import Footer from "./footer";

export default function AppWraper({ children }: any) {
  const pathname = usePathname();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly scroll to top
    console.log(pathname);
  }, [pathname]);

  return (
    <AppProvider>
      <ONavBar></ONavBar>
      {1 == 1 && <MainBG></MainBG>}
      <SmoothScrollbar enabled={true}>
        {() => {
          return (
            <>
              {/*header*/}
              {!(pathname == "/Catalogue") && (
                <div
                  className={`opacity-0 animate-fade-in delay-[1500ms] grid h-fit min-h-screen grid-cols-1 xl:grid-cols-2 max-w-[1920px] mx-auto p-[45px]`}
                >
                  {/* <div className="relative flex flex-col items-center justify-center text-white col-span-1 xl:col-span-2 ">
                    <MainHeader></MainHeader>
                    <LogoBG
                      className={
                        "hidden xl:block left-[250px] min-w-[calc(100%-500px)]"
                      }
                      width={null}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>*/}
                  <div className="border-2 border-white col-span-1">
                    <h1>The new title</h1>
                  </div>
                  <div className="relative border-2 border-white col-span-1">
                    <LogoBG
                      className={
                        "hidden xl:block right-0 min-w-[calc(100%-500px)]"
                      }
                      width={null}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>
                </div>
              )}
              {/*body*/}
              {children}
              {/*footer*/}
              {!(pathname == "/Catalogue") && <Footer></Footer>}
            </>
          );
        }}
      </SmoothScrollbar>
    </AppProvider>
  );
}

AppWraper.displayName = "AppWraper";
