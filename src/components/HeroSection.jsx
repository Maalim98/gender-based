import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import support from '../assets/images/support.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${support})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Supporting Survivors,
            <span className="block text-blue-300">Building Hope</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
            Confidential support and resources for survivors of gender-based violence in Garissa County.
          </p>

          <p className="text-base md:text-lg text-gray-200 max-w-2xl">
            We provide immediate assistance, counseling, and long-term support to help survivors rebuild their lives with dignity and strength.
          </p>

          {/* Emergency Box */}
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg inline-block mt-2">
            <p className="text-blue-200 text-sm mb-1">24/7 Emergency Helpline</p>
            <a 
              href="tel:0717069813" 
              className="text-2xl md:text-3xl font-bold hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <FaPhone className="text-xl animate-pulse" />
              0717 069 813
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => navigate('/emergency')}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm md:text-base"
            >
              Get Help Now
              <FaArrowRight />
            </button>
            <button 
              onClick={() => navigate('/get-support')}
              className="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;