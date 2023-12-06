"use client";
import styles from './styles.module.scss'
import Image from 'next/image';
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
import StartSection from '@/app/components/organism/startSection/StartSection'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedBlackButton from '@/app/components/atoms/animated_black_button/AnimatedBlackButton'
const sectionIS = true

export default function About_us() {

  const moving_box = React.useRef<HTMLDivElement>(null);
  const MainTL = React.useRef([]);
  const mainContainer = React.useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
  
    let ctx = gsap.context((self) => {
      
      const containers = self.selector!('.slice_animation');
      const backgroundImages = self.selector!('.background_images');
      setTimeout(()=>{
        gsap.fromTo(mainContainer.current,{opacity:0},{opacity:1})
      },500);

      containers.forEach((e:any,i:any) => {
        gsap.set(e,{height:'100vh'})
        if(i==0){

          const leftE = (e.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0])
          const rightE = (e.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])

          // @ts-ignore
          gsap.fromTo(leftE,{left:'100vw'},{left:0,duration:1},0)
          // @ts-ignore
          gsap.fromTo(rightE,{right:'100vw'},{right:0,duration:1},0)  

          // @ts-ignore
          MainTL.current[i] = gsap.timeline({scrollTrigger:{trigger:e,start:'center center',end:'bottom center',scrub:2,markers:true},duration:10})
          .fromTo(rightE,{opacity:'1'},{opacity:'0',duration:5},5)
          .fromTo(leftE,{opacity:'1'},{opacity:'0',duration:4.5},5)

        }else{

          const leftE = (e)

          gsap.set(leftE,{opacity:0})

          // @ts-ignore
          MainTL.current[i] = gsap.timeline({scrollTrigger:{trigger:e,start:'-25% center',end:'center center',scrub:2,markers:true},duration:10})
          .fromTo(backgroundImages[i],{opacity:0},{opacity:1},0)
          .to(leftE,{opacity:'1',duration:4.5},0)
          .to(leftE,{opacity:'0',duration:5},5)

        }

      });

      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 



  return (
    <>
      <div className='opacity-0' ref={mainContainer}>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-coat '+styles.background_6}></div>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-shirt '+styles.background_5}></div>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-coat '+styles.background_4}></div>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-boots '+styles.background_3}></div>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-coat '+styles.background_2}></div>
        <div className={'h-screen w-screen fixed top-0 left-0 background_images bg-shirt '+styles.background_1}></div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center">
            <div className="grid grid-cols-2">
              <div className='col-span-2 lg:col-span-1 h-full p-5'>
                <div className='w-full h-full'>
                  <div className='relative w-3/4 h-1/2'>
                    <h1 className='text-7xl text-white m-3'>
                      Acerca de
                    </h1>
                    <h2 className='text-2xl text-white m-1 mx-3'>
                      RGA Electricidad, Refrigeracion.
                    </h2>
                    <h2 className='text-2xl text-white m-1 mx-3'>
                      Steel City construcciones en seco.
                    </h2>
                  </div>
                </div>
              </div>
              <div className='col-span-2 lg:col-span-1 h-full p-5'>
                <div className='w-full h-full'>
                  <div className='relative w-3/4 h-1/2'>
                    <h2 className='text-xl text-white m-3'>
                      Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                    </h2>
                    <h2 className='text-xl text-white m-3'>
                      Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen grid grid-cols-2 top-0 left-0">
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='relative w-fit h-1/2'>
                  <h1 className='text-7xl text-white m-3'>
                    Nuestra Trayectoria
                  </h1>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    RGA Electricidad, Refrigeracion.
                  </h2>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    Steel City construcciones en seco.
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-start'>
                <div className='relative w-3/4 h-1/2'>
                  <h2 className='text-xl text-white m-3'>
                    Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                  </h2>
                  <h2 className='text-xl text-white m-3'>
                    Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen grid grid-cols-2 top-0 left-0">
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='relative w-fit h-1/2'>
                  <h1 className='text-7xl text-white m-3'>
                    Acerca de
                  </h1>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    RGA Electricidad, Refrigeracion.
                  </h2>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    Steel City construcciones en seco.
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-start'>
                <div className='relative w-3/4 h-1/2'>
                  <h2 className='text-xl text-white m-3'>
                    Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                  </h2>
                  <h2 className='text-xl text-white m-3'>
                    Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen grid grid-cols-2 top-0 left-0">
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='relative w-fit h-1/2'>
                  <h1 className='text-7xl text-white m-3'>
                    Nuestra Trayectoria
                  </h1>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    RGA Electricidad, Refrigeracion.
                  </h2>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    Steel City construcciones en seco.
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-start'>
                <div className='relative w-3/4 h-1/2'>
                  <h2 className='text-xl text-white m-3'>
                    Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                  </h2>
                  <h2 className='text-xl text-white m-3'>
                    Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen grid grid-cols-2 top-0 left-0">
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='relative w-fit h-1/2'>
                  <h1 className='text-7xl text-white m-3'>
                    Acerca de
                  </h1>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    RGA Electricidad, Refrigeracion.
                  </h2>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    Steel City construcciones en seco.
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-start'>
                <div className='relative w-3/4 h-1/2'>
                  <h2 className='text-xl text-white m-3'>
                    Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                  </h2>
                  <h2 className='text-xl text-white m-3'>
                    Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative slice_animation h-screen'>
          <div className="fixed h-screen w-screen grid grid-cols-2 top-0 left-0">
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='relative w-fit h-1/2'>
                  <h1 className='text-7xl text-white m-3'>
                    Nuestra Trayectoria
                  </h1>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    RGA Electricidad, Refrigeracion.
                  </h2>
                  <h2 className='text-2xl text-white m-1 mx-3'>
                    Steel City construcciones en seco.
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-full p-5'>
              <div className='w-full h-full flex flex-col justify-center items-start'>
                <div className='relative w-3/4 h-1/2'>
                  <h2 className='text-xl text-white m-3'>
                    Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
                  </h2>
                  <h2 className='text-xl text-white m-3'>
                    Fundada en 2017, ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}