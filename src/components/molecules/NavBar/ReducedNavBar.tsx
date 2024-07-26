import NavBarLBTN from "./NavBarLBTN";

interface iReducedNavBar {
  transforBar: boolean;
  handleOpenMenu: () => void;
}

export default function ReducedNavBar({
  transforBar,
  handleOpenMenu,
}: iReducedNavBar) {
  return (
    <>
      <nav
        className={
          "absolute overflow-hidden h-[60px] flex flex-row items-center justify-start transition-all duration-1000 bg-[rgba(17,31,42,0.3)] backdrop-blur-lg w-[180px] rounded-l-full ml-0 top-4 justify-between right-[40px] " +
          (transforBar ? "" : "!right-[-120px] md:pointer-events-none")
        }
      >
        <NavBarLBTN
          className={
            "!absolute top-0 left-0 !w-[110px] pl-2 !h-[60px] flex !justify-start items-center hover:bg-[rgba(0,0,0,0.5)] rounded-r-full z-0"
          }
          transforBar={transforBar}
          href={""}
          handleOpenMenu={handleOpenMenu}
        >
          <span className="relative block z-10 w-[40px] h-[40px]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="22.5" fill="none" />
              <rect x="11.25" y="12" width="22.5" height="3" fill="white" />
              <rect x="5.625" y="21" width="33.75" height="3" fill="white" />
              <rect x="11.25" y="30" width="22.5" height="3" fill="white" />
            </svg>
          </span>
        </NavBarLBTN>
        {/* Primalports home page link */}
        <NavBarLBTN
          className={
            "relative !w-[120px] !h-[60px] pl-3 flex !justify-start items-center bg-[rgba(17,31,42,0.6)] rounded-l-full z-10 overflow-hidden"
          }
          transforBar={transforBar}
          href={"/"}
          handleOpenMenu={() => {}}
        >
          <span className="relative h-[35px] w-[35px] block z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="35"
              height="35"
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
        </NavBarLBTN>
      </nav>
    </>
  );
}

ReducedNavBar.displayName = "ReducedNavBar";
