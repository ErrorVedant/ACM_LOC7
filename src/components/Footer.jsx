import React from 'react';
import { Link } from 'react-router-dom';
import logo from './DJACMLOGO.png';
function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src={logo} alt="Hackathon Logo" className="w-20 h-20 mb-2" />
            <p className="text-sm text-gray-400">
              DJS ACM : LOC 7.0
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
            <p className="text-sm text-gray-400">No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp.Cooper Hospital, Vile Parle (West), Mumbai-400 056. India</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email: info@vcethackathon.com<br />
              Phone: +91 82375 99879
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DJSACM Hackathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

