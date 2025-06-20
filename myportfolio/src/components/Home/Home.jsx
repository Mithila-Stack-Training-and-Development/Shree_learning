import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="h-screen bg-[#301d4e4c] flex flex-col justify-center items-center text-white pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image */}
      <div className="w-49 h-56 mb-10 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
        <img src="/profile2.png" alt="Shikha" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        I'm <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">Shikha Shree</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-2xl text-center">
        Frontend Developer | Full Stack Learner | Web Designer
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Connect Me Button (Scroll to Contact Section) */}
        <a
          href="#contact"
          className="bg-pink-500 px-8 py-3 rounded-lg hover:bg-pink-400 transition duration-300 text-center"
        >
          Contact Me
        </a>

        {/* Resume Button */}
        <a
          href="/resumeshri1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-transform text-center"
        >
          My Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
