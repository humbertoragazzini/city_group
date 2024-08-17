import Heading from "@/components/Atoms/Heading/Heading";
import Parallax from "../../FramerAnimations/Parallax";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

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

interface iSection {
  heading: Text;
  content: Text;
  marke: Text;
}

export default function SectionR({ heading, content, marke }: iSection) {
  const context = useAppContext();
  return (
    <div className="hidden lg:grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div className="relative h-full col-span-1 z-10">
        <Parallax
          type={"contentHV"}
          start={-0.5}
          end={0.5}
          valueYStart={"0%"}
          valueYEnd={"0%"}
          valueXStart={"-100%"}
          valueXEnd={"0%"}
          className={"h-screen w-[50vw] right-0"}
        >
          <div className="absolute min-h-[100vh] min-w-[60vw] right-0 -skew-x-12 overflow-hidden">
            <Image
              src={"/img/import_export.jpg"}
              width={1920}
              height={1080}
              alt="some text"
              className="absolute min-h-[100vh] min-w-[160vh] top-0 -right-[25vw] skew-x-12"
            ></Image>
          </div>
        </Parallax>
        <Parallax
          type={"contentHV"}
          start={-0.5}
          end={0.5}
          valueYStart={"0%"}
          valueYEnd={"0%"}
          valueXStart={"-100%"}
          valueXEnd={"0%"}
          className={
            "block lg:hidden w-[100vw] h-screen justify-center items-end right-0"
          }
        >
          <div className="absolute h-screen w-full flex justify-end items-center">
            <div className="right-0 overflow-hidden bg-red-100 mr-[60px] w-[65%] p-5">
              <Heading
                text={[
                  {
                    language: "EN",
                    content: "Imports and Exports",
                  },
                  {
                    language: "ES",
                    content: "Importaciones y Exportaciones",
                  },
                ]}
                level={3}
                className="text-white pb-8 drop-shadow-xl"
              ></Heading>

              <p className="text-white pb-8 drop-shadow-xl">
                In our Import Division, we traverse the globe to source the
                finest materials and products. Our extensive network of
                international suppliers ensures that we deliver unparalleled
                quality and innovation. We bring the world's best to your
                doorstep, tailored to meet the unique demands of your projects.
              </p>
            </div>
          </div>
        </Parallax>

        <Marke marke={marke}></Marke>
      </div>
      <div className="hidden lg:grid relative col-span-1 lg:col-span-1 gap-2 h-full w-full z-0">
        <Parallax
          type={"contentHV"}
          start={-0.5}
          end={0.5}
          valueYStart={"0%"}
          valueYEnd={"0%"}
          valueXStart={"100%"}
          valueXEnd={"0%"}
          className={"h-screen w-[60vw] rigth-0"}
        >
          <div className="absolute top-0 left-0 col-span-2 h-screen w-[60vw] p-12 bg-[rgba(107,1,66,0.75)] backdrop-blur-sm -skew-x-12 flex justify-start items-center">
            <div className="w-[40vw] skew-x-12 text-right">
              <Heading
                text={heading}
                level={3}
                className="text-yellowBright pb-8 drop-shadow-xl"
              ></Heading>

              <Paragraph
                text={content}
                type={"body"}
                className="text-yellowBright pb-8 drop-shadow-xl"
              ></Paragraph>
              <div className="w-full flex justify-end items-center">
                <Link
                  href="/"
                  className={`text-black text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] mr-4 shadow-xl hover:bg-[#13212B] px-6 bg-lime`}
                >
                  Learn more <FiArrowUpRight className="inline" />
                </Link>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

function Marke({ marke }: any) {
  const context = useAppContext();

  const filterLanguage = () => {
    return marke.filter(
      (text: any) => text.language === context.state.language
    );
  };

  const textContent = filterLanguage();

  console.log(textContent);
  return (
    <Parallax type={"textV"} start={0} end={1} className={"left-0"}>
      <span className="lg:py-40 text-[75px] lg:text-[150px] drop-shadow-md">
        {textContent[0].content}
      </span>
    </Parallax>
  );
}
