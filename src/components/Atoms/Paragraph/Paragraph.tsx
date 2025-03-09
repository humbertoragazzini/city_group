import { useAppContext } from "@/context/AppContext";
import { TextContent } from "../../../types/types";

interface iParagraph {
  text: TextContent[];
  type: string;
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

export default function Paragraph({
  text,
  type,
  theme,
  className,
}: iParagraph) {
  const context = useAppContext();

  const filterLanguage = () => {
    return text.filter((text) => text.language === context.state.language);
  };

  const textContent = filterLanguage();

  let themeColor = "";

  switch (theme) {
    case "red":
      themeColor = "text-red";
      break;
    case "black":
      themeColor = "text-the-black";
      break;
    case "darkGrey":
      themeColor = "text-the-darkGrey";
      break;
    case "lightGrey":
      themeColor = "text-the-lightGrey";
      break;
    case "lightRed":
      themeColor = "text-the-lightRed";
      break;
    case "darkWhite":
      themeColor = "text-the-darkWhite";
      break;
    case "darkerGrey":
      themeColor = "text-the-darkerGrey";
      break;
    case "lightWhite":
      themeColor = "text-the-lightWhite";
      break;
    case "white":
      themeColor = "text-the-white";
      break;
    case "darkBlack":
      themeColor = "text-the-darkBlack";
      break;
    case "yellow":
      themeColor = "text-the-yellow";
      break;
    default:
      break;
  }

  return (
    <>
      {textContent[0] !== undefined && (
        <>
          {type == "body" && (
            <p
              dangerouslySetInnerHTML={{ __html: textContent[0].content }}
              className={`text-base ${className} ${themeColor}`}
            ></p>
          )}
          {type == "standfirst4" && (
            <p
              dangerouslySetInnerHTML={{ __html: textContent[0].content }}
              className={`text-3xl sm:text-4xl ${className} ${themeColor}`}
            ></p>
          )}
          {type == "standfirst3" && (
            <p
              dangerouslySetInnerHTML={{ __html: textContent[0].content }}
              className={`text-2xl sm:text-3xl ${className} ${themeColor}`}
            ></p>
          )}
          {type == "standfirst2" && (
            <p
              dangerouslySetInnerHTML={{ __html: textContent[0].content }}
              className={`text-xl sm:text-2xl ${className} ${themeColor}`}
            ></p>
          )}
          {type == "standfirst" && (
            <p
              dangerouslySetInnerHTML={{ __html: textContent[0].content }}
              className={`text-lg sm:text-xl ${className} ${themeColor}`}
            ></p>
          )}
        </>
      )}
    </>
  );
}

Paragraph.displayName = "Paragraph";
