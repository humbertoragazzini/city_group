"use client";
import styles from './styles.module.scss'
import Image from 'next/image';
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
import StartSection from '@/app/components/organism/startSection/StartSection'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const sectionIS = true

export default function About_us() {

  const moving_box = React.useRef<HTMLDivElement>(null);
  const mainContainer = React.useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
  
    let ctx = gsap.context((self) => {

      // const appearElements = self.selector!('.moveUp')
      // const photoContainers = self.selector!('.perspectiveEffectContainer')
      const itemText = self.selector!('.item_text');
      const background = self.selector!('.'+styles.gradiantBackground);
      gsap.set(moving_box.current,{zIndex:1});
      gsap.set(styles.about_us_header,{zIndex:10});
      gsap.set('.content_box',{zIndex:10});
      // gsap.set(('.'+styles.cards) ,{perspective:'100vw',perspectiveOrigin: '0%'});
      // gsap.set('.imagesContainers' ,{perspective:'100vw',perspectiveOrigin: '0%'});
      // gsap.to(mainContainer.current,{opacity:1,duration:1,delay:0.25});

      // const timelineElement = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,start: "top top",end: "bottom top",scrub: 5,markers: false},duration:10}) 
      // timelineElement.fromTo(moving_box.current,{y:'0'},{y:'200vh',duration:10},0)
 
      itemText.forEach((item:any,i:Number) => {
        console.log(item.getClientRects()[0])
        const clientR = item.getClientRects()[0]
        const movement = clientR.x + (clientR.width/2)
        console.log(item.getClientRects()[0].x + item.getClientRects()[0].width)
        const timeline = gsap.timeline({scrollTrigger:{trigger:item,start:'5% center',end:'bottom center', markers:false}})
        const timelineLigth = gsap.timeline({scrollTrigger:{trigger:item,start:'-50% center',scrub:true,end:'center center', markers:true}})
        if(i===0){
          timelineLigth.fromTo(background,{background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 0%)'},{background: 'radial-gradient(circle at '+(movement+'px')+' 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)'},0)
        }else{
          timelineLigth.to(background,{background: 'radial-gradient(circle at '+(movement+'px')+' 50%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)'},0)
        }
        timeline.to(item.childNodes,{scale:1,duration:0.5,ease: "bounce.out"},0)
        timeline.to(item.childNodes,{color:'white',duration:0.5,ease: "bounce.out"},0)
      });
      // if(props.isFirst){
      //   gsap.fromTo('.firstBigTitle',{opacity:0,x:'-100vw'},{opacity:1,x:0,stagger:0.5,duration:2})
      //   appearElements.forEach((element:Element) => {
      //     const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
      //     timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(10px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
      //   });
      //   photoContainers.forEach((element:Element) => {
      //     const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
      //     photoContainerTL.fromTo(element,{opacity:1,rotationY:90,rotationX:0,translateX:'100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
      //     photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
      //   });
      // }else{
      //   if(props.left){
      //     appearElements.forEach((element:Element) => {
      //       const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
      //       timelineElement.fromTo(element,{x:'-100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
      //     });
      //     photoContainers.forEach((element:Element) => {
      //       const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
      //       photoContainerTL.fromTo(element,{opacity:1,rotationY:90,rotationX:0,translateX:'100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
      //       photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
      //     });
      //   }else{
      //     appearElements.forEach((element:Element) => {
      //       const timelineElement = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "-25% 85%",end: "100% 85%",scrub: 5,markers: false},duration:10}) 
      //       timelineElement.fromTo(element,{x:'100vw',opacity:0,filter: 'blur(20px)'},{x:0,opacity:1,filter: 'blur(0px)',duration:10},0)
      //     });
      //     photoContainers.forEach((element:Element) => {
      //       const  photoContainerTL = gsap.timeline({scrollTrigger: {trigger: element,pinSpacing:false,pinSpacer:'none',start: "top center",end: "bottom center",scrub: 2,markers: false},duration:20}) 
      //       photoContainerTL.fromTo(element,{opacity:1,rotationY:-90,rotationX:0,translateX:'-100vw',translateZ:0},{opacity:1,rotationX:0,rotationY:0,translateX:0,translateZ:0,duration:1},0)    
      //       photoContainerTL.fromTo(element.lastChild,{backdropFilter: 'blur(0px)'},{backdropFilter: 'blur(15px)',duration:1},0)    
      //     });
      //   }
      // }

      // // Creating Timeline
      // if(props.isFirst){
      //   var mainTimeLine = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "top center",end: "bottom bottom",scrub: 2,markers: false},duration:20}) 
      //   var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,start: "top center",end: "bottom center",scrub: 2,markers: false},duration:67}) 
      //   var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "top top",end: "bottom bottom",markers: false}}) 
      // }else{
      //   var timeLineBackGround = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-5% center",end: "bottom center",scrub: 2,markers: false},duration:33.5}) 
      //   var timeLineBackGround2 = gsap.timeline({scrollTrigger: {trigger: mainContainer.current,pinSpacing:false,pinSpacer:'none',start: "-25% top",end: "bottom bottom",markers: false}}) 
      // }



      // let mm = gsap.matchMedia();
      // mm.add("(max-width: 768px)", () => {

      //   // Animation 
      //   if(props.isFirst){
      //     timeLineBackGround.to(background.current,{filter: 'brightness(0.25) blur(10px)',duration:5},10)
      //     timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
      //     timeLineBackGround.to(background.current,{x:0,duration:5},30)
      //   }else{
      //     timeLineBackGround.to(background.current,{filter: 'brightness(0.25) blur(10px)',duration:5},5)
      //     timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
      //     timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)
      //   }
        
      //   return () => {};
      // });
      
      // mm.add("(min-width: 768px)", () => {

      //   // Animation 
      //   if(props.isFirst){
      //     timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},10)
      //     timeLineBackGround.to(background.current,{opacity:1,duration:5},0)
      //     timeLineBackGround.to(background.current,{x:0,duration:5},30)  
      //   }else{
      //     timeLineBackGround.fromTo(background.current,{opacity:0},{opacity:1,duration:5},0)
      //     timeLineBackGround.to(background.current,{filter: 'brightness(0.4) blur(2px)',duration:10},5)
      //     timeLineBackGround.fromTo(background.current,{x:0},{x:0,duration:1},30)       
      //   }
        
      //   return () => {};
      // });
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 



  return (
    <>
      <div className={'min-h-screen relative bg-slate-900 overflow-hidden '+styles.main} ref={mainContainer}>
        <div className={"fixed w-screen h-screen z-20 "+styles.gradiantBackground} >

        </div>
        <div className={'flex flex-col justify-center items-center min-w-screen overflow-visible z-30 '+styles.about_us_header}>
          <h1 className='text-white text-5xl  font-bold'>Acerca de nosotros</h1>
          {/* <Image
            className='relative rounded-full top-0'
            src="/steelframing.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image> */}
        </div>
        <div className='absolute top-0 left-0 w-screen h-screen z-10' ref={moving_box}></div>
        <div className='content_box w-100 lg:w-4/5 xl:w-1/2 mx-auto p-9 relative'>
          <p className="text-white mt-20">
            Bienvenidos a [Nombre de tu Empresa], tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
          </p>
          <div className="grid grid-cols-10 mt-20 mb-20">

            {/* TEXT */}
            <div className={"col-start-1 col-end-7 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Nuestra Trayectoria
              </h2>
              <p className="text-white">
                Fundada en [Año de Fundación], [Nombre de tu Empresa] ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-start-6 col-end-10 pb-0"}>
              <div className="flex justify-end overflow-hidden relative">
                <Image
                  src="/steelframing.jpeg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                ></Image>
              </div>
            </div>

            {/* TEXT */}
            <div className={"col-start-4 col-end-10 pb-32 item_text "+styles.item}>
          <h2 className="text-white text-2xl font-bold">
            Nuestros Pilares
          </h2>
          <p className="text-white">
            En [Nombre de tu Empresa], entendemos la importancia de ofrecer servicios de alta calidad. Nos enorgullecemos de nuestra dedicación a los más altos estándares en cada proyecto que emprendemos. La calidad del servicio es la piedra angular de nuestra filosofía empresarial.
          </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>

            </div>

            {/* TEXT */}
            <div className={"col-start-2 col-end-7 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Confianza y Transparencia
              </h2>
              <p className="text-white">
                La confianza es un valor incalculable en cualquier relación comercial. En [Nombre de tu Empresa], trabajamos incansablemente para ganar y mantener la confianza de nuestros clientes. Nuestro compromiso con la transparencia en cada paso del proceso nos distingue y nos ayuda a construir relaciones duraderas.
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>
 
            </div>

            {/* TEXT */}
            <div className={"col-start-1 col-end-8 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Eficiencia y Velocidad
              </h2>
              <p className="text-white">
                Entendemos la importancia de la eficiencia en el mundo actual. Nuestro equipo altamente capacitado y experimentado se esfuerza por completar cada proyecto de manera oportuna, sin comprometer la calidad del trabajo. La rapidez no es solo un objetivo, es nuestra promesa.
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>

            </div>

            {/* TEXT */}
            <div className={"col-start-3 col-end-9 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Profesionalismo en Todo Momento
              </h2>
              <p className="text-white">
                En [Nombre de tu Empresa], nos enorgullecemos de contar con un equipo de profesionales altamente capacitados y apasionados por lo que hacen. Cada miembro de nuestro equipo aporta un nivel inigualable de experiencia y dedicación a cada proyecto. Esto garantiza que cada trabajo se realice con el más alto nivel de profesionalismo.
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>

            </div>

            {/* TEXT */}
            <div className={"col-start-1 col-end-6 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Nuestra Misión
              </h2>
              <p className="text-white">
                Nuestra misión es ser líderes en la industria de Steel Framing, Electricidad y Refrigeración, brindando soluciones de alta calidad que superen las expectativas de nuestros clientes. Nos esforzamos por innovar y adaptarnos a las últimas tendencias y tecnologías, garantizando así un servicio excepcional.
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>

            </div>

            {/* TEXT */}
            <div className={"col-start-4 col-end-10 pb-32 item_text "+styles.item}>
              <h2 className="text-white text-2xl font-bold">
                Contáctanos
              </h2>
              <p className="text-white">
                Estamos ansiosos por trabajar contigo y ayudarte a hacer realidad tus proyectos de construcción y servicios de instalaciones. ¡No dudes en contactarnos para discutir cómo podemos hacer que tus ideas cobren vida!
              </p>
            </div>
            {/* IMAGE */}
            <div className={"col-span-10 pb-32"}>
              <div className="flex justify-center items-center">
                <button className='text-black transition-all duration-200 font-bold text-2xl px-9 py-5 rounded-full bg-green-600 border-green-600 border-4 hover:bg-black hover:text-white'>Contactanos</button>
              </div>
            </div>


          </div>

          













        </div>
      </div>      
    </>
  )
}