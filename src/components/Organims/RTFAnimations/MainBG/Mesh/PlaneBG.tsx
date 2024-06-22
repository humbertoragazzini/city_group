"use client";
export default function PlaneBG({ position, color, size }: any) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <planeGeometry args={[size, size, 200]}></planeGeometry>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
