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
            : "hidden w-full md:flex flex-row justify-between items-center ml-5"
        }`}
      >
        <div className="flex flex-row">
          {links.map((link: Link, i: number) => {
            return (
              <ALink
                key={"Alink" + i}
                className={`text-white text-xl h-[60px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] mr-4 hover:shadow-xl hover:bg-[#13212B] px-6 ${
                  link.href == path ? "shadow-xl bg-[#13212B]" : ""
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
