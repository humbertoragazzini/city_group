"use client"
import '@/app/globals.scss';
import style from './styles.module.scss';
import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const EndSections = ({ClassScreen}) => {

  const main = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    let ctx = gsap.context((self) => {

      const roof = self.selector!('#roof')
      const grua = self.selector!('#grua')
      const allgrua = self.selector!('#allgrua')
      const rope = self.selector!('#rope')
      const floor = self.selector!('#floor')
      const all_svg = self.selector!('#all_svg')
      // const intro = self.selector!('.intro')
      gsap.set(allgrua,{x:-20})
      gsap.set(roof,{transformOrigin:'25% 0%'})
      gsap.set(grua,{x:-60})
      gsap.set(rope,{attr:{ d:'M89.974 -8.386H90.848V103.833H89.974z'}})
      gsap.set(roof,{x:-80,y:60})
      gsap.fromTo(all_svg,{opacity:0},{opacity:1,duration:1,delay:0,ease:'lineal'})
      gsap.fromTo(roof,{y:60},{y:-20,duration:1,delay:1,ease:'lineal'})
      gsap.fromTo(rope,{attr:{ d:'M89.974 -8.386H90.848V103.833H89.974z'}},{delay:1,duration:1,attr:{ d:'M89.974 -8.386H90.848V23.833H89.974z'}})
      gsap.fromTo(roof,{x:-80},{x:0,duration:1,delay:3,ease:'lineal'})
      gsap.fromTo(grua,{x:-60},{x:20,duration:1,delay:3,ease:'lineal'})
      gsap.fromTo(roof,{y:-20},{y:0,duration:1,delay:5,ease:'lineal'})
      gsap.fromTo(rope,{attr:{ d:'M89.974 -8.386H90.848V23.833H89.974z'}},{delay:5,duration:1,attr:{ d:'M89.974 -8.386H90.848V43.833H89.974z'}})
      gsap.to(allgrua,{opacity:0,duration:2,delay:6})
      gsap.to(grua,{opacity:0,duration:2,delay:6})
      gsap.to(floor,{opacity:0,duration:2,delay:6})
      // gsap.fromTo(roof,{y:-20},{y:0,duration:1,delay:2,ease:'lineal'})
      // gsap.fromTo(roof,{rotate:-80},{rotate:0,duration:1,delay:3})
      // gsap.fromTo(grua,{x:-35},{x:0,duration:1,delay:2})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:0})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:2})

      // gsap.fromTo(roof,{x:-35},{x:0,duration:1,delay:5})
      // gsap.fromTo(roof,{rotate:-80},{rotate:0,duration:1,delay:3})
      // gsap.fromTo(grua,{x:-35},{x:0,duration:1,delay:2})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:0})
      // gsap.fromTo(rope,{ attr:{ d:'M89.974 -8.386H90.848V79.833H89.974z'}},{ attr:{ d:'M89.974 -8.386H90.848V20.833H89.974z'},duration:1,delay:2})

      // gsap.fromTo(path2,{opacity:0},{opacity:1,duration:1,delay:2})
      // gsap.fromTo(path3,{opacity:0},{opacity:1,duration:1,delay:0})
      // const mainTL = gsap.timeline({scrollTrigger: {trigger: main.current,pinSpacing:false,pinSpacer:'none',start: "top top",end: "bottom top",scrub: 5,markers: true},duration:10})
      // .fromTo(intro,{y:0,opacity:1},{y:'50vh',opacity:0,duration:10})
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
      <div className='h-screen w-screen flex justify-center items-center' ref={main}>
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
      className='overflow-visible opacity-0 top-0'
      id='all_svg'
    >
      <g>
        <path
          id='roof'
          fill="none"
          fillRule="evenodd"
          stroke="#ed3237"
          strokeWidth="5"
          d="M66.102 160.32l27.11-16.11 55.88 14.35"
          className="fil1 str3"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        ></path>
        <g fill="#fff" stroke="#fff" transform="translate(9.784 102.028)">
          <rect
            width="413.354"
            height="1.398"
            x="-93.992"
            y="119.149"
            strokeWidth="0.265"
            ry="0.347"
            id='floor'
          ></rect>
          <g 
              id='allgrua'>
            <rect
              width="0.819"
              height="131.113"
              x="169.423"
              y="-11.572"
              strokeWidth="0.181"
              ry="0.347"
            ></rect>
            <rect
              width="0.819"
              height="131.113"
              x="12.16"
              y="39.17"
              strokeWidth="0.181"
              ry="0.347"
              transform="rotate(-90.053)"
            ></rect>
            <rect
              width="0.819"
              height="131.113"
              x="8.186"
              y="39.122"
              strokeWidth="0.181"
              ry="0.347"
              transform="rotate(-90.053)"
            ></rect>
            <rect
              width="0.819"
              height="131.113"
              x="178.682"
              y="-11.572"
              strokeWidth="0.181"
              ry="0.347"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="89.642"
              y="-144.881"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(54.344)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="85.233"
              y="147.175"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-54.914)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="-124.455"
              y="131.558"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-124.228)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="65.048"
              y="161.731"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-54.346)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="-146.936"
              y="115.737"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-124.733)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="41.663"
              y="177.391"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-55.133)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="-167.161"
              y="102.748"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-124.109)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="19.372"
              y="192.509"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-55.395)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="-190.555"
              y="84.935"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-125.021)"
            ></rect>
            <rect
              width="16.525"
              height="0.773"
              x="-0.922"
              y="207.456"
              strokeWidth="0.227"
              ry="0.256"
              transform="rotate(-54.965)"
            ></rect>
            <rect
              width="22.537"
              height="4.717"
              x="163.525"
              y="-13.103"
              strokeWidth="0.265"
              ry="0.256"
            ></rect>
            <rect
              width="7.163"
              height="16.684"
              x="186.062"
              y="-18.519"
              strokeWidth="0.265"
              ry="0.256"
            ></rect>
            <rect
              width="9.868"
              height="7.182"
              x="169.662"
              y="-20.092"
              strokeWidth="0.227"
              ry="0.191"
            ></rect>
            <path
              strokeWidth="0.265"
              d="M172.304-26.25l-3.069-.019-3.068-.019 1.55-2.648 1.551-2.647 1.518 2.667z"
              transform="matrix(.93601 0 0 .73106 14.184 -.865)"
            ></path>
            <rect
              width="6.822"
              height="3.95"
              x="172.709"
              y="-24.042"
              strokeWidth="0.227"
              ry="0"
            ></rect>
            <rect
              width="0.65"
              height="4.744"
              x="39.093"
              y="-12.991"
              strokeWidth="0.204"
              ry="0.341"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="35.708"
              y="20.477"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="40.918"
              y="25.818"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="46.298"
              y="31.612"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="51.654"
              y="37.205"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="33.908"
              y="-54.07"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="28.559"
              y="-48.263"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="22.997"
              y="-42.707"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="51.734"
              y="37.175"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="56.943"
              y="42.516"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="62.323"
              y="48.31"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="67.679"
              y="53.903"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="49.678"
              y="-70.998"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="44.329"
              y="-65.192"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="38.766"
              y="-59.635"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="72.947"
              y="59.813"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="78.327"
              y="65.607"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="83.683"
              y="71.2"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="66.047"
              y="-87.939"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="60.698"
              y="-82.132"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="55.136"
              y="-76.576"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="88.98"
              y="76.937"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="94.36"
              y="82.732"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="99.716"
              y="88.324"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="82.242"
              y="-104.898"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="76.894"
              y="-99.092"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="71.331"
              y="-93.535"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="104.893"
              y="93.934"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="110.273"
              y="99.729"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="115.629"
              y="105.321"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(-46.897) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="98.317"
              y="-121.731"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="103.741"
              y="-127.213"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="92.968"
              y="-115.925"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
            <rect
              width="0.637"
              height="5.495"
              x="87.406"
              y="-110.368"
              strokeWidth="0.218"
              ry="0.395"
              transform="rotate(46.31) skewX(-.02)"
            ></rect>
          </g>
        </g>
        <g fill="#fff" transform="translate(9.784 102.028)">
          <g
            fill="#fff"
            fillRule="evenodd"
            strokeWidth="0.01"
            ariaLabel="Steel"
            className="fil2 fnt1"
            clipRule="evenodd"
            fontFamily="Georgia"
            fontSize="25.4"
            fontStyle="italic"
            fontWeight="bold"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <path d="M60.883 76.048l.856-4.39h1.575q-.05 2.083 1.092 3.113 1.14 1.03 3.51 1.03 1.922 0 3.063-.732 1.153-.732 1.426-2.146.223-1.116-.347-1.736-.558-.62-2.592-1.154l-2.642-.682q-2.58-.694-3.448-1.922-.855-1.24-.421-3.523.545-2.753 2.666-4.278 2.133-1.538 5.432-1.538 1.625 0 3.324.273 1.7.272 3.473.818l-.794 4.093h-1.575q.012-1.91-1.03-2.79-1.041-.894-3.286-.894-1.836 0-2.902.645-1.054.633-1.302 1.898-.224 1.153.297 1.761.534.595 2.927 1.24l2.642.682q2.456.645 3.348 2.01.906 1.364.435 3.757-.546 2.803-2.766 4.267-2.22 1.451-5.978 1.451-1.81 0-3.535-.31-1.724-.31-3.448-.943z"></path>
            <path d="M82.042 65.258h-1.91l.285-1.5h1.91l.794-4.093h4.39l-.794 4.093h3.66l-.286 1.5h-3.659l-1.575 8.074q-.21 1.104-.21 1.662 0 .335.061.484.199.422.918.422.794 0 1.278-.534.483-.533.731-1.65h1.848q-.496 1.985-1.625 2.791-1.128.794-3.51.794-2.715 0-3.522-.856-.52-.545-.52-1.687 0-.62.16-1.426z"></path>
            <path d="M101.29 66.623q0-1.824-1.538-1.824-1.178 0-1.872 1.117-.695 1.103-1.327 4.588h.272q3.796 0 4.378-3.013.087-.472.087-.868zm-5.035 5.357q-.075.422-.075 1.303.013 2.617 2.555 2.617 1.427 0 2.456-.757 1.03-.757 1.55-2.195h2.06q-.968 2.245-2.767 3.299-1.786 1.054-4.638 1.054-3.423 0-4.899-1.798-1.03-1.265-1.03-3.262 0-.856.199-1.86.633-3.312 2.865-5.148 2.232-1.835 5.507-1.835 2.368 0 4.006.93 1.65.918 1.65 2.592 0 .335-.075.695-.782 4.018-9.364 4.365z"></path>
            <path d="M117.45 66.623q0-1.824-1.537-1.824-1.179 0-1.873 1.117-.695 1.103-1.327 4.588h.273q3.795 0 4.378-3.013.086-.472.086-.868zm-5.035 5.357q-.074.422-.074 1.303.012 2.617 2.555 2.617 1.426 0 2.455-.757 1.03-.757 1.55-2.195h2.06q-.968 2.245-2.766 3.299-1.786 1.054-4.639 1.054-3.423 0-4.899-1.798-1.03-1.265-1.03-3.262 0-.856.2-1.86.632-3.312 2.864-5.148 2.233-1.835 5.507-1.835 2.369 0 4.006.93 1.65.918 1.65 2.592 0 .335-.075.695-.781 4.018-9.364 4.365z"></path>
            <path d="M128.489 75.44h1.885l-.286 1.501h-6.275l3.46-17.81H125.4l.286-1.488h6.263z"></path>
          </g>
          <g
            fill="#fff"
            fillRule="evenodd"
            strokeWidth="0.01"
            ariaLabel="City"
            className="fil2 fnt1"
            clipRule="evenodd"
            fontFamily="Georgia"
            fontSize="25.4"
            fontStyle="italic"
            fontWeight="bold"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <path d="M78.706 100.518q-1.29 2.865-3.46 4.254-2.171 1.389-5.37 1.389-4.689 0-6.909-2.58-2.208-2.592-1.352-7.02.856-4.44 4.08-7.02 3.238-2.591 7.926-2.591 1.65 0 3.348.397 1.712.396 3.547 1.203l-.88 4.551H78.06q-.025-2.331-1.08-3.485-1.054-1.166-3.15-1.166-2.703 0-4.402 1.997-1.7 1.985-2.506 6.115-.806 4.13.124 6.114t3.66 1.984q1.847 0 3.211-1.03 1.377-1.029 2.32-3.112z"></path>
            <path d="M84.51 88.885q.198-1.005 1.017-1.687.83-.695 1.835-.695.98 0 1.538.695.41.508.41 1.19 0 .236-.05.497-.186.98-1.017 1.674-.819.682-1.798.682-1.005 0-1.563-.682-.422-.509-.422-1.19 0-.236.05-.484zm1.798 15.416h1.885l-.285 1.5h-6.275l2.27-11.683h-1.874l.286-1.5h6.263z"></path>
            <path d="M93.564 94.118h-1.91l.285-1.5h1.91l.794-4.093h4.39l-.794 4.093h3.659l-.285 1.5h-3.659l-1.575 8.074q-.21 1.104-.21 1.662 0 .335.061.484.199.421.918.421.794 0 1.277-.533.484-.533.732-1.65h1.848q-.496 1.985-1.625 2.791-1.128.794-3.51.794-2.716 0-3.522-.856-.52-.546-.52-1.687 0-.62.16-1.426z"></path>
            <path d="M108.31 109.187l-3.522-15.069h-1.427l.298-1.5h5.383l2.951 12.75q1.427-2.06 2.382-4.379.955-2.331 1.897-6.846l-1.76-.012.284-1.501 3.56-.012q-.31 1.587-.757 3.634-1.103 5.035-2.48 7.366-3.634 6.078-6.549 7.194-1.65.632-4.03.632-1.166 0-2.865-.533l.533-2.753 1.401.012q-.05.298-.05.546 0 .856.584 1.128.26.124.794.199.297.037.595.037 1.377 0 2.778-.893z"></path>
          </g>
        </g>
        <g
        id='grua'
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.265"
          transform="translate(9.784 102.028)"
        >
          <ellipse cx="87.047" cy="-14.653" rx="1.267" ry="1.245"></ellipse>
          <ellipse cx="94.166" cy="-14.632" rx="1.267" ry="1.245"></ellipse>
          <rect
            width="10.002"
            height="5.634"
            x="85.519"
            y="-13.234"
            ry="0"
          ></rect>
          <path id='rope' d="M89.974 -8.386H90.848V39.833H89.974z"></path>
        </g>
      </g>
    </svg>
      </div>
  )
}

export default EndSections