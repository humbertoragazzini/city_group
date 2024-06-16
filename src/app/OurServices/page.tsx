"use client";
import MainBG from "@/components/Organims/RTFAnimations/MainBG/MainBG";
import { useState, useRef } from "react";

export default function OurServices() {
  const [size, setSize] = useState<any>(null);
  const container = useRef<any>(null);

  return (
    <main className="h-[250vh]" ref={container}>
      <h1>Home page</h1>
      <MainBG container={container}></MainBG>
    </main>
  );
}

OurServices.displayName = "OurServices";
