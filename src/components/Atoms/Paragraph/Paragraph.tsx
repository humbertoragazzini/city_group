import { useAppContext } from "@/context/AppContext";
import { TextContent } from "../../../types/types";

interface iParagraph {
  text: TextContent[];
  type: string;
  theme?: string;
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
  return (
    <>
      {textContent[0] !== undefined && (
        <>
          {type == "body" && (
            <p className={`text-base ${className}`}>{textContent[0].content}</p>
          )}
          {type == "standfirst" && (
            <p className={`text-2xl sm:text-4xl mb-5 ${className}`}>
              {textContent[0].content}
            </p>
          )}
          {type == "standfirst2" && (
            <p className={`mb-5 text-lg sm:text-2xl ${className}`}>
              {textContent[0].content}
            </p>
          )}
        </>
      )}
    </>
  );
}

Paragraph.displayName = "Paragraph";
