//@ts-nocheck
"use client";

import { useState, useMemo } from "react";
import { Item } from "./item";
import { Card } from "./card";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpLeft,
  FiArrowUpRight,
} from "react-icons/fi";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";

export default function Pagination({
  items = [],
  itemsPerPage = 10,
  renderItem,
  mode,
  type,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      {type == "listItem" && (
        <div className="grid gap-2">
          {currentItems.map((product, index) => (
            <Item key={index} index={index} product={product} mode={mode}></Item>
          ))}
        </div>
      )}
      {type == "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentItems.map((product, index) => (
            <Card key={index} index={index} product={product} mode={mode}></Card>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-7 px-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          class={`p-4 min-w-[150px] text-xl h-[70px] relative w-fit z-0 transition-all duration-500 flex justify-between items-center rounded-full ${mode == "dark" ? "[&>svg]:stroke-[#A8DADC] text-[#A8DADC] text-[#A8DADC]" : "[&>svg]:stroke-black text-[#37474F]"}`}
        >
          <div className={`absolute top-0 left-0 w-full h-full shadow-xl ${mode == "dark" ? "bg-[#324A5F]" : "bg-[#B3E5FC]"} skew-x-6`}></div>
          <FiArrowLeft className="relative inline w-[30px] h-[30px] mr-3" />
          <span className="relative">Preview</span>
        </button>
        <span className={`text-xl ${mode == "dark" ? "text-white" : "text-black"}`}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          class={`p-4 min-w-[150px] text-xl h-[70px] relative w-fit z-0 transition-all duration-500 flex justify-between items-center rounded-full m-2 ${mode == "dark" ? "[&>svg]:stroke-[#A8DADC] text-[#A8DADC] text-[#A8DADC]" : "[&>svg]:stroke-black text-[#37474F]"}`}
        >
          <div className={`absolute top-0 left-0 w-full h-full shadow-xl ${mode == "dark" ? "bg-[#324A5F]" : "bg-[#B3E5FC]"} -skew-x-6`}></div>
          <span className="relative">Next</span>
          <FiArrowRight className="relative inline w-[30px] h-[30px] ml-3" />
        </button>
      </div>
    </div>
  );
}
