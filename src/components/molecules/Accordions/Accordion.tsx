import React, { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  { id: 1, title: "Item 1", content: "This is the content for Item 1." },
  { id: 2, title: "Item 2", content: "This is the content for Item 2." },
  { id: 3, title: "Item 3", content: "This is the content for Item 3." },
  { id: 4, title: "Item 4", content: "This is the content for Item 4." },
  { id: 5, title: "Item 5", content: "This is the content for Item 5." },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-4">
      {accordionData.map((item) => (
        <div key={item.id} className="mb-2">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full p-3 text-left bg-gray-200 rounded-lg focus:outline-none"
          >
            {item.title}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === item.id ? "auto" : 0,
              opacity: openIndex === item.id ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-3 bg-gray-100">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
