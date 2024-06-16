"use client";
import { Canvas } from "@react-three/fiber";
import MainBGAnimation from "../Animation/Animation";

export default function MainBGCanvas() {
  return (
    <Canvas>
      <MainBGAnimation></MainBGAnimation>
    </Canvas>
  );
}
