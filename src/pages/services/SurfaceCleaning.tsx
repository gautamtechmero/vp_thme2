import ServiceDetailPage from '../../components/ServiceDetailPage';
import { serviceDetails } from '../../data/siteContent';

export default function SurfaceCleaningPage() {
  return <ServiceDetailPage service={serviceDetails.surfaceCleaning} />;
}
