//@ts-nocheck
import { useAppContext } from "@/context/AppContext";
import { TextContent } from "../../../types/types";

interface iHeading {
  text: TextContent[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
  theme?:
    | "red"
    | "black"
    | "darkGrey"
    | "lightGrey"
    | "lightRed"
    | "darkWhite"
    | "darkerGrey"
    | "lightWhite"
    | "white"
    | "darkBlack"
    | "yellow";
  className?: string;
}

export default function Heading({
  text,
  level,
  theme = "white",
  className = "",
}: iHeading) {
  const context = useAppContext();
  const textContent = text.find((t) => t.language === context.state.language);

  // Define theme color mappings
  const themeColors: Record<iHeading["theme"], string> = {
    red: "text-red-500",
    black: "text-black",
    darkGrey: "text-gray-800",
    lightGrey: "text-gray-400",
    lightRed: "text-red-300",
    darkWhite: "text-gray-200",
    darkerGrey: "text-gray-700",
    lightWhite: "text-gray-50",
    white: "text-white",
    darkBlack: "text-gray-900",
    yellow: "text-yellow-500",
  };

  // Define font sizes dynamically
  const headingSizes: Record<number, string> = {
    1: "text-5xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[90px] lg:text-[65px] lg:leading-[90px] font-semibold",
    2: "text-4xl sm:text-[50px] sm:leading-[50px] md:text-[55px] md:leading-[70px] lg:text-[55px] lg:leading-[70px] font-semibold",
    3: "text-3xl sm:text-[40px] sm:leading-[45px] md:text-[45px] md:leading-[60px] lg:text-[45px] lg:leading-[60px] font-semibold",
    4: "text-2xl sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[40px] lg:leading-[50px] font-semibold",
    5: "text-lg sm:text-[30px] sm:leading-[35px] md:text-[35px] md:leading-[45px] lg:text-[35px] lg:leading-[45px] font-semibold",
    6: "text-md sm:text-[20px] sm:leading-[30px] md:text-[25px] md:leading-[35px] lg:text-[25px] lg:leading-[35px] font-semibold",
  };

  if (!textContent) return null; // If no content, don't render anything

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={`${headingSizes[level]} ${themeColors[theme]} ${className}`}
    >
      {textContent.content}
    </HeadingTag>
  );
}

Heading.displayName = "Heading";
