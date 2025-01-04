import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaUser, FaDonate, FaLock, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setWhoWeAreOpen(false);
    setDashboardOpen(false);
  };

  const toggleWhoWeAre = () => {
    setWhoWeAreOpen(!whoWeAreOpen);
    setDashboardOpen(false);
  };

  const toggleDashboard = () => {
    setDashboardOpen(!dashboardOpen);
    setWhoWeAreOpen(false);
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
            <div className="relative group">
              <button 
                onClick={toggleWhoWeAre}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
              >
                <span>Who we are</span>
                <FaChevronDown className={`transform transition-transform duration-200 ${whoWeAreOpen ? 'rotate-180' : ''}`} />
              </button>

              {whoWeAreOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/who-we-are/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    About us
                  </Link>
                  <Link
                    to="/who-we-are/OurTeam"
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
                    to="/who-we-are/achievements"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Our Achievements
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blogs" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Blogs
            </Link>

            <Link to="/resources" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Resources
            </Link>

            <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Contact
            </Link>

            {/* Dashboard Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleDashboard}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
              >
                <FaUser className="mr-1" />
                <span>Dashboard</span>
                <FaChevronDown className={`transform transition-transform duration-200 ${dashboardOpen ? 'rotate-180' : ''}`} />
              </button>

              {dashboardOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/victim-dashboard" 
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaUser className="inline mr-2" />
                    Victim Dashboard
                  </Link>
                  <Link 
                    to="/admin" 
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaLock className="inline mr-2" />
                    Admin
                  </Link>
                  <Link 
                    to="/donate" 
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <FaDonate className="inline mr-2" />
                    Donate
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          {/* Who We Are Mobile Dropdown */}
          <div>
            <button 
              onClick={toggleWhoWeAre}
              className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800"
            >
              <span>Who we are</span>
              <FaChevronDown className={`transform transition-transform duration-200 ${whoWeAreOpen ? 'rotate-180' : ''}`} />
            </button>

            {whoWeAreOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/who-we-are/about" 
                  onClick={handleLinkClick} 
                  className="text-gray-700 hover:text-blue-800"
                >
                  About us
                </Link>
                <Link 
                  to="/who-we-are/OurTeam" 
                  onClick={handleLinkClick} 
                  className="text-gray-700 hover:text-blue-800"
                >
                  Our Team
                </Link>
                <Link 
                  to="/who-we-are/board" 
                  onClick={handleLinkClick} 
                  className="text-gray-700 hover:text-blue-800"
                >
                  Board of Trustees
                </Link>
                <Link 
                  to="/who-we-are/locations" 
                  onClick={handleLinkClick} 
                  className="text-gray-700 hover:text-blue-800"
                >
                  Where We Work
                </Link>
                <Link 
                  to="/who-we-are/impact" 
                  onClick={handleLinkClick} 
                  className="text-gray-700 hover:text-blue-800"
                >
                  Our Impact
                </Link>
              </div>
            )}
          </div>

          {/* Dashboard Mobile Dropdown */}
          <div>
            <button 
              onClick={toggleDashboard}
              className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800"
            >
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>Dashboard</span>
              </div>
              <FaChevronDown className={`transform transition-transform duration-200 ${dashboardOpen ? 'rotate-180' : ''}`} />
            </button>

            {dashboardOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/victim-dashboard" 
                  onClick={handleLinkClick}
                  className="flex items-center text-gray-700 hover:text-blue-800"
                >
                  <FaUser className="mr-2" />
                  <span>Victim Dashboard</span>
                </Link>
                <Link 
                  to="/admin" 
                  onClick={handleLinkClick}
                  className="flex items-center text-gray-700 hover:text-blue-800"
                >
                  <FaLock className="mr-2" />
                  <span>Admin</span>
                </Link>
                <Link 
                  to="/donate" 
                  onClick={handleLinkClick}
                  className="flex items-center text-gray-700 hover:text-blue-800"
                >
                  <FaDonate className="mr-2" />
                  <span>Donate</span>
                </Link>
                
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;