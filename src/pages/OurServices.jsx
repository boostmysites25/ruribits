import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/services-banner.webp";
import GetInTouch from "../components/GetInTouch";
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const WorkingProcess = lazy(() => import("../components/WorkingProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const OurServices = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Our Services"} banner={banner} position={"left"} />
      <section className="py-[4rem] bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <h2 className="heading text-center mb-6">Expertise That Drives Digital Excellence</h2>
          <p className="description text-center max-w-4xl mx-auto mb-8">
            Ruribits Technology delivers strategic technology solutions that empower 
            organizations to innovate and excel in today's digital landscape. Our 
            multidisciplinary team combines deep technical knowledge with industry 
            expertise to create custom solutions that address complex challenges and 
            unlock new opportunities for growth and transformation.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <HomePageServicesList />
          </div>
          <p className="text-sm text-gray-600 italic text-center mt-6 max-w-3xl mx-auto">
            Each of our services is delivered with a commitment to excellence, 
            transparency, and measurable results. We work collaboratively with our 
            clients to ensure solutions that align perfectly with their business 
            objectives and technical requirements.
          </p>
        </div>
      </section>
      <WorkingProcess />
      <Testimonials />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default OurServices;
