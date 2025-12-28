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
          ? 'bg-white backdrop-blur-xl py-3 shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-2.5 h-2.5 bg-neon rounded-full group-hover:scale-125 transition-transform shadow-[0_0_15px_#CCFF00]"></div>
          <span className="text-xl font-bold tracking-tight text-black">
            Curing Innos
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <div 
              key={item.label} 
              className="relative h-10 flex items-center"
              onMouseEnter={() => item.submenus && setHoveredMenu(item.label)}
            >
              <Link
                to={item.href}
                className={`text-[13px] font-semibold transition-colors px-2 py-1 rounded-md ${
                    location.pathname.startsWith(item.href) || (item.submenus && item.submenus.some(sub => location.pathname === sub.href))
                    ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {hoveredMenu === item.label && item.submenus && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-52 bg-white backdrop-blur-xl rounded-xl border-2 border-gray-200 shadow-2xl z-[60] overflow-hidden py-2"
                  >
                    {item.submenus.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2.5 text-[13px] font-semibold text-gray-800 hover:text-black hover:bg-gray-100 transition-colors"
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
            className="text-[11px] font-bold text-gray-700 hover:text-black transition-all uppercase tracking-wider border-2 border-gray-300 hover:border-black px-3 py-1.5 rounded-md"
          >
            {language === 'ko' ? 'KR' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black p-2 hover:bg-gray-100 rounded-md transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-6">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 border-b border-gray-100 pb-4 last:border-0">
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold text-black hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.submenus && (
                      <div className="flex flex-col gap-2 pl-4 mt-2">
                        {item.submenus.map(sub => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-600 text-base font-medium hover:text-black transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={toggleLanguage} 
                  className="text-sm font-bold text-gray-700 hover:text-black border-2 border-gray-300 hover:border-black px-4 py-2 rounded-md transition-all uppercase tracking-wider"
                >
                  {language === 'ko' ? 'KR' : 'EN'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;