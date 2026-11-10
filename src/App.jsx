import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCollection from './components/CarCollection';
import CarDetailsModal from './components/CarDetailsModal';
import About from './components/About';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import { vehicles, dealershipStats } from './data/cars';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  // Quick action from header or footer opens modal with top vehicle
  const handleOpenContact = () => {
    setSelectedCar(vehicles[0]);
  };

  return (
    <div className="cobra-app">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero />
        <CarCollection
          vehicles={vehicles}
          onSelectCar={(car) => setSelectedCar(car)}
        />
        <About stats={dealershipStats} />
        <SocialMedia />
      </main>
      <Footer onOpenContact={handleOpenContact} />

      {selectedCar && (
        <CarDetailsModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
}

export default App;
