import { motion } from 'motion/react';
import { iconMap, homeContent } from '../data/siteContent';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[36px] overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)] bg-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.8fr_repeat(4,minmax(0,1fr))]">
            <div className="px-6 py-8 md:px-8 md:py-10 border-b md:border-b-0 md:border-r border-slate-200 bg-industrial-gray/60 flex items-center justify-center md:justify-start text-center md:text-left min-h-[132px]">
              <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.24em] leading-relaxed text-slate-500 max-w-xs md:max-w-none">
                {homeContent.credibilityBar.intro}
              </p>
            </div>

            {homeContent.credibilityBar.items.map((item, index) => (
              <div
                key={item}
                className={`px-6 py-8 md:px-6 md:py-10 flex items-center justify-center text-center min-h-[132px] border-b border-slate-200 md:border-b-0 ${
                  index !== homeContent.credibilityBar.items.length - 1 ? 'md:border-r' : ''
                }`}
              >
                <span className="text-base md:text-lg font-extrabold tracking-tight uppercase text-primary leading-tight max-w-[12rem]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12">
                <img
                  src={homeContent.whyChooseUs.images[0]}
                  alt="Office cleaning service"
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img
                  src={homeContent.whyChooseUs.images[1]}
                  alt="Equipment maintenance service"
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary p-6 rounded-full border-8 border-white shadow-2xl text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">{homeContent.whyChooseUs.badgeValue}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {homeContent.whyChooseUs.badgeLabel}
              </span>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
