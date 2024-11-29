import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/who-we-are/AboutUs';
import OurTeam from './pages/who-we-are/OurTeam';
import BoardOfTrustees from './pages/who-we-are/BoardOfTrustees';
import WhereWeWork from './pages/who-we-are/WhereWeWork';
import OurImpact from './pages/who-we-are/OurImpact';
import EmergencySection from './pages/EmergencySection';
import GBVFacts from './pages/GBVFacts';
import CommunityOutreach from './pages/news/CommunityOutreach';
import Outreach from './pages/news/Outreach';
import Empowerment from './pages/news/Empowerment';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are/about" element={<AboutUs />} />
            <Route path="/who-we-are/team" element={<OurTeam />} />
            <Route path="/who-we-are/OurTeam" element={<OurTeam />} />
            <Route path="/who-we-are/board" element={<BoardOfTrustees />} />
            <Route path="/who-we-are/locations" element={<WhereWeWork />} />
            <Route path="/who-we-are/impact" element={<OurImpact />} />
            <Route path="/emergency" element={<EmergencySection />} />
            <Route path="/gbv-facts" element={<GBVFacts />} />
            <Route path="/news/community-outreach" element={<CommunityOutreach />} />
            <Route path="/news/outreach" element={<Outreach />} />
            <Route path="/news/empowerment" element={<Empowerment />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;