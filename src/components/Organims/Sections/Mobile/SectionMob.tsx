import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Text = [
  {
    language: "EN";
    content: string;
  },
  {
    language: "ES";
    content: string;
  },
  {
    language: "CH";
    content: string;
  },
  {
    language: "IT";
    content: string;
  }
];

interface iLearnMore {
  label: Text;
  link: string;
}

interface iSectionMob {
  imgContent: {
    imgUrl: string;
    size: {
      width: number;
      height: number;
    };
    aria: Text;
    heading: Text;
    subheading: Text;
  };
  textContent: {
    heading: Text;
    text: Text;
    learn: iLearnMore;
  };
}

export default function SectionMob({ imgContent, textContent }: iSectionMob) {
  return (
    <div className="block lg:hidden">
      <div className="relative h-fit">
        <StickyImage
          imgUrl={imgContent.imgUrl}
          aria={imgContent.aria}
          size={imgContent.size}
        />
        <OverlayCopy
          heading={imgContent.heading}
          subheading={imgContent.subheading}
        />
      </div>
      <Content textContent={textContent}></Content>
    </div>
  );
}

function StickyImage({ imgUrl, aria, size }: any) {
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
        // backgroundImage: `url(${imgUrl})`,
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
        <Image
          src={imgUrl}
          alt={"nothing yet"}
          width={size.width}
          height={size.height}
        ></Image>
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
      <Paragraph
        type="body"
        className="mb-2 text-center md:mb-4 !text-xl md:!text-3xl"
        text={subheading}
      ></Paragraph>
      <Paragraph
        type="body"
        className="text-center font-bold !text-4xl md:!text-7xl"
        text={heading}
      ></Paragraph>
    </motion.div>
  );
}

function Content({ textContent }: any) {
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
      className="relative mx-auto min-h-screen flex justify-center items-center max-w-5xl grid-cols-1 lg:gap-8 lg:px-16 pb-24 pt-12 z-0"
    >
      <div className="relative min-h-screen flex justify-start items-center top-0 left-0 p-4">
        <div className="col-span-1">
          <motion.div style={{ y, scale }}>
            <Heading
              text={textContent.heading}
              level={2}
              className="text-2xl md:text-3xl font-bold md:col-span-4 pb-7 drop-shadow-lg"
            ></Heading>
          </motion.div>

          <div className="md:col-span-8">
            <motion.div style={{ y, scale }}>
              <Paragraph
                type="standfirst3"
                text={textContent.text}
                className="drop-shadow-xl mb-4"
              ></Paragraph>
              <div className="w-full flex justify-start items-center">
                <Link
                  href={textContent.learn.link}
                  className={`text-white text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] mr-4 shadow-xl hover:bg-[#13212B] px-6 bg-the-red`}
                >
                  <Paragraph
                    type="body"
                    text={textContent.learn.label}
                  ></Paragraph>
                  <FiArrowUpRight className="inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
