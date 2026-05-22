import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const aboutPoints = [
  'Provides comprehensive cleaning services and grease containment products for restaurants and commercial kitchens.',
  'Employees are fully insured and bonded, ensuring reliable and professional service.',
  'Helps clients stay NFPA compliant, promoting fire safety in commercial kitchens.',
  'Encourages tailored cleaning solutions and kitchen safety measures that go beyond standard practices.',
];

export default function CompanyAbout() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border-4 sm:border-8 border-white shadow-2xl">
              <img
                src="/img/servicesimg/hero.webp"
                alt="VP's Cleaning Service team"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              About VP's Cleaning
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
              Kitchen Safety Starts With Professional Cleaning
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              VP's Cleaning Service specializes in kitchen hood and exhaust cleaning services and rooftop grease
              containment products with over 10 years of experience in the restaurant business in Thunder Bay.
            </p>

            <div className="space-y-4 text-left">
              {aboutPoints.map((point) => (
                <div key={point} className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
                  <p className="text-slate-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
