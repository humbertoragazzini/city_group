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
          {
            filtered.map((product, index) => {
              return (
                <Item key={index} index={index} product={product}></Item>
              )
            })
          }
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

function Item({ product, index }: any) {

  const [enable, setEnable] = useState(false);
  const [show, setShow] = useState(true);
  const itemRef = useRef();

  useLayoutEffect(() => {
    // gsap.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, delay: index / 10 })
  }, [])

  return (
    <div ref={itemRef} style={{ opacity: 1, }} className={`relative col-span-1 rounded-xl ${enable ? "border-2 border-[rgba(255,255,255,0.35)] mt-3 mb-3 p-2" : "border-3 border-[rgba(255,255,255,0)] mt-2 bg-transparent"} transition-all duration-500`}>
      <button onClick={e => setEnable(!enable)} className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-2 bg-[rgba(255,255,255,0.2)] rounded-xl cursor-pointer w-full hover:bg-[rgba(255,255,255,0.30)] transition-all duration-300">
        <div className="col-span-3 md:col-span-2 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.id}</p>
          </div>
        </div>
        <div className="col-span-9 p-2 md:col-span-6 md:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-left">{product.name}</p>
          </div>
        </div>
        <div className="col-span-4 hidden p-2 md:block md:col-span-3 md:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.category}</p>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block md:grid p-2">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.available ? "In stock" : "Out of stock"}</p>
          </div>
        </div>
      </button>
      <motion.div animate={{ height: !enable ? "0px" : "auto", marginTop: !enable ? "0px" : "8px" }} className="z-0 h-[0px] grid grid-cols-1 w-full overflow-hidden">
        <div className="col-span-1">
          <motion.div className="z-0 top-0 left-0 grid grid-cols-10 w-full backdrop-blur-md bg-[rgba(255,255,255,0.2)] rounded-xl">
            <div className="col-span-10 lg:col-span-5 p-3 lg:p-12">
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
            <div className="col-span-10 lg:col-span-5 lg:p-8">
              <div className="w-full">
                <CardCarousel></CardCarousel>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}