import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div
          className={`flex-1 text-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Store Code
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Pages
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
