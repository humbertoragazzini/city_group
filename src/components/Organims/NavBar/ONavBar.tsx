"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import CNavBarLink from "../../Cells/NavBar/CNavBarLink";
import CNavMobLink from "@/components/Cells/NavBar/CNavMobLink";

export default function ONavBar() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current route:", pathname);
  }, [pathname]);

  return (
    <>
      <nav className="fixed w-full hidden lg:flex flex-row justify-end mx-auto p-4">
        <div className="m-2">
          <CNavBarLink
            className={
              pathname === "/" ? "bg-the-red text-white shadow-lg" : ""
            }
            linkText={"Home"}
            href={"/"}
          ></CNavBarLink>
        </div>
        <div className="m-2">
          <CNavBarLink
            className={
              pathname === "/OurServices"
                ? "bg-the-red text-white shadow-lg"
                : ""
            }
            linkText={"Our services"}
            href={"/OurServices"}
          ></CNavBarLink>
        </div>
        <div className="m-2">
          <CNavBarLink
            className={
              pathname === "/AboutUs" ? "bg-the-red text-white shadow-lg" : ""
            }
            linkText={"About us"}
            href={"/AboutUs"}
          ></CNavBarLink>
        </div>
        <div className="m-2">
          <CNavBarLink
            className={
              pathname === "/ContactUs" ? "bg-the-red text-white shadow-lg" : ""
            }
            linkText={"Contact us"}
            href={"/ContactUs"}
          ></CNavBarLink>
        </div>
      </nav>
      <nav className="fixed w-full flex flex-row lg:hidden justify-end max-w-[1280px] mx-auto">
        <button className="bg-red-200 w-[50px] h-[50px] m-2 absolute z-50"></button>
        <div className="backdrop-blur-sm w-full">
          <div className="m-2">
            <CNavMobLink
              className={
                pathname === "/" ? "bg-the-red text-white shadow-lg" : ""
              }
              linkText={"Home"}
              href={"/"}
            ></CNavMobLink>
          </div>
          <div className="m-2">
            <CNavMobLink
              className={
                pathname === "/OurServices"
                  ? "bg-the-red text-white shadow-lg"
                  : ""
              }
              linkText={"Our services"}
              href={"/OurServices"}
            ></CNavMobLink>
          </div>
          <div className="m-2">
            <CNavMobLink
              className={
                pathname === "/AboutUs" ? "bg-the-red text-white shadow-lg" : ""
              }
              linkText={"About us"}
              href={"/AboutUs"}
            ></CNavMobLink>
          </div>
          <div className="m-2">
            <CNavMobLink
              className={
                pathname === "/ContactUs"
                  ? "bg-the-red text-white shadow-lg"
                  : ""
              }
              linkText={"Contact us"}
              href={"/ContactUs"}
            ></CNavMobLink>
          </div>
        </div>
      </nav>
    </>
  );
}

ONavBar.displayName = "ONavBar";
