// // @ts-nocheck
// import { useGLTF } from "@react-three/drei";
// import { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Band_1({
//   position,
//   rotationStart,
//   rotationEnd,
//   checkPath,
//   scale,
// }: any) {
//   const { nodes, materials } = useGLTF("./RTFA/Models/Band_1/band_1.glb");
//   const meshRef = useRef<any>(null);

//   return (
//     <group dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane.geometry}
//         material={materials["Material.001"]}
//         position={position}
//         rotation={rotationStart}
//         scale={scale}
//         ref={meshRef}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/band_1.glb");

// @ts-nocheck
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export default function Band_1({
  position,
  rotationStart,
  rotationEnd,
  checkPath,
  scale,
}: any) {
  const { scene, animations } = useGLTF(
    "./RTFA/Models/Band_1/band_1_animated.glb",
    true
  );
  const { ref, mixer } = useAnimations(animations);
  const actionsRef = useRef([]);

  useEffect(() => {
    if (animations && animations.length > 0) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip, ref.current);
        action.play();
        actionsRef.current.push(action);
      });

      return () =>
        actionsRef.current.forEach((action) => {
          action.stop();
          mixer.uncacheAction(action);
        });
    }
  }, [mixer, animations]);

  return (
    <mesh position={position}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
}

useGLTF.preload("/band_1_animated.glb");
