"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface iWebGLImage {
  src: string;
}

interface iGLCubeImage {
  src: string;
  scrollState: any;
  dir?: any;
  imgRef?: any;
}

export default function WebGLImage({ src }: iWebGLImage) {
  const el = useRef<HTMLImageElement>(null);

  return (
    <>
      <img ref={el} src={src} className="opacity-0 bg-[rgba(0,0,0,1)]" />
      <UseCanvas>
        <ScrollScene
          track={el as unknown as React.MutableRefObject<HTMLElement>}
        >
          {/* {(props) => <GLImage imgRef={el} {...props} />} */}
          {(props) => <GLCubeImage imgRef={el} src={src} {...props} />}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}

function GLCubeImage({ src, scrollState, dir, ...props }: iGLCubeImage) {
  const ref = useRef<THREE.Mesh>(null);

  // // Load texture from the <img/> and suspend until it's ready
  // const texture = useImageAsTexture(imgRef);
  const textures = [
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
    useLoader(TextureLoader, "/img/pexels-goumbik-928199.jpg"),
  ];

  useFrame(() => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x = Math.PI * scrollState.visibility * 0.66;
    }
  });

  // Use the <Image/> component from Drei
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material-0" map={textures[0]} />
      <meshBasicMaterial attach="material-1" map={textures[1]} />
      <meshBasicMaterial attach="material-2" map={textures[2]} />
      <meshBasicMaterial attach="material-3" map={textures[3]} />
      <meshBasicMaterial attach="material-4" map={textures[4]} />
      <meshBasicMaterial attach="material-5" map={textures[5]} />
    </mesh>
  );
}

// OLD code:

// function GLImage({ imgRef, scrollState, dir, ...props }) {
//   const ref = useRef();

//   // Load texture from the <img/> and suspend until it's ready
//   const texture = useImageAsTexture(imgRef);

//   useFrame(() => {
//     // visibility is 0 when image enters viewport and 1 when fully visible
//     ref.current.material.grayscale = clamp(
//       1 - scrollState.visibility ** 3,
//       0,
//       1
//     );
//     // progress is 0 when image enters viewport and 1 when image has exited
//     ref.current.material.zoom = 1 + scrollState.progress * 0.66;
//     // viewport is 0 when image enters and 1 when image reach top of screen
//     ref.current.material.opacity = clamp(scrollState.viewport * 3, 0, 1);
//   });

//   // Use the <Image/> component from Drei
//   return <Image ref={ref} texture={texture} transparent {...props} />;
// }
