import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl?: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Eternal Fire Academy Returns with a Fresh CS2 Lineup',
    date: '13 January 2025',
    category: '#forEF',
    slug: 'eternal-fire-academy-returns-with-a-fresh-cs2-lineup',
  },
  {
    id: 2,
    title: 'Eternal Fire Returns to the Rift with a New League of Legends Roster',
    date: '12 January 2025',
    category: '#forEF',
    slug: 'eternal-fire-returns-to-the-rift-with-a-new-league-of-legends-roster',
  },
  {
    id: 3,
    title: 'Samet jottAAA Köklü Joins Eternal Fire Main Roster!',
    date: '2 January 2025',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2025/01/samet-jottaaa-koklu-joins-eternal-fire-main-roster-300x194.png',
    slug: 'samet-jottaaa-koklu-joins-eternal-fire-main-roster',
  },
  {
    id: 4,
    title: 'Buğra Calyx Arkın Moves to Eternal Fires Inactive Roster',
    date: '2 January 2025',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2025/01/bugra-calyx-arkin-moves-to-eternal-fires-inactive-rosterr-300x194.png',
    slug: 'bugra-calyx-arkin-moves-to-eternal-fires-inactive-roster',
  },
  {
    id: 5,
    title: 'Eternal Fire Competes at PUBG Global Championship: A Tough but Proud Run!',
    date: '18 December 2024',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2024/12/eternal-fire-competes-at-pubg-global-championship-a-tough-but-proud-run-300x194.png',
    slug: 'eternal-fire-competes-at-pubg-global-championship-a-tough-but-proud-run',
  },
  {
    id: 6,
    title: 'Eternal Fires Journey in Bangkok PGS 5&6!',
    date: '27 October 2024',
    category: '#forEF',
    imageUrl: 'https://ext.same-assets.com/3578314823/3554465180.png',
    slug: 'eternal-fires-journey-in-bangkok-pgs-56',
  },
  {
    id: 7,
    title: 'Eternal Fires New VALORANT Roster is Here!',
    date: '14 October 2024',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2024/10/eternal-fires-new-valorant-roster-is-here-300x194.png',
    slug: 'eternal-fires-new-valorant-roster-is-here',
  },
  {
    id: 8,
    title: 'Eternal Fire Secures Spot at PGS 5 & PGS 6!',
    date: '6 October 2024',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2024/10/eternal-fire-secures-spot-at-pgs-5-pgs-6-300x194.png',
    slug: 'eternal-fire-secures-spot-at-pgs-5-pgs-6',
  },
  {
    id: 9,
    title: 'Eternal Fires Memorable Run at ESL Pro League Season 20!',
    date: '21 September 2024',
    category: '#forEF',
    imageUrl: 'https://eternalfire.gg/wp-content/uploads/2024/09/eternal-fires-memorable-run-at-esl-pro-league-season-2-0-300x194.png',
    slug: 'eternal-fires-memorable-run-at-esl-pro-league-season-20',
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-[#15141a]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest News</h2>
            <Link href="/news" className="text-primary font-semibold hover:opacity-80 transition-opacity">
              ALL NEWS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link key={item.id} href={`/${item.slug}`} className="group">
                <div className="bg-[#1e1c25] rounded-sm overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
                  {item.imageUrl ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-[#252430] flex items-center justify-center">
                      <span className="text-primary text-lg font-bold">{item.category}</span>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="mb-2">
                      <Link href={`/category/${item.category.replace('#', '')}`} className="text-primary text-sm font-semibold hover:opacity-80">
                        {item.category}
                      </Link>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {item.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
