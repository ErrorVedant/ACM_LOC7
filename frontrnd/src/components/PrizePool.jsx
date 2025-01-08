import React from 'react';
import prizeImage1 from './p1.jpg'; // Path to 1st prize image
import backgroundImage from './Pokemon-Iconic-Locations-Azalea-Town.jpg'; // Path to background image

function PrizePool() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center  text-white">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="relative mb-5">
            <div className="absolute inset-0 backdrop-blur-md z-0 max-w-full mx-auto"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 md:px-4">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wider text-red-600">
                PRIZE POOL
              </h2>
              <p className="text-xl font-extrabold md:text-2xl text-white mb-12">
                The total prize pool for LOC 7.0 Hackathon is{' '}
                <span className="text-4xl text-cyan-200 font-extrabold">₹3 LAKH!!</span>
              </p>
            </div>
          </div>
        </div>




        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-auto gap-10">
          {/* Empty item for centering 1st Prize on larger screens */}
          <div className="hidden sm:block"></div>

          {/* 1st Prize */}
          <div
            className="bg-cover bg-center bg-no-repeat rounded-2xl p-0"
            style={{
              backgroundImage: `url(${prizeImage1})`,
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Keeps the image centered
            }}
          >
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-extrabold text-white mb-6">1st Prize</h3>
              <div className="relative">
                <span className="text-3xl font-extrabold text-blue-400">₹1.5 LAKH</span>
              </div>
            </div>
          </div>

          {/* Empty item for alignment on larger screens */}
          <div className="hidden sm:block"></div>

          {/* 2nd Prize */}
          <div
            className="bg-cover bg-center bg-no-repeat rounded-2xl p-0"
            style={{
              backgroundImage: `url(${prizeImage1})`,
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Keeps the image centered
            }}
          >
            <div className="relative z-10 p-8">
            <h3 className="text-3xl font-extrabold text-white mb-6">2nd Prize</h3>
              <div className="relative">
                <span className="text-3xl font-extrabold text-blue-400">₹1 LAKH</span>
              </div>
            </div>
          </div>

          {/* Spacer for alignment on larger screens */}
          <div className="hidden sm:block"></div>

          {/* 3rd Prize */}
          <div
            className="bg-cover bg-center bg-no-repeat rounded-2xl p-0"
            style={{
              backgroundImage: `url(${prizeImage1})`,
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Keeps the image centered
            }}
          >
            <div className="relative z-10 p-8">
            <h3 className="text-3xl font-extrabold text-white mb-6">3rd Prize</h3>
              <div className="relative">
                <span className="text-3xl font-extrabold text-blue-400">₹50 K</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrizePool;
