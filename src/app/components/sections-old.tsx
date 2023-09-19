"use client";
import '../globals.scss'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BooleanLiteral } from 'typescript';

gsap.registerPlugin(ScrollTrigger)

interface Item {
  isFirst: string;
  titleFirst: string;
  titleSecond: string;
}

const Sections: React.FC<Item> = (props) => {

  const mainContainer = React.useRef<HTMLDivElement>(null);
  const main = React.useRef<HTMLDivElement>(null);
  const titles = React.useRef<HTMLHeadingElement>(null);
  const firstBox = React.useRef<HTMLDivElement>(null);
  const secondBox = React.useRef<HTMLDivElement>(null);
  const thirdBox = React.useRef<HTMLDivElement>(null);
  const fourthBox = React.useRef<HTMLDivElement>(null);
  const fivethBox = React.useRef<HTMLDivElement>(null);
  const TitleAppearSecond = React.useRef<HTMLDivElement>(null);
  const TitleAppearThird = React.useRef<HTMLDivElement>(null);
  const TitleAppearFourth = React.useRef<HTMLDivElement>(null);
  const TitleAppearFiveth = React.useRef<HTMLDivElement>(null);
  const backgrounSecond = React.useRef<HTMLDivElement>(null);
  const backgrounThird = React.useRef<HTMLDivElement>(null);
  const backgrounFourth = React.useRef<HTMLDivElement>(null);
  const backgrounFiveth = React.useRef<HTMLDivElement>(null);

  // old animtaions
  // useLayoutEffect(() => {
    
  //   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
  //   let ctx = gsap.context(() => {
  //     gsap.to(mainContainer.current,{opacity:1,duration:1})
  //     // const outerWidth = (window.outerWidth)
  //     // const timeLine = gsap.timeline({scrollTrigger: {trigger: main.current,pinSpacing:false,start: "top bottom",end: "120% bottom",scrub: 2,markers: false},duration:60})     

  //     /////////////////////////////////////////////////////
  //     /////////// AUTOMATIC ANIMATIONS KICK IN ////////////
  //     /////////////////////////////////////////////////////

  //     gsap.fromTo(backgrounSecond.current,{opacity:1,filter: 'brightness(1) blur(0px)'},{filter: 'brightness(0.3) blur(10px)',duration:2})
  //     gsap.fromTo(firstBox.current,{opacity:0},{opacity:1,duration:1})
  //     gsap.fromTo(firstBox.current!.childNodes[0].childNodes[0].childNodes[0].childNodes,{x:'-100vw',opacity:0},{x:0,opacity:1,stagger:0.5,duration:2})



  //     /////////////////////////////////////////////////////
  //     ////////////// FIRST ANIMATION SCREEN ///////////////
  //     /////////////////////////////////////////////////////

  //     // Seting sizes and props
  //     gsap.set(firstBox.current, {perspective:'100vw',perspectiveOrigin: '50% 100%'});
  //     gsap.set(firstBox.current!.childNodes[1], {transformOrigin:'0% 100%'});
  //     gsap.set(firstBox.current!.childNodes[2], {transformOrigin:'0% 100%'});
  //     gsap.set(firstBox.current!.childNodes[3], {transformOrigin:'0% 100%'});

  //     // Timelines variables
  //     const timeLineBox = gsap.timeline({scrollTrigger: {trigger: firstBox.current,pinSpacing:false,start: "top top",end: "25% top",scrub: 2,markers: true},duration:10}) 

  //     // Animations
  //     timeLineBox.fromTo(backgrounSecond.current,{x:0},{x:0,duration:1},3)
  //     .fromTo(firstBox.current!.childNodes[1],{rotationX:45, opacity:0, scale:1,z:-550}, { rotationX:0, opacity:1,z:0,duration: 5},0)
  //     .fromTo(firstBox.current!.childNodes[2],{rotationX:45, opacity:0, scale:1,z:-550}, { rotationX:0, opacity:1,z:0,duration: 5},2.5) 
  //     .fromTo(firstBox.current!.childNodes[3],{rotationX:45, opacity:0, scale:1,z:-550}, { rotationX:0, opacity:1,z:0,duration: 5},5)
  //     .fromTo(firstBox.current!.childNodes[1].childNodes[1].childNodes,{y:-25,opacity:0}, {y:0,opacity:1,scale:1,stagger:0.5,duration: 5},0)
  //     .fromTo(firstBox.current!.childNodes[2].childNodes[1].childNodes,{y:-25,opacity:0}, {y:0,opacity:1,scale:1,stagger:0.5,duration: 5},2.5) 
  //     .fromTo(firstBox.current!.childNodes[3].childNodes[1].childNodes,{y:-25,opacity:0}, {y:0,opacity:1,scale:1,stagger:0.5,duration: 5},5); 


 
  //     // Animation Content 2
  //     const timeLineBox2 = gsap.timeline({scrollTrigger: {trigger: secondBox.current,pinSpacing:false,start: "-50% top",end: "0% top",scrub: 2,markers: true},duration:10}) 
  //     .fromTo(backgrounThird.current,{opacity:0},{opacity:1,duration:1},0)//h5
      
  //     // Animation Content 3
  //     const timeLineBox3 = gsap.timeline({scrollTrigger: {trigger: thirdBox.current,pinSpacing:false,start: "-50% top",end: "0% top",scrub: 2,markers: true},duration:10}) 
  //     .fromTo(backgrounFourth.current,{opacity:0},{opacity:1,duration:1},0)//h5
      
  //     // Animation Content 4
  //     const timeLineBox4 = gsap.timeline({scrollTrigger: {trigger: fourthBox.current,pinSpacing:false,start: "-50% top",end: "0% top",scrub: 2,markers: true},duration:10}) 
  //     .fromTo(backgrounFiveth.current,{opacity:0},{opacity:1,duration:1},0)//h5
      
  //   }, main); // <- IMPORTANT! Scopes selector text
    
  //   return () => ctx.revert(); // cleanup
    
  // }, []); 

    useLayoutEffect(() => {
    
    let ctx = gsap.context((self) => {

      // Seting up style
      gsap.set(mainContainer.current,{height:'400vh'});
      gsap.set(backgrounSecond.current,{opacity:1});
      gsap.set(backgrounSecond.current,{opacity:1});
      gsap.set('.content',{perspectiveOrigin: '0%',perspective:'100vw'});
      gsap.set('.questions',{perspectiveOrigin: '50%',perspective:'100vw'});
      gsap.set('.blue-box',{transformOrigin:'100% 100%'})
      gsap.to(mainContainer.current,{opacity:1,duration:1,delay:0.25});
      if(props.isFirst){
        gsap.fromTo('.firstBigTitle',{opacity:0,x:'-100vw'},{opacity:1,x:0,stagger:0.5,duration:2})
      }

      // Creating Timeline

      if(props.isFirst){
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "top top",end: "bottom top",scrub: 2,markers: true},duration:67}) 
      }else{
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-25% top",end: "bottom top",scrub: 2,markers: true},duration:67}) 
      }
      // Animation Content 1
      // questions
      if(props.isFirst){
        mainTimeLine.fromTo('.firstBigTitle',{x:0},{x:'100vw',duration:10, stagger:5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)'},5)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
        mainTimeLine.fromTo('.blue-box.first',{opacity:0, rotationY:45,translateZ:-1000},{opacity:1, rotationY:0,translateZ:0,duration:10,stagger:2.5},15)
        mainTimeLine.fromTo('.allContent.first',{y:0},{y:'-150vh',duration:30},37)
        mainTimeLine.fromTo('.allContent.first',{opacity:1},{opacity:0,rotationX:-55,translateZ:-2000,duration:10},57)
        console.log('true')
      }else{
        mainTimeLine.fromTo('.firstBigTitle',{x:'-100vw'},{x:'0',duration:20, stagger:0.5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)'},17)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},19.5)
        mainTimeLine.fromTo('.blue-box.first',{opacity:0, rotationY:45,translateZ:-1000},{opacity:1, rotationY:0,translateZ:0,duration:10,stagger:2.5},27)
        mainTimeLine.fromTo('.allContent.first',{y:0},{y:'-100vh',duration:30},37)
        mainTimeLine.fromTo('.firstBigTitle',{y:0},{y:'-150vh',duration:30},37)
        mainTimeLine.fromTo('.allContent.first',{opacity:1},{opacity:0,rotationX:-55,translateZ:-2000,duration:10},69)
        console.log('false')
      }


      // mainTimeLine.fromTo('.blue-box',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2.5},17.5)
      // mainTimeLine.fromTo('.steelQuestions.first',{x:0},{x:'-75vw',duration:10},50)

      // mainTimeLine.fromTo(backgrounThird.current,{opacity:0},{opacity:1,duration:10},45)//h5
      // mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)',y:0},{opacity:1,duration:10,filter: 'blur(0px)'},45)//h5
      // mainTimeLine.fromTo('.steelQuestions.second',{y:0},{y:'-75vh',duration:10},47.5)//h5
      // mainTimeLine.fromTo('.steelQuestions.second',{x:0},{x:'-75vw',duration:10},100)//h5

      // mainTimeLine.fromTo(backgrounFourth.current,{opacity:0},{opacity:1,duration:5},95)//h5
      // mainTimeLine.fromTo('.steelQuestions.third',{opacity:0,filter: 'blur(10px)',y:0},{opacity:1,duration:10,filter: 'blur(0px)'},95)//h5
      // mainTimeLine.fromTo('.steelQuestions.third',{y:0},{y:'-75vh',duration:10},97.5)//h5
      // mainTimeLine.fromTo('.steelQuestions.third',{x:0},{x:'-75vw',duration:10},140)//h5


      // mainTimeLine.fromTo(backgrounFiveth.current,{opacity:0},{opacity:1,duration:5},135)//h5
      // mainTimeLine.fromTo('.steelQuestions.four',{opacity:0,filter: 'blur(10px)',y:0},{opacity:1,duration:10,filter: 'blur(0px)'},135)//h5
      // mainTimeLine.fromTo('.steelQuestions.four',{y:0},{y:'-75vh',duration:10},137.5)//h5
      // mainTimeLine.fromTo('.steelQuestions.four',{x:0},{x:'-75vw',duration:10},190)//h5
      mainTimeLine.fromTo('.content',{borderRadius:'15px'},{borderRadius:'15px',duration:1},67)//h5
      

      // Animation Content 2
      
      // Animation Content 3
      
      
      // Animation Content 4
      
    }, mainContainer); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
  }, []); 

  return (
    <main className={"w-full relative opacity-0"} ref={mainContainer}>
      {/* OLD CODE */}
      {/* moving boxes */}
      {/* <div className='w-full'>
        <div className='w-full lastBox' ref={firstBox}>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className="col-span-2 pb-5">
                <h1 className='text-left text-9xl bold text-white'><span className='block'>Steel</span><span className='block'>Framing</span></h1>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 flex justify-center items-center'>
                <Image
                  className='rounded w-full'
                  src="/steelframing.jpeg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                ></Image>
              </div>
              <div className='col-span-2 xl:col-span-1 text-box blue-box pl-10 pr-10 pt-5 pb-5 overflow-hidden'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Que es el Steel Framing?</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Por que usar Steel Framing sobre la construccion clasica de material?</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
              <div className='col-span-2 xl:col-span-1 image-box'></div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Es el Steel Framing el futuro de la construccion?</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full p-10">
              <div className='col-span-2 p-10'><hr></hr></div>
            </div>
        </div>
        <div className='w-full lastBox ' ref={secondBox}>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className="col-span-2 pb-5">
                <h2 className='text-center text-5xl bold text-white'>Electricidad</h2>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Instalaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Reparaciones y Verificaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
              <div className='col-span-2 xl:col-span-1 image-box'></div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Actualizaciones de Instalaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full p-10">
              <div className='col-span-2 p-10'><hr></hr></div>
            </div>
        </div>
        <div className='w-full lastBox ' ref={thirdBox}>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className="col-span-2 pb-5">
                <h2 className='text-center text-5xl bold text-white'>Reparacion e instalacion equipos de refrigeracion</h2>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Instalaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Reparaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
              <div className='col-span-2 xl:col-span-1 image-box'></div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Actualizaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full p-10">
              <div className='col-span-2 p-10'><hr></hr></div>
            </div>
        </div>
        <div className='w-full lastBox ' ref={fourthBox}>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className="col-span-2 pb-5">
                <h2 className='text-center text-5xl bold text-white'>Redes de Agua</h2>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Instalaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Reparaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
              <div className='col-span-2 xl:col-span-1 image-box'></div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full pl-5 pr-5 pb-5">
              <div className='col-span-2 xl:col-span-1 image-box'></div>
              <div className='col-span-2 xl:col-span-1 text-box'>
                <h3 className='text-3xl text-left text-white mb-3 mt-3'>Actualizaciones</h3>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
                <p className='text-white text-left mt-3 mb-3'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                </p>
              </div>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full p-10">
              <div className='col-span-2 p-10'><hr></hr></div>
            </div>
        </div>
      </div>     */}

      {/* NEW CODE */}
      {/* moving boxes */}
      <div className='min-w-screen'>

        <div className='min-w-screen min-h-screen fixed lastBox titles_to_appear top-0 pt-8' ref={firstBox}>
          <div className="questions relative w-full h-full p-9">
            <h1 className={props.isFirst ? 'absolute' : 'relative'}><span className='block firstBigTitle'>{props.titleFirst}</span><span className='block firstBigTitle'>{props.titleSecond}</span></h1>
            <div className='w-full relative allContent first'>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className='col-span-2 text-box'>
                  <h3 className='text-white text-6xl steelQuestions bottom-0 first'>
                    <span className='block mb-5'>Que es Steel Framing?</span>
                  </h3>        
                </div>  
              </div>
              <div className="content grid grid-cols-2 gap-4 w-full">
                <div className='col-span-2 xl:col-span-1 text-box'>
                  <div className="content grid grid-cols-2  gap-4 w-full">
                    <div className='col-span-2 xl:col-span-1  blue-box first rounded-2xl overflow-hidden'>
                      <Image
                        src="/pexels-binyamin-mellish-186077.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      ></Image>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first text-box p-7'>
                      <p className='text-white text-left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                      </p>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first text-box p-7'>
                      <p className='text-white text-left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                      </p>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first rounded-2xl overflow-hidden'>
                      <Image
                        src="/house-1477041_1920.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 xl:col-span-1 text-box blue-box first p-7'>
                  <p className='text-white text-left mt-3 mb-3'>
                    <strong className='text-2xl'>El steel framing</strong> es un sistema constructivo que utiliza perfiles de acero galvanizado para la estructura de una edificación. 
                  </p>
                  <p className='text-white text-left mt-3 mb-3'>
                    Este sistema se caracteriza por ser liviano, resistente, y fácil de instalar. Además, el acero galvanizado es un material duradero y resistente a la corrosión, lo que lo hace ideal para construcciones en zonas costeras o húmedas. El steel framing se utiliza en la construcción de viviendas, edificios comerciales, y estructuras industriales. Este sistema constructivo también es conocido por su eficiencia energética y su capacidad para reducir los costos de construcción y mantenimiento.  
                  </p>

                </div>
                <div className='col-span-2 xl:col-span-1 text-box blue-box first p-7'>
                  <p className='text-white text-left mt-3 mb-3'>
                    <strong className='text-2xl'>Los perfiles de acero galvanizado</strong> son elementos estructurales que se utilizan en la construcción de edificios y estructuras. Estos perfiles se caracterizan por su alta resistencia y durabilidad, lo que los hace ideales para soportar cargas pesadas. El acero galvanizado es un material que ha sido recubierto con una capa de zinc para protegerlo de la corrosión y el óxido. Los perfiles galvanizados se utilizan en una amplia variedad de aplicaciones, desde la construcción de marcos para paredes y techos hasta la fabricación de estructuras para puentes y torres de transmisión eléctrica .
                  </p>
                  <p  className='text-white text-left mt-3 mb-3'>Existen varios tipos de perfiles galvanizados, cada uno con sus propias características y aplicaciones. Algunos ejemplos comunes incluyen:</p>
                    <ul>
                      <li>
                        <p className='text-white'>
                          <strong className='text-2xl'>Perfiles C:</strong> Estos perfiles tienen forma de <strong>C</strong> y se utilizan comúnmente en la construcción de marcos para paredes y techos.
                        </p>
                      </li>
                      <li>
                        <p className='text-white'>
                          <strong className='text-2xl'>Perfiles U:</strong> Estos perfiles tienen forma de <strong>U</strong> y se utilizan comúnmente como soportes estructurales.
                        </p>
                      </li>
                      <li>
                        <p className='text-white'>
                          <strong className='text-2xl'>Perfiles T:</strong> Estos perfiles tienen forma de <strong>T</strong> y se utilizan comúnmente como vigas y soportes estructurales.
                        </p>
                      </li>
                      <li>
                        <p className='text-white'>
                          <strong className='text-2xl'>Perfiles H:</strong> Estos perfiles tienen forma de <strong>H</strong> y se utilizan comúnmente en la construcción de estructuras para puentes y torres de transmisión eléctrica.
                        </p>
                      </li>
                    </ul>
                </div>
                <div className='col-span-2 xl:col-span-1 text-box'>
                  <div className="content grid grid-cols-2  gap-4 w-full">
                    <div className='col-span-2 xl:col-span-1  blue-box first rounded-2xl overflow-hidden'>
                      <Image
                        src="/pexels-binyamin-mellish-186077.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      ></Image>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first text-box p-7'>
                      <p className='text-white text-left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                      </p>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first text-box p-7'>
                      <p className='text-white text-left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto cupiditate odio esse sunt dolores nihil laudantium labore, sequi dolorem sapiente obcaecati modi doloremque ducimus amet, itaque explicabo molestiae dolore!
                      </p>
                    </div>
                    <div className='col-span-2 xl:col-span-1  blue-box first rounded-2xl overflow-hidden'>
                      <Image
                        src="/house-1477041_1920.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content absolute grid grid-cols-2 gap-4 w-full p-10">
                <div className='col-span-2 p-10'><hr></hr></div>
              </div>
            </div>
          </div>
        </div>
        <div className='min-w-screen min-h-screen fixed lastBox ' ref={secondBox}>

        </div>
        <div className='min-w-screen min-h-screen fixed lastBox ' ref={thirdBox}>

        </div>
        <div className='min-w-screen min-h-screen fixed lastBox ' ref={fourthBox}>

        </div>

      </div>    



      {/* titles */}
      {/* <div className='FirstTitleAppear flex justify-start align-top titles_to_appear' ref={TitleAppearSecond}><h1><span className='block'>Steel</span><span className='block'>Framing</span></h1></div>
      <div className='SecondTitleAppear flex justify-start align-top titles_to_appear' ref={TitleAppearThird}><h1><span className='block'>Electricidad</span></h1></div>
      <div className='ThirdTitleAppear flex justify-start align-top titles_to_appear' ref={TitleAppearFourth}><h1><span className='block'>Refrigeracion</span></h1></div>
      <div className='FourthTitleAppear flex justify-start align-top titles_to_appear' ref={TitleAppearFiveth}><h1><span className='block'>Agua</span></h1></div>     */}
      {/* backgrounds */}
      <div className='backgrounSecond' ref={backgrounSecond}></div>
      <div className='backgrounThird' ref={backgrounThird}></div>
      <div className='backgrounFourth' ref={backgrounFourth}></div>
      <div className='backgrounFiveth' ref={backgrounFiveth}></div>    
    </main>
  )
}

export default Sections 