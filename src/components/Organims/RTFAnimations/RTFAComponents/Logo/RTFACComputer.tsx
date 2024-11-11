"use client";
import { UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";
import { iAxis } from "../../interfaces/position";
import { Logo3D } from "../../Mesh/Logo/Logo3D";
// @ts-ignore
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";
import { Computer } from "../../Mesh/Logo/Computer";

interface iLogoBG {
  className?: string;
  rotation?: iAxis;
  width?: number;
}

export default function RTFACComputer({ className, rotation, width }: iLogoBG) {
  const el = useRef<any>();
  return (
    <>
      <div
        ref={el}
        className={
          "col-span-3 sticky top-[12.5vh] w-auto h-[75vh] aspect-square pointer-events-none " +
          className
        }
        style={{ width: width + "px" }}
      >
        <div></div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>
          {(props: any) => {
            return <Computer {...props}></Computer>;
          }}
        </StickyScrollScene>
      </UseCanvas>
    </>
  );
}
