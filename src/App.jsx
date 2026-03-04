import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from './pages/ResourcesPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import FAQPage from './pages/FAQPage'
import BlogPage from '../src/pages/BlogPage'
import CaseStudyOverviewPage from '../src/pages/CaseStudyOverviewPage'
import ServicesPage from '../src/pages/ServicesPage'
import GBMCasestudy from '../src/pages/GBMCasestudy'
import VillgroCasestudy from '../src/pages/VillgroCasestudy'
import ColdeasyCasestudy from '../src/pages/ColdeasyCasestudy'
import ScrollToTop from './sections/ScrollToTop'
import CanvaseCasestudy from './pages/CanvaseCasestudy'
import GangpurCasestudy from './pages/GangpurCasestudy'
import OceanCasestudy from './pages/OceanCasestudy'
import G3Casestudy from './pages/G3Casestudy'
import ScalepointCasestudy from './pages/ScalepointCasestudy'
import TmtCasestudy from './pages/TmtCasestudy'
import YaykwaCasestudy from './pages/YaykwaCasestudy'
import YogCasestudy from './pages/YogCasestudy'
import ExpCasestudy from './pages/ExpCasestudy'
import AarkivaCasestudy from './pages/AarkivaCasestudy'
import FindCasestudy from './pages/FindCasestudy'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/casestudy-overview" element={<CaseStudyOverviewPage />} />
        <Route path="/gbm-casestudy" element={<GBMCasestudy />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/villgro-casestudy" element={<VillgroCasestudy />} />
        <Route path="/coldeasy-casestudy" element={<ColdeasyCasestudy />} />
        <Route path="/canvase-casestudy" element={<CanvaseCasestudy />} />
        <Route path="/gangpur-casestudy" element={<GangpurCasestudy />} />
        <Route path="/ocean-casestudy" element={<OceanCasestudy />} />
        <Route path="/g3-casestudy" element={<G3Casestudy />} />
        <Route path="/scalepoint-casestudy" element={<ScalepointCasestudy />} />
        <Route path="/tmt-casestudy" element={<TmtCasestudy />} />
        <Route path="/yaykwa-casestudy" element={<YaykwaCasestudy />} />
        <Route path="/yog-casestudy" element={<YogCasestudy />} />
        <Route path="/exp-casestudy" element={<ExpCasestudy />} />
        <Route path="/aarkiva-casestudy" element={<AarkivaCasestudy />} />
        <Route path="/findtheircare-casestudy" element={<FindCasestudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
