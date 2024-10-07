import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 p-6 my-10 rounded-lg shadow">
      <h2 className="text-center font-bold text-2xl mb-4">About Us</h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/305750223_476664684474730_2410285487978301266_n.jpg?stp=dst-jpg_p130x130&_nc_cat=105&ccb=1-7&_nc_sid=4cb600&_nc_ohc=0awvCLprNIMQ7kNvgGmVTMY&_nc_ht=scontent.fktm20-1.fna&edm=AA7a7sEEAAAA&_nc_gid=AnAcI7TX7YPf6a1fP8ExlWd&oh=00_AYBUCI80ghazIjB28OxHG72pR5gKRFaXkH72jtnPiqzbtg&oe=6709A8BC"
            alt="About Us 1"
            className="w-full h-auto rounded-md shadow"
          />
          <p className="mt-4 text-gray-700">
            Lorem very smart carrots option main rebates developer fault will
            come to work at fault option rejecting the fault of the film
            criticizes Voluptates.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://ap-shoes-store.myshopify.com/cdn/shop/t/12/assets/shop_images_footer.png?v=16330808813664609131450173788"
            alt="About Us 2"
            className="w-full h-auto rounded-md shadow"
          />
          <p className="mt-4 text-gray-700">
            Lorem very smart carrots option main rebates developer fault will
            come to work at fault option rejecting the fault of the film
            criticizes Voluptates.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Like us on Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          View us on Instagram
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
