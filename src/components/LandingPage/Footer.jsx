import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { clientDetails, logo } from "../../constants";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 pt-10 pb-6 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-5">
            <img
              fetchPriority="high"
              src={logo}
              alt="Ruribits Technology"
              width="150"
              height="100"
              className="w-[10rem] object-contain bg-white/50 p-2 rounded-lg"
            />
            <p className="text-gray-300 max-w-md">
              Pioneering technological innovation for businesses of all sizes.
              Discover how our solutions can transform your digital presence.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-primary hover:text-white group w-fit"
            >
              <span>Get in touch with us</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold border-b border-primary/30 pb-2">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <Link
                to={`mailto:${clientDetails.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300"
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <MdEmail className="text-primary text-xl" />
                </div>
                <span>{clientDetails.email}</span>
              </Link>

              <Link
                to={`tel:${clientDetails.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300"
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <FaPhoneAlt className="text-primary text-xl" />
                </div>
                <span>+{clientDetails.phone}</span>
              </Link>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="bg-primary/20 p-2 rounded-full mt-1">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <span>{clientDetails.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ruribits Technology. All rights reserved.
          </p>

          <div className="flex gap-4">
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
      </div>
    </div>
  );
};

export default Footer;
