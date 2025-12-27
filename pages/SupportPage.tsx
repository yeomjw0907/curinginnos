import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { HelpCircle, FileText, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'faq',
      title: t.support.faq,
      link: '/support/faq',
      icon: <HelpCircle className="w-8 h-8 text-neon" />,
      content: "Find answers to the most common questions about our products and services."
    },
    {
      id: 'manuals',
      title: t.support.manuals,
      link: '/support/manuals',
      icon: <FileText className="w-8 h-8 text-electric" />,
      content: "Download user guides and technical documentation for iVOLVE series."
    },
    {
      id: 'board',
      title: t.support.board,
      link: '/support/board',
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      content: "Community announcements and user discussions."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t.support.title}
          </motion.h1>
          <p className="text-gray-400 text-lg">{t.support.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
                <Link to={section.link} key={section.id} className="block">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group h-full"
                    >
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                        <p className="text-gray-400 mb-6">{section.content}</p>
                        <span className="text-electric text-sm font-bold uppercase tracking-wider group-hover:underline">View Details -&gt;</span>
                    </motion.div>
                </Link>
            ))}
        </div>

        <div className="mt-24 p-8 bg-white/5 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Need direct help?</h3>
            <p className="text-gray-400 mb-6">Contact our support team directly for assistance.</p>
            <Link to="/contact" className="inline-block bg-white text-dark font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition">Contact Support</Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;