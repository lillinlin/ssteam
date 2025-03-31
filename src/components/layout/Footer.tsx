import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15141a] text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Eternal Fire INC.
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Eternal Fire is a Turkey-based esports club founded in 2021. Eternal Fire's was established to create a sustainable culture of sportsmanship and success.
            </p>
            <p className="text-sm text-gray-300">
              Eternal Fire INC. made its first investments in CS:GO and Valorant. Currently, its CS2 and CS2 Academy teams are formed from players who have achieved significant success in Türkiye and around the globe.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/teams" className="hover:text-primary transition-colors">Teams</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="https://shop.eternalfire.gg" target="_blank" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Teams
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/teams/cs2-team" className="hover:text-primary transition-colors">COUNTER-STRIKE 2</Link></li>
              <li><Link href="/teams/cs2-academy-team" className="hover:text-primary transition-colors">COUNTER-STRIKE 2 ACADEMY</Link></li>
              <li><Link href="/teams/valorant-team" className="hover:text-primary transition-colors">VALORANT</Link></li>
              <li><Link href="/teams/league-of-legends-team" className="hover:text-primary transition-colors">LEAGUE OF LEGENDS</Link></li>
              <li><Link href="/teams/pubg-team" className="hover:text-primary transition-colors">PUBG</Link></li>
              <li><Link href="/teams/brawl-stars-team" className="hover:text-primary transition-colors">BRAWL STARS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="https://www.facebook.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/eternalfiregg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/eternalfiregg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/c/EternalFireGG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaYoutube />
              </a>
              <a href="https://www.twitch.tv/eternalfiregg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaTwitch />
              </a>
              <a href="https://discord.com/invite/ZEn7kbupCg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaDiscord />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Join our Discord community to stay updated with the latest news and events.
            </p>
          </div>
        </div>

        {/* Hashtag */}
        <div className="text-center mb-8">
          <a href="https://twitter.com/hashtag/forEF" target="_blank" rel="noopener noreferrer" className="text-primary text-xl font-bold hover:opacity-80 transition-opacity">
            #forEF
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 border-t border-[#252430] pt-8">
          <p className="text-sm">
            &copy; {currentYear} Eternal Fire. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
