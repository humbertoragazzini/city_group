"use client";
export default function Sphere({ position, color, size }: any) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <sphereGeometry args={[size, 80, 80]}></sphereGeometry>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
