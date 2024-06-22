"use client";
import { Canvas } from "@react-three/fiber";
import MainBGAnimation from "../Animation/Animation";
import { Stats, OrbitControls } from "@react-three/drei";
import { SoftShadows } from "@react-three/drei";

export default function MainBGCanvas({ scrollPosition }: any) {
  return (
    <Canvas dpr={[2, 2]} camera={{ position: [0, 0, 60], fov: 50 }} shadows>
      <MainBGAnimation scrollPosition={scrollPosition}></MainBGAnimation>
      <SoftShadows size={25} focus={5} samples={50}></SoftShadows>
      {/* <OrbitControls /> */}
      {/* <Stats /> */}
    </Canvas>
  );
}
