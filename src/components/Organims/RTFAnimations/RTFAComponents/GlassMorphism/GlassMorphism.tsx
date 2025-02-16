"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";

export default function GlassMorphism() {
  const el = useRef<any>();
  const ref = useRef<any>();

  return (
    <>
      <div
        ref={el}
        className="absolute top-0 left-0 hidden w-full h-full md:block"
      ></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return (
              <mesh {...props} ref={ref} position={[0, 0, 0]} renderOrder={1}>
                <planeGeometry args={[1, 1, 50]} />
                <meshPhysicalMaterial
                  attach="material"
                  color="#999999"
                  metalness={0.1}
                  roughness={0.4}
                  transmission={1}
                  thickness={0}
                  clearcoat={1}
                  clearcoatRoughness={0}
                  reflectivity={0.5}
                  specularIntensity={0}
                />
              </mesh>
            );
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}

// <planeGeometry args={[1, 1, 50]} />
//                <meshPhysicalMaterial
//                 attach="material"
//                  color="#999999"
//                  metalness={0.1}
//                  roughness={0.4}
//                  transmission={1}
//                  thickness={0}
//                  clearcoat={1}
//                  clearcoatRoughness={0}
//                  reflectivity={0.5}
//                  specularIntensity={0}
//                />
