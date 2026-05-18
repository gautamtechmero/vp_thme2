import { motion } from 'motion/react';
import { homeContent } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading eyebrow={homeContent.process.eyebrow} title={homeContent.process.title} className="mb-16" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {homeContent.process.steps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-lg border border-slate-100 p-8"
            >
              <div className="w-16 h-16 rounded-3xl bg-primary/5 text-primary font-display font-extrabold text-2xl flex items-center justify-center mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
