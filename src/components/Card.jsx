import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img src={icon} alt="Icon" className="w-16 h-16 mb-2" />{" "}
      {/* Adjust icon size */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
