"use client";
import { useAppContext } from "@/context/AppContext";
import Nav from "./CornerNav";

export default function ONavBar() {
  const context = useAppContext();

  return (
    <>
      {context.state.isMenuEnable && (
        <div className="fixed bg-gradient-to-b from-black to-transparent h-[90px] top-0 overflow-visible w-screen z-50">
          <button
            className={`group fixed left-4 top-4 z-0 h-12 w-12 rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full [&>svg]:stroke-black hover:bg-the-lightGrey hover:[&>svg]:stroke-white transition-all animate-rounded-change-disable bg-black "
        }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              width="90"
              height="90.07515"
              viewBox="0 0 23.812499 23.832383"
              version="1.1"
              id="svg1"
            >
              <defs id="defs1" />
              <g id="layer1">
                <ellipse
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: 0.693553,
                    strokeDasharray: "none",
                  }}
                  id="path4-5"
                  cx="11.908786"
                  cy="11.925341"
                  rx="11.556937"
                  ry="11.560268"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                  }}
                  d="M 0,0.019078 9.52e-4,0.498425"
                  id="path5-4"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                  }}
                  d="M 0.397216,0.183595 0.054758,0.519003"
                  id="path5-8-7"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                  }}
                  d="M 0.48817,0.21537 0.059929,0"
                  id="path5-8-2-4"
                />
                <path
                  id="path6-7"
                  style={{
                    fill: "#ffffff",
                    stroke: "#ffffff",
                    strokeWidth: 0.0704324,
                    strokeDasharray: "none",
                  }}
                  d="m 11.989723,3.686531 -6.9156,11.655558 h 13.82677 z m -7.259241,12.234686 -0.407249,0.686417 15.333716,0.0095 -0.412663,-0.695891 z"
                />
              </g>
            </svg>
          </button>
          <button
            className={`group fixed left-20 text-3xl text-white top-4 z-0 h-12 w-12 hidden lg:block rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full [&>svg]:stroke-black hover:bg-the-lightGrey hover:[&>svg]:stroke-white transition-all animate-rounded-change-disable"
        }`}
          >
            PRIMALPORTS
          </button>
          <Nav></Nav>
        </div>
      )}
    </>
  );
}

ONavBar.displayName = "ONavBar";
