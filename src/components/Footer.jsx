import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: "Emergency Help", path: "/emergency" },
    { name: "Our Services", path: "/services" },
    { name: "About Us", path: "/who-we-are/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  const supportLinks = [
    { name: "24/7 Helpline", path: "tel:0717069813" },
    { name: "Safe Houses", path: "/services#safe-houses" },
    { name: "Legal Support", path: "/services#legal" },
    { name: "Counseling", path: "/services#counseling" },
    { name: "Report GBV", path: "/report" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaPhone className="text-white mr-3 animate-pulse" />
              <span className="text-white font-medium">Need Immediate Help?</span>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:0717069813" 
                className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-red-100 transition-colors"
              >
                Call: 0717 069 813
              </a>
              <Link 
                to="/emergency" 
                className="bg-red-700 text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition-colors"
              >
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Organization Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">GBV Support</h3>
            <p className="text-gray-400 mb-6">
              Dedicated to supporting survivors of gender-based violence and creating 
              safer communities across Garissa County.
            </p>
            <div className="space-y-3">
              <a href="tel:0717069813" className="flex items-center hover:text-white transition-colors">
                <FaPhone className="mr-3 text-emerald-500" />
                0717 069 813
              </a>
              <a href="mailto:ashrafzani585@gmail.com" className="flex items-center hover:text-white transition-colors">
                <FaEnvelope className="mr-3 text-emerald-500" />
                ashrafzani585@gmail.com
              </a>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-emerald-500" />
                <span>Garissa, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news about our work.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} GBV Support. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> in Garissa, Kenya
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
