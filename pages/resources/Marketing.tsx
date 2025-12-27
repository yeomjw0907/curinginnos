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
      title: "Brand Logo Assets",
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      type: "ZIP",
      size: "5.2 MB"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-dark">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
            <span className="text-white font-bold tracking-widest uppercase mb-2 block">Media Kit</span>
            <h1 className="text-4xl font-bold mb-4">{t.resourcesPage.sections.marketing}</h1>
            <p className="text-gray-400">Official promotional materials and assets.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-electric/50 transition-colors">
                            {item.icon}
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="bg-white/10 px-2 py-0.5 rounded">{item.type}</span>
                            <span>{item.size}</span>
                        </div>
                        </div>
                    </div>
                    <button className="p-3 rounded-full bg-white/5 text-white hover:bg-electric hover:text-white transition-all group-hover:scale-105">
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