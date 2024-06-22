"use client";
import { useEffect } from "react";
import MainBGCanvas from "./Canvas/Canvas";
import { usePathname } from "next/navigation";

export default function MainBG() {
  const pathname = usePathname();

  useEffect(() => {
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
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen -z-50">
      <MainBGCanvas></MainBGCanvas>
    </div>
  );
}
