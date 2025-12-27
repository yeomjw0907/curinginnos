import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Product', 'Delivery', 'Service'];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return t.support.faqItems;
    return t.support.faqItems.filter(item => item.category === activeCategory);
  }, [activeCategory, t.support.faqItems]);

  return (
    <div className="pt-32 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t.support.faq}</h1>
            <p className="text-gray-400">Frequently Asked Questions</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                        activeCategory === cat 
                        ? 'bg-electric text-white shadow-lg shadow-electric/25' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="space-y-4">
            {filteredItems.map((item, idx) => (
                <motion.div 
                    layout
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={`${activeCategory}-${idx}`} 
                    className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                >
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
                    >
                        <div>
                             <span className="inline-block text-xs font-bold text-electric uppercase mb-1 tracking-wider">{item.category}</span>
                             <span className="block font-bold text-lg">{item.q}</span>
                        </div>
                        {openIndex === idx ? <Minus className="text-electric flex-shrink-0 ml-4" /> : <Plus className="text-gray-400 flex-shrink-0 ml-4" />}
                    </button>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                    {item.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
            {filteredItems.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No FAQs found in this category.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;