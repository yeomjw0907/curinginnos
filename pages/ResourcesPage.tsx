import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'guides',
      title: t.resourcesPage.sections.guides,
      link: '/resources/guides',
      icon: <BookOpen className="w-10 h-10 text-electric" />,
      desc: "User manuals, setup guides, and technical documentation for all products."
    },
    {
      id: 'marketing',
      title: t.resourcesPage.sections.marketing,
      link: '/resources/marketing',
      icon: <FileText className="w-10 h-10 text-white" />,
      desc: "Brochures, catalogs, and promotional materials."
    },
    {
      id: 'company',
      title: t.resourcesPage.sections.company,
      link: '/resources/company',
      icon: <Building2 className="w-10 h-10 text-neon" />,
      desc: "Company profile and brand assets."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {t.resourcesPage.title}
        </motion.h1>
        <p className="text-gray-400 text-lg">{t.resourcesPage.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
         <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
                <Link to={section.link} key={section.id} className="block group">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-8 rounded-3xl h-full border border-white/10 hover:border-electric/50 transition-colors"
                    >
                        <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                            {section.icon}
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <p className="text-gray-400 mb-6">{section.desc}</p>
                        <span className="text-electric font-bold text-sm tracking-widest uppercase group-hover:underline">Explore &rarr;</span>
                    </motion.div>
                </Link>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ResourcesPage;