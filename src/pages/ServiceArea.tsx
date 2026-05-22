import { Helmet } from 'react-helmet-async';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { serviceAreaPageContent } from '../data/siteContent';

const serviceMapCenter = {
  lat: 47,
  lng: -88.8,
};

const defaultServiceMapSize = {
  width: 1280,
  height: 640,
};

const labelPlacementClasses = {
  right: 'left-7 top-1/2 -translate-y-1/2',
  left: 'right-7 top-1/2 -translate-y-1/2',
  top: 'left-1/2 bottom-7 -translate-x-1/2',
  bottom: 'left-1/2 top-7 -translate-x-1/2',
};

const serviceCityPins = [
  { city: 'Winnipeg', province: 'Manitoba', lat: 49.8951, lng: -97.1384, label: 'right' },
  { city: 'Kenora', province: 'Ontario', lat: 49.767, lng: -94.4894, label: 'top' },
  { city: 'Dryden', province: 'Ontario', lat: 49.7801, lng: -92.837, label: 'right' },
  { city: 'Fort Frances', province: 'Ontario', lat: 48.609, lng: -93.4003, label: 'bottom' },
  { city: 'Thunder Bay', province: 'Ontario', lat: 48.3809, lng: -89.2477, label: 'bottom' },
  { city: 'Kapuskasing', province: 'Ontario', lat: 49.4169, lng: -82.4331, label: 'top' },
  { city: 'Timmins', province: 'Ontario', lat: 48.4758, lng: -81.3305, label: 'right' },
  { city: 'Sault Ste Marie', province: 'Ontario', lat: 46.5219, lng: -84.3461, label: 'left' },
  { city: 'Sudbury', province: 'Ontario', lat: 46.4917, lng: -80.993, label: 'left' },
  { city: 'North Bay', province: 'Ontario', lat: 46.3091, lng: -79.4608, label: 'right' },
  { city: 'Barrie', province: 'Ontario', lat: 44.3894, lng: -79.6903, label: 'left' },
  { city: 'Hamilton', province: 'Ontario', lat: 43.2557, lng: -79.8711, label: 'left' },
] as const;

function getServiceMapZoom(width: number) {
  if (width < 640) return 4;
  if (width < 1024) return 5;
  return 6;
}

function getGoogleServiceMapUrl(zoom: number) {
  const params = new URLSearchParams({
    ll: `${serviceMapCenter.lat},${serviceMapCenter.lng}`,
    z: `${zoom}`,
    t: 'm',
    hl: 'en',
    output: 'embed',
  });

  return `https://maps.google.com/maps?${params.toString()}`;
}

function projectServicePin(
  lat: number,
  lng: number,
  mapSize: { width: number; height: number },
  zoom: number,
) {
  const point = projectMapPoint(lat, lng);
  const center = projectMapPoint(serviceMapCenter.lat, serviceMapCenter.lng);
  const scale = 256 * 2 ** zoom;

  return {
    left: (((point.x - center.x) * scale + mapSize.width / 2) / mapSize.width) * 100,
    top: (((point.y - center.y) * scale + mapSize.height / 2) / mapSize.height) * 100,
  };
}

function projectMapPoint(lat: number, lng: number) {
  const sinLat = Math.sin((lat * Math.PI) / 180);

  return {
    x: (lng + 180) / 360,
    y: 0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI),
  };
}

export default function ServiceAreaPage() {
  const navigate = useNavigate();
  const mapFrameRef = useRef<HTMLDivElement>(null);
  const [mapSize, setMapSize] = useState(defaultServiceMapSize);
  const mapZoom = getServiceMapZoom(mapSize.width);
  const googleServiceMapUrl = getGoogleServiceMapUrl(mapZoom);

  useEffect(() => {
    const mapFrame = mapFrameRef.current;
    if (!mapFrame) return;

    const updateMapSize = () => {
      const { width, height } = mapFrame.getBoundingClientRect();

      if (width > 0 && height > 0) {
        setMapSize({ width, height });
      }
    };

    updateMapSize();

    const resizeObserver = new ResizeObserver(updateMapSize);
    resizeObserver.observe(mapFrame);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <PageShell>
      <Helmet>
        <title>{serviceAreaPageContent.metaTitle}</title>
        <meta name="description" content={serviceAreaPageContent.metaDescription} />
      </Helmet>

      <PageHeader
        eyebrow={serviceAreaPageContent.eyebrow}
        title={serviceAreaPageContent.title}
        description={serviceAreaPageContent.description}
        theme="primary"
      />

      {/* Regional Hubs Section */}
      <section className="py-24 bg-industrial-gray/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              Regional Operations
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              Our Main Offices & Hubs
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We operate three strategic hubs across Ontario to guarantee rapid response times, local availability, and expert onsite support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {serviceAreaPageContent.hubs.map((hub, index) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[36px] overflow-hidden shadow-xl border border-slate-100/80 flex flex-col group h-full"
              >

                <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-black text-primary mb-4 tracking-tight leading-snug">
                    {hub.name}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {hub.description}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-3.5 text-sm font-semibold text-slate-600">
                      <MapPin size={18} className="text-secondary shrink-0" />
                      <span className="uppercase tracking-wide text-xs">Ontario, Canada</span>
                    </div>
                    <a
                      href={`tel:${hub.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
                    >
                      <Phone size={18} className="text-secondary shrink-0" />
                      <span>{hub.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapped Service Areas Section */}
      <section className="py-24 bg-industrial-gray/40 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              Complete Coverage
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
              All Service Areas
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We proudly provide high-volume restaurant maintenance, commercial exhaust cleaning, and industrial hood deep-cleaning to businesses in the following cities and regions:
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <div
              ref={mapFrameRef}
              className="relative min-h-[420px] overflow-hidden bg-[#dbe5d2] md:min-h-[560px]"
            >
              <iframe
                title="Google map showing VPSClean service coverage across Ontario and Manitoba"
                src={googleServiceMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none absolute inset-0 h-full w-full border-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-primary/10" />

              {serviceCityPins.map((pin, index) => {
                const position = projectServicePin(pin.lat, pin.lng, mapSize, mapZoom);
                return (
                  <motion.button
                    key={pin.city}
                    type="button"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.08 }}
                    onClick={() => navigate('/contact')}
                    className="absolute z-30 -translate-x-1/2 -translate-y-full group"
                    style={{ left: `${position.left}%`, top: `${position.top}%` }}
                    aria-label={`Request service in ${pin.city}`}
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center text-red-600 drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] transition-colors group-hover:text-red-700">
                      <MapPin size={34} strokeWidth={3} />
                    </span>
                    <span
                      className={`pointer-events-none absolute whitespace-nowrap rounded-full border border-red-500/30 bg-primary/90 px-3 py-1.5 text-[11px] font-bold text-white opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${labelPlacementClasses[pin.label]}`}
                    >
                      {pin.city}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-[11px] font-bold uppercase tracking-widest mb-6">
            {serviceAreaPageContent.ctaEyebrow}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-10 leading-tight">
            {serviceAreaPageContent.ctaTitle}
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-10 py-5 bg-secondary text-[#111827] font-bold uppercase tracking-widest rounded-full hover:bg-[#d5ee96] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-secondary/20"
          >
            {serviceAreaPageContent.ctaAction}
          </button>
        </div>
      </section>
    </PageShell>
  );
}
