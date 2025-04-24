"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useEffect, useRef } from "react";
import Logo from "../../Mesh/Logo/Logo";
import { iAxis } from "../../interfaces/position";
import Particles from "../Particles/Particles";
interface iLogoBG {
  className: string;
  rotation: iAxis;
  width: number;
}

export default function LogoBG({ className, rotation, width }: iLogoBG) {
  const el = useRef<any>();
  return (
    <>
      <div
        ref={el}
        className={"absolute aspect-[1] " + className}
        style={{ width: width + "px" }}
      ></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return (
              <group scale={props.scale}>
                <Particles rotation={rotation}></Particles>
              </group>
            );
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
