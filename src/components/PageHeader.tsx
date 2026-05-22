import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  theme?: 'light' | 'primary';
  children?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  theme = 'light',
  children,
}: PageHeaderProps) {
  const isPrimary = theme === 'primary';

  return (
    <section
      className={`relative overflow-hidden pt-48 pb-16 sm:pt-56 sm:pb-20 lg:pt-64 lg:pb-24 ${
        isPrimary ? 'bg-primary text-white' : 'bg-industrial-gray text-slate-900'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[100px] hidden lg:block" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-5 block">
            {eyebrow}
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-6 ${
              isPrimary ? 'text-white' : 'text-primary'
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed ${
              isPrimary ? 'text-white/75' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
          {children ? <div className="mt-10">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}
