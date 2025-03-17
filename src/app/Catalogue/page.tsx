"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
import React from "react";
import Heading from "@/components/Atoms/Heading/Heading";
import { FiArrowUpRight } from "react-icons/fi";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import CardCarousel from "@/components/molecules/Carousels/CardCarousel";
import { motion } from "framer-motion";
export default function Catalogue() {
  const context = useAppContext();

  useEffect(() => {
    if (context.state.isMenuOpen) {
      const scrollPosition = window.pageYOffset;
      window.onscroll = () => {
        window.scrollTo(0, scrollPosition);
      };
    } else {
      window.onscroll = null;
    }
  }, [context.state.isMenuOpen]);

  return (
    <div
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white`}
    >
      {/* Section with us and the description */}
      <div className="w-full min-h-screen py-24 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid w-full grid-cols-1 p-4 lg:p-8">
          <div className="col-span-1">
            <div className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-4 mt-2 rounded-xl w-fulltransition-all duration-300">
              <div className="col-span-1 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
                <p className="font-bold w-full text-center">ID</p>
              </div>
              <div className="col-span-8 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
                <p className="font-bold w-full text-left">Product name</p>
              </div>
              <div className="col-span-2 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
                <p className="font-bold w-full text-center">Type</p>
              </div>
              <div className="col-span-1 p-4">
                <p className="font-bold w-full text-center">Stock</p>
              </div>
            </div>
          </div>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    </div>
  );
}

Catalogue.displayName = "Catalogue";

function Item() {

  const [enable, setEnable] = useState(false)

  return (
    <div className={`relative col-span-1 rounded-xl ${enable ? "border-4 border-[rgba(255,255,255,0.35)] mt-3 mb-3 p-8" : "border-3 border-[rgba(255,255,255,0)] mt-2 bg-transparent"} transition-all duration-500`}>
      <button onClick={e => setEnable(!enable)} className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-4 bg-[rgba(255,255,255,0.2)] rounded-xl cursor-pointer w-full hover:bg-[rgba(255,255,255,0.30)] transition-all duration-300">
        <div className="col-span-1 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
          <p className="font-bold w-full text-center">45</p>
        </div>
        <div className="col-span-8 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
          <p className="font-bold w-full text-left">Camara 4K/Wfif Zoom 200x</p>
        </div>
        <div className="col-span-2 p-4 border-r-2 border-[rgba(255,255,255,0.5)]">
          <p className="font-bold w-full text-center">Camara</p>
        </div>
        <div className="col-span-1 p-4">
          <p className="font-bold w-full text-center">50</p>
        </div>
      </button>
      <motion.div animate={{ height: !enable ? "0px" : "auto", marginTop: !enable ? "0px" : "8px" }} className="z-0 grid grid-cols-1 w-full overflow-hidden">
        <div className="col-span-1">
          <motion.div className="z-0 top-0 left-0 grid grid-cols-2 w-full backdrop-blur-md p-8 bg-[rgba(255,255,255,0.2)] rounded-xl">
            <div className="col-span-2 lg:col-span-1 p-8">
              <div className="w-full border-b-2 border-[rgba(255,255,255,0.5)] mb-4">
                <h1 className="text-2xl pb-2">Camara de seguridad 1080P/4k</h1>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Model: </div>
                <div className="text-xl">La super poderosa</div>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Tech specs: </div>
                <ul className="list-disc pl-6">
                  <li><div className="text-lg">1080P</div></li>
                  <li><div className="text-lg">WIFI 7</div></li>
                  <li><div className="text-lg">UP TO 128GB STORAGE</div></li>
                  <li><div className="text-lg">CLOUD STORAGE</div></li>
                  <li><div className="text-lg">ZOOM 400X OPTICAL</div></li>
                  <li><div className="text-lg">120MP SENSOR</div></li>
                </ul>
              </div>
              <div className="w-fit mb-3">
                <div className="font-bold text-xl">Description: </div>
                <div className="text-lg">Lorem Ipsum is simply...</div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 p-8">
              <CardCarousel></CardCarousel>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}