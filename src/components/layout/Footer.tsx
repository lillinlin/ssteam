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
              SCARLET STARS
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              SCARLET STARS 成立于 2024 年
            </p>
            <p className="text-sm text-gray-300">
             
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
              <li><Link href="" target="_blank" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>








          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaYoutube />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaTwitch />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#252430] flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <FaDiscord />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Mail:
                    ss@doon.eu.org
            </p>
          </div>
        </div>

        {/* Hashtag */}
        <div className="text-center mb-8">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-primary text-xl font-bold hover:opacity-80 transition-opacity">
            SCARLET STARS
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 border-t border-[#252430] pt-8">
          <p className="text-sm">
            © 1976 END
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
