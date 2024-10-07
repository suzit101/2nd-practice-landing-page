import React from "react";

const ProductCard = ({ imageSrc, title, price }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-700">${price}</p>
    </div>
  );
};

export default ProductCard;
