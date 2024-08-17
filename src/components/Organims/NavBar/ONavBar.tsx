"use client";
import ALink from "@/components/Atoms/Links/ALink";
import Nav from "./CornerNav";

export default function ONavBar() {
  return (
    <div className="fixed top-0 overflow-visible w-screen z-50">
      <ALink href={"/"} className={"w-[250px] h-[50px] block m-4"}>
        <svg
          className="w-full h-full"
          width="426.18509mm"
          height="80.267258mm"
          viewBox="0 0 426.18509 80.267258"
          version="1.1"
          id="svg1"
        >
          <defs id="defs1" />
          <g id="layer1" transform="translate(-406.79984,-311.20901)">
            <ellipse
              style={{
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "2.30271",
                strokeDasharray: "none",
              }}
              id="path4-5-9"
              cx="445.76923"
              cy="351.38187"
              rx="37.817989"
              ry="38.94305"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: "0",
                strokeDasharray: "none",
              }}
              d="m 406.79984,311.27327 0.003,1.61478"
              id="path5-4-3"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: "0",
                strokeDasharray: "none",
              }}
              d="m 408.09966,311.82748 -1.12063,1.12989"
              id="path5-8-7-4"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000000",
                strokeWidth: "0",
                strokeDasharray: "none",
              }}
              d="M 408.39729,311.93452 406.99595,311.209"
              id="path5-8-2-4-6"
            />
            <path
              id="path6-7-4"
              style={{
                fill: "#ffffff",
                stroke: "#ffffff",
                strokeWidth: "0.233847",
                strokeDasharray: "none",
              }}
              d="m 446.03405,323.62781 -22.63006,39.26406 h 45.24561 z m -23.75456,41.21496 -1.33265,2.31234 50.17682,0.0319 -1.35037,-2.34425 z"
            />
            <text
              xmlSpace="preserve"
              style={{
                fontSize: "47.625px",
                fontFamily: "Microsoft Sans Serif",
                fill: "#ffffff",
                stroke: "#000000",
                strokeWidth: "0.00499999",
                strokeDasharray: "none",
              }}
              x="494.07288"
              y="368.37854"
              id="text18-6-6"
            >
              <tspan
                id="tspan18-1-2"
                style={{
                  fontSize: "47.625px",
                  fill: "#ffffff",
                  strokeWidth: "0.005",
                }}
                x="494.07288"
                y="368.37854"
              >
                PRIMALPORTS
              </tspan>
            </text>
          </g>
        </svg>
      </ALink>
      <Nav></Nav>
    </div>
  );
}

ONavBar.displayName = "ONavBar";
