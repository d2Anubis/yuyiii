// components/FooterSocials.js
import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterSocials = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          
          {/* Follow Us Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
            <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
              <FaTwitter className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
              <FaInstagram className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
              <FaLinkedin className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
            </div>
          </div>

          {/* Partnerships Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Partnerships</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Affiliate Program</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Partner with Us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Corporate Stays</a>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal and Compliance</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms and Conditions</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Cancellation Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Seasonal Offers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Experiences</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media Icons */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 CompanyName. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaYoutube />
              <span className="sr-only">YouTube channel</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSocials;
