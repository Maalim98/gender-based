import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import woman5 from '../assets/images/woman5.jpg';
import xalimo from '../assets/images/xalimo.jpg';

const ImpactStoriesSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Catherine Ndunge Wambua",
            role: "CAREGIVER TO GBV SURVIVOR",
            story: `I lived with my daughter and I noticed that she was not okay. She used to sit alone and think 
            a lot. At some point she wanted to commit suicide. I interrogated her to find out what was wrong and she 
            told me what the pastor had done to her. I took her to Karen hospital where we found out she was pregnant. 
            We were then reffered to GVRC. Getting to learn what the pastor had done was so painful to me.`,
            image: xalimo,
        },
        {
            name: "Amina Hassan Mohamed",
            role: "COMMUNITY ADVOCATE",
            story: `As a community leader in Eastleigh, I've seen many women suffer in silence. When I discovered GVRC, 
            it became a beacon of hope. We've helped over 50 women from our community access counseling and medical care. 
            The cultural sensitivity and respect shown by the staff has made a huge difference in breaking down barriers.`,
            image: woman5,
        },
        {
            name: "Fatuma Abdi Nur",
            role: "SURVIVOR & MENTOR",
            story: `After my experience, I felt lost and ashamed. GVRC not only helped me heal but also empowered me 
            to become a voice for others. Today, I lead support groups for young Somali women, showing them that 
            seeking help is not a sign of weakness but of strength.`,
            image: xalimo,
        },
        {
            name: "Zahra Ibrahim Ahmed",
            role: "YOUTH COUNSELOR",
            story: `Working with teenage survivors has shown me how crucial early intervention is. One young girl's 
            story particularly moved me - she went from barely speaking to becoming a peer counselor herself. GVRC's 
            approach to healing considers both emotional and cultural aspects.`,
            image: woman5,
        },
        {
            name: "Halima Omar Sheikh",
            role: "SUPPORT GROUP FACILITATOR",
            story: `When I started the women's support group, many were hesitant to share. Now, our sessions are a 
            safe space where healing happens collectively. We've created a sisterhood that extends beyond our weekly 
            meetings, supporting each other through recovery and growth.`,
            image: woman5,
        },
        
    ];

    const stories = [
        {
            title: "Empowering Rural Communities",
            description: "Reaching out to remote areas with essential support services",
            image: xalimo,
            tag: "Community Outreach",
            route: "/community-outreach",
            color: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "Breaking the Silence",
            description: "National campaign reaching thousands across Kenya",
            image: woman5,
            tag: "Awareness",
            route: "/awareness-campaigns",
            color: "from-yellow-500/20 to-orange-500/20"
        },
        {
            title: "Healing Through Community",
            description: "New support center opened in Nakuru County",
            image: xalimo,
            tag: "Support Programs",
            route: "/support-programs",
            color: "from-purple-500/20 to-pink-500/20"
        }


    ];

    return (
        <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-wider uppercase">
                        Real Stories, Real Impact
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-emerald-800 mt-2">
                        Voices of Change
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-yellow-400 mx-auto mt-4"></div>
                </div>

                {/* Featured Testimonial */}
                <div className="mb-12 md:mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
                                {/* Image Side */}
                                <div className="relative h-64 md:h-auto w-full md:w-1/2">
                                    <img
                                        src={testimonials[activeTestimonial].image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                </div>

                                {/* Content Side */}
                                <div className="relative w-full md:w-1/2 h-full">
                                    <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                                        <div className="space-y-4">
                                            <h3 className="text-lg md:text-xl font-bold text-emerald-700">
                                                {testimonials[activeTestimonial].role}
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {testimonials[activeTestimonial].story}
                                            </p>
                                            <p className="font-semibold text-gray-900">
                                                {testimonials[activeTestimonial].name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation dots */}
                            <div className="flex justify-center p-4 bg-gray-50">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-2 h-2 mx-1 rounded-full transition-all duration-300
                                            ${index === activeTestimonial ? 'w-6 bg-emerald-500' : 'bg-gray-300'}`}
                                        aria-label={`Testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {stories.map((story, index) => (
                        <Link to={story.route} key={index} className="group">
                            <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-full">
                                {/* Image Container */}
                                <div className="relative h-48 md:h-56 overflow-hidden">
                                    <img 
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    
                                    {/* Tag */}
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-white/90 text-emerald-600 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                                            {story.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 mb-4">
                                        {story.description}
                                    </p>
                                    <div className="flex items-center text-emerald-500 text-sm md:text-base">
                                        Read More 
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8 md:mt-12">
                    <Link 
                        to="/all-stories" 
                        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-emerald-600 text-white text-sm md:text-base font-medium rounded-full hover:bg-emerald-700 transition-colors"
                    >
                        View More Stories
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ImpactStoriesSection;