import React, { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Reliable Global Network",
    content:
      "PrimalPorts has a well-established network of partners worldwide, ensuring smooth and secure import-export operations.",
  },
  {
    id: 2,
    title: "Cost-Effective Solutions",
    content:
      "We provide competitive pricing with efficient logistics strategies to reduce shipping and operational costs.",
  },
  {
    id: 3,
    title: "Compliance & Security",
    content:
      "Our team ensures that all shipments comply with international trade laws and security standards for hassle-free transactions.",
  },
  {
    id: 4,
    title: "Tailored Customer Support",
    content:
      "We offer dedicated account managers to assist with all aspects of the import and export process, providing personalized service.",
  },
  {
    id: 5,
    title: "Advanced Tracking Technology",
    content:
      "PrimalPorts utilizes cutting-edge tracking systems, allowing clients to monitor their shipments in real-time.",
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-5 max-w-md mx-auto">
      {accordionData.map((item) => (
        <div key={item.id} className="">
          <button
            onClick={() => toggleAccordion(item.id)}
            className={`w-full text-left p-4 focus:outline-none border-b-2 border-gray-700 transition-all duration-300 ${
              openIndex === item.id
                ? "bg-white text-black hover:bg-transparent hover:text-white "
                : "hover:bg-white hover:text-black"
            }`}
          >
            {item.title}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === item.id ? "auto" : 0,
              opacity: openIndex === item.id ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 mt-4 backdrop-blur-md rounded-md">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
