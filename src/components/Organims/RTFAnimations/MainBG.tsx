"use client";
import { GlobalCanvas, useScrollbar } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MainBG() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const [ligthIntensity, setLightIntensity] = useState(0);

  const scroll = useScrollbar();

  const checkProgress = () => {
    if (!sphereRef.current || !lightRef.current) return;

    // Update sphere rotation based on scroll progress
    sphereRef.current.rotation.z = Math.PI / 2;
    sphereRef.current.rotation.x = scroll.scroll.progress * Math.PI;

    // Update light position and color based on scroll progress
    lightRef.current.position.y = 28 - 14 * scroll.scroll.progress;
    lightRef.current.color.setRGB(
      1 - scroll.scroll.progress, // Normalize to [0, 1]
      1 - scroll.scroll.progress,
      1 - scroll.scroll.progress
    );
  };

  const ligthOn = () => {
    const values = {
      intensity: 0,
    };
    setTimeout(() => {
      if (lightRef.current) {
        gsap.fromTo(
          values,
          { intensity: 0 },
          {
            intensity: 5,
            duration: 2,
            onUpdate: () => {
              setLightIntensity(values.intensity);
            },
          }
        );
      }
    }, 2500);
  };

  useLayoutEffect(() => {
    const checkElement = setInterval(() => {
      if (lightRef.current) {
        ligthOn();
        clearInterval(checkElement); // Clear the interval once the element is found
      }
    }, 250);

    return () => {
      clearInterval(checkElement); // Clean up the interval on component unmount
    };
  }, []);

  // Use `useEffect` to react to scroll progress rather than adding a manual event listener
  useLayoutEffect(() => {
    checkProgress();
  }, [scroll.scroll.progress]); // Dependency on scroll progress

  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 500 }}
        className="-z-10"
      >
        <directionalLight
          position={[0, 28, 20]}
          ref={lightRef}
          intensity={ligthIntensity}
          color={new THREE.Color(1, 1, 1)} // RGB values normalized between 0 and 1
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        <mesh position={[0, 0, 0]} ref={sphereRef}>
          <sphereGeometry args={[25, 15, 15]} />
          <meshStandardMaterial side={THREE.DoubleSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />
          </meshStandardMaterial>
        </mesh>
      </GlobalCanvas>
    </>
  );
}
