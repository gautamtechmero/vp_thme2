import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import OurClientsPage from './pages/OurClients';
import ServicesPage from './pages/Services';
import ServiceAreaPage from './pages/ServiceArea';
import CertifiedHoodCleaningPage from './pages/services/CertifiedHoodCleaning';
import EquipmentMaintenancePage from './pages/services/EquipmentMaintenance';
import HouseCleaningPage from './pages/services/HouseCleaning';
import IceMachineCleaningPage from './pages/services/IceMachineCleaning';
import OfficeCleaningPage from './pages/services/OfficeCleaning';
import RooftopGreaseContainmentPage from './pages/services/RooftopGreaseContainment';
import SurfaceCleaningPage from './pages/services/SurfaceCleaning';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-area" element={<ServiceAreaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-clients" element={<OurClientsPage />} />
        <Route path="/services/certified-hood-cleaning" element={<CertifiedHoodCleaningPage />} />
        <Route path="/services/rooftop-grease-containment" element={<RooftopGreaseContainmentPage />} />
        <Route path="/services/equipment-maintenance" element={<EquipmentMaintenancePage />} />
        <Route path="/services/surface-cleaning" element={<SurfaceCleaningPage />} />
        <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
        <Route path="/services/house-cleaning" element={<HouseCleaningPage />} />
        <Route path="/services/ice-machine-cleaning" element={<IceMachineCleaningPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
