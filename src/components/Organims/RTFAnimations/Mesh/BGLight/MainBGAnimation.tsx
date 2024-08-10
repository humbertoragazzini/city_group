// @ts-nocheck
"use client";
import { usePathname } from "next/navigation";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function MainBGAnimation() {
  const pathname = usePathname();
  const ligthRef = useRef();

  return (
    <>
      {/* Environment */}
      <Environment
        background
        blur={2}
        backgroundBlurriness={0}
        backgroundIntensity={1}
        files={"./RTFA/enviromentMap/blender_2kv3.hdr"}
      ></Environment>

      {/* Ligth */}
      <directionalLight
        ref={ligthRef}
        position={[1, 1, 1]}
        intensity={5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0005}
      ></directionalLight>
    </>
  );
}
