import { FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 p-4"> {/* Changed from bg-teal-400 to bg-purple-700 */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          GBV Support
        </div>
        
        <div className="flex items-center space-x-6">
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