import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleLinkClick = () => {
    setDropdownOpen(false);
    setIsOpen(false);
  };

  const handleDropdownHover = (isHovering) => {
    if (!isOpen) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }

      if (!isHovering) {
        const id = setTimeout(() => {
          setDropdownOpen(false);
        }, 200);
        setTimeoutId(id);
      } else {
        setDropdownOpen(true);
      }
    }
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-center text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <FaPhone className="text-blue-200" />
          <span>24/7 Helpline: </span>
          <a href="tel:0717069813" className="font-bold hover:text-blue-200 transition-colors">
            0717 069 813
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-50 shadow-sm relative">
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
            <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Home
            </Link>
            
            <Link to="/get-help" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Get Help
            </Link>

            {/* About Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownHover(true)}
              onMouseLeave={() => handleDropdownHover(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>About Us</span>
                <FaChevronDown className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`
                  absolute left-0 mt-2 w-48
                  bg-white rounded-md shadow-lg py-1
                  z-50
                  transform
                  transition-all duration-300 ease-in-out
                  ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
              >
                <Link
                  to="/who-we-are/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  to="/who-we-are/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Our Team
                </Link>
                <Link
                  to="/who-we-are/board"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Board of Trustees
                </Link>
                <Link
                  to="/who-we-are/locations"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Where We Work
                </Link>
                <Link
                  to="/who-we-are/impact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Our Impact
                </Link>
              </div>
            </div>

            <Link to="/services" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Services
            </Link>

            <Link to="/resources" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Resources
            </Link>

            <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Contact
            </Link>

            {/* Emergency Button */}
            <Link 
              to="/emergency"
              onClick={handleLinkClick}
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