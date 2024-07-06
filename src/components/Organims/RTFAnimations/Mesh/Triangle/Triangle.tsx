// @ts-nocheck
"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { MeshStandardMaterial, MeshBasicMaterial } from "three";
import { iAxis } from "../../interfaces/position";

interface iTriangle {
  scale: number;
  rotation: iAxis;
}

export default function Triangle({ scale, rotation }: iTriangle) {
  const { materials, nodes } = useGLTF("./RTFA/Models/Logo/band1v3Main.glb");
  const meshRef = useRef<any>(null);
  const meshRefR = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {}, [pathname]);

  return (
    <group
      scale={scale}
      ref={meshRef}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <group scale={0.485} position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone.geometry}
          material={
            new MeshStandardMaterial({
              color: "#e0363e",
              metalness: 0.5,
              roughness: 0.2,
              opacity: 0.2,
              transparent: true,
            })
          }
          position={[0, -0.009, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 0.165]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/logo.glb");
