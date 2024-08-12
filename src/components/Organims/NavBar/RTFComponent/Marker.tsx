"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Marker({ positionY, mousePosition, thick }: any) {
  const markerRef = useRef<any>();

  const computeXPosition = (y: any) => {
    const k = 0.005; // You can adjust k to control the decay rate
    return 15 - 25 * Math.exp(-k * Math.abs(y));
  };

  useFrame(() => {
    if (markerRef.current && window !== undefined) {
      markerRef.current.position.x = computeXPosition(
        positionY * 5 -
          window.innerHeight / 2 -
          (mousePosition.current * 2 - (positionY * 5 - window.innerHeight / 2))
      );
    }
  });

  return (
    <mesh
      ref={markerRef}
      position={[0, positionY * 5 - window.innerHeight / 2, -60]}
    >
      <boxGeometry
        args={[275 + (thick ? 26 : 20), thick ? 6 : 3, thick ? 6 : 3]}
      />
      <meshStandardMaterial color={"grey"}></meshStandardMaterial>
    </mesh>
  );
}

// function Marker({ positionY, mousePosition, thick }: any) {
//   const markerRef = useRef();

//   // Define the function x(y) = 2 * exp(-k * |y|)
//   const computeXPosition = (y) => {
//     const k = 0.005; // You can adjust k to control the decay rate
//     return 15 - 25 * Math.exp(-k * Math.abs(y));
//   };

//   useFrame(() => {
//     // Update marker position based on the computed x position
//     markerRef.current.position.x = computeXPosition(
//       positionY * 5 -
//         window.innerHeight / 2 -
//         (mousePosition.current * 2 - (positionY * 5 - window.innerHeight / 2))
//     );
//     // Optional: log to see the value
//   });

//   return (
//     <mesh
//       ref={markerRef}
//       position={[0, positionY * 5 - window.innerHeight / 2, -60]}
//     >
//       <boxGeometry
//         args={[275 + (thick ? 26 : 20), thick ? 6 : 3, thick ? 6 : 3]}
//       />
//       <meshStandardMaterial color={"grey"}></meshStandardMaterial>
//     </mesh>
//   );
// }
