import { FaPhone, FaShieldAlt, FaExclamationTriangle, FaAmbulance, FaHandHoldingHeart, FaHome, FaLock, FaUserShield } from 'react-icons/fa';

const EmergencySection = () => {
  return (
    <section className="bg-red-50 py-20">
      <div className="container mx-auto px-4">
        {/* Main Emergency Resources */}
        <div className="bg-white rounded-xl shadow-2xl p-12 mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-10 flex items-center justify-center">
            <FaExclamationTriangle className="mr-4 text-5xl animate-pulse" />
            Emergency Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Emergency Hotline */}
            <div className="bg-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <FaPhone className="text-red-600 text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center">24/7 Hotline</h3>
              <a href="tel:0800720565" className="text-4xl font-bold text-red-600 block text-center">
                0800 720 565
              </a>
              <p className="text-gray-600 text-center mt-4">
                Immediate support and crisis intervention available
              </p>
            </div>

            {/* Police Emergency */}
            <div className="bg-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <FaExclamationTriangle className="text-red-600 text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center">Police Emergency</h3>
              <a href="tel:999" className="text-4xl font-bold text-red-600 block text-center">
                999
              </a>
              <p className="text-gray-600 text-center mt-4">
                For immediate police assistance
              </p>
            </div>

            {/* Quick Exit */}
            <div className="bg-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <FaShieldAlt className="text-red-600 text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center">Quick Exit</h3>
              <button className="w-full bg-red-600 text-white text-xl font-bold px-8 py-4 rounded-lg">
                Leave Now
              </button>
              <p className="text-gray-600 text-center mt-4">
                Quickly exit to a safe website
              </p>
            </div>
          </div>
        </div>

        {/* Additional Emergency Services */}
        <div className="bg-white rounded-xl shadow-2xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Additional Emergency Services
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Medical Help */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <FaAmbulance className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Medical Emergency</h3>
              <a href="tel:911" className="text-2xl font-bold text-blue-600 block text-center">
                911
              </a>
            </div>

            {/* Safe Houses */}
            <div className="bg-green-50 p-6 rounded-lg">
              <FaHome className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Safe Houses</h3>
              <a href="tel:0800777888" className="text-2xl font-bold text-green-600 block text-center">
                0800 777 888
              </a>
            </div>

            {/* Legal Aid */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <FaUserShield className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Legal Aid</h3>
              <a href="tel:0800999000" className="text-2xl font-bold text-purple-600 block text-center">
                0800 999 000
              </a>
            </div>

            {/* Counseling */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <FaHandHoldingHeart className="text-yellow-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Counseling</h3>
              <a href="tel:0800111222" className="text-2xl font-bold text-yellow-600 block text-center">
                0800 111 222
              </a>
            </div>
          </div>
        </div>

        {/* Safety Information */}
        <div className="bg-white rounded-xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Important Safety Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Safety Tips */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Safety Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaLock className="mt-1 text-red-600" />
                  Create a safety plan and share it with trusted people
                </li>
                <li className="flex items-start gap-2">
                  <FaLock className="mt-1 text-red-600" />
                  Keep important documents and emergency money accessible
                </li>
                <li className="flex items-start gap-2">
                  <FaLock className="mt-1 text-red-600" />
                  Know your emergency exits and safe places
                </li>
                <li className="flex items-start gap-2">
                  <FaLock className="mt-1 text-red-600" />
                  Save emergency numbers on speed dial
                </li>
              </ul>
            </div>

            {/* What to Expect When Calling */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-red-600">When You Call</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaPhone className="mt-1 text-red-600" />
                  Trained counselors available 24/7
                </li>
                <li className="flex items-start gap-2">
                  <FaPhone className="mt-1 text-red-600" />
                  All calls are confidential
                </li>
                <li className="flex items-start gap-2">
                  <FaPhone className="mt-1 text-red-600" />
                  Support in multiple languages
                </li>
                <li className="flex items-start gap-2">
                  <FaPhone className="mt-1 text-red-600" />
                  Immediate assistance and referrals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;