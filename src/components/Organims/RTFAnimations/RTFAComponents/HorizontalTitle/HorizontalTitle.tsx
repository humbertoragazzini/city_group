// @ts-nocheck
"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useLayoutEffect, useRef, useState } from "react";
import Logo from "../../Mesh/Logo/Logo";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function HorizontalTitle() {
  const el = useRef<any>();

  return (
    <>
      <div
        ref={el}
        className="fixed w-[100%] aspect-[1.021] max-w-[550px] m-auto"
      ></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return (
              <mesh>
                <boxGeometry args={[10, 0.25, 0.25]}></boxGeometry>
                <meshStandardMaterial></meshStandardMaterial>
              </mesh>
            );
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
