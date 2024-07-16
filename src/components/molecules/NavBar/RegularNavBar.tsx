import Link from "next/link";

interface iRegularNavBar {
  transforBar: boolean;
}

export default function RegularNavBar({ transforBar }: iRegularNavBar) {
  return (
    <>
      <Link
        className={
          "text-white text-xl absolute left-[20px] h-[35px] w-[108px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
          (transforBar
            ? "opacity-0 translate-x-[0px] scale-0"
            : "hidden md:block")
        }
        href={"/"}
      >
        <span className="relative block z-10">Home</span>
      </Link>
      <Link
        className={
          "text-white text-xl absolute left-[128px] h-[35px] w-[137px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
          (transforBar
            ? "opacity-0 translate-x-[-125px] scale-0"
            : "hidden md:block")
        }
        href={"/AboutUs"}
      >
        <span className="relative block z-10">About us</span>
      </Link>
      <Link
        className={
          "text-white text-xl absolute left-[264px] h-[35px] w-[171px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
          (transforBar
            ? "opacity-0 translate-x-[-285px] scale-0"
            : "hidden md:block")
        }
        href={"/OurServices"}
      >
        <span className="relative block z-10">Our services</span>
      </Link>
      <Link
        className={
          "text-white text-xl absolute left-[434px] h-[35px] w-[127px] z-0 transition-all duration-500 flex justify-center items-center border-b-[3px] border-transparent hover:border-white px-6 " +
          (transforBar
            ? "opacity-0 translate-x-[-420px] scale-0"
            : "hidden md:block")
        }
        href={"/ContactUs"}
      >
        <span className="relative block z-10">Contact</span>
      </Link>
    </>
  );
}

RegularNavBar.displayName = "RegularNavBar";
