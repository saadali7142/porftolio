import About from '@/components/ui/HomeScreen/About';
import Hero from '@/components/ui/HomeScreen/Hero';
import Reviews from '@/components/ui/HomeScreen/Reviews';
import Work from '@/components/ui/HomeScreen/Work';
import Services from '@/components/ui/Services/Services';
import Cta from '@/components/ui/shared/Cta';

export default function Home() {
  return (
    <main>
      {' '}
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
