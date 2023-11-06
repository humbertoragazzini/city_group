'use client'
import { extend } from '@react-three/fiber'
import { Canvas } from "@react-three/fiber";
import React ,{ useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Box from "./Box";
import LightBulb from "./LightBulb";
import Floor from "./Floor";

export default function AnimatedBackground(props) {

  const mainContainer = React.useRef();
  const cameraCordenates = React.useRef({x:-6,y:7,z:7});
  const [cameraCordenatesState,usecameraCordenatesState] = React.useState([0,0,0]);

    useLayoutEffect(() => {
  
    let ctx = gsap.context((self) => {
      // const itemText = self.selector!('.item_text');
      // const LastItemText = self.selector!('.last_item');
      // const blurWords = self.selector!('.blur_words');
      // gsap.set(moving_box.current,{zIndex:1});
      // gsap.set(styles.about_us_header,{zIndex:10});
      // gsap.set('.content_box',{zIndex:10});
      // const timelineLigth:any = [];
      // const timelineWords:any = [];

      
      // let mm = gsap.matchMedia();
      // mm.add("(max-width: 1024px)", () => {

      //   const timelineLigth:any = [];

      //   itemText.forEach((item:any,i:any) => {
          const canvas = self.selector('.main_canvas');
      //     const backgroundIMG = self.selector!('.'+styles.background);
      //     console.log(item.getClientRects()[0])
      //     const clientR = item.getClientRects()[0]
      //     const movement = clientR.x + (clientR.width/2)
      //     console.log(item.getClientRects()[0].x + item.getClientRects()[0].width)
          let a = {x:0};
          // [-6, 7, 7]
          // const timeline = gsap.timeline({scrollTrigger:{trigger:props.rootContainer.current,start:'5% center',end:'center center',scrub:2, markers:true,duration:10}})
          // timeline.fromTo(cameraCordenates.current,{x:0,y:0,z:0},{x:-6,y:7,z:7,duration:10,onUpdate:()=>{
          //   console.log(cameraCordenatesState)
          //   usecameraCordenatesState([cameraCordenates.current.x,cameraCordenates.current.y,cameraCordenates.current.z])
          // }},0)
          // timeline.fromTo(b,{b:0},{a:7},0)
          // timeline.fromTo(c,{c:0},{a:7},0)
          //     timelineLigth[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-50% center',scrub:true,end:'center center', markers:true}, onComplete:()=>{
      //       // console.log(timelineLigth.kill())
      //       if(i===6){
      //         for(let j=0; j<7 ;j++){
      //           console.log('kill all')
      //           // timelineLigth[j].kill()
      //         }
      //       }
      //     }})
      //     if(i===0){
      //       timelineLigth[i].fromTo(background,{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%, rgba(240,240,240,0) 0%, rgba(0,0,0,1) 100%)'},{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(240,240,240,0) 50%, rgba(0,0,0,1) 100%)'},0)
      //     }else if(i === 6){
      //       timelineWords[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-25% center',scrub:2,end:'center center', markers:true},duration:10})
      //       timelineWords[i].fromTo(blurWords,{filter:'blur(10px)',opacity:0,scale:0.5},{filter:'blur(0px)',opacity:1,scale:1,stagger:0.5,duration:1},0)
      //       timelineLigth[i].to(background,{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%, rgba(240,240,240,0) 100%, rgba(0,0,0,1) 100%)'},0)
      //     }
      //     timeline.to(item.childNodes,{scale:1,duration:0.5,ease: "bounce.out"},0)
      //     timeline.to(item.childNodes,{color:'white',duration:0.5,ease: "bounce.out"},0)
      //   });
        
      //   return () => {};
      // });
      
      // mm.add("(min-width: 1024px)", () => {


      //   itemText.forEach((item:any,i:any) => {
      //     const background = self.selector!('.'+styles.gradiantBackground);
      //     const backgroundIMG = self.selector!('.'+styles.background);
      //     console.log(item.getClientRects()[0])
      //     const clientR = item.getClientRects()[0]
      //     const movement = clientR.x + (clientR.width/2)
      //     console.log(item.getClientRects()[0].x + item.getClientRects()[0].width)
      //     const timeline = gsap.timeline({scrollTrigger:{trigger:item,start:'5% center',end:'bottom center', markers:false}})
      //     timelineLigth[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-50% center',scrub:true,end:'48% center', markers:true},duration:10, onComplete:()=>{
      //       // console.log(timelineLigth.kill())
      //       if(i===6){
      //         for(let j=0; j<7 ;j++){
      //           console.log('kill all')
      //           // timelineLigth[j].kill()
      //         }
      //       }
      //     }})
      //     if(i===0){
      //       timelineLigth[i].fromTo(background,{background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 0%)'},{background: 'radial-gradient(circle at '+(movement+'px')+' 0%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)'},0)
      //       timelineLigth[i].to(item.childNodes,{scale:1,duration:0.5},0);
      //       timelineLigth[i].to(item.childNodes,{color:'white',duration:0.5},0);
      //     }else if(i === 6){
      //       // timelineLigth[i].fromTo(itemText[6],{paddingTop:'auto',zIndex:'auto'},{paddingTop:'30vh',zIndex:'60'})
      //       // timelineLigth[i].fromTo(itemText[6],{paddingBottom:'auto',zIndex:'auto'},{paddingBottom:'30vh',zIndex:'60'})
      //       timelineWords[i] = gsap.timeline({scrollTrigger:{trigger:item,start:'-25% center',scrub:2,end:'center center', markers:true},duration:10})
      //       timelineWords[i].fromTo(blurWords,{filter:'blur(10px)',opacity:0,scale:0.5},{filter:'blur(0px)',opacity:1,scale:1,stagger:0.5,duration:1},0)
      //       timelineLigth[i].to(background,{background: 'radial-gradient(circle at '+(movement+'px')+' 50%, rgba(255, 255, 255, 0) 100%, rgba(0, 0, 0, 1) 100%)',zIndex:'0',duration:10},0)
      //       timelineLigth[i].fromTo(backgroundIMG,{opacity:0},{opacity:1,duration:10},0)
      //       timelineLigth[i].to(item.childNodes,{scale:1,duration:0.5},0);
      //       timelineLigth[i].to(item.childNodes,{color:'white',duration:0.5},0);
      //     }else{
      //       timelineLigth[i].to(background,{background: 'radial-gradient(circle at '+(movement+'px')+' 50%, rgba(255, 255, 255, 0) 10%, rgba(0, 0, 0, 1) 50%)',duration:10},0)
      //       timeline.to(item.childNodes,{scale:1,duration:0.5,ease: "bounce.out"},0)
      //       timeline.to(item.childNodes,{color:'white',duration:0.5,ease: "bounce.out"},0)
      //     }
      //   });
        
      //   return () => {};
      // });
      
    }, mainContainer);
    
    return () => ctx.revert();
    
  }, []); 

  return (
    <div className={'fixed w-screen h-screen top-0 left-0'} ref={mainContainer}>
      <Canvas
        shadows
        className={'w-full h-full main_canvas'}
        camera={{
          position: [-6, 7, 7],
        }}
      >
          <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
