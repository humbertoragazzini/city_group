// @ts-nocheck
"use client";
import * as THREE from "three";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Box,
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  SoftShadows,
  Text,
} from "@react-three/drei";
gsap.registerPlugin(ScrollTrigger);

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.Mesh;
  };
  materials: {};
};

export function Computer(props: any) {
  const ref = useRef<any>(null);
  const TL = useRef<any>(null);
  const TL2 = useRef<any>(null);
  const TL3 = useRef<any>(null);
  const [scales, setScales] = useState<any>([0, 0, 0]);
  const { nodes, materials } = useGLTF(
    "RTFA/Models/Logo/Logo3D.glb"
  ) as GLTFResult;
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  useLayoutEffect(() => {
    setScales({ ...props }.scale);
    // TL.current = gsap
    //   .timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: document.getElementById("content1"),
    //       pin: false, // pin the trigger element while active
    //       start: "-25% center", // when the top of the trigger hits the top of the viewport
    //       end: "center center", // end after scrolling 500px beyond the start
    //       scrub: 1,
    //     },
    //     duration: 1,
    //   })
    //   .to(
    //     ref.current.rotation,
    //     { y: Math.PI / 1.5, duration: 1, ease: "lineal" },
    //     0
    //   )
    //   .to(ref.current.position, { x: -5.5, duration: 1, ease: "lineal" }, 0);
    // TL2.current = gsap
    //   .timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: document.getElementById("content2"),
    //       pin: false, // pin the trigger element while active
    //       start: "-25% center", // when the top of the trigger hits the top of the viewport
    //       end: "center center", // end after scrolling 500px beyond the start
    //       scrub: 1,
    //     },
    //     duration: 1,
    //   })
    //   .to(
    //     ref.current.rotation,
    //     { x: -Math.PI / 2.1, y: -Math.PI / 3, duration: 1, ease: "lineal" },
    //     0
    //   )
    //   .to(ref.current.position, { x: 5.5, duration: 1, ease: "lineal" }, 0);
    // TL3.current = gsap
    //   .timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: document.getElementById("content3"),
    //       pin: false, // pin the trigger element while active
    //       start: "-25% center", // when the top of the trigger hits the top of the viewport
    //       end: "center center", // end after scrolling 500px beyond the start
    //       scrub: 1,
    //     },
    //     duration: 1,
    //   })
    //   .to(ref.current.rotation, { x: 0, y: 0, duration: 1, ease: "lineal" }, 0)
    //   .to(ref.current.position, { x: -5.5, duration: 1, ease: "lineal" }, 0);
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
      position={[-5, 0.5, -10]}
    >
      <>
        {/* <Leva /> */}
        {/* <color args={["#222222"]} attach={"background"}></color> */}
        {/* <OrbitControls makeDefault /> */}
        <ContactShadows
          position={[0, -1.48, 0]}
          opacity={0.4}
          blur={2.4}
        ></ContactShadows>
        <Environment preset="city"></Environment>
        <ambientLight intensity={1}></ambientLight>
        {/* <pointLight intensity={4} position={[1, 2, 3]} castShadow></pointLight> */}
        <PresentationControls
          rotation={[0.13, 0.1, 0]}
          polar={[-0.2, 0.1]}
          azimuth={[-0.2, 0.1]}
          snap={"spring"}
          config={{ mass: 2, tension: 400 }}
        >
          <Float rotationIntensity={0.25} speed={0.5} position={[0, -1.5, 0]}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={25}
              color={"555588"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 1.56, -1.4]}
            ></rectAreaLight>
            <primitive object={computer.scene} castShadow receiveShadow>
              <Html
                transform
                distanceFactor={0.8}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe
                  width={1525}
                  height={1040}
                  src="http://localhost:3000/ContactForm"
                  className="rounded-3xl"
                ></iframe>
              </Html>
            </primitive>
          </Float>
          <Float position={[4, 0, -1]} rotation={[0, -Math.PI / 3, 0]}>
            <Text position={[0, 1, 0]}>Please</Text>
            <Text position={[0, 0, 0]}>contact</Text>
            <Text position={[0, -1, 0]}>us!</Text>
          </Float>
        </PresentationControls>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          receiveShadow
        >
          <boxGeometry args={[50, 50, 50]}></boxGeometry>
          <meshStandardMaterial color={"#222222"}></meshStandardMaterial>
        </mesh>
      </>
    </group>
  );
}

useGLTF.preload("RTFA/Models/Logo/Logo3D.glb");
