// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Logo({
  position,
  rotationStart,
  rotationEnd,
  checkPath,
  scale,
}: any) {
  const { nodes, materials } = useGLTF("./RTFA/Models/Logo/logo.glb");
  const meshRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (meshRef.current !== null && meshRef.current !== undefined) {
      switch (checkPath) {
        case "/":
          gsap.to(meshRef.current!.rotation, {
            y: rotationEnd[1],
            duration: 1,
            delay: 1,
          });
          break;
        case "/AboutUs":
          gsap.to(meshRef.current!.rotation, {
            y: rotationStart[1],
            duration: 1,
            delay: 0,
          });
          break;
        case "/OurServices":
          gsap.to(meshRef.current!.rotation, {
            y: rotationStart[1],
            duration: 1,
            delay: 0,
          });
          break;
        case "/ContactUs":
          gsap.to(meshRef.current!.rotation, {
            y: rotationStart[1],
            duration: 1,
            delay: 0,
          });
          break;

        default:
          break;
      }
    }
  });

  return (
    <group
      position={position}
      rotation={rotationStart}
      scale={scale}
      ref={meshRef}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials["Material.001"]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube!.geometry}
        material={materials["Material.002"]}
        position={[0, 0.232, 0.335]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[0, -1.928, -0.12]}
      />
    </group>
  );
}

useGLTF.preload("/logo.glb");
