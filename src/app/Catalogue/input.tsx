// @ts-nocheck
"use client"
import {
    animate,
    useMotionTemplate,
    useMotionValue,
    motion,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

/**
   IMPORTANT!!
  
   This component requires the following class for cross browser masking support
  
  .mask-with-browser-support {
    mask: linear-gradient(black, black), linear-gradient(black, black);
    mask-clip: content-box, border-box;
    mask-composite: exclude;
    -webkit-mask:
      linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-clip: content-box, border-box;
    -webkit-mask-composite: xor;
  }
   */


const BeamContainer = ({ children, mode }: any) => {
    const inputRef = useRef(null);

    const turn = useMotionValue(0);

    useEffect(() => {
        animate(turn, 1, {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
        });
    }, []);

    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #a78bfa 100%)`;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            onClick={() => {
                inputRef.current.focus();
            }}
            className={`relative flex w-full items-center gap-2 rounded-full border border-white/20  ${mode == "dark" ? "bg-gradient-to-br from-slate-800 to-slate-950" : "bg-gradient-to-br from-slate-450 to-slate-450"} py-1.5 pl-6 pr-1.5`}
        >
            {/* <input
                ref={inputRef}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
            /> */}
            {children}
            {/* <button
                onClick={(e) => e.stopPropagation()}
                type="submit"
                className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-400 px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
            >
                <span>Join Waitlist</span>
                <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
            </button> */}

            <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
                <motion.div
                    style={{
                        backgroundImage,
                    }}
                    className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border"
                />
            </div>
        </form>
    );
};

export default BeamContainer;