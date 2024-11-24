import React from 'react';

const MovingStars = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-floating-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MovingStars;

