"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MeshStandardMaterial, MeshBasicMaterial } from "three";
import { iAxis } from "../../interfaces/position";
import * as THREE from "three";

interface iTriangle {
  scale: number;
  rotation: iAxis;
}

export default function Triangle({ scale, rotation }: iTriangle) {
  const { materials, nodes } = useGLTF("./RTFA/Models/Logo/band1v3Main.glb");
  const meshRef = useRef<any>(null);
  const meshRefR = useRef<any>(null);
  const pathname = usePathname();
  const [ratioX, setRatioX] = useState<number>(1);
  const [ratioY, setRatioY] = useState<number>(1);

  useEffect(() => {}, [pathname]);

  useLayoutEffect(() => {
    const body = document.querySelector(".main_body");
    if (body !== undefined && body !== null) {
      if (
        body.getClientRects() !== undefined &&
        body.getClientRects() !== null
      ) {
        const ratioWX =
          body.getClientRects()[0].width / body.getClientRects()[0].height;
        const ratioWY =
          body.getClientRects()[0].width / body.getClientRects()[0].height;
        setRatioX(ratioWX);
        setRatioY(ratioWY);
      }
    }
  }, []);

  return (
    <group scale={scale} ref={meshRef}>
      <group scale={1} position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Cone instanceof THREE.Mesh ? nodes.Cone.geometry : null
          }
          material={
            new MeshStandardMaterial({
              color: "#e0363e",
              metalness: 0.5,
              roughness: 0.2,
              opacity: 0.3,
              transparent: true,
            })
          }
          position={[0, -0.009, 0]}
          rotation={[0, 0, 0]}
          scale={[5, 5 * ratioX, 5]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./RTFA/Models/Logo/band1v3Main.glb");
