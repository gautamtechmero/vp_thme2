import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { homeContent } from '../data/siteContent';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const projects = homeContent.transformations.items;
  const activeProject = projects[activeIndex];

  const moveProject = (direction: 'previous' | 'next') => {
    setActiveIndex((currentIndex) => {
      if (direction === 'previous') {
        return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
      }

      return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    });
    setSliderPosition(50);
  };

  const updateSliderPosition = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = ((event.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(95, Math.max(5, position)));
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow={homeContent.transformations.eyebrow}
          title={homeContent.transformations.title}
          description={homeContent.transformations.description}
          className="mb-16"
        />

        <motion.div
          key={activeProject.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-[40px] shadow-2xl select-none touch-none"
            role="slider"
            aria-label={`${activeProject.title} before and after comparison`}
            aria-valuemin={5}
            aria-valuemax={95}
            aria-valuenow={Math.round(sliderPosition)}
            tabIndex={0}
            onPointerDown={(event) => {
              setIsDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
              updateSliderPosition(event);
            }}
            onPointerMove={(event) => {
              if (isDragging) {
                updateSliderPosition(event);
              }
            }}
            onPointerUp={() => setIsDragging(false)}
            onPointerCancel={() => setIsDragging(false)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                setSliderPosition((position) => Math.max(5, position - 5));
              }
              if (event.key === 'ArrowRight') {
                setSliderPosition((position) => Math.min(95, position + 5));
              }
            }}
          >
            <img
              src={activeProject.after}
              alt={`${activeProject.title} after`}
              className="w-full h-[360px] md:h-[560px] object-cover"
              draggable={false}
            />
            <img
              src={activeProject.before}
              alt={`${activeProject.title} before`}
              className="absolute inset-0 h-[360px] md:h-[560px] w-full object-cover"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              draggable={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-0 bottom-0 z-20 -translate-x-1/2" style={{ left: `${sliderPosition}%` }}>
              <div className="h-full w-1 bg-white shadow-[0_0_24px_rgba(0,0,0,0.35)]" />
              <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-2xl">
                <ChevronLeft size={18} />
                <ChevronRight size={18} />
              </div>
            </div>

            <div className="absolute top-5 left-5 z-10 rounded-full bg-primary/85 px-5 py-2 text-xs font-black uppercase tracking-widest text-white">
              Before
            </div>
            <div className="absolute top-5 right-5 z-10 rounded-full bg-primary/85 px-5 py-2 text-xs font-black uppercase tracking-widest text-white">
              After
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-2 block">
                Before / After
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">{activeProject.title}</h3>
              <p className="text-white/80 font-medium">{activeProject.subtitle}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => moveProject('previous')}
            className="absolute left-3 md:-left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all hover:bg-slate-800"
            aria-label="Show previous transformation"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => moveProject('next')}
            className="absolute right-3 md:-right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all hover:bg-slate-800"
            aria-label="Show next transformation"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-10 bg-secondary' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Show ${project.title}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
