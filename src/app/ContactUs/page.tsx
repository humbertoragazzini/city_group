"use client";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
import { useAppContext } from "@/context/AppContext";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import Computer from "@/components/Organims/RTFAnimations/Mesh/Computer/Computer";
import ContactUsPC from "@/components/Organims/RTFAnimations/RTFAComponents/ContactUsPC/ContactUsPC";

export default function ContactUs() {
  const context = useAppContext();
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <SmoothScrollbar enabled={false}>
      {() => {
        return (
          <>
            <div className={"w-full h-full block"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium.
            </div>
            <div className={"w-full h-full block"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quaerat voluptas suscipit, nulla
              reprehenderit cumque, labore perferendis assumenda officiis nisi
              minus fuga eos? Dolorem ipsum facilis recusandae a similique
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quaerat voluptas suscipit, nulla reprehenderit
              cumque, labore perferendis assumenda officiis nisi minus fuga eos?
              Dolorem ipsum facilis recusandae a similique accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat voluptas suscipit, nulla reprehenderit cumque, labore
              perferendis assumenda officiis nisi minus fuga eos? Dolorem ipsum
              facilis recusandae a similique accusantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam quaerat voluptas
              suscipit, nulla reprehenderit cumque, labore perferendis assumenda
              officiis nisi minus fuga eos? Dolorem ipsum facilis recusandae a
              similique accusantium.
            </div>
          </>
        );
      }}
    </SmoothScrollbar>
  );
}

ContactUs.displayName = "ContactUs";
