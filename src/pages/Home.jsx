import React from 'react';
import HeroSection from '../components/HeroSection';

import EmergencySection from './EmergencySection';
import ResourcesSection from '../components/ResourcesSection';
import IntroSection from '../components/IntroSection';  // Add this import
import ImpactStoriesSection from '../components/ImpactStoriesSection';
import ServicesSection from '../components/ServicesSection';
const Home = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      
      <ResourcesSection /> 
      {/* <EmergencySection /> */}
      <IntroSection />
      <ImpactStoriesSection></ImpactStoriesSection>
      <ServicesSection />
      
        {/* Add the IntroSection here */}
        
    </main>
  );
};

export default Home;