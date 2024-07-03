"use client";
import { GlobalCanvas } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import * as THREE from "three";

export default function MainBG() {
  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 500 }}
      >
        <directionalLight
          position={[25, 25, 20]}
          intensity={5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={9}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        ></directionalLight>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[25, 50, 50]}></sphereGeometry>
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
