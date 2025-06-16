import React, { lazy, memo, useEffect } from "react";
import Header from "../../components/LandingPage/Header";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import webImg from "../../assets/landingpage-services-imgs/web-development.webp";
import appImg from "../../assets/landingpage-services-imgs/app-development.webp";

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
  import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
  import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const Banner = lazy(() => import("../../components/LandingPage/Banner"));

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const servicesList = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Banner page={page} />

      {/* Consultation Section with Gradient Overlay */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-100/30 py-[6rem] mb-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl -z-0"></div>
        <div className="wrapper relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={isWebDevelopment ? webImg : appImg}
                className="absolute left-0 top-0 w-full h-full object-cover"
                alt={isWebDevelopment ? "Web Development" : "App Development"}
              />
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-black/80 to-primary/70 backdrop-blur-sm p-5">
                <div className="text-white space-y-4 text-center px-6 max-w-xl">
                  <h2 className="font-sans text-3xl sm:text-5xl font-bold leading-tight">
                    Transform Your Digital Vision
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Ruribits Technology specializes in crafting innovative
                    digital solutions that drive growth. Our expert team
                    delivers cutting-edge{" "}
                    {isWebDevelopment
                      ? "web experiences"
                      : "mobile applications"}
                    that elevate your brand and engage your audience in
                    meaningful ways.
                  </p>
                  <div className="pt-2">
                    <button className="bg-white text-primary hover:bg-primary/90 hover:text-white transition-all duration-300 font-medium py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1">
                      Schedule Discovery Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Start Your Journey Today
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </div>

      <TrustWorthySection />

      {/* Services Section with Enhanced Styling */}
      <section
        id="services"
        className="w-screen py-[5rem] min-h-[70vh] flex justify-center relative bg-gradient-to-b from-white to-primary/5"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2 opacity-60"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2 opacity-60"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/10 rounded-full"></div>

        <div className="wrapper flex flex-col items-center gap-8 z-10">
          <div className="max-w-4xl text-center mb-8">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
              {isWebDevelopment ? "WEB EXCELLENCE" : "MOBILE INNOVATION"}
            </span>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800"
            >
              {isWebDevelopment
                ? "Crafting Digital Experiences That Define Your Brand's Future"
                : "Building Mobile Solutions That Connect, Engage, and Transform"}
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg text-gray-600 leading-relaxed"
            >
              {isWebDevelopment
                ? "We create more than just websites—we build digital ecosystems that captivate your audience, drive meaningful engagement, and deliver measurable business outcomes through innovative design and flawless functionality."
                : "In today's mobile-first world, we develop applications that serve as powerful extensions of your business, creating seamless experiences that delight users while driving growth and building lasting customer relationships."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-4 w-full">
            {servicesList.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="relative group shadow-xl rounded-2xl overflow-hidden h-[350px] transform transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  decoding="async"
                  width="550"
                  height="500"
                  className="absolute group-hover:scale-110 transition-all duration-700 w-full h-full inset-0 z-0 object-cover"
                />
                <div className="absolute w-full h-full inset-0 z-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:opacity-90 transition-all duration-300"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                  <div className="transform transition-all duration-300 group-hover:-translate-y-4">
                    <h3 className="font-bold text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-200 leading-relaxed md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services List Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <HomePageServicesList />
      </div>

      {/* Industries Section with Improved Styling */}
      <div className="bg-gray-50 py-16 relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <IndustriesWeServe />
      </div>

      {/* Call to Action with Enhanced Design */}
      <div className="py-16 bg-white">
        <CallToAction />
      </div>

      {/* Portfolio Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <Portfolio page={page} />
      </div>

      {/* Testimonials with Improved Styling */}
      <div className="py-16 bg-gray-50">
        <Testimonials />
      </div>

      {/* Brand Logos Section */}
      <div className="py-16 bg-white">
        <BrandLogos />
      </div>

      {/* Get In Touch Section */}
      <div className="bg-gradient-to-b from-white to-primary/5 py-16">
        <GetInTouch />
      </div>

      <Footer />
    </>
  );
};

export default memo(LandingPage);
