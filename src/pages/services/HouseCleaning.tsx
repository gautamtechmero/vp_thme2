import ServiceDetailPage from '../../components/ServiceDetailPage';
import { serviceDetails } from '../../data/siteContent';

export default function HouseCleaningPage() {
  return <ServiceDetailPage service={serviceDetails.houseCleaning} />;
}
