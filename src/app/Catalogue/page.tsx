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
import products from "./products.tsx"
import Pagination from "./paginator";
export default function Catalogue() {
  const context = useAppContext();
  const [IDtoSearch, setIDtoSearch] = useState();
  const [wordToSearch, setWordtoSearch] = useState("");
  const [category, setCategory] = useState("");
  const [allTypes, setAlltypes] = useState();
  const [selected, setSelected] = useState("All");
  const resultContainerRef = useRef();
  const filtered = useFilteredProducts(products, wordToSearch, IDtoSearch, category);

  const [filterObj, setFilterObj] = useState({
    id: -1,
    name: "",
    category: [""],
    subCategory: [""]
  })

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
      <div className="w-full flex justify-center items-bcenter p-8"><h1 className="text-3xl font-bold">Filter</h1></div>
      <div className="bg-[rgba(255,255,255,0.2)] rounded-xl m-4 lg:mx-8 p-4 grid grid-cols-4">
        <div className="col-span-4 md:col-span-2 xl:col-span-1 px-5 py-3 flex justify-start xl:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By ID:</label>
          <input onKeyUp={(e) => { setIDtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by ID">
          </input>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 px-5 py-3 flex justify-start xl:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By name:</label>
          <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by word">
          </input>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 px-5 py-3 flex justify-start xl:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By category:</label>
          {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by type"> */}
          <DropdownMenu category={category}
            setCategory={setCategory} selected={selected}
            setSelected={setSelected} types={products} products={products}></DropdownMenu>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 px-5 py-3 flex justify-start xl:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By subcategory:</label>
          {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by type"> */}
          <DropdownMenu category={category}
            setCategory={setCategory} selected={selected}
            setSelected={setSelected} types={products} products={products}></DropdownMenu>
        </div>
      </div>
      {/* Section with us and the description */}
      <div ref={resultContainerRef} className="w-full min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] flex flex-col justify-start items-center overflow-hidden relative">
        <div className="grid w-full grid-cols-1 p-4 lg:p-8">
          <button className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-2 rounded-xl cursor-pointer w-full transition-all duration-300">
            <div className="col-span-3 md:col-span-2 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">ID</p>
              </div>
            </div>
            <div className="col-span-9 p-2 md:col-span-6 md:border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-left">Name</p>
              </div>
            </div>
            <div className="col-span-4 hidden p-2 md:block md:col-span-3 md:border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">Type</p>
              </div>
            </div>
            <div className="col-span-1 hidden lg:block md:grid p-2">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">Stock</p>
              </div>
            </div>
          </button>
          <Pagination items={filtered}></Pagination>

        </div>
      </div>
    </div>
  );
}

Catalogue.displayName = "Catalogue";

function DropdownMenu({ category,
  setCategory, types, selected, products,
  setSelected }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([...new Set(products.map(({ type }) => type))])


  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setCategory(option)
    setIsOpen(false);
  };


  return (
    <div className="relative">
      <button onClick={toggleDropdown}>
        {selected || "Select an option"}
      </button>

      {isOpen && (
        <ul className="z-20 px-4 py-2 top-0 left-0 h-[300px] w-fit rounded-md absolute backdrop-blur-xl overflow-y-scroll overflow-x-hidden">
          <li
            key={-1}
            onClick={() => handleSelect("All")}
            style={{ cursor: "pointer" }}
          >
            {"All"}
          </li>
          {options !== undefined && options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={{ cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
