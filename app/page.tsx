import { HeroSection } from '@/components/sections/HeroSection';
import { QuickLinks } from '@/components/layout/QuickLinks';
import { Announcements } from '@/components/sections/Announcements';
import { EventsNews } from '@/components/sections/EventsNews';
import { Showcase } from '@/components/sections/Showcase';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <Announcements />
      <EventsNews />
      <Showcase />
    </>
  );
}
