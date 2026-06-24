import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from './pages/ResourcesPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import FAQPage from './pages/FAQPage'
import CaseStudyOverviewPage from '../src/pages/CaseStudyOverviewPage'
import ServicesPage from '../src/pages/ServicesPage'
import ScrollToTop from './sections/ScrollToTop'
import BlogDetailPage from './pages/BlogDetailPage'
import DynamicCaseStudyPage from './pages/DynamicCaseStudyPage'

const AdminApp = lazy(() => import('./admin/AdminApp'))

// Legacy case-study routes → unified dynamic route /case-study/:slug
const CASE_STUDY_REDIRECTS = {
  '/gbm-casestudy': 'gbm',
  '/villgro-casestudy': 'villgro',
  '/coldeasy-casestudy': 'coldeasy',
  '/canvase-casestudy': 'canvase',
  '/gangpur-casestudy': 'gangpur',
  '/ocean-casestudy': 'ocean',
  '/g3-casestudy': 'g3',
  '/scalepoint-casestudy': 'scalepoint',
  '/tmt-casestudy': 'tmt',
  '/yaykwa-casestudy': 'yaykwa',
  '/yog-casestudy': 'yog',
  '/exp-casestudy': 'exp',
  '/aarkiva-casestudy': 'aarkiva',
  '/findtheircare-casestudy': 'findtheircare',
}

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
        <Route path="/blogs" element={<Navigate to="/resources" replace />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/casestudy-overview" element={<CaseStudyOverviewPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {Object.entries(CASE_STUDY_REDIRECTS).map(([from, slug]) => (
          <Route key={from} path={from} element={<Navigate to={`/case-study/${slug}`} replace />} />
        ))}
        <Route path="/case-study/:slug" element={<DynamicCaseStudyPage />} />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={null}>
              <AdminApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
