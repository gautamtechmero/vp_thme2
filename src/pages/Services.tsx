import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { serviceSummaries, servicesPageContent } from '../data/siteContent';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <PageShell>
      <Helmet>
        <title>{servicesPageContent.metaTitle}</title>
        <meta name="description" content={servicesPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={servicesPageContent.eyebrow}
        title={servicesPageContent.title}
        description={servicesPageContent.description}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {serviceSummaries.map((service, index) => (
            <motion.button
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(service.path)}
              className="text-left bg-white rounded-[40px] overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-4">
                  Service 0{index + 1}
                </div>
                <h2 className="text-3xl font-display font-extrabold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-600">
                      <div className="w-4 h-[1px] bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[40px] shadow-2xl px-8 py-16 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              {servicesPageContent.cta.title}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {servicesPageContent.cta.description}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-slate-800 transition-all shadow-xl"
            >
              {servicesPageContent.cta.actionLabel}
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
