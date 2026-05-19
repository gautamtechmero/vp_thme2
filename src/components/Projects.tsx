import { motion } from 'motion/react';
import { homeContent } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow={homeContent.transformations.eyebrow}
          title={homeContent.transformations.title}
          description={homeContent.transformations.description}
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {homeContent.transformations.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[40px] shadow-xl"
            >
              <img
                src={item.before}
                alt={`${item.title} before`}
                className="w-full h-[320px] md:h-[400px] object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src={item.after}
                alt={`${item.title} after`}
                className="absolute inset-0 w-full h-[320px] md:h-[400px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">Before / After</span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/80 font-medium">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
