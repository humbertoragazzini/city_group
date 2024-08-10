// @ts-nocheck
"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture, Line, Text } from "@react-three/drei";

import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import Link from "next/link";

function Experience({ mouseObj }: any) {
  const BGRef = useRef<any>();

  useFrame((state, delta) => {
    // BGRef.current.rotation.z += delta;
  });

  return (
    <mesh ref={BGRef} position={[75, 0, 0]}>
      <planeGeometry args={[400, 2000]}></planeGeometry>
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={["#e0363e", "#178A95"]}
        ></GradientTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

function MouseMark({ refobj }: any) {
  useFrame((state, delta) => {
    // refobj.current.rotation.z += delta;
    // refobj.current.rotation.x += delta;
  });
  return (
    <mesh
      ref={refobj}
      scale={[1.5, 1.5, 1]}
      rotation={[0, 0, 0]}
      position={[-35, 0, -50]}
    >
      {/* <boxGeometry args={[220, 200, 50]}></boxGeometry>
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={["blue", "blue"]}
        ></GradientTexture>
      </meshStandardMaterial> */}
      <sphereGeometry args={[50, 50, 5550]} />
      <meshPhysicalMaterial
        attach="material"
        color="#999999"
        metalness={0.5}
        roughness={0}
        transmission={1}
        thickness={5.5}
        clearcoat={0}
        clearcoatRoughness={0}
        reflectivity={0}
        specularIntensity={0}
        // reflectivity={0.5}
      />
    </mesh>
  );
}
function SpotLight({ lightRef }: any) {
  return (
    <pointLight
      position={[-200, 0, 25]}
      rotation={[0, 0, 0]}
      ref={lightRef}
      color={"grey"}
      intensity={200000}
      castShadow
      shadow-mapSize={1024}
    />
  );
}

function MenuBackground({ homeState, about, service, contact }: any) {
  const mouseObj = useRef<any>();
  const lightRef = useRef<any>();
  const homeRotation = useRef<any>();
  const positionMouse = useRef<any>();
  const linesPosition = [
    {
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
    },
  ];
  const lines = [
    { y: 0 },
    { y: 3 },
    { y: 6 },
    { y: 9 },
    { y: 12 },
    { y: 15 },
    { y: 18 },
    { y: 21 },
    { y: 24 },
    { y: 27 },
    { y: 30 },
    { y: 33 },
    { y: 36 },
    { y: 39 },
    { y: 42 },
    { y: 45 },
    { y: 48 },
    { y: 51 },
    { y: 54 },
    { y: 57 },
    { y: 60 },
    { y: 63 },
    { y: 66 },
    { y: 69 },
    { y: 72 },
    { y: 75 },
    { y: 78 },
    { y: 81 },
    { y: 84 },
    { y: 87 },
    { y: 90 },
    { y: 93 },
    { y: 96 },
    { y: 99 },
    { y: 102 },
    { y: 105 },
    { y: 108 },
    { y: 111 },
    { y: 114 },
    { y: 117 },
    { y: 120 },
    { y: 123 },
    { y: 126 },
    { y: 129 },
    { y: 132 },
    { y: 135 },
    { y: 138 },
    { y: 141 },
    { y: 144 },
    { y: 147 },
    { y: 150 },
    { y: 153 },
    { y: 156 },
    { y: 159 },
    { y: 162 },
    { y: 165 },
    { y: 168 },
    { y: 171 },
    { y: 174 },
    { y: 177 },
    { y: 180 },
    { y: 183 },
    { y: 186 },
    { y: 189 },
    { y: 192 },
    { y: 195 },
    { y: 198 },
    { y: 201 },
    { y: 204 },
    { y: 207 },
    { y: 210 },
    { y: 213 },
    { y: 216 },
    { y: 219 },
    { y: 222 },
    { y: 225 },
    { y: 228 },
    { y: 231 },
    { y: 234 },
    { y: 237 },
    { y: 240 },
    { y: 243 },
    { y: 246 },
    { y: 249 },
    { y: 252 },
    { y: 255 },
    { y: 258 },
    { y: 261 },
    { y: 264 },
    { y: 267 },
    { y: 270 },
    { y: 273 },
    { y: 276 },
    { y: 279 },
    { y: 282 },
    { y: 285 },
    { y: 288 },
    { y: 291 },
    { y: 294 },
    { y: 297 },
  ];

  useEffect(() => {
    console.log("change inside of the menu background");
  }, [homeState]);

  useLayoutEffect(() => {
    let print = "";
    for (let i = 0; i < 100; i++) {
      print += `{y:${i * 3}},`;
    }
    console.log(print);
    function checkPosition(event: any) {
      // mouseObj.current.position.x = event.x - window.innerWidth + 110;
      // mouseObj.current.position.y = -event.y + window.innerHeight / 2;
      lightRef.current.position.y = -event.y + window.innerHeight / 2;
      positionMouse.current = -event.y + window.innerHeight / 2;
    }

    window.addEventListener("mousemove", checkPosition);

    return () => {
      window.removeEventListener("mousemove", checkPosition);
    };
  }, []);
  let counter = 0;
  return (
    <Canvas camera={{ far: 6000, near: -6000 }} orthographic>
      {/* <ambientLight intensity={1}></ambientLight> */}
      <Experience></Experience>
      {/* <mesh ref={mouseObj} position={[0, 0, -50]}>
        <sphereGeometry args={[50, 50, 50]}></sphereGeometry>
        <meshStandardMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={["blue", "red"]}
          ></GradientTexture>
        </meshStandardMaterial>
      </mesh> */}
      {/* <MouseMark refobj={mouseObj}></MouseMark> */}
      {/* <ModelHome></ModelHome> */}
      <SpotLight lightRef={lightRef}></SpotLight>
      <LINKBtn
        homeState={homeState}
        posistion={[50, window.innerHeight / 2 - 60, 0]}
        text={"HOME"}
        thickness={120}
      ></LINKBtn>
      <LINKBtn
        homeState={about}
        posistion={[50, window.innerHeight / 2 - 205, 0]}
        text={"ABOUT US"}
        thickness={170}
      ></LINKBtn>
      <LINKBtn
        homeState={service}
        posistion={[50, window.innerHeight / 2 - 400, 0]}
        text={"OUR SERVICES"}
        thickness={225}
      ></LINKBtn>
      <LINKBtn
        homeState={contact}
        posistion={[50, window.innerHeight / 2 - 590, 0]}
        text={"CONTACT"}
        thickness={157}
      ></LINKBtn>
      {lines.map((position, i) => {
        counter > 4 ? (counter = 0) : counter++;
        return (
          <Marker
            positionY={position.y}
            mousePosition={positionMouse}
            thick={counter < 5 ? false : true}
          ></Marker>
        );
      })}
    </Canvas>
  );
}

export default function RightNavBar() {
  const [hovered, setHovered] = useState<string>("");
  const [homeState, sethomeState] = useState<boolean>(false);
  const [about, setabout] = useState<boolean>(false);
  const [service, setservice] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  useEffect(() => {
    console.log("change in rightnavbar");
  }, [homeState]);

  return (
    <div className="fixed hidden lg:block group right-0 top-0 h-screen z-20 animate-gradient-y w-[450px] right-[-300px] hover:right-[0px] transition-all duration-700 ">
      <div className="absolute w-full h-full">
        <MenuBackground
          homeState={homeState}
          about={about}
          service={service}
          contact={contact}
        ></MenuBackground>
      </div>
      <Link
        href={"/"}
        className="relative left-[100px] text-transparent whitespace-nowrap uppercase text-[30px] w-[400px] py-4 cursor-pointer transition-all duration-500 [&>div>span]:hover:text-white [&>div>span]:hover:opacity-100"
        style={{ writingMode: "vertical-lr" }}
        onMouseOver={() => {
          sethomeState(true);
        }}
        onMouseLeave={() => {
          sethomeState(false);
        }}
      >
        Home
        {/* <div
          className="relative h-full left-[2px] w-[176px] text-[75px] leading-[0px] flex justify-center items-center overflow-hidden"
          style={{ writingMode: "horizontal-tb" }}
        >
          <span className="px-4 inline-block animate-[marquee_6000ms_linear_infinite]">
            <span className="px-4 inline-block animate-marquee">HOME</span>
          </span>
        </div> */}
      </Link>
      <Link
        href={"/AboutUs"}
        className="relative left-[100px] text-transparent whitespace-nowrap uppercase text-[30px] w-[400px] py-4 cursor-pointer transition-all duration-500 [&>div>span]:hover:text-white"
        style={{ writingMode: "vertical-lr" }}
        onMouseEnter={() => {
          setabout(true);
        }}
        onMouseLeave={() => {
          setabout(false);
        }}
      >
        About us
        {/* <div
          className="relative h-full left-[2px] w-[176px] text-[75px] leading-[0px] flex justify-center items-center overflow-hidden"
          style={{ writingMode: "horizontal-tb" }}
        >
          <span className="pacity-0 duration-1000 whitespace-nowrap text-the-lightWhite">
            <span className="px-4 inline-block animate-[marquee_6000ms_linear_infinite]">
              ABOUT US
            </span>
          </span>
        </div> */}
      </Link>
      <Link
        href={"/OurServices"}
        className="relative left-[100px] text-transparent whitespace-nowrap uppercase text-[30px] w-[400px] py-4 cursor-pointer transition-all duration-500 [&>div>span]:hover:text-white"
        style={{ writingMode: "vertical-lr" }}
        onMouseEnter={() => {
          setservice(true);
        }}
        onMouseLeave={() => {
          setservice(false);
        }}
      >
        Our services
        {/* <div
          className="relative h-full left-[2px] w-[176px] text-[75px] leading-[0px] flex justify-center items-center overflow-hidden"
          style={{ writingMode: "horizontal-tb" }}
        >
          <span className="animate-marquee pacity-0 duration-1000 whitespace-nowrap text-the-lightWhite">
            <span className="px-4 inline-block animate-[marquee_6000ms_linear_infinite]">
              OUR SERVICES
            </span>
          </span>
        </div> */}
      </Link>
      <Link
        href={"/Contact"}
        className="relative left-[100px] text-transparent whitespace-nowrap uppercase text-[30px] w-[400px] py-4 cursor-pointer transition-all duration-500 [&>div>span]:hover:text-white"
        style={{ writingMode: "vertical-lr" }}
        onMouseEnter={() => {
          setcontact(true);
        }}
        onMouseLeave={() => {
          setcontact(false);
        }}
      >
        Contact
        {/* <div
          className="relative h-full left-[2px] w-[176px] text-[75px] leading-[0px] flex justify-center items-center overflow-hidden "
          style={{ writingMode: "horizontal-tb" }}
        >
          <span className="animate-marquee pacity-0 duration-1000 whitespace-nowrap text-the-lightWhite">
            <span className="px-4 inline-block animate-[marquee_6000ms_linear_infinite]">
              CONTACT
            </span>
          </span>
        </div> */}
      </Link>
    </div>
  );
}

function ModelHome() {
  const group = useRef();
  const { scene, animations } = useGLTF("./RTFA/Models/text/text.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    // Optional: Update model per frame if needed
  });

  useEffect(() => {
    actions["Text"].play();
    console.log(actions);
  }, [actions]);

  return (
    <mesh
      scale={[70, 70, 1]}
      position={[0, window.innerHeight / 2 - 60, 10]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <primitive ref={group} object={scene} />
    </mesh>
  );
}

function LinesMarks({ x, y, z, scale, mousePosition }: any) {}

function Marker({ positionY, mousePosition, thick }: any) {
  const markerRef = useRef();

  // Define the function x(y) = 2 * exp(-k * |y|)
  const computeXPosition = (y) => {
    const k = 0.005; // You can adjust k to control the decay rate
    return 15 - 25 * Math.exp(-k * Math.abs(y));
  };

  useFrame(() => {
    // Update marker position based on the computed x position
    markerRef.current.position.x = computeXPosition(
      positionY * 5 -
        window.innerHeight / 2 -
        (mousePosition.current * 2 - (positionY * 5 - window.innerHeight / 2))
    );
    // Optional: log to see the value
  });

  return (
    <mesh
      ref={markerRef}
      position={[0, positionY * 5 - window.innerHeight / 2, -60]}
    >
      <boxGeometry
        args={[275 + (thick ? 26 : 20), thick ? 6 : 3, thick ? 6 : 3]}
      />
      <meshStandardMaterial color={"grey"}></meshStandardMaterial>
    </mesh>
  );
}

function LINKBtn({ homeState, text, posistion, thickness }: any) {
  const linkRef = useRef();
  const ligthRef = useRef();
  const ligthRef2 = useRef();
  const ligthRef3 = useRef();
  const ligthRef4 = useRef();
  const ligthRef5 = useRef();
  const ligthRef6 = useRef();
  const ligthRef7 = useRef();

  useLayoutEffect(() => {
    console.log("change", ligthRef.current);
    if (homeState) {
      gsap.to(ligthRef.current, { intensity: 25000 });
      gsap.to(ligthRef2.current, { intensity: 25000 });
      gsap.to(ligthRef3.current, { intensity: 25000 });
      gsap.to(ligthRef4.current, { intensity: 25000 });
      gsap.to(ligthRef5.current, { intensity: 25000 });
      gsap.to(ligthRef6.current, { intensity: 25000 });
      gsap.to(ligthRef7.current, { intensity: 25000 });
      gsap.to(linkRef.current.rotation, { x: 0 });
    } else {
      gsap.to(ligthRef.current, { intensity: 0 });
      gsap.to(ligthRef2.current, { intensity: 0 });
      gsap.to(ligthRef3.current, { intensity: 0 });
      gsap.to(ligthRef4.current, { intensity: 0 });
      gsap.to(ligthRef5.current, { intensity: 0 });
      gsap.to(ligthRef5.current, { intensity: 0 });
      gsap.to(ligthRef6.current, { intensity: 0 });
      gsap.to(ligthRef7.current, { intensity: 0 });
      gsap.to(linkRef.current.rotation, { x: Math.PI / 2 });
    }
  }, [homeState]);

  return (
    <>
      <group ref={linkRef} position={posistion}>
        <mesh receiveShadow={true}>
          <boxGeometry args={[350, thickness, thickness]}></boxGeometry>{" "}
          <meshStandardMaterial
            transparent={true}
            opacity={0}
          ></meshStandardMaterial>
        </mesh>
        <mesh>
          <Text castShadow scale={40} position={[0, 0, thickness / 2 + 5]}>
            {text}
            <meshStandardMaterial color={"black"}></meshStandardMaterial>
          </Text>
        </mesh>
        <mesh>
          <Text
            scale={25}
            position={[-150, thickness / 2, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            {text}
            <meshBasicMaterial color={"white"}></meshBasicMaterial>
          </Text>
        </mesh>
      </group>
      <pointLight
        ref={ligthRef}
        position={[posistion[0] - 140, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef2}
        position={[posistion[0] - 90, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef3}
        position={[posistion[0] - 40, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef4}
        position={[posistion[0] + 10, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef5}
        position={[posistion[0] + 60, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef6}
        position={[posistion[0] + 110, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={ligthRef7}
        position={[posistion[0] + 160, posistion[1], 60]}
        rotation={[0, 0, 0]}
        color={"white"}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
    </>
  );
}
