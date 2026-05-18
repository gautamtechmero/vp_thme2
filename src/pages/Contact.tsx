import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { contactPageContent, siteContact } from '../data/siteContent';

export default function ContactPage() {
  return (
    <PageShell>
      <Helmet>
        <title>{contactPageContent.metaTitle}</title>
        <meta name="description" content={contactPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={contactPageContent.eyebrow}
        title={contactPageContent.title}
        description={contactPageContent.description}
        theme="primary"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">
              {contactPageContent.formTitle}
            </div>
            <ContactForm />
          </div>

          <div className="bg-primary rounded-[40px] shadow-xl p-8 md:p-12 text-white">
            <div className="text-[11px] font-bold uppercase tracking-widest text-secondary mb-8">
              {contactPageContent.infoTitle}
            </div>
            <div className="space-y-10">
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Call Us</div>
                <div className="space-y-4">
                  <a href={siteContact.phoneHrefs[0]} className="flex items-center gap-4 text-2xl font-display font-bold hover:text-secondary transition-colors">
                    <Phone size={22} className="text-secondary" />
                    {siteContact.phones[0]}
                  </a>
                  <a href={siteContact.phoneHrefs[1]} className="flex items-center gap-4 text-2xl font-display font-bold hover:text-secondary transition-colors">
                    <Phone size={22} className="text-secondary" />
                    {siteContact.phones[1]}
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Email Us</div>
                <a href={siteContact.emailHref} className="flex items-center gap-4 text-2xl font-display font-bold hover:text-secondary transition-colors">
                  <Mail size={22} className="text-secondary" />
                  {siteContact.email}
                </a>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Locations</div>
                <div className="space-y-4">
                  {siteContact.locations.map((location) => (
                    <div key={location} className="flex items-start gap-4 text-lg font-semibold text-white/80">
                      <MapPin size={20} className="text-secondary mt-1 shrink-0" />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
