//@ts-nocheck
"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
import React from "react";
import CardCarousel from "@/components/molecules/Carousels/CardCarousel";
import { motion } from "framer-motion";
export default function Catalogue() {
  const context = useAppContext();
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
    { id: 50, name: "Bluetooth Car Adapter", type: "Automotive", stock: 33 }
  ];

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
      <div className="w-full min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="grid w-full grid-cols-1 p-4 lg:p-8">
          <button className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-2 rounded-xl cursor-pointer w-full hover:bg-[rgba(255,255,255,0.30)] transition-all duration-300">
            <div className="col-span-3 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">ID</p>
              </div>
            </div>
            <div className="col-span-9 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-left">Name</p>
              </div>
            </div>
            <div className="col-span-4 hidden p-2 lg:border-r-2 border-[rgba(255,255,255,0.5)]">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">Type</p>
              </div>
            </div>
            <div className="col-span-1 hidden md:grid p-2">
              <div className="flex justify-center items-center">
                <p className="font-bold w-full text-center">Stock</p>
              </div>
            </div>
          </button>
          {
            products.map((product, index) => {
              return (
                <Item key={index} product={product}></Item>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

Catalogue.displayName = "Catalogue";

function Item(product: any) {

  const [enable, setEnable] = useState(false);

  return (
    <div className={`relative col-span-1 rounded-xl ${enable ? "border-2 border-[rgba(255,255,255,0.35)] mt-3 mb-3 p-2" : "border-3 border-[rgba(255,255,255,0)] mt-2 bg-transparent"} transition-all duration-500`}>
      <button onClick={e => setEnable(!enable)} className="relative z-10 grid grid-cols-12 full backdrop-blur-md p-2 bg-[rgba(255,255,255,0.2)] rounded-xl cursor-pointer w-full hover:bg-[rgba(255,255,255,0.30)] transition-all duration-300">
        <div className="col-span-3 p-2 border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.product.id}</p>
          </div>
        </div>
        <div className="col-span-9 p-2 lg:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-left">{product.product.name}</p>
          </div>
        </div>
        <div className="col-span-4 hidden p-2 lg:border-r-2 border-[rgba(255,255,255,0.5)]">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.product.type}</p>
          </div>
        </div>
        <div className="col-span-1 hidden md:grid p-2">
          <div className="flex justify-center items-center">
            <p className="font-bold w-full text-center">{product.product.stock}</p>
          </div>
        </div>
      </button>
      <motion.div animate={{ height: !enable ? "0px" : "auto", marginTop: !enable ? "0px" : "8px" }} className="z-0 grid grid-cols-1 w-full overflow-hidden">
        <div className="col-span-1">
          <motion.div className="z-0 top-0 left-0 grid grid-cols-2 w-full backdrop-blur-md bg-[rgba(255,255,255,0.2)] rounded-xl">
            <div className="col-span-2 lg:col-span-1 p-3">
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
            <div className="col-span-2 lg:col-span-1 lg:p-8">
              <CardCarousel></CardCarousel>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}