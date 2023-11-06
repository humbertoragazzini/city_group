"use client";
import styles from './styles.module.scss'
import Image from 'next/image';
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
import StartSection from '@/app/components/organism/startSection/StartSection'
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedBlackButton from '@/app/components/atoms/animated_black_button/AnimatedBlackButton'
const sectionIS = true

export default function About_us() {

  const moving_box = React.useRef<HTMLDivElement>(null);
  const mainContainer = React.useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
  
    let ctx = gsap.context((self) => {
      
      const square_test = self.selector!('.test_square');
      const itemText = self.selector!('.item_text');
      const conectingLines = self.selector!('.conecting_lines');
      const LastItemText = self.selector!('.last_item');
      const focusSquares = self.selector!('.focus_squares');
      const blurWords = self.selector!('.blur_words');
      gsap.set(moving_box.current,{zIndex:1});
      gsap.set(styles.about_us_header,{zIndex:10});
      gsap.set('.content_box',{zIndex:10});
      const timelineLigth:any = [];
      const timelineWords:any = [];

      gsap.to(mainContainer.current,{opacity:1,duration:1})

      
      let mm = gsap.matchMedia();
      mm.add("(max-width: 1024px)", () => {

        const timelineLigth:any = [];

        conectingLines.forEach((item:any,i:any) => {
          const timeline = gsap.timeline({scrollTrigger:{trigger:item,start:'5% center',end:'bottom center', markers:false}})
          timeline.fromTo(item,{height:0},{height:'100%'},0)
        })
        itemText.forEach((item:any,i:any) => {
          const background = self.selector!('.'+styles.gradiantBackground);
          const backgroundIMG = self.selector!('.'+styles.background);
          console.log(item.getClientRects()[0])
          const clientR = item.getClientRects()[0]
          const movement = clientR.x + (clientR.width/2)
          console.log(item.getClientRects()[0].x + item.getClientRects()[0].width)
          const timeline = gsap.timeline({scrollTrigger:{trigger:item,start:'5% center',end:'bottom center', markers:false}})
          timelineLigth[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-50% center',scrub:true,end:'center center', markers:false}, onComplete:()=>{
            // console.log(timelineLigth.kill())
            if(i===6){
              for(let j=0; j<7 ;j++){
                console.log('kill all')
                // timelineLigth[j].kill()
              }
            }
          }})
          if(i===0){
            timelineLigth[i].fromTo(background,{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%, rgba(240,240,240,0) 0%, rgba(0,0,0,1) 100%)'},{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(240,240,240,0) 50%, rgba(0,0,0,1) 100%)'},0)
          }else if(i === 6){
            timelineWords[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-25% center',scrub:2,end:'center center', markers:false},duration:10})
            timelineWords[i].fromTo(blurWords,{filter:'blur(10px)',opacity:0,scale:0.5},{filter:'blur(0px)',opacity:1,scale:1,stagger:0.5,duration:1},0)
            timelineLigth[i].to(background,{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%, rgba(240,240,240,0) 100%, rgba(0,0,0,1) 100%)'},0)
          }
          timeline.to(item.childNodes,{scale:1,duration:0.5,ease: "bounce.out"},0)
          timeline.to(item.childNodes,{color:'white',duration:0.5,ease: "bounce.out"},0)
        });
        
        return () => {};
      });
      
      mm.add("(min-width: 1024px)", () => {

        conectingLines.forEach((item:any,i:any) => {
          const timeline = gsap.timeline({scrollTrigger:{trigger:itemText[i],start:'25% 25%',end:'100% 25%',scrub:true, markers:false}})
          timeline.fromTo(item,{height:0,width:'10px'},{width:'10px',height:'70%'},0)
        })
        itemText.forEach((item:any,i:any) => {
          const background = self.selector!('.'+styles.gradiantBackground);
          const backgroundIMG = self.selector!('.'+styles.background);
          console.log(item.getClientRects()[0])
          const clientR = item.getClientRects()[0]
          const movement = clientR.x + (clientR.width/2)
          console.log(item.getClientRects()[0].x + item.getClientRects()[0].width)
          const timeline = gsap.timeline({scrollTrigger:{trigger:item,start:'5% center',end:'bottom center', markers:false}})
          timelineLigth[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-50% center',scrub:true,end:'45% center', markers:true},duration:10, onComplete:()=>{
            // console.log(timelineLigth.kill())
            if(i===6){
              for(let j=0; j<7 ;j++){
                console.log('kill all')
                // timelineLigth[j].kill()
              }
            }
          }})
          if(i===0){
            timelineLigth[i].fromTo(background,{background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 0%)'},{background: 'radial-gradient(circle at '+(movement+'px')+' 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)'},0)
            timelineLigth[i].to(item.childNodes,{scale:1,duration:0.5},0);
            timelineLigth[i].to(item.childNodes,{color:'white',duration:0.5},0);
          }else if(i === 6){
            // timelineLigth[i].fromTo(itemText[6],{paddingTop:'auto',zIndex:'auto'},{paddingTop:'30vh',zIndex:'60'})
            // timelineLigth[i].fromTo(itemText[6],{paddingBottom:'auto',zIndex:'auto'},{paddingBottom:'30vh',zIndex:'60'})
            timelineWords[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-25% center',scrub:true,end:'center center', markers:true},duration:10})
            timelineWords[i+1] = gsap.timeline({scrollTrigger:{trigger:item,start:'-25% center',scrub:true,end:'center center', markers:true},duration:20})
            timelineWords[i+1].fromTo(blurWords,{filter:'blur(10px)',opacity:0,scale:0.5},{filter:'blur(0px)',opacity:1,scale:1,stagger:1,duration:10},0)
            timelineLigth[i].to(background,{background: 'radial-gradient(circle at '+(movement+'px')+' 50%, rgba(255, 255, 255, 0) 100%, rgba(0, 0, 0, 1) 100%)',zIndex:'0',duration:10},0)

            timelineLigth[i].to(item.childNodes,{scale:1,duration:0.5},0);
            timelineLigth[i].to(item.childNodes,{color:'white',duration:0.5},0);
          }else{
            timelineLigth[i].to(background,{background: 'radial-gradient(circle at '+(movement+'px')+' 50%, rgba(255, 255, 255, 0) 10%, rgba(0, 0, 0, 1) 50%)',duration:10},0)
            timelineLigth[i].to(focusSquares,{x:0,y:0,duration:10,onUpdate:()=>{
              console.log(item.getClientRects()[0])
              gsap.fromTo(square_test,{x:square_test.getClientRects()[0].left,y:square_test.getClientRects()[0].top},{y:item.getClientRects()[0].top,x:item.getClientRects()[0].left})
            }},0)
            timeline.to(item.childNodes,{scale:1,duration:0.5,ease: "bounce.out"},0)
            timeline.to(item.childNodes,{color:'white',duration:0.5,ease: "bounce.out"},0)
          }
        });
        
        return () => {};
      });
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 



  return (
    <>
      <div className={'min-h-screen relative overflow-hidden '+styles.main} ref={mainContainer}>
        {/* <div className={'fixed w-screen h-screen '+styles.background}>

        </div> */}
        <div className={"fixed w-screen h-screen z-20 "+styles.gradiantBackground} >

        </div>
        <div className={'flex flex-col justify-center items-center min-w-screen overflow-visible z-30 '+styles.about_us_header}>
          <h1 className='text-white text-5xl  font-bold'>Acerca de nosotros</h1>
        </div>
        <div className='absolute top-0 left-0 w-screen h-screen z-10' ref={moving_box}></div>
        {/* <div className='fixed top-0 left-0 w-screen h-screen'>
          <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'95%'}}>
            <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'90%'}}>
              <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'90%'}}>
                <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'85%'}}>
                  <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'85%'}}>
                    <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'85%'}}>
                      <div className='absolute border-2 border-white focus_squares' style={{width:'95%',height:'75%'}}>
                        <div className='absolute border-2 border-white focus_squares test_square' style={{width:'95%',height:'75%'}}>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='content_box w-100 lg:w-4/5 xxl:w-1/2 mx-auto p-9 relative'>
          <p className="text-white text-3xl lg:mt-20">
            Bienvenidos a <strong>STEEL CITY / RGA</strong>, tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
          </p>
          <div className="grid grid-cols-10">
            {/* TEXT */}
            <div className={"relative bg-black col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen item_text text-xl "+styles.item}>
              <h2 className="text-white text-2xl font-bold mb-4">
                Nuestra Trayectoria
              </h2>
              <p className="text-white">
                Fundada en 2017, <strong>STEEL CITY / RGA</strong> ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
              </p>
              <div className='conecting_lines absolute bg-white  h-full right-0 overflow-visible flex justify-center mt-24'>

              </div>
            </div>

            {/* TEXT */}
            <div className={"relative bg-black border-white col-start-1 col-end-11 lg:col-start-5 lg:col-end-10 pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen item_text text-xl  "+styles.item}>
              <h2 className="text-white text-2xl font-bold mb-4">
                Nuestros Pilares
              </h2>
              <p className="text-white">
                En <strong>STEEL CITY / RGA</strong>, entendemos la importancia de ofrecer servicios de alta calidad. Nos enorgullecemos de nuestra dedicación a los más altos estándares en cada proyecto que emprendemos. La calidad del servicio es la piedra angular de nuestra filosofía empresarial.
              </p>
              <div className='conecting_lines absolute bg-white h-full left-0 overflow-visible flex justify-center mt-24'>

              </div>
            </div>

            {/* TEXT */}
            <div className={"relative bg-black border-white col-start-1 col-end-11 lg:col-start-1 lg:col-end-6  pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen  item_text text-xl "+styles.item}>
              <h2 className="text-white text-3xl font-bold mb-4">
                Confianza y Transparencia
              </h2>
              <p className="text-white">
                La confianza es un valor incalculable en cualquier relación comercial. En <strong>STEEL CITY</strong> y <strong>RGA</strong>, trabajamos incansablemente para ganar y mantener la confianza de nuestros clientes. Nuestro compromiso con la transparencia en cada paso del proceso nos distingue y nos ayuda a construir relaciones duraderas.
              </p>
              <div className='conecting_lines absolute  bg-white  h-full right-0 overflow-visible flex justify-center mt-24'>

              </div>
            </div>

            {/* TEXT */}
            <div className={"relative bg-black col-start-1 col-end-11 lg:col-start-5 lg:col-end-10  pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen  item_text text-xl "+styles.item}>
              <h2 className="text-white text-3xl font-bold mb-4">
                Eficiencia y Velocidad
              </h2>
              <p className="text-white">
                Entendemos la importancia de la eficiencia en el mundo actual. Nuestro equipo altamente capacitado y experimentado se esfuerza por completar cada proyecto de manera oportuna, sin comprometer la calidad del trabajo. La rapidez no es solo un objetivo, es nuestra promesa.
              </p>
              <div className='conecting_lines absolute  bg-white  h-full left-0 overflow-visible flex justify-center mt-24'>

              </div>
            </div>

            {/* TEXT */}
            <div className={"relative bg-black  col-start-1 col-end-11 lg:col-start-1 lg:col-end-6  pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen  item_text text-xl "+styles.item}>
              <h2 className="text-white text-3xl font-bold mb-4">
                Profesionalismo en Todo Momento
              </h2>
              <p className="text-white">
                En <strong>STEEL CITY / RGA</strong>, nos enorgullecemos de contar con un equipo de profesionales altamente capacitados y apasionados por lo que hacen. Cada miembro de nuestro equipo aporta un nivel inigualable de experiencia y dedicación a cada proyecto. Esto garantiza que cada trabajo se realice con el más alto nivel de profesionalismo.
              </p>
              <div className='conecting_lines absolute  bg-white  h-full right-0 overflow-visible flex justify-center mt-24'>

              </div>
            </div>

            {/* TEXT */}
            <div className={"relative bg-black col-start-1 col-end-11 lg:col-start-5 lg:col-end-10 pt-20 pb-20  lg:pt-20 lg:pb-20 h-screen  item_text text-xl "+styles.item}>
              <h2 className="text-white text-3xl font-bold mb-4">
                Nuestra Misión
              </h2>
              <p className="text-white">
                Nuestra misión es ser líderes en la industria de Steel Framing, Electricidad y Refrigeración, brindando soluciones de alta calidad que superen las expectativas de nuestros clientes. Nos esforzamos por innovar y adaptarnos a las últimas tendencias y tecnologías, garantizando así un servicio excepcional.
              </p>
            </div>

            {/* TEXT */}
            <div className={"border-white col-start-1 col-end-11 lg:col-start-1 lg:col-end-6  pt-20 pb-20 h-screen flex justify-center items-center flex-col item_text text-xl last_item "}>
              
              <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center'>
                <div className='w-2/3 mx-auto h-2/3'>
                  <h2 className="text-white  text-center text-7xl mb-9 blur_words">
                    Contáctanos
                  </h2>
                  <p className="text-white text-3xl text-center mb-9 appear_text">
                    <span className="blur_words ml-2 inline-block">Estamos</span><span className="blur_words ml-2 inline-block">ansiosos</span><span className="blur_words ml-2 inline-block">por</span><span className="blur_words ml-2 inline-block">trabajar</span><span className="blur_words ml-2 inline-block">contigo</span><span className="blur_words ml-2 inline-block">y</span><span className="blur_words ml-2 inline-block">ayudarte</span><span className="blur_words ml-2 inline-block">a</span><span className="blur_words ml-2 inline-block">hacer</span><span className="blur_words ml-2 inline-block">realidad</span><span className="blur_words ml-2 inline-block">tus</span><span className="blur_words ml-2 inline-block">proyectos</span><span className="blur_words ml-2 inline-block">de</span><span className="blur_words ml-2 inline-block">construcción</span><span className="blur_words ml-2 inline-block">y</span><span className="blur_words ml-2 inline-block">servicios</span><span className="blur_words ml-2 inline-block">de</span><span className="blur_words ml-2 inline-block">instalaciones.</span><span className="blur_words ml-2 inline-block">¡No</span><span className="blur_words ml-2 inline-block">dudes</span><span className="blur_words ml-2 inline-block">en</span><span className="blur_words ml-2 inline-block">contactarnos</span><span className="blur_words ml-2 inline-block">para</span><span className="blur_words ml-2 inline-block">discutir</span><span className="blur_words ml-2 inline-block">cómo</span><span className="blur_words ml-2 inline-block">podemos</span><span className="blur_words ml-2 inline-block">hacer</span><span className="blur_words ml-2 inline-block">que</span><span className="blur_words ml-2 inline-block">tus</span><span className="blur_words ml-2 inline-block">ideas</span><span className="blur_words ml-2 inline-block">cobren</span><span className="blur_words ml-2 inline-block">vida!</span>
                  </p>
                  <div className="flex justify-center items-center blur_words">
                    <AnimatedBlackButton
                      text={'Contactanos'}
                    ></AnimatedBlackButton>  
                  </div>
                </div>
              </div>

              <h2 className="text-white opacity-0 text-center text-7xl mb-9">
                Contáctanos
              </h2>
         relative bg-slate-900      <p className="text-white text-3xl text-center mb-9 appear_text">
                <span className="opacity-0 ml-2 inline-block">Estamos</span><span className="opacity-0 ml-2 inline-block">ansiosos</span><span className="opacity-0 ml-2 inline-block">por</span><span className="opacity-0 ml-2 inline-block">trabajar</span><span className="opacity-0 ml-2 inline-block">contigo</span><span className="opacity-0 ml-2 inline-block">y</span><span className="opacity-0 ml-2 inline-block">ayudarte</span><span className="opacity-0 ml-2 inline-block">a</span><span className="opacity-0 ml-2 inline-block">hacer</span><span className="opacity-0 ml-2 inline-block">realidad</span><span className="opacity-0 ml-2 inline-block">tus</span><span className="opacity-0 ml-2 inline-block">proyectos</span><span className="opacity-0 ml-2 inline-block">de</span><span className="opacity-0 ml-2 inline-block">construcción</span><span className="opacity-0 ml-2 inline-block">y</span><span className="opacity-0 ml-2 inline-block">servicios</span><span className="opacity-0 ml-2 inline-block">de</span><span className="opacity-0 ml-2 inline-block">instalaciones.</span><span className="opacity-0 ml-2 inline-block">¡No</span><span className="opacity-0 ml-2 inline-block">dudes</span><span className="opacity-0 ml-2 inline-block">en</span><span className="opacity-0 ml-2 inline-block">contactarnos</span><span className="opacity-0 ml-2 inline-block">para</span><span className="opacity-0 ml-2 inline-block">discutir</span><span className="opacity-0 ml-2 inline-block">cómo</span><span className="opacity-0 ml-2 inline-block">podemos</span><span className="opacity-0 ml-2 inline-block">hacer</span><span className="opacity-0 ml-2 inline-block">que</span><span className="opacity-0 ml-2 inline-block">tus</span><span className="opacity-0 ml-2 inline-block">ideas</span><span className="opacity-0 ml-2 inline-block">cobren</span><span className="opacity-0 ml-2 inline-block">vida!</span>
              </p>
              {/* <div className='grid grid-cols-10 pb-10 pt-10'>
                <div className='col-span-5  flex justify-center items-center'>
                  <div className="w-10/12">
                    <Image
                      className='relative rounded'
                      src="/steelframing.jpeg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    ></Image>
                  </div>
                </div>
                <div className='col-span-5  flex justify-center items-center'>
                  <div className="w-10/12">
                    <Image
                      className='relative rounded'
                      src="/steelframing.jpeg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    ></Image>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}