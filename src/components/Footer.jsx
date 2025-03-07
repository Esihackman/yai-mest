import React from "react";
import { FaTiktok, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-green-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-lg">&copy; 2025 Assuah's Robotics. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.tiktok.com/@lee.ching2?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
            <FaTiktok className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://www.youtube.com/@assurob" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/assuah-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://www.instagram.com/assuahrobotics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
