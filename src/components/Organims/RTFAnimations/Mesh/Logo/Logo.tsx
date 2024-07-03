// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { MeshStandardMaterial, MeshBasicMaterial } from "three";

interface iLogo {
  scale: number;
}

export default function Logo({ scale }: iLogo) {
  const { nodes } = useGLTF("./RTFA/Models/Logo/logo.glb");
  const meshRefL = useRef<any>(null);
  const meshRefR = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    meshRefR.current.children[0].material.transparent = true;
    meshRefR.current.children[1].material.transparent = true;
    meshRefR.current.children[2].material.transparent = true;
    meshRefR.current.children[3].material.transparent = true;
    gsap.fromTo(
      meshRefR.current.position,
      { z: -8 },
      {
        z: -1,
        duration: 2,
      }
    );
    gsap.fromTo(
      meshRefL.current.position,
      { z: -8 },
      {
        z: -1,
        duration: 2,
      }
    );
    gsap.fromTo(
      meshRefR.current.children[0].material,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        onComplete: () => {
          gsap.to(meshRefL.current.rotation, {
            z: -Math.PI * 1.5,
          });
          gsap.to(meshRefR.current.rotation, {
            z: -Math.PI / 2,
          });
        },
      }
    );
    gsap.fromTo(
      meshRefR.current.children[1].material,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      meshRefR.current.children[2].material,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      meshRefR.current.children[3].material,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, [pathname]);

  return (
    <group scale={scale}>
      <group scale={3} rotation={[0, 0, -Math.PI / 4]} position={[0.5, 0, 0]}>
        <group
          scale={0.186}
          position={[-0.3, 0, 5]}
          rotation={[0, 0, 0]}
          ref={meshRefL}
        >
          <mesh
            castShadow
            geometry={nodes.Torus.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, -Math.PI / 2]}
          />
          <mesh
            castShadow
            geometry={nodes.Sphere.geometry}
            material={
              new MeshBasicMaterial({
                color: "red",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Cube!.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, 0]}
            position={[0.34, 0.24, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Cube001.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            position={[-0.125, -1.92, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          scale={0.186}
          position={[0.3, 0, 5]}
          rotation={[0, 0, 0]}
          ref={meshRefR}
        >
          <mesh
            castShadow
            geometry={nodes.Torus.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, -Math.PI / 2]}
          />
          <mesh
            castShadow
            geometry={nodes.Sphere.geometry}
            material={
              new MeshBasicMaterial({
                color: "red",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Cube!.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            rotation={[0, Math.PI / 2, 0]}
            position={[0.34, 0.24, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Cube001.geometry}
            material={
              new MeshStandardMaterial({
                color: "white",
                roughness: 1,
                metalness: 0,
              })
            }
            position={[-0.125, -1.92, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        {/* <Text
          fontWeight={700}
          fontStyle="bold"
          material={
            new MeshStandardMaterial({
              color: "white",
              roughness: 1,
              metalness: 0,
            })
          }
          position={[0, -0.35, 5]}
          fontSize={0.15}
        >
          PrimalPort
        </Text> */}
      </group>
    </group>
  );
}

useGLTF.preload("/logo.glb");
