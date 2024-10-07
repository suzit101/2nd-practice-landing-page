import React from "react";

const ImageText = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto rounded-lg shadow-md mb-2"
      />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImageText;
