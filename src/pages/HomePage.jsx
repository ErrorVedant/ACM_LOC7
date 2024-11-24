import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import mainLogo from "./MAIN.png";
import "./Home.css";
import DomainsSection from "../components/Domain";

function HomePage() {
  const [timeRemaining, setTimeRemaining] = useState("");


  // Timer logic: Assuming event date is 31st December 2024
  useEffect(() => {
    const targetDate = new Date("2025-01-31T23:59:59");
    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining(
          `${days}d ${hours}h ${minutes}m ${seconds}s`
        );
      } else {
        clearInterval(timerInterval);
        setTimeRemaining("The event has started!");
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* 70% Section */}
        <div className="w-full md:w-[70%] p-6 text-center md:text-left animate-fadeIn">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-[50px] animate-slideUp">
            DJ Sanghvi College of Engineering
          </h1>
          <p className="text-xl md:text-2xl text-purple-400 mb-8 animate-slideUp" style={{ animationDelay: "0.2s" }}>
          Student Chapter of Computer Engineering Department
          </p>
          <h2 className="text-5xl md:text-7xl text-orange-500 font-bold mb-8 animate-slideUp" style={{ animationDelay: "0.4s" }}>
            LOC 7.0 HACKATHON
          </h2>
          <div
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text mb-12 animate-slideUp"
            style={{ animationDelay: "0.6s", color: "#002dc6" }}
          >
            Code. Compete. Conquer
            <span className="inline-block ml-4 w-12 h-12 md:w-16 md:h-16 animate-rocket">🚀</span>
          </div>

        </div>

        {/* 30% Section */}
        <div className="w-full md:w-[30%] p-6 flex flex-col items-center justify-center">
          <img
            src={mainLogo}
            alt="DJS ACM Logo"
            className="w-160 h-160 mx-auto md:w-140 md:h-140 animate-glow" // Increased image size to 60
          />
          <div className="mt-8 text-center">
            <h3 className="text-3xl font-bold text-purple-500">Countdown to LOC 7.0</h3>
            <p className="text-4xl font-medium text-green-500 mt-4">{timeRemaining}</p>
          </div>
        </div>

      </div>

      {/* Register Button */}
      <div className="mt-6 flex justify-center">
        <Button className="animate-slideUp px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] glow-animation">
          <p className="text-2xl">Register Now</p>
        </Button>
      </div>

      <DomainsSection />

    </div>
  );
}

export default HomePage;
