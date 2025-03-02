//@ts-nocheck
"use client";
import AngledContainer from "@/components/Atoms/Containers/AngledContainer";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";
import TextButton from "@/components/Atoms/Buttons/TextButton";
import IconButton from "@/components/Atoms/Buttons/IconButton";
const themes = [
  "deepBlack",
  "plum",
  "burgundy",
  "white",
  "lime",
  "yellowBright",
  "graphite",
  "black",
  "rose",
];
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
    <div className="p-6">
      <hr className="mt-10 mb-6 border-4 border-black"></hr>
      <h1 className="mb-6 text-3xl font-bold">BUTTONS</h1>
      <h2 className="mt-8 mb-4 text-xl font-bold">With text</h2>
      {/* Full-Width Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {themes.map((theme, index) => (
          <div key={"with-text" + index}>
            <TextButton
              themeName={theme}
              text={[
                { language: "EN", content: "Button with icon" },
                { language: "ES", content: "Botón con icono" },
                { language: "CH", content: "按钮与图标" },
                { language: "IT", content: "Pulsante con icona" },
              ]}
              href={"#"}
            ></TextButton>
          </div>
        ))}
      </div>
      <h2 className="mt-8 mb-4 text-xl font-bold">Icon only</h2>
      {/* Icon-Only Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {themes.map((theme, index) => (
          <IconButton
            key={"buttons-" + index}
            themeName={theme}
            href={"#"}
          ></IconButton>
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
              <Heading
                level={level}
                className={`z-0 transition-all duration-500`}
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
      <h1 className="mb-6 text-3xl font-bold">CONTAINERS</h1>{" "}
      <div
        className="flex flex-col items-start justify-start px-4 py-4"
        key="indexA"
      >
        {themes.map((theme, index) => (
          <AngledContainer key={"angled" + index} themeName={theme}>
            <div
              className="flex flex-col items-start justify-start my-4"
              key="indexA"
            >
              <Heading
                level={3}
                className={`z-0 transition-all mb-6 duration-500`}
                text={[
                  {
                    language: "EN",
                    content: "Heading (Ingles)",
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
              <Paragraph
                type={"body"}
                className="mb-4"
                text={[
                  {
                    language: "EN",
                    content: "Paragraph regular text component (Ingles)",
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
              <TextButton
                href={"#"}
                text={[
                  {
                    language: "EN",
                    content: "Paragraph regular text component (Ingles)",
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
              ></TextButton>
            </div>
          </AngledContainer>
        ))}
      </div>
    </div>
  );
}
