import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { aboutPageContent, serviceSummaries } from '../data/siteContent';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';

export default function AboutPage() {
  return (
    <PageShell>
      <Helmet>
        <title>{aboutPageContent.metaTitle}</title>
        <meta name="description" content={aboutPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={aboutPageContent.eyebrow}
        title={aboutPageContent.title}
        description={aboutPageContent.paragraphs[0]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12">
                <img
                  src={serviceSummaries[0].image}
                  alt={serviceSummaries[0].title}
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img
                  src={serviceSummaries[2].image}
                  alt={serviceSummaries[2].title}
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary p-6 rounded-full border-8 border-white shadow-2xl text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Years Exp</span>
            </div>
          </div>

          <div>
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              {aboutPageContent.eyebrow}
            </p>
            <p className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              {aboutPageContent.title}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">{aboutPageContent.paragraphs[1]}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {aboutPageContent.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[36px] shadow-lg border border-slate-100 p-10"
              >
                <h2 className="text-3xl font-display font-extrabold text-primary mb-6">{pillar.title}</h2>
                <p className="text-slate-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
