import ServiceDetailPage from '../../components/ServiceDetailPage';
import { serviceDetails } from '../../data/siteContent';

export default function EquipmentMaintenancePage() {
  return <ServiceDetailPage service={serviceDetails.equipmentMaintenance} />;
}
