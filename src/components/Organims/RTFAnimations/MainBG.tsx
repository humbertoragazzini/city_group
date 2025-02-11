// @ts-nocheck

"use client";
import { useAppContext } from "@/context/AppContext";
import { GlobalCanvas, useScrollbar } from "@14islands/r3f-scroll-rig";
import { GradientTexture } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import Particles from "./RTFAComponents/Particles/Particles";

const vertexShader = `  
varying vec2 vUv;

void main(){

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  vUv = uv;

}
`;
const fragmentShader = `
precision mediump float;
uniform vec3 colorA;
uniform vec3 colorB;
varying vec2 vUv;
void main(){

  vec3 color = mix(colorA,colorB,vUv.y);  
  gl_FragColor = vec4(color,1.0);
  
}

`;

export default function MainBG() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const [ligthIntensity, setLightIntensity] = useState(0);
  const context = useAppContext();
  const scroll = useScrollbar();
  const boxToTest = useRef();
  const checkProgress = () => {
    if (!sphereRef.current || !lightRef.current) return;

    // Update sphere rotation based on scroll progress
    sphereRef.current.rotation.z = Math.PI / 2;
    sphereRef.current.rotation.x = scroll.scroll.progress * 5 * Math.PI;

    // Update light position and color based on scroll progress
    // lightRef.current.position.y = 28 - 14 * scroll.scroll.progress;
    //lightRef.current.color.setRGB(
    // 1 - scroll.scroll.progress, // Normalize to [0, 1]
    //1 - scroll.scroll.progress,
    //1 - scroll.scroll.progress
    //);
  };

  const ligthOn = () => {
    const values = {
      intensity: 0,
    };
    setTimeout(() => {
      if (lightRef.current) {
        gsap.fromTo(
          values,
          { intensity: 5 },
          {
            intensity: 5,
            duration: 2,
            onUpdate: () => {
              setLightIntensity(values.intensity);
            },
          }
        );
      }
    }, 1000);
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

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: "none" }}
        scaleMultiplier={0.01}
        shadows="soft"
        camera={{ far: 1500 }}
        className="-z-10"
      >
        <ambientLight intensity={2}></ambientLight>
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
          <sphereGeometry args={[50, 50, 50]} />
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              colorA: { value: new THREE.Color(1.0, 0.0, 1.0) },
              colorB: { value: new THREE.Color(0.25, 0.88, 0.82) },
            }}
            side={THREE.DoubleSide}
          ></shaderMaterial>
          {/*<GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />*/}
        </mesh>
      </GlobalCanvas>
    </>
  );
}
