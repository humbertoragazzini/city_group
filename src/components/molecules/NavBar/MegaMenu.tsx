import { RefObject } from "react";
import BigTextLink from "./BigTextLink";
import JumpLinks from "./JumpLinks";
import React from "react";

interface iMegaMenu {
  menuRef: RefObject<HTMLDivElement>;
  links: any;
  contentMainRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  setHovered: React.Dispatch<React.SetStateAction<string>>;
  firstItemRef: RefObject<HTMLDivElement>;
  lastItemRef: RefObject<HTMLDivElement>;
  pathname: string;
  handleOpenMenu: () => void;
}

export default function MegaMenu({
  menuRef,
  links,
  contentMainRef,
  contentRef,
  setHovered,
  firstItemRef,
  pathname,
  lastItemRef,
  handleOpenMenu,
}: iMegaMenu) {
  return (
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
          {links.map((link: any, i: any) => {
            return (
              <div
                key={"megalink" + i}
                className="p-5 lg:p-12 relative"
                onMouseEnter={() => {
                  setHovered(link.section);
                }}
                ref={i == 0 ? firstItemRef : i == 3 ? lastItemRef : null}
              >
                <BigTextLink
                  className={pathname === link.href ? "text-white" : ""}
                  linkText={link.text}
                  href={link.href}
                  order={(i + 1).toString()}
                ></BigTextLink>
              </div>
            );
          })}

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
  );
}

MegaMenu.displayName = "MegaMenu";
