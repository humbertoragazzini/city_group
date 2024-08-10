// @ts-nocheck
"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function GlassMorphism() {
  const el = useRef<any>();
  const ref = useRef<any>();
  const texture = useLoader(TextureLoader, "/img/import_export.jpg");

  return (
    <>
      <div
        ref={el}
        className="relative top-0 h-full aspect-video hidden md:block"
      >
        <h1 className="text-6xl">CONTENT</h1>
      </div>
      <UseCanvas>
        <ScrollScene
          track={el}
          //   track: RefObject            // DOM element to track (ref)
          // children: (props) => JSX.Element  // render function
          // as?: string = "scene"       // renders as a Scene by default
          // inViewportMargin?: string = "0%"  // IntersectionObserver rootMargin
          // inViewportThreshold?: number = 0  // IntersectionObserver threshold
          // hideOffscreen?: boolean = true // Hide scene when outside viewport
          visible={true} // Scene visibility
          debug={true} // Render a debug plane and show 50% opacity of DOM element
          // scissor?: boolean = false   // Render as separate pass in a scissor
          // margin?: number             // margin added outside scissor
          // priority?: number = 1
        >
          {({ scale, ...props }) => {
            return (
              <mesh {...props} ref={ref} scale={scale} receiveShadow>
                <planeGeometry args={[1, 1, 1]} />
                <meshStandardMaterial map={texture} />
              </mesh>
            );
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
