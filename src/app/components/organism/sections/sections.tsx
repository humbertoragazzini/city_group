"use client";
import '@/app/globals.scss'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BooleanLiteral } from 'typescript';

gsap.registerPlugin(ScrollTrigger)

interface Item {
  isFirst: Boolean;
  titleFirst: string;
  titleSecond: string;
  backgroundURL:string;
}

const Sections: React.FC<Item> = (props) => {

  console.log(props.backgroundURL)
  const mainContainer = React.useRef<HTMLDivElement>(null);
  const firstBox = React.useRef<HTMLDivElement>(null);
  const background = React.useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
    
    let ctx = gsap.context((self) => {
      
      // Setting up style
      gsap.set(mainContainer.current,{height:'400vh'});
      gsap.set(background.current,{backgroundImage:props.backgroundURL});
      gsap.set('.questions',{perspectiveOrigin: '100%',perspective:'100vw'});
      gsap.set('.imagesContainers' ,{perspective:'100vw',perspectiveOrigin: '25% 25%'});
      gsap.set('.imagesContainers' ,{transformOrigin:'50% 100%'});
      gsap.to(mainContainer.current,{opacity:1,duration:1,delay:0.25});
      if(props.isFirst){
        gsap.fromTo('.firstBigTitle',{opacity:0,x:'-100vw'},{opacity:1,x:0,stagger:0.5,duration:2})
      }

      // Creating Timeline

      if(props.isFirst){
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "top top",end: "bottom top",scrub: 2,markers: true},duration:67}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-25% center",end: "bottom center",scrub: 2,markers: true},duration:67}) 
      }else{
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-25% center",end: "bottom center",scrub: 2,markers: true},duration:67}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-25% center",end: "bottom center",scrub: 2,markers: true},duration:67}) 
      }

      // Animation 
      if(props.isFirst){
        timeLineBackGround.to(background.current,{opacity:1,duration:10},0)
        mainTimeLine.fromTo('.firstBigTitle',{x:0},{x:'100vw',duration:10, stagger:5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
        mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
        mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},20)
        mainTimeLine.fromTo('.allContent',{y:0},{y:'-150vh',duration:40},37)
        mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10, stagger:2},10)        
        mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:-50,duration:8},22)        
        mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:170,y:250,duration:8},30)        
        mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},38)   
      }else{
        timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:10},0)
        mainTimeLine.fromTo('.firstBigTitle',{x:'-100vw'},{x:'0',duration:20, stagger:0.5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
        mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
        mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},20)
        mainTimeLine.fromTo('.allContent',{y:0},{y:'-150vh',duration:40},37)  
        mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10,stagger:2},7)        
        mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:200,duration:8},20)        
        mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:275,y:-250,duration:8},28)        
        mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},36)        
      }
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 

  return (
    <main className={"w-full relative opacity-0"} ref={mainContainer}>

      {/* moving boxes */}
      <div className='min-w-screen'>

        <div className={'min-w-screen min-h-screen fixed top-0 pt-8 '+styles.titles_to_appear} ref={firstBox}>
          <div className="questions relative w-full h-full p-9 allContent">
            <h1 className={props.isFirst ? 'absolute text-white' : 'relative text-white'}><span className='block firstBigTitle'>{props.titleFirst}</span><span className='block firstBigTitle'>{props.titleSecond}</span></h1>
            <div className='w-full relative'>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className='col-span-2'>
                  <h3 className='text-white text-6xl steelQuestions bottom-0 first'>
                    <span className='block mb-5'>Que es Steel Framing?</span>
                  </h3>        
                </div>  
              </div>
              <div className="grid grid-cols-4 gap-4 w-full">
                <div className={'col-span-2'}>
                  <p className='text-white text-3xl steelQuestions bottom-0 pb-4 second'>
                    Construccion con perfiles de acero galvanizado
                  </p>  
                  <p className='text-white text-2xl steelQuestions bottom-0 pb-4 second'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                  </p>     
                  <p className='text-white text-3xl steelQuestions bottom-0 pb-4 second'>
                    Por que usar Steel Framing contra la construccion clasica
                  </p>  
                  <p className='text-white text-2xl steelQuestions bottom-0 pb-4 second'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                  </p>   
                  <p className='text-white text-3xl steelQuestions bottom-0 pb-4 second'>
                    Ventajas del Steel Framing
                  </p>  
                  <p className='text-white text-2xl steelQuestions bottom-0 pb-4 second'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                  </p>     
                  <p className='text-white text-3xl steelQuestions bottom-0 pb-4 second'>
                    Duraction del Steel Framing
                  </p>  
                  <p className='text-white text-2xl steelQuestions bottom-0 pb-4 second'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                  </p>   
                  
                </div>  
                <div className='col-span-2 pb-10 imagesContainers'>
                  <div className={'rounded-2xl mb-4 absolute top-12 left-12 overflow-hidden firstImage '+styles.image_component}>
                    <Image
                      src="/pexels-binyamin-mellish-186077.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    ></Image>
                  </div>
                  <div className={'rounded-2xl mb-4 absolute top-6 left-6 overflow-hidden secondImage '+styles.image_component}>
                    <Image
                      src="/house-1477041_1920.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    ></Image>
                  </div>
                  <div className={'rounded-2xl mb-4 absolute top-0 left-0 overflow-hidden thirdImage '+styles.image_component}>
                    <Image
                      src="/hp-tiranteria-perfil-c-galvanizado.jpg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    ></Image>
                  </div>

                </div> 
              </div>
              <div className="absolute grid grid-cols-2 gap-4 w-full p-10 steelQuestions second">
                <div className='col-span-2 p-10'><hr></hr></div>
              </div>
            </div>
          </div>
        </div>

      </div>    
      <div className='backgrounSecond' ref={background}></div>
    </main>
  )
}

export default Sections 