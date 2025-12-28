import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F5F5F7] text-[#86868b] text-sm sm:text-xs font-sans py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-[980px] mx-auto">
        
        {/* Top Disclaimer Area */}
        <div className="mb-6 sm:mb-8 border-b border-gray-200 pb-4 sm:pb-6">
             {t.footer.disclaimers.map((disclaimer, index) => (
               <p key={index} className="mb-2 text-xs sm:text-[12px] leading-relaxed">
                 {index + 1}. {disclaimer}
               </p>
             ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* 제품 및 서비스 */}
            <div>
                <h4 className="font-semibold text-black mb-3 text-sm">{t.footer.sections.shopLearn}</h4>
                <ul className="space-y-2">
                    <li><Link to="/products/standard" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.standard}</Link></li>
                    <li><Link to="/products/manager" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.manager}</Link></li>
                    <li><Link to="/products/app" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.app}</Link></li>
                </ul>
            </div>
            
            {/* 자료 */}
            <div>
                <h4 className="font-semibold text-black mb-3 text-sm">{t.footer.sections.resources}</h4>
                <ul className="space-y-2">
                    <li><Link to="/resources/guides" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.guides}</Link></li>
                    <li><Link to="/resources/marketing" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.mediaKit}</Link></li>
                </ul>
            </div>
            
            {/* 지원 */}
            <div>
                <h4 className="font-semibold text-black mb-3 text-sm">{t.footer.sections.support}</h4>
                <ul className="space-y-2">
                    <li><Link to="/support/faq" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.faq}</Link></li>
                    <li><Link to="/support/manuals" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.manuals}</Link></li>
                    <li><Link to="/contact" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.contactUs}</Link></li>
                </ul>
            </div>
            
            {/* 회사 */}
            <div>
                <h4 className="font-semibold text-black mb-3 text-sm">{t.footer.sections.company}</h4>
                <ul className="space-y-2">
                    <li><Link to="/resources/company" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.nav.resourceItems.company}</Link></li>
                    <li><Link to="/support/board" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.newsroom}</Link></li>
                    <li><Link to="/contact" className="hover:text-black hover:underline transition-colors text-xs sm:text-[12px]">{t.footer.links.partnerships}</Link></li>
                </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="mb-4 text-xs sm:text-[12px]">
                {t.footer.moreWays} <Link to="/contact" className="text-electric hover:underline">{t.footer.contactAction}</Link> {t.footer.or} 010-4675-4186.
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="mb-2 lg:mb-0">
                    <p className="text-xs sm:text-[11px]">{t.footer.copyright}</p>
                    <p className="mt-1 text-xs sm:text-[11px]">{t.footer.address}</p>
                    <p className="text-xs sm:text-[11px]">{t.footer.bizId}</p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs">
                    <Link to="/privacy" className="hover:underline text-gray-600 hover:text-black transition-colors">{t.footer.privacy}</Link>
                    <span className="border-r border-gray-300 h-3 my-auto hidden sm:inline"></span>
                    <Link to="/terms" className="hover:underline text-gray-600 hover:text-black transition-colors">{t.footer.terms}</Link>
                    <span className="border-r border-gray-300 h-3 my-auto hidden sm:inline"></span>
                    <a href="#" className="hover:underline text-gray-600 hover:text-black transition-colors">{t.footer.legal}</a>
                    <span className="border-r border-gray-300 h-3 my-auto hidden sm:inline"></span>
                    <a href="#" className="hover:underline text-gray-600 hover:text-black transition-colors">{t.footer.siteMap}</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;