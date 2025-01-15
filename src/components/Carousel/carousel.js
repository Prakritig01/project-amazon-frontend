import React, { useState } from 'react';

const Carousel = () => {
  // Array of image URLs (Replace with your images)
  const images = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img25/janART25/H1/KV_PC_Centre_Hero_2X._CB552774960_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/JanART/Uber/Gateway/Event/D197029535__WLA_JanART_GatewayPC_Hero_3000x1200_Lifestyle_1._CB552673282_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img25/Tablet/Jan-ART/GW/Hero/PC_Hero_3000x1200__one_plus_samsung._CB552712281_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/JanART/Shoes/ATF/ROE/PC/1_Men_Prime._CB552996905_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_Hero_3000x1200._CB552725133_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/AugART25/2nd/r2/TCL_55_PC_Her333o_3000x1200_Lifestyle._CB552871208_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/thomsoja/Grocery/JanART25/GW/REC_PC_Hero_3000x1200._CB553029968_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/APAYTRAVEL/JANART25/Bangkok_PC_Hero_3000x1200_Lifestyle._CB553057766_.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions for navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8249;
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8250;
      </button>

    </div>
  );
};

export default Carousel;