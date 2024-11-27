import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is considered Gender-Based Violence (GBV)?",
      answer: "Gender-Based Violence includes physical, sexual, emotional, and economic abuse. This can include domestic violence, sexual assault, forced marriage, female genital mutilation, denial of resources or education, and psychological abuse. If you're experiencing any form of abuse, please reach out - you're not alone."
    },
    {
      question: "What immediate support is available if I'm in danger?",
      answer: "If you're in immediate danger: 1) Call our 24/7 emergency hotline at 0717 069 813 2) Contact police at 999 3) If possible, get to a safe location like a friend's house or our shelter 4) We can arrange emergency transportation if needed. Your safety is our absolute priority."
    },
    {
      question: "Will my information be kept confidential?",
      answer: "Yes, we maintain strict confidentiality. Your information is protected and will not be shared without your explicit consent. Our staff are professionally trained in confidentiality protocols. You can speak with us without fear of your situation being disclosed to others."
    },
    {
      question: "What support services do you provide?",
      answer: "We offer comprehensive support including: 1) Emergency shelter 2) Medical care and referrals 3) Legal aid and court accompaniment 4) Individual and group counseling 5) Economic empowerment programs 6) Child support services 7) Safety planning 8) Community reintegration support. All services are free of charge."
    },
    {
      question: "How can I help someone I know who is experiencing GBV?",
      answer: "To support someone: 1) Listen without judgment 2) Believe them 3) Don't pressure them to take immediate action 4) Share information about our services 5) Help them create a safety plan 6) Respect their decisions 7) Keep their situation confidential. You can also contact our helpline for guidance on how to best support them."
    },
    {
      question: "Do you provide services in different languages?",
      answer: "Yes, we provide services in multiple languages including English, Kiswahili, and Somali. We also have staff who speak various local languages. If needed, we can arrange for interpreters to ensure effective communication."
    },
    {
      question: "What should I bring if I need to leave my home quickly?",
      answer: "If possible, prepare an emergency bag with: 1) Important documents (ID, birth certificates, medical cards) 2) Essential medicines 3) Some money 4) Change of clothes 5) Children's essential items 6) Phone and charger 7) Important phone numbers. However, if you're in immediate danger, leave immediately - your safety comes first."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 border-t">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;