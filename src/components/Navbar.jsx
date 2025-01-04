import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaUser, FaDonate, FaLock, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-center text-xs sm:text-sm">
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
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-blue-800">GBV</span>
              <span className="text-gray-700">Support</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Home
              </Link>
              
              <Link to="/get-help" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Get Help
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                >
                  <span>Who we are</span>
                  <FaChevronDown className="transform transition-transform duration-200" />
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/who-we-are/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    About us
                  </Link>
                  <Link
                    to="/who-we-are/OurTeam"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/who-we-are/board"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Board of Trustees
                  </Link>
                  <Link
                    to="/who-we-are/locations"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Where We Work
                  </Link>
                  <Link
                    to="/who-we-are/achievements"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Our Achievements
                  </Link>
                </div>
              </div>

              <Link to="/blogs" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Blogs
              </Link>

              <Link to="/resources" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Resources
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Contact
              </Link>

              {/* Dashboard Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                >
                  <FaUser className="mr-1" />
                  <span>Dashboard</span>
                  <FaChevronDown className="transform transition-transform duration-200" />
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/victim-dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaUser className="inline mr-2" />
                    Victim Dashboard
                  </Link>
                  <Link 
                    to="/admin" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaLock className="inline mr-2" />
                    Admin
                  </Link>
                  <Link 
                    to="/donate" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaDonate className="inline mr-2" />
                    Donate
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu - Slide from right */}
            <div className={`
              fixed md:hidden top-0 right-0 h-screen w-[80%] max-w-sm
              bg-slate-50 shadow-xl z-40
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              flex flex-col
              pt-20 px-6
            `}>
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">
                  Home
                </Link>

                {/* Who We Are Dropdown */}
                <div className="relative">
                  <button className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800">
                    <span>Who we are</span>
                    <FaChevronDown className="transform transition-transform duration-200" />
                  </button>
                  {/* ... dropdown items ... */}
                </div>

                <Link to="/blogs" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">
                  Blogs
                </Link>

                <Link to="/resources" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">
                  Resources
                </Link>

                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">
                  Contact
                </Link>

                {/* Dashboard Links */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link to="/victim-dashboard" onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-800">
                    <FaUser />
                    <span>Victim Dashboard</span>
                  </Link>

                  <Link to="/admin" onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-800 mt-4">
                    <FaLock />
                    <span>Admin</span>
                  </Link>

                  <Link to="/donate" onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4">
                    <FaDonate />
                    <span>Donate</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Overlay when mobile menu is open */}
            <div 
              className={`
                fixed inset-0 bg-black/50 z-30 md:hidden
                transition-opacity duration-300
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;