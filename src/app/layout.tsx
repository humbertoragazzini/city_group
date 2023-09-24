"use client";
import './globals.scss'
import styles from './styles.module.scss'
import type { Metadata } from 'next'
import React, {useRef, useLayoutEffect, useState} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname} from 'next/navigation';

gsap.registerPlugin(ScrollTrigger)

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children,}: {children: React.ReactNode}) {

  const pathname = usePathname();
  const mobileMenu = React.useRef<HTMLDivElement>(null);
  const mainContentContainer = React.useRef<HTMLDivElement>(null);
  const [closeOpenMenu, setCloseOpenMenu] = useState(false);


  gsap.set(mobileMenu.current?.childNodes[0].childNodes!,{opacity:0,y:-15})
  gsap.set(mainContentContainer.current,{overflow: 'hidden'});
  // gsap.set(mobileMenu.current?.childNodes[0]!,{filter: 'brightness(1) blur(0px)',backdropFilter: 'blur(0px)',delay:0});
    
  const OpenClose = ()=>{
    if(closeOpenMenu){
      gsap.fromTo(mobileMenu.current?.childNodes[1].childNodes!,{opacity:1},{opacity:0,duration:0.25})
      gsap.to(mobileMenu.current,{top:-mobileMenu.current?.getBoundingClientRect().height!,duration:0,delay:1})
      gsap.to(mobileMenu.current?.childNodes[0]!,{filter: 'brightness(1) blur(0px)',backdropFilter: 'blur(0px)',duration:0.75});
      setCloseOpenMenu(false)
    }else{
      gsap.to(mobileMenu.current?.childNodes[0]!,{filter: 'brightness(0.5) blur(8px)',backdropFilter: 'blur(5px)',delay:0.25});
      gsap.to(mobileMenu.current,{top:'0px',duration:0})
      gsap.fromTo(mobileMenu.current?.childNodes[1].childNodes!,{opacity:0,y:-15},{opacity:1,y:0,stagger:0.25,duration:0.1,delay:0.1})
      setCloseOpenMenu(true)
    }
  }

  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.mainContainer} style={{backgroundColor:'black'}}>
        <div className={'fixed w-screen p-5 navBar hidden lg:block'}>
          <Link href={'/'} className={pathname === "/" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Home</Link>
          <Link href={'/our_services'} className={pathname === "/our_services" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Nuestro Servicios</Link>
          <Link href={'/'} className={pathname === "/about_us" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Acerca de nosotros</Link>
          <Link href={'/'} className={pathname === "/contact" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Contacto</Link>
          {/* <Link href={'/login'} className={pathname === "/login" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Login</Link>
          <Link href={'/signup'} className={pathname === "/signup" ? "p-4 pb-2 m-3 active" : "p-4 pb-2 m-3 "}>Signup</Link> */}
        </div>
        <div className={'fixed w-screen p-0 lg:p-5 navBar block lg:hidden'}>
          <button className='burgerButton float-right m-3' onClick={()=>{OpenClose()}}>
            <svg
              id='menu-icon'
              xmlns="http://www.w3.org/2000/svg"
              width="250.453"
              height="247.648"
              version="1.1"
              viewBox="0 0 66.266 65.523"
            >
              <g fill="#fff" color="#fff" transform="translate(-26.404 -37.586)">
                <path
                  style={{ stroke: "none" }}
                  d="M34.459 37.586c-4.439 0-8.055 3.616-8.055 8.055v49.416c0 4.438 3.616 8.052 8.055 8.052h50.156c4.439 0 8.055-3.614 8.055-8.052V45.64c0-4.44-3.616-8.055-8.055-8.055zm0 2.656h50.156a5.358 5.358 0 015.399 5.399v49.416a5.356 5.356 0 01-5.399 5.396H34.46a5.356 5.356 0 01-5.398-5.396V45.64a5.358 5.358 0 015.398-5.399z"
                ></path>
                <g>
                  <path
                    style={{ stroke: "none" }}
                    strokeWidth="1.16"
                    d="M38.219 50.696h42.527v5.22H38.22z"
                  ></path>
                  <path
                    style={{ stroke: "none" }}
                    d="M37.639 50.115v6.381h43.687v-6.38zm1.16 1.16h41.367v4.06H38.799z"
                  ></path>
                </g>
                <g>
                  <path
                    style={{ stroke: "none" }}
                    strokeWidth="1.16"
                    d="M38.157 61.752h42.527v5.22H38.157z"
                  ></path>
                  <path
                    style={{ stroke: "none" }}
                    d="M37.576 61.172v6.38h43.688v-6.38zm1.16 1.16h41.368v4.06H38.736z"
                  ></path>
                </g>
                <g>
                  <path
                    style={{ stroke: "none" }}
                    strokeWidth="1.16"
                    d="M38.157 72.623h42.527v5.22H38.157z"
                  ></path>
                  <path
                    style={{ stroke: "none" }}
                    d="M37.576 72.043v6.38h43.69v-6.38zm1.16 1.16h41.368v4.06H38.736z"
                  ></path>
                </g>
                <g>
                  <path
                    style={{ stroke: "none" }}
                    strokeWidth="1.16"
                    d="M38.033 83.618h42.528v5.22H38.033z"
                  ></path>
                  <path
                    style={{ stroke: "none" }}
                    d="M37.453 83.037v6.381h43.688v-6.38zm1.16 1.16H79.98v4.06H38.613z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className={'fixed w-screen p-0 lg:p-5 navBarDropDown block lg:hidden'} ref={mobileMenu} style={{top:'-100vh'}}>
          <div className="background_blur w-screen h-screen absolute top-0 left-0"></div>
          <div className={'relative w-screen p-5 navBar block lg:hidden'}>
            <Link href={'/'} onClick={()=>{OpenClose()}} className={pathname === "/" ? "pt-4 pr-4 pl-0 pb-2 m-3 active w-fit" : "pt-4 pr-4 pl-0 pb-2 m-3  w-fit"} style={{opacity:'0',top:'-15px'}}>Home</Link>
            <Link href={'/our_services'} onClick={()=>{OpenClose()}} className={pathname === "/our_services w-fit" ? "pt-4 pr-4 pl-0 pb-2 m-3 active block" : "pt-4 pr-4 pl-0 pb-2 m-3  block w-fit"} style={{opacity:'0',top:'-15px'}}>Nuestros Servicios</Link>
            <Link href={'/'} onClick={()=>{OpenClose()}} className={pathname === "/about_us" ? "pt-4 pr-4 pl-0 pb-2 m-3 active block w-fit" : "pt-4 pr-4 pl-0 pb-2 m-3  block w-fit"} style={{opacity:'0',top:'-15px'}}>Acerca de Nosotros</Link>
            <Link href={'/'} onClick={()=>{OpenClose()}} className={pathname === "/contact" ? "pt-4 pr-4 pl-0 pb-2 m-3 active block w-fit" : "pt-4 pr-4 pl-0 pb-2 m-3  block w-fit"} style={{opacity:'0',top:'-15px'}}>Contacto</Link>
            {/* <Link href={'/login'} onClick={()=>{OpenClose()}} className={pathname === "/login" ? "pt-4 pr-4 pl-0 pb-2 m-3 active block w-fit" : "pt-4 pr-4 pl-0 pb-2 m-3  block w-fit"} style={{opacity:'0',top:'-15px'}}>Login</Link>
            <Link href={'/signup'} onClick={()=>{OpenClose()}} className={pathname === "/signup" ? "pt-4 pr-4 pl-0 pb-2 m-3 active block w-fit" : "pt-4 pr-4 pl-0 pb-2 m-3  block w-fit"} style={{opacity:'0',top:'-15px'}}>Signup</Link> */}
          </div>
        </div>
        <div className="main_content_container">
          {children}
        </div>
        <div className="footer relative px-10 pt-10 pb-10">
          <div className="grid-cols-4 hidden md:grid">
            <div className="col-span-1 mt-3 mb-3 flex justify-center">
              <div className="">
                <p className='text-white text-2xl mt-3 mb-3'>Mapa del sitio</p>
                  <Link href={'/'} className='text-white mb-1 block link ml-3'>Home</Link>
                  <Link href={'/'} className='text-white mb-1 block link ml-3'>Our Services</Link>
                  <Link href={'/'} className='text-white mb-1 block link ml-3'>About Us</Link>
                  <Link href={'/'} className='text-white mb-1 block link ml-3'>Contact</Link>
              </div>
            </div>
            <div className="col-span-1 mt-3 mb-3 flex justify-center">
              <div className="">
                <p className='text-white text-2xl mt-3 mb-3'>Visita nuestras redes</p>
                  <Link href={'/'} className='text-white mb-2 flex justify-start items-center link ml-3'>
                    <svg className='inline mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>                  
                    <span>Facebook</span>
                  </Link>
                  <Link href={'/'} className='text-white mb-2 flex justify-start items-center link ml-3'>
                    <svg className='inline mr-2'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
                    <span>Instagram</span>
                  </Link>
                  <Link href={'/'} className='text-white mb-2 flex justify-start items-center link ml-3'>
                    <svg className='inline mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/></svg>
                    <span>Whatsapp</span>
                  </Link>
              </div>
            </div>
            <div className="col-span-1 mt-3 mb-3 flex justify-center">
              <div className="">
                <p className='text-white text-2xl mt-3 mb-3'>Contacto</p>
                <p className='text-white mb-1 ml-3'>Tel: (+54)-0351-2555777</p>
                <p className='text-white mb-1 ml-3'>Emai: rgagroup@rga.com</p>
              </div>
            </div>
            <div className="col-span-1 mt-3 mb-3 flex justify-center">
              <div className="">
                <p className='text-white text-2xl mt-3 mb-3'>Services</p>
                <Link href={'/'} className='text-white mb-1 block link ml-3'>Electricity</Link>
                <Link href={'/'} className='text-white mb-1 block link ml-3'>Steel Framing</Link>
                <Link href={'/'} className='text-white mb-1 block link ml-3'>Durlock</Link>
                <Link href={'/'} className='text-white mb-1 block link ml-3'>Water Pipes Installation</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 md:hidden">
            <div className="col-span-4 mt-3 mb-3 flex justify-center">
              <div className="flex flex-col justify-center items-center">
                  <Link href={'/'} className='text-white mb-2 block link ml-3'>Copyright 2023 City Group</Link>
                  <Link href={'/'} className='text-white mb-2 block link ml-3'>Privacy policy</Link>
                  <Link href={'/'} className='text-white mb-2 block link ml-3'>Disclaimer</Link>
                  <Link href={'/'} className='text-white mb-2 block link ml-3'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
