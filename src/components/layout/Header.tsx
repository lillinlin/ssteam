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
              src="https://ext.same-assets.com/3578314823/1462723278.png"
              alt="Eternal Fire Logo"
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
                <Link href="/about-us" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">Eternal Fire</Link>
                <Link href="/sponsors" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">Sponsors</Link>
                <Link href="/achievements" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">Achievements</Link>
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
                <Link href="/teams/cs2-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">COUNTER-STRIKE 2</Link>
                <Link href="/teams/cs2-academy-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">COUNTER-STRIKE 2 AC</Link>
                <Link href="/teams/valorant-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">VALORANT</Link>
                <Link href="/teams/league-of-legends-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">LEAGUE OF LEGENDS</Link>
                <Link href="/teams/pubg-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">PUBG</Link>
                <Link href="/teams/brawl-stars-team" className="block px-4 py-2 hover:bg-[#252430] hover:text-primary">BRAWL STARS</Link>
              </div>
            </div>
            <Link href="/news" className="nav-link font-medium">News</Link>
            <Link href="https://shop.eternalfire.gg" target="_blank" className="nav-link font-medium">Shop</Link>
            <Link href="/contact" className="nav-link font-medium">Contact</Link>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://www.facebook.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/eternalfiregg/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/c/EternalFireGG" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.tv/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
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
                <Link href="/about-us" className="nav-link">Eternal Fire</Link>
                <Link href="/sponsors" className="nav-link">Sponsors</Link>
                <Link href="/achievements" className="nav-link">Achievements</Link>
              </div>
            </details>
          </div>

          <div className="py-2">
            <details className="text-white">
              <summary className="cursor-pointer font-medium">Teams</summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link href="/teams/cs2-team" className="nav-link">COUNTER-STRIKE 2</Link>
                <Link href="/teams/cs2-academy-team" className="nav-link">COUNTER-STRIKE 2 AC</Link>
                <Link href="/teams/valorant-team" className="nav-link">VALORANT</Link>
                <Link href="/teams/league-of-legends-team" className="nav-link">LEAGUE OF LEGENDS</Link>
                <Link href="/teams/pubg-team" className="nav-link">PUBG</Link>
                <Link href="/teams/brawl-stars-team" className="nav-link">BRAWL STARS</Link>
              </div>
            </details>
          </div>

          <Link href="/news" className="py-2 nav-link font-medium">News</Link>
          <Link href="https://shop.eternalfire.gg" target="_blank" className="py-2 nav-link font-medium">Shop</Link>
          <Link href="/contact" className="py-2 nav-link font-medium">Contact</Link>

          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-[#252430]">
            <a href="https://www.facebook.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/eternalfiregg/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/c/EternalFireGG" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.tv/eternalfiregg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaTwitch />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
