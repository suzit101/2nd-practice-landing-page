import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Email Address
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Credit Slips
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Addresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Personal Info
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Running Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Football Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Basketball Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Volleyball Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trainee Shoes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Search Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Happy Hours */}
        <div className="mt-8 text-center">
          <h4 className="font-bold text-lg">Happy Hours</h4>
          <p>Monday - Friday: 8 a.m - 10 p.m</p>
          <p>Saturday & Sunday: 10 a.m - 8 p.m</p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>Ap Shoes Store © Copyright 2024. Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
