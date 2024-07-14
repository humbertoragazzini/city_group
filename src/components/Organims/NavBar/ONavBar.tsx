// @ts-nocheck
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CNavBarLink from "../../molecules/NavBar/CNavBarLink";
import BigTextLink from "@/components/molecules/NavBar/BigTextLink";
import gsap from "gsap";
import { ScrollScene, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useAppContext } from "@/context/AppContext";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NavBarLBTN from "@/components/molecules/NavBar/NavBarLBTN";
import ReducedNavBar from "@/components/molecules/NavBar/ReducedNavBar";
import Link from "next/link";
import RegularNavBar from "@/components/molecules/NavBar/RegularNavBar";

gsap.registerPlugin(ScrollToPlugin);

export default function ONavBar() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null); //TODO renombrar los items y los liks ref para que sean mas precisos con lo que realmnete son
  const contentRef = useRef<HTMLDivElement>(null);
  const contentMainRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hovered, setHovered] = useState<string>("");
  const { state, setState } = useAppContext();
  const firstItemRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [transforBar, setTransformBar] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !isOpen,
    }));
    setIsOpen(!isOpen);
  };

  const handleHover = (hovered: string) => {
    setHovered(hovered);
  };

  useLayoutEffect(() => {
    const theBody = document.querySelector(".main_body") as HTMLElement | null;
    if (theBody && contentMainRef.current !== null) {
      if (isOpen) {
        gsap.to(menuRef.current, { top: "0px", duration: 1.5, ease: "lineal" });
        gsap.fromTo(
          contentMainRef.current,
          {
            top: -contentMainRef.current?.offsetHeight,
          },
          {
            top: 0,
            duration: 2.5,
          }
        );
      } else {
        gsap.to(menuRef.current, {
          top: "-100vh",
          duration: 1.5,
          ease: "lineal",
        });
      }
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    const containers = document.querySelectorAll(".subLinksContainer");
    if (containers) {
      containers.forEach((container) => {
        if (container.classList.contains(hovered)) {
          gsap.to(container, { opacity: 1 });
        } else {
          gsap.to(container, { opacity: 0 });
        }
      });
    }
  }, [hovered]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.scrollY > 100) {
        setTransformBar(true);
      } else {
        setTransformBar(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 overflow-visible w-screen z-50">
        <nav
          className={
            "relative h-[90px] flex flex-row items-center justify-start transition-all duration-1000 mx-auto overflow-hidden " +
            (transforBar
              ? "bg-[rgba(10,10,10,0.3)] backdrop-blur-lg w-full md:w-[768px] md:rounded-full md:top-4 justify-between"
              : "backdrop-blur-lg md:backdrop-blur-none bg-[rgba(10,10,10,0.3)] md:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent w-screen top-0 justify-between ")
          }
        >
          {/* Regular navbar */}
          <RegularNavBar transforBar={transforBar}></RegularNavBar>
          {/* Reduced navbar */}
          <ReducedNavBar
            transforBar={transforBar}
            handleOpenMenu={handleOpenMenu}
          ></ReducedNavBar>
        </nav>
      </div>

      <div
        className={
          "fixed bg-[#131d23] w-screen h-screen overflow-y-scroll z-[9999] top-[-100vh]"
        }
        ref={menuRef}
      >
        <div
          ref={contentMainRef}
          className="grid grid-cols-3 h-fit lg:p-12 relative over overflow-hidden"
        >
          <div ref={contentRef} className="col-span-2">
            <div
              className="p-5 lg:p-12 relative"
              onMouseEnter={() => {
                setHovered("home_content");
              }}
              ref={firstItemRef}
            >
              <BigTextLink
                className={pathname === "/" ? "text-white" : ""}
                linkText={"Home"}
                href={"/"}
                order={"01"}
              ></BigTextLink>
              <div className="home_content subLinksContainer hidden lg:block h-fit top-[50%] absolute left-[100%] min-w-[450px]">
                <ul className="relative translate-y-[-50%]">
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem home 1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-5 lg:p-12 relative"
              onMouseEnter={() => {
                setHovered("services_content");
              }}
            >
              <BigTextLink
                className={pathname === "/OurServices" ? "text-white" : ""}
                linkText={"Our services"}
                href={"/OurServices"}
                order={"02"}
              ></BigTextLink>
              <div className="services_content subLinksContainer h-fit top-[50%] absolute left-[100%] min-w-[450px]">
                <ul className="relative translate-y-[-50%]">
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem about 1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-5 lg:p-12 relative"
              onMouseEnter={() => {
                setHovered("about_content");
              }}
            >
              <BigTextLink
                className={pathname === "/AboutUs" ? "text-white" : ""}
                linkText={"About us"}
                href={"/AboutUs"}
                order={"03"}
              ></BigTextLink>
              <div className="about_content subLinksContainer h-fit top-[50%] absolute left-[100%] min-w-[450px]">
                <ul className="relative translate-y-[-50%]">
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem services 1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-5 lg:p-12 relative"
              onMouseEnter={() => {
                setHovered("contact_content");
              }}
            >
              <BigTextLink
                className={pathname === "/ContactUs" ? "text-white" : ""}
                linkText={"Contact us"}
                href={"/ContactUs"}
                order={"04"}
              ></BigTextLink>
              <div className="contact_content subLinksContainer h-fit top-[50%] absolute left-[100%] min-w-[450px]">
                <ul className="relative translate-y-[-50%]">
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                  <li className="text-4xl m-4">
                    <a href="#">Lorem contact 1</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-5 lg:p-12 relative" ref={lastItemRef}>
              <button
                className="flex justify-center items-center w-fit h-fit min-w-[100px] p-2 lg:p-5 transition-all antialiased duration-500 text-gray-600 hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleOpenMenu();
                }}
              >
                <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-6xl lg:text-[180px] lg:leading-[170px] flex justify-start items-center">
                  <span className="text-2xl mr-5">(05)</span>
                  Close
                </p>
              </button>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-start flex-col text-gray-600 relative"></div>
        </div>
      </div>
    </>
  );
}

ONavBar.displayName = "ONavBar";
