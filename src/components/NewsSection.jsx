import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const NewsSection = () => {
  const news = [
    {
      date: "2024-03-20",
      title: "New Support Center Opening",
      excerpt: "We're expanding our services with a new center in Nairobi.",
      image: "/images/news/center.jpg"
    },
    {
      date: "2024-03-15",
      title: "Community Awareness Program",
      excerpt: "Join our upcoming awareness sessions in your community.",
      image: "/images/news/awareness.jpg"
    },
    {
      date: "2024-03-10",
      title: "Support Group Meetings",
      excerpt: "Weekly support group meetings now available online.",
      image: "/images/news/support.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <FaCalendar className="mr-2" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
                <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;