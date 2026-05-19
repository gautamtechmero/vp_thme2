import { useNavigate } from 'react-router-dom';
import { homeContent, quoteRequestUrl } from '../data/siteContent';

export default function PricingCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[30px] md:rounded-[50px] p-8 md:p-16 lg:p-20 shadow-2xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              {homeContent.clientsPreview.eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              {homeContent.homeCta.title}
            </h2>
            <p className="text-slate-600 mb-4 text-lg">{homeContent.clientsPreview.description}</p>
            <p className="text-slate-600 mb-10 text-lg">{homeContent.homeCta.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer')}
                className="w-full sm:w-auto bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-slate-800 transition-all shadow-xl"
              >
                {homeContent.homeCta.primaryAction}
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-white border-2 border-primary text-primary font-bold px-10 py-5 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                {homeContent.homeCta.secondaryAction}
              </button>
            </div>
          </div>

          <div className="bg-industrial-gray rounded-[40px] p-6 sm:p-8 md:p-10 border-2 border-slate-100 relative">
            <div className="absolute -top-5 right-6 sm:right-10 bg-secondary text-primary text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg">
              {homeContent.clientsPreview.title}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">{homeContent.clientsPreview.title}</h3>
            <p className="text-slate-500 mb-8">{homeContent.clientsPreview.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 border-t border-slate-200 pt-8">
              {homeContent.clientsPreview.logos.map((logoPath, index) => (
                <div key={logoPath} className="bg-white rounded-full p-2 shadow-sm">
                  <img
                    src={logoPath}
                    alt={`Client Logo ${index + 1}`}
                    className="w-full aspect-square rounded-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/our-clients')}
              className="w-full bg-white border-2 border-primary text-primary font-bold py-4 rounded-full hover:bg-primary hover:text-white transition-all"
            >
              {homeContent.clientsPreview.actionLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
