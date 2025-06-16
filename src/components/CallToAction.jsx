import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="wrapper mb-[3rem]">
      <div className="flex flex-col gap-6 items-center py-[4rem] px-[2rem] md:px-[4rem] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg border border-gray-100">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Ready to Transform Your Digital Presence?
        </span>

        <h2 className="heading text-center max-w-5xl mx-auto text-secondary">
          Partner with Experts to Build Your Next-Generation Digital Solution
        </h2>

        <p className="description text-center max-w-4xl mx-auto text-gray-600">
          Our team of specialists combines technical expertise with strategic
          thinking to develop custom solutions that address your unique
          challenges. Whether you're looking to modernize legacy systems, create
          innovative products, or optimize business processes, we have the
          skills and experience to bring your vision to life.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact-us"
            className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-3 font-medium flex items-center justify-center transition-all duration-300 hover:shadow-md"
          >
            Schedule a Free Consultation
          </Link>
          
          <Link
            to="/services"
            className="text-secondary border-2 border-secondary/20 hover:border-secondary/50 bg-white hover:bg-gray-50 rounded-full px-8 py-3 font-medium flex items-center justify-center transition-all duration-300 group"
          >
            <span>Explore Our Services</span>
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
