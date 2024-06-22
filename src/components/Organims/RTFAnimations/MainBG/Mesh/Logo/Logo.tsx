"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { DRACOLoader } from "three/examples/jsm/Addons.js";

export default function Logo({
  position,
  rotationStart,
  rotationEnd,
  checkPath,
  scale,
}: any) {
  // const model = useLoader(
  //   GLTFLoader,
  //   "./RTFA/Models/Logo/logo.glb",
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./RTFA/draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );
  // console.log(model);

  const model = useGLTF("./RTFA/Models/Logo/logo.glb");
  const clonedScene = model.scene.clone();
  const meshRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (meshRef.current !== null && meshRef.current !== undefined) {
      switch (checkPath) {
        case "/":
          gsap.to(meshRef.current!.rotation, {
            y: rotationEnd[1],
            duration: 1,
            delay: 1,
          });
          break;
        case "/AboutUs":
          gsap.to(meshRef.current!.rotation, {
            y: rotationStart[1],
            duration: 1,
            delay: 1,
          });
          break;
        case "/OurServices":
          gsap.to(meshRef.current!.position, { z: 3, duration: 1, delay: 1 });
          break;
        case "/ContactUs":
          gsap.to(meshRef.current!.position, { z: 0, duration: 1, delay: 1 });
          break;

        default:
          break;
      }
    }
  });

  return (
    <mesh
      position={position}
      rotation={rotationStart}
      scale={scale}
      ref={meshRef}
    >
      <primitive object={clonedScene} scale={0.35}></primitive>
    </mesh>
  );
}
