// @ts-nocheck
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CNavBarLink from "../../molecules/NavBar/CNavBarLink";
import CNavMobLink from "@/components/molecules/NavBar/CNavMobLink";
import gsap from "gsap";
import { ScrollScene, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useAppContext } from "@/context/AppContext";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
      {/* <nav className="sticky top-0 w-screen h-[90px] flex flex-row justify-end z-50 bg-slate-800"> */}
      <div className="fixed top-0 overflow-visible w-screen z-50">
        <nav
          className={
            "relative h-[90px] flex flex-row items-center justify-start transition-all duration-1000 mx-auto overflow-hidden " +
            (transforBar
              ? "bg-[rgba(10,10,10,0.3)] backdrop-blur-lg w-full md:w-[768px] md:rounded-full md:top-4 justify-between"
              : "md:bg-gradient-to-b md:from-black md:to-transparent w-screen top-0 bg-[rgba(10,10,10,0.3)] backdrop-blur-lg md:backdrop-blur-none justify-between ")
          }
        >
          <button
            className={
              "text-white text-2xl relative h-[90px] w-[90px] hover:bg-slate-800 rounded-full z-0 transition-all duration-500 flex justify-center items-center " +
              (transforBar ? "" : "md:hidden")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </button>
          <button
            className={
              "text-white text-2xl h-[90px] w-[150px] hover:bg-slate-800 rounded-full z-0 transition-all duration-500 flex justify-center items-center relative " +
              (transforBar ? "" : "md:hidden")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">PrimalPorts</span>
          </button>
          <button
            className={
              "text-white text-2xl h-[90px] w-[90px] hover:bg-slate-800 rounded-full z-0 transition-all duration-500 flex justify-center items-center " +
              (transforBar ? "" : "md:hidden")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60"
                height="60.07515"
                viewBox="0 0 23.812499 23.832383"
                version="1.1"
                id="svg1"
              >
                <defs />
                <g id="layer1">
                  <ellipse
                    style={{
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: 0.693553,
                    }}
                    id="path4-5"
                    cx="11.908786"
                    cy="11.925341"
                    rx="11.556937"
                    ry="11.560268"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0,0.019078 9.52e-4,0.498425"
                    id="path5-4"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0.397216,0.183595 0.054758,0.519003"
                    id="path5-8-7"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0.48817,0.21537 0.059929,0"
                    id="path5-8-2-4"
                  />
                  <path
                    id="path6-7"
                    style={{
                      fill: "#ffffff",
                      stroke: "#ffffff",
                      strokeWidth: 0.0704324,
                    }}
                    d="m 11.989723,3.686531 -6.9156,11.655558 h 13.82677 z m -7.259241,12.234686 -0.407249,0.686417 15.333716,0.0095 -0.412663,-0.695891 z"
                  />
                </g>
              </svg>
            </span>
          </button>

          <button
            className={
              "text-white text-5xl absolute right-0 h-[90px] rounded-full z-0 transition-all duration-500 flex justify-center items-center px-5 " +
              (transforBar ? "hidden" : "hidden md:block")
            }
            onClick={() => handleOpenMenu()}
          >
            {/* <span className="relative block">PrimalPorts</span> */}
            <span className="relative h-[60px] w-[60px] block z-10 ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60"
                height="60.07515"
                viewBox="0 0 23.812499 23.832383"
                version="1.1"
                id="svg1"
              >
                <defs />
                <g id="layer1">
                  <ellipse
                    style={{
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: 0.693553,
                    }}
                    id="path4-5"
                    cx="11.908786"
                    cy="11.925341"
                    rx="11.556937"
                    ry="11.560268"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0,0.019078 9.52e-4,0.498425"
                    id="path5-4"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0.397216,0.183595 0.054758,0.519003"
                    id="path5-8-7"
                  />
                  <path
                    style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
                    d="M 0.48817,0.21537 0.059929,0"
                    id="path5-8-2-4"
                  />
                  <path
                    id="path6-7"
                    style={{
                      fill: "#ffffff",
                      stroke: "#ffffff",
                      strokeWidth: 0.0704324,
                    }}
                    d="m 11.989723,3.686531 -6.9156,11.655558 h 13.82677 z m -7.259241,12.234686 -0.407249,0.686417 15.333716,0.0095 -0.412663,-0.695891 z"
                  />
                </g>
              </svg>
            </span>
          </button>
          <button
            className={
              "text-white text-2xl absolute left-[20px] h-[60px] w-[108px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
              (transforBar
                ? "opacity-0 translate-x-[0px] scale-0"
                : "hidden md:block")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">Home</span>
          </button>
          <button
            className={
              "text-white text-2xl absolute left-[128px] h-[60px] w-[137px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
              (transforBar
                ? "opacity-0 translate-x-[-125px] scale-0"
                : "hidden md:block")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">About us</span>
          </button>
          <button
            className={
              "text-white text-2xl absolute left-[264px] h-[60px] w-[171px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
              (transforBar
                ? "opacity-0 translate-x-[-285px] scale-0"
                : "hidden md:block")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">Our services</span>
          </button>
          <button
            className={
              "text-white text-2xl absolute left-[434px] h-[60px] w-[127px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
              (transforBar
                ? "opacity-0 translate-x-[-420px] scale-0"
                : "hidden md:block")
            }
            onClick={() => handleOpenMenu()}
          >
            <span className="relative block z-10">Contact</span>
          </button>
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
              <CNavMobLink
                className={pathname === "/" ? "text-white" : ""}
                linkText={"Home"}
                href={"/"}
                order={"01"}
              ></CNavMobLink>
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
              <CNavMobLink
                className={pathname === "/OurServices" ? "text-white" : ""}
                linkText={"Our services"}
                href={"/OurServices"}
                order={"02"}
              ></CNavMobLink>
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
              <CNavMobLink
                className={pathname === "/AboutUs" ? "text-white" : ""}
                linkText={"About us"}
                href={"/AboutUs"}
                order={"03"}
              ></CNavMobLink>
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
              <CNavMobLink
                className={pathname === "/ContactUs" ? "text-white" : ""}
                linkText={"Contact us"}
                href={"/ContactUs"}
                order={"04"}
              ></CNavMobLink>
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
