import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#03396c] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">EvenUp</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-[#b3cde0]">Features</a></li>
            <li><a href="#about" className="hover:text-[#b3cde0]">About</a></li>
            <li><a href="#contact" className="hover:text-[#b3cde0]">Contact</a></li>
          </ul>
          <div className="flex space-x-2">
            <a
              href="/login"
              className="bg-[#6497b1] text-white px-4 py-2 rounded hover:bg-[#005b96] transition duration-300"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[#6497b1] text-white px-4 py-2 rounded hover:bg-[#005b96] transition duration-300"
            >
              Signup
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
