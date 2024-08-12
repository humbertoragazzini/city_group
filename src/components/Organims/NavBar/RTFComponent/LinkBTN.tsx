"use client";
import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Euler } from "three";

export function LINKBtn({ homeState, text, posistion, thickness }: any) {
  const linkRef = useRef<any>();
  const ligthRef = useRef<any>();
  const ligthRef2 = useRef<any>();
  const ligthRef3 = useRef<any>();
  const ligthRef4 = useRef<any>();
  const ligthRef5 = useRef<any>();
  const ligthRef6 = useRef<any>();
  const ligthRef7 = useRef<any>();

  useLayoutEffect(() => {
    console.log("change", ligthRef.current);
    if (
      ligthRef.current !== undefined &&
      ligthRef2.current !== undefined &&
      ligthRef3.current !== undefined &&
      ligthRef4.current !== undefined &&
      ligthRef5.current !== undefined &&
      ligthRef6.current !== undefined &&
      ligthRef7.current !== undefined &&
      linkRef.current !== undefined
    ) {
      if (homeState) {
        gsap.to(ligthRef.current, { intensity: 25000 });
        gsap.to(ligthRef2.current, { intensity: 25000 });
        gsap.to(ligthRef3.current, { intensity: 25000 });
        gsap.to(ligthRef4.current, { intensity: 25000 });
        gsap.to(ligthRef5.current, { intensity: 25000 });
        gsap.to(ligthRef6.current, { intensity: 25000 });
        gsap.to(ligthRef7.current, { intensity: 25000 });
        gsap.to(linkRef.current.rotation, { x: 0 });
      } else {
        gsap.to(ligthRef.current, { intensity: 0 });
        gsap.to(ligthRef2.current, { intensity: 0 });
        gsap.to(ligthRef3.current, { intensity: 0 });
        gsap.to(ligthRef4.current, { intensity: 0 });
        gsap.to(ligthRef5.current, { intensity: 0 });
        gsap.to(ligthRef5.current, { intensity: 0 });
        gsap.to(ligthRef6.current, { intensity: 0 });
        gsap.to(ligthRef7.current, { intensity: 0 });
        gsap.to(linkRef.current.rotation, { x: Math.PI / 2 });
      }
    }
  }, [homeState]);

  return (
    <>
      <group
        ref={linkRef}
        position={[
          posistion[0],
          window.innerHeight / 2 + posistion[1],
          posistion[2],
        ]}
      >
        <mesh receiveShadow={true}>
          <boxGeometry args={[350, thickness, thickness]}></boxGeometry>{" "}
          <meshStandardMaterial
            transparent={true}
            opacity={0}
          ></meshStandardMaterial>
        </mesh>
        <mesh>
          <Text castShadow scale={40} position={[0, 0, thickness / 2 + 5]}>
            {text}
            <meshStandardMaterial color={"black"}></meshStandardMaterial>
          </Text>
        </mesh>
        <mesh>
          <Text
            scale={25}
            position={[-150, thickness / 2, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            {text}
            <meshBasicMaterial color={"white"}></meshBasicMaterial>
          </Text>
        </mesh>
      </group>
      <pointLight
        ref={ligthRef}
        position={[
          posistion[0] - 140,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef2}
        position={[
          posistion[0] - 90,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef3}
        position={[
          posistion[0] - 40,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef4}
        position={[
          posistion[0] + 10,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef5}
        position={[
          posistion[0] + 60,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef6}
        position={[
          posistion[0] + 110,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef7}
        position={[
          posistion[0] + 160,
          window.innerHeight / 2 + posistion[1],
          60,
        ]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
    </>
  );
}
