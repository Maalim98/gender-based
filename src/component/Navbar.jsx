import { FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          GBV Support
        </div>
        
        <button 
          className="md:hidden text-white"
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
          bg-purple-700 md:bg-transparent
          p-4 md:p-0
          items-center space-y-4 md:space-y-0 md:space-x-6
          shadow-lg md:shadow-none
        `}>
          <a href="/" className="text-white hover:text-purple-200">Home</a>
          <a href="/services" className="text-white hover:text-purple-200">Services</a>
          <a href="/report" className="text-white hover:text-purple-200">Report</a>
          <a href="/contact" className="text-white hover:text-purple-200">Contact</a>
          <a href="/login" className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-50 flex items-center gap-2">
            <FaSignInAlt /> Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;