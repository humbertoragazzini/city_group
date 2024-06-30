// @ts-nocheck
"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  GlobalCanvas,
  ScrollScene,
  UseCanvas,
  SmoothScrollbar,
} from "@14islands/r3f-scroll-rig";
import {
  MeshDistortMaterial,
  GradientTexture,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export default function MainBG({ Component, pageProps, children }: any) {
  console.log(children);
  const backgroundRef = useRef<any>();

  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 500 }}
      >
        <directionalLight
          position={[5, 0, 10]}
          intensity={3}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={100}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        ></directionalLight>
        <Environment
          background
          blur={2}
          backgroundBlurriness={0.8}
          backgroundIntensity={0.7}
          environmentIntensity={0.5}
          files={"./RTFA/enviromentMap/blender_2kv2.hdr"}
        ></Environment>
        {/* <mesh ref={backgroundRef} position={[0, 0, 0]}>
          <sphereGeometry args={[25, 50, 50]}></sphereGeometry>
          <meshStandardMaterial side={THREE.DoubleSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />
          </meshStandardMaterial>
        </mesh> */}
      </GlobalCanvas>
    </>
  );
}
