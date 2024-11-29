import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Emergency Contact Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">24/7 Emergency Helpline</h3>
              <p className="text-emerald-100">Immediate support available anytime, anywhere</p>
            </div>
            <a 
              href="tel:+254717069813" 
              className="mt-4 md:mt-0 bg-white text-emerald-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-md"
            >
              <FaPhone className="animate-pulse" />
              0717 069 813
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div>
            <img 
              src="/path-to-your-logo-white.png" 
              alt="GVRC Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-emerald-100 leading-relaxed">
              Empowering communities and supporting survivors in Garissa County through compassion, 
              action, and lasting change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/who-we-are/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Get Help', path: '/emergency' },
                { name: 'News & Updates', path: '/news' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-emerald-200 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-200">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Garissa County, Kenya<br />P.O. Box 123-70100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
