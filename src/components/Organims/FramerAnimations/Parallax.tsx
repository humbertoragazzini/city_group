"use client";
import { useTrackerMotionValue } from "@/CustomHooks/useTrackerMotionValue";
import { useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax({
  children,
  type,
  start,
  end,
  valueYStart,
  valueYEnd,
  valueXStart,
  valueXEnd,
  className,
}: any) {
  const el = useRef<any>(null);
  const tracker = useTracker(el);
  //@ts-ignore
  const progress = useTrackerMotionValue(tracker);
  /**
   *  Y values
   */
  const textY = useTransform(
    progress,
    [start, end],
    [valueYStart ?? "0%", valueYEnd ?? "-100%"]
  );
  const imageY = useTransform(
    progress,
    [start, end],
    [valueYStart ?? "25%", valueYEnd ?? "-25%"]
  );
  const contentY = useTransform(
    progress,
    [start, end],
    [valueYStart ?? "-100%", valueYEnd ?? "0%"]
  );
  /**
   *  X values
   */
  const textX = useTransform(
    progress,
    [start, end],
    [valueXStart ?? "25%", valueXEnd ?? "-25%"]
  );
  const imageX = useTransform(
    progress,
    [start, end],
    [valueXStart ?? "25%", valueXEnd ?? "-25%"]
  );
  const contentX = useTransform(
    progress,
    [start, end],
    [valueXStart ?? "25%", valueXEnd ?? "-25%"]
  );

  return (
    <section ref={el} className={`absolute min-h-screen top-0 ${className}`}>
      <>
        {type === "textV" && (
          <motion.div className="" style={{ y: textY }}>
            <div
              className="whitespace-nowrap uppercase m-0"
              style={{ writingMode: "vertical-lr" }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </>
      <>
        {type === "textH" && (
          <motion.div className="left-0" style={{ x: textX }}>
            <div className="text-[250px] uppercase m-0 text-nowrap">
              {children}
            </div>
          </motion.div>
        )}
      </>
      <>
        {type === "textHV" && (
          <motion.div className="left-0" style={{ x: textX, y: textY }}>
            <div className="text-[250px] uppercase m-0 text-nowrap">
              {children}
            </div>
          </motion.div>
        )}
      </>
      <>
        {type === "imageV" && (
          <motion.div className="" style={{ y: imageY }}>
            {children}
          </motion.div>
        )}
      </>
      <>
        {type === "imageHV" && (
          <motion.div className="" style={{ y: imageY, x: imageX }}>
            {children}
          </motion.div>
        )}
      </>
      <>
        {type === "imageH" && (
          <motion.div className="" style={{ x: imageX }}>
            {children}
          </motion.div>
        )}
      </>
      <>
        {type === "contentV" && (
          <motion.div
            className="absolute min-w-full min-h-screen "
            style={{ y: contentY }}
          >
            {children}
          </motion.div>
        )}
      </>
      <>
        {type === "contentH" && (
          <motion.div
            className="absolute min-w-full min-h-screen "
            style={{ x: contentX }}
          >
            {children}
          </motion.div>
        )}
      </>
      <>
        {type === "contentHV" && (
          <motion.div
            className="absolute min-w-full min-h-screen "
            style={{ x: contentX, y: contentY }}
          >
            {children}
          </motion.div>
        )}
      </>
    </section>
  );
}
