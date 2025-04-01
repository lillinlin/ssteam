import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaSteam } from 'react-icons/fa';

interface PlayerSocial {
  steam?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
}

interface Player {
  id: number;
  name: string;
  fullName: string;
  role: string;
  imageUrl: string;
  socials: PlayerSocial;
}

const players: Player[] = [
  {
    id: 1,
    name: 'CHENGNUO',
    fullName: '',
    role: '',
    imageUrl: '/zw.jpg',
    socials: { steam: 'https://steamcommunity.com/profiles/76561199005327501', twitter: '', instagram: '', youtube: '', twitch: '' }
  },
  {
    id: 2,
    name: 'KEEP',
    fullName: '',
    role: '',
    imageUrl: '/zw.jpg',
    socials: { steam: 'https://steamcommunity.com/profiles/76561199053666935', twitter: '', instagram: '', youtube: '' }
  },
  {
    id: 3,
    name: 'LILLINLIN',
    fullName: '',
    role: '',
    imageUrl: '/k.jpg',
    socials: { steam: 'https://steamcommunity.com/id/lillinlin', twitter: '', instagram: '', youtube: '', twitch: '' }
  },
  {
    id: 4,
    name: 'AQK',
    fullName: '',
    role: '',
    imageUrl: '/zw.jpg',
    socials: { steam: 'https://steamcommunity.com/profiles/76561198427520544', twitter: '', instagram: '', twitch: '' }
  },
  {
    id: 5,
    name: 'CANJU',
    fullName: '',
    role: '',
    imageUrl: '/zw.jpg',
    socials: { steam: 'https://steamcommunity.com/profiles/76561199104395301', twitter: '', instagram: '', twitch: '' }
  }
];

const TeamsSection = () => {
  return (
    <section className="py-16 bg-[#1e1c25]">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            MEET OUR <span className="text-primary">SQUADS</span>
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-white font-medium bg-primary rounded-sm">CSGO</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {players.map((player) => (
            <div key={player.id} className="bg-[#15141a] rounded-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src={player.imageUrl}
                  alt={`${player.name} - ${player.fullName}`}
                  width={300}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-primary text-xl font-bold">{player.name}</h3>
                  <p className="text-white text-sm">{player.fullName}</p>
                  <p className="text-gray-300 text-xs">{player.role}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-3 flex justify-center gap-4 border-t border-[#252430]">
                {player.socials.steam && (
                  <a href={player.socials.steam} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    <FaSteam />
                  </a>
                )}
                {player.socials.twitter && (
                  <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    <FaTwitter />
                  </a>
                )}
                {player.socials.instagram && (
                  <a href={player.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    <FaInstagram />
                  </a>
                )}
                {player.socials.youtube && (
                  <a href={player.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    <FaYoutube />
                  </a>
                )}
                {player.socials.twitch && (
                  <a href={player.socials.twitch} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    <FaTwitch />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
