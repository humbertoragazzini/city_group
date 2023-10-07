"use client"
import '@/app/globals.scss';
import styles from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const EndSections: React.FC<any> = (props) =>{

  const main = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    let ctx = gsap.context((self) => {

      const roof = self.selector!('#roof')
      const grua = self.selector!('#grua')
      const allgrua = self.selector!('#allgrua')
      const rope = self.selector!('#rope')
      const floor = self.selector!('#floor')
      const all_svg = self.selector!('#all_svg')
      // const intro = self.selector!('.intro')
      gsap.set(allgrua,{x:-20,opacity:1})
      gsap.set(roof,{transformOrigin:'25% 0%'})
      gsap.set(grua,{x:-60})
      gsap.set(rope,{attr:{ d:'M89.974 -8.386H90.848V103.833H89.974z'}})
      gsap.set(roof,{x:-80,y:-20})
      gsap.set(floor,{opacity:0})
      gsap.fromTo(all_svg,{opacity:0},{opacity:1,duration:1,delay:0,ease:'lineal'})
      gsap.fromTo(roof,{y:60},{y:-20,duration:1,delay:1,ease:'lineal'})
      gsap.fromTo(rope,{attr:{ d:'M89.974 -8.386H90.848V103.833H89.974z'}},{delay:1,duration:1,attr:{ d:'M89.974 -8.386H90.848V23.833H89.974z'}})
      gsap.to(roof,{x:0,duration:1,delay:2,ease:'lineal'})
      gsap.to(grua,{x:20,duration:1,delay:2,ease:'lineal'})
      gsap.to(roof,{y:0,duration:1,delay:3,ease:'lineal'})
      gsap.to(rope,{delay:3,duration:1,attr:{ d:'M89.974 -8.386H90.848V43.833H89.974z'}})
      gsap.to(allgrua,{opacity:0,duration:1,delay:4})
      gsap.to(grua,{opacity:0,duration:0.5,delay:4})
      // gsap.to(floor,{opacity:0,duration:1,delay:4})
      // gsap.fromTo(roof,{y:-20},{y:0,duration:1,delay:2,ease:'lineal'})
      // gsap.fromTo(roof,{rotate:-80},{rotate:0,duration:1,delay:3})
      // gsap.fromTo(grua,{x:-35},{x:0,duration:1,delay:2})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:0})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:2})

      // gsap.fromTo(roof,{x:-35},{x:0,duration:1,delay:5})
      // gsap.fromTo(roof,{rotate:-80},{rotate:0,duration:1,delay:3})
      // gsap.fromTo(grua,{x:-35},{x:0,duration:1,delay:2})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:0})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:2})

      // gsap.fromTo(path2,{opacity:0},{opacity:1,duration:1,delay:2})
      // gsap.fromTo(path3,{opacity:0},{opacity:1,duration:1,delay:0})
      // const mainTL = gsap.timeline({scrollTrigger: {trigger: main.current,pinSpacing:false,pinSpacer:'none',start: "top top",end: "bottom top",scrub: 5,markers: true},duration:10})
      // .fromTo(intro,{y:0,opacity:1},{y:'50vh',opacity:0,duration:10})
      // let mm = gsap.matchMedia();
      // mm.add("(max-width: 768px)", () => {
      //   return () => { // optional
      //     // custom cleanup code here (runs when it STOPS matching)
      //   };
      // });
      
      // mm.add("(min-width: 768px)", () => {
      //   return () => { // optional
      //     // custom cleanup code here (runs when it STOPS matching)
      //   };
      // });
      
    }, main);
    
    return () => ctx.revert();
  
  }, []); 

  return (
      <div className='h-screen w-screen flex justify-center items-center' ref={main}>
        {props.svg}
        {/* Background */}
        <div className={styles.background} ></div>
      </div>
  )
}
export default EndSections