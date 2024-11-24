import React from 'react';

function PrizePool() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-7xl font-bold mb-6">PRIZE POOL</h2>
        <p className="text-xl mb-8">The total prize pool for LOC 7.0 Hackathon is <span><span className="relative z-20 text-4xl blur-md text-cyan-100 ofont-bold">Hi </span><span className="text-3xl">LACS</span></span>
        !</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-purple-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">2nd Prize</h3>
            <div className="relative">
              {/* Apply blur effect to the "XX" */}

              <span><span className="relative z-20 text-4xl blur-md text-cyan-100 ofont-bold">Hi </span><span className="text-3xl">INR</span></span>
            </div>
          </div>

          <div className="bg-purple-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">1st Prize</h3>
            <div className="relative">
              {/* Apply blur effect to the "XX" */}

              <span><span className="relative z-20 text-4xl blur-md text-cyan-100 ofont-bold">Hi </span><span className="text-3xl">INR</span></span>
            </div>
          </div>


          <div className="bg-purple-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">3rd Prize</h3>
            <div className="relative">

              <span><span className="relative z-20 text-4xl blur-md text-cyan-100 ofont-bold">Hi </span><span className="text-3xl">INR</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrizePool;
