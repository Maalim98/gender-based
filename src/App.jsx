import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import EmergencySection from './pages/EmergencySection';

// Import pages from who-we-are folder
import { AboutUs } from './pages/who-we-are/AboutUs';
import { OurTeam } from './pages/who-we-are/OurTeam';
import { BoardOfTrustees } from './pages/who-we-are/BoardOfTrustees';
import { WhereWeWork } from './pages/who-we-are/WhereWeWork';
import { OurImpact } from './pages/who-we-are/OurImpact';
import GBVFacts from './pages/GBVFacts';
import CommunityOutreach from './pages/news/CommunityOutreach';
import Outreach from './pages/news/Outreach';
import Empowerment from './pages/news/Empowerment';
import AllUpdates from './pages/news/AllUpdates';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are/about" element={<AboutUs />} />
            <Route path="/who-we-are/team" element={<OurTeam />} />
            <Route path="/who-we-are/board" element={<BoardOfTrustees />} />
            <Route path="/who-we-are/locations" element={<WhereWeWork />} />
            <Route path="/who-we-are/impact" element={<OurImpact />} />
            <Route path="/emergency" element={<EmergencySection />} />
            <Route path="/gbv-facts" element={<GBVFacts />} />
            <Route path="/news/community-outreach" element={<CommunityOutreach />} />
            <Route path="/news/outreach" element={<Outreach />} />
            <Route path="/news/empowerment" element={<Empowerment />} />
            <Route path="/news/all-updates" element={<AllUpdates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;