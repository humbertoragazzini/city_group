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
  left: Boolean;
}

const Sections: React.FC<Item> = (props) => {

  console.log(props.backgroundURL)
  const mainContainer = React.useRef<HTMLDivElement>(null);
  const firstBox = React.useRef<HTMLDivElement>(null);
  const background = React.useRef<HTMLDivElement>(null);
  const test = React.useRef<HTMLDivElement>(null);
  

    useLayoutEffect(() => {
    
    let ctx = gsap.context((self) => {

      // const heightAllContent = self.selector!('.allContent')[0].getClientRects()[0].height
      // const widthFirstBigTitle = self.selector!('.allContent')[0].getClientRects()[0].width
      // const appearElements = self.selector!('.steelQuestions')
      const appearElements = self.selector!('.moveUp')
      // console.log(appearElements)

      // Setting up style
      // gsap.set(mainContainer.current,{height:'400vh'});
      gsap.set(background.current,{backgroundImage:props.backgroundURL});
      // gsap.set('.questions',{perspectiveOrigin: '100%',perspective:'100vw'});
      // gsap.set('.imagesContainers' ,{perspective:'100vw',perspectiveOrigin: '25% 25%'});
      // gsap.set('.imagesContainers' ,{transformOrigin:'50% 100%'});
      gsap.to(mainContainer.current,{opacity:1,duration:1,delay:0.25});
      if(props.isFirst){
        gsap.fromTo('.firstBigTitle',{opacity:0,x:'-100vw'},{opacity:1,x:0,stagger:0.5,duration:2})
        appearElements.forEach(element => {
          const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
          timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(10px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
        });
      }else{
        if(props.left){
          appearElements.forEach(element => {
            const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
            timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
          });
        }else{
          appearElements.forEach(element => {
            const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
            timelineElement.fromTo(element,{x:'100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
          });
        }
      }

      // Creating Timeline

      if(props.isFirst){
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "top top",end: "bottom top",scrub: 2,markers: false},duration:67}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,start: "top center",end: "bottom center",scrub: 2,markers: false},duration:67}) 
      var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',pin:test.current,start: "top top",end: "bottom bottom",markers: true}}) 
      }else{
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-5% center",end: "bottom center",scrub: 2,markers: false},duration:67}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-5% center",end: "bottom center",scrub: 2,markers: false},duration:33.5}) 
      var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',pin:test.current,start: "top top",end: "bottom bottom",markers: true}}) 
      }



      let mm = gsap.matchMedia();

            mm.add("(max-width: 768px)", () => {

        // Animation 
        if(props.isFirst){
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},10)
          timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{x:0,duration:5},30)
          // mainTimeLine.fromTo('.firstBigTitle',{x:0},{x:widthFirstBigTitle,duration:10, stagger:5},1)
          // mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
          // mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
          // mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-250,duration:40},25)
          // mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10, stagger:2},10)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:-50,duration:8},22)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:170,y:250,duration:8},30)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},38)   
        }else{
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},5)
          timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
          timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)
          // mainTimeLine.fromTo('.firstBigTitle',{x: -widthFirstBigTitle},{x:'0',duration:20, stagger:0.5},1)
          // mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
          // mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
          // mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-75,duration:40},25)  
          // mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10,stagger:2},7)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:200,duration:8},20)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:275,y:-250,duration:8},28)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},36)        
        }
        
        return () => { // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
      });
      
      mm.add("(min-width: 768px)", () => {

        // Animation 
        if(props.isFirst){
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},10)
          timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{x:0,duration:5},30)
          // mainTimeLine.fromTo('.firstBigTitle',{x:0},{x:widthFirstBigTitle,duration:10, stagger:5},1)
          // mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
          // mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
          // mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-250,duration:40},25)
          // mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10, stagger:2},10)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:-50,duration:8},22)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:170,y:250,duration:8},30)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},38)   
        }else{
          timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
          timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},5)
          timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)
          // mainTimeLine.fromTo('.firstBigTitle',{x: -widthFirstBigTitle},{x:'0',duration:20, stagger:0.5},1)
          // mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
          // mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
          // mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
          // mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-75,duration:40},25)  
          // mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10,stagger:2},7)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:200,duration:8},20)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:275,y:-250,duration:8},28)        
          // mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},36)        
        }
        
        return () => { // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
      });
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 

  return (
    <main className={"w-full relative opacity-0"} ref={mainContainer}>

      {/* moving boxes left*/}
      {props.left &&  <div className='min-w-screen  overflow-hidden'>
                  <div className={'min-w-screen min-h-screen relative top-0 pt-8 '+styles.titles_to_appear} >
                    <div className="questions relative w-full h-full p-4 allContent my-12">
                      <div className='w-full relative'>
                        <div className="grid grid-cols-2 sm:px-2 md:px-4 lg:px-6 xl:px-0 mx-auto" style={{maxWidth:'1450px'}}>
                          <div className="col-span-2 md:col-span-1">
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white moveUp '+ styles.header1 : 'relative text-white moveUp '+ styles.header1}><span className='block firstBigTitle'>{props.titleFirst}</span><span className='block firstBigTitle'>{props.titleSecond}</span></h1>
                              </div>
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block mb-5'>Que es Steel Framing?</span>
                                </h3>        
                              </div>  
                            </div>
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className={'col-span-4'} ref={firstBox}>
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl steelQuestions bottom-0 pb-4 second moveUp '+styles.header5}>
                                    Construccion con perfiles de acero galvanizado
                                  </p>
                                  <p className='text-white text-xl steelQuestions bottom-0 pb-4 second moveUp'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                                  </p> 
                                </div>  
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header5}>
                                    Por que usar Steel Framing contra la construccion clasica
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas
                                  </p>  
                                </div>
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header5}>
                                    Ventajas del Steel Framing
                                  </p>  
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Menos Mantenimiento
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.
                                  </p> 
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Eficiencia Energética
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    El steel framing facilita la instalación de aislamiento de alta calidad. Esto puede resultar en un mayor rendimiento energético y en menores costos de calefacción y refrigeración a lo largo del tiempo.
                                  </p> 
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Menor Peso Estructural
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    El acero es considerablemente más liviano que el concreto o el ladrillo, lo que puede reducir la carga total en los cimientos y la estructura en general. Esto puede ser particularmente beneficioso en suelos con capacidades de carga limitadas.
                                  </p> 
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Mayor Eficiencia 
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp '>
                                    Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.
                                  </p> 
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Amplia flexibilidad
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas
                                  </p> 
                                  <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Duracion del steel framing
                                  </p>  
                                  <p className='text-white text-md steelQuestions bottom-0 pb-4 second moveUp'>
                                    Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.
                                  </p>  
                                </div>
                                
                              </div>  
                            </div>
                          </div>
                          <div className="col-span-1 hidden md:flex h-screen items-center">
                            <div className='pb-10 w-full flex justify-center' ref={test}>
                              <div className='p-8 w-5/6 bg-slate-900 overflow-hidden border-slate-800 border-2 rounded-2xl'>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="696.918"
                                  height="521.277"
                                  version="1.1"
                                  viewBox="0 0 184.393 137.921"
                                  className='w-full'
                                >
                                  <g transform="translate(-22.41 -10.7)">
                                    <g>
                                      <path
                                        fill="gray"
                                        strokeWidth="0.183"
                                        d="M50.315 91.546H104.82300000000001V144.657H50.315z"
                                      ></path>
                                      <path
                                        fill="#ccc"
                                        strokeWidth="0.239"
                                        d="M125.439 54.159H179.947V144.307H125.439z"
                                      ></path>
                                      <path
                                        fill="gray"
                                        strokeWidth="0.182"
                                        d="M23.061 144.307H205.454V147.801H23.061z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="#b3b3b3"
                                        strokeWidth="2"
                                        d="M23.411 11.7H205.804V147.62099999999998H23.411z"
                                      ></path>
                                      <text
                                        xmlSpace="preserve"
                                        style={{}}
                                        x="122.644"
                                        y="44.375"
                                        fill="#fff"
                                        stroke="#fff"
                                        strokeWidth="0.265"
                                        fontFamily="sans-serif"
                                        fontSize="25.4"
                                        fontWeight="bold"
                                      >
                                        <tspan
                                          x="122.644"
                                          y="44.375"
                                          fill="#fff"
                                          stroke="#fff"
                                          strokeWidth="0.265"
                                        >
                                          70%
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                </svg>
                              </div>
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
                        <div className="grid grid-cols-2 sm:px-4 md:px-6 lg:px-9 xl:px-9 2xl:px-6 mx-auto" style={{maxWidth:'1450px'}}>
                          <div className="col-span-1 hidden md:flex h-screen items-center">
                            <div className='pb-10 w-full flex justify-center' ref={test}>
                              <div className='p-8 w-5/6 bg-slate-900 overflow-hidden border-slate-800 border-2 rounded-2xl'>
                                <Image
                                  className=''
                                  src="/pexels-binyamin-mellish-186077.jpg"
                                  width={800}
                                  height={800}
                                  alt="Picture of the author"
                                ></Image>
                              </div>
                            </div> 
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className="col-span-4">
                                <h1 className={props.isFirst ? 'relative text-white text-right moveUp '+ styles.header1 : 'relative text-white text-right moveUp '+ styles.header1}><span className='block firstBigTitle'>{props.titleFirst+' LEFT'}</span><span className='block firstBigTitle'>{props.titleSecond}</span></h1>
                              </div>
                              <div className='col-span-4'>
                                <h3 className={'text-white steelQuestions bottom-0 first moveUp ' + styles.header3}>
                                  <span className='block text-right mb-5'>Que es Steel Framing?</span>
                                </h3>        
                              </div>  
                            </div>
                            <div className="grid grid-cols-4 gap-4 w-full">
                              <div className={'col-span-4'} ref={firstBox}>
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pb-4 second moveUp '+styles.header5}>
                                    Construccion con perfiles de acero galvanizado
                                  </p>
                                  <p className='text-white text-xl text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                                  </p> 
                                </div>  
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header5}>
                                    Por que usar Steel Framing contra la construccion clasica
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas
                                  </p>  
                                </div>
                                <div className={'w-full mb-4 relative'}>
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header5}>
                                    Ventajas del Steel Framing
                                  </p>  
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Menos Mantenimiento
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.
                                  </p> 
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Eficiencia Energética
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    El steel framing facilita la instalación de aislamiento de alta calidad. Esto puede resultar en un mayor rendimiento energético y en menores costos de calefacción y refrigeración a lo largo del tiempo.
                                  </p> 
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Menor Peso Estructural
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    El acero es considerablemente más liviano que el concreto o el ladrillo, lo que puede reducir la carga total en los cimientos y la estructura en general. Esto puede ser particularmente beneficioso en suelos con capacidades de carga limitadas.
                                  </p> 
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Mayor Eficiencia 
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp '>
                                    Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.
                                  </p> 
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Amplia flexibilidad
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas
                                  </p> 
                                  <p className={'text-white text-xl text-right steelQuestions bottom-0 pt-9 pb-4 second moveUp '+styles.header6}>
                                    Duracion del steel framing
                                  </p>  
                                  <p className='text-white text-md text-right steelQuestions bottom-0 pb-4 second moveUp'>
                                    Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.
                                  </p>  
                                </div>
                              </div>  
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>   
      }
  
      <div className='backgrounSecond' ref={background}></div>
    </main>
  )
}

export default Sections 