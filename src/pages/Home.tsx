import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import Blog from '../components/Blog';
import FeaturedService from '../components/FeaturedService';
import Hero from '../components/Hero';
import PageShell from '../components/PageShell';
import PricingCTA from '../components/PricingCTA';
import Projects from '../components/Projects';
import Services from '../components/Services';
import TrustSection from '../components/TrustSection';
import { homeContent } from '../data/siteContent';

export default function HomePage() {
  return (
    <PageShell>
      <Helmet>
        <title>{homeContent.metaTitle}</title>
        <meta name="description" content={homeContent.metaDescription} />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <FeaturedService />
      <Projects />
      <TrustSection />
      <PricingCTA />
      <Blog />
    </PageShell>
  );
}
