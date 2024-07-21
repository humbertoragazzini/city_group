"use client";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useAppContext } from "@/context/AppContext";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ReducedNavBar from "@/components/molecules/NavBar/ReducedNavBar";
import RegularNavBar from "@/components/molecules/NavBar/RegularNavBar";
import links from "./Links";
import MegaMenu from "@/components/molecules/NavBar/MegaMenu";
import Language from "@/components/molecules/NavBar/Language";

gsap.registerPlugin(ScrollToPlugin);

export default function ONavBar() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
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
        {/* Regular navbar */}
        <RegularNavBar
          transforBar={transforBar}
          links={links}
          path={pathname}
        ></RegularNavBar>

        {/* Reduced navbar */}
        <ReducedNavBar
          transforBar={transforBar}
          handleOpenMenu={handleOpenMenu}
        ></ReducedNavBar>
        <Language></Language>
      </div>
      {/* Reduced navbar content */}
      <MegaMenu
        menuRef={menuRef}
        links={links}
        contentMainRef={contentMainRef}
        contentRef={contentRef}
        setHovered={setHovered}
        firstItemRef={firstItemRef}
        pathname={pathname}
        lastItemRef={lastItemRef}
        handleOpenMenu={handleOpenMenu}
      ></MegaMenu>
    </>
  );
}

ONavBar.displayName = "ONavBar";
