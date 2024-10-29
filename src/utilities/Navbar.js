import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            Yuyiii Logo Here
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-400">Stays</a>
              <a href="#" className="text-gray-500 hover:text-pink-400">Destination</a>
              <a href="#" className="text-gray-500 hover:text-pink-400">Contact</a>
              <a href="#" className="text-gray-500 hover:text-pink-400">About</a>
              <a
                href="#"
                className="text-black bg-gray-200 hover:bg-pink-400 px-4 py-2 rounded-md"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-white bg-gray-700 hover:bg-pink-400 px-4 py-2 rounded-md"
              >
                Register
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-3/4 h-full bg-white shadow-md transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="relative h-full px-4 pt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            {/* Close Icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mt-8 space-y-4">
            <a href="#" className="text-gray-500 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Stays</a>
            <a href="#" className="text-gray-500 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Destination</a>
            <a href="#" className="text-gray-500 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#" className="text-gray-500 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a
              href="#"
              className="text-black bg-gray-200 hover:bg-pink-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-white bg-gray-700 hover:bg-pink-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
