// @ts-nocheck
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import Language from "@/components/molecules/NavBar/Language";
import Link from "next/link";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { TextContent } from "@/types/types";
import { useScrollbar } from "@14islands/r3f-scroll-rig";
export default function Nav() {
  const [active, setActive] = useState(false);
  const scroll = useScrollbar();
  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {active && <LinksOverlay active={active} setActive={setActive} />}
      </AnimatePresence>
    </>
  );
}

const LinksOverlay = ({ active, setActive }) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer active={active} setActive={setActive} />
      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = ({ active, setActive }) => {
  return (
    <motion.div className="p-12 pl-4 space-y-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink
            key={"Links" + idx}
            href={l.href}
            idx={idx}
            active={active}
            setActive={setActive}
          >
            <Link
              href={l.href}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Paragraph
                text={l.title as TextContent[]}
                type="body"
                className="uppercase !text-4xl md:!text-7xl font-semibold drop-shadow-lg "
              ></Paragraph>
            </Link>
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({ children, href, idx, setActive }: any) => {
  const path = usePathname();
  const { setState } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      onClick={() => {
        setActive(false);
        setState((prevState) => ({
          ...prevState,
          isMenuOpen: false,
        }));
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      style={{ transformOrigin: "left center" }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.25 },
      }}
      exit={{ opacity: 0, y: -8 }}
      className={`block w-fit ${
        path == href ? "text-white " : "text-the-darkGrey hover:text-white"
      }`}
    >
      {children}
    </motion.div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      className="w-12 h-12 p-2 overflow-hidden grid place-content-center rounded-br-xl rounded-tl-xl bg-burgundy transition-colors hover:bg-plum"
    >
      {/* <Language></Language> */}
      <Link href={"/"} className={"w-full h-full"}>
        <svg
          width="100.01514mm"
          height="100.09866mm"
          viewBox="0 0 100.01513 100.09866"
          version="1.1"
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-8 h-8"
        >
          <defs id="defs1" />
          <g id="layer1" transform="translate(-752.96121,-290.42861)">
            <ellipse
              style={{
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: 2.913,
                strokeDasharray: "none",
              }}
              id="path4-5-4"
              cx="802.97943"
              cy="340.51636"
              rx="48.540421"
              ry="48.554413"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: 0,
                strokeDasharray: "none",
              }}
              d="m 752.96121,290.50874 0.004,2.01331"
              id="path5-4-3"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: 0,
                strokeDasharray: "none",
              }}
              d="m 754.62956,291.19973 -1.43836,1.40875"
              id="path5-8-7-6"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: 0,
                strokeDasharray: "none",
              }}
              d="m 755.01158,291.33319 -1.79866,-0.90458"
              id="path5-8-2-4-0"
            />
            <path
              id="path6-7-5"
              style={{
                fill: "#ffffff",
                stroke: "#ffffff",
                strokeWidth: 0.295824,
                strokeDasharray: "none",
              }}
              d="m 803.31938,305.91245 -29.04629,48.95464 h 58.07397 z m -30.48962,51.38704 -1.71049,2.88303 64.40331,0.0398 -1.73323,-2.92282 z"
            />
          </g>
        </svg>
      </Link>
    </motion.div>
  );
};

const HamburgerButton = ({ active, setActive }: any) => {
  const { state, setState } = useAppContext();

  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        className={`fixed top-[19px] right-[19px] z-10 transition-all duration-1000 rounded-xl backdrop-blur-md ${
          active ? "bg-[rgba(0,0,0,0.5)]" : "bg-[rgba(0,0,0,0)]"
        } shadow-2xl`}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => {
          setActive((pv: boolean) => !pv);
          setState((prevState) => ({
            ...prevState,
            isMenuOpen: !state.isMenuOpen,
          }));
        }}
        className={`group fixed right-4 top-4 z-50 h-12 w-12  rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full [&>svg]:stroke-black hover:bg-the-lightGrey hover:[&>svg]:stroke-white transition-all ${
          active
            ? "animate-rounded-change-enable bg-white"
            : "animate-rounded-change-disable bg-white "
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55px"
          height="55px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute flex bottom-6 left-6 gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <>
              {l.href !== "language" && (
                <motion.a
                  key={idx}
                  href={l.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1 + idx * 0.125,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <l.Component className="text-xl text-the-white transition-all ease-in-out hover:text-white hover:scale-125" />
                </motion.a>
              )}
              {l.href === "language" && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1 + idx * 0.125,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <Language></Language>
                </motion.div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

const LINKS = [
  {
    title: [
      { language: "EN", content: "Home" },
      { language: "ES", content: "Inicio" },
      { language: "CH", content: "主页" }, // Chinese for "Home"
      { language: "IT", content: "Home" },
    ],
    href: "/",
  },
  {
    title: [
      { language: "EN", content: "About us" },
      { language: "ES", content: "Sobre Nosotros" },
      { language: "CH", content: "关于我们" }, // Chinese for "About us"
      { language: "IT", content: "Chi Siamo" },
    ],
    href: "/AboutUs",
  },
  {
    title: [
      { language: "EN", content: "Our services" },
      { language: "ES", content: "Nuestros Servicios" },
      { language: "CH", content: "我们的服务" }, // Chinese for "Our services"
      { language: "IT", content: "I Nostri Servizi" },
    ],
    href: "/OurServices",
  },
  {
    title: [
      { language: "EN", content: "Contact" },
      { language: "ES", content: "Contacto" },
      { language: "CH", content: "联系我们" }, // Chinese for "Contact"
      { language: "IT", content: "Contatto" },
    ],
    href: "/ContactUs",
  },
];

const SOCIAL_CTAS = [
  {
    Component: SiTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "language",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "56px",
    height: "56px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
