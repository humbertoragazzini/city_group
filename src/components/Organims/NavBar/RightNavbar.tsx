"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuBackground } from "./RTFComponent/MenuBackground";

export default function RightNavBar() {
  const [hovered, setHovered] = useState<string>("");
  const [homeState, sethomeState] = useState<boolean>(false);
  const [about, setabout] = useState<boolean>(false);
  const [service, setservice] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);

  return (
    <div className="fixed hidden lg:block group top-0 h-screen z-20 animate-gradient-y w-[450px] right-[-300px] hover:right-[0px] transition-all duration-700 ">
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
      </Link>
    </div>
  );
}
