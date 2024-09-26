// @ts-nocheck
"use client";
import { GlobalCanvas, useScrollbar } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import RTFAPointer from "./RTFAComponents/Pointer/RTFAPointer";

export default function MainBG() {
  const [scrollProgress, setScrollProgress] = useState<any>(0);
  const sphereRef = useRef<any>();
  const lightRef = useRef<any>();

  const scroll = useScrollbar();

  const checkProgress = () => {
    // sphereRef.current.rotation.z = Math.PI / 2;
    // sphereRef.current.rotation.x = scroll.scroll.progress * Math.PI;
    // lightRef.current.position.y = 28 - 14 * scroll.scroll.progress;
    // lightRef.current.color = new THREE.Color(
    //   255 - (255 * scroll.scroll.progress + 1),
    //   255 - (255 * scroll.scroll.progress + 1),
    //   255 - (255 * scroll.scroll.progress + 1)
    // );
  };

  const ligthOn = () => {
    setTimeout(() => {
      gsap.fromTo(
        lightRef.current,
        { intensity: 0 },
        { intensity: 0.02, duration: 2 }
      );
    }, 2500);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", checkProgress);

    return () => {
      window.removeEventListener("scroll", checkProgress);
    };
  }, []);

  useLayoutEffect(() => {
    const checkElement = setInterval(() => {
      if (lightRef.current) {
        ligthOn(lightRef.current);
        clearInterval(checkElement);
      }
    }, 250);
  }, []);

  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 500 }}
        className="-z-10"
      >
        <directionalLight
          position={[0, 28, 20]}
          ref={lightRef}
          // position={[0, 0, 45]}
          intensity={0}
          color={new THREE.Color(255, 255, 255)}
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        ></directionalLight>
        <mesh position={[0, 0, 0]} ref={sphereRef}>
          <sphereGeometry args={[25, 15, 15]}></sphereGeometry>
          <meshStandardMaterial side={THREE.DoubleSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />
          </meshStandardMaterial>
        </mesh>
        <RTFAPointer></RTFAPointer>
      </GlobalCanvas>
    </>
  );
}
