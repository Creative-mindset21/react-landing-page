import React from "react";
import { features } from "../data";

const PurposeSection = () => {
  return (
    <section className="bg-gray-50 w-full py-16 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HEADING */}
          <div>
            <p className="text-purple-600 font-medium text-sm mb-2">
              ACHIEVE MORE
            </p>
            <h2 className="text-3xl font-bold md:text-4xl text-gray-900 md:w-4/5">
              Purpose of a convoy is to keep your team
            </h2>
          </div>

          {/* BULLET POINTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 justify-between gap-8">
            {features.map((feature, index) => (
              <div className="flex items-start space-x-4" key={index}>
                <div className="w-12 h-12 flex justify-start rounded-lg">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
