import { motion } from 'motion/react';
import { homeContent } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function HomeVideo() {
  return (
    <section className="py-24 bg-industrial-gray/45 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/12 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading
          eyebrow={homeContent.featuredVideo.eyebrow}
          title={homeContent.featuredVideo.title}
          description={homeContent.featuredVideo.description}
          className="mb-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-[40px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_30px_80px_rgba(0,51,102,0.14)] p-3 md:p-4">
            <div className="relative rounded-[30px] overflow-hidden border border-primary/10 bg-slate-950">
              <video
                className="w-full h-[280px] sm:h-[380px] lg:h-[560px] object-cover"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
              >
                <source src={homeContent.featuredVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
