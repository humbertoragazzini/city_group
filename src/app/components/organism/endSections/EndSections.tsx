"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { EndSectionData } from '@/types/types';


const EndSections: React.FC<EndSectionData> = (props:any) => {

  const main = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    let ctx = gsap.context((self) => {

      const points = self.selector!('.main_points')
      const mainTL = gsap.timeline({scrollTrigger: {trigger: main.current,pinSpacing:false,pinSpacer:'none',start: "top center",end: "center center",scrub: 1,markers: false},duration:10})
      .fromTo(points,{y:-25,opacity:0},{y:0,opacity:1,stagger:0.25,duration:1},0)
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
    <div className={"h-screen w-screen flex items-center "+style.endSectionMain} ref={main}>
      <div className={"block w-screen "+style.endSections }>
        <div className={"grid grid-cols-6 lg:grid-cols-6 "+style.points_container}>

          {/* Advantages of our services */}
          {
            props.items.map((content,i)=>{
              return  <div key={i} className="col-span-2 lg:col-span-1 h-full pt-7 pb-2">
                        <div className="main_points h-full w-full flex flex-col justify-between items-center">
                          {/* ICON */}
                          <div className=''>{content.icon}</div>
                          <h1 className='text-white font-bold mt-0 text-center'>{content.shorText}</h1>
                        </div>
                      </div>
            })
          }
          <div className="col-span-1 lg:hidden h-full"></div>
          <div className="col-span-6 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-start items-center">
              <p className='text-white text-center mt-5 text-xl p-2 w-full lg:w-3/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eum fugit ex officiis fuga consectetur, autem, iure dolor molestias tempora harum repellat perferendis quia repellendus facere quisquam doloribus qui hic.</p>  
            </div>
          </div>
          <div className="col-span-6 h-full">
            <div className="main_points h-full w-full flex flex-col justify-start items-center">
              <button className='text-black transition-all duration-200 font-bold text-2xl px-9 py-5 rounded-full bg-green-600 border-green-600 border-4 hover:bg-black hover:text-white'>Contactanos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndSections