import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-center text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <FaPhone className="text-blue-200" />
          <span>24/7 Helpline: </span>
          <a href="tel:0800720565" className="font-bold hover:text-blue-200 transition-colors">
            0800 720 565
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-blue-800">GBV</span>
            <span className="ml-1 text-gray-700">Support</span>
          </Link>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div className={`
            ${isOpen ? 'flex' : 'hidden'} 
            md:flex flex-col md:flex-row
            absolute md:relative
            top-16 md:top-0
            left-0 md:left-auto
            right-0 md:right-auto
            bg-slate-50 md:bg-transparent
            p-4 md:p-0
            items-center space-y-4 md:space-y-0 md:space-x-8
            shadow-lg md:shadow-none
            z-50
          `}>
            <Link to="/" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Home
            </Link>
            
            <Link to="/get-help" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Get Help
            </Link>

            <Link to="/services" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Services
            </Link>

            <Link to="/resources" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Resources
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              About Us
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Contact
            </Link>

            {/* Emergency Button */}
            <Link 
              to="/Emergency"
              className="bg-blue-800 text-white px-6 py-2.5 rounded-md hover:bg-blue-900 transition-colors flex items-center gap-2 font-medium"
            >
              <FaPhone />
              Get Help Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;