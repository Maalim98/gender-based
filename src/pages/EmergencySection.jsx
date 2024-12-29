import { 
  FaPhone, 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaAmbulance, 
  FaHandHoldingHeart, 
  FaHome, 
  FaLock, 
  FaUserShield 
} from 'react-icons/fa';

const EmergencySection = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 to-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Emergency Resources */}
        <div className="bg-white rounded-lg shadow-lg p-10 mb-12">
          <h2 className="text-4xl font-extrabold text-red-600 text-center mb-8">
            <FaExclamationTriangle className="inline-block mr-3 text-3xl" />
            GBV Emergency Support in Garissa
          </h2>
          <p className="text-gray-600 text-lg text-center mb-8">
            Immediate help and resources for those affected by gender-based violence. Don’t hesitate to reach out—we are here to support you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Emergency Hotline */}
            <div className="flex flex-col items-center p-6 bg-red-100 rounded-lg shadow-sm">
              <FaPhone className="text-red-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">24/7 GBV Hotline</h3>
              <a href="tel:0800720565" className="text-xl font-bold text-red-600">
                0800 720 565
              </a>
            </div>

            {/* Police Emergency */}
            <div className="flex flex-col items-center p-6 bg-blue-100 rounded-lg shadow-sm">
              <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Police Emergency</h3>
              <a href="tel:999" className="text-xl font-bold text-blue-600">
                999
              </a>
            </div>

            {/* Quick Exit */}
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-sm">
              <FaLock className="text-gray-600 text-4xl mb-4" />
              <button className="bg-red-600 text-white font-bold text-lg py-3 px-6 rounded-md hover:bg-red-700 transition-all">
                Leave Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-lg shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Additional Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Medical Help */}
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-sm">
              <FaAmbulance className="text-green-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Medical Assistance</h3>
              <a href="tel:911" className="text-lg font-bold text-green-600">
                911
              </a>
            </div>

            {/* Safe Houses */}
            <div className="flex flex-col items-center p-6 bg-yellow-50 rounded-lg shadow-sm">
              <FaHome className="text-yellow-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Safe Houses</h3>
              <a href="tel:0800777888" className="text-lg font-bold text-yellow-600">
                0800 777 888
              </a>
            </div>

            {/* Legal Aid */}
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg shadow-sm">
              <FaUserShield className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Legal Aid</h3>
              <a href="tel:0800999000" className="text-lg font-bold text-purple-600">
                0800 999 000
              </a>
            </div>

            {/* Counseling */}
            <div className="flex flex-col items-center p-6 bg-pink-50 rounded-lg shadow-sm">
              <FaHandHoldingHeart className="text-pink-600 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Counseling Services</h3>
              <a href="tel:0800111222" className="text-lg font-bold text-pink-600">
                0800 111 222
              </a>
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Safety Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Safety Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-4">
                  <FaLock className="mt-1 text-red-600 text-2xl" />
                  Create a safety plan and share it with trusted individuals.
                </li>
                <li className="flex items-start gap-4">
                  <FaLock className="mt-1 text-red-600 text-2xl" />
                  Keep emergency contacts and important documents accessible.
                </li>
                <li className="flex items-start gap-4">
                  <FaLock className="mt-1 text-red-600 text-2xl" />
                  Identify safe exits and shelters in your area.
                </li>
                <li className="flex items-start gap-4">
                  <FaLock className="mt-1 text-red-600 text-2xl" />
                  Save key emergency numbers on speed dial.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">What to Expect When You Call</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-red-600 text-2xl" />
                  Trained counselors available 24/7 to assist you.
                </li>
                <li className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-red-600 text-2xl" />
                  All calls are confidential and free of charge.
                </li>
                <li className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-red-600 text-2xl" />
                  Help is available in multiple languages.
                </li>
                <li className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-red-600 text-2xl" />
                  Immediate action and referrals provided.
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
