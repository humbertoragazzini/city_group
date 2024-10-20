"use client";
import { UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";
import { iAxis } from "../../interfaces/position";
import { Logo3D } from "../../Mesh/Logo/Logo3D";
// @ts-ignore
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";

interface iLogoBG {
  className?: string;
  rotation?: iAxis;
  width?: number;
}

export default function RTFACLogo3D({ className, rotation, width }: iLogoBG) {
  const el = useRef<any>();
  return (
    <>
      <div
        ref={el}
        className={
          "col-span-2 lg:col-span-1 sticky top-[12.5vh] w-auto h-[75vh] aspect-square " +
          className
        }
        style={{ width: width + "px" }}
      >
        <div></div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>
          {(props: any) => {
            return <Logo3D {...props}></Logo3D>;
          }}
        </StickyScrollScene>
      </UseCanvas>
    </>
  );
}
