import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { homeContent, quoteRequestUrl } from '../data/siteContent';

export default function VideoHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={homeContent.featuredVideo.src}
        poster={homeContent.featuredVideo.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/20 to-primary/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-48 pb-20 text-center sm:px-8 sm:pt-56 sm:pb-24 lg:pt-64 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            {homeContent.hero.eyebrow}
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-display font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {homeContent.hero.title}
          </h1>

          {homeContent.hero.subtitle ? (
            <p className="mb-5 text-xl font-display font-bold text-secondary md:text-2xl">
              {homeContent.hero.subtitle}
            </p>
          ) : null}

          <div className="mx-auto mb-8 max-w-3xl rounded-[28px] border border-secondary/45 bg-primary/65 px-5 py-4 shadow-2xl backdrop-blur-md sm:px-8 sm:py-5">
            <p className="text-base font-semibold leading-relaxed text-white sm:text-lg">
              {homeContent.hero.description}
            </p>
          </div>

          {homeContent.hero.announcementText ? (
            <div className="mb-8 max-w-2xl rounded-[28px] border border-secondary/30 bg-primary/60 px-5 py-4 shadow-2xl backdrop-blur-md">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-secondary">
                {homeContent.hero.announcementLabel}
              </p>
              <p className="text-base font-semibold leading-relaxed text-white">
                {homeContent.hero.announcementText}
              </p>
            </div>
          ) : null}

          <div className="mb-10 flex w-full flex-col flex-wrap justify-center gap-4 sm:w-auto sm:flex-row">
            <button
              onClick={() => window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer')}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 font-bold text-[#111827] shadow-xl shadow-secondary/20 transition-all hover:bg-[#d5ee96] sm:w-auto"
            >
              {homeContent.hero.primaryAction} <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white shadow-sm backdrop-blur-md transition-all hover:border-secondary hover:text-secondary sm:w-auto"
            >
              <ArrowRight size={18} />
              {homeContent.hero.secondaryAction}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {homeContent.hero.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/75">
                <CheckCircle2 className="text-accent" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
