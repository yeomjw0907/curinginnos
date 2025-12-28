import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Press: React.FC = () => {
  const { t } = useLanguage();

  // 언론 보도 예시 (실제 데이터로 교체)
  const pressItems = [
    {
      outlet: 'TechCrunch',
      title: 'Revolutionary AI Tennis Robot Takes Courts by Storm',
      date: '2024.12.15',
      image: '📰',
    },
    {
      outlet: 'Forbes',
      title: 'How Curing Innos is Transforming Tennis Training',
      date: '2024.11.28',
      image: '📰',
    },
    {
      outlet: 'The Verge',
      title: 'CES 2023 Innovation Award: Meet iVOLVE',
      date: '2024.10.10',
      image: '📰',
    },
    {
      outlet: 'WSJ',
      title: 'The Future of Sports Training is Autonomous',
      date: '2024.09.22',
      image: '📰',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            {t.press.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal">
            {t.press.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pressItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
            >
              {/* 이미지 */}
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-2xl">
                {item.image}
              </div>

              <div className="flex-1">
                <div className="text-xs font-normal text-gray-500 mb-1">
                  {item.outlet}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs text-gray-500 font-normal">
                  {item.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;

