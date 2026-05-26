import { Helmet } from 'react-helmet-async';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import type { Map as LeafletMap } from 'leaflet';
import { MapPin, Maximize2, Phone } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import PageHeader from '../components/PageHeader';
import PageShell from '../components/PageShell';
import { serviceAreaPageContent } from '../data/siteContent';

const serviceMapCenter = {
  lat: 47,
  lng: -88.8,
};

const serviceMapZoom = 5;
const openStreetMapExternalUrl = `https://www.openstreetmap.org/#map=${serviceMapZoom}/${serviceMapCenter.lat}/${serviceMapCenter.lng}`;

type ServiceMapStatus = 'loading' | 'ready' | 'error';

const serviceCityPins = [
  { city: 'Winnipeg', province: 'Manitoba', lat: 49.8951, lng: -97.1384 },
  { city: 'Kenora', province: 'Ontario', lat: 49.767, lng: -94.4894 },
  { city: 'Dryden', province: 'Ontario', lat: 49.7801, lng: -92.837 },
  { city: 'Fort Frances', province: 'Ontario', lat: 48.609, lng: -93.4003 },
  { city: 'Thunder Bay', province: 'Ontario', lat: 48.3809, lng: -89.2477 },
  { city: 'Kapuskasing', province: 'Ontario', lat: 49.4169, lng: -82.4331 },
  { city: 'Timmins', province: 'Ontario', lat: 48.4758, lng: -81.3305 },
  { city: 'Sault Ste Marie', province: 'Ontario', lat: 46.5219, lng: -84.3461 },
  { city: 'Sudbury', province: 'Ontario', lat: 46.4917, lng: -80.993 },
  { city: 'North Bay', province: 'Ontario', lat: 46.3091, lng: -79.4608 },
  { city: 'Barrie', province: 'Ontario', lat: 44.3894, lng: -79.6903 },
  { city: 'Hamilton', province: 'Ontario', lat: 43.2557, lng: -79.8711 },
] as const;

function createServiceMarkerIcon() {
  return L.divIcon({
    className: 'vps-service-map-marker',
    html: '<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30"><path fill="#dc2626" stroke="#ffffff" stroke-width="1.5" d="M11 1.2c-5.1 0-9.2 4.1-9.2 9.2 0 6.9 9.2 18.4 9.2 18.4s9.2-11.5 9.2-18.4c0-5.1-4.1-9.2-9.2-9.2Z"/><circle cx="11" cy="10.4" r="3.2" fill="#ffffff"/></svg>',
    iconSize: [22, 30],
    iconAnchor: [11, 30],
    popupAnchor: [0, -30],
    tooltipAnchor: [0, -30],
  });
}

export default function ServiceAreaPage() {
  const navigate = useNavigate();
  const mapFrameRef = useRef<HTMLDivElement>(null);
  const mapShellRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);
  const [mapStatus, setMapStatus] = useState<ServiceMapStatus>('loading');

  useEffect(() => {
    const mapFrame = mapFrameRef.current;
    if (!mapFrame) return;

    let isMounted = true;
    setMapStatus('loading');

    const map = L.map(mapFrame, {
      center: [serviceMapCenter.lat, serviceMapCenter.lng],
      zoom: serviceMapZoom,
      zoomControl: true,
      scrollWheelZoom: true,
    });
    leafletMapRef.current = map;

    const streetTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    });
    const humanitarianTiles = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors, Tiles style by HOT',
    });
    const handleTileError = () => {
      if (isMounted) setMapStatus('error');
    };

    streetTiles.on('tileerror', handleTileError);
    humanitarianTiles.on('tileerror', handleTileError);
    streetTiles.addTo(map);

    L.control
      .layers(
        {
          'Street map': streetTiles,
          'Humanitarian map': humanitarianTiles,
        },
        undefined,
        { collapsed: true, position: 'topright' },
      )
      .addTo(map);
    L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

    const markerIcon = createServiceMarkerIcon();
    const markerBounds = L.latLngBounds(
      serviceCityPins.map((pin) => [pin.lat, pin.lng] as [number, number]),
    );

    serviceCityPins.forEach((pin) => {
      const marker = L.marker([pin.lat, pin.lng], {
        icon: markerIcon,
        riseOnHover: true,
        title: `${pin.city}, ${pin.province}`,
      }).addTo(map);

      marker.bindTooltip(pin.city, {
        direction: 'top',
        offset: L.point(0, -30),
        opacity: 1,
        className: 'vps-service-map-tooltip',
      });
      marker.on('click', () => marker.openTooltip());
    });

    map.fitBounds(markerBounds, {
      padding: [44, 44],
      maxZoom: serviceMapZoom,
    });
    map.whenReady(() => {
      if (isMounted) setMapStatus('ready');
    });

    return () => {
      isMounted = false;
      leafletMapRef.current = null;
      map.remove();
    };
  }, []);

  const openMapFullscreen = () => {
    const mapShell = mapShellRef.current;
    if (!mapShell) return;

    if (document.fullscreenElement === mapShell) {
      document
        .exitFullscreen()
        .then(() => leafletMapRef.current?.invalidateSize())
        .catch(() => undefined);
      return;
    }

    if (!mapShell.requestFullscreen) return;

    mapShell
      .requestFullscreen()
      .then(() => leafletMapRef.current?.invalidateSize())
      .catch(() => undefined);
  };

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
              ref={mapShellRef}
              className="relative min-h-[420px] overflow-hidden bg-[#dbe5d2] md:min-h-[560px]"
            >
              <div
                ref={mapFrameRef}
                className="absolute inset-0 z-0"
                aria-label="OpenStreetMap showing VPSClean service region"
              />

              {mapStatus === 'loading' && (
                <div className="pointer-events-none absolute inset-0 z-[1000] flex items-center justify-center bg-primary/20">
                  <span className="rounded-full bg-primary/90 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                    Loading map
                  </span>
                </div>
              )}

              {mapStatus === 'error' && (
                <div className="absolute left-4 top-4 z-[1000] max-w-sm rounded-2xl bg-primary/90 p-4 text-sm font-semibold leading-relaxed text-white shadow-xl">
                  OpenStreetMap tiles could not load. Check the network connection and try again.
                </div>
              )}

              <button
                type="button"
                onClick={openMapFullscreen}
                title="View fullscreen"
                aria-label="View service area map fullscreen"
                className="absolute right-4 top-16 z-[1000] flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-colors hover:bg-secondary"
              >
                <Maximize2 size={18} />
              </button>

              <a
                href={openStreetMapExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 z-[1000] rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-lg transition-colors hover:bg-secondary"
              >
                Open in OpenStreetMap
              </a>
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
