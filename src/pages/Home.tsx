import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { EmergingMarkets } from '../components/EmergingMarkets';
import { FeaturedServices } from '../components/FeaturedServices';
import { TechnologyAdvantage } from '../components/TechnologyAdvantage';
import { AISolutions as AISolutionsComponent } from '../components/AISolutions';
import { TrustedBy } from '../components/TrustedBy';
import { SolutionsSection } from '../components/SolutionsSection';
import { Solutions } from '../components/Solutions';
import { Registration } from '../components/Registration';
import { CallToAction } from '../components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EmergingMarkets />
        <TrustedBy />
        <SolutionsSection />
        <AISolutionsComponent />
        <Solutions />
        <FeaturedServices />
        <Registration />
        <TechnologyAdvantage />
        <CallToAction />
      </main>
      <Footer />
    </div>);

}