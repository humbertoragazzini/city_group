//@ts-nocheck
"use client";

import { useState, useMemo } from "react";
import { Item } from "./item";
import { Card } from "./card";

export default function Pagination({
  items = [],
  itemsPerPage = 10,
  renderItem,
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
            <Item key={index} index={index} product={product}></Item>
          ))}
        </div>
      )}
      {type == "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((product, index) => (
            <Card key={index} index={index} product={product}></Card>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          ⬅ Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
