"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

export default function Logo({ position, rotation, scale }: any) {
  const model = useLoader(
    GLTFLoader,
    "./RTFA/Models/Logo/logo.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./RTFA/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  console.log(model);

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <primitive object={model.scene} scale={0.35}></primitive>
    </mesh>
  );
}
