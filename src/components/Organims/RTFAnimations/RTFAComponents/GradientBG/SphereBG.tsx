"use client";

import * as THREE from "three";
import {
  ScrollScene,
  UseCanvas,
  useScrollbar,
} from "@14islands/r3f-scroll-rig";
import { useEffect, useLayoutEffect, useRef } from "react";
import Logo from "../../Mesh/Logo/Logo";
import { iAxis } from "../../interfaces/position";
import Particles from "../Particles/Particles";
interface iLogoBG {
  className: string;
  rotation: iAxis;
  width: number;
}
const vertexShader = `  
varying vec2 vUv;

void main(){

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  vUv = uv;

}
`;
const fragmentShader = `
precision mediump float;
uniform vec3 colorA;
uniform vec3 colorB;
varying vec2 vUv;
vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 *
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

void main(){
  
  vec3 color = mix(colorA,colorB,vUv.y);
  color*=mix(colorA,colorB,vUv.y);

  gl_FragColor = vec4(color,1.0);
  
}

`;

export default function SphereBG({ className }: iLogoBG) {
  const el = useRef<any>();
  const sphereRef = useRef<any>(null);
  const scroll = useScrollbar();
  const checkProgress = () => {
    if (!sphereRef.current || !lightRef.current) return;

    // Update sphere rotation based on scroll progress
    sphereRef.current.rotation.z = (scroll.scroll.progress * Math.PI) / 2;
    sphereRef.current.rotation.x = scroll.scroll.progress * 5 * Math.PI;
  };

  // Use `useEffect` to react to scroll progress rather than adding a manual event listener
  useLayoutEffect(() => {
    // checkProgress();
    console.log(scroll);
  }, [scroll.scroll.progress]); // Dependency on scroll progress

  return (
    <>
      <div ref={el} className={"absolute aspect-[1] " + className}></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => {
            return (
              <group scale={props.scale}>
                <mesh scale={0.2} position={[0, 0, 0]} ref={sphereRef}>
                  <sphereGeometry args={[4, 2, 2]} />
                  <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                      colorA: { value: new THREE.Color(1.0, 0.0, 1.0) },
                      colorB: { value: new THREE.Color(0.25, 0.88, 0.82) },
                    }}
                    side={THREE.DoubleSide}
                  ></shaderMaterial>
                  {/*<GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["magenta", "turquoise"]} // Colors need to match the number of stops
              rotation={0.5}
            />*/}
                </mesh>{" "}
              </group>
            );
          }}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}

//<ScrollScene track={el}>
//          {(props) => {
//            return <Logo scale={props.scale} rotation={rotation}></Logo>;
//          }}
//<Particles scale={props.scale} rotation={rotation}></Particles>
//        </ScrollScene>
