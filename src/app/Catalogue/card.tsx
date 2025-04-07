//@ts-nocheck
"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import CardCarousel from "@/components/molecules/Carousels/CardCarousel";
import { AnimatePresence, motion } from "framer-motion";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import gsap from "gsap";
import { useFilteredProducts } from "./useFilteredProducts";
import Pagination from "./paginator";
import { FiCheck, FiX } from "react-icons/fi";
import ContainerNeum from "./ContainerNeum";
import ButtonNeum from "./Button";

export function Card({ product, index, mode }: any) {
  const [enable, setEnable] = useState(false);
  const [show, setShow] = useState(false);
  const itemRef = useRef();

  useLayoutEffect(() => {
    // gsap.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, delay: index / 10 })
  }, []);

  return (
    <div
      ref={itemRef}
      style={{ opacity: 1 }}
      className={`relative col-span-1 aspect-square rounded-xl transition-all duration-500 ${mode == "dark" ? "bg-gray-900" : "text-black"}`}
    >
      {/* <button
        onClick={(e) => setEnable(!enable)}
        className="relative z-10 grid grid-cols-12 full p-2 rounded-full  cursor-pointer w-full hover:bg-slate-800 transition-all duration-300"
      >
        <div className="col-span-3 md:col-span-2 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center h-full">
            <p className="font-bold w-full text-center">{product.id}</p>
          </div>
        </div>
        <div className="col-span-9 p-2 md:col-span-6 md:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center h-full">
            <p className="font-bold w-full text-left">{product.name}</p>
          </div>
        </div>
        <div className="col-span-4 hidden p-2 md:block md:col-span-3 md:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center h-full">
            <p className="font-bold w-full text-center">{product.category}</p>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block md:grid p-2">
          <div className="flex justify-center items-center h-full">
            {product.available ? <FiCheck className="w-[28px]"></FiCheck> : ""}
          </div>
        </div>
      </button> */}
      <div
        animate={{}}
        className="z-0 grid grid-cols-1 w-full"
      >
        <ButtonNeum className="col-span-1 h-full" onClick={(e) => { setShow(!show) }}>
          <div
            animate={{}}
            className="z-0 top-0 left-0 grid grid-cols-10 w-full lg:p-4"
          >
            <div className="col-span-10 p-3">
              <div className="w-full flex justify-center items-center">
                <img src="https://placehold.co/300x300"></img>
              </div>
            </div>
            <div className="col-span-10 px-3">
              <div className="w-full pb-1">
                <h1 className="text-xl text-left truncate">{product.name}</h1>
              </div>
            </div>
            <div className="col-span-10 px-3">
              <div className="w-fit flex justify-start">
                <div className="font-bold text-base text-left">Brand: </div>
                <div className="text-base pl-3">{product.brand}</div>
              </div>
            </div>
          </div>
        </ButtonNeum>
      </div>
      <AnimatePresence>
        {
          show && (
            <Modal product={product} setShow={setShow}
              show={show} mode={mode}></Modal>
          )

        }
      </AnimatePresence>
    </div>
  );
}


function Modal({ product, setShow, show, mode }: any) {



  return (
    <motion.div

      initial={{
        opacity: 0,
        display: "hidden"
      }}
      animate={{
        opacity: [0, 1],
        display: ["hidden", "flex"]
      }}
      exit={{
        opacity: [1, 0],
        display: ["flex", "hidden"]
      }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-lg z-[999] flex justify-center items-center ${mode == "dark" ? "bg-gray-900" : "text-black"}`} style={{ bottom: "100vh" }}>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: ["-100vh", 0],
        }}
        exit={{
          y: [0, "-100vh"],
          display: ["flex", "hidden"]
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="w-[75%] h-fit p-12 bg-white shadow-lg rounded-2xl relative">
        <button onClick={(e) => { setShow(!show) }} className="p-3 w-[55px] h-[55px] flex justify-center items-center rounded-full bg-red absolute right-0 top-0 m-3 text-white ">
          <FiX className="w-[35px] h-[35px]" />
        </button>
        <div className="grid grid-cols-10">
          <div className="col-span-10 px-3">
            <div className="w-fit flex justify-start">
              <div className="font-bold text-xl">Software: </div>
              <div className="text-xl pl-3">{product.software}</div>
            </div>
          </div>
          <div className="col-span-10 px-3">
            <div className="w-fit flex justify-start">
              <div className="font-bold text-xl">Specs: </div>
              <div className="text-xl pl-3">
                1080P / WIFI 7 / UP TO 128GB / STORAGE
              </div>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-5 p-3 lg:p-12">
            <div className="w-full border-b-2 border-[rgba(255,255,255,0.5)] mb-4">
              <h1 className="text-2xl pb-2">{product.name}</h1>
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
        </div>
      </motion.div>
    </motion.div>
  )
}