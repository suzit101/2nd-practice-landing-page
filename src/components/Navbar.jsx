import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const menuItems = [
    {
      name: "Home",
      subItems: ["Home 1", "Home 2", "Home 3"],
    },
    {
      name: "Collection",
      subItems: ["Collection 1", "Collection 2", "Collection 3"],
    },
    {
      name: "Store Code",
      subItems: ["Code 1", "Code 2", "Code 3"],
    },
    {
      name: "Blog",
      subItems: ["Blog 1", "Blog 2", "Blog 3"],
    },
    {
      name: "Pages",
      subItems: ["Page 1", "Page 2", "Page 3"],
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
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
          <ul className="flex justify-center space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                  className="text-gray-700 hover:text-red-500 transition duration-300 px-4 py-2"
                >
                  {item.name}
                </button>
                {dropdownOpen === index && (
                  <ul className="absolute left-0 mt-2 bg-gray-300 shadow-lg rounded-md">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block px-7 py-3 text-gray-700 text-lg hover:text-red-500 hover:bg-gray-200 transition duration-300"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
