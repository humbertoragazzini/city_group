import ALink from "@/components/Atoms/Links/ALink";
import AButton from "../../Atoms/Buttons/AButton";

interface iNavBarLBTN {
  className: string;
  transforBar: boolean;
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
    "text-white text-2xl relative h-[60px] w-[60px] transition-all duration-500 flex justify-center items-center";

  return (
    <>
      {href === "" && (
        <AButton onClickHandler={() => handleOpenMenu()}>
          <div
            className={`${main_style} ${transforBar ? "" : ""} ${className}`}
          >
            {children}
          </div>
        </AButton>
      )}
      {href !== "" && (
        <ALink href={href}>
          <div
            className={`${main_style} ${transforBar ? "" : ""} ${className}`}
          >
            {children}
          </div>
        </ALink>
      )}
    </>
  );
}

NavBarLBTN.displayName = "NavBarLBTN";
