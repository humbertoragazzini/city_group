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
          <div className="col-span-2 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg style={{width:"70px",height:"70px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold'>MAS RAPIDO</h1>
            </div>
          </div>
          <div className="col-span-2 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg style={{width:"70px",height:"70px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold'>EFICIENCIA ENERGETICA</h1>
            </div>
          </div>
          <div className="col-span-2 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg style={{width:"70px",height:"70px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold'>DURABILIDAD</h1>
            </div>
          </div>
          <div className="col-span-2 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg style={{width:"70px",height:"70px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold'>FLEXIBILIDAD</h1>
            </div>
          </div>
          <div className="col-span-2 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg style={{width:"70px",height:"70px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold'>MAS LIVIANO</h1>
            </div>
          </div>
          <div className="col-span-6 h-full">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <button className='text-black transition-all duration-200 font-bold text-2xl px-9 py-5 rounded-full bg-green-600 border-green-600 border-4 hover:bg-black hover:text-white'>Contactanos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndSections