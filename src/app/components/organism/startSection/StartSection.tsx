"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const EndSections = ({ClassScreen}) => {

  const main = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    // let ctx = gsap.context((self) => {

    // //   const points = self.selector!('.main_points')
    // //   const mainTL = gsap.timeline({scrollTrigger: {trigger: main.current,pinSpacing:false,pinSpacer:'none',start: "top center",end: "center center",scrub: 1,markers: false},duration:10})
    // //   .fromTo(points,{y:-25,opacity:0},{y:0,opacity:1,stagger:0.25,duration:1},0)
    //   // let mm = gsap.matchMedia();
    //   // mm.add("(max-width: 768px)", () => {
    //   //   return () => { // optional
    //   //     // custom cleanup code here (runs when it STOPS matching)
    //   //   };
    //   // });
      
    //   // mm.add("(min-width: 768px)", () => {
    //   //   return () => { // optional
    //   //     // custom cleanup code here (runs when it STOPS matching)
    //   //   };
    //   // });
      
    // }, main);
    
    // return () => ctx.revert();
  
  }, []); 

  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <svg
        width={320.84}
        height={271.91}
        viewBox="0 0 84.889 71.943"
        xmlns="http://www.w3.org/2000/svg"
        className='z-50'
      >
        <path
          d="m5.842 36.546.856-4.39h1.575q-.05 2.083 1.092 3.113 1.14 1.03 3.51 1.03 1.922 0 3.063-.732 1.153-.732 1.426-2.146.223-1.116-.347-1.736-.558-.62-2.592-1.154l-2.642-.682q-2.58-.694-3.448-1.922-.855-1.24-.421-3.523.545-2.753 2.666-4.278 2.133-1.538 5.432-1.538 1.625 0 3.324.273 1.7.272 3.473.818l-.794 4.093H20.44q.012-1.91-1.03-2.79-1.041-.894-3.286-.894-1.836 0-2.902.645-1.054.633-1.302 1.898-.224 1.153.297 1.761.534.595 2.927 1.24l2.642.682q2.456.645 3.348 2.01.906 1.364.435 3.757-.546 2.803-2.766 4.267-2.22 1.451-5.978 1.451-1.81 0-3.535-.31-1.724-.31-3.448-.943zm21.159-10.79h-1.91l.285-1.5h1.91l.794-4.093h4.39l-.794 4.093h3.66l-.286 1.5h-3.659l-1.575 8.074q-.21 1.104-.21 1.662 0 .335.061.484.199.422.918.422.794 0 1.278-.534.483-.533.731-1.65h1.848q-.496 1.985-1.625 2.791-1.128.794-3.51.794-2.715 0-3.522-.856-.52-.545-.52-1.687 0-.62.16-1.426zm19.248 1.365q0-1.824-1.538-1.824-1.178 0-1.872 1.117-.695 1.103-1.327 4.588h.272q3.796 0 4.378-3.013.087-.472.087-.868zm-5.035 5.357q-.075.422-.075 1.303.013 2.617 2.555 2.617 1.427 0 2.456-.757 1.03-.757 1.55-2.195h2.06q-.968 2.245-2.767 3.299-1.786 1.054-4.638 1.054-3.423 0-4.899-1.798-1.03-1.265-1.03-3.262 0-.856.199-1.86.633-3.312 2.865-5.148 2.232-1.835 5.507-1.835 2.368 0 4.006.93 1.65.918 1.65 2.592 0 .335-.075.695-.782 4.018-9.364 4.365zm21.195-5.357q0-1.824-1.537-1.824-1.179 0-1.873 1.117-.695 1.103-1.327 4.588h.273q3.795 0 4.378-3.013.086-.472.086-.868zm-5.035 5.357q-.074.422-.074 1.303.012 2.617 2.555 2.617 1.426 0 2.455-.757 1.03-.757 1.55-2.195h2.06q-.968 2.245-2.766 3.299-1.786 1.054-4.639 1.054-3.423 0-4.899-1.798-1.03-1.265-1.03-3.262 0-.856.2-1.86.632-3.312 2.864-5.148 2.233-1.835 5.507-1.835 2.369 0 4.006.93 1.65.918 1.65 2.592 0 .335-.075.695-.781 4.018-9.364 4.365zm16.074 3.46h1.885l-.286 1.501h-6.275l3.46-17.81h-1.873l.286-1.488h6.263z"
          aria-label="Steel"
          style={{
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "25.4px",
            fontFamily: "Georgia",
            clipRule: "evenodd",
            fill: "#fff",
            fillRule: "evenodd",
            strokeWidth: 0.01,
            imageRendering: "optimizeQuality",
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
          }}
          className="fil2 fnt1"
        />
        <path
          d="M23.665 61.016q-1.29 2.865-3.46 4.254-2.171 1.389-5.37 1.389-4.689 0-6.909-2.58-2.208-2.592-1.352-7.02.856-4.44 4.08-7.02 3.238-2.591 7.926-2.591 1.65 0 3.348.397 1.712.396 3.547 1.203l-.88 4.551h-1.576q-.025-2.331-1.08-3.485-1.054-1.166-3.15-1.166-2.703 0-4.402 1.997-1.7 1.985-2.506 6.115-.806 4.13.124 6.114t3.66 1.984q1.847 0 3.211-1.03 1.377-1.029 2.32-3.112zm5.804-11.633q.198-1.005 1.017-1.687.83-.695 1.835-.695.98 0 1.538.695.41.508.41 1.19 0 .236-.05.497-.186.98-1.017 1.674-.819.682-1.798.682-1.005 0-1.563-.682-.422-.509-.422-1.19 0-.236.05-.484zm1.798 15.416h1.885l-.285 1.5h-6.275l2.27-11.683h-1.874l.286-1.5h6.263zm7.256-10.183h-1.91l.285-1.5h1.91l.794-4.093h4.39l-.794 4.093h3.659l-.285 1.5h-3.659l-1.575 8.074q-.21 1.104-.21 1.662 0 .335.061.484.199.421.918.421.794 0 1.277-.533.484-.533.732-1.65h1.848q-.496 1.985-1.625 2.791-1.128.794-3.51.794-2.716 0-3.522-.856-.52-.546-.52-1.687 0-.62.16-1.426zm14.746 15.069-3.522-15.069H48.32l.298-1.5h5.383l2.951 12.75q1.427-2.06 2.382-4.379.955-2.331 1.897-6.846l-1.76-.012.284-1.501 3.56-.012q-.31 1.587-.757 3.634-1.103 5.035-2.48 7.366-3.634 6.078-6.549 7.194-1.65.632-4.03.632-1.166 0-2.865-.533l.533-2.753 1.401.012q-.05.298-.05.546 0 .856.584 1.128.26.124.794.199.297.037.595.037 1.377 0 2.778-.893z"
          aria-label="City"
          style={{
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "25.4px",
            fontFamily: "Georgia",
            clipRule: "evenodd",
            fill: "#fff",
            fillRule: "evenodd",
            strokeWidth: 0.01,
            imageRendering: "optimizeQuality",
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
          }}
          className="fil2 fnt1"
        />
        <path
          style={{
            clipRule: "evenodd",
            fill: "none",
            fillRule: "evenodd",
            stroke: "#ed3237",
            strokeWidth: 500,
            imageRendering: "optimizeQuality",
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
          }}
          className="fil1 str3"
          transform="matrix(.01 0 0 .01 -82.732 -162.451)"
          d="m8401 18124 2711-1611 5588 1435"
        />
        </svg>
      </div>
  )
}

export default EndSections