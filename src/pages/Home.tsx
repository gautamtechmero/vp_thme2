import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import Blog from '../components/Blog';
import CompanyAbout from '../components/CompanyAbout';
import FeaturedService from '../components/FeaturedService';
import PageShell from '../components/PageShell';
import PricingCTA from '../components/PricingCTA';
import Projects from '../components/Projects';
import VideoHero from '../components/VideoHero';
// import Services from '../components/Services';
import { homeContent } from '../data/siteContent';

export default function HomePage() {
  return (
    <PageShell>
      <Helmet>
        <title>{homeContent.metaTitle}</title>
        <meta name="description" content={homeContent.metaDescription} />
      </Helmet>
      <VideoHero />
      <CompanyAbout />
      <About />
      <FeaturedService />
      <PricingCTA />
      <Projects />
      <Blog />
    </PageShell>
  );
}
