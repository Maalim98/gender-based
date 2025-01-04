import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa6';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The support I received helped me rebuild my life. I am now stronger and helping others in my community. The programs and counseling services made a real difference in my journey to recovery.",
      author: "Sarah Ali.",
      role: "Community Leader",
      location: "Garissa Town"
    },
    {
      quote: "Thanks to the economic empowerment program, I was able to start my own business. Now I can support my family and inspire other women to become financially independent.",
      author: "Fouzia Yarrow.",
      role: "Small Business Owner",
      location: "Dadaab"
    },
    {
      quote: "The youth mentorship program changed my perspective on life. I learned valuable skills and found a supportive community that believes in my potential.",
      author: "Mohamed Hassan.",
      role: "Youth Advocate",
      location: "Balambala"
    },
    {
      quote: "As a partner organization, we've seen firsthand the incredible impact of their community-based approach. Together, we're reaching more people and creating lasting change.",
      author: "Dr. Fatuma Noor.",
      role: "NGO Director",
      location: "Garissa County"
    },
    {
      quote: "The mobile outreach services have been a lifeline for our remote village. We now have access to essential support and resources we never had before.",
      author: "Najma Aden.",
      role: "Village Elder",
      location: "Fafi"
    },
    {
      quote: "Being part of the support group helped me find my voice again. The solidarity and understanding I found here gave me strength to move forward.",
      author: "Zainab Khalif.",
      role: "Support Group Member",
      location: "Ijara"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stories of Hope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from our community members and partners who have been part of our journey 
            in creating positive change across Garissa County.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-600 mb-4">
                <FaQuoteLeft className="text-2xl" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">
                  {testimonial.author}
                </div>
                <div className="text-emerald-600 text-sm">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join our community and be part of these inspiring stories.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                     text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 
                     transition-colors duration-200"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;