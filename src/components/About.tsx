import { motion } from 'motion/react';
import { iconMap, homeContent } from '../data/siteContent';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          <div className="md:col-span-2 bg-industrial-gray rounded-[32px] p-6 flex items-center justify-center text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] leading-relaxed text-slate-500">
              {homeContent.credibilityBar.intro}
            </p>
          </div>
          {homeContent.credibilityBar.items.map((item) => (
            <div
              key={item}
              className="bg-white rounded-[32px] border border-slate-100 shadow-lg px-6 py-8 flex items-center justify-center text-center"
            >
              <span className="text-base font-extrabold tracking-tight uppercase text-primary leading-tight">
                {item}
              </span>
            </div>
          ))}
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
