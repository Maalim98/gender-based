import React from 'react';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleEmergencyClick = () => {
    navigate('/emergency');
  };

  return (
    <section className="bg-teal-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Safety Matters
              <br />
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-gray-200">
              Confidential support available 24/7 for survivors of gender-based violence.
            </p>
            
            {/* Emergency Contact Box */}
            <div className="bg-white/10 p-6 rounded-lg inline-block">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-teal-300 text-2xl animate-bounce" />
                <div>
                  <p className="text-sm">Emergency Helpline</p>
                  <a href="tel:0800720565" className="text-3xl font-bold text-teal-300">
                    0800 720 565
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleEmergencyClick}
                className="bg-red-600 px-8 py-4 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Get Help Now</span>
                <FaArrowRight />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-800 transition-all text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hidden md:block">
            <img 
              src="./src/assets/images/slide2.jpg" 
              alt="Support and Hope" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;