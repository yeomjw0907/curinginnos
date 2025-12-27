import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Download, Smartphone, Presentation } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.resourcesPage.items.app,
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: t.resourcesPage.items.standard,
      icon: <BookOpen className="w-8 h-8 text-electric" />,
      type: "PDF",
      size: "5.1 MB"
    },
    {
      title: t.resourcesPage.items.manager,
      icon: <Presentation className="w-8 h-8 text-neon" />,
      type: "PDF",
      size: "3.8 MB"
    },
  ];

  return (
    <div className="pt-32 min-h-screen bg-dark">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
            <span className="text-electric font-bold tracking-widest uppercase mb-2 block">Documentation</span>
            <h1 className="text-4xl font-bold mb-4">{t.resourcesPage.sections.guides}</h1>
            <p className="text-gray-400">User manuals and installation guides for our products.</p>
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

export default GuidesPage;