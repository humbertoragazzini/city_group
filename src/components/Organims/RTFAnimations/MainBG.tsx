// @ts-nocheck

"use client";
import { useAppContext } from "@/context/AppContext";
import SphereBG from "./RTFAComponents/GradientBG/SphereBG";
import { GlobalCanvas, useScrollbar } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import Particles from "./RTFAComponents/Particles/Particles";

export default function MainBG() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const [ligthIntensity, setLightIntensity] = useState(0);
  const context = useAppContext();
  const scroll = useScrollbar();
  useEffect(() => {
    const event = document.addEventListener("scroll", () => {
      console.log(sphereRef.current);
    });
  }, []);
  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 1500 }}
        className="-z-10"
      >
        <ambientLight intensity={2}></ambientLight>
        <directionalLight
          position={[0, 28, 20]}
          ref={lightRef}
          intensity={ligthIntensity}
          color={new THREE.Color(1, 1, 1)} // RGB values normalized between 0 and 1
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        <SphereBG></SphereBG>
      </GlobalCanvas>
    </>
  );
}
