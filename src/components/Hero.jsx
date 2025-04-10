import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="pt-44 pb-16 mx-auto px-4 sm:px-6 lg:px-8 container flex flex-col md:flex-row items-center justify-between">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* STAR BADGE */}
        <div className="flex items-center bg-gray-50 w-fit px-4 py-2 rounded-full group hover:bg-gray-100 transition-all duration-300 cursor-pointer gap-2">
          <span className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-all">
            <IoMdStar size={20} />
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We boost the growth for{" "}
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-200/50 w-full"></span>
          </span>{" "}
          Companies <span className="animate-pulse">⏰</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-gray-600">
          Get the most accurate leads, sales people training and conversions,
          tools and more - all within the same one billing
        </p>

        {/* INPUT BOX */}
        <div className="flex max-w-md gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all flex-1"
          />

          <button className="bg-blue-500 rounded-lg px-5 text-white hover:shadow-md hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-16">
        <div className="relative">
          <img
            src={heroImage}
            alt="Hero Image"
            className="hover:scale-[1.01] transition-transform duration-200 z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
