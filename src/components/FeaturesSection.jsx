import React from "react";
import { featuress } from "../data";

const FeaturesSection = () => {
  return (
    <section className="mx-auto max-w-7xl py-16 px-4">
      {/* HEADING SECTION */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl mb-4 text-gray-900">
          How can we help your business
        </h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featuress.map((feature, index) => (
          <div key={index} className="flex items-center flex-col p-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
              style={{
                backgroundColor:
                  index === 0 ? "#f1eff0" : index === 1 ? "#fee7e7" : "#fff3e4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>

            <h3 className="text-2xl font-medium mb-3 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-white font-medium rounded-full backdrop-blur-2xl shadow-2xl relative transition-colors cursor-pointer">
          Become a Partner
          <div className="absolute w-full h-full top-0 left-0 bg-blue-600/30 rounded-full blur-2xl -z-10"></div>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
