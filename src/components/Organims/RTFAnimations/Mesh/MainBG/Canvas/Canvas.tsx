"use client";
import { Canvas, useThree } from "@react-three/fiber";
import MainBGAnimation from "../Animation/Animation";
import { Stats, OrbitControls } from "@react-three/drei";
import { SoftShadows } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";

export default function MainBGCanvas({ scrollPosition }: any) {
  return (
    <Canvas dpr={[2, 2]} shadows>
      <MainBGAnimation scrollPosition={scrollPosition}></MainBGAnimation>
      <SoftShadows size={25} focus={5} samples={50}></SoftShadows>
      {/* <OrbitControls /> */}
      {/* <Stats /> */}
    </Canvas>
  );
}
