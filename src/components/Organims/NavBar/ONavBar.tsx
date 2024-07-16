"use client";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import BigTextLink from "@/components/molecules/NavBar/BigTextLink";
import gsap from "gsap";
import { useAppContext } from "@/context/AppContext";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ReducedNavBar from "@/components/molecules/NavBar/ReducedNavBar";
import RegularNavBar from "@/components/molecules/NavBar/RegularNavBar";
import JumpLinks from "@/components/molecules/NavBar/JumpLinks";

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
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTransformBar(true);
      } else {
        setTransformBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {/* Reduced navbar content */}
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
          <div ref={contentRef} className="col-span-3 xl:col-span-2">
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
              <JumpLinks
                section="home_content"
                className=" top-[50%] absolute left-[100%] [&>ul]:translate-y-[-50%]"
                links={[
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                ]}
              ></JumpLinks>
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
              <JumpLinks
                section="services_content"
                className=" top-[50%] absolute left-[100%] [&>ul]:translate-y-[-50%]"
                links={[
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                ]}
              ></JumpLinks>
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
              <JumpLinks
                section="about_content"
                className=" top-[50%] absolute left-[100%] [&>ul]:translate-y-[-50%]"
                links={[
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                ]}
              ></JumpLinks>
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
              <JumpLinks
                section="contact_content"
                className=" top-[50%] absolute left-[100%] [&>ul]:translate-y-[-50%]"
                links={[
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                  { href: "/", text: "Test component" },
                ]}
              ></JumpLinks>
            </div>
            <div className="p-5 lg:p-12 relative" ref={lastItemRef}>
              <button
                className="flex justify-center items-center w-fit h-fit min-w-[100px] p-2 lg:p-5 transition-all antialiased duration-500 hover:scale-110 text-gray-600 hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleOpenMenu();
                }}
              >
                <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-6xl lg:text-[130px] lg:leading-[130px] xl:text-[180px] xl:leading-[170px] flex justify-start items-center">
                  <span className="text-2xl mr-5">(05)</span>
                  Close
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ONavBar.displayName = "ONavBar";
