// @ts-nocheck
"use client";
import { useLayoutEffect, useRef } from "react";

export default function RTFAPointer() {
  const pointerRef = useRef<any>(null);

  useLayoutEffect(() => {
    const movePointer = (e) => {
      const movementX = (e.clientX / window.innerWidth - 0.5) * 17.5;
      const movementY = (e.clientY / window.innerHeight - 0.5) * 9.5;
      pointerRef.current.position.x = movementX;
      pointerRef.current.position.y = -movementY;
      pointerRef.current.position.z = 3;
    };
    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", movePointer);

    return document.removeEventListener("mousemove", movePointer);
  }, []);
  return (
    <mesh ref={pointerRef} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 30, 30]}></sphereGeometry>
      <meshPhysicalMaterial
        transparent={true} // Enable transparency
        transmission={1} // Full transmission for glass effect
        roughness={0} // Smooth surface for glass
        metalness={0} // Non-metallic
        reflectivity={1} // High reflectivity for glass
        ior={1.52} // Index of Refraction for glass
        thickness={0.5} // Simulates glass thickness
        clearcoat={1} // Extra glossiness
        clearcoatRoughness={0} // Smooth clearcoat
      />
    </mesh>
  );
}
