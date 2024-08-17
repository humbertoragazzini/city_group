// @ts-nocheck
"use client";
import { useTrackerMotionValue } from "@/CustomHooks/useTrackerMotionValue";
import { useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimationController({
  children,
  type,
  start,
  end,
  className,
}: any) {
  const el = useRef<any>(null);
  const tracker = useTracker(el);
  const progress = useTrackerMotionValue(tracker);
  const contentY = useTransform(progress, [0.33, 0.7], ["0%", "0%"]);
  const contentX = useTransform(progress, [0.33333333, 0.75], ["0%", "50%"]);

  return (
    <section
      ref={el}
      className={`absolute h-[300vh] top-0 ${className} z-[99999]`}
    >
      <motion.div
        className="fixed top-0 w-screen h-[50px] "
        style={{ x: contentX, y: contentY }}
      >
        {children}
      </motion.div>
    </section>
  );
}
