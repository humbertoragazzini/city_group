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
import products from "./products.tsx";
import Pagination from "./paginator";
import Example from "./input";
import BeamContainer from "./input";
import ToggleWrapper from "./toggler";
import { ImFilter } from "react-icons/im";
import { LuPanelLeftClose } from "react-icons/lu";


export default function Catalogue() {
  const context = useAppContext();
  const [IDtoSearch, setIDtoSearch] = useState();
  const [wordToSearch, setWordtoSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [allTypes, setAlltypes] = useState();
  const [selected, setSelected] = useState("All");
  const [subSelected, setSubSelected] = useState("All");
  const resultContainerRef = useRef();
  const filtered = useFilteredProducts(
    products,
    wordToSearch,
    IDtoSearch,
    category,
    subCategory
  );
  const [sortedBy, setSortedBy] = useState(null);
  const [typeMode, setTypeMode] = useState("listItem");
  const [mode, setMode] = useState("dark");
  const [filterMenu, setFilterMenu] = useState(true)
  const [filterObj, setFilterObj] = useState({
    id: -1,
    name: "",
    category: [""],
    subCategory: [""],
  });

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
      className={`relative min-h-screen z-10 transition-all duration-1000 m-auto pt-[50px] bg-gradient-to-b ${mode == "dark"
        ? "from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,1)]"
        : "bg-[rgba(220,180,200,1)]"
        } w-full text-white`}
    >

      <div className="w-full">
        <div className="relative">
          {/* <BeamContainer mode={mode}> */}
          <motion.button animate={{
            x: filterMenu ? -255 : 0,
            opacity: filterMenu ? 0 : 1
          }} className="w-[55px] h-[55px] ml-4 [&>svg]:fill-white rounded-full flex justify-center items-center p-2 m-0 fixed top-3 z-[50]" onClick={() => { setFilterMenu(!filterMenu) }}>
            <ImFilter className="w-full h-full z-[60]" />
          </motion.button>
          <motion.div
            animate={{
              x: filterMenu ? 0 : "-100%",
              opacity: filterMenu ? 1 : 0
            }}
            className={`absolute w-fit h-screen flex justify-end top-[-50px] backdrop-blur-xl ${mode == "dark" ? "bg-[rgba(60,15,60,0.55)] text-white" : "bg-[rgba(255,255,255,0.25)] text-black"
              } p-9 rounded-br-2xl rounded-tr-2xl shadow-xl z-[40]`}>
            <div className="w-full flex flex-col justify-start items-start p-8">
              <button onClick={() => { setFilterMenu(!filterMenu) }} className="w-[55px] h-[55px] rounded-full absolute right-0 top-0 m-4 p-3"><LuPanelLeftClose className="w-full h-full"></LuPanelLeftClose></button>
              <div className="mb-4"><p className="mb-2">Toggle dark mode</p> <ToggleWrapper mode={mode} setMode={setMode}></ToggleWrapper></div>
              <div className="mb-4">
                <p className="mb-2">Toggle view</p>
                <button onClick={(e) => {
                  if (typeMode == "card") {
                    setTypeMode("listItem")
                  } else {
                    setTypeMode("card")
                  }
                }} className={`rounded-full px-[4px] w-14 h-8 bg-slate-300 flex ${typeMode == "card" ? "justify-start" : "justify-end"} items-center`}>
                  <div className="w-[30px] h-[30px] bg-slate-500 rounded-full">

                  </div>
                </button></div>
              <div
                className={`flex justify-start xl:justify-center items-center font-semibold mb-4 rounded-lg`}
              >
                <label className="mr-2">ID:</label>
                <input
                  onKeyUp={(e) => {
                    setIDtoSearch(e.currentTarget.value);
                  }}
                  className="bg-transparent flex justify-center items-center p-2"
                  placeholder="Search by ID"
                ></input>
              </div>
              <div
                className={`flex justify-start xl:justify-center items-center font-semibold mb-4 rounded-lg`}
              >
                <label className="mr-2 text-nowrap">By name:</label>
                <input
                  onKeyUp={(e) => {
                    setWordtoSearch(e.currentTarget.value);
                  }}
                  className="bg-transparent flex justify-center items-center p-2"
                  placeholder="Search by word"
                ></input>
              </div>
              <div
                className={`flex justify-start xl:justify-center items-center font-semibold mb-4 py-2 rounded-lg`}
              >
                <label className="mr-2">By category:</label>
                {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by type"> */}
                <DropdownMenu
                  category={category}
                  setCategory={setCategory}
                  selected={selected}
                  setSelected={setSelected}
                  types={products}
                  products={products}
                  type="category"
                ></DropdownMenu>
              </div>
              <div
                className={`flex justify-start xl:justify-center items-center font-semibold mb-4 py-2 rounded-lg`}
              >
                <label className="mr-2">By subcategory:</label>
                {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by type"> */}
                <DropdownMenu
                  category={subCategory}
                  setCategory={setSubCategory}
                  selected={subSelected}
                  filtered={filtered}
                  setSelected={setSubSelected}
                  types={products}
                  products={products}
                ></DropdownMenu>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section with us and the description */}
        <motion.div
          animate={{
            filter: filterMenu ? "blur(5px)" : ""
          }}
          ref={resultContainerRef}
          className="w-full max-w-[1450px] mx-auto flex flex-col justify-start items-center overflow-hidden relative"
        >
          <div className="grid w-full grid-cols-1 p-4 lg:p-8">
            <div className={`rounded-xl shadow-xl ${mode == "dark" ? "bg-[#F0F8FF] border-1 border-slate-800" : "bg-white border-1 border-slate-300"} p-9`} >
              {typeMode !== "card" && (
                <button className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-2 rounded-xl cursor-pointer w-full transition-all duration-300">
                  <div
                    className={`col-span-3 md:col-span-2 p-2 border-r-2 ${mode == "dark"
                      ? "text-white border-[rgba(255,255,255,0.5)]"
                      : "text-black border-[rgba(150,150,150,0.5)]"
                      }`}
                  >
                    <div className="flex justify-center items-center">
                      <p className="font-bold w-full text-center">ID</p>
                    </div>
                  </div>
                  <div
                    className={`col-span-3 md:col-span-6 p-2 border-r-2 ${mode == "dark"
                      ? "text-white border-[rgba(255,255,255,0.5)]"
                      : "text-black border-[rgba(150,150,150,0.5)]"
                      }`}
                  >
                    <div className="flex justify-center items-center">
                      <p className="font-bold w-full text-left">Name</p>
                    </div>
                  </div>
                  <div
                    className={`col-span-3 md:col-span-3 p-2 border-r-2 ${mode == "dark"
                      ? "text-white border-[rgba(255,255,255,0.5)]"
                      : "text-black border-[rgba(150,150,150,0.5)]"
                      }`}
                  >
                    <div className="flex justify-center items-center">
                      <p className="font-bold w-full text-center">Category</p>
                    </div>
                  </div>
                  <div
                    className={`col-span-3 md:col-span-1 p-2 border-r-2 ${mode == "dark"
                      ? "text-white border-[rgba(255,255,255,0.5)]"
                      : "text-black border-[rgba(150,150,150,0.5)]"
                      }`}
                  >
                    <div className="flex justify-center items-center">
                      <p className="font-bold w-full text-center">Stock</p>
                    </div>
                  </div>
                </button>
              )}
              <Pagination
                items={filtered}
                mode={mode}
                type={typeMode}
              ></Pagination>
            </div>
          </div>
        </motion.div>
      </div >
    </div >
  );
}

Catalogue.displayName = "Catalogue";

function DropdownMenu({
  category,
  setCategory,
  types,
  selected,
  products,
  setSelected,
  type,
  filtered,
}: any) {
  console.log(category);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(
    type == "category"
      ? [...new Set(products.map(({ category }) => category))]
      : [...new Set(filtered.map(({ subcategory }) => subcategory))]
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setCategory(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (type !== "category") {
      setOptions([...new Set(filtered.map(({ subcategory }) => subcategory))]);
    }
  }, [filtered]);

  return (
    <div className="relative min-w-[150px]">
      <button onClick={toggleDropdown}>{selected || "Select an option"}</button>

      {isOpen && (
        <ul className="z-20 px-4 py-2 top-0 left-0 h-[300px] w-fit rounded-md absolute backdrop-blur-xl overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-thumb-rounded">
          <li
            key={-1}
            onClick={() => handleSelect("All")}
            style={{ cursor: "pointer" }}
          >
            {"All"}
          </li>
          {options !== undefined &&
            options.map((option, index) => (
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
