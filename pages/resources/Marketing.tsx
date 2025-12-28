import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const MarketingPage: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.resourcesPage.items.catalog,
      icon: <FileText className="w-8 h-8 text-white" />,
      type: "PDF",
      size: "12.5 MB"
    },
    {
      title: t.resourcesPage.items.brandAssets,
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      type: "ZIP",
      size: "5.2 MB"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-dark text-white">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
            <span className="text-white font-bold tracking-widest uppercase mb-2 block">{t.resourcesPage.pages.marketing.label}</span>
            <h1 className="text-4xl font-bold mb-4 text-white">{t.resourcesPage.sections.marketing}</h1>
            <p className="text-gray-300">{t.resourcesPage.pages.marketing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer bg-white/5 border border-white/10"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl border border-white/10 group-hover:border-electric/50 transition-colors">
                            {item.icon}
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="bg-white/10 px-2 py-0.5 rounded font-medium">{item.type}</span>
                            <span>{item.size}</span>
                        </div>
                        </div>
                    </div>
                    <button className="p-3 rounded-full bg-white/10 text-white hover:bg-electric hover:text-black transition-all group-hover:scale-105">
                        <Download size={20} />
                    </button>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;