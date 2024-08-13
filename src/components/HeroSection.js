import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#011f4b] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left md:pr-8">
          <h2 className="text-4xl font-bold mb-4">Manage Your Group Finances Easily</h2>
          <p className="text-lg mb-8">
            Simplify expense tracking and settle debts with ease. Perfect for friends, family, roommates, and teams.
          </p>
          <a href="#signup" className="bg-[#005b96] hover:bg-[#6497b1] text-white font-bold py-2 px-4 rounded-full">
            Get Started
          </a>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/Images/heroSection.jpg" alt="Group Finance Management" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
