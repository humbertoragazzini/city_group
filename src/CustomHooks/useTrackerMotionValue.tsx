import { useEffect } from "react";
import { useScrollbar } from "@14islands/r3f-scroll-rig";
import { useMotionValue, MotionValue } from "framer-motion";

interface Tracker {
  scrollState: Record<string, number>;
  rect: DOMRect;
}

/**
 * Return a Framer Motion value bound to a tracker scrollState
 * @param {Tracker} tracker scroll-rig tracker instance
 * @param {string} prop scrollState prop to bind
 */
export function useTrackerMotionValue(
  tracker: Tracker,
  prop: string = "progress"
): MotionValue<number> {
  const progress = useMotionValue(0);
  const { onScroll } = useScrollbar();
  const { scrollState, rect } = tracker;

  useEffect(() => {
    // update progress on scroll
    return onScroll(() => {
      progress.set(scrollState[prop]);
    });
  }, [progress, scrollState, prop, onScroll, rect]);

  return progress;
}
