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
import HorizontalTitle from "@/components/Organims/RTFAnimations/RTFAComponents/HorizontalTitle/HorizontalTitle";
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
            <div className="relative z-10 overflow-hidden  m-auto pt-[96px] text-white">
              <GradientBG className={"absolute top-0 left-0"}></GradientBG>
              <div className="grid grod-cols-1 md:grid-cols-2 p-16 max-w-[1281px] m-auto">
                <div className="m-4 col-span-1">
                  <LogoBG></LogoBG>
                </div>
                <div className="m-4 col-span-1 p-16 backdrop-blur-3xl backdrop-brightness-[0.8] drop-shadow-2xl rounded-2xl">
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="m-4 col-span-1 p-16 backdrop-blur-3xl backdrop-brightness-[0.8] drop-shadow-2xl rounded-2xl">
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="m-4 col-span-1">
                  <LogoBG></LogoBG>
                </div>
                <div className="m-4 col-span-1">
                  <LogoBG></LogoBG>
                </div>
                <div className="m-4 col-span-1 p-16 backdrop-blur-3xl backdrop-brightness-[0.8] drop-shadow-2xl rounded-2xl">
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="m-4 col-span-1 p-16 backdrop-blur-3xl backdrop-brightness-[0.8] drop-shadow-2xl rounded-2xl">
                  <h2>Contet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolorum expedita, ad sunt asperiores commodi
                    dolor, facere nulla quod debitis perferendis saepe. Eius,
                    incidunt nobis mollitia fugit totam quaerat impedit.
                  </p>
                </div>
                <div className="m-4 col-span-1">
                  <LogoBG></LogoBG>
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
