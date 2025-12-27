import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Download } from 'lucide-react';

const CompanyResourcePage: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.resourcesPage.items.companyProfile,
      icon: <Building2 className="w-8 h-8 text-neon" />,
      type: "PDF",
      size: "8.2 MB"
    },
    {
        title: "ESG Report 2023",
        icon: <Building2 className="w-8 h-8 text-green-500" />,
        type: "PDF",
        size: "4.5 MB"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-dark">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
            <span className="text-neon font-bold tracking-widest uppercase mb-2 block">Corporate</span>
            <h1 className="text-4xl font-bold mb-4">{t.resourcesPage.sections.company}</h1>
            <p className="text-gray-400">Corporate documents and reports.</p>
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

export default CompanyResourcePage;