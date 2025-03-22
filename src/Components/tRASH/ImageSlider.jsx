import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'https://i.ibb.co/5MZPdhp/banner-1.jpg',
  "https://i.ibb.co/thDf1NW/banner-2.jpg",
  "https://i.ibb.co/SyXjRsH/banner-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prevImage} className="text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full">
          &#10094;
        </button>
        <button onClick={nextImage} className="text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full">
          &#10095;
        </button>
      </div>
      <div className="w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
