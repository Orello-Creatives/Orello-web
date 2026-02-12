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
const App = () => {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
