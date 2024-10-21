"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";

export default function HorizontalTitle() {
  const el = useRef<any>();
  const ref = useRef<any>();

  return (
    <>
      <div ref={el} className="absolute top-0 left-0 w-full h-full block"></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return (
              <mesh {...props} ref={ref}>
                <planeGeometry args={[1, 1, 50]} />
                <meshPhysicalMaterial
                  attach="material"
                  color="#dddddd"
                  metalness={0}
                  roughness={0.5}
                  transmission={1}
                  thickness={0}
                  clearcoat={0}
                  clearcoatRoughness={0}
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
