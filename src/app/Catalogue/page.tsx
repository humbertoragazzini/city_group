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
import { FaCheckSquare } from "react-icons/fa";
import { IoChevronDown, IoSearch } from "react-icons/io5";


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
  const [order, setOrder] = useState(true)
  const [isStockA, setIsStockA] = useState(true)
  const filtered = useFilteredProducts(
    products,
    wordToSearch,
    IDtoSearch,
    category,
    subCategory,
    order,
    isStockA,
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
      <div className="w-full mt-[90px]">
        {/* Section with us and the description */}
        <motion.div
          ref={resultContainerRef}
          className="relative flex flex-col items-center justify-start w-full p-4 overflow-hidden"
        >
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-4">
              <ContainerNeum className={"mb-5 !p-5"}>
                <div className="relative z-10 w-full grid grid-cols-12 full rounded-xl transition-all duration-300">
                  <div className={`col-span-12`}>
                    <p className="mb-3 text-2xl">Filters:</p>
                  </div>
                  <div className={`col-span-12`}>
                    <div
                      className={`flex justify-start items-center font-semibold rounded-lg`}
                    >
                      <label className="mr-2">ID:</label>
                      <input
                        onKeyUp={(e) => {
                          setIDtoSearch(e.currentTarget.value);
                        }}
                        className="flex items-center justify-center bg-transparent"
                        placeholder="Search by ID"
                      ></input>
                    </div>
                  </div>
                </div>
              </ContainerNeum>
              <ContainerNeum className={"mb-5 !p-5"}>
                <div className="relative z-10 w-full grid grid-cols-12 full rounded-xl transition-all duration-300">
                  <div className={`col-span-12`}>
                    <div
                      className={`flex flex-col justify-start items-start font-semibold rounded-lg`}
                    >
                      <label className="mr-2">By category:</label>
                      <Selectors
                        category={category}
                        setCategory={setCategory}
                        selected={selected}
                        setSelected={setSelected}
                        types={products}
                        products={products}
                        type="category"
                      ></Selectors>
                    </div>
                  </div>
                </div>
              </ContainerNeum>
              <ContainerNeum className={"!p-5"}>
                <div className="relative z-10 w-full grid grid-cols-12 full rounded-xl transition-all duration-300">
                  <div className={`col-span-12`}>
                    <div
                      className={`flex flex-col justify-start items-start font-semibold rounded-lg`}
                    >
                      <label className="mr-2">By subcategory:</label>
                      <Selectors
                        category={subCategory}
                        setCategory={setSubCategory}
                        selected={subSelected}
                        filtered={filtered}
                        setSelected={setSubSelected}
                        types={products}
                        products={products}
                      ></Selectors>
                    </div>
                  </div>
                </div>
              </ContainerNeum>
            </div>
            <div className={`col-span-12 lg:col-span-8`} >
              <div className="absolute left-0 flex flex-col items-center justify-start w-full px-8 md:hidden">
                <motion.div
                  animate={{
                    opacity: filterMenu == "settings" ? 1 : 0,
                    display: filterMenu == "settings" ? "" : "none"
                  }}
                  className={`w-full flex justify-center backdrop-blur-xl ${mode == "dark" ? "bg-[rgba(60,15,60,0.55)] text-white" : "bg-[rgba(255,255,255,0.1)] text-black"
                    } p-9 rounded-br-2xl rounded-xl shadow-xl z-[40]`}>
                  <div className="flex items-start justify-start w-full p-8">
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
              <div className="items-center justify-end hidden mb-5 lg:flex">
                <ButtonNeum className={"relative flex justify-between items-center !p-4 mr-4 w-[calc(100%-295px)] h-[55px]"} onClick={() => { return "" }}>
                  <input
                    onKeyUp={(e) => {
                      setWordtoSearch(e.currentTarget.value);
                    }}
                    className="flex items-center justify-center bg-transparent focus:outline-none"
                    placeholder="Search by word"
                  ></input>
                  <div
                    className={""}
                  >
                    <IoSearch className="w-[25px] h-[25px]" /></div>
                </ButtonNeum>
                <ButtonNeum className={"relative !p-4 mr-4 w-[155px] h-[55px] flex justify-between items-center"} onClick={() => setIsStockA(!isStockA)}>
                  <p className="relative top-[2px]">Stock only</p>
                  <motion.div
                    animate={{
                      opacity: isStockA ? 1 : 0
                    }}
                    className={""}
                  >
                    <FaCheckSquare className="w-[20px] h-[20px]" /></motion.div>
                </ButtonNeum>
                <ButtonNeum className={"relative flex justify-center items-center !p-0 mr-4 w-[55px] h-[55px]"}
                  onClick={() => setOrder(!order)}>
                  <motion.div
                    animate={{
                      opacity: order ? 1 : 0,
                    }}
                    className={"absolute top-[14px] left-[14px]"}
                  >
                    A-Z
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: !order ? 1 : 0,
                    }}
                    className={"absolute top-[14px] left-[14px]"}
                  >
                    Z-A
                  </motion.div>
                </ButtonNeum>
                <ButtonNeum className={"relative !p-0 w-[55px] h-[55px]"} onClick={() => setTypeMode(typeMode === "card" ? "listItem" : "card")}>
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
                    className={"absolute top-[10px] left-[10px]"}
                  >
                    <FiGrid className="w-[35px] h-[35px]" /></motion.div>
                </ButtonNeum>
              </div>
              <Pagination
                items={filtered}
                mode={mode}
                type={typeMode}
                order={order}
                isStockA={isStockA}
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


function Selectors({
  category,
  setCategory,
  types,
  selected,
  products,
  setSelected,
  type,
  filtered,
}: any) {
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
      <motion.ul animate={{
        height: isOpen ? "fit-content" : "0px",
      }} className="relative flex flex-wrap items-center justify-start overflow-hidden">
        {options !== undefined &&
          options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={{ cursor: "pointer" }}
              className="flex flex-row items-center justify-center p-1"
            >
              <FaCheckSquare className="w-[20px] h-[20px] mr-3" />
              <p className="top-[2px] relative">{option}</p>
            </li>
          ))}
        <li
          key={-1}
          onClick={() => handleSelect("All")}
          style={{ cursor: "pointer" }}
          className="flex flex-row items-center justify-center p-1"
        >
          <FaCheckSquare className="w-[20px] h-[20px] mr-3" />
          {"All"}
        </li>
        <motion.div animate={{
          background: isOpen ? "transparent" : "",
          height: isOpen ? 0 : "200px",
        }} className="absolute w-full h-full z-10 bg-gradient-to-b from-transparent to-[#e0e0e0] bottom-0">

        </motion.div>
      </motion.ul>
      <motion.button onClick={() => { toggleDropdown() }} className="z-20 flex items-center justify-center w-full relatice">
        <IoChevronDown className="w-[35px] h-[35px]"></IoChevronDown>
      </motion.button>
    </div>
  );
}
