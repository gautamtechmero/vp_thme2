import ServiceDetailPage from '../../components/ServiceDetailPage';
import { serviceDetails } from '../../data/siteContent';

export default function OfficeCleaningPage() {
  return <ServiceDetailPage service={serviceDetails.officeCleaning} />;
}
