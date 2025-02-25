import { useAppContext } from "@/context/AppContext";
import { TextContent } from "../../../types/types";

interface iHeading {
  text: TextContent[];
  level: number;
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

export default function Heading({ text, level, theme, className }: iHeading) {
  const context = useAppContext();

  const filterLanguage = () => {
    return text.filter((text) => text.language === context.state.language);
  };

  const textContent = filterLanguage();
  let themeColor = "";
  // TODO build themes
  switch (theme) {
    case "red":
      themeColor = "";
      break;
    case "black":
      themeColor = "";
      break;
    case "darkGrey":
      themeColor = "";
      break;
    case "lightGrey":
      themeColor = "";
      break;
    case "lightRed":
      themeColor = "";
      break;
    case "darkWhite":
      themeColor = "";
      break;
    case "darkerGrey":
      themeColor = "";
      break;
    case "lightWhite":
      themeColor = "";
      break;
    case "white":
      themeColor = "";
      break;
    case "darkBlack":
      themeColor = "";
      break;
    case "yellow":
      themeColor = "";
      break;
    default:
      break;
  }

  return (
    <>
      {textContent[0] !== undefined && (
        <>
          {level == 1 && (
            <h1
              className={`text-4xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h1>
          )}
          {level == 2 && (
            <h2
              className={`text-3xl sm:text-[70px] sm:leading-[70px] md:text-[75px] md:leading-[90px] lg:text-[75px] lg:leading-[90px]  font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h2>
          )}
          {level == 3 && (
            <h3
              className={`text-2xl sm:text-[60px] sm:leading-[65px] md:text-[65px] md:leading-[80px] lg:text-[65px] lg:leading-[80px] font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h3>
          )}
          {level == 4 && (
            <h4
              className={`text-xl sm:text-[55px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[60px] lg:leading-[70px] font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h4>
          )}
          {level == 5 && (
            <h5
              className={`text-lg sm:text-[50px] sm:leading-[55px] md:text-[55px] md:leading-[65px] lg:text-[55px] lg:leading-[65px] font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h5>
          )}
          {level == 6 && (
            <h6
              className={`text-5xl sm:text-[40px] sm:leading-[50px] md:text-[45px] md:leading-[55px] lg:text-[45px] lg:leading-[55px] font-semibold ${className} ${themeColor}`}
            >
              {textContent.length > 0 && <>{textContent[0].content}</>}
            </h6>
          )}
        </>
      )}
    </>
  );
}

Heading.displayName = "Heading";
