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
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import ButtonNeum from "./Button";
import ContainerNeum from "./ContainerNeum";

export default function Pagination({
  items = [],
  itemsPerPage = 8,
  renderItem,
  order,
  mode,
  type,
  isStockA
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage, order, isStockA]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      {
        currentItems.length == 0 && <div className="w-full flex justify-center items-center p-32">
          <h1 className="text-2xl">
            No result with that filter
          </h1>
        </div>
      }
      {type == "listItem" && (
        <div className="grid gap-5">
          {currentItems.map((product, index) => (
            <Item key={"item-" + index + product.id} index={index} product={product} mode={mode}></Item>
          ))}
        </div>
      )}
      {type == "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentItems.map((product, index) => (
            <Card key={index} index={index} product={product} mode={mode}></Card>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-7">
        <ButtonNeum
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={"w-[55px] h-[55px] flex justify-center items-center !p-0"}
        >
          <FiChevronLeft className="relative inline w-[30px] h-[30px]" />
        </ButtonNeum>
        <ContainerNeum>
          <span className={`text-lg ${mode == "dark" ? "text-white" : "text-black"}`}>
            Page {currentPage} of {totalPages}
          </span>
        </ContainerNeum>
        <ButtonNeum
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={"w-[55px] h-[55px] flex justify-center items-center !p-0"}
        >
          <FiChevronRight className="relative inline w-[30px] h-[30px]" />
        </ButtonNeum>
      </div>
    </div>
  );
}
