"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Item } from '@/types/types';


const EndSections = () => {
  return (
    <div className={"h-screen w-screen flex items-center "+style.endSectionMain}>
      <div className={"block w-screen "+style.endSections }>
        <div className={"grid grid-cols-6 "+style.points_container}>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>70%</h1>
              <h1 className='text-white font-bold'>MAS RAPIDO</h1>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>ICONO</h1>
              <h1 className='text-white font-bold'>EFICIENCIA ENERGETICA</h1>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>ICONO</h1>
              <h1 className='text-white font-bold'>DURABILIDAD</h1>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>ICONO</h1>
              <h1 className='text-white font-bold'>FLEXIBILIDAD</h1>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>HASTA 300%</h1>
              <h1 className='text-white font-bold'>MAS LIVIANO</h1>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <h1 className='text-white font-bold'>item 6</h1>
              <h1 className='text-white font-bold'>Contactenos</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndSections