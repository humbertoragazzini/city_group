import ALink from "@/components/Atoms/Links/ALink";
import NavBarLBTN from "./NavBarLBTN";

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
  return (
    <>
      <div
        className={`${
          transforBar
            ? "hidden opacity-0 translate-x-[0px] scale-0"
            : "hidden w-full md:flex flex-row justify-between items-center mx-5"
        }`}
      >
        <ALink href={"/"}>
          <span className="relative h-[60px] w-[60px] block z-10">
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
        </ALink>
        <div className="flex flex-row">
          {links.map((link: Link, i: number) => {
            return (
              <ALink
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
      </div>
    </>
  );
}

RegularNavBar.displayName = "RegularNavBar";
