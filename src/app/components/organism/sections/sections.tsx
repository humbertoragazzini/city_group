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

      const heightAllContent = self.selector!('.allContent')[0].getClientRects()[0].height
      const widthFirstBigTitle = self.selector!('.allContent')[0].getClientRects()[0].width
      console.log(heightAllContent)
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
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-5% center",end: "bottom center",scrub: 2,markers: true},duration:67}) 
      }else{
        var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-5% center",end: "bottom center",scrub: 2,markers: true},duration:67}) 
        var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,start: "-25% center",end: "bottom center",scrub: 2,markers: true},duration:33.5}) 
      }

      // Animation 
      if(props.isFirst){
        timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},10)
        timeLineBackGround.to(background.current,{opacity:1,duration:10},0)
        mainTimeLine.fromTo('.firstBigTitle',{x:0},{x:widthFirstBigTitle,duration:10, stagger:5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
        mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
        mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
        mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-75,duration:40},25)
        mainTimeLine.fromTo('.'+styles.image_component,{opacity:0,rotationX:-55,translateZ:-2000,duration:10},{opacity:1,rotationX:0,translateZ:0,duration:10, stagger:2},10)        
        mainTimeLine.fromTo('.'+styles.image_component+'.firstImage',{x:0,y:0},{x:250,y:-50,duration:8},22)        
        mainTimeLine.fromTo('.'+styles.image_component+'.secondImage',{x:0,y:0},{x:170,y:250,duration:8},30)        
        mainTimeLine.fromTo('.'+styles.image_component+'.thirdImage',{x:0,y:0},{x:0,y:0,duration:8},38)   
      }else{
        timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:10},0)
        mainTimeLine.fromTo('.firstBigTitle',{x: -widthFirstBigTitle},{x:'0',duration:20, stagger:0.5},1)
        mainTimeLine.fromTo('.steelQuestions.first',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:1},5)
        mainTimeLine.fromTo('.steelQuestions.first',{y:'100vh'},{y:0,duration:10},7.5)
        mainTimeLine.fromTo('.steelQuestions.second',{y:'100vh'},{y:0,duration:10},15.5)
        mainTimeLine.fromTo('.steelQuestions.second',{opacity:0,filter: 'blur(10px)'},{opacity:1,duration:10,filter: 'blur(0px)',stagger:2},10)
        mainTimeLine.fromTo('.allContent',{y:0},{y:-heightAllContent-75,duration:40},37)  
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
          <div className="questions relative w-full h-full p-4 md:p-6 lg:p-7 xl:p-9 allContent my-12 sm:my-16 md:my-28 lg:my-40 xl:my-56">
            <h1 className={props.isFirst ? 'absolute text-white '+ styles.header1 : 'relative text-white '+ styles.header1}><span className='block firstBigTitle'>{props.titleFirst}</span><span className='block firstBigTitle'>{props.titleSecond}</span></h1>
            <div className='w-full relative'>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className='col-span-2'>
                  <h3 className={'text-white steelQuestions bottom-0 first ' + styles.header3}>
                    <span className='block mb-5'>Que es Steel Framing?</span>
                  </h3>        
                </div>  
              </div>
              <div className="grid grid-cols-4 gap-4 w-full">
                <div className={'col-span-4 md:col-span-2 '}>
                  <div className={'w-full mb-4 relative'}>
                    <p className={'text-white text-xl steelQuestions bottom-0 pb-4 second '+styles.header5}>
                      Construccion con perfiles de acero galvanizado
                    </p>
                    <p className='text-white text-xl steelQuestions bottom-0 pb-4 second'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
                    </p> 
                    <Image
                      className='w-full rounded-2xl steelQuestions second mb-4'
                      src="/barGraph.svg"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    ></Image>
                  </div>  
                  <div className={'w-full mb-4 relative'}>
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header5}>
                      Por que usar Steel Framing contra la construccion clasica
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas
                    </p>  
                  </div>
                  <div className={'w-full mb-4 relative'}>
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header5}>
                      Ventajas del Steel Framing
                    </p>  
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Menos Mantenimiento
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.
                    </p> 
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Eficiencia Energética
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      El steel framing facilita la instalación de aislamiento de alta calidad. Esto puede resultar en un mayor rendimiento energético y en menores costos de calefacción y refrigeración a lo largo del tiempo.
                    </p> 
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Menor Peso Estructural
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      El acero es considerablemente más liviano que el concreto o el ladrillo, lo que puede reducir la carga total en los cimientos y la estructura en general. Esto puede ser particularmente beneficioso en suelos con capacidades de carga limitadas.
                    </p> 
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Mayor Eficiencia 
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.
                    </p> 
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Amplia flexibilidad
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas
                    </p> 
                    <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
                      Duracion del steel framing
                    </p>  
                    <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
                      Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.
                    </p>  
                  </div>
                  
                </div>  
                <div className='hidden md:block md:col-span-2 pb-10 imagesContainers'>
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
            </div>
          </div>
        </div>

      </div>    
      <div className='backgrounSecond' ref={background}></div>
    </main>
  )
}

export default Sections 