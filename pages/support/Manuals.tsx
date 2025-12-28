import React, { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ManualsPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('');

  const manuals = [
      { category: 'Standard', name: "iVOLVE Standard User Manual", version: "v2.0", size: "12MB" },
      { category: 'Manager', name: "iVOLVE Manager Setup Guide", version: "v1.5", size: "8MB" },
      { category: 'App', name: "Racket Time App Guide", version: "v3.1", size: "5MB" },
      { category: 'Standard', name: "iVOLVE Standard Maintenance", version: "v1.2", size: "4MB" },
  ];

  const categories = [t.support.pages.manuals.all, 'Standard', 'Manager', 'App'];
  
  // Set initial category if not set
  const currentCategory = activeCategory || t.support.pages.manuals.all;

  const filteredManuals = currentCategory === t.support.pages.manuals.all || currentCategory === 'All' || currentCategory === ''
    ? manuals 
    : manuals.filter(m => m.category === currentCategory);

  return (
    <div className="pt-32 min-h-screen bg-dark text-white">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">{t.support.manuals}</h1>
            <p className="text-gray-300">{t.support.pages.manuals.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                        currentCategory === cat 
                        ? 'bg-electric text-white shadow-lg shadow-electric/25' 
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid gap-6">
            {filteredManuals.map((manual, idx) => (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`${currentCategory}-${idx}`}
                    className="flex items-center justify-between p-6 glass-card rounded-2xl group hover:bg-white/10 hover:border-blue-500 transition-all bg-white/5 border border-white/10 cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 group-hover:bg-blue-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-all">
                            <FileText size={24} />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-400 uppercase tracking-wider mb-1 block transition-colors">{manual.category}</span>
                            <h3 className="font-bold text-lg text-white group-hover:text-white">{manual.name}</h3>
                            <div className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 mt-1 transition-colors">
                                <span className="bg-white/10 group-hover:bg-white/20 px-2 rounded font-medium transition-colors">{manual.version}</span>
                                <span>{manual.size}</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-3 rounded-full bg-white/10 text-white hover:bg-blue-600 hover:text-white transition-all group-hover:scale-110 shadow-lg">
                        <Download size={20} />
                    </button>
                </motion.div>
            ))}
             {filteredManuals.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                    {t.support.pages.manuals.empty}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ManualsPage;