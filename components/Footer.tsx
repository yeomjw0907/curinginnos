import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#161617] text-[#86868b] text-[12px] font-sans py-12 px-6 border-t border-[#424245]">
      <div className="max-w-[980px] mx-auto">
        
        {/* Top Disclaimer Area */}
        <div className="mb-8 border-b border-[#424245] pb-6">
             <p className="mb-2">1. Autonomous driving features require a flat, standard hard or clay court surface.</p>
             <p>2. Subscription services for iVOLVE Manager are billed quarterly.</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
                <h4 className="font-semibold text-white mb-3">Shop and Learn</h4>
                <ul className="space-y-2">
                    <li><Link to="/products/standard" className="hover:underline">iVOLVE Standard</Link></li>
                    <li><Link to="/products/manager" className="hover:underline">iVOLVE Manager</Link></li>
                    <li><Link to="/app" className="hover:underline">Racket Time App</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-3">Resources</h4>
                <ul className="space-y-2">
                    <li><Link to="/resources/guides" className="hover:underline">User Guides</Link></li>
                    <li><Link to="/resources/marketing" className="hover:underline">Media Kit</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-3">Support</h4>
                <ul className="space-y-2">
                    <li><Link to="/support/faq" className="hover:underline">FAQ</Link></li>
                    <li><Link to="/support/manuals" className="hover:underline">Manuals</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2">
                    <li><Link to="/brand" className="hover:underline">About Curing Innos</Link></li>
                    <li><Link to="/support/board" className="hover:underline">Newsroom</Link></li>
                    <li><Link to="/contact" className="hover:underline">Partnerships</Link></li>
                </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#424245]">
            <div className="mb-4">
                More ways to shop: <Link to="/contact" className="text-[#2997FF] hover:underline">Contact us</Link> or call 010-4675-4186.
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="mb-2 md:mb-0">
                    <p>{t.footer.copyright}</p>
                    <p className="mt-1">{t.footer.address} | {t.footer.bizId}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-xs">
                    <Link to="/privacy" className="hover:underline text-gray-300">Privacy Policy</Link>
                    <span className="border-r border-gray-600 h-3 my-auto"></span>
                    <Link to="/terms" className="hover:underline text-gray-300">Terms of Use</Link>
                    <span className="border-r border-gray-600 h-3 my-auto"></span>
                    <a href="#" className="hover:underline">Legal</a>
                    <span className="border-r border-gray-600 h-3 my-auto"></span>
                    <a href="#" className="hover:underline">Site Map</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;