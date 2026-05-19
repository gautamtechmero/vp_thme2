import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quoteRequestUrl, siteContact } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-2xl shadow-lg">
                <img src={siteContact.logo} alt="VP's Cleaning Logo" className="h-10 object-contain" />
              </div>
              <span className="text-2xl font-display font-bold">
                VP's<span className="text-secondary">Cleaning</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">{siteContact.footerDescription}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-secondary pl-4">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl h-fit">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div className="text-white/60 space-y-2">
                  {siteContact.locations.map((location) => (
                    <div key={location}>{location}</div>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl h-fit">
                  <Phone size={20} className="text-secondary" />
                </div>
                <div className="text-white/60 space-y-2">
                  <a href={siteContact.phoneHrefs[0]} className="block hover:text-secondary transition-colors">
                    {siteContact.phones[0]}
                  </a>
                  <a href={siteContact.phoneHrefs[1]} className="block hover:text-secondary transition-colors">
                    {siteContact.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl h-fit">
                  <Mail size={20} className="text-secondary" />
                </div>
                <a href={siteContact.emailHref} className="text-white/60 hover:text-secondary transition-colors">
                  {siteContact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-secondary pl-4">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link to="/" className="hover:text-secondary hover:translate-x-2 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary hover:translate-x-2 transition-all inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary hover:translate-x-2 transition-all inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary hover:translate-x-2 transition-all inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-secondary pl-4">Compliance</h4>
            <ul className="space-y-4 text-white/60">
              {siteContact.compliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-[40px] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-2">Ready to schedule a cleaning or need a free quote?</h3>
            <p className="text-white/60">Reach out to our team today.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <button
              onClick={() => window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer')}
              className="bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-amber-500 transition-all whitespace-nowrap"
            >
              Get Free Quote
            </button>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/20 rounded-full px-8 py-4 text-center whitespace-nowrap hover:border-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>{siteContact.copyright}</p>
          <p>{siteContact.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
