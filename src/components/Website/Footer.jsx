import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { allServices, clientDetails, logo } from "../../constants";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-secondary to-secondary/90 pt-12 pb-6 text-white">
      <div className="wrapper mx-auto px-5 sm:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <img
              fetchPriority="high"
              src={logo}
              width="150"
              height="100"
              alt="Ruribits Technology"
              className="w-[10rem] object-contain bg-white/50 p-2 rounded-lg"
            />
            <p className="text-gray-300 mt-2">
              Pioneering technological innovation to create a future where
              businesses of all sizes can harness the power of advanced
              solutions.
            </p>

            <div className="flex mt-3 gap-4 items-center">
              <Link
                to={clientDetails.linkedin}
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                to={clientDetails.twitter}
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaXTwitter className="text-xl" />
              </Link>
              <Link
                to={clientDetails.instagram}
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <AiFillInstagram className="text-xl" />
              </Link>
              <Link
                to={clientDetails.facebook}
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <GrFacebookOption className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold border-b border-primary/30 pb-2 mb-2">
              Our Services
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {allServices.map((item) => (
                <Link
                  key={item.id}
                  to={`/services/${item.title}`}
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold border-b border-primary/30 pb-2 mb-2">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                to="/about-us"
                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">›</span> About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">›</span> Services
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">›</span> Contact Us
              </Link>
              <Link
                to="/blogs"
                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">›</span> Blogs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold border-b border-primary/30 pb-2 mb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <Link
                to={`mailto:${clientDetails.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300"
              >
                <MdEmail className="text-primary text-xl" />
                <span>{clientDetails.email}</span>
              </Link>
              <Link
                to={`tel:${clientDetails.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300"
              >
                <FaPhoneAlt className="text-primary text-xl" />
                <span>+{clientDetails.phone}</span>
              </Link>
              <div className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <span>{clientDetails.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Ruribits Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
