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
      {/* Open menu BTN */}
      {/* <NavBarLBTN
        className={"!w-[60px]"}
        transforBar={transforBar}
        href={""}
        handleOpenMenu={handleOpenMenu}
      >
        <span className="relative block z-10">
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 45 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22.5" cy="22.5" r="22.5" fill="none" />
            <rect x="11.25" y="12" width="22.5" height="3" fill="white" />
            <rect x="5.625" y="21" width="33.75" height="3" fill="white" />
            <rect x="11.25" y="30" width="22.5" height="3" fill="white" />
          </svg>
        </span>
      </NavBarLBTN> */}

      {/* Primalports home page link */}
      <NavBarLBTN
        className={"!w-[60px]"}
        transforBar={transforBar}
        href={"/"}
        handleOpenMenu={() => {}}
      >
        <span className="relative h-[40px] w-[40px] block z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40"
            height="40.07515"
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
      <NavBarLBTN
        className={"!w-[60px]"}
        transforBar={transforBar}
        href={""}
        handleOpenMenu={handleOpenMenu}
      >
        <span className="relative block z-10">
          <svg
            width="45px"
            height="45px"
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
      {/* Primalportrs home page link */}
      {/* <NavBarLBTN
        className={""}
        transforBar={transforBar}
        href={"/"}
        handleOpenMenu={() => {}}
      >
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">PrimalPorts</p>
      </NavBarLBTN> */}
    </>
  );
}

ReducedNavBar.displayName = "ReducedNavBar";
