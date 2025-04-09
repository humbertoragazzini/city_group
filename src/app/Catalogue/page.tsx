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
import MainContainer from "./mainContainer";
import ContainerNeum from "./ContainerNeum";
import ButtonNeum from "./Button";
import { FiGrid, FiList } from "react-icons/fi";


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
  const [mode, setMode] = useState("light");
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

    <MainContainer>

      <div className="w-full">
        {/* Section with us and the description */}
        <motion.div
          ref={resultContainerRef}
          className="mt-[90px] w-full px-11 mx-auto flex flex-col justify-start items-center overflow-hidden relative"
        >
          <div className="grid w-full grid-cols-12">
            <div className="col-span-3 p-9">
              <ContainerNeum>
                <div className="relative z-10 grid grid-cols-12 full backdrop-blur-md rounded-xl w-full transition-all duration-300 mb-4">
                  <div className={`col-span-12 mb-4 pb-3 pt-4`}>
                    <p className="text-2xl">Filters:</p>
                  </div>
                  <div className={`col-span-12 mb-3`}>
                    <div
                      className={`flex justify-start items-center font-semibold rounded-lg`}
                    >
                      <label className="mr-2">ID:</label>
                      <input
                        onKeyUp={(e) => {
                          setIDtoSearch(e.currentTarget.value);
                        }}
                        className="bg-transparent flex justify-center items-center"
                        placeholder="Search by ID"
                      ></input>
                    </div>
                  </div>
                  <div className={`col-span-12 mb-3`}>
                    <div
                      className={`flex justify-start items-center font-semibold rounded-lg`}
                    >
                      <label className="mr-2 text-nowrap">By name:</label>
                      <input
                        onKeyUp={(e) => {
                          setWordtoSearch(e.currentTarget.value);
                        }}
                        className="bg-transparent flex justify-center items-center"
                        placeholder="Search by word"
                      ></input>
                    </div>
                  </div>
                  <div className={`col-span-12 mb-3`}>
                    <div
                      className={`flex justify-start items-center font-semibold rounded-lg`}
                    >
                      <label className="mr-2">By category:</label>
                      {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center" placeholder="Search by type"> */}
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
                  </div>
                  <div className={`col-span-12 mb-3`}>
                    <div
                      className={`flex items-center font-semibold rounded-lg`}
                    >
                      <label className="mr-2">By subcategory:</label>
                      {/* <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center" placeholder="Search by type"> */}
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
                </div>
              </ContainerNeum>
            </div>
            <div className={`col-span-9 ${mode == "dark" ? "" : ""} p-9`} >

              <div className="relative px-6 flex justify-start items-center mb-6 md:hidden">
                {/* <BeamContainer mode={mode}> */}
                <motion.button animate={{
                  scale: filterMenu == "filter" ? 1.2 : 1,
                }} className={`w-[100px] h-fit px-6 rounded-lg flex justify-center items-start p-3 m-0 z-[50] backdrop-blur-lg shadow-lg ${mode == "dark" ? "bg-[rgba(140,95,150,0.75)] [&>svg]:fill-black text-white" : "bg-white [&>svg]:fill-black text-black"}`} onClick={() => { setFilterMenu("filter") }}>
                  FILTERS
                </motion.button>
                <motion.button animate={{
                  scale: filterMenu == "settings" ? 1.2 : 1,
                }} className={`w-[100px] h-fit ml-4 px-6 rounded-lg flex justify-center items-start p-3 m-0 z-[50] backdrop-blur-lg shadow-lg ${mode == "dark" ? "bg-[rgba(140,95,150,0.75)] [&>svg]:fill-black text-white" : "bg-white [&>svg]:fill-black text-black"}`} onClick={() => { setFilterMenu("settings") }}>
                  Settings
                </motion.button></div>
              <div className="absolute left-0 w-full px-8 flex flex-col justify-start items-center md:hidden">
                <motion.div
                  animate={{
                    opacity: filterMenu == "settings" ? 1 : 0,
                    display: filterMenu == "settings" ? "" : "none"
                  }}
                  className={`w-full flex justify-center backdrop-blur-xl ${mode == "dark" ? "bg-[rgba(60,15,60,0.55)] text-white" : "bg-[rgba(255,255,255,0.1)] text-black"
                    } p-9 rounded-br-2xl rounded-xl shadow-xl z-[40]`}>
                  <div className="w-full flex justify-start items-start p-8">
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
                  </div>
                </motion.div>
              </div>
              <div className="absolute left-0 w-full px-8 flex flex-col justify-start items-center z-[999] md:hidden">
                <motion.div
                  animate={{
                    opacity: filterMenu == "filter" ? 1 : 0,
                    display: filterMenu == "filter" ? "" : "none"
                  }}
                  className={`w-full flex justify-center backdrop-blur-xl ${mode == "dark" ? "bg-[rgba(60,15,60,0.55)] text-white" : "bg-[rgba(255,255,255,0.1)] text-black"
                    } p-9 rounded-br-2xl rounded-xl shadow-xl z-[40]`}>
                  <div className="w-full flex justify-start items-start p-8">
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
              <div className="flex justify-end items-center">
                <ButtonNeum className={"relative !p-0 mb-4 w-[50px] h-[50px]"} onClick={() => setTypeMode(typeMode === "card" ? "listItem" : "card")}>
                  <motion.div
                    animate={{
                      opacity: typeMode === "card" ? 1 : 0
                    }}
                    className={"absolute top-[8px] left-[8px]"}
                  >
                    <FiList className="w-[35px] h-[35px]" /></motion.div>
                  <motion.div
                    animate={{
                      opacity: typeMode !== "card" ? 1 : 0
                    }}
                    className={"absolute top-[8px] left-[8px]"}
                  >
                    <FiGrid className="w-[35px] h-[35px]" /></motion.div>
                </ButtonNeum>
              </div>
              <Pagination
                items={filtered}
                mode={mode}
                type={typeMode}
              ></Pagination>
            </div>
          </div>
        </motion.div >
      </div >
    </MainContainer >
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
