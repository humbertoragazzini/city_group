// @ts-nocheck
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
}

const LinksOverlay = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_100px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer />
      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = () => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title.toUpperCase()}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({ children, href, idx }) => {
  const path = usePathname();

  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
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
      href={href}
      className={`block text-4xl md:text-5xl font-semibold drop-shadow-lg ${
        path == href ? "text-white " : "text-the-darkGrey hover:text-white"
      } md:text-7xl`}
    >
      {children}
    </motion.a>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#"
      className="grid h-12 w-12 place-content-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-violet-50 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100.01515mm"
        height="100.09864mm"
        viewBox="0 0 100.01515 100.09864"
        version="1.1"
        id="svg1"
        className="w-full"
      >
        <defs id="defs1" />
        <g id="layer1" transform="translate(-752.9612,-290.42861)">
          <ellipse
            style={{ fill: "none", stroke: "#000000", strokeWidth: 2.913 }}
            id="path4-5-4"
            cx="802.97943"
            cy="340.51636"
            rx="48.540421"
            ry="48.554413"
          />
          <path
            style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            d="m 752.96121,290.50874 0.004,2.01331"
            id="path5-4-3"
          />
          <path
            style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            d="m 754.62956,291.19973 -1.43836,1.40875"
            id="path5-8-7-6"
          />
          <path
            style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            d="m 755.01158,291.33319 -1.79866,-0.90458"
            id="path5-8-2-4-0"
          />
          <path
            id="path6-7-5"
            style={{
              fill: "#000000",
              stroke: "#000000",
              strokeWidth: 0.295824,
            }}
            d="m 803.31938,305.91245 -29.04629,48.95464 h 58.07397 z m -30.48962,51.38704 -1.71049,2.88303 64.40331,0.0398 -1.73323,-2.92282 z"
          />
        </g>
      </svg>
    </motion.a>
  );
};

const HamburgerButton = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 19, right: 19 }}
        className={`fixed z-10 rounded-xl bg-the-red ${
          active ? "" : ""
        } shadow-2xl`}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-50 h-12 w-12  transition-all ${
          active
            ? "rounded-bl-xl rounded-tr-xl bg-white"
            : "bg-the-red rounded-xl"
        }`}
        // style={{
        //   boxShadow: `0 0 ${active ? "5px" : "0px"} ${
        //     active ? "#ffffff" : ""
        //   }, 0 0 ${active ? "10px" : "0px"} ${active ? "#ffffff" : ""}, 0 0 ${
        //     active ? "20px" : "0px"
        //   } ${active ? "#ffffff" : ""}, 0 0 ${active ? "40px" : "0px"} ${
        //     active ? "#ffffff" : ""
        //   }, 0 0 ${active ? "80px" : "0px"} ${active ? "#ffffff" : ""}`,
        // }}
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
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
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
              <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>
    </>
  );
};

const LINKS = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "About us",
    href: "/AboutUs",
  },
  {
    title: "Our services",
    href: "OurServices",
  },
  {
    title: "Contanct",
    href: "/Contact",
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
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 100px)",
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
