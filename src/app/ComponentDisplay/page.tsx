"use client";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";

const buttonThemes = [
  {
    bg: "bg-deepBlack",
    text: "text-yellowBright",
    hover: "hover:bg-yellowBright hover:text-deepBlack",
  },
  { bg: "bg-red", text: "text-white", hover: "hover:bg-white hover:text-red" },
  {
    bg: "bg-plum",
    text: "text-white",
    hover: "hover:bg-white hover:text-plum",
  },
  {
    bg: "bg-burgundy",
    text: "text-white",
    hover: "hover:bg-white hover:text-burgundy",
  },
  {
    bg: "bg-white",
    text: "text-black",
    hover: "hover:bg-black hover:text-white",
  },
  {
    bg: "bg-lime",
    text: "text-black",
    hover: "hover:bg-black hover:text-lime",
  },
  {
    bg: "bg-yellowBright",
    text: "text-black",
    hover: "hover:bg-black hover:text-yellowBright",
  },
  {
    bg: "bg-graphite",
    text: "text-white",
    hover: "hover:bg-white hover:text-graphite",
  },
  {
    bg: "bg-black",
    text: "text-white",
    hover: "hover:bg-white hover:text-black",
  },
  {
    bg: "bg-rose",
    text: "text-white",
    hover: "hover:bg-white hover:text-rose",
  },
];

const paragraphThemes = [
  {
    bg: "bg-deepBlack",
    text: "text-yellowBright",
  },
  {
    bg: "bg-plum",
    text: "text-white",
  },
  {
    bg: "bg-burgundy",
    text: "text-white",
  },
  {
    bg: "bg-white",
    text: "text-black",
  },
  {
    bg: "bg-lime",
    text: "text-black",
  },
  {
    bg: "bg-yellowBright",
    text: "text-black",
  },
  {
    bg: "bg-graphite",
    text: "text-white",
  },
  {
    bg: "bg-black",
    text: "text-white",
  },
  {
    bg: "bg-rose",
    text: "text-white",
  },
];

const paragraphSizes = [
  {
    type: "body",
  },
  {
    type: "standfirst",
  },
  {
    type: "standfirst2",
  },
  {
    type: "standfirst3",
  },
  {
    type: "standfirst4",
  },
];
const headingLevel = [
  {
    level: 1,
  },
  {
    level: 2,
  },
  {
    level: 3,
  },
  {
    level: 4,
  },
  {
    level: 5,
  },
  {
    level: 6,
  },
];

export default function ComponentDisplay() {
  return (
    <div className="p-6 bg-white">
      <hr className="mt-10 mb-6 border-4 border-black"></hr>
      <h1 className="mb-6 text-3xl font-bold">BUTTONS</h1>

      <h2 className="mt-8 mb-4 text-xl font-bold">With text</h2>
      {/* Full-Width Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {buttonThemes.map(({ bg, text, hover }, index) => (
          <button
            key={index}
            className={`${text} text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl px-6 ${hover} ${bg} m-2`}
          >
            <Paragraph
              type="body"
              className="font-semibold"
              text={[
                { language: "EN", content: "Button with icon" },
                { language: "ES", content: "Botón con icono" },
                { language: "CH", content: "按钮与图标" },
                { language: "IT", content: "Pulsante con icona" },
              ]}
            />
            <FiArrowUpRight className="inline w-6 h-6 ml-3" />
          </button>
        ))}
      </div>

      <h2 className="mt-8 mb-4 text-xl font-bold">Icon only</h2>

      {/* Icon-Only Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {buttonThemes.map(({ bg, text, hover }, index) => (
          <button
            key={`icon-${index}`}
            className={`${text} text-xl h-[70px] w-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full shadow-xl ${hover} ${bg} m-2`}
          >
            <FiArrowUpRight className="inline w-6 h-6" />
          </button>
        ))}
      </div>

      <hr className="mt-10 mb-6 border-4 border-black"></hr>
      <h1 className="mb-6 text-3xl font-bold">HEADINGS</h1>
      <div className="">
        {headingLevel.map(({ level }, indexA) => {
          return (
            <div
              className="flex flex-col items-start justify-start my-4"
              key="indexA"
            >
              <h1 className="text-xl">Heading level {level}</h1>
              {paragraphThemes.map(({ bg, text }, index) => (
                <Heading
                  key={index}
                  level={level}
                  className={`${text} z-0 transition-all duration-500 ${bg}`}
                  text={[
                    {
                      language: "EN",
                      content: "Retail (Ingles)",
                    },
                    {
                      language: "ES",
                      content:
                        "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                    },
                    {
                      language: "CH",
                      content: "进口、建筑和零售的综合解决方案 (Chino)",
                    },
                    {
                      language: "IT",
                      content:
                        "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                    },
                  ]}
                ></Heading>
              ))}
            </div>
          );
        })}
      </div>
      <hr className="mt-10 mb-6 border-4 border-black"></hr>
      <h1 className="mb-6 text-3xl font-bold">PARAGRAPH</h1>
      <div className="">
        {paragraphSizes.map(({ type }, indexA) => {
          return (
            <div
              className="flex flex-col items-start justify-start my-4"
              key="indexA"
            >
              <h1 className="text-xl">{type}</h1>{" "}
              {paragraphThemes.map(({ bg, text }, index) => (
                <Paragraph
                  type={type}
                  key={index}
                  className={`${text} z-0 transition-all duration-500 ${bg}`}
                  text={[
                    {
                      language: "EN",
                      content: "Retail (Ingles)",
                    },
                    {
                      language: "ES",
                      content:
                        "Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
                    },
                    {
                      language: "CH",
                      content: "进口、建筑和零售的综合解决方案 (Chino)",
                    },
                    {
                      language: "IT",
                      content:
                        "Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
                    },
                  ]}
                ></Paragraph>
              ))}
            </div>
          );
        })}
      </div>
      <hr className="mt-10 mb-6 border-4 border-black"></hr>
      <h1 className="mb-6 text-3xl font-bold">CONTAINERS</h1>
      <div className="relative w-[500px] h-[350px]">
        <div className="relative w-full h-full bg-red"></div>
      </div>
    </div>
  );
}
