import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#050414] p-4 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Left Logo */}
        <div className="text-white text-3xl font-bold">
          <span className="animated-gradient-text">Shikha Shree</span> 
        </div>

        {/* Center Menu */}
        <div className="flex gap-x-10">
          <a href="#home" className="text-white hover:text-pink-400 text-lg">Home</a>
          <a href="#about" className="text-white hover:text-pink-400 text-lg">About</a>
          <a href="#contact" className="text-white hover:text-pink-400 text-lg">Contact</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-5">
          <a 
            href="https://github.com/Codesmith-4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-400 transition-colors"
          >
            <FaGithub />
          </a>

          <a 
            href="https://linkedin.com/in/shikha-shree-945b1a300" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
