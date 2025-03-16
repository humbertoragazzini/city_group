"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import React from "react";
import Heading from "@/components/Atoms/Heading/Heading";
import { FiArrowUpRight } from "react-icons/fi";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";

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
            <div className="grid grid-cols-2 w-full backdrop-blur-md p-5 bg-[rgba(255,255,255,0.2)]">
              <div className="col-span-1">
                <h1>Product name</h1>
                <h2>Product model</h2>
                <p>Description of the product</p>
              </div>
              <div className="col-span-1">
                <img src="https://placehold.co/300x300"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Catalogue.displayName = "Catalogue";
