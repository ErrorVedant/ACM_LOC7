import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import img2 from './DJACMLOGOBLUE.png';
import img1 from './DJ.jpeg';

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={img2} alt="Hackathon Logo" className="w-20 h-20" />
                            <span className="font-bold text-xl">LOC 7.0 HACKATHON</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={img1} alt="Hackathon Logo" className="w-20 h-16" />
                        </Link>
                        <Link to="/domains" className="hover:text-purple-400 transition">Domains</Link>
                        <Link to="/timeline" className="hover:text-purple-400 transition">Timeline</Link>
                        <Button asChild>
                            <Link to="/register" className="bg-gradient-to-r px-4 py-2 from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800">
                                Register
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
