import { motion } from 'motion/react';
import { iconMap, homeContent } from '../data/siteContent';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              {homeContent.whyChooseUs.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              {homeContent.whyChooseUs.title}
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {(homeContent.whyChooseUs as any).description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
              {homeContent.whyChooseUs.features.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="bg-industrial-gray p-3 rounded-2xl group-hover:bg-primary/10 transition-colors h-fit">
                      <Icon className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              {homeContent.certifications.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-8 leading-tight">
              {homeContent.certifications.title}
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {homeContent.certifications.items.map((imagePath, index) => (
                <div
                  key={imagePath}
                  className={`bg-industrial-gray rounded-[28px] p-6 flex items-center justify-center ${
                    index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
                  }`}
                >
                  <img
                    src={imagePath}
                    alt={`Certification ${index + 1}`}
                    className="h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
