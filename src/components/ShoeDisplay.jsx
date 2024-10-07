import React from "react";
import { FaShippingFast, FaRegCreditCard, FaHeadset } from "react-icons/fa";
import Card from "./Card";
import ImageText from "./ImageText";
import ProductCard from "./ProductCard";
import QuotesSection from "./QuoteSection";
import AboutSection from "./About-us";
import Footer from "./Footer";
const ShoeDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <section className="flex items-center justify-center mb-10">
        <div className="text-left mr-8">
          <p className="font-sans uppercase">I DON'T KNOW</p>
          <p className="font-bold">WHAT IS THE WORLD</p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Shop Now
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              View More
            </button>
          </div>
        </div>

        <img
          src="/big-shoe1.png"
          alt="Shoe"
          className="w-auto h-auto max-w-md"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-screen-lg mb-10">
        <Card
          icon={FaShippingFast}
          title="FREE SHIPPING"
          description="On all order over $2000"
        />
        <Card
          icon={FaShippingFast}
          title="FREE SHIPPING"
          description="On all order over $2000"
        />
        <Card
          icon={FaRegCreditCard}
          title="MEMBER DISCOUNT"
          description="Register and save up to 29%"
        />
        <Card
          icon={FaHeadset}
          title="PREMIUM SUPPORT"
          description="Support 24 hours per day"
        />
      </section>

      <section className="flex space-x-4 mb-10">
        <ImageText imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/t/12/assets/home_banner1.jpg" />
        <ImageText imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/t/12/assets/home_banner2.jpg" />
      </section>

      <section className="text-center mb-4">
        <h2 className="font-bold text-2xl">New Products</h2>
        <p className="text-gray-600">Check out our latest arrivals!</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-screen-lg mb-10">
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/aeneanin-consequated-sagittis-lacini_7f0cf9b6-48de-43d3-b699-73ffc4506746_large.jpeg?v=1447660852"
          title="Product 1"
          price="29.99"
        />
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/perspiciatis-undeomin-nis-istenatus_8e431823-8904-45bf-a2d7-a6c74da2f69d_large.jpeg?v=1447661853"
          title="Product 2"
          price="39.99"
        />
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/perspiciatis-undeomin-nis-istenatus_8e431823-8904-45bf-a2d7-a6c74da2f69d_large.jpeg?v=1447661853"
          title="Product 3"
          price="49.99"
        />
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/perspiciatis-undeomin-nis-istenatus_387512bc-b429-482e-8df4-0f86b3f7415b_large.jpeg?v=1447661251"
          title="Product 4"
          price="59.99"
        />
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/perspiciatis-undeomin-nis-istenatus_68974146-1b99-4bd6-a862-28dca7147396_large.jpeg?v=1447661970"
          title="Product 5"
          price="69.99"
        />
        <ProductCard
          imageSrc="https://ap-shoes-store.myshopify.com/cdn/shop/products/perspiciatis-undeomin-nis-istenatus_8e431823-8904-45bf-a2d7-a6c74da2f69d_large.jpeg?v=1447661853"
          title="Product 6"
          price="79.99"
        />
      </section>
      <QuotesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default ShoeDisplay;
