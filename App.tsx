import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './components/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/ui/Loading';

// Lazy load pages for code splitting
const Hero = lazy(() => import('./components/Hero'));
const BrandPage = lazy(() => import('./pages/Brand'));
const ProductStandard = lazy(() => import('./pages/ProductStandard'));
const ProductManager = lazy(() => import('./pages/ProductManager'));
const AppPage = lazy(() => import('./pages/AppPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactForm = lazy(() => import('./components/ContactForm'));

// Resources Subpages
const GuidesPage = lazy(() => import('./pages/resources/Guides'));
const MarketingPage = lazy(() => import('./pages/resources/Marketing'));
const CompanyResourcePage = lazy(() => import('./pages/resources/CompanyResource'));

// Support Subpages
const FAQPage = lazy(() => import('./pages/support/FAQ'));
const ManualsPage = lazy(() => import('./pages/support/Manuals'));
const BoardPage = lazy(() => import('./pages/support/Board'));
const BoardDetailPage = lazy(() => import('./pages/support/BoardDetail'));

// Legal Pages
const TermsPage = lazy(() => import('./pages/legal/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <LanguageProvider>
            <ScrollToTop />
            <div className="min-h-screen bg-white text-dark font-sans selection:bg-neon selection:text-black flex flex-col">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/brand" element={<BrandPage />} />
                    
                    {/* Individual Product Pages */}
                    <Route path="/products/standard" element={<ProductStandard />} />
                    <Route path="/products/manager" element={<ProductManager />} />
                    
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/resources/guides" element={<GuidesPage />} />
                    <Route path="/resources/marketing" element={<MarketingPage />} />
                    <Route path="/resources/company" element={<CompanyResourcePage />} />
                    
                    {/* App Page (Racket Time) */}
                    <Route path="/app" element={<AppPage />} />
                    
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/support/faq" element={<FAQPage />} />
                    <Route path="/support/manuals" element={<ManualsPage />} />
                    <Route path="/support/board" element={<BoardPage />} />
                    <Route path="/support/board/:id" element={<BoardDetailPage />} />

                    <Route path="/contact" element={<div className="pt-20"><ContactForm /></div>} />
                    
                    {/* Legal Routes */}
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;