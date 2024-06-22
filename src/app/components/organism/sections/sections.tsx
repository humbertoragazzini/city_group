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
  
  useLayoutEffect(() => {
  
    let ctx = gsap.context((self) => {

      const appearElements = self.selector!('.moveUp')
      const photoContainers = self.selector!('.perspectiveEffectContainer')
      gsap.set(background.current,{backgroundImage:props.backgroundURL});
      gsap.set(('.'+styles.cards) ,{perspective:'100vw',perspectiveOrigin: '0%'});
      gsap.set('.imagesContainers' ,{perspective:'100vw',perspectiveOrigin: '0%'});
      gsap.to(mainContainer.current,{opacity:1,duration:1,delay:0.25});
      
      
      if(props.isFirst){
        gsap.fromTo('.firstBigTitle',{opacity:0,x:'-100vw'},{opacity:1,x:0,stagger:0.5,duration:2})
        appearElements.forEach((element:Element) => {
          const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
          timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(10px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
        });
        photoContainers.forEach((element:Element) => {
          const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
          photoContainerTL.fromTo(element,{opacity:1,rotationY:90,rotationX:0,translateX:'100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
          photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
        });
      }else{
        if(props.left){
          appearElements.forEach((element:Element) => {
            const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
            timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
          });
          photoContainers.forEach((element:Element) => {
            const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
            photoContainerTL.fromTo(element,{opacity:1,rotationY:90,rotationX:0,translateX:'100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
            photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
          });
        }else{
          appearElements.forEach((element:Element) => {
            const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
            timelineElement.fromTo(element,{x:'100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
          });
          photoContainers.forEach((element:Element) => {
            const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "top center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
            photoContainerTL.fromTo(element,{opacity:1,rotationY:-90,rotationX:0,translateX:'-100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
            photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
          });
        }
      }

      // Creating Timeline
      if(props.isFirst){
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "top center",end: "bottom bottom",scrub: 2,markers: false},duration:20}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,start: "top center",end: "bottom center",scrub: 2,markers: false},duration:67}) 
        var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "top top",end: "bottom bottom",markers: false}}) 
      }else{
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-5% center",end: "bottom center",scrub: 2,markers: false},duration:33.5}) 
        var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-25% top",end: "bottom bottom",markers: false}}) 
      }



      let mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {

        // Animation 
        if(props.isFirst){
          timeLineBackGround.to(background.current,{filter: 'brightness(0.25) blur(10px)',duration:5},10)
          timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{x:0,duration:5},30)
        }else{
          timeLineBackGround.to(background.current,{filter: 'brightness(0.25) blur(10px)',duration:5},5)
          timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
          timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)
        }
        
        return () => {};
      });
      
      mm.add("(min-width: 768px)", () => {

        // Animation 
        if(props.isFirst){
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},10)
          timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{x:0,duration:5},30)  
        }else{
          timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},5)
          timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)       
        }
        
        return () => {};
      });
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 

  return (
    <main className={"w-full relative opacity-0"} ref={mainContainer}>

      {/* moving boxes right*/}
      {props.left &&  <div className='min-w-screen  overflow-hidden'>
                  <div className={'min-w-screen min-h-screen relative top-0 pt-8 '+styles.titles_to_appear} >
                    <div className="questions relative w-full h-full p-4 allContent my-12">
                      <div className='w-full relative'>
                        <div className="grid grid-cols-2 sm:px-2 md:px-4 lg:px-6 xl:px-0 mx-auto" style={{maxWidth:'1450px'}}>
                          <div className="col-span-2 md:col-span-1">

                            {/* Main title */}
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white moveUp '+ styles.header1 : 'relative text-white moveUp '+ styles.header1}><span className='block mb-6 firstBigTitle'>{props.titleFirst[0]}</span><span className='block mb-9 firstBigTitle'>{props.titleFirst[1] ? props.titleFirst[1] : ''}</span></h1>
                              </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 w-full">

                            {/* What services we provide */}
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block mb-5'>{props.WSProvide}</span>
                                </h3>        
                              </div>  

                            {/* Explanation of our services */}
                              <div className={'col-span-4'} ref={firstBox}>

                                {/* Left side of our services content */}
                                <div>
                                  {
                                    props.EOservices.map((content,i)=>{
                                      return  <div key={i} className={'w-full mb-4 relative'}>
                                                <p className={'text-white steelQuestions bottom-0 pb-4 second moveUp '+styles.header5}>
                                                  {content.text}
                                                </p>
                                                <p className='text-white steelQuestions bottom-0 pb-4 second moveUp'>
                                                  {content.content}
                                                </p> 
                                              </div> 
                                    })
                                  }
                                </div>

                                {/* Advantage with text coming from the left mobile+icon / desktop only text */}
                                {
                                  props.TOSProvided.map((content,i)=>{
                                    return  <div key={i} className={'w-full mb-4 relative'}>
                                              <h1 className='text-white font-bold mt-5 mb-5 moveUp'>{content.text}</h1>
                                              <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                                {content.content}
                                              </p> 
                                              <div className="moveUp block md:hidden main_points h-full w-full flex flex-col justify-center items-center">
                                                {content.icon}                                                
                                                <h1 className='text-white font-bold mt-5 mb-5 uppercase'>{content.text}</h1>
                                              </div>
                                            </div>
                                  })
                                }
                              </div>  
                            </div>
                          </div>
                          {/* Desktop version of muving boxes + text */}
                          <div className="col-span-1 hidden md:block">
                            <div className="grid grid-cols-4 gap-4 w-full opacity-0">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white moveUp '+ styles.header1 : 'relative text-white moveUp '+ styles.header1}><span className='block mb-6 firstBigTitle'>{props.titleFirst[0]}</span><span className='block mb-9 firstBigTitle'>{props.titleFirst[1] ? props.titleFirst[1] : ''}</span></h1>
                              </div>
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block mb-5'>{props.WSProvide}</span>
                                </h3>       
                              </div>  
                            </div>
                            <div className='relative  imagesContainers pb-10 w-full flex flex-col justify-center items-center' ref={test}>
                              {
                                props.highlight.map((content,i)=>{
                                    return  <div key={i} className={'my-9 top-1/4 p-0 w-5/6 relative overflow-visible '+styles.cards}>
                                              <div className="perspectiveEffectContainer">
                                                <div className="p-9 flex flex-col justify-center">
                                                  <h1 className='text-white text-center text-bold relative z-50 '>
                                                    {/* ICON SPEED*/}
                                                    {content.icon}
                                                  </h1>
                                                  <h3 className='text-white text-center relative z-50 '>{content.text}</h3>
                                                </div>
                                                <div className={'absolute top-0 left-0 h-full w-screen border-transparent border-2 rounded-2xl '+ styles.backdrop_filter}></div>    
                                              </div>                          
                                            </div>
                                  })
                              }
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
      }
 
      {/* moving boxes left*/}
      {!props.left &&  <div className='min-w-screen  overflow-hidden'>
                  <div className={'min-w-screen min-h-screen relative top-0 pt-8 '+styles.titles_to_appear} >
                    <div className="questions relative w-full h-full p-4 allContent my-12">
                      <div className='w-full relative'>
                        <div className="grid grid-cols-2 sm:px-2 md:px-4 lg:px-6 xl:px-0 mx-auto" style={{maxWidth:'1450px'}}>
                          {/* Desktop version of muving boxes + text */}
                          <div className="col-span-1 hidden md:block">
                            <div className="grid grid-cols-4 gap-4 w-full opacity-0">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white moveUp '+ styles.header1 : 'relative text-white moveUp '+ styles.header1}><span className='block mb-6 firstBigTitle'>{props.titleFirst[0]}</span><span className='block mb-9 firstBigTitle'>{props.titleFirst[1] ? props.titleFirst[1] : ''}</span></h1>
                              </div>
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block mb-5'>{props.WSProvide}</span>
                                </h3>       
                              </div>  
                            </div>
                            <div className='relative  imagesContainers pb-10 w-full flex flex-col justify-center items-center' ref={test}>
                            <div className='relative  imagesContainers pb-10 w-full flex flex-col justify-center items-center' ref={test}>
                              {
                                props.highlight.map((content,i)=>{
                                    return  <div key={i} className={'my-9 top-1/4 p-0 w-5/6 relative overflow-visible '+styles.cards}>
                                              <div className="perspectiveEffectContainer">
                                                <div className="p-9 flex flex-col justify-center">
                                                  <h1 className='text-white text-center text-bold relative z-50 '>
                                                    {/* ICON SPEED*/}
                                                    {content.icon}
                                                  </h1>
                                                  <h3 className='text-white text-center relative z-50 '>{content.text}</h3>
                                                </div>
                                                <div className={'absolute top-0 right-0 h-full w-screen border-transparent border-2 rounded-2xl '+ styles.backdrop_filter}></div>    
                                              </div>                          
                                            </div>
                                  })
                              }
                            </div> 
                            </div> 
                          </div>
                          <div className="col-span-2 md:col-span-1">

                            {/* Main title */}
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white moveUp '+ styles.header1 : 'relative text-white moveUp '+ styles.header1}><span className='block mb-6 firstBigTitle'>{props.titleFirst[0]}</span><span className='block mb-9 firstBigTitle'>{props.titleFirst[1] ? props.titleFirst[1] : ''}</span></h1>
                              </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 w-full">

                            {/* What services we provide */}
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block mb-5'>{props.WSProvide}</span>
                                </h3>        
                              </div>  

                            {/* Explanation of our services */}
                              <div className={'col-span-4'} ref={firstBox}>

                                {/* Left side of our services content */}
                                <div>
                                  {
                                    props.EOservices.map((content,i)=>{
                                      return  <div key={i} className={'w-full mb-4 relative'}>
                                                <p className={'text-white steelQuestions bottom-0 pb-4 second moveUp '+styles.header5}>
                                                  {content.text}
                                                </p>
                                                <p className='text-white steelQuestions bottom-0 pb-4 second moveUp'>
                                                  {content.content}
                                                </p> 
                                              </div> 
                                    })
                                  }
                                </div>

                                {/* Advantage with text coming from the left mobile+icon / desktop only text */}
                                {
                                  props.TOSProvided.map((content,i)=>{
                                    return  <div key={i} className={'w-full mb-4 relative'}>
                                              <h1 className='text-white font-bold mt-5 mb-5 moveUp'>{content.text}</h1>
                                              <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                                {content.content}
                                              </p> 
                                              <div className="moveUp block md:hidden main_points h-full w-full flex flex-col justify-center items-center">
                                                {content.icon}                                                
                                                <h1 className='text-white font-bold mt-5 mb-5 uppercase'>{content.text}</h1>
                                              </div>
                                            </div>
                                  })
                                }
                              </div>  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
      }
      {/* Background */}
      <div className='backgrounSecond' ref={background}></div>

    </main>
  )
}

export default Sections 