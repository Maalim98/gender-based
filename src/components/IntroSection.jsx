import { Link } from 'react-router-dom';
import communitySupport from '../assets/images/communitysapport.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const IntroSection = () => {
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
        <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="mb-12 md:mb-16 text-center"
                    {...simpleAnimation}
                >
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 relative">
                            <span className="absolute -left-4 md:-left-6 top-0 text-5xl md:text-6xl text-emerald-200/50">W</span>
                            WHO ARE WE?
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-yellow-400 mt-4"></div>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Who We Are Section */}
                    <motion.div 
                        className="relative py-12"
                        {...simpleAnimation}
                    >
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            {/* Left Column - Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
                                <img 
                                    src={communitySupport}
                                    alt="Our community" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-white text-2xl font-bold mb-2">Local Roots, Global Impact</h3>
                                        <p className="text-emerald-100">Founded in Garissa, serving humanity.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Content */}
                            <div className="space-y-6 md:p-6">
                                {/* Content boxes */}
                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">Community-Led Organization</h3>
                                    <p className="text-gray-700">
                                        We are more than just an organization – we are a movement led by the community, 
                                        for the community. Our team consists of local leaders, survivors, and dedicated 
                                        professionals working together.
                                    </p>
                                </div>

                                <div className="bg-emerald-50/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">Cultural Understanding</h3>
                                    <p className="text-gray-700">
                                        Our approach is deeply rooted in local traditions while embracing modern solutions. 
                                        We understand the delicate balance between cultural sensitivity and progressive change.
                                    </p>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-emerald-800">Our Reach</h3>
                                        <span className="text-3xl font-bold text-emerald-600">300+</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Garissa Township", "Dadaab", "Fafi", "Ijara", "Balambala", "Lagdera"].map((location, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-emerald-100/50 text-emerald-800 rounded-full text-sm"
                                            >
                                                {location}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <div className="text-center mt-16">
                        <Link 
                            to="/who-we-are/about"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-800 
                                     text-white px-8 py-4 rounded-full text-lg font-semibold
                                     hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300
                                     shadow-lg hover:shadow-xl"
                        >
                            Learn More About Us
                            <FaArrowRight className="transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
