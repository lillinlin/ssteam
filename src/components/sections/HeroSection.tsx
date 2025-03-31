import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#15141a] to-transparent z-20"></div>
        <Image
          src="https://ext.same-assets.com/0/1689242360.svg"
          alt="Eternal Fire Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-30 flex flex-col justify-center h-full text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to the official website of <span className="text-primary">Eternal Fire</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Eternal Fire aims to expand its success to new horizons in 2025 with plans to build new teams across a wide range of games.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/teams" className="btn-primary">
              Meet Our Teams
            </Link>
            <Link href="/about-us" className="px-6 py-2 border border-white/30 text-white font-bold rounded-sm hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
