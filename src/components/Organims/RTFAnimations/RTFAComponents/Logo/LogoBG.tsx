// @ts-nocheck
"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useLayoutEffect, useRef, useState } from "react";
import Logo from "../../Mesh/Logo/Logo";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function LogoBG() {
  const el = useRef<any>();

  return (
    <>
      <div
        ref={el}
        className="w-[100%] aspect-[1.021] max-w-[550px] m-auto"
      ></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return <Logo scale={props.scale} rotationStart={[0, 0, 0]}></Logo>;
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
