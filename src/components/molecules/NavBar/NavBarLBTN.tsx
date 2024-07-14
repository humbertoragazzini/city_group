import ALink from "@/components/Atoms/ALink";
import AButton from "../../Atoms/AButton";
import { RefObject } from "react";

interface iNavBarLBTN {
  className: string;
  transforBar: RefObject<HTMLInputElement>;
  children: any;
  href: string;
  handleOpenMenu: () => void;
}

export default function NavBarLBTN({
  className,
  transforBar,
  children,
  href,
  handleOpenMenu,
}: iNavBarLBTN) {
  // Main Style
  const main_style =
    "text-white text-2xl relative h-[90px] w-[90px] transition-all duration-500 flex justify-center items-center";

  return (
    <>
      {href === "" && (
        <AButton onClickHandler={() => handleOpenMenu()}>
          <div
            className={`${main_style} ${
              transforBar ? "" : "md:hidden"
            } className`}
          >
            {children}
          </div>
        </AButton>
      )}
      {href !== "" && (
        <ALink href={href}>
          <div
            className={`${main_style} ${
              transforBar ? "" : "md:hidden"
            } className`}
          >
            {children}
          </div>
        </ALink>
      )}
    </>
  );
}

NavBarLBTN.displayName = "NavBarLBTN";
