import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { iconMap, siteContact } from '../data/siteContent';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-white h-11 flex items-center px-4 hidden md:block relative z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-sm font-medium gap-6">
        <div className="flex items-center gap-6 min-w-0">
          <div className="flex items-center gap-2 text-secondary animate-pulse shrink-0">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span className="font-bold uppercase tracking-wider">{siteContact.status}</span>
          </div>
          <a
            href={siteContact.phoneHrefs[0]}
            className="flex items-center gap-2 hover:text-secondary transition-colors text-white/80 shrink-0"
          >
            <Phone size={14} className="text-secondary" />
            <span>{siteContact.phones[0]}</span>
          </a>
          <a
            href={siteContact.phoneHrefs[1]}
            className="flex items-center gap-2 hover:text-secondary transition-colors text-white/80 shrink-0"
          >
            <Phone size={14} className="text-secondary" />
            <span>{siteContact.phones[1]}</span>
          </a>
          <a
            href={siteContact.emailHref}
            className="flex items-center gap-2 hover:text-secondary transition-colors text-white/80 min-w-0"
          >
            <Mail size={14} className="text-secondary shrink-0" />
            <span className="truncate">{siteContact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            {siteContact.socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.href} aria-label={link.label}>
                  <Icon size={15} className="cursor-pointer hover:text-secondary transition-colors text-white/60" />
                </a>
              );
            })}
          </div>
          <Link
            to="/contact"
            className="hover:text-secondary transition-colors font-bold uppercase tracking-widest text-xs"
          >
            {siteContact.requestServiceLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
