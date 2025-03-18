//@ts-nocheck
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

let CARD_WIDTH = 350;
let CARD_HEIGHT = 350;
const MARGIN = 20;
let CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const CardCarousel = () => {
    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    useLayoutEffect(() => {
        CARD_SIZE = document.querySelector(".container")?.clientWidth - 40;
        CARD_WIDTH = document.querySelector(".container")?.clientWidth - 60;
        CARD_HEIGHT = document.querySelector(".container")?.clientWidth - 60;
    }, [])

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <section className="container" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex"
                    >
                        {items.map((item) => {
                            return <Card key={item.id} {...item} />;
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    );
};

const Card = ({ url, category, title, description }) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase text-violet-300">
                    {category}
                </span>
                <p className="my-2 text-lg lg:text-3xl font-bold">{title}</p>
                <p className="text-md lg:text-lg text-slate-300">{description}</p>
            </div>
        </div>
    );
};

export default CardCarousel;

const items = [
    {
        id: 1,
        url: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/images/hires/AZ6_FWR864GBF84L.jpg?sw=400&sh=400&sm=fit",
        category: "4K Video",
        title: "4K recordion at 60fps",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    },
    {
        id: 2,
        url: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/images/hires/AZ6_FWR864GBF84L.jpg?sw=400&sh=400&sm=fit",
        category: "AI Assistant",
        title: "Human body check",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    },
    {
        id: 3,
        url: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/images/hires/AZ6_FWR864GBF84L.jpg?sw=400&sh=400&sm=fit",
        category: "200x ZOOM",
        title: "200x Optical zoom",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    },
    {
        id: 4,
        url: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/images/hires/AZ6_FWR864GBF84L.jpg?sw=400&sh=400&sm=fit",
        category: "120MP Sensor",
        title: "SONY 120MP sensor",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    },
    {
        id: 5,
        url: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/images/hires/AZ6_FWR864GBF84L.jpg?sw=400&sh=400&sm=fit",
        category: "IR Night",
        title: "Infrared Night Vision",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    }
];