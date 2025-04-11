import React from "react";
import monitorCard from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const MonitorSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto md:py-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 order-1">
          <img
            src={monitorCard}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2">
          <p className="text-green-600 mb-4 font-medium">MONITOR</p>
          <h3 className="font-bold text-3xl md:text-4xl mb-6 text-gray-900 w-3/4">
            Introducing best mobile carousels
          </h3>

          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>

          <a
            href="#"
            className="text-blue-600 flex items-center gap-2 hover:gap-4 transition-all font-medium"
          >
            Explore scheduling features
            <IoIosArrowRoundForward size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
