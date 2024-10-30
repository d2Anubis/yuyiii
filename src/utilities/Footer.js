// components/Footer.js
import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        </div>
        <p className="text-sm">&copy; 2024 Yuyii. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
