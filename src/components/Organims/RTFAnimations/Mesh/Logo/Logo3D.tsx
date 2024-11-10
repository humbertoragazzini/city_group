"use client";
import * as THREE from "three";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.Mesh;
  };
  materials: {};
};

export function Logo3D(props: any) {
  const ref = useRef<any>(null);
  const TL = useRef<any>(null);
  const TL2 = useRef<any>(null);
  const TL3 = useRef<any>(null);
  const [scales, setScales] = useState<any>([0, 0, 0]);
  const { nodes, materials } = useGLTF(
    "RTFA/Models/Logo/Logo3D.glb"
  ) as GLTFResult;

  useLayoutEffect(() => {
    setScales({ ...props }.scale);
    TL.current = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: document.getElementById("content1"),
          pin: false, // pin the trigger element while active
          start: "-25% center", // when the top of the trigger hits the top of the viewport
          end: "center center", // end after scrolling 500px beyond the start
          scrub: 1,
        },
        duration: 1,
      })
      .to(
        ref.current.rotation,
        { y: Math.PI / 1.5, duration: 1, ease: "lineal" },
        0
      )
      .to(ref.current.position, { x: -5.5, duration: 1, ease: "lineal" }, 0);
    TL2.current = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: document.getElementById("content2"),
          pin: false, // pin the trigger element while active
          start: "-25% center", // when the top of the trigger hits the top of the viewport
          end: "center center", // end after scrolling 500px beyond the start
          scrub: 1,
        },
        duration: 1,
      })
      .to(
        ref.current.rotation,
        { x: -Math.PI / 2.1, y: -Math.PI / 3, duration: 1, ease: "lineal" },
        0
      )
      .to(ref.current.position, { x: 5.5, duration: 1, ease: "lineal" }, 0);
    TL3.current = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: document.getElementById("content3"),
          pin: false, // pin the trigger element while active
          start: "-25% center", // when the top of the trigger hits the top of the viewport
          end: "center center", // end after scrolling 500px beyond the start
          scrub: 1,
        },
        duration: 1,
      })
      .to(ref.current.rotation, { x: 0, y: 0, duration: 1, ease: "lineal" }, 0)
      .to(ref.current.position, { x: -5.5, duration: 1, ease: "lineal" }, 0);
  }, []);

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[
        { ...props }.scale[0] / 2.5,
        { ...props }.scale[0] / 2.5,
        { ...props }.scale[0] / 2.5,
      ]}
      position={[5.5, 0.5, -5]}
    >
      <mesh
        name="Cone"
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
      />
    </group>
  );
}

useGLTF.preload("RTFA/Models/Logo/Logo3D.glb");
