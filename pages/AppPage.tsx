import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, MapPin, Smartphone, ArrowRight, Star } from 'lucide-react';

const AppPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-[#F5F5F7] text-black overflow-hidden">
      {/* App Hero */}
      <section className="text-center py-16 md:py-24 px-6 max-w-5xl mx-auto relative z-10">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <div className="w-20 h-20 bg-gradient-to-br from-neon to-green-400 mx-auto rounded-[1.5rem] mb-8 flex items-center justify-center shadow-xl shadow-neon/30 transform rotate-3">
                <span className="text-4xl font-bold text-white drop-shadow-md">R</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 whitespace-pre-line leading-tight tracking-tight">
                {t.appPage.hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">{t.appPage.hero.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
                    <Smartphone size={20} />
                    {t.appPage.hero.download}
                </button>
                 <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors">
                    Learn More
                </button>
            </div>
            
            <div className="flex gap-6 justify-center mt-12 text-sm text-gray-400 font-medium items-center">
                <div className="flex items-center gap-1"><Star size={14} className="fill-yellow-400 text-yellow-400"/> 4.9 Rating</div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>iOS & Android</span>
            </div>
         </motion.div>
      </section>

      {/* Hero Image Mockup Area */}
      <section className="relative mt-0 pb-24">
          <div className="absolute top-1/2 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-white/50 -skew-y-3 z-0"></div>
          
          <div className="max-w-6xl mx-auto px-6 flex justify-center relative z-10">
             <div className="flex gap-4 md:gap-12 items-end">
                {/* Left Phone (Lower) */}
                 <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:block w-64 phone-frame rounded-[3rem] overflow-hidden bg-black border-[8px] border-black transform -rotate-6 translate-y-12"
                 >
                    <img src="https://picsum.photos/400/800?app_screen1" className="w-full h-auto" alt="Screen 1" />
                 </motion.div>

                 {/* Center Phone (Main) */}
                 <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-[280px] md:w-[320px] phone-frame rounded-[3.5rem] overflow-hidden bg-black border-[10px] border-black shadow-2xl relative z-20"
                 >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-20"></div>
                    <img src="https://picsum.photos/400/850?app_hero" className="w-full h-auto" alt="Main App Interface" />
                 </motion.div>

                 {/* Right Phone (Lower) */}
                 <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="hidden md:block w-64 phone-frame rounded-[3rem] overflow-hidden bg-black border-[8px] border-black transform rotate-6 translate-y-12"
                 >
                    <img src="https://picsum.photos/400/800?app_screen2" className="w-full h-auto" alt="Screen 2" />
                 </motion.div>
             </div>
          </div>
      </section>

      {/* Feature 1: Map Search */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="md:w-1/2 text-left">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{t.appPage.features.search.title}</h2>
                <p className="text-xl text-gray-500 leading-relaxed mb-8">
                    {t.appPage.features.search.desc}
                </p>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">GPS Location Active</span>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                 <div className="relative">
                     <div className="absolute -inset-10 bg-gradient-to-tr from-green-200 to-blue-200 rounded-full blur-3xl opacity-40"></div>
                     <div className="phone-frame rounded-[3rem] overflow-hidden border-[8px] border-black bg-white relative z-10 w-72 transform rotate-2">
                        <img src="https://picsum.photos/350/700?app_map" className="w-full h-auto" alt="Map Search" />
                        {/* Floating UI Card Overlay */}
                        <div className="absolute bottom-8 left-4 right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                            <div>
                                <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 w-16 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Feature 2: Booking Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-20">
                <span className="text-neon font-bold mb-3 block text-green-600 uppercase tracking-wider text-xs">Seamless Experience</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{t.appPage.features.booking.title}</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t.appPage.features.booking.desc}</p>
             </div>

             <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="flex justify-center md:justify-end gap-6 relative">
                     <div className="absolute inset-0 bg-gray-50 rounded-full blur-3xl transform -translate-x-10"></div>
                     <img src="https://picsum.photos/300/600?app_cal" className="phone-frame rounded-[2.5rem] shadow-2xl w-56 border-[6px] border-black relative z-10 transform -rotate-6 mt-10" alt="Calendar" />
                     <img src="https://picsum.photos/300/600?app_pay" className="phone-frame rounded-[2.5rem] shadow-2xl w-56 border-[6px] border-black relative z-20 transform rotate-6 mb-10" alt="Payment" />
                 </div>
                 <div className="space-y-6">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-200/50"
                    >
                        <div className="p-4 bg-white rounded-2xl shadow-sm text-green-500">
                            <CalendarCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2 text-gray-900">Easy Scheduling</h4>
                            <p className="text-gray-500 leading-relaxed">Pick date, time, and court type in seconds. Smart conflict detection ensures you never double book.</p>
                        </div>
                    </motion.div>
                     <motion.div 
                        whileHover={{ y: -5 }}
                        className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-200/50"
                    >
                        <div className="p-4 bg-white rounded-2xl shadow-sm text-black flex items-center justify-center font-bold text-xl w-16 h-16">
                            ₩
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2 text-gray-900">Secure Payment</h4>
                            <p className="text-gray-500 leading-relaxed">Integrated payment gateway supports all major cards and easy-pay methods.</p>
                        </div>
                    </motion.div>
                 </div>
             </div>
        </div>
      </section>

      {/* Feature 3: Match/Solo */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
            <div className="md:w-1/2 text-left">
                <span className="text-blue-600 font-bold mb-2 block uppercase tracking-wide text-xs">Community</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{t.appPage.features.match.title}</h2>
                <p className="text-xl text-gray-500 leading-relaxed mb-8">
                    {t.appPage.features.match.desc}
                </p>
                <button className="text-black font-bold flex items-center gap-2 group hover:text-blue-600 transition-colors">
                    Find practice courts <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
            </div>
            <div className="md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://picsum.photos/800/600?indoor_court" className="w-full h-auto object-cover" alt="Indoor Court" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <div className="font-bold text-lg">Gangnam Tennis Center</div>
                            <div className="text-white/80 text-sm">2.4km away • Open now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111] text-white py-24 px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333,transparent_70%)] opacity-30"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{t.appPage.cta}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition text-lg flex items-center justify-center gap-2">
                    App Store
                </button>
                <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition text-lg flex items-center justify-center gap-2">
                    Google Play
                </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AppPage;