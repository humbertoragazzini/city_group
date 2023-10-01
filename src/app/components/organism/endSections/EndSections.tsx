"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { EndSectionData } from '@/types/types';


const EndSections: React.FC<EndSectionData> = (props) => {

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
            props.items.map((content)=>{
              return  <div className="col-span-2 lg:col-span-1 h-full pt-7 pb-2">
                        <div className="main_points h-full w-full flex flex-col justify-between items-center">
                          {/* ICON */}
                          <div className=''>{content.icon}</div>
                          <h1 className='text-white font-bold mt-0 text-center'>{content.shorText}</h1>
                        </div>
                      </div>
            })
          }
          {/* <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              
              <svg className='svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff"  d="M211.733 1260.088c16.32 131.947 68.587 258.027 151.254 364.8l-168.64 130.667C88.213 1618.488 21.013 1456.14 0 1286.22Zm1654.155-391.584c18.88 57.813 32.32 117.76 39.787 178.24 4.8 40 7.146 79.147 7.146 119.787 0 40.533-2.346 79.68-7.146 119.466-21.014 170.134-88.214 332.48-194.347 469.547l-168.64-130.667c82.667-106.773 134.933-232.853 151.253-364.8 3.734-30.72 5.547-61.76 5.547-93.546 0-31.894-1.813-62.934-5.547-93.867-5.866-46.613-16.106-93.013-30.72-137.813Zm-135.125-421.707 150.826 150.827-875.413 875.413-519.893-519.893 150.826-150.827 369.067 369.067 724.587-724.587ZM194.347 577.411l168.64 130.666c-82.667 106.774-134.934 232.854-151.254 364.8L0 1046.744c21.013-169.92 88.213-332.267 194.347-469.333ZM833.14 213.709l26.134 211.734c-132.054 16.213-258.134 68.586-364.8 151.253L363.7 408.056c137.067-106.133 299.307-173.44 469.44-194.347Zm239.456-.01c170.027 21.013 332.374 88.213 469.334 194.346l-130.774 168.64c-106.56-82.666-232.746-135.04-364.693-151.253Z" fillRule="evenodd"/>
              </svg>
              <h1 className='text-white font-bold mt-5 text-center'>MAS RAPIDO</h1>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg className='svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold mt-5 text-center'>EFICIENCIA ENERGETICA</h1>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              
              <svg className='svg_border' style={{width:"100px",height:"100px"}} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path className={style.cls_1} style={{fill:'#fff'}} d="M487.379,344.399c-1.771-5.989-5.322-16.856-11.749-36.353c-20.818-63.816-134.955-287.63-134.955-287.63
                    C334.247,6.459,319.617-1.53,304.339,0.245L163.175,17.539c-9.545,1.102-17.748,6.855-22.4,15.272c0,0-16.379,26.823-23.261,43.443
                    c-6.861,16.62-2.877,33.24,11.08,42.994c13.957,9.733,80.437,26.363,93.078,20.822c21.059-9.314,31.92-51.4,31.92-51.4l31.898-5.54
                    c0,0,13.31,45.85,11.08,86.191c-2.877,49.861,0.358,70.64,7.24,113.624c-8.732,3.006-17.888-8.01-36.929-25.86
                    c-59.09-55.4-133.126-33.657-165.987,14.845c-8.636-7.316-40.85-11.144-77.779-14.845V512c62.79-7.379,90.848-50.32,90.848-50.32
                    c34.369,6.855,87.372,2.235,131.19-5.177c80.956-13.69,134.735-44.962,134.735-44.962l89.101-30.138
                    C484.266,376.088,492.464,359.682,487.379,344.399z"/>
                </g>
              </svg>
              <h1 className='text-white font-bold mt-5 text-center'>DURABILIDAD</h1>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              <svg className='svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={style.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={style.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={style.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
              <h1 className='text-white font-bold mt-5 text-center'>FLEXIBILIDAD</h1>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              
              <svg className='svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M256 46c-45.074 0-82 36.926-82 82 0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46-46-20.382-46-46 20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15 48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806 3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146-6.917 5.82-16.968 8.727-30.152 8.727-4.272 0-8.4-.325-12.39-.976-3.986-.65-7.996-1.647-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884 3.664 1.098 7.347 1.648 11.05 1.648 7.162 0 12.41-1.566 15.746-4.7 3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788-3.62 1.87-7.813 2.808-12.573 2.808-8.343 0-15.238-3.275-20.69-9.826-5.453-6.592-8.18-14.974-8.18-25.146 0-10.214 2.727-18.576 8.18-25.086 5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005-2.523 3.338-3.784 8.058-3.784 14.162 0 6.266 1.22 11.026 3.662 14.28 2.442 3.215 6.003 4.823 10.682 4.823 4.557 0 8.096-1.67 10.62-5.006 2.522-3.337 3.784-8.036 3.784-14.098 0-6.104-1.262-10.824-3.785-14.16-2.523-3.337-6.062-5.006-10.62-5.006z"/></svg>
              <h1 className='text-white font-bold mt-5 text-center'>MAS LIVIANO</h1>
            </div>
          </div> 
          <div className="col-span-2 lg:col-span-1 h-full mb-9">
            <div className="main_points h-full w-full flex flex-col justify-center items-center">
              
              <svg className='svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M256 46c-45.074 0-82 36.926-82 82 0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46-46-20.382-46-46 20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15 48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806 3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146-6.917 5.82-16.968 8.727-30.152 8.727-4.272 0-8.4-.325-12.39-.976-3.986-.65-7.996-1.647-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884 3.664 1.098 7.347 1.648 11.05 1.648 7.162 0 12.41-1.566 15.746-4.7 3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788-3.62 1.87-7.813 2.808-12.573 2.808-8.343 0-15.238-3.275-20.69-9.826-5.453-6.592-8.18-14.974-8.18-25.146 0-10.214 2.727-18.576 8.18-25.086 5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005-2.523 3.338-3.784 8.058-3.784 14.162 0 6.266 1.22 11.026 3.662 14.28 2.442 3.215 6.003 4.823 10.682 4.823 4.557 0 8.096-1.67 10.62-5.006 2.522-3.337 3.784-8.036 3.784-14.098 0-6.104-1.262-10.824-3.785-14.16-2.523-3.337-6.062-5.006-10.62-5.006z"/></svg>
              <h1 className='text-white font-bold mt-5 text-center'>MAS LIVIANO</h1>
            </div>
          </div>*/}

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