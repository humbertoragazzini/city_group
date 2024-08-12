"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { Experience } from "./Experience";
import { SpotLight } from "./SpotLight";
import { LINKBtn } from "./LinkBTN";
import { Marker } from "./Marker";

export function MenuBackground({ homeState, about, service, contact }: any) {
  const mouseObj = useRef<any>();
  const lightRef = useRef<any>();
  const homeRotation = useRef<any>();
  const positionMouse = useRef<any>();
  const innerHeight = useRef<any>(null);
  const linesPosition = [
    {
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
    },
  ];
  const lines = [
    { y: 0 },
    { y: 3 },
    { y: 6 },
    { y: 9 },
    { y: 12 },
    { y: 15 },
    { y: 18 },
    { y: 21 },
    { y: 24 },
    { y: 27 },
    { y: 30 },
    { y: 33 },
    { y: 36 },
    { y: 39 },
    { y: 42 },
    { y: 45 },
    { y: 48 },
    { y: 51 },
    { y: 54 },
    { y: 57 },
    { y: 60 },
    { y: 63 },
    { y: 66 },
    { y: 69 },
    { y: 72 },
    { y: 75 },
    { y: 78 },
    { y: 81 },
    { y: 84 },
    { y: 87 },
    { y: 90 },
    { y: 93 },
    { y: 96 },
    { y: 99 },
    { y: 102 },
    { y: 105 },
    { y: 108 },
    { y: 111 },
    { y: 114 },
    { y: 117 },
    { y: 120 },
    { y: 123 },
    { y: 126 },
    { y: 129 },
    { y: 132 },
    { y: 135 },
    { y: 138 },
    { y: 141 },
    { y: 144 },
    { y: 147 },
    { y: 150 },
    { y: 153 },
    { y: 156 },
    { y: 159 },
    { y: 162 },
    { y: 165 },
    { y: 168 },
    { y: 171 },
    { y: 174 },
    { y: 177 },
    { y: 180 },
    { y: 183 },
    { y: 186 },
    { y: 189 },
    { y: 192 },
    { y: 195 },
    { y: 198 },
    { y: 201 },
    { y: 204 },
    { y: 207 },
    { y: 210 },
    { y: 213 },
    { y: 216 },
    { y: 219 },
    { y: 222 },
    { y: 225 },
    { y: 228 },
    { y: 231 },
    { y: 234 },
    { y: 237 },
    { y: 240 },
    { y: 243 },
    { y: 246 },
    { y: 249 },
    { y: 252 },
    { y: 255 },
    { y: 258 },
    { y: 261 },
    { y: 264 },
    { y: 267 },
    { y: 270 },
    { y: 273 },
    { y: 276 },
    { y: 279 },
    { y: 282 },
    { y: 285 },
    { y: 288 },
    { y: 291 },
    { y: 294 },
    { y: 297 },
  ];

  useLayoutEffect(() => {
    let print = "";
    for (let i = 0; i < 100; i++) {
      print += `{y:${i * 3}},`;
    }

    function checkPosition(event: any) {
      innerHeight.current = window.innerHeight;
      lightRef.current.position.y = -event.y + innerHeight.current / 2;
      positionMouse.current = -event.y + innerHeight.current / 2;
    }

    window.addEventListener("mousemove", checkPosition);

    return () => {
      window.removeEventListener("mousemove", checkPosition);
    };
  }, []);

  let counter = 0;

  return (
    <Canvas camera={{ far: 6000, near: -6000 }} orthographic>
      {innerHeight && (
        <>
          <Experience></Experience>
          <SpotLight lightRef={lightRef}></SpotLight>
          <LINKBtn
            homeState={homeState}
            posistion={[50, -60, 0]}
            text={"HOME"}
            thickness={120}
          ></LINKBtn>
          <LINKBtn
            homeState={about}
            posistion={[50, -205, 0]}
            text={"ABOUT US"}
            thickness={170}
          ></LINKBtn>
          <LINKBtn
            homeState={service}
            posistion={[50, -400, 0]}
            text={"OUR SERVICES"}
            thickness={225}
          ></LINKBtn>
          <LINKBtn
            homeState={contact}
            posistion={[50, -590, 0]}
            text={"CONTACT"}
            thickness={157}
          ></LINKBtn>
          {lines.map((position, i) => {
            counter > 4 ? (counter = 0) : counter++;
            return (
              <Marker
                key={"mark" + i}
                positionY={position.y}
                mousePosition={positionMouse}
                thick={counter < 5 ? false : true}
              ></Marker>
            );
          })}
        </>
      )}
    </Canvas>
  );
}
