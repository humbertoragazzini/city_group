// @ts-nocheck
"use client";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { useRef } from "react";
import LogoBG from "@/components/Organims/RTFAnimations/RTFAComponents/Logo/LogoBG";
import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";
import GradientBG from "@/components/Organims/RTFAnimations/RTFAComponents/GradientBG/GradientBG";
import gsap from "gsap";
import { useAppContext } from "@/context/AppContext";
export default function Home() {
  const context = useAppContext();
  return (
    <SmoothScrollbar enabled={!context.state.isMenuOpen}>
      {() => {
        return (
          <>
            <div
              className={
                "relative z-10 overflow-hidden m-auto pt-[0px] text-white " +
                (!context.state.isMenuOpen ? "" : "h-screen")
              }
            >
              <GradientBG className={"absolute top-0 left-0"}></GradientBG>

              <div className="relative backdrop-blur-lg bg-[rgba(10,10,10,0.3)] md:bg-transparent md:backdrop-blur-none md:h-screen w-screen ">
                <GlassMorphism></GlassMorphism>

                <div className="grid h-screen grid-cols-1 xl:grid-cols-3 max-w-[1920px] mx-auto">
                  <div className="relative col-span-1 xl:col-span-2 px-4 pt-[90px] md:pt-[0px] md:px-16 flex flex-col justify-center items-start">
                    <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5">
                      <span className="block">PrimalPorts</span> Elevating
                      Excellence Across Industries
                    </h2>
                    <p className="mb-5 text-2xl sm:text-4xl">
                      Comprehensive Solutions in Imports, Construction, and
                      Retail
                    </p>
                    <p className="mb-5 text-lg sm:text-2xl">
                      At PrimalPort, we harmonize the art of innovation with the
                      science of expertise to offer transcendent services in
                      Imports, Construction, and Retail. Explore how our
                      holistic approach and unwavering dedication to quality
                      foster success and transformation across a myriad of
                      sectors.
                    </p>
                  </div>
                  <div className="relative hidden col-span-1 m-4 lg:block">
                    <LogoBG
                      className={
                        "left-[0%] lg:top-[-65%] 3xl:top-[-50%] 4xl:top-[0%] 5xl:top-[0%] hidden xl:block"
                      }
                      width={1300}
                      rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
                    ></LogoBG>
                  </div>
                </div>
              </div>

              <div className="grid h-screen grid-cols-1">
                <div className="relative col-span-1 p-7 lg:p-11">
                  <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                    Our Divisions
                  </h2>
                  <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                    Import Division
                  </h3>
                  <p>
                    In our Import Division, we traverse the globe to source the
                    finest materials and products. Our extensive network of
                    international suppliers ensures that we deliver unparalleled
                    quality and innovation. We bring the world's best to your
                    doorstep, tailored to meet the unique demands of your
                    projects.
                  </p>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11">
                  <p>
                    Premium Materials: Handpicked for their superior quality.
                    Reliable Supply Chain: Ensuring consistency and
                    dependability. Competitive Pricing: Providing value without
                    compromise.
                  </p>
                </div>
              </div>

              <div className="grid h-screen grid-cols-1 bg-[#267788]">
                <div className="relative col-span-1 p-7 lg:p-11">
                  <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                    Our Divisions
                  </h2>
                  <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                    Import Division
                  </h3>
                  <p>
                    In our Import Division, we traverse the globe to source the
                    finest materials and products. Our extensive network of
                    international suppliers ensures that we deliver unparalleled
                    quality and innovation. We bring the world's best to your
                    doorstep, tailored to meet the unique demands of your
                    projects.
                  </p>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11">
                  <p>
                    Premium Materials: Handpicked for their superior quality.
                    Reliable Supply Chain: Ensuring consistency and
                    dependability. Competitive Pricing: Providing value without
                    compromise.
                  </p>
                </div>
              </div>

              <div className="grid h-screen grid-cols-1">
                <div className="relative col-span-1 p-7 lg:p-11">
                  <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                    Our Divisions
                  </h2>
                  <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                    Import Division
                  </h3>
                  <p>
                    In our Import Division, we traverse the globe to source the
                    finest materials and products. Our extensive network of
                    international suppliers ensures that we deliver unparalleled
                    quality and innovation. We bring the world's best to your
                    doorstep, tailored to meet the unique demands of your
                    projects.
                  </p>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11">
                  <p>
                    Premium Materials: Handpicked for their superior quality.
                    Reliable Supply Chain: Ensuring consistency and
                    dependability. Competitive Pricing: Providing value without
                    compromise.
                  </p>
                </div>
              </div>

              <div className="grid h-screen grid-cols-1 bg-[#267788]">
                <div className="relative col-span-1 p-7 lg:p-11">
                  <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                    Our Divisions
                  </h2>
                  <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                    Import Division
                  </h3>
                  <p>
                    In our Import Division, we traverse the globe to source the
                    finest materials and products. Our extensive network of
                    international suppliers ensures that we deliver unparalleled
                    quality and innovation. We bring the world's best to your
                    doorstep, tailored to meet the unique demands of your
                    projects.
                  </p>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11">
                  <p>
                    Premium Materials: Handpicked for their superior quality.
                    Reliable Supply Chain: Ensuring consistency and
                    dependability. Competitive Pricing: Providing value without
                    compromise.
                  </p>
                </div>
              </div>

              <div className="grid h-screen grid-cols-1">
                <div className="relative col-span-1 p-7 lg:p-11">
                  <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                    Our Divisions
                  </h2>
                  <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                    Import Division
                  </h3>
                  <p>
                    In our Import Division, we traverse the globe to source the
                    finest materials and products. Our extensive network of
                    international suppliers ensures that we deliver unparalleled
                    quality and innovation. We bring the world's best to your
                    doorstep, tailored to meet the unique demands of your
                    projects.
                  </p>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11">
                  <p>
                    Premium Materials: Handpicked for their superior quality.
                    Reliable Supply Chain: Ensuring consistency and
                    dependability. Competitive Pricing: Providing value without
                    compromise.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 bg-[#267788]">
                <div className="relative col-span-1 p-7 lg:p-11 flex flex-col justify-center items-center">
                  <h3 className="text-2xl">Visit</h3>
                  <a>Home</a>
                  <a>About us</a>
                  <a>Our services</a>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11 flex flex-col justify-center items-center">
                  <h3 className="text-2xl">Social</h3>
                  <a>Facebook</a>
                  <a>Instagram</a>
                  <a>Tiktok</a>
                  <a>Twiter</a>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11 flex flex-col justify-center items-center">
                  <h3 className="text-2xl">Useful links</h3>
                  <a>Steel City</a>
                  <a>RGA</a>
                  <a>Imports</a>
                  <a>Constructions</a>
                </div>
                <div className="relative col-span-1 p-7 lg:p-11 flex flex-col justify-center items-center">
                  <h3 className="text-2xl">Contact</h3>
                  <a>Tel: ARG:45555889 / Uk: 55887446</a>
                  <a>Email: contact@primalports.com</a>
                  <a>Whatsapp: Arg:45555889 / uk:45555889</a>
                </div>
                <div className="col-span-4 flex flex-col justify-center items-center">
                  <h3>All right reserved to</h3>
                  <p>Primalports technical divition Tobe21 2024</p>
                </div>
              </div>

              {/* <div className="grid h-screen grod-cols-1 md:grid-cols-2 p-4 lg:p-16 max-w-[1520px] m-auto">
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <h2>Construction Division</h2>
                      <p>
                        The Construction Division is the heart of our philosophy,
                        where vision meets reality. We build structures that not
                        only serve their purpose but also inspire and endure.
                        Whether residential or commercial, our projects reflect a
                        commitment to excellence and sustainability.
                      </p>
                    </div>
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <p>
                        Residential and Commercial Mastery: Diverse expertise for
                        varied needs. Innovative Design and Engineering: Melding
                        creativity with precision. Sustainable Practices: Building
                        with a conscience for future generations.
                      </p>
                    </div>
                  </div>

                  <div className="grid h-screen  grid-cols-12  bg-[#267788]">
                    <div className="relative col-start-1 col-end-13 p-2 lg:p-11">
                      <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                        Our Divisions
                      </h2>
                      <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                        Import Division
                      </h3>
                      <p>
                        In our Import Division, we traverse the globe to source the
                        finest materials and products. Our extensive network of
                        international suppliers ensures that we deliver unparalleled
                        quality and innovation. We bring the world's best to your
                        doorstep, tailored to meet the unique demands of your
                        projects.
                      </p>
                    </div>
                    <div className="relative h-[25vh] m-4 col-start-1 col-end-10 p-2 lg:p-11">
                      <p>
                        Premium Materials: Handpicked for their superior quality.
                        Reliable Supply Chain: Ensuring consistency and
                        dependability. Competitive Pricing: Providing value without
                        compromise.
                      </p>
                    </div>
                  </div>
                  <div className="grid h-screen grod-cols-1 md:grid-cols-2 p-2 lg:p-16 max-w-[1520px] m-auto">
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <h2>Retail Sales Division</h2>
                      <p>
                        Our Retail Sales Division offers a curated selection of
                        products designed to enhance and enrich your living and
                        working environments. We provide a seamless shopping
                        experience, ensuring that you find exactly what you need to
                        complete your projects with distinction.
                      </p>
                    </div>
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <p>
                        Comprehensive Product Range: From essentials to exclusive
                        items. Expert Guidance: Personalized service to inform and
                        inspire. Convenient Accessibility: Easy shopping at your
                        fingertips.
                      </p>
                    </div>
                  </div>

                  <div className="grid h-screen  grid-cols-12  bg-[#267788]">
                    <div className="relative col-start-1 col-end-13 p-2 lg:p-11">
                      <h2 className="text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px]">
                        Our Divisions
                      </h2>
                      <h3 className="text-3xl sm:text-[65px] sm:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[65px] lg:leading-[65px]">
                        Import Division
                      </h3>
                      <p>
                        In our Import Division, we traverse the globe to source the
                        finest materials and products. Our extensive network of
                        international suppliers ensures that we deliver unparalleled
                        quality and innovation. We bring the world's best to your
                        doorstep, tailored to meet the unique demands of your
                        projects.
                      </p>
                    </div>
                    <div className="relative h-[25vh] m-4 col-start-1 col-end-10 p-2 lg:p-11">
                      <p>
                        Premium Materials: Handpicked for their superior quality.
                        Reliable Supply Chain: Ensuring consistency and
                        dependability. Competitive Pricing: Providing value without
                        compromise.
                      </p>
                    </div>
                  </div>
                  <div className="grid h-screen grod-cols-1 md:grid-cols-2 p-2 lg:p-16 max-w-[1520px] m-auto">
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <h2>Why Partner with Us?</h2>
                      <p>
                        Expertise: Decades of industry experience, delivering
                        insights and excellence. Quality: Unwavering commitment to
                        the highest standards in every endeavor. Customer
                        Centricity: Your satisfaction is our ultimate goal, driving
                        us to exceed expectations. Innovation: Continuous pursuit of
                        groundbreaking solutions and superior products.
                      </p>
                    </div>
                    <div className="relative h-[25vh] m-4 col-span-1 p-2 lg:p-11">
                      <p>Connect with Us</p>
                      <p>
                        Embark on your next project with the confidence that comes
                        from partnering with a leader in the field. Contact [Your
                        Company Name] today to discover how we can assist you in
                        achieving your vision.
                      </p>
                      <p>
                        Phone: [Your Phone Number] Email: [Your Email Address]
                        Address: [Your Physical Address]
                      </p>
                      <p>
                        Join our community and stay updated on the latest news and
                        offers by following us on [Social Media Links].
                      </p>
                    </div>
                  </div> */}
            </div>
          </>
        );
      }}
    </SmoothScrollbar>
  );
}

Home.displayName = "Home";
