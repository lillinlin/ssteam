import HeroSection from '@/components/sections/HeroSection';
import TeamsSection from '@/components/sections/TeamsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15141a]">
      <HeroSection />
      <NewsSection />
      <TeamsSection />
      <VideoSection />
      <AchievementsSection />
    </main>
  );
}
