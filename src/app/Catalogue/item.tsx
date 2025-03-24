//@ts-nocheck
"use client"
import { useAppContext } from "@/context/AppContext";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import CardCarousel from "@/components/molecules/Carousels/CardCarousel";
import { motion } from "framer-motion";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import gsap from "gsap";
import { useFilteredProducts } from "./useFilteredProducts";
import Pagination from "./paginator";

export function Item({ product, index }: any) {

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
                                    <li><div className="text-lg">1080P</div></li>
                                    <li><div className="text-lg">WIFI 7</div></li>
                                    <li><div className="text-lg">UP TO 128GB STORAGE</div></li>
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