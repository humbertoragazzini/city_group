"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Leva, useControls } from "leva"; // Import Leva

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ContactUsPC() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  const { camera } = useThree();

  // // Leva controls for the camera position and rotation
  // const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } =
  //   useControls({
  //     positionX: { value: 0, min: -10, max: 10, step: 0.0001 },
  //     positionY: { value: 1, min: -10, max: 10, step: 0.0001 },
  //     positionZ: { value: 5, min: -10, max: 10, step: 0.0001 },
  //     rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
  //     rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
  //     rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.0001 },
  //   });
  // useEffect(() => {
  //   // Update the camera position and rotation based on Leva controls
  //   camera.position.set(positionX, positionY, positionZ);
  //   camera.rotation.set(rotationX, rotationY, rotationZ);
  // }, [
  //   camera,
  //   positionX,
  //   positionY,
  //   positionZ,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  // ]);

  useEffect(() => {
    console.log(camera.position);
    const tl = gsap
      .timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: document.getElementById("pc_form_container"),
          pin: false, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "center top", // end after scrolling 500px beyond the start
          scrub: 1,
          markers: true,
        },
        duration: 1,
      })
      .to(
        camera.position,
        { x: 0.2, y: 0.49, z: 1.29, duration: 1, ease: "lineal" },
        0
      )
      .to(
        camera.rotation,
        { x: -0.1, y: 0.13, z: 0.03, duration: 1, ease: "lineal" },
        0
      );
  }, []);

  return (
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
  );
}
