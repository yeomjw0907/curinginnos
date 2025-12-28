import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';

const ProductStandard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen text-dark overflow-x-hidden">
      
      {/* Section 1: Introduction */}
      <section className="pt-40 pb-20 px-6 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         >
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-500 mb-2">iVOLVE Standard</h1>
            <p className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black">
                The ultimate <br className="md:hidden"/>training partner.
            </p>
            <div className="text-xl font-medium text-gray-600">
                From <span className="text-black font-bold">{t.standardPage.price}</span>
            </div>
            <div className="mt-10">
                <button className="bg-electric text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
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
             <img src="https://picsum.photos/1200/800?standard_hero" className="rounded-3xl shadow-2xl mx-auto" alt="Hero" />
         </motion.div>
      </section>

      {/* Section 2: Performance */}
      <section className="py-32 px-6 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20 max-w-3xl"
             >
                 <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Pro-level performance.</h2>
                 <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                     {t.standardPage.desc || "Experience ball speeds up to 120km/h with spin rates that challenge even professional players. It's not just a machine; it's a rival."}
                 </p>
             </motion.div>

             <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white p-10 rounded-3xl min-h-[400px] flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow">
                     <div>
                         <h3 className="text-2xl font-bold mb-2">Autonomous Mobility</h3>
                         <p className="text-gray-500">Moves across the court like a real opponent.</p>
                     </div>
                     <img src="https://picsum.photos/600/400?mobility" className="rounded-xl mt-8 grayscale group-hover:grayscale-0 transition-all" />
                 </div>
                 <div className="bg-white p-10 rounded-3xl min-h-[400px] flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow">
                     <div>
                         <h3 className="text-2xl font-bold mb-2">Infinite Stamina</h3>
                         <p className="text-gray-500">Holds 200+ balls for uninterrupted sessions.</p>
                     </div>
                     <img src="https://picsum.photos/600/400?capacity" className="rounded-xl mt-8 grayscale group-hover:grayscale-0 transition-all" />
                 </div>
             </div>
          </div>
      </section>

      {/* Section 3: Large Feature */}
      <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">Smart Control.</h2>
              <p className="text-xl text-gray-500 max-w-2xl mb-16">
                  Adjust every parameter from your tablet. Spin, speed, interval, and placement. It listens to you.
              </p>
              <img src="https://picsum.photos/1000/600?tablet_ui" className="rounded-3xl shadow-2xl border border-gray-100" />
          </div>
      </section>

      {/* Section 4: Grid Specs */}
      <section className="py-32 px-6 bg-[#F5F5F7]">
          <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 border-b border-gray-300 pb-6 text-black">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
                  {t.standardPage.specs.items.map((spec, i) => (
                      <div key={i}>
                          <p className="text-sm text-gray-500 font-semibold mb-1">{spec.label}</p>
                          <p className="text-xl font-medium text-black">{spec.value}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default ProductStandard;