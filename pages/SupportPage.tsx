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
      content: t.support.sections.faqDesc
    },
    {
      id: 'manuals',
      title: t.support.manuals,
      link: '/support/manuals',
      icon: <FileText className="w-8 h-8 text-electric" />,
      content: t.support.sections.manualsDesc
    },
    {
      id: 'board',
      title: t.support.board,
      link: '/support/board',
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      content: t.support.sections.boardDesc
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {t.support.title}
          </motion.h1>
          <p className="text-gray-300 text-lg">{t.support.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
                <Link to={section.link} key={section.id} className="block">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group h-full bg-white/5 border border-white/10"
                    >
                        <div className="mb-6 p-4 bg-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">{section.content}</p>
                        <span className="text-electric text-sm font-bold uppercase tracking-wider group-hover:underline">View Details -&gt;</span>
                    </motion.div>
                </Link>
            ))}
        </div>

        <div className="mt-24 p-8 bg-white/5 rounded-2xl text-center border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">{t.support.contactSection.title}</h3>
            <p className="text-gray-300 mb-6">{t.support.contactSection.subtitle}</p>
            <Link to="/contact" className="inline-block bg-white text-dark font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition">{t.support.contactSection.button}</Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;