import React from "react";
import { industriesCompanyServe } from "../constants";

const IndustriesWeServe = () => {
  return (
    <section className="wrapper py-[5rem]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
          <h2 data-aos="fade-up" className="heading text-primary">
            Industry Expertise That Drives Innovation
          </h2>
          <p data-aos="fade-up" className="mt-3 description mb-4">
            Our deep understanding of diverse sectors enables us to create 
            specialized solutions that address unique industry challenges and 
            unlock new opportunities for growth:
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {industriesCompanyServe.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 rounded-xl shadow-xl relative group overflow-hidden min-h-[15rem] cursor-pointer border border-transparent hover:border-gray-200"
            >
              <img
                src={item.img}
                alt={`${item.title} industry solutions`}
                loading="lazy"
                width="400"
                height="250"
                className="w-full h-full object-cover absolute top-0 left-0 rounded-lg group-hover:scale-105 transition-all duration-500"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/70 to-black/30 group-hover:from-black/80 group-hover:to-black/50 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-blue-300 font-semibold uppercase tracking-wider">
                  Specialized Solutions
                </div>
                <div className="mt-auto">
                  <h3 className="text-center text-[1.6rem] font-bold tracking-wide text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p data-aos="fade-up" className="text-center text-gray-600 italic max-w-3xl mx-auto mt-4">
          Our cross-industry expertise allows us to bring innovative approaches from one sector to another, 
          creating unique solutions that give our clients a competitive edge.
        </p>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
