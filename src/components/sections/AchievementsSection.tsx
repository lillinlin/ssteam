import Image from 'next/image';
import Link from 'next/link';

interface Achievement {
  id: number;
  name: string;
  imageUrl: string;
  category?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    name: 'Perfect World Shanghai Major 2024',
    imageUrl: 'https://ssteam.pages.dev/pw.png',
    category: 'CS2'
  },
  {
    id: 1,
    name: 'Perfect World Shanghai Major 2024',
    imageUrl: 'https://ssteam.pages.dev/pw.png',
    category: 'CS2'
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-[#1e1c25]">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            CHAMPIONSHIPS & <span className="text-primary">ACHIEVEMENTS</span>
          </h2>
          <Link href="/achievements" className="text-primary font-semibold hover:opacity-80 transition-opacity">
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="group">
              <div className="relative aspect-square overflow-hidden flex items-center justify-center p-4 rounded-full bg-gradient-to-b from-[#252430] to-[#15141a] hover:from-[#252430] hover:to-[#303744] transition-all duration-300 border border-[#303744]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={achievement.imageUrl}
                    alt={achievement.name}
                    width={100}
                    height={100}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-full bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-2">
                    <p className="text-primary text-xs font-bold">{achievement.category}</p>
                    <h3 className="text-white text-xs font-medium mt-1 line-clamp-2">
                      {achievement.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
