import { TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { homeContent } from '../data/siteContent';

export default function FeaturedService() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-[30px] md:rounded-[50px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-12 lg:p-20 text-white relative z-10">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                {homeContent.nfpaSchedule.eyebrow}
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6">
                NFPA96 - Compliant <br className="hidden md:block" /> Cleaning Schedule
              </h2>
              <p className="text-white/70 mb-8 text-base md:text-lg leading-relaxed">
                {homeContent.nfpaSchedule.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
                {homeContent.nfpaSchedule.items.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <div className="bg-secondary rounded-full p-1 shrink-0">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <span className="font-medium text-sm md:text-base">
                      {item.title} {item.sub} - {item.freq}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-3 rounded-2xl shrink-0">
                    <TrendingUp className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{homeContent.nfpaSchedule.statValue}</div>
                    <div className="text-xs text-white/50 uppercase font-bold tracking-widest">
                      {homeContent.nfpaSchedule.statLabel}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-amber-500 transition-all"
                >
                  {homeContent.nfpaSchedule.ctaLabel}
                </button>
              </div>
            </div>

            <div className="h-64 lg:h-auto relative">
              <img
                src={homeContent.nfpaSchedule.image}
                alt={homeContent.nfpaSchedule.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 lg:bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
