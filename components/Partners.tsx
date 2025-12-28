import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  // 협력사 로고 (실제 로고로 교체 가능)
  const partners = [
    { name: 'Samsung', logo: '🏢' },
    { name: 'LG', logo: '🏢' },
    { name: 'Hyundai', logo: '🏢' },
    { name: 'SK', logo: '🏢' },
    { name: 'KT', logo: '🏢' },
    { name: 'Naver', logo: '🏢' },
  ];

  // 로고를 2번 복제해서 무한 스크롤 효과
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-normal text-gray-500 mb-12 tracking-normal">
          {t.partners.title}
        </p>
        
        <div className="relative">
          {/* 무한 스크롤 애니메이션 - Apple style */}
          <motion.div
            className="flex gap-16 items-center justify-center"
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-12 flex items-center justify-center opacity-40 transition-opacity"
              >
                <span className="text-3xl grayscale">{partner.logo}</span>
                {/* 실제 사용 시: <img src={partner.logo} alt={partner.name} className="max-h-10 grayscale opacity-60" /> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

