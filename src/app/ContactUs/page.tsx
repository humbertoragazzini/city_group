// @ts-ignore
"use client";
import { useAppContext } from "@/context/AppContext";
import { Canvas, useThree } from "@react-three/fiber";
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
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import { useEffect, useRef } from "react";
import ContactUsPC from "@/components/Organims/RTFAnimations/RTFAComponents/ContactUsPC/ContactUsPC";

export default function ContactUs() {
  const context = useAppContext();

  return (
    <div id="pc_form_container" className="h-[200vh] w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-screen h-screen">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
          shadows
          className=""
        >
          <ContactUsPC></ContactUsPC>
        </Canvas>
      </div>
      <div className="fixed h-screen w-screen pointer-events-none"></div>
    </div>
  );
}

ContactUs.displayName = "ContactUs";
