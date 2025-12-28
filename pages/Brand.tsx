import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BrandPage: React.FC = () => {
  const { t } = useLanguage();

  const coreValues = [
    { title: '혁신적인 기술', desc: 'AI 자율주행과 IoT 기술로 테니스 훈련의 새로운 기준을 제시합니다.' },
    { title: '사용자 중심', desc: '모든 레벨의 선수들을 위한 맞춤형 훈련 솔루션을 제공합니다.' },
    { title: '지속가능성', desc: '에너지 효율적인 시스템으로 환경을 생각하는 스마트 코트를 만듭니다.' },
    { title: '글로벌 파트너십', desc: '전 세계 200개 이상의 코트에서 신뢰받는 파트너입니다.' },
  ];

  const processSteps = [
    { icon: '💡', title: '상담', desc: '고객의 니즈를 파악하고 최적의 솔루션을 제안합니다.' },
    { icon: '📐', title: '설계', desc: '코트 환경에 맞는 맞춤형 시스템을 설계합니다.' },
    { icon: '⚙️', title: '설치', desc: '전문 팀이 빠르고 정확하게 설치를 진행합니다.' },
    { icon: '🎯', title: '운영', desc: '지속적인 관리와 업데이트로 최상의 성능을 유지합니다.' },
  ];

  return (
    <div className="min-h-screen bg-white text-dark">
      
      {/* Hero Section - Team Photos */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Team Photos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {[1,2,3,4,5,6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img 
                  src={`https://picsum.photos/300/300?random=${i}`}
                  alt={`Team ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight">
              We are<br />Curing Innos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.brand.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Green Background */}
      <section className="py-24 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              {t.brand.vision.title}
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-white/90">
              {t.brand.vision.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Curing Innos
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t.brand.vision.missionDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values - White Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Big Typography with Blue Curves */}
      <section className="py-32 bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
              A Process
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
              Built Around You
            </h2>
          </motion.div>

          {/* Blue Curve Decoration */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto opacity-20 pointer-events-none" viewBox="0 0 800 400" fill="none">
            <path d="M0 200 Q 200 100, 400 200 T 800 200" stroke="#3B82F6" strokeWidth="80" fill="none" strokeLinecap="round"/>
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Typical Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
              Not a Typical<br />Tennis Robot Company
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {t.brand.company.desc}
                </p>
              </div>
              <div className="space-y-6">
                {t.brand.company.history.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    <span className="text-gray-700">{item.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Big Typography */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The People Behind<br />the Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.brand.team.desc}
            </p>
          </motion.div>

          {/* Team Members with Big Typography */}
          <div className="space-y-32">
            {t.brand.team.members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="flex-1">
                  <div className="relative">
                    <h3 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
                      {member.name}
                    </h3>
                    {/* Colorful illustration placeholder */}
                    <div className="absolute -right-10 -top-10 text-8xl opacity-20">
                      {['🎾', '🚀', '💡', '⚡'][idx % 4]}
                    </div>
                  </div>
                  <p className="text-2xl text-blue-600 font-semibold mb-4">{member.role}</p>
                </div>
                <div className="flex-1">
                  <img 
                    src={`https://picsum.photos/600/400?team=${idx}`}
                    alt={member.name}
                    className="rounded-3xl w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Photos Grid */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              The real faces behind<br />every iVOLVE insight
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {Array.from({length: 32}).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="aspect-square rounded-full overflow-hidden"
                >
                  <img 
                    src={`https://picsum.photos/200/200?face=${i}`}
                    alt={`Team member ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Yellow */}
      <section className="py-32 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-gray-900 tracking-tight">
              Let's<br />Connect
            </h2>
            <Link 
              to="/contact"
              className="inline-block px-12 py-6 bg-gray-900 text-white text-xl font-bold rounded-full hover:bg-gray-800 transition-all shadow-2xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;