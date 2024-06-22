"use client";
import { DoubleSide } from "three";

export default function Ring({ position, color, size }: any) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <ringGeometry args={[0, size, 100]}></ringGeometry>
      <meshStandardMaterial attach="material" color={color} side={DoubleSide} />
    </mesh>
  );
}
