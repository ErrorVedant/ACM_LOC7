import React, { useState } from 'react';
import blockchain from './BLOCKCHAIN.jpg';
import ai from './AIML.jpg';
import cyber from './CYNERSECURITY.jpg';
import web from './WEBAPP.jpg';

function DomainsSection() {
  const [expandedDomain, setExpandedDomain] = useState(1);

  const domains = [
    {
      id: 1,
      title: 'Blockchain',
      image: blockchain,
      description: 'Explore decentralized applications, smart contracts, and secure blockchain technologies.',
    },
    {
      id: 2,
      title: 'Web App',
      image: web,
      description: 'Design and develop cutting-edge web applications with modern frameworks and tools.',
    },
    {
      id: 3,
      title: 'AI-ML',
      image: ai,
      description: 'Delve into artificial intelligence and machine learning to create intelligent solutions.',
    },
    {
      id: 4,
      title: 'Cyber Security',
      image: cyber,
      description: 'Secure digital infrastructure by learning and implementing advanced cybersecurity measures.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl md:text-7xl font-bold mb-12 text-center animate-slideUp">DOMAINS</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer 
                ${expandedDomain === domain.id ? "md:col-span-2" : "md:col-span-1"} // Change width on expand
                hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
              onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)} // Toggle expand/collapse
            >
              {/* Conditionally apply gradient based on expandedDomain */}
              <div
                className={`absolute inset-0 z-10 transition-all duration-500 
                  ${expandedDomain === domain.id ? "bg-transparent" : "bg-gradient-to-b from-transparent via-purple-900/50 to-black"}`}
              />
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {domain.title}
                </h3>
                <p
                  className={`text-gray-300 transition-all duration-500 ${
                    expandedDomain === domain.id ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                  }`}
                >
                  {domain.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300 rounded-xl z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DomainsSection;
