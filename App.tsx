import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Hero from './components/Hero';
import BrandPage from './pages/Brand';
import ProductStandard from './pages/ProductStandard';
import ProductManager from './pages/ProductManager';
import AppPage from './pages/AppPage';
import SupportPage from './pages/SupportPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactForm from './components/ContactForm';

// Resources Subpages
import GuidesPage from './pages/resources/Guides';
import MarketingPage from './pages/resources/Marketing';
import CompanyResourcePage from './pages/resources/CompanyResource';

// Support Subpages
import FAQPage from './pages/support/FAQ';
import ManualsPage from './pages/support/Manuals';
import BoardPage from './pages/support/Board';
import BoardDetailPage from './pages/support/BoardDetail';

// Legal Pages
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-dark font-sans selection:bg-neon selection:text-black flex flex-col">
          <Header />
          <main className="flex-grow">
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
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;