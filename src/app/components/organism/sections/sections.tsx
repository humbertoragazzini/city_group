"use client";
import '@/app/globals.scss'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BooleanLiteral } from 'typescript';
import {Item} from '@/types/types'

gsap.registerPlugin(ScrollTrigger)

const Sections: React.FC<Item> = (props) => {

  const mainContainer = React.useRef<HTMLDivElement>(null);
  const firstBox = React.useRef<HTMLDivElement>(null);
  const background = React.useRef<HTMLDivElement>(null);
  const test = React.useRef<HTMLDivElement>(null);
  


  return (
    <main className={"w-full relative opacity-0"} ref={mainContainer}>

<div className='min-w-screen  overflow-hidden'>
                  <div className={'min-w-screen min-h-screen relative top-0 pt-8 '+styles.titles_to_appear} >

                  </div>
                </div>   

      {/* Background */}
      <div className='backgrounSecond' ref={background}></div>

    </main>
  )
}

export default Sections 