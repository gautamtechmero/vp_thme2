import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { homeContent, siteContact } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function TrustSection() {
  return (
    <section className="py-24 bg-industrial-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow={homeContent.certifications.eyebrow}
              title={homeContent.certifications.title}
              description={(homeContent.certifications as { description?: string }).description}
              align="left"
              className="mb-10"
            />

            <div className="grid sm:grid-cols-3 gap-4">
              {siteContact.compliance.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[28px] border border-slate-100 shadow-md p-6 text-center"
                >
                  <div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wider">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl relative z-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {homeContent.certifications.items.map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className={`bg-industrial-gray rounded-[28px] p-6 flex items-center justify-center ${
                      index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
                    }`}
                  >
                    <img src={imagePath} alt={`Certification ${index + 1}`} className="h-24 object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
