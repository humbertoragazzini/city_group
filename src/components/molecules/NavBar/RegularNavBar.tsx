"use client";
import ALink from "@/components/Atoms/Links/ALink";
import NavBarLBTN from "./NavBarLBTN";
import { useAppContext } from "@/context/AppContext";
import Language from "./Language";

type Link = {
  href: string;
  text: string;
};

interface iRegularNavBar {
  links: Link[];
  transforBar: boolean;
  path: string;
}

export default function RegularNavBar({
  links,
  transforBar,
  path,
}: iRegularNavBar) {
  const { state, setState } = useAppContext();
  return (
    <>
      <div
        className={`${
          transforBar
            ? "hidden opacity-0 translate-x-[0px] scale-0"
            : "hidden w-full md:flex flex-row justify-between items-center mx-5"
        }`}
      >
        <div className="flex flex-row">
          {links.map((link: Link, i: number) => {
            return (
              <ALink
                key={"Alink" + i}
                className={`text-white text-xl h-[35px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 ${
                  link.href == path ? "border-white" : ""
                }`}
                href={link.href}
              >
                <div>
                  <span className="relative block z-10">{link.text}</span>
                </div>
              </ALink>
            );
          })}
        </div>
        <Language></Language>
        {/* <button
          className="text-white"
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              language: "EN",
            }));
          }}
        >
          EN
        </button>
        <button
          className="text-white"
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              language: "ES",
            }));
          }}
        >
          ES
        </button> */}
      </div>
    </>
  );
}

RegularNavBar.displayName = "RegularNavBar";
