import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function SectionMob({ imgUrl, subheading, heading }: any) {
  return (
    <div className="block lg:hidden">
      <div className="relative h-fit">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <Content></Content>
    </div>
  );
}

function StickyImage({ imgUrl }: any) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${12 * 2}px)`,
        top: 12,
        scale,
      }}
      ref={targetRef}
      className="sticky z-10 overflow-hidden"
    >
      <motion.div className="h-[100vh] aspect-video">
        <video src="./images/import_export.jpg" autoPlay loop muted></video>
      </motion.div>
      <motion.div className="absolute inset-0 bg-neutral-950/70" />
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }: any) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-10"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
}

function Content() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 1], [1, 1, 1]);
  const opacityBg = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <div
      ref={targetRef}
      className="relative mx-auto min-h-screen flex justify-center items-center grid max-w-5xl grid-cols-1 lg:gap-8 lg:px-16 pb-24 pt-12 z-0"
    >
      <div className="relative min-h-screen flex justify-start items-center top-0 left-0 p-4">
        <div className="col-span-1">
          <motion.div style={{ y, scale }}>
            <h2 className="text-2xl md:text-3xl font-bold md:col-span-4 pb-7">
              Additional content explaining the above card here
            </h2>
          </motion.div>

          <div className="md:col-span-8">
            <motion.div style={{ y, scale }}>
              <p className="mb-4 text-lg  text-black-600 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                blanditiis soluta eius quam modi aliquam quaerat odit deleniti
                minima maiores voluptate est ut saepe accusantium maxime
                doloremque nulla consectetur possimus.
              </p>
              <p className="mb-8 text-lg  text-black-600 md:text-2xl pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reiciendis blanditiis aliquam aut fugit sint.
              </p>
              <div className="w-full flex justify-start items-center">
                <Link
                  href="/"
                  className={`text-white text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] mr-4 shadow-xl hover:bg-[#13212B] px-6 bg-the-red`}
                >
                  Learn more <FiArrowUpRight className="inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
