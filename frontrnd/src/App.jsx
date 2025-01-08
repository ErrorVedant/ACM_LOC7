import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Timeline from './components/Timeline';
import MovingStars from './components/MovingStars';
import PrizePool from './components/PrizePool';  // Import PrizePool component
import AddressMap from './components/AddressMap';
function App() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-black text-white relative">
        <MovingStars />
        <Header />
        <main className="flex-grow relative z-10">
          <HomePage />
          <PrizePool />  {/* Add the PrizePool component here */}
        </main>
        <Timeline />
        <AddressMap />
        <Footer />
      </div>
    </div>
  );
}

export default App;