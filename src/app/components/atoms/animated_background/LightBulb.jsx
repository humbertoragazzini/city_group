'use client'
import React from "react";
import { extend, SphereGeometry } from '@react-three/fiber'

function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

export default LightBulb;