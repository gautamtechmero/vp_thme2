import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { aboutPageContent, iconMap } from '../data/siteContent';
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
        description={aboutPageContent.description}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.02fr_0.98fr] gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src={aboutPageContent.intro.image}
                alt={aboutPageContent.intro.imageAlt}
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary p-6 rounded-full border-8 border-white shadow-2xl text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">{aboutPageContent.intro.badgeValue}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] pl-[0.24em]">
                {aboutPageContent.intro.badgeLabel}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              {aboutPageContent.intro.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              {aboutPageContent.intro.title}
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
              {aboutPageContent.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {aboutPageContent.intro.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-slate-100 bg-industrial-gray/70 px-5 py-6 shadow-sm"
                >
                  <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-primary leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-industrial-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              {aboutPageContent.associations.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              {aboutPageContent.associations.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-10">
              {aboutPageContent.associations.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {aboutPageContent.associations.items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-8"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-primary leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              {aboutPageContent.reasons.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              {aboutPageContent.reasons.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {aboutPageContent.reasons.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {aboutPageContent.reasons.items.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="bg-industrial-gray/70 rounded-[36px] border border-slate-100 shadow-lg p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-primary mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/12 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-2xl border border-white/10 p-8 md:p-12"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center mb-6">
                <Quote size={24} />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-secondary mb-4">
                {aboutPageContent.statement.label}
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
                {aboutPageContent.statement.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {aboutPageContent.statement.description}
              </p>
              <div className="mt-8 rounded-[28px] bg-industrial-gray/70 border border-slate-100 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary mb-1">
                  VP's Cleaning Service
                </p>
                <p className="text-sm font-semibold text-primary">{aboutPageContent.statement.note}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
