import React from "react";
import { slack, amazon, woocommerce, meundies, sitepoint } from "../data";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="flex container py-20 mx-auto items-start sm:items-center flex-col sm:flex-row w-full overflow-hidden">
      {/* WRITEUP */}
      <p className="w-[300px] shrink-0 border-l-4 px-8 text-xl border-blue-500 text-gray-600 bg-white sm:text-base z-10 py-2 font-semibold text-left">
        Proud partner at <br />
        Hubspot & Segment
      </p>

      {/* ANIMATED COMPANY LOGOS */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt="Company Logo"
            className="mx-12 w-36 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition cursor-pointer"
            key={index}
          />
        ))}

        {/* DUPLICATE LOGO */}
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt="Company Logo"
            className="mx-12 w-36 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition cursor-pointer"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
