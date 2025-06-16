import { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                We Engineer Tomorrow’s Technology—Today
              </h3>
              <p className="description">
                At Ruribits Technology, we’re more than just a software
                company—we’re your strategic technology partner. With a
                relentless focus on innovation and quality, we help businesses
                evolve by building tailored digital solutions that solve
                real-world problems.
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
                We believe in the power of digital transformation. That means
                not just following trends, but setting them. Whether you're a
                startup aiming to scale or an enterprise optimizing operations,
                we build smart, scalable, and secure solutions that push the
                boundaries of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="innovation-hub" className="relative py-[3rem] bg-gradient-to-b from-white to-gray-50">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Harnessing Intelligent Technologies</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="Advanced technology visualization"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover shadow-md"
              />
              <p className="description">
                In today's rapidly evolving digital landscape, intelligent technologies 
                are redefining what's possible across industries. At Ruribits, we're 
                pioneering applications that combine machine learning, neural networks, 
                and advanced analytics to create solutions that adapt, learn, and evolve.
                <br /><br />
                Our approach integrates cutting-edge technology with human-centered design, 
                ensuring that our innovations enhance rather than replace human capabilities. 
                By developing systems that understand context, recognize patterns, and 
                make informed recommendations, we're helping organizations transform data 
                into actionable intelligence and meaningful outcomes.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="Advanced technology visualization"
                className="h-full w-full aspect-video rounded-xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="wrapper bg-gradient-to-r from-blue-50 to-white rounded-xl my-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[20%_auto] items-center gap-7 pt-[5rem] pb-[3rem]">
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              loading="lazy"
              alt="Ruribits leadership"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading">A Vision for Digital Excellence</h3>
            <p className="description">
              "The digital revolution isn't just about technology—it's about reimagining 
              what's possible when we combine human creativity with computational power. 
              At Ruribits, we're passionate about creating solutions that don't just meet 
              current needs but anticipate future possibilities.
              <br /><br />
              Our team thrives on solving complex challenges through innovative thinking 
              and technical expertise. We believe that the most powerful technologies are 
              those that enhance human potential while creating sustainable value. As we 
              continue to push the boundaries of what's possible, we remain committed to 
              ethical innovation that serves both business objectives and broader societal goals."
            </p>
          </div>
        </div>
      </section>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
