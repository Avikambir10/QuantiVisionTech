import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 2. Added better flex properties for a standard layout */}
      <div className="w-full h-[60px] flex flex-row justify-between items-center px-8 text-white">
        {/* Brand/Logo */}
        <Link to="/">
          <p className="text-xl font-bold">QuantiVisionTech</p>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/porttfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-black bg-opacity-95 text-white transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col gap-4 px-8 py-4">
          <Link 
            to="/services" 
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/porttfolio" 
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;