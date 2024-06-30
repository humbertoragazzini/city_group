// @ts-nocheck
"use client";
import {
  GlobalCanvas,
  ScrollScene,
  UseCanvas,
  SmoothScrollbar,
} from "@14islands/r3f-scroll-rig";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
import gsap from "gsap";
export default function Home() {
  const content1 = useRef<any>();
  const content2 = useRef<any>();
  const content3 = useRef<any>();

  return (
    <SmoothScrollbar>
      {() => {
        return (
          <>
            <div className="relative z-10 overflow-hidden  m-auto pt-[0px] text-white">
              <GradientBG className={"absolute top-0 left-0"}></GradientBG>
              <div className="grid grod-cols-1 md:grid-cols-2 p-4 md:p-32  min-h-[60vh] drop-shadow-2xl m-auto overflow-hidden">
                <GlassMorphism></GlassMorphism>
                <div className="m-4 col-span-1 ">
                  <h2 className="text-[76px] leading-[76px] font-semibold mb-5 ">
                    Elevating Excellence Across Industries
                  </h2>
                  <p className="text-4xl mb-5">
                    Comprehensive Solutions in Imports, Construction, and Retail
                  </p>
                  <p className="text-2xl mb-5">
                    At PrimalPort, we harmonize the art of innovation with the
                    science of expertise to offer transcendent services in
                    Imports, Construction, and Retail. Explore how our holistic
                    approach and unwavering dedication to quality foster success
                    and transformation across a myriad of sectors.
                  </p>
                </div>
                <div className="m-4 col-span-1 hidden md:block">
                  <LogoBG></LogoBG>
                </div>
              </div>

              <div className="grid grod-cols-1 md:grid-cols-2 p-16 max-w-[1520px] m-auto">
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                </div>
              </div>

              <div className="grid grod-cols-1 md:grid-cols-2 p-16 max-w-[1520px] m-auto">
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                </div>
              </div>

              <div className="grid grod-cols-1 md:grid-cols-2 p-16 max-w-[1520px] m-auto">
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="relative h-[25vh] m-4 col-span-1 p-11">
                  <GlassMorphism></GlassMorphism>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </SmoothScrollbar>
  );
}

Home.displayName = "Home";
