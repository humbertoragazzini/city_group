'use client'
import React from "react";
import { extend, BoxGeometry } from '@react-three/fiber'

function Floor(props) {
  return (
    <mesh {...props} recieveShadow>
      <planeGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;