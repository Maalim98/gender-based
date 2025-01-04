import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is considered Gender-Based Violence (GBV)?",
      answer: "Gender-Based Violence includes physical, sexual, emotional, and economic abuse. This can include domestic violence, sexual assault, forced marriage, female genital mutilation, denial of resources or education, and psychological abuse. If you're experiencing any form of abuse, please reach out - you're not alone."
    },
    {
      question: "What immediate support is available if I'm in danger?",
      answer: "If you're in immediate danger:\n• Call our 24/7 emergency hotline at 0717 069 813\n• Contact police at 999\n• If possible, get to a safe location like a friend's house or our shelter\n• We can arrange emergency transportation if needed\n\nYour safety is our absolute priority."
    },
    {
      question: "Will my information be kept confidential?",
      answer: "Yes, we maintain strict confidentiality. Your information is protected and will not be shared without your explicit consent. Our staff are professionally trained in confidentiality protocols. You can speak with us without fear of your situation being disclosed to others."
    },
    {
      question: "What support services do you provide?",
      answer: "We offer comprehensive support including:\n• Emergency shelter\n• Medical care and referrals\n• Legal aid and court accompaniment\n• Individual and group counseling\n• Economic empowerment programs\n• Child support services\n• Safety planning\n• Community reintegration support\n\nAll services are free of charge."
    },
    {
      question: "How can I help someone I know who is experiencing GBV?",
      answer: "To support someone:\n• Listen without judgment\n• Believe them\n• Don't pressure them to take immediate action\n• Share information about our services\n• Help them create a safety plan\n• Respect their decisions\n• Keep their situation confidential\n\nYou can also contact our helpline for guidance on how to best support them."
    },
    {
      question: "Do you provide services in different languages?",
      answer: "Yes, we provide services in multiple languages including English, Kiswahili, and Somali. We also have staff who speak various local languages. If needed, we can arrange for interpreters to ensure effective communication."
    },
    {
      question: "What should I bring if I need to leave my home quickly?",
      answer: "If possible, prepare an emergency bag with:\n• Important documents (ID, birth certificates, medical cards)\n• Essential medicines\n• Some money\n• Change of clothes\n• Children's essential items\n• Phone and charger\n• Important phone numbers\n\nHowever, if you're in immediate danger, leave immediately - your safety comes first."
    }
  ];

  const simpleAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 md:mb-16 text-center"
          {...simpleAnimation}
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 relative">
              <span className="absolute -left-4 md:-left-6 top-0 text-5xl md:text-6xl text-emerald-200/50">F</span>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-yellow-400 mt-4"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          {...simpleAnimation}
        >
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          {...simpleAnimation}
        >
          <Link 
            to="/gbv-facts" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-800 
                     text-white px-8 py-4 rounded-full text-lg font-semibold
                     hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300
                     shadow-lg hover:shadow-xl"
          >
            Learn More About GBV
            <svg 
              className="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-emerald-50/50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-emerald-800">{question}</span>
        {isOpen ? 
          <FaChevronUp className="text-emerald-600" /> : 
          <FaChevronDown className="text-emerald-600" />
        }
      </button>
      
      <motion.div 
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 border-t border-emerald-100 bg-emerald-50/30">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;