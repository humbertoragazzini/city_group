"use client";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import React from "react";
import Heading from "@/components/Atoms/Heading/Heading";

export default function AboutUs() {
  const context = useAppContext();

  useEffect(() => {
    if (context.state.isMenuOpen) {
      const scrollPosition = window.pageYOffset;
      window.onscroll = () => {
        window.scrollTo(0, scrollPosition);
      };
    } else {
      window.onscroll = null;
    }
  }, [context.state.isMenuOpen]);

  return (
    <div
      className={`relative z-10 transition-all duration-1000 m-auto pt-[0px] text-white`}
    >
      {/* Section with us and the description */}
      <div className="w-full min-h-screen py-24 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] flex flex-col justify-center items-center overflow-hidden relative">
        <div className="absolute z-10 h-full min-w-full min-h-screen"></div>
        <div className="grid grid-cols-2 w-full xl:w-[75%] xl:max-w-[1920px] p-1 md:p-2 lg:p-4">
          <div className="col-span-2 xl:col-span-2">
            <div className="flex items-center justify-center w-full h-full">
              <Heading
                className={"relative z-20 text-2xl text-center md:text-4xl"}
                text={[
                  {
                    language: "EN",
                    content: "Contact us",
                  },
                  {
                    language: "ES",
                    content: "Contactanos",
                  },
                  {
                    language: "CH",
                    content: "业的卓越水平",
                  },
                  {
                    language: "IT",
                    content: "Contacto",
                  },
                ]}
                level={2}
              ></Heading>
            </div>
          </div>
          <div className="relative z-20 col-span-2 mt-12 xl:col-span-2">
            <div className="items-center justify-center w-full">
              <div className="flex items-center justify-center m-2 lg:m-4 xl:m-12">
                <div className="w-full p-8 shadow-xl lg:max-w-lg backdrop-blur-lg bg-white/10 rounded-2xl">
                  <form className="space-y-4">
                    <div>
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Enter your company name"
                        className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="inquiry"
                      >
                        Your Inquiry
                      </label>
                      <textarea
                        id="inquiry"
                        placeholder="Enter your message"
                        rows={4}
                        className="w-full p-3 text-white placeholder-gray-300 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-3 mt-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.displayName = "AboutUs";
