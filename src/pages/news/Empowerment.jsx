import { FaHome, FaPhone, FaShieldAlt, FaStar, FaCalendar, FaBook, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import awareness from '../../assets/images/awareness2.jpg';
import woman5 from '../../assets/images/woman5.jpg';
import xalimo from '../../assets/images/xalimo.jpg';

const Empowerment = () => {
  const programs = [
    {
      title: "Healing Together",
      description: "Join our supportive community where survivors find strength in shared experiences",
      features: [
        "Weekly Support Groups",
        "Cultural Healing Practices",
        "Trauma-Informed Care",
        "Spiritual Support",
        "Family Counseling"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Skills & Growth",
      description: "Develop new skills and rediscover your potential",
      features: [
        "Life Skills Training",
        "Leadership Development",
        "Creative Expression",
        "Digital Literacy",
        "Financial Education"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Community Support",
      description: "Building networks of support and understanding",
      features: [
        "Peer Support Network",
        "Community Advocacy",
        "Cultural Programs",
        "Youth Initiatives",
        "Elder Support"
      ],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const successStories = [
    {
      name: "Amina Hassan",
      role: "GBV Survivor & Advocate",
      story: "Through the empowerment program, I found my voice and strength. Today, I lead support groups and help other survivors rebuild their lives.",
      image: woman5,
      impact: "Leads 3 Support Groups"
    },
    {
      name: "Fatuma Omar",
      role: "Community Leader",
      story: "The program gave me tools to support other women in my community. We're breaking the silence around GBV together.",
      image: xalimo,
      impact: "Trained 50+ Women"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Healing Through Art",
      date: "March 25, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Garissa Women's Center",
      description: "Express yourself through creative arts therapy sessions"
    },
    {
      title: "Financial Independence Workshop",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Hall",
      description: "Learn essential financial skills and business basics"
    }
  ];

  const resources = [
    {
      title: "Safety Planning Guide",
      type: "PDF Guide",
      description: "Step-by-step guide for creating your personal safety plan"
    },
    {
      title: "Healing Journey Workbook",
      type: "Interactive Workbook",
      description: "Exercises and activities for your recovery journey"
    }
  ];

  const supportServices = [
    {
      title: "Crisis Counseling",
      description: "24/7 confidential counseling support",
      icon: <FaHeart className="text-purple-500" />
    },
    {
      title: "Safe Housing",
      description: "Emergency shelter and transitional housing",
      icon: <FaHome className="text-purple-500" />
    },
    {
      title: "Legal Support",
      description: "Free legal advice and court accompaniment",
      icon: <FaShieldAlt className="text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src={awareness} 
            alt="Empowerment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <FaHeart className="text-4xl text-pink-400" />
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                Empowering Lives
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                Together we create paths to healing, strength, and renewed hope. 
                Join our community of survivors and supporters.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="#programs"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Programs
                </a>
                <a 
                  href="tel:0717069813"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium hover:bg-white/20 transition-all flex items-center"
                >
                  <FaPhone className="mr-2" />
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-400 text-sm tracking-wider uppercase"
            >
              Our Programs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4"
            >
              Your Path to Healing
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-gray-400 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <FaStar className="text-purple-400 mr-2 text-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Women Supported</div>
            </motion.div>
            {/* Add more statistics */}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Stories of Hope</h2>
            <p className="text-gray-600 mt-4">Real stories from our community of survivors</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="text-sm text-purple-600 mb-2">{story.role}</div>
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-600 mb-4">{story.story}</p>
                    <div className="text-sm font-semibold text-emerald-600">
                      {story.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Workshops</h2>
            <p className="text-gray-600 mt-4">Join our empowering sessions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center text-purple-600 mb-4">
                  <FaCalendar className="mr-2" />
                  <span>{workshop.date} • {workshop.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                <div className="text-sm text-gray-500">{workshop.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-20 bg-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Support Resources</h2>
            <p className="text-purple-200 mt-4">Free materials to support your journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <FaBook className="text-3xl text-purple-300 mb-4" />
                <div className="text-sm text-purple-300 mb-2">{resource.type}</div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-purple-100 mb-4">{resource.description}</p>
                <button className="text-purple-300 hover:text-white transition-colors">
                  Download →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive support for your journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-4xl text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Begin Your Journey Today
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Take the first step towards healing. Our compassionate team is here 
              to support you with understanding and complete confidentiality.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="tel:0717069813"
                className="px-8 py-4 bg-white text-purple-900 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call: 0717 069 813
              </a>
              <a 
                href="mailto:ashrafzani585@gmail.com"
                className="px-8 py-4 bg-purple-600/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-purple-600/30 transition-all"
              >
                Contact Support Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Empowerment; 