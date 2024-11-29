import communitySupport from '../assets/images/woman5.jpg';
import { FaHeart, FaHandsHelping, FaUsers, FaStar } from 'react-icons/fa';

const IntroSection = () => {
    return (
        <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 text-center">
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 relative">
                            <span className="absolute -left-4 md:-left-6 top-0 text-5xl md:text-6xl text-emerald-200/50">W</span>
                            WHO ARE WE?
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-yellow-400 mt-4"></div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FaHeart className="text-3xl text-emerald-600 mb-4" />
                            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Compassionate Care</h3>
                            <p className="text-gray-600">Providing empathetic support and understanding to every survivor who walks through our doors.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FaHandsHelping className="text-3xl text-emerald-600 mb-4" />
                            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Cultural Sensitivity</h3>
                            <p className="text-gray-600">Blending traditional wisdom with modern support systems to serve our community effectively.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FaUsers className="text-3xl text-emerald-600 mb-4" />
                            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Community First</h3>
                            <p className="text-gray-600">Working hand-in-hand with local leaders to create lasting positive change.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FaStar className="text-3xl text-emerald-600 mb-4" />
                            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Excellence</h3>
                            <p className="text-gray-600">Delivering high-quality support services that transform lives.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Our Story</h3>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    In the heart of Garissa County, we stand as a vital sanctuary for survivors of gender-based violence. Our community-based organization combines local expertise with cultural sensitivity to create safe spaces where healing begins.
                                </p>
                                <div className="border-l-4 border-emerald-500 pl-4 my-6">
                                    <p className="text-emerald-800 italic">
                                        "Building bridges between traditional wisdom and modern support systems"
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Our dedicated team of local community members brings both professional expertise and deep cultural understanding to their work, breaking down barriers and creating meaningful dialogue about gender-based violence.
                                </p>
                            </div>
                        </div>

                        <div className="bg-emerald-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Our Impact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <span className="text-2xl text-emerald-600">58K+</span>
                                    </div>
                                    <p className="text-gray-700">Survivors supported across Garissa County</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    From urban centers to remote pastoral communities, our reach extends across the diverse landscapes of our county through:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Mobile outreach programs</li>
                                    <li>'Sister's Circle' support groups</li>
                                    <li>'Youth Champions' initiatives</li>
                                    <li>Economic empowerment programs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-20 md:mt-32">
                        <div className="absolute inset-0 bg-emerald-800/10 rounded-3xl transform rotate-1"></div>
                        <div className="absolute inset-0 bg-yellow-400/10 rounded-3xl transform -rotate-1"></div>
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img 
                                src={communitySupport}
                                alt="Community support" 
                                className="w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="max-w-3xl px-6 text-center transform hover:scale-105 transition-transform duration-500">
                                        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20">
                                            <span className="text-yellow-400 text-4xl md:text-5xl font-light">❝</span>
                                            <p className="text-white text-xl md:text-3xl font-light mt-2 mb-4 leading-relaxed">
                                                Together, we&apos;re building a future where
                                                <span className="block text-2xl md:text-4xl font-semibold text-emerald-400 my-2">
                                                    every voice is heard
                                                </span>
                                                and every survivor finds their path to healing
                                            </p>
                                            <span className="text-yellow-400 text-4xl md:text-5xl font-light rotate-180 inline-block">❝</span>
                                            <div className="mt-3">
                                                <span className="text-emerald-300 text-sm md:text-base font-medium tracking-wider uppercase">
                                                    — Our Promise —
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
