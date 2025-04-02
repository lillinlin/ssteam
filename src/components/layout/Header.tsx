import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#15141a] border-b border-[#252430] sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="https://ssteam.pages.dev/ss.png"
              alt="SCARLET STARS Logo"
              width={150}
              height={40}
              className="w-auto h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link font-medium">Home</Link>
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                About
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-[#1e1c25] shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <Link href="/about-us" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">SCARLET STARS</Link>

              </div>
            </div>
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Teams
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-[#1e1c25] shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <Link href="/teams/cs2-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">COUNTER-STRIKE</Link>
              </div>
            </div>
            <Link href="/news" className="nav-link font-medium">News</Link>
            <Link href="https://shop.eternalfire.gg" target="_blank" className="nav-link font-medium">Shop</Link>
            <Link href="/contact" className="nav-link font-medium">Contact</Link>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaYoutube />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitch />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[#1e1c25] transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <nav className="container-custom py-4 flex flex-col">
          <Link href="/" className="py-2 nav-link font-medium">Home</Link>

          <div className="py-2">
            <details className="text-white">
              <summary className="cursor-pointer font-medium">About</summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link href="/about-us" className="nav-link">SCARLET STARS</Link>
              </div>
            </details>
          </div>

          <div className="py-2">
            <details className="text-white">
              <summary className="cursor-pointer font-medium">Teams</summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link href="/teams/cs2-team" className="nav-link">COUNTER-STRIKE</Link>
              </div>
            </details>
          </div>

          <Link href="/news" className="py-2 nav-link font-medium">News</Link>
          <Link href="" target="_blank" className="py-2 nav-link font-medium">Shop</Link>
          <Link href="/contact" className="py-2 nav-link font-medium">Contact</Link>

          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-[#252430]">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaYoutube />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitch />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
