interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClass = align === 'left' ? 'text-left max-w-2xl' : 'text-center max-w-2xl mx-auto';

  return (
    <div className={`${alignmentClass} ${className}`.trim()}>
      <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight">
        {title}
      </h2>
      {description ? <p className="text-slate-500 leading-relaxed">{description}</p> : null}
    </div>
  );
}
