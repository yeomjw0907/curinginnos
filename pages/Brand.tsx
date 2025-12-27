import React, { useEffect } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Eye, Target, Calendar } from 'lucide-react';

const BrandPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-dark text-gray-300">
      
      {/* Brand Hero */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-electric/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
         <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-electric font-mono text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 block"
         >
            Our Philosophy
         </motion.span>
         <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 text-white tracking-tight"
        >
            {t.brand.title}
         </motion.h1>
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
         >
            {t.brand.subtitle}
         </motion.p>
      </div>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 md:py-24 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                 {/* Vision */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group border-t-2 border-t-electric/50"
                 >
                    <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Eye className="w-48 h-48" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-electric to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-electric/20">
                            <Eye className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">{t.brand.vision.title}</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {t.brand.vision.desc}
                    </p>
                 </motion.div>

                 {/* Mission */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group border-t-2 border-t-neon/50"
                 >
                     <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Target className="w-48 h-48 text-neon" />
                    </div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-neon to-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-neon/20">
                            <Target className="text-black w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">{t.brand.vision.missionTitle}</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {t.brand.vision.missionDesc}
                    </p>
                 </motion.div>
            </div>
        </div>
      </section>

      {/* Stats / Tech Stripe */}
      <div className="border-y border-white/5 bg-white/[0.02] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">200+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Balls Capacity</div>
              </div>
              <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">120<span className="text-sm">km/h</span></div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Max Velocity</div>
              </div>
              <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">0.05<span className="text-sm">s</span></div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Reaction Time</div>
              </div>
               <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">CES</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Innovation Award</div>
              </div>
          </div>
      </div>

      {/* Company History Section */}
      <section id="company" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                <div className="lg:w-1/2">
                    <span className="text-electric font-mono text-xs font-bold tracking-widest uppercase mb-4 block">About Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white">{t.brand.company.title}</h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
                        {t.brand.company.desc}
                    </p>
                    
                    {/* Responsive Timeline */}
                    <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                        {t.brand.company.history.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                <span className="absolute -left-[5px] md:-left-[7px] top-2 w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-dark border-2 border-gray-600 group-hover:border-electric group-hover:bg-electric transition-colors z-10"></span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                                    <span className="text-2xl font-mono font-bold text-electric">{item.year}</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors text-base md:text-lg">{item.event}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="sticky top-32">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" className="w-full h-64 md:h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" alt="Office" />
                             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                             <div className="absolute bottom-6 left-6">
                                <span className="text-white font-bold text-xl flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-electric" /> Seoul HQ
                                </span>
                                <p className="text-gray-400 text-sm mt-1">R&D Center</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-white/[0.02] scroll-mt-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                 <span className="text-neon font-mono text-xs font-bold tracking-widest uppercase mb-4 block">Our People</span>
                 <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.brand.team.title}</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">{t.brand.team.desc}</p>
             </div>
             
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                 {t.brand.team.members.map((member, idx) => (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group glass-card p-3 md:p-4 rounded-xl text-center hover:bg-white/5 transition-colors duration-300"
                     >
                         <div className="aspect-[3/3.5] overflow-hidden rounded-lg mb-4 relative">
                             <img 
                                src={`https://picsum.photos/400/500?team=${idx}`} 
                                alt={member.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                             
                             {/* Social Icon Overlay on Hover */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="bg-electric/90 p-2 rounded-full text-white cursor-pointer hover:bg-electric">
                                     <Eye size={16} />
                                 </div>
                             </div>
                         </div>
                         <h3 className="text-base md:text-lg font-bold text-white mb-1">{member.name}</h3>
                         <p className="text-electric text-[10px] md:text-xs font-mono uppercase tracking-wider">{member.role}</p>
                     </motion.div>
                 ))}
             </div>
          </div>
      </section>
    </div>
  );
};

// Helper icon
const Building2 = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
);

export default BrandPage;