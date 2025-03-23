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
export default function Catalogue() {
  const context = useAppContext();
  const [IDtoSearch, setIDtoSearch] = useState();
  const [wordToSearch, setWordtoSearch] = useState("");
  const [category, setCategory] = useState("");
  const [allTypes, setAlltypes] = useState();
  const products = [
    { id: 1, name: "Smartphone X12", type: "Smartphone", stock: 50 },
    { id: 2, name: "Laptop Pro 15", type: "Laptop", stock: 30 },
    { id: 3, name: "Wireless Earbuds X", type: "Audio", stock: 75 },
    { id: 4, name: "Smartwatch Z4", type: "Wearable", stock: 40 },
    { id: 5, name: "Gaming Monitor 27\"", type: "Monitor", stock: 20 },
    { id: 6, name: "Mechanical Keyboard RGB", type: "Peripheral", stock: 60 },
    { id: 7, name: "Wireless Mouse Pro", type: "Peripheral", stock: 80 },
    { id: 8, name: "Bluetooth Speaker Mini", type: "Audio", stock: 45 },
    { id: 9, name: "VR Headset Ultra", type: "Gaming", stock: 25 },
    { id: 10, name: "External SSD 1TB", type: "Storage", stock: 35 },
    { id: 11, name: "Gaming Chair X", type: "Furniture", stock: 10 },
    { id: 12, name: "4K Streaming Stick", type: "Entertainment", stock: 50 },
    { id: 13, name: "USB-C Hub 8-in-1", type: "Accessory", stock: 70 },
    { id: 14, name: "Smart Home Hub", type: "Smart Home", stock: 40 },
    { id: 15, name: "Noise Cancelling Headphones", type: "Audio", stock: 55 },
    { id: 16, name: "Portable Power Bank 20000mAh", type: "Power", stock: 90 },
    { id: 17, name: "Gaming GPU RTX 4080", type: "PC Component", stock: 15 },
    { id: 18, name: "All-in-One Printer", type: "Office", stock: 22 },
    { id: 19, name: "Smart Thermostat", type: "Smart Home", stock: 30 },
    { id: 20, name: "Wireless Charging Pad", type: "Accessory", stock: 85 },
    { id: 21, name: "Home Security Camera", type: "Security", stock: 38 },
    { id: 22, name: "Gaming Console X", type: "Gaming", stock: 28 },
    { id: 23, name: "Portable Bluetooth Projector", type: "Entertainment", stock: 18 },
    { id: 24, name: "Smart Door Lock", type: "Smart Home", stock: 25 },
    { id: 25, name: "Electric Toothbrush", type: "Personal Care", stock: 65 },
    { id: 26, name: "Smart Light Bulb", type: "Smart Home", stock: 100 },
    { id: 27, name: "Drone with 4K Camera", type: "Drone", stock: 12 },
    { id: 28, name: "Graphics Tablet Pro", type: "Creative", stock: 20 },
    { id: 29, name: "Robot Vacuum Cleaner", type: "Smart Home", stock: 32 },
    { id: 30, name: "Dash Cam HD", type: "Automotive", stock: 45 },
    { id: 31, name: "Digital Photo Frame", type: "Display", stock: 50 },
    { id: 32, name: "Smart Coffee Maker", type: "Kitchen", stock: 18 },
    { id: 33, name: "Smart Scale", type: "Health", stock: 25 },
    { id: 34, name: "Smart Glasses", type: "Wearable", stock: 8 },
    { id: 35, name: "Portable Air Purifier", type: "Health", stock: 30 },
    { id: 36, name: "E-Reader Pro", type: "Entertainment", stock: 40 },
    { id: 37, name: "USB Microphone", type: "Audio", stock: 50 },
    { id: 38, name: "Wireless Router AX", type: "Networking", stock: 35 },
    { id: 39, name: "Smart Plug", type: "Smart Home", stock: 90 },
    { id: 40, name: "Multi-Device Charger", type: "Accessory", stock: 75 },
    { id: 41, name: "Digital Drawing Pad", type: "Creative", stock: 22 },
    { id: 42, name: "Professional Webcam", type: "Office", stock: 40 },
    { id: 43, name: "Temperature & Humidity Sensor", type: "Smart Home", stock: 55 },
    { id: 44, name: "Smart Sprinkler System", type: "Smart Home", stock: 12 },
    { id: 45, name: "HDMI Capture Card", type: "Streaming", stock: 15 },
    { id: 46, name: "Wireless Video Doorbell", type: "Security", stock: 20 },
    { id: 47, name: "Gaming Mouse Pad RGB", type: "Accessory", stock: 88 },
    { id: 48, name: "Electric Scooter", type: "Transport", stock: 10 },
    { id: 49, name: "Smart Refrigerator", type: "Kitchen", stock: 5 },
    { id: 50, name: "Bluetooth Car Adapter", type: "Automotive", stock: 33 },
    { id: 51, name: "Smart Door Lock V7", type: "Smart Home", stock: 42 },
    { id: 52, name: "Smart Glasses V3", type: "Wearable", stock: 89 },
    { id: 53, name: "USB-C Hub 8-in-1 V7", type: "Accessory", stock: 58 },
    { id: 54, name: "Noise Cancelling Headphones V5", type: "Audio", stock: 45 },
    { id: 55, name: "Portable Bluetooth Projector V9", type: "Entertainment", stock: 76 },
    { id: 56, name: "USB-C Hub 8-in-1 V8", type: "Accessory", stock: 91 },
    { id: 57, name: "Smart Light Bulb V6", type: "Smart Home", stock: 62 },
    { id: 58, name: "USB-C Hub 8-in-1 V3", type: "Accessory", stock: 36 },
    { id: 59, name: "Wireless Router AX V2", type: "Networking", stock: 92 },
    { id: 60, name: "Dash Cam HD V4", type: "Automotive", stock: 18 },
    { id: 61, name: "Graphics Tablet Pro V8", type: "Creative", stock: 26 },
    { id: 62, name: "Smart Sprinkler System V6", type: "Smart Home", stock: 78 },
    { id: 63, name: "HDMI Capture Card V6", type: "Streaming", stock: 70 },
    { id: 64, name: "Digital Photo Frame V6", type: "Display", stock: 46 },
    { id: 65, name: "Mechanical Keyboard RGB V8", type: "Peripheral", stock: 57 },
    { id: 66, name: "Smart Glasses V6", type: "Wearable", stock: 52 },
    { id: 67, name: "Digital Drawing Pad V7", type: "Creative", stock: 59 },
    { id: 68, name: "Smart Scale V4", type: "Health", stock: 90 },
    { id: 69, name: "Graphics Tablet Pro V5", type: "Creative", stock: 83 },
    { id: 70, name: "Smart Refrigerator V3", type: "Kitchen", stock: 88 },
    { id: 71, name: "Noise Cancelling Headphones V3", type: "Audio", stock: 43 },
    { id: 72, name: "Portable Power Bank 20000mAh V7", type: "Power", stock: 74 },
    { id: 73, name: "Digital Drawing Pad V9", type: "Creative", stock: 61 },
    { id: 74, name: "Gaming GPU RTX 4080 V2", type: "PC Component", stock: 77 },
    { id: 75, name: "Smart Coffee Maker V4", type: "Kitchen", stock: 39 },
    { id: 76, name: "Wireless Charging Pad V5", type: "Accessory", stock: 45 },
    { id: 77, name: "Wireless Earbuds X V6", type: "Audio", stock: 40 },
    { id: 78, name: "Professional Webcam V9", type: "Office", stock: 16 },
    { id: 79, name: "Wireless Earbuds X V9", type: "Audio", stock: 53 },
    { id: 80, name: "Gaming GPU RTX 4080 V4", type: "PC Component", stock: 26 },
    { id: 81, name: "Digital Drawing Pad V8", type: "Creative", stock: 70 },
    { id: 82, name: "USB-C Hub 8-in-1 V2", type: "Accessory", stock: 71 },
    { id: 83, name: "Noise Cancelling Headphones V4", type: "Audio", stock: 38 },
    { id: 84, name: "Smart Thermostat V4", type: "Smart Home", stock: 96 },
    { id: 85, name: "USB Microphone V7", type: "Audio", stock: 77 },
    { id: 86, name: "Noise Cancelling Headphones V6", type: "Audio", stock: 35 },
    { id: 87, name: "Smart Refrigerator V9", type: "Kitchen", stock: 67 },
    { id: 88, name: "USB Microphone V3", type: "Audio", stock: 27 },
    { id: 89, name: "Smart Plug V8", type: "Smart Home", stock: 43 },
    { id: 90, name: "USB Microphone V9", type: "Audio", stock: 29 },
    { id: 91, name: "Portable Power Bank 20000mAh V2", type: "Power", stock: 94 },
    { id: 92, name: "Gaming Mouse Pad RGB V4", type: "Accessory", stock: 63 },
    { id: 93, name: "Smart Glasses V2", type: "Wearable", stock: 25 },
    { id: 94, name: "Smart Light Bulb V8", type: "Smart Home", stock: 85 },
    { id: 95, name: "Mechanical Keyboard RGB V2", type: "Peripheral", stock: 54 },
    { id: 96, name: "Noise Cancelling Headphones V2", type: "Audio", stock: 97 },
    { id: 97, name: "Portable Bluetooth Projector V4", type: "Entertainment", stock: 63 },
    { id: 98, name: "Smart Light Bulb V5", type: "Smart Home", stock: 11 },
    { id: 99, name: "Wireless Router AX V8", type: "Networking", stock: 33 },
    { id: 100, name: "Smart Plug V9", type: "Smart Home", stock: 61 }
  ];

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
      <div className="bg-[rgba(255,255,255,0.2)] rounded-xl m-4 p-4 grid gris-cols-3">
        <div className="col-span-3 lg:col-span-1 px-5 py-3 flex lg:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By ID:</label>
          <input onKeyUp={(e) => { setIDtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by ID">
          </input>
        </div>
        <div className="col-span-3 lg:col-span-1 px-5 py-3 flex lg:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By name:</label>
          <input onKeyUp={(e) => { setWordtoSearch(e.currentTarget.value) }} className="bg-transparent flex justify-center items-center p-2" placeholder="Search by word">
          </input>
        </div>
        <div className="col-span-3 lg:col-span-1 px-5 py-3 flex lg:justify-center items-center font-semibold mx-2 text-white rounded-lg">
          <label className="mr-2">By type:</label>
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
    gsap.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, delay: index / 10 })
  }, [])

  return (
    <div ref={itemRef} style={{ opacity: 0, }} className={`relative col-span-1 rounded-xl ${enable ? "border-2 border-[rgba(255,255,255,0.35)] mt-3 mb-3 p-2" : "border-3 border-[rgba(255,255,255,0)] mt-2 bg-transparent"} transition-all duration-500`}>
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
            <p className="font-bold w-full text-center">{product.type}</p>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block md:grid p-2">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.stock}</p>
          </div>
        </div>
      </button>
      <motion.div animate={{ height: !enable ? "0px" : "auto", marginTop: !enable ? "0px" : "8px" }} className="z-0 h-[0px] grid grid-cols-1 w-full overflow-hidden">
        <div className="col-span-1">
          <motion.div className="z-0 top-0 left-0 grid grid-cols-10 w-full backdrop-blur-md bg-[rgba(255,255,255,0.2)] rounded-xl">
            <div className="col-span-10 lg:col-span-7 p-3 lg:p-12">
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
            <div className="col-span-10 lg:col-span-3 lg:p-8">
              <CardCarousel></CardCarousel>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}