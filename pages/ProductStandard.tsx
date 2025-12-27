import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';

const ProductStandard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] overflow-x-hidden">
      
      {/* Section 1: Introduction */}
      <section className="pt-40 pb-20 px-6 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         >
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-2">iVOLVE Standard</h1>
            <p className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                The ultimate <br className="md:hidden"/>training partner.
            </p>
            <div className="text-xl font-medium text-gray-300">
                From <span className="text-white">{t.standardPage.price}</span>
            </div>
            <div className="mt-10">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                </button>
            </div>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-16 max-w-5xl mx-auto"
         >
             <img src="https://picsum.photos/1200/800?standard_hero" className="rounded-3xl shadow-2xl opacity-90 mx-auto" alt="Hero" />
         </motion.div>
      </section>

      {/* Section 2: Performance */}
      <section className="py-32 px-6 bg-[#161617]">
          <div className="max-w-6xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20 max-w-3xl"
             >
                 <h2 className="text-4xl md:text-6xl font-bold mb-6">Pro-level performance.</h2>
                 <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                     {t.standardPage.desc || "Experience ball speeds up to 120km/h with spin rates that challenge even professional players. It's not just a machine; it's a rival."}
                 </p>
             </motion.div>

             <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-black p-10 rounded-3xl min-h-[400px] flex flex-col justify-between group">
                     <div>
                         <h3 className="text-2xl font-bold mb-2">Autonomous Mobility</h3>
                         <p className="text-gray-400">Moves across the court like a real opponent.</p>
                     </div>
                     <img src="https://picsum.photos/600/400?mobility" className="rounded-xl mt-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <div className="bg-black p-10 rounded-3xl min-h-[400px] flex flex-col justify-between group">
                     <div>
                         <h3 className="text-2xl font-bold mb-2">Infinite Stamina</h3>
                         <p className="text-gray-400">Holds 200+ balls for uninterrupted sessions.</p>
                     </div>
                     <img src="https://picsum.photos/600/400?capacity" className="rounded-xl mt-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                 </div>
             </div>
          </div>
      </section>

      {/* Section 3: Large Feature */}
      <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Smart Control.</h2>
              <p className="text-xl text-gray-400 max-w-2xl mb-16">
                  Adjust every parameter from your tablet. Spin, speed, interval, and placement. It listens to you.
              </p>
              <img src="https://picsum.photos/1000/600?tablet_ui" className="rounded-3xl shadow-2xl border border-white/10" />
          </div>
      </section>

      {/* Section 4: Grid Specs */}
      <section className="py-32 px-6 bg-[#161617]">
          <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 border-b border-gray-700 pb-6">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
                  {t.standardPage.specs.items.map((spec, i) => (
                      <div key={i}>
                          <p className="text-sm text-gray-500 font-semibold mb-1">{spec.label}</p>
                          <p className="text-xl font-medium text-white">{spec.value}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default ProductStandard;