import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"Our Story"}
        banner={bannerImg}
        description="Pioneering technological innovation to create a future where businesses of all sizes can harness the power of advanced solutions to achieve extraordinary results."
      />
      <section className="py-[4rem] wrapper grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            Pioneering Digital Excellence Through Innovation and Expertise
          </h1>
          <p className="description mt-4">
            At Ruribits Technology, we’re more than just a software
            company—we’re your strategic technology partner. With a relentless
            focus on innovation and quality, we help businesses evolve by
            building tailored digital solutions that solve real-world problems.
            <br />
            <br />
            Our team blends deep technical knowledge with creative
            problem-solving, delivering services that span across the most
            transformative technologies today: Blockchain Development, Game
            Development, App Development, Robotic Process Automation (RPA),
            Artificial Intelligence, Machine Learning, Cloud Computing, Web
            Development, Data Science, Natural Language Processing, Cloud
            Migration, and UI/UX Design.
            <br />
            <br />
            We believe in the power of digital transformation. That means not
            just following trends, but setting them. Whether you're a startup
            aiming to scale or an enterprise optimizing operations, we build
            smart, scalable, and secure solutions that push the boundaries of
            innovation.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-full lg:min-h-[50vh] rounded-xl overflow-hidden shadow-lg"
        >
          <img
            loading="lazy"
            src={img1}
            alt="Ruribits leadership team"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="wrapper mb-[3rem] py-[3rem] bg-gradient-to-r from-white to-gray-50 rounded-xl">
        <h2 data-aos="fade-right" className="heading text-center mb-10">
          The Ruribits Difference
        </h2>
        <div className="space-y-12">
          <div data-aos="fade-right" className="space-y-3">
            <h3 className="text-2xl font-semibold">A Culture of Innovation:</h3>
            <p className="description">
              At Ruribits Technology, innovation isn't just a buzzword—it's
              embedded in our DNA. We've cultivated an environment where
              creative thinking flourishes, where challenges are viewed as
              opportunities, and where conventional boundaries are meant to be
              transcended. Our approach combines technical expertise with design
              thinking, allowing us to develop solutions that are not only
              technologically advanced but also intuitive, accessible, and
              aligned with human needs.
            </p>
          </div>

          <div data-aos="fade-right" className="space-y-3">
            <h3 className="text-2xl font-semibold">
              Global Impact, Local Understanding:
            </h3>
            <p className="description">
              With a diverse team representing multiple disciplines,
              perspectives, and cultural backgrounds, we bring a global mindset
              to every project. Our collective expertise spans continents and
              industries, enabling us to address complex challenges with nuanced
              understanding. Yet we maintain a commitment to local context,
              recognizing that the most effective solutions are those that
              respect and adapt to specific market conditions, cultural factors,
              and business environments.
            </p>
          </div>

          <div data-aos="fade-right" className="space-y-3">
            <h3 className="text-2xl font-semibold">Measurable Excellence:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-4xl font-bold text-primary block">
                  200+
                </span>
                <span className="text-gray-600">Technology Professionals</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-4xl font-bold text-primary block">
                  65+
                </span>
                <span className="text-gray-600">
                  Advanced Solutions Deployed
                </span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-4xl font-bold text-primary block">
                  45+
                </span>
                <span className="text-gray-600">
                  Enterprise Transformations
                </span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-4xl font-bold text-primary block">
                  97%
                </span>
                <span className="text-gray-600">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;
