import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <footer className="py-10 text-white bg-[#0f072c]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>

        <div className="flex flex-col items-center mb-6 space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-400" size={20} />
            <p className="text-center">
              Email:{" "}
              <a href="mailto:magiclelabs@gmail.com" className="underline">
                magiclelabs@gmail.com
              </a>{" "}
              |{" "}
              <a href="mailto:Hello@magiclelabs.com" className="underline">
                Hello@magiclelabs.com
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-gray-400" size={20} />
            <p className="text-center">Phone: +94 762031555 , +94 712259290</p>
          </div>
        </div>

        <p className="mb-6 text-center">
          Feel free to reach out to us if you have any inquiries. We’re here to
          help!
        </p>

        <div className="flex justify-center mb-8 space-x-8">
          <a
            href="https://www.facebook.com/profile.php?id=100094529950532"
            className="text-white transition-colors duration-300 hover:text-purple-400 border-[3px] border-white rounded-full p-2"
            aria-label="Facebook"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/magicle-labs"
            className="text-white transition-colors duration-300 hover:text-purple-400 border-[3px] border-white rounded-full p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>

        <div className="text-center text-gray-400">
          © 2024 Magicle Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
