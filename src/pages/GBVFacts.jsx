import { FaBookOpen, FaExternalLinkAlt, FaHandHoldingHeart, FaShieldAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

function GBVFacts() {
  const statistics = [
    {
      number: "1 in 3",
      description: "Women globally experience physical or sexual violence",
      detail: "Mostly by an intimate partner"
    },
    {
      number: "45%",
      description: "Kenyan women affected by GBV",
      detail: "Ages 15-49"
    },
    {
      number: "92%",
      description: "Increase during COVID-19",
      detail: "Jan-June 2020"
    }
  ];

  const resources = [
    {
      title: "WHO Global Database",
      description: "Access comprehensive research and statistics on violence against women",
      link: "https://www.who.int/data/gho/data/themes/violence-against-women",
      icon: "🌍"
    },
    {
      title: "Kenya GBV Resources",
      description: "Local support services and reporting mechanisms",
      link: "https://www.health.go.ke",
      icon: "🏥"
    },
    {
      title: "Legal Framework",
      description: "Understanding your rights and legal protections",
      link: "/resources/legal",
      icon: "⚖️"
    }
  ];

  const supportServices = [
    {
      title: "Crisis Support",
      description: "24/7 confidential counseling support",
      icon: <FaPhone className="text-emerald-600" />
    },
    {
      title: "Safe Housing",
      description: "Emergency shelter and transitional housing",
      icon: <FaShieldAlt className="text-emerald-600" />
    },
    {
      title: "Support Services",
      description: "Comprehensive care and counseling",
      icon: <FaHandHoldingHeart className="text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Understanding Gender-Based Violence
          </h1>
          <p className="text-xl text-emerald-100">
            Knowledge is the first step towards prevention and support
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-800 font-medium mb-1">{stat.description}</div>
              <div className="text-gray-500 text-sm">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Available Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{resource.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      {resource.title}
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-emerald-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">We&apos;re Here to Support You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-800/50 p-4 rounded-lg">
              <p className="text-sm mb-1">24/7 Helpline</p>
              <p className="text-2xl font-bold">0717 069 813</p>
            </div>
            <div className="bg-emerald-800/50 p-4 rounded-lg">
              <p className="text-sm mb-1">SMS Support</p>
              <p className="text-2xl font-bold">20351</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GBVFacts; 