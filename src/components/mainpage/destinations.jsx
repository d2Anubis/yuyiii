import React from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ImageTabs = () => {
  return (
    <div className="w-full px-4 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 overflow-x-auto">
          {['Image 1', 'Image 2', 'Image 3'].map((tabLabel, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'py-2 px-4 text-sm font-medium leading-5 text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                  selected
                    ? 'bg-blue-100'
                    : 'text-blue-700 hover:bg-blue-50 hover:text-blue-800'
                )
              }
            >
              {tabLabel}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              {/* Desktop layout */}
              <div className="lg:w-1/2">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Image 1"
                  className="w-full mb-4 lg:mb-0"
                />
              </div>
              <div className="lg:w-1/2 space-y-4">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Image 2"
                  className="w-full"
                />
                <img
                  src="https://via.placeholder.com/300"
                  alt="Image 3"
                  className="w-full"
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* Different content can be shown for each tab if desired */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Image 2"
                className="w-full"
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Image 3"
                className="w-full"
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ImageTabs;
