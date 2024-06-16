"use client";
import { useEffect } from "react";
import MainBGCanvas from "./Canvas/Canvas";

export default function MainBG({ container }: any) {
  useEffect(() => {
    console.log(container.current.getBoundingClientRect());
    let count = 0;
    function scroll(e: any) {
      console.log("scroll");
      console.log(count);
      console.log(window.scrollY);
      console.log(e);
      count++;
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [container]);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-the-grey -z-50">
      <MainBGCanvas></MainBGCanvas>
    </div>
  );
}
