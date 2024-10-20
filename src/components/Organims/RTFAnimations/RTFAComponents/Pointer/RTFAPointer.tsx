"use client";
import { useLayoutEffect, useRef } from "react";

export default function RTFAPointer() {
  const pointerRef = useRef<any>(null);

  useLayoutEffect(() => {
    const movePointer = (e: MouseEvent) => {
      const movementX = (e.clientX / window.innerWidth - 0.5) * 17.5;
      const movementY = (e.clientY / window.innerHeight - 0.5) * 9.5;
      pointerRef.current.position.x = movementX;
      pointerRef.current.position.y = -movementY;
      pointerRef.current.position.z = 3;
    };

    const body = document.getElementsByTagName("body")[0];
    body.addEventListener("mousemove", movePointer);

    // Return the cleanup function to remove the event listener properly
    return () => {
      body.removeEventListener("mousemove", movePointer);
    };
  }, []);

  return (
    <mesh ref={pointerRef} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 30, 30]}></sphereGeometry>
    </mesh>
  );
}
