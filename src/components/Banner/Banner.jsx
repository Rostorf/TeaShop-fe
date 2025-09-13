import React, { useState, useEffect } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import teabg1 from "../../components/Images/tea-bg1.webp";
import teabg2 from "../../components/Images/tea-bg2.webp";
import teabg3 from "../../components/Images/tea-bg3.webp";
import logo from "../../components/Images/logo.png"; // Import the logo

function Banner() {
  // Banner component functionality
  const images = [teabg1, teabg2, teabg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="relative min-h-screen flex items-center justify-center bg-zinc-800">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <img 
            src={logo} 
            alt="Logo" 
            className='h-[175px] w-auto pt-5 mx-auto' 
          />
        </div>
        
        <img 
          src={images[currentIndex]} 
          alt="Tea Banner" 
          className="w-full h-full object-cover absolute opacity-70"
        />
        
        <div className="absolute bottom-10 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 mt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent font-inter font-bold capitalize mb-4 py-5">
            Trà chất lượng đến từ
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent font-inter font-bold capitalize pb-8">
            Việt Nam
          </h1>
          
          <p className="font-inter font-medium text-base md:text-lg max-w-2xl my-8 mx-auto px-4 text-white">
            Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          
          <a href="/products">
            <button className="bg-lime-600 hover:bg-lime-800 text-white hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center">
              Khám phá thêm <ArrowRightIcon className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;