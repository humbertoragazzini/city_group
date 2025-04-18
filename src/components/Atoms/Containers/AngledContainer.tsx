//@ts-nocheck
import { useRef, useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
export default function AngledContainer({
  children,
  themeName,
  className,
  tilt,
}: any) {
  const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

  const ROTATION_RANGE = 10.5;
  const HALF_ROTATION_RANGE = 10.5 / 2;

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    setTheme(Themes[themeName] || Themes.deepBlack);
  }, [themeName]);

  return (
    <div
      className={`flex flex-col items-start justify-start w-full px-10 py-12 ${className}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="flex items-center justify-center w-full"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full"
        >
          <div
            className={`absolute box_left_out z-0 w-full h-full ${theme.bg} ${
              tilt == undefined ? "skew-y-6" : "-skew-y-6"
            }`}
          ></div>
          {/* Bottom left white */}
          <div
            style={{
              transform: "translateZ(115px)",
              transformStyle: "preserve-3d",
            }}
            className={`absolute box_right_out hidden md:block ${
              tilt ? "bottom-[-85px]" : "top-[-85px]"
            } left-[-15px] xl:left-[-25px] z-0 w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] ${
              theme.contrast
            }`}
          ></div>
          {/* Top right white */}
          <div
            style={{
              transform: "translateZ(115px)",
              transformStyle: "preserve-3d",
            }}
            className={`absolute box_background_out hidden md:block ${
              tilt ? "top-[-85px]" : "bottom-[-85px]"
            }  right-[-15px] xl:right-[-25px] z-0 w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] ${
              theme.contrast
            } translate-x-1/2 -translate-y-1/2`}
          ></div>
          <div
            style={{
              transform: "translateZ(150px)",
              transformStyle: "preserve-3d",
            }}
            className={`relative ${theme.text} z-10 w-full h-full px-5 pb-8 pt-4 md:px-9 md:pb-20 md:pt-4 xl:px-10 xl:pb-20 xl:pt-4`}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
