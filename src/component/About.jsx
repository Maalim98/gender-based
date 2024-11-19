import { useEffect } from "react";
import gsap from "gsap";

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
                                    src="public/images/training1.jpg" 
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
                                    src="public/images/training2.jpg" 
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
                                    src="public/images/training3.webp" 
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
                                    src="public/images/training4.png" 
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
                                    src="public/images/training5.jpg" 
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

                {/* We Are Best At Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-16">
                            We Are Best At
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Emergency Response */}
                            <div className="text-center group">
                                <div className="mb-6 transform transition-transform group-hover:scale-110">
                                    <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Response</h3>
                                <p className="text-gray-600">
                                    Comprehensive medical care and psychosocial support for survivors
                                </p>
                            </div>

                            {/* Prevention */}
                            <div className="text-center group">
                                <div className="mb-6 transform transition-transform group-hover:scale-110">
                                    <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Primary Prevention</h3>
                                <p className="text-gray-600">
                                    Creating awareness and education for violence prevention
                                </p>
                            </div>

                            {/* Advocacy */}
                            <div className="text-center group">
                                <div className="mb-6 transform transition-transform group-hover:scale-110">
                                    <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Advocacy</h3>
                                <p className="text-gray-600">
                                    Engaging communities to transform attitudes and policies
                                </p>
                            </div>

                            {/* Internship */}
                            <div className="text-center group">
                                <div className="mb-6 transform transition-transform group-hover:scale-110">
                                    <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Internship Program</h3>
                                <p className="text-gray-600">
                                    Training the next generation of GBV response professionals
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;