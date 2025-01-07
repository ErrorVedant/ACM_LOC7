import React from 'react';
import prizeImage1 from './p1.jpg';  // Add the path to your image here
import prizeImage2 from './p2.jpg';  // Add the path to your image here
import prizeImage3 from './p3.jpg';  // Add the path to your image here

function PrizePool() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wider">
          PRIZE POOL
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          The total prize pool for LOC 7.0 Hackathon is{' '}
          <span className="relative">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 blur-md">
              XX
            </span>{' '}
            <span className="text-4xl text-cyan-200 font-semibold">LACS</span>
          </span>
          !
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-10">

          {/* Empty grid item to push 1st Prize to center */}
          <div></div>

          {/* 1st Prize in the center of the first row */}
          <div className="bg-cover bg-center bg-opacity-50 rounded-2xl p-8 shadow-xl" style={{ backgroundImage: `url(${prizeImage1})` }}>
            <h3 className="text-3xl font-semibold mb-6 text-white">1st Prize</h3>
            <div className="relative">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 blur-md">
                XX
              </span>{' '}
              <span className="text-2xl font-medium text-cyan-200">INR</span>
            </div>
          </div>

          {/* Empty grid item to align 1st Prize in the center */}
          <div></div>

          {/* 2nd Prize in the second row, first column */}
          <div className="bg-cover bg-center bg-opacity-50 rounded-2xl p-8 shadow-xl" style={{ backgroundImage: `url(${prizeImage2})` }}>
            <h3 className="text-3xl font-semibold mb-6 text-white">2nd Prize</h3>
            <div className="relative">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 blur-md">
                XX
              </span>{' '}
              <span className="text-2xl font-medium text-cyan-200">INR</span>
            </div>
          </div>

          <div></div>

          {/* 3rd Prize in the second row, third column */}
          <div className="bg-cover bg-center bg-opacity-50 rounded-2xl p-8 shadow-xl" style={{ backgroundImage: `url(${prizeImage3})` }}>
            <h3 className="text-3xl font-semibold mb-6 text-white">3rd Prize</h3>
            <div className="relative">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 blur-md">
                XX
              </span>{' '}
              <span className="text-2xl font-medium text-cyan-200">INR</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrizePool;
