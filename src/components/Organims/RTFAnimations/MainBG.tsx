// @ts-nocheck
"use client";
import { GlobalCanvas, useScrollbar } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MainBG() {
  const [scrollProgress, setScrollProgress] = useState<any>(0);
  const sphereRef = useRef<any>();
  const lightRef = useRef<any>();

  useLayoutEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        lightRef.current,
        { intensity: 0 },
        { intensity: 0.02, duration: 2 }
      );
    }, 2500);
  }, []);

  const scroll = useScrollbar();

  const checkProgress = () => {
    // sphereRef.current.rotation.z = Math.PI / 2;
    sphereRef.current.rotation.x = scroll.scroll.progress * Math.PI;
    // lightRef.current.position.y = 28 - 14 * scroll.scroll.progress;
    // console.log(lightRef.current.color.r);
    // console.log(255 - (255 * scroll.scroll.progress + 1));
    lightRef.current.color = new THREE.Color(
      255 - (255 * scroll.scroll.progress + 1),
      255 - (255 * scroll.scroll.progress + 1),
      255 - (255 * scroll.scroll.progress + 1)
    );
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", checkProgress);

    return () => {
      window.removeEventListener("scroll", checkProgress);
    };
  }, []);

  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 500 }}
      >
        <directionalLight
          position={[0, 28, 20]}
          ref={lightRef}
          // position={[0, 0, 45]}
          intensity={0}
          color={new THREE.Color(255, 255, 255)}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={9}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        ></directionalLight>
        <mesh position={[0, 0, 0]} ref={sphereRef}>
          <sphereGeometry args={[20, 15, 15]}></sphereGeometry>
          <meshStandardMaterial side={THREE.DoubleSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />
          </meshStandardMaterial>
        </mesh>
      </GlobalCanvas>
    </>
  );
}
