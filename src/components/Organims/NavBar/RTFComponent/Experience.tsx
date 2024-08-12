"use client";
import { GradientTexture } from "@react-three/drei";

export function Experience() {
  return (
    <mesh position={[75, 0, 0]}>
      <planeGeometry args={[400, 2000]}></planeGeometry>
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={["#e0363e", "#178A95"]}
        ></GradientTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
