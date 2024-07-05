// @ts-nocheck
"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useLayoutEffect, useRef, useState } from "react";
import Logo from "../../Mesh/Logo/Logo";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { iAxis } from "../../interfaces/position";

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
            return <Logo scale={props.scale} rotation={rotation}></Logo>;
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
