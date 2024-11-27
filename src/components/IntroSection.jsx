import communitySupport from '../assets/images/woman5.jpg';

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
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl text-emerald-600 mb-4">❝</div>
                            <p className="text-gray-700 leading-relaxed">
                                In the heart of Garissa County, we stand as a vital sanctuary for survivors of gender-based violence. Our community-based organization brings together local expertise with cultural sensitivity, ensuring that our services resonate deeply with the unique needs of our community. Through understanding and respect for our rich cultural heritage, we&apos;ve created safe spaces where survivors find strength in their journey to healing.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Working hand-in-hand with community elders, religious leaders, and local authorities, we&apos;ve built trust and understanding across different segments of our society. Our approach combines traditional wisdom with modern support systems, creating a bridge between cultural values and essential support services. This unique blend allows us to address GBV issues while maintaining respect for our community&apos;s traditions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Our dedicated team, composed primarily of local community members, brings not just professional expertise but also deep cultural understanding to their work. This connection allows us to break down barriers and create meaningful dialogue about gender-based violence in ways that resonate with our community&apos;s values and experiences.
                            </p>
                        </div>

                        <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Our Community Impact</h3>
                            <p className="text-gray-700 leading-relaxed">
                                From the urban centers of Garissa town to the remote pastoral communities, our reach extends across the diverse landscapes of our county. We&apos;ve established a network of community advocates and support systems that understand the unique challenges faced by survivors in our region. Our mobile outreach programs ensure that even the most remote communities have access to essential support and information.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Through innovative programs like our &apos;Sister&apos;s Circle&apos; support groups and &apos;Youth Champions&apos; initiatives, we&apos;re creating sustainable change from within our communities. These programs combine traditional conflict resolution methods with modern counseling approaches, providing culturally appropriate support that resonates with our local context. Our partnerships with local women&apos;s groups and youth organizations have created a strong foundation for community-led responses to GBV.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                We&apos;re particularly proud of our work in economic empowerment, where we&apos;ve helped survivors build independence through skills training and micro-enterprise support. Our &apos;Healing Through Heritage&apos; program combines traditional crafts with therapy, creating both emotional healing and economic opportunities. By working closely with local businesses and vocational training centers, we&apos;re building pathways to financial independence for survivors.
                            </p>
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
