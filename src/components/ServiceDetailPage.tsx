import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { iconMap, type ServiceDetail } from '../data/siteContent';
import PageShell from './PageShell';
import SectionHeading from './SectionHeading';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const HeroBadgeIcon = iconMap[service.hero.badgeIcon];
  const CardIcon = iconMap[service.benefits.card.icon];

  return (
    <PageShell>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-industrial-gray">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/60 rounded-l-[100px] hidden lg:block" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              {service.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-primary mb-6 leading-[1.05]">
              {service.hero.titleLines[0]} <br />
              <span className="text-secondary">{service.hero.titleLines[1]}</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.hero.description}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-xl"
              >
                {service.hero.ctaLabel}
              </button>
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-primary px-5 py-4 rounded-full text-sm font-bold shadow-sm">
                <HeroBadgeIcon size={18} className="text-secondary" />
                {service.hero.badgeLabel}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img
                src={service.hero.image}
                alt={service.hero.imageAlt}
                className="w-full h-[380px] md:h-[520px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow={service.process.label}
            title={service.process.title}
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {service.process.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[32px] border border-slate-100 shadow-lg p-6 sm:p-8"
                >
                  <div className="bg-primary/5 text-primary p-4 rounded-2xl inline-flex mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary rounded-[30px] md:rounded-[50px] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 hidden lg:block" />
            <div className="grid lg:grid-cols-2 gap-0 items-stretch relative z-10">
              <div className="p-8 md:p-12 lg:p-20 text-white">
                <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                  {service.hero.eyebrow}
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8">
                  {service.benefits.title}
                </h2>
                <div className="space-y-6">
                  {service.benefits.items.map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="text-secondary font-bold text-lg shrink-0">0{index + 1}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 lg:p-20 flex items-center justify-center">
                <div className="bg-industrial-gray rounded-[40px] p-6 sm:p-8 md:p-10 border-2 border-slate-100 text-center max-w-lg w-full shadow-xl">
                  <div className="bg-secondary/20 text-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CardIcon size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.benefits.card.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{service.benefits.card.description}</p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg"
                  >
                    {service.benefits.card.ctaLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-gray">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading eyebrow="Common Questions" title="Common Questions" className="mb-12" />
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-bold text-primary">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-secondary transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index ? (
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed">{faq.answer}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
