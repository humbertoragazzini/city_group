"use client";
import { useEffect, useState, useRef, Suspense } from "react";
import Ring from "../Mesh/Ring";
import Sphere from "../Mesh/Sphere";
import { usePathname } from "next/navigation";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import PlaneBG from "../Mesh/PlaneBG";
import Logo from "../Mesh/Logo/Logo";
import { Float, Environment, Html } from "@react-three/drei";
import Band_1 from "../Mesh/Shapes/Band_1";
import { Fog, Mesh, MeshStandardMaterial } from "three";
import { validateHeaderValue } from "http";
import BackgroundShapes from "../Mesh/Shapes/Background";

export default function MainBGAnimation({ scrollPosition }: any) {
  const pathname = usePathname();
  const three = useThree();
  const { camera, size } = useThree();
  const cameraRef = useRef<any>(camera);
  const [useDistance, setUseDistance] = useState();

  const { scene } = useThree(); // Access the scene from useThree

  useEffect(() => {
    // Setting linear fog
    // scene.fog = new Fog("#010101", 1, 50);

    // Alternatively, for exponential fog, uncomment the following line:
    // scene.fog = new THREE.FogExp2('skyblue', 0.1);

    return () => {
      scene.fog = null; // Clean up the fog when this component unmounts
    };
  }, [scene]);

  // // Function to update the camera's FOV based on window width
  const updateFOV = () => {
    let aspect = 0;
    let fov = 0;

    switch (pathname) {
      case "/":
        aspect = size.width / size.height;
        fov = 2 * Math.atan(25 / (2.5 * 5 * aspect)) * (180 / Math.PI);
        cameraRef.current.fov = fov;
        cameraRef.current.updateProjectionMatrix();
        break;
      case "/AboutUs":
        aspect = size.width / size.height;
        fov = 2 * Math.atan(25 / (2.5 * 8 * aspect)) * (180 / Math.PI);
        cameraRef.current.fov = fov;
        cameraRef.current.updateProjectionMatrix();
        break;
      case "/OurServices":
        aspect = size.width / size.height;
        fov = 2 * Math.atan(25 / (2.5 * 8 * aspect)) * (180 / Math.PI);
        cameraRef.current.fov = fov;
        cameraRef.current.updateProjectionMatrix();
        break;
      case "/ContactUs":
        aspect = size.width / size.height;
        fov = 2 * Math.atan(25 / (2.5 * 8 * aspect)) * (180 / Math.PI);
        cameraRef.current.fov = fov;
        cameraRef.current.updateProjectionMatrix();
        break;

      default:
        break;
    }
  };

  // useEffect(() => {
  //   updateFOV();
  //   window.addEventListener("resize", updateFOV);
  //   return () => {
  //     window.removeEventListener("resize", updateFOV);
  //   };
  // }, [size.width, size.height]);

  useEffect(() => {
    console.log("we change position");
    const row = 10;
    const col = 10;
    let values = [];
    for (let i = -5; i < row; i++) {
      for (let j = -40; j < col; j++) {
        values.push([i * 5, j * 5]);
      }
    }
    console.log(values);
    switch (pathname) {
      case "/":
        const theFov = {
          fov: 180,
        };
        // gsap.to(three.camera.position, {
        //   z: 15,
        //   duration: 10,
        //   ease: "linear",
        // });
        break;
      case "/AboutUs":
        // gsap.to(three.camera.position, {
        //   z: -5,
        //   duration: 2,
        //   delay: 0.5,
        // });
        break;
      case "/OurServices":
        // gsap.to(three.camera.position, {
        //   z: -5,
        //   duration: 2,
        //   delay: 0.5,
        // });
        break;
      case "/ContactUs":
        // gsap.to(three.camera.position, {
        //   x: 0,
        //   z: -5,
        //   duration: 2,
        //   delay: 0.5,
        // });
        break;

      default:
        break;
    }
  }, [pathname]); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Environment */}
      <Environment
        background
        blur={2}
        backgroundBlurriness={0}
        backgroundIntensity={1}
        files={"./RTFA/enviromentMap/blender_2kv3.hdr"}
      ></Environment>

      {/* Ligth */}
      <directionalLight
        position={[1, 1, 1]}
        intensity={5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0005}
      ></directionalLight>

      {/* Shapes */}
      <mesh scale={25}>
        <Logo
          position={[-2.45, 5, 5]}
          rotationStart={[Math.PI / 2, -Math.PI / 2, Math.PI / 2]}
          rotationEnd={[Math.PI / 2, 0, Math.PI / 2]}
          checkPath={pathname}
          scale={1.5}
        ></Logo>
        <Logo
          position={[2.45, 5, 5]}
          rotationStart={[Math.PI / 2, -Math.PI / 2, Math.PI / 2]}
          rotationEnd={[Math.PI / 2, Math.PI, Math.PI / 2]}
          checkPath={pathname}
          scale={1.5}
        ></Logo>
      </mesh>
    </>
  );
}
