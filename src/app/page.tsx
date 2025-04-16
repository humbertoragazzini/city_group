// @ts-nocheck
"use client";
import { SmoothScrollbar, useScrollbar } from "@14islands/r3f-scroll-rig";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import { useAppContext } from "@/context/AppContext";
import GlassHScreen from "@/components/Atoms/Containers/GlassHScreen";
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GlobalCanvas, useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useTransform } from "framer-motion";
import { useTrackerMotionValue } from "@/CustomHooks/useTrackerMotionValue";
import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";
import Parallax from "@/components/Organims/FramerAnimations/Parallax";
import gsap from "gsap";

import React from "react";
import { useScroll } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import SectionL from "@/components/Organims/Sections/Desktop/SectionL";
import SectionR from "@/components/Organims/Sections/Desktop/SectionR";
import SectionMob from "@/components/Organims/Sections/Mobile/SectionMob";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";

export default function Home() {
  const context = useAppContext();
  const [themeSelected, setThemeSelected] = useState<any>("white");
  const [Index, setIndex] = useState<any>(0);
  const headerRef = useRef();
  const themes = [
    "red",
    "black",
    "darkGrey",
    "lightGrey",
    "lightRed",
    "darkWhite",
    "darkerGrey",
    "lightWhite",
    "white",
    "darkBlack",
    "yellow",
  ];

  useLayoutEffect(() => {
    // gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

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
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white `}
      ref={headerRef}
    >
      {/* MOBILE */}
      <SectionMob
        imgContent={{
          imgUrl: "/img/import_export.jpg",
          size: {
            width: 1920,
            height: 1080,
          },
          aria: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Contamos con conexiones globales y estrategicas",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          heading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          subheading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Bienvenido a nuestro sitio web",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
        }}
        textContent={{
          heading: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content: "Contamos con conexiones Globales Estrategicas",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          text: [
            {
              language: "EN",
              content: "Welcome to our website",
            },
            {
              language: "ES",
              content:
                "Operamos con presencia activa en Argentina, Reino Unido y China, lo que nos permite coordinar operaciones logísticas eficientes entre Asia, Europa y América del Sur. Nuestra red de socios confiables asegura entregas a tiempo, cumplimiento normativo y una gestión de comercio internacional sin complicaciones.",
            },
            {
              language: "CH",
              content: "欢迎来到我们的网站",
            },
            {
              language: "IT",
              content: "Benvenuti nel nostro sito web",
            },
          ],
          learn: {
            link: "/",
            label: [
              {
                language: "EN",
                content: "Learn more",
              },
              {
                language: "ES",
                content: "Acerca de",
              },
              {
                language: "CH",
                content: "了解更多",
              },
              {
                language: "IT",
                content: "Scopri di più",
              },
            ],
          },
        }}
      ></SectionMob>
      {/* SECTION 1 – LEFT */}
      <SectionL
        heading={[
          { language: "EN", content: "Strategic Global Connections" },
          { language: "ES", content: "Conexiones Globales Estratégicas" },
          { language: "CH", content: "战略性全球连接" },
          { language: "IT", content: "Connessioni Globali Strategiche" },
        ]}
        content={[
          {
            language: "EN",
            content:
              "We operate actively in Argentina, the UK, and China, streamlining trade between Asia, Europe, and South America through a reliable partner network and efficient logistics.",
          },
          {
            language: "ES",
            content:
              "Operamos activamente en Argentina, Reino Unido y China, facilitando el comercio entre Asia, Europa y Sudamérica mediante una red de socios confiables y logística eficiente.",
          },
          {
            language: "CH",
            content:
              "我们在阿根廷、英国和中国积极运营，通过可靠的合作伙伴网络和高效的物流，促进亚洲、欧洲和南美之间的贸易。",
          },
          {
            language: "IT",
            content:
              "Operiamo attivamente in Argentina, Regno Unito e Cina, facilitando il commercio tra Asia, Europa e Sud America con una rete di partner affidabili e logistica efficiente.",
          },
        ]}
        marke={[
          { language: "EN", content: "Efficiency, Reach, and Reliability." },
          { language: "ES", content: "Eficiencia, Alcance y Fiabilidad." },
          { language: "CH", content: "效率，覆盖面和可靠性。" },
          { language: "IT", content: "Efficienza, Copertura e Affidabilità." },
        ]}
        learn={{
          link: "/services",
          label: [
            { language: "EN", content: "Learn more" },
            { language: "ES", content: "Acerca de" },
            { language: "CH", content: "了解更多" },
            { language: "IT", content: "Scopri di più" },
          ],
        }}
      />

      {/* SECTION 2 – RIGHT */}
      <SectionR
        heading={[
          { language: "EN", content: "Wide Range of Products" },
          { language: "ES", content: "Amplia Variedad de Productos" },
          { language: "CH", content: "多样化产品" },
          { language: "IT", content: "Ampia Gamma di Prodotti" },
        ]}
        content={[
          {
            language: "EN",
            content:
              "From cutting-edge electronics to heavy industrial equipment, we manage the safe and legal movement of diverse products across borders, tailored to your business needs.",
          },
          {
            language: "ES",
            content:
              "Desde electrónicos de última generación hasta maquinaria industrial pesada, gestionamos el movimiento seguro y legal de productos diversos entre países, adaptándonos a tu negocio.",
          },
          {
            language: "CH",
            content:
              "从最先进的电子产品到重型工业设备，我们确保多样化产品的跨境安全运输，量身定制满足您的业务需求。",
          },
          {
            language: "IT",
            content:
              "Dall’elettronica all’avanguardia ai macchinari industriali pesanti, gestiamo il trasporto sicuro e conforme di una vasta gamma di prodotti su misura per le esigenze della tua azienda.",
          },
        ]}
        marke={[
          { language: "EN", content: "Electronics, Tools, and Machinery." },
          {
            language: "ES",
            content: "Electrónica, Herramientas y Maquinaria.",
          },
          { language: "CH", content: "电子产品，工具和机械。" },
          { language: "IT", content: "Elettronica, Strumenti e Macchinari." },
        ]}
        learn={{
          link: "/services",
          label: [
            { language: "EN", content: "Learn more" },
            { language: "ES", content: "Acerca de" },
            { language: "CH", content: "了解更多" },
            { language: "IT", content: "Scopri di più" },
          ],
        }}
      />

      {/* SECTION 3 – LEFT */}
      <SectionL
        heading={[
          { language: "EN", content: "Personalized Trade Services" },
          {
            language: "ES",
            content: "Servicios de Comercio Internacional Personalizados",
          },
          { language: "CH", content: "个性化国际贸易服务" },
          { language: "IT", content: "Servizi Commerciali Personalizzati" },
        ]}
        content={[
          {
            language: "EN",
            content:
              "We offer end-to-end trade support: customs guidance, shipping coordination, warehousing, and real-time shipment tracking—ensuring your business crosses borders with ease.",
          },
          {
            language: "ES",
            content:
              "Ofrecemos soluciones integrales: asesoramiento aduanero, coordinación logística, almacenamiento y seguimiento en tiempo real. Tu negocio cruza fronteras sin complicaciones.",
          },
          {
            language: "CH",
            content:
              "我们提供全方位服务：海关指导、运输协调、仓储以及实时跟踪，让您的业务无障碍跨境发展。",
          },
          {
            language: "IT",
            content:
              "Offriamo supporto commerciale completo: consulenza doganale, coordinamento delle spedizioni, magazzinaggio e tracciamento in tempo reale—per un business senza confini.",
          },
        ]}
        marke={[
          { language: "EN", content: "Customs, Logistics, and Tracking." },
          { language: "ES", content: "Aduanas, Logística y Seguimiento." },
          { language: "CH", content: "海关，物流和跟踪。" },
          { language: "IT", content: "Dogane, Logistica e Tracciamento." },
        ]}
        learn={{
          link: "/services",
          label: [
            { language: "EN", content: "Learn more" },
            { language: "ES", content: "Acerca de" },
            { language: "CH", content: "了解更多" },
            { language: "IT", content: "Scopri di più" },
          ],
        }}
      />
    </div>
  );
}

Home.displayName = "Home";
