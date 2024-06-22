"use client";
import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { DRACOLoader } from "three/examples/jsm/Addons.js";

export default function Logo({ position, rotation, scale }: any) {
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

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} scale={0.35}></primitive>
    </mesh>
  );
}
