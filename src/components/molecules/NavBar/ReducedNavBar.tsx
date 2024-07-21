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
      <NavBarLBTN
        className={"!w-[60px]"}
        transforBar={transforBar}
        href={""}
        handleOpenMenu={handleOpenMenu}
      >
        <span className="relative block z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              fill="#ffffff"
            />
          </svg>
        </span>
      </NavBarLBTN>
      {/* Primalportrs home page link */}
      <NavBarLBTN
        className={""}
        transforBar={transforBar}
        href={"/"}
        handleOpenMenu={() => {}}
      >
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">PrimalPorts</p>
      </NavBarLBTN>
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
    </>
  );
}

ReducedNavBar.displayName = "ReducedNavBar";
