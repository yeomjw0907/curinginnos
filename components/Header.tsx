import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: t.nav.brand,
      href: '/brand',
      submenus: [
        { label: t.nav.brandItems.vision, href: '/brand#vision' },
        { label: t.nav.brandItems.company, href: '/brand#company' },
        { label: t.nav.brandItems.team, href: '/brand#team' },
      ]
    },
    {
      label: t.nav.products,
      href: '/products/standard',
      submenus: [
        { label: t.nav.productItems.standard, href: '/products/standard' },
        { label: t.nav.productItems.manager, href: '/products/manager' },
        { label: t.nav.productItems.app, href: '/app' },
      ]
    },
    {
      label: t.nav.resources,
      href: '/resources',
      submenus: [
        { label: t.nav.resourceItems.guides, href: '/resources/guides' },
        { label: t.nav.resourceItems.marketing, href: '/resources/marketing' },
        { label: t.nav.resourceItems.company, href: '/resources/company' },
      ]
    },
    {
      label: t.nav.support,
      href: '/support',
      submenus: [
        { label: t.nav.supportItems.faq, href: '/support/faq' },
        { label: t.nav.supportItems.manuals, href: '/support/manuals' },
        { label: t.nav.supportItems.board, href: '/support/board' },
      ]
    },
    {
      label: t.nav.contact,
      href: '/contact',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen || hoveredMenu 
          ? 'nav-blur py-3' 
          : 'bg-transparent py-5'
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl font-semibold tracking-tight text-white">
            Curing Innos
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.label} 
              className="relative h-10 flex items-center"
              onMouseEnter={() => item.submenus && setHoveredMenu(item.label)}
            >
              <Link
                to={item.href}
                className={`text-[12px] font-medium transition-colors opacity-80 hover:opacity-100 ${
                    location.pathname.startsWith(item.href) || (item.submenus && item.submenus.some(sub => location.pathname === sub.href))
                    ? 'text-white opacity-100' : 'text-gray-200'
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown - Fixed Overlap by increasing Z-index and opacity */}
              <AnimatePresence>
                {hoveredMenu === item.label && item.submenus && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-[#1c1c1e] rounded-xl border border-white/10 shadow-2xl z-[60] overflow-hidden py-1"
                  >
                    {item.submenus.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2 text-[12px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setHoveredMenu(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            {language === 'ko' ? 'KR' : 'EN'}
          </button>
          <Link 
            to="/products/standard" 
            className="bg-white text-black text-[12px] font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Buy
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col pt-24 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <div key={item.label} className="flex flex-col gap-3 border-b border-gray-800 pb-4">
                    <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-left text-white"
                    >
                    {item.label}
                    </Link>
                    {item.submenus && (
                        <div className="flex flex-col gap-3 pl-2">
                            {item.submenus.map(sub => (
                                <Link
                                    key={sub.label}
                                    to={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-400 text-sm font-medium"
                                >
                                    {sub.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
              ))}
            </nav>
            <div className="mt-8 flex gap-4">
                 <button onClick={toggleLanguage} className="text-sm font-bold text-gray-400">
                    Language: {language.toUpperCase()}
                 </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;