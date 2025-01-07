import React, { useState } from 'react'
import { Button } from "./components/ui/button"
import Timeline from './components/Timeline'

export default function SpaceHackathon() {
  const [expandedDomain, setExpandedDomain] = useState(null);
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const domains = [
    {
      id: 1,
      title: "BLOCKCHAIN & WEB3",
      image: "/images/blockchain.svg",
      description: "Explore the decentralized future with blockchain technology and Web3 innovations.",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI & ML",
      image: "/images/ai-ml.svg",
      description: "Dive into artificial intelligence and machine learning solutions.",
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "HEALTHCARE",
      image: "/images/healthcare.svg",
      description: "Revolutionize healthcare with innovative technological solutions.",
      gradient: "from-cyan-400 via-blue-600 to-purple-500"
    },
    {
      id: 4,
      title: "SUSTAINABILITY",
      image: "/images/sustainability.svg",
      description: "Create sustainable solutions for a better tomorrow.",
      gradient: "from-green-400 via-yellow-400 to-orange-500"
    },
    {
      id: 5,
      title: "INNOVATION",
      image: "/images/innovation.svg",
      description: "Push the boundaries of technology and creativity.",
      gradient: "from-orange-400 via-purple-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/images/vcet-logo.svg"
                alt="VCET Hackathon Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">VCET Hackathon</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-400 transition">Home</a>
              <a href="#" className="hover:text-purple-400 transition">About</a>
              <a href="#" className="hover:text-purple-400 transition">Domains</a>
              <a href="#" className="hover:text-purple-400 transition">Timeline</a>
              <a href="#" className="hover:text-purple-400 transition">Prizes</a>
              <a href="#" className="hover:text-purple-400 transition">Sponsors</a>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <img
            src="/images/vcet-logo.svg"
            alt="VCET College Logo"
            className="mx-auto mb-8 w-32 h-32"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vidyavardhini's College of Engineering and Technology
          </h1>
          <p className="text-xl md:text-2xl text-purple-400 mb-8">
            Department of Information Technology
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            VCET HACKATHON
          </h2>
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-12">
            Code The Cosmos
            <span className="inline-block ml-4 w-12 h-12 md:w-16 md:h-16 animate-bounce">🚀</span>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-lg px-8 py-6">
            Register Now
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 animate-bounce">⬇️</div>
      </div>

      {/* Domains Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slideUp">
            Domains
          </h2>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {domains.map((domain, index) => (
              <div
                key={domain.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                  ${expandedDomain === domain.id ? 'lg:col-span-2 lg:row-span-2' : ''}
                  ${index === 0 ? 'lg:col-span-2' : ''}
                `}
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
              >
                {/* Background Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r ${domain.gradient}`}
                  style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}
                />

                {/* Content Container */}
                <div className="relative z-10 aspect-[16/9] p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10
                  group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Domain Number */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                    flex items-center justify-center text-xl font-bold border border-white/20">
                    {domain.id}
                  </div>

                  {/* Domain Content */}
                  <div className="h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text
                      group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-500 transition-all duration-500">
                      {domain.title}
                    </h3>
                    <p className={`text-gray-300 transition-all duration-500 ${
                      expandedDomain === domain.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                    }`}>
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {domains.map((domain) => (
              <div
                key={domain.id}
                className="relative overflow-hidden rounded-full cursor-pointer group"
                onClick={() => setExpandedDomain(domain.id === expandedDomain ? null : domain.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${domain.gradient} opacity-20`} />

                {/* Content */}
                <div className="relative flex items-center space-x-4 p-4 bg-black/50 backdrop-blur-sm
                  border border-white/10 group-active:border-white/20">
                  {/* Domain Number */}
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                    flex items-center justify-center text-lg font-bold border border-white/20">
                    {domain.id}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold">{domain.title}</h3>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden bg-black/50 backdrop-blur-sm
                  ${expandedDomain === domain.id ? 'max-h-48 p-4' : 'max-h-0'}`}>
                  <p className="text-gray-300 text-sm">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center">
              About <span className="ml-4">🚀</span> Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              VCET Hackathon is a 30-hour event organized by the Department of Information Technology at "Vidyavardhini's College of Engineering and Technology". We aim to foster a strong programming culture and build critical problem-solving skills among students. Can you take on the challenge? It is an opportunity to take on challenging problems that revolve around us all the time and crack them down. Will you get time to eat? Can you ditch your sleep? Do you have passion to build? Find out in this 30 hours long thrilling experience.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      
    </div>
  )
}

