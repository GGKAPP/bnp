import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import InformationTechnology from './components/InformationTechnology';
import Innoversite from './components/Innoversite';
import Timeline from './components/Timeline';
import Benefits from './components/Benefits';
import GraduateProgramme from './components/GraduateProgramme';
import WhyWeLoveWorking from './components/WhyWeLoveWorking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <InformationTechnology />
      <Innoversite />
      <Timeline />
      <Benefits />
      <GraduateProgramme />
      <WhyWeLoveWorking />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;