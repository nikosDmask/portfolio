import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 cursor-pointer">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link to="home" smooth={true} duration={500} offset={-80} className="nav-item">
          Home
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} className="nav-item">
          Projects
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80} className="nav-item">
          About
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
