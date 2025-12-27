import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Server, CalendarClock, Smartphone } from 'lucide-react';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-24 bg-[#080b14] relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-electric font-bold tracking-widest uppercase mb-2 block"
                >
                    Business Solutions
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    {t.solutions.title}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg mb-8"
                >
                    {t.solutions.subtitle}
                </motion.p>
                
                <div className="space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <Server className="w-8 h-8 text-electric mt-1" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">{t.solutions.feature1}</h4>
                            <p className="text-gray-400 text-sm">IoT-based full court control from anywhere.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <CalendarClock className="w-8 h-8 text-neon mt-1" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">{t.solutions.feature2}</h4>
                            <p className="text-gray-400 text-sm">Seamless kiosk and app integration for payments.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="md:w-1/2">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-neon/20 rounded-3xl blur-2xl"></div>
                    <img 
                        src="https://picsum.photos/600/500" 
                        alt="Unmanned Court Dashboard" 
                        className="relative rounded-3xl shadow-2xl border border-white/10 z-10" 
                    />
                    
                    {/* Floating Element */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 bg-dark p-4 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
                    >
                        <div className="bg-green-500/20 p-2 rounded-full">
                            <Smartphone className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Revenue Today</p>
                            <p className="text-lg font-bold">₩ 1,250,000</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;