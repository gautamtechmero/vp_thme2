import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { homeContent } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function Services() {
  const [activePath, setActivePath] = useState(homeContent.servicesPreview.items[0]?.path ?? '');
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-industrial-gray relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow={homeContent.servicesPreview.eyebrow}
            title={homeContent.servicesPreview.title}
            description={(homeContent.servicesPreview as any).description}
            align="left"
            className="mb-0"
          />
          <button
            onClick={() => navigate('/services')}
            className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all whitespace-nowrap"
          >
            {homeContent.servicesPreview.actionLabel}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.servicesPreview.items.map((service) => (
            <motion.button
              key={service.path}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setActivePath(service.path)}
              onClick={() => navigate(service.path)}
              className={`text-left cursor-pointer rounded-[32px] overflow-hidden transition-all duration-300 border ${
                activePath === service.path
                  ? 'bg-primary text-white shadow-2xl shadow-primary/20 border-primary'
                  : 'bg-white text-slate-700 border-slate-100 hover:shadow-xl'
              }`}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-secondary">
                  {service.title}
                </div>
                <p
                  className={`leading-relaxed ${
                    activePath === service.path ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
