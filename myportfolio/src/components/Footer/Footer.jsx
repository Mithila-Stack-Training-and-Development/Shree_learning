import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#131129] text-white text-center py-6 flex flex-col items-center">
      <div className="flex gap-6 text-2xl mb-4">
        <a href="https://github.com/Codesmith-4" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/shikha-shree-945b1a300" target="_blank"><FaLinkedin /></a>
        <a href="mailto:sikhashri1@gmail.com"><FaEnvelope /></a>
      </div>
      &copy; 2025 Shikha Shree. All rights reserved.
    </footer>
  );
};

export default Footer;
