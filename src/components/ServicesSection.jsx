import React from "react";
import { services } from "../data";

const ServicesSection = () => {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
        {/* TEXTS */}
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-3xl md:text-5xl mb-6 md:w-4/5 text-gray-900">
            Future of support with new shape
          </h2>

          <p className="text-gray-600 mb-4 text-lg md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </p>

          {/* BULLET POINTS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">UX Design content strategy</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>

          {/* BUTTON */}
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full mt-6 text-white font-medium transition-colors cursor-pointer">
            Get Started
          </button>
        </div>

        {/* SERVICES CARD */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                className="bg-white hover:shadow-xl group rounded-2xl p-6 cursor-pointer max-w-72 transition-all hover:scale-105 duration-300"
                key={index}
              >
                <div className="mb-4">
                  <IconComponent size={30} className={service.className} />
                </div>

                <div className="mb-4 space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <a
                  href={service.link}
                  className="text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
