import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { serviceAreaPageContent } from '../data/siteContent';

export default function ServiceAreaPage() {
  const navigate = useNavigate();

  return (
    <PageShell>
      <Helmet>
        <title>{serviceAreaPageContent.metaTitle}</title>
        <meta name="description" content={serviceAreaPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={serviceAreaPageContent.eyebrow}
        title={serviceAreaPageContent.title}
        description={serviceAreaPageContent.description}
        theme="primary"
      />

      {/* Regional Hubs Section */}
      <section className="py-24 bg-industrial-gray/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              Regional Operations
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              Our Main Offices & Hubs
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We operate three strategic hubs across Ontario to guarantee rapid response times, local availability, and expert onsite support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {serviceAreaPageContent.hubs.map((hub, index) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[36px] overflow-hidden shadow-xl border border-slate-100/80 flex flex-col group h-full"
              >

                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-black text-primary mb-4 tracking-tight leading-snug">
                    {hub.name}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {hub.description}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-3.5 text-sm font-semibold text-slate-600">
                      <MapPin size={18} className="text-secondary shrink-0" />
                      <span className="uppercase tracking-wide text-xs">Ontario, Canada</span>
                    </div>
                    <a
                      href={`tel:${hub.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
                    >
                      <Phone size={18} className="text-secondary shrink-0" />
                      <span>{hub.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capsule Service Areas Grid Section */}
      <section className="py-24 bg-white relative">
        {/* Soft decorative background element */}
        <div className="absolute inset-0 bg-[#fbfbf9]/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              Complete Coverage
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              All Service Areas
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We proudly provide high-volume restaurant maintenance, commercial exhaust cleaning, and industrial hood deep-cleaning to businesses in the following cities and regions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceAreaPageContent.cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                className={`bg-white rounded-full py-5 px-8 shadow-sm border border-slate-100 flex items-center justify-center gap-3 transition-all duration-300 group cursor-pointer hover:border-secondary/40 ${
                  city === 'Across Ontario' ? 'md:col-span-2 lg:col-span-3 w-full md:max-w-sm justify-self-center' : ''
                }`}
                onClick={() => navigate('/contact')}
              >
                <ChevronRight
                  size={18}
                  className="text-slate-400 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300"
                />
                <span className="relative pb-1.5 font-display font-bold text-slate-700 group-hover:text-primary transition-colors text-base tracking-wide">
                  {city}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-800/80 group-hover:bg-secondary group-hover:w-full transition-all duration-300" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-[11px] font-bold uppercase tracking-widest mb-6">
            {serviceAreaPageContent.ctaEyebrow}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-10 leading-tight">
            {serviceAreaPageContent.ctaTitle}
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-white text-primary font-bold uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/5"
          >
            {serviceAreaPageContent.ctaAction}
          </button>
        </div>
      </section>
    </PageShell>
  );
}
