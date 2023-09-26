"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Item } from '@/types/types';


const EndSections = () => {
  return (
    <div className={"grid w-screen "+style.endSections }>
      <h1>END OF SCREEN</h1>
    </div>
  )
}

export default EndSections