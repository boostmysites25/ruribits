import React from "react";
import icon1 from "../assets/icons/successful-projects.png";
import icon2 from "../assets/icons/happy-customer.png";
import icon3 from "../assets/icons/tech-expert.png";
import CountUp from "react-countup";

const TrustWorthySection = () => {
  return (
    <section className="py-[3rem] bg-gradient-to-b from-white to-gray-50">
      <div className="wrapper text-center">
        <h2 data-aos="fade-up" className="heading max-w-6xl mx-auto">
          Transforming Ideas into Digital Excellence
        </h2>
        <p data-aos="fade-up" className="description max-w-6xl mx-auto mt-3 text-gray-700">
          At Ruribits Technology, we blend innovation with expertise to create 
          transformative digital solutions that help businesses thrive in today's 
          competitive landscape. Our passion for technology drives us to deliver 
          excellence in every project.
        </p>

        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-3 gap-5 lg:gap-8 mt-16 mb-8 rounded-xl shadow-lg bg-white p-8"
        >
          <div className="relative flex flex-col items-start p-5 gap-3 transition-all duration-300 hover:bg-blue-50 rounded-lg">
            <div className="flex w-full items-center gap-4 justify-between">
              <h3 className="text-[2.8rem] lg:text-[3.5rem] font-bold text-primary">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={3}
                  end={8}
                  suffix="+"
                />
              </h3>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-blue-500 bg-opacity-10 p-4 flex justify-center items-center shadow-md">
                <img
                  src={icon1}
                  className="w-[3.5rem] lg:w-[4.5rem] object-contain"
                  alt="Years of Innovation"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <p className="text-gray-800 text-xl font-medium leading-tight text-start">
              Years of Innovation
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-start">
              Building cutting-edge solutions since 2015
            </p>
          </div>
          
          <div className="relative flex flex-col items-start p-5 gap-3 transition-all duration-300 hover:bg-purple-50 rounded-lg lg:border-l border-gray-200">
            <div className="flex w-full items-center gap-4 justify-between">
              <h3 className="text-[2.8rem] lg:text-[3.5rem] font-bold text-primary">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={4}
                  end={300}
                  suffix="+"
                />
              </h3>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-purple-500 bg-opacity-10 p-4 flex justify-center items-center shadow-md">
                <img
                  src={icon2}
                  className="w-[3.5rem] lg:w-[4.5rem] object-contain"
                  alt="Successful Projects"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <p className="text-gray-800 text-xl font-medium leading-tight text-start">
              Successful Projects
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-start">
              Delivering excellence across diverse industries
            </p>
          </div>
          
          <div className="relative flex flex-col items-start p-5 gap-3 transition-all duration-300 hover:bg-green-50 rounded-lg lg:border-l border-gray-200">
            <div className="flex w-full items-center gap-4 justify-between">
              <h3 className="text-[2.8rem] lg:text-[3.5rem] font-bold text-primary">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={4}
                  end={40}
                  suffix="+"
                />
              </h3>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-green-500 bg-opacity-10 p-4 flex justify-center items-center shadow-md">
                <img
                  src={icon3}
                  className="w-[3.5rem] lg:w-[4.5rem] object-contain"
                  alt="Tech Experts"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <p className="text-gray-800 text-xl font-medium leading-tight text-start">
              Tech Experts
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-start">
              Specialized in cutting-edge technologies
            </p>
          </div>
        </div>
        
        <p data-aos="fade-up" className="text-sm text-gray-600 italic max-w-4xl mx-auto">
          Our commitment to excellence has made us a trusted technology partner for businesses 
          ranging from innovative startups to established enterprises across the globe.
        </p>
      </div>
    </section>
  );
};

export default TrustWorthySection;
