import React, { useCallback, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const slides = [
    {
      title: "Standing United,\nFighting Violence,\nProtecting Lives",
      subtitle: "24/7 support when you need it most",
      image: "public/images/slide1.jpg"
    },
    {
      title: "Empowering Change,\nCreating Safe Spaces,\nHealing Together",
      subtitle: "Support that transforms lives",
      image: "public/images/slide2.jpg"
    },
    {
      title: "Breaking Silence,\nBuilding Strength,\nRestoring Hope",
      subtitle: "Every voice matters, every story deserves to be heard",
      image: "public/images/slide3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => 
      current === slides.length - 1 ? 0 : current + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(current => 
      current === 0 ? slides.length - 1 : current - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[calc(100vh-64px)]">
      {/* Background Images */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 absolute ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              {slide.subtitle}
            </p>
            <button className="bg-white text-emerald-500 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;