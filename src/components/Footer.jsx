import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/logo.svg" alt="Hackathon Logo" className="w-12 h-12 mb-2" />
            <p className="text-sm text-gray-400">
              VCET Hackathon: Code The Cosmos
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/register" className="text-sm text-gray-400 hover:text-white transition">Register</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email: info@vcethackathon.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} VCET Hackathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

