import { useEffect } from "react";
import gsap from "gsap";
import training1 from '../assets/images/training1.jpg';
import training2 from '../assets/images/training2.jpg';
import training3 from '../assets/images/training3.webp';
import training4 from '../assets/images/training4.png';
import training5 from '../assets/images/training5.jpg';

const About = () => {
    useEffect(() => {
        gsap.set(".fade-in", { opacity: 1 });

        gsap.from(".fade-in", {
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section className="py-16 bg-white">
            {/* Header */}
            <header className="mb-12 text-center px-4">
                <div className="flex items-center gap-4 max-w-3xl mx-auto">
                    <span className="h-px flex-1 bg-emerald-600/30" />
                    <h1 className="text-3xl font-bold text-emerald-800">About Us</h1>
                    <span className="h-px flex-1 bg-emerald-600/30" />
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Left column - Text */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <p className="text-gray-800 text-lg mb-4">
                            <span className="float-left text-4xl font-serif text-emerald-600 mr-3 mt-1">
                                W
                            </span>
                            e are dedicated to supporting survivors of gender-based violence, 
                            providing a safe space for healing and recovery. Our team works 
                            tirelessly to offer counseling, resources, and advocacy for those 
                            affected by abuse.
                        </p>
                        
                        <p className="text-gray-800 text-lg">
                            Through community outreach and education, we strive to prevent 
                            violence and create lasting change. We believe everyone deserves 
                            to live free from fear and violence.
                        </p>
                    </div>

                    {/* Right column - Quote */}
                    <div className="bg-emerald-600 shadow-lg rounded-lg p-6">
                        <blockquote className="text-center text-white">
                            <p className="text-lg mb-4">
                                <span className="float-left text-4xl font-serif text-white/90 mr-3 mt-1">
                                    O
                                </span>
                                ur mission is to empower survivors of gender-based violence by providing comprehensive support, 
                                creating safe spaces for healing, and advocating for a society free from violence. We stand firm 
                                in our commitment to break the cycle of abuse and restore dignity to every survivor's journey.
                            </p>
                            <footer className="text-white/90 text-right mt-4">
                                — GVRC Mission Statement
                            </footer>
                        </blockquote>
                    </div>
                </div>

                {/* Training Cards Section */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Our Training Programs</h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img 
                                    src={training1}
                                    alt="Community Training" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-emerald-600 mb-2">April 15, 2023</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        UN Women Leadership Training
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        A comprehensive 20-day campaign focused on empowering community leaders 
                                        with skills to address gender-based violence.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Training</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Leadership</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img 
                                    src={training2}
                                    alt="School Program" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-emerald-600 mb-2">June 8, 2023</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        School Awareness Program
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Training teachers and school administrators on identifying and 
                                        preventing gender-based violence in educational settings.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Schools</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Awareness</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img 
                                    src={training3}
                                    alt="Healthcare Training" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-emerald-600 mb-2">August 22, 2023</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        Healthcare Provider Workshop
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Specialized training for healthcare workers on providing trauma-informed 
                                        care to survivors of gender-based violence.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Healthcare</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Workshop</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img 
                                    src={training4}
                                    alt="Community Forum" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-emerald-600 mb-2">October 5, 2023</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        Community Forum Training
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Engaging community leaders and members in dialogue about prevention 
                                        and response to gender-based violence.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Forum</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Community</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img 
                                    src={training5}
                                    alt="UN Conference" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-emerald-600 mb-2">December 10, 2023</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        UN Conference on GBV
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        International conference bringing together experts to share best practices 
                                        in addressing gender-based violence.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Conference</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">International</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
