import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { ourClientsPageContent } from '../data/siteContent';

export default function OurClientsPage() {
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  return (
    <PageShell>
      <Helmet>
        <title>{ourClientsPageContent.metaTitle}</title>
        <meta name="description" content={ourClientsPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={ourClientsPageContent.eyebrow}
        title={ourClientsPageContent.title}
        description={ourClientsPageContent.description}
        theme="primary"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-12 text-center">
            {ourClientsPageContent.gridEyebrow}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center">
            {ourClientsPageContent.logos.slice(0, visibleCount).map((logo, index) => (
              <div key={logo} className="bg-white rounded-full p-2 shadow-md border border-slate-100 w-full max-w-[180px]">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-full aspect-square object-cover rounded-full hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          {visibleCount < ourClientsPageContent.logos.length ? (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount((count) => count + 5)}
                className="w-full sm:w-auto px-10 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all"
              >
                More Clients
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-24 bg-secondary text-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-6">
            {ourClientsPageContent.ctaEyebrow}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-10">
            {ourClientsPageContent.ctaTitle}
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-10 py-5 bg-secondary text-[#111827] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-secondary/20 hover:bg-[#d5ee96] transition-all"
          >
            {ourClientsPageContent.ctaAction}
          </button>
        </div>
      </section>
    </PageShell>
  );
}
