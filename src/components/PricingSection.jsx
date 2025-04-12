import React, { useState } from "react";

const PricingSection = () => {
  const [priceCounter, setPriceCounter] = useState(1);

  const starterPrice = Math.round(4000 * (priceCounter / 50));
  const businessPrice = Math.round(7500 * (priceCounter / 50));
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Pricing
        </h2>

        {/* STARTER AND BUSINESS PRICE RANGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* STARTER */}
          <div className="shadow-lg bg-white p-8 rounded-lg hover:shadow-xl transition-all">
            <p className="mb-4 text-gray-600 text-xl">Starter</p>
            <h3 className="text-3xl font-bold text-gray-900">
              £{starterPrice} / mo
            </h3>
          </div>

          {/* BUSINESS */}
          <div className="shadow-lg bg-white p-8 rounded-lg hover:shadow-xl transition-all">
            <p className="mb-4 text-gray-600 text-xl">Business</p>
            <h3 className="text-3xl font-bold text-gray-900">
              £{businessPrice} / mo
            </h3>
          </div>
        </div>

        {/* INPUT RANGE */}
        <div className="mx-auto max-w-xl">
          <p className="text-center text-gray-600 mb-4">
            {priceCounter} {priceCounter > 1 ? "products" : "product"}
          </p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>

              <input
                type="range"
                min={1}
                max={50}
                value={priceCounter}
                onChange={(e) => setPriceCounter(e.target.value)}
                className="flex-1 appearance-none bg-gray-200 rounded-lg h-2"
              />

              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <h4 className="mb-3 text-gray-700 text-2xl">Ready to get started?</h4>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-7 py-3 text-white rounded-lg font-medium cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
