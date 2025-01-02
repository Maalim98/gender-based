import { motion } from 'framer-motion';
import { FaUsers, FaHandHoldingHeart, FaGraduationCap, FaHospital } from 'react-icons/fa';
import { useState } from 'react';

const OurAchievements = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const impactStats = [
    {
      icon: FaUsers,
      number: "10,000+",
      label: "Survivors Supported",
      description: "Direct assistance and support provided to GBV survivors"
    },
    {
      icon: FaHandHoldingHeart,
      number: "50+",
      label: "Community Programs",
      description: "Empowering communities through targeted outreach and education."
    },
    {
      icon: FaGraduationCap,
      number: "5,000+",
      label: "People Trained",
      description: "Training individuals to advocate and act against GBV."
    },
    {
      icon: FaHospital,
      number: "15",
      label: "Partner Facilities",
      description: "Collaborating with healthcare providers to expand support services."
    }
  ];

  const milestones = [
    {
      year: "2023",
      achievements: [
        "Launched 24/7 emergency response system",
        "Opened a new safe house facility",
        "Reached 100,000 people through awareness campaigns",
        "Received the Excellence in Service Award"
      ]
    },
    {
      year: "2022",
      achievements: [
        "Expanded services to three additional counties",
        "Trained over 1,000 community advocates",
        "Introduced a trauma counseling program",
        "Partnered with UN Women Kenya"
      ]
    },
    {
      year: "2021",
      achievements: [
        "Opened a specialized children's support center",
        "Launched a mobile clinic initiative",
        "Built a legal aid partnership network",
        "Honored with the Community Leadership Recognition Award"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact & Achievements
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Transforming lives and communities through dedicated service and support
          </p>
        </div>
      </div>

      {/* Impact Statistics */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <stat.icon className="text-emerald-600 text-5xl mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-emerald-800 mb-1">{stat.number}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="bg-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-10">
            Milestones of Excellence
          </h2>
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="md:w-1/4 text-teal-800 text-5xl font-extrabold">{milestone.year}</div>
                <div className="md:w-3/4 bg-white rounded-lg p-6 shadow-md">
                  <ul className="space-y-3">
                    {milestone.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-teal-500 rounded-full mt-1" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Us Now Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Reach us, now...
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name (required)"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email (required)"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="10"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
