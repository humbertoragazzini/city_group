"use client";
import {
  Box,
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  SoftShadows,
  Text,
  useGLTF,
} from "@react-three/drei";

// const computer = useGLTF(
//   "https://threejs-journey.com/resources/models/macbook_model.gltf"
// );

export default function Computer() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <>
      <color args={["#222222"]} attach={"background"}></color>
      {/* <OrbitControls makeDefault /> */}
      <ContactShadows
        position={[0, -1.48, 0]}
        opacity={0.4}
        blur={2.4}
      ></ContactShadows>
      <Environment preset="city"></Environment>
      <ambientLight intensity={1}></ambientLight>
      {/* <pointLight intensity={4} position={[1, 2, 3]} castShadow></pointLight> */}

      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.1]}
        azimuth={[-0.2, 0.1]}
        // snap={"spring"}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.25} speed={0.5} position={[0, -1.5, 0]}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={25}
            color={"555588"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 1.56, -1.4]}
          ></rectAreaLight>
          <primitive object={computer.scene} castShadow receiveShadow>
            <Html
              transform
              distanceFactor={0.8}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                width={1525}
                height={1040}
                src="http://192.168.1.51:3000/"
                className="htmlScreen"
              ></iframe>
            </Html>
          </primitive>
        </Float>
        <Float position={[4, 0, -1]} rotation={[0, -Math.PI / 3, 0]}>
          <Text position={[0, 1, 0]}>Please</Text>
          <Text position={[0, 0, 0]}>contact</Text>
          <Text position={[0, -1, 0]}>us!</Text>
        </Float>
      </PresentationControls>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <boxGeometry args={[50, 50, 50]}></boxGeometry>
        <meshStandardMaterial color={"#222222"}></meshStandardMaterial>
      </mesh>
    </>
  );
}
