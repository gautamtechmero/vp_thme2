import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { homeContent, quoteRequestUrl } from '../data/siteContent';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-gray rounded-l-[100px] hidden lg:block" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900/30 to-transparent z-[1] hidden md:block" />
        <div className="absolute inset-0 bg-white/60 lg:hidden z-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {homeContent.hero.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary leading-[1.05] mb-4">
            {homeContent.hero.title}
          </h1>
          {homeContent.hero.subtitle ? (
            <p className="text-xl md:text-2xl font-display font-bold text-secondary mb-5">
              {homeContent.hero.subtitle}
            </p>
          ) : null}
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {homeContent.hero.description}
          </p>

          {homeContent.hero.announcementText ? (
            <div className="mb-8 max-w-2xl mx-auto lg:mx-0 rounded-[28px] border border-secondary/30 bg-white/90 px-5 py-4 shadow-lg shadow-slate-200/60">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-secondary mb-2">
                {homeContent.hero.announcementLabel}
              </p>
              <p className="text-base font-semibold leading-relaxed text-primary">
                {homeContent.hero.announcementText}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <button
              onClick={() => window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer')}
              className="w-full sm:w-auto justify-center bg-primary hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1"
            >
              {homeContent.hero.primaryAction} <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto justify-center bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-full flex items-center gap-2 border-2 border-slate-100 transition-all shadow-sm"
            >
              <div className="bg-primary/10 p-1.5 rounded-full">
                <ArrowRight size={16} />
              </div>
              {homeContent.hero.secondaryAction}
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8 flex-wrap">
            {homeContent.hero.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-sm font-semibold text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-xl mx-auto lg:max-w-none"
        >
          <div className="relative z-10 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
            <img
              src={homeContent.hero.image}
              alt={homeContent.hero.imageAlt}
              className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 z-20 glass-card p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4"
          >
            <div className="bg-secondary p-3 rounded-xl">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{homeContent.hero.statValue}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {homeContent.hero.statLabel}
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 right-0 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.05,118.5,123.5,124.5,188.5,114.6Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
