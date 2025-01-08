import React from 'react';
import { Link } from 'react-router-dom';
import img2 from './DJACMLOGOBLUE.png';
import img1 from './DJ.jpeg';

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            {/* Left Div: At Extreme Left */}
    <div className="flex items-center space-x-4">
        <Link to="https://djsceacm.com/" className="flex items-center space-x-2">
            <img src={img2} alt="Hackathon Logo" className="w-20 h-20" />
            <span className="font-bold text-xl text-white hidden sm:block">DJSACM</span>
        </Link>
    </div>

    {/* Center Div: At Center */}
    <div className="flex-grow flex justify-center">
        <span className="font-bold text-xl text-white">
            <span className="block sm:hidden text-2xl">LOC 7.0</span>
            <span className="hidden sm:block text-2xl">LOC 7.0 HACKATHON</span>
        </span>
    </div>

    {/* Right Div: At Extreme Right */}
    <div className="flex items-center space-x-8">
        <Link to="https://www.djsce.ac.in/" className="flex items-center space-x-2">
            <img src={img1} alt="Hackathon Logo" className="w-20 h-16" />
        </Link>
    </div>
</div>


            </nav>
        </header>
    );
}

export default Header;
