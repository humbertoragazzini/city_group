"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { MeshStandardMaterial } from "three";
import { iAxis } from "../../interfaces/position";
import * as THREE from "three";
import { Vector3 } from "@react-three/fiber";

interface iLogo {
  scale: Vector3;
  rotation: iAxis;
}

export default function Logo({ scale, rotation }: iLogo) {
  const { nodes } = useGLTF("./RTFA/Models/Logo/band1v3Main.glb");
  const meshRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      meshRef.current.rotation,
      { z: 0 },
      {
        z: Math.PI * 10,
        duration: 3600,
      }
    );
  }, []);

  return (
    <group scale={scale} ref={meshRef}>
      <group
        scale={0.485}
        rotation={[rotation.x, rotation.y, rotation.z]}
        position={[0, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Torus001 as THREE.Mesh).geometry}
          material={
            new MeshStandardMaterial({
              color: "white",
              roughness: 1,
              metalness: 0,
            })
          }
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cone as THREE.Mesh).geometry}
          material={
            new MeshStandardMaterial({
              color: "white",
              roughness: 1,
              metalness: 0,
            })
          }
          position={[0, -0.009, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 0.165]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./RTFA/Models/Logo/band1v3Main.glb");
