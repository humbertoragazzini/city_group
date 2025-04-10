//@ts-nocheck
"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import CardCarousel from "@/components/molecules/Carousels/CardCarousel";
import { motion } from "framer-motion";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import gsap from "gsap";
import { useFilteredProducts } from "./useFilteredProducts";
import Pagination from "./paginator";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import ButtonNeum from "./Button";

export function Item({ product, index, mode }: any) {
  const [enable, setEnable] = useState(false);
  const [show, setShow] = useState(true);
  const itemRef = useRef();

  useLayoutEffect(() => {
    console.log("pass")
    gsap.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, delay: index / 5 })
  }, []);

  return (
    <div
      ref={itemRef}
      style={{ opacity: 0 }}
      className={`relative col-span-1 transition-all duration-500 mb-3`}
    >
      <div
        onClick={(e) => setEnable(!enable)}
        className={`relative w-full z-10`}
      >
        <div className="flex justify-between items-center w-full h-full">
          <ButtonNeum className={"flex justify-between items-center w-[calc(100%-70px)] h-[55px]"}>
            <div className="p-2">
              <div className="flex justify-start items-center h-full">
                <p className="font-semibold w-full text-left">{product.id}</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-start items-center h-full">
                <p className="font-semibold w-full text-left">{product.name}</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-start items-center h-full">
                <p className="font-semibold w-full text-left">{product.category}</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-start items-center h-full">
                <div className={`${product.avaible ? "" : "opacity-0"} w-7 h-7 bg-green-400 flex justify-center items-center rounded-full`}><FiCheck className="w-[28px] stroke-black"></FiCheck></div>
              </div>
            </div>
          </ButtonNeum>
          <ButtonNeum
            onClick={(e) => setEnable(!enable)}
            className={"w-[55px] h-[55px] flex justify-center items-center !p-0"}
          >
            <motion.div animate={{
              rotateZ: enable ? "180deg" : "0deg"
            }}>
              <FiChevronDown className="relative inline w-[30px] h-[30px]" />
            </motion.div>
          </ButtonNeum>
        </div>
      </div>

      <motion.div
        animate={{
          height: !enable ? "0px" : "auto",
          marginTop: !enable ? "0px" : "8px",
        }}
        className="z-0 h-[0px] grid grid-cols-1 w-full overflow-hidden"
      >
        <div className="col-span-1">
          <motion.div
            animate={{ opacity: !enable ? "0" : "1" }}
            className={`z-0 top-0 left-0 grid grid-cols-10 w-full ${mode == "dark" ? "text-[#D6EFFF]" : "text-[#37474F]"}`}
          >
            <div className="col-span-10 lg:col-span-5 p-3 lg:p-12">
              <div className={`w-full border-b-2 ${mode == "dark" ? "text-[#D6EFFF] border-[rgba(255,255,255,0.5)]" : "text-[#37474F] border-[#37474F]"} mb-4`}>
                <h1 className="text-2xl pb-2">Camara de seguridad 1080P/4k</h1>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Brand: </div>
                <div className="text-xl">{product.brand}</div>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Software: </div>
                <div className="text-xl">{product.software}</div>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Category: </div>
                <div className="text-xl">{product.category}</div>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Sub-category: </div>
                <div className="text-xl">{product.subcategory}</div>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Tech specs: </div>
                <ul className="list-disc pl-6">
                  <li>
                    <div className="text-lg">1080P</div>
                  </li>
                  <li>
                    <div className="text-lg">WIFI 7</div>
                  </li>
                  <li>
                    <div className="text-lg">UP TO 128GB STORAGE</div>
                  </li>
                </ul>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Description: </div>
                <div className="text-lg">Lorem Ipsum is simply...</div>
              </div>
            </div>
            <div className="col-span-10 lg:col-span-5 lg:p-8">
              <div className="w-full">
                <CardCarousel></CardCarousel>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
