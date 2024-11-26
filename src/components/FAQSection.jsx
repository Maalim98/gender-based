import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I do if I'm in immediate danger?",
      answer: "If you're in immediate danger, call our emergency hotline at 0800 720 565 or contact the police at 999. Your safety is our top priority."
    },
    {
      question: "Are your services confidential?",
      answer: "Yes, all our services are completely confidential. We respect your privacy and maintain strict confidentiality protocols."
    },
    {
      question: "How can I access counseling services?",
      answer: "You can access counseling services by calling our helpline or visiting any of our centers. We offer both in-person and online counseling."
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
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 border-t">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;