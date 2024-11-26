import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Emergency Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-200 mb-4">24/7 Emergency Help</h3>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-teal-300" />
              <a href="tel:0800720565" className="hover:text-teal-200 transition-colors">
                Toll Free: 0800 720 565
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Immediate assistance available 24/7. Your call could save a life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-200 mb-4">Support Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Counseling Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Legal Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Safe Houses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Report Abuse
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-200 mb-4">Contact Us</h3>
            <p>Nairobi Women&apos;s Hospital</p>
            <p>Malik heights, 8th Floor</p>
            <p>Ngong Road</p>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-teal-300" />
              <a href="mailto:gvrc@nwch.co.ke" className="hover:text-teal-200 transition-colors">
                gvrc@nwch.co.ke
              </a>
            </div>
          </div>

          {/* Social Media & Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-200 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-200">
                Support our cause through M-PESA:
              </p>
              <p className="text-lg font-bold text-teal-200">
                Paybill: 100700
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 GVRC Kenya. Breaking the cycle of violence with compassion and support.
            </div>
            <div className="text-sm">
              <span className="text-teal-200 font-bold">Emergency Hotline:</span>
              <a href="tel:116" className="ml-2 hover:text-teal-200">
                116
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
