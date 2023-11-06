'use client'
import React from "react";
import { extend } from '@react-three/fiber'

function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxGeometry/>
      <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}
export default Box;