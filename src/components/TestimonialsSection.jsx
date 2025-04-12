import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testimonials } from "../data";
import { IoIosStar } from "react-icons/io";

const TestimonialsSection = () => {
  return (
    <section className="py-20 mx-auto px-4 max-w-7xl">
      {/* TESTIMONIAL HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
          What our happy clients say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* TESTIMONIAL CARDS SECTION */}
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-next-button-custom",
            prevEl: ".swiper-prev-button-custom",
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="md:py-12 py-4 h-full">
              <div className="text-center space-y-3 shadow-md rounded-lg p-4 h-full flex flex-col bg-white">
                {/* TESTIMONIAL IMAGE */}
                <div className="w-24 h-24 mx-auto">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial image of ${testimonial.name}`}
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>

                {/* STARS */}
                <div className="flex justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <span className="text-yellow-500" key={starIndex}>
                      <IoIosStar size={15} />
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center mt-4 md:mt-8 gap-4">
          <button className="swiper-prev-button-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer hover:text-white duration-200">
            <BsChevronLeft size={25} />
          </button>

          <button className=" swiper-next-button-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer hover:text-white duration-200">
            <BsChevronRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
