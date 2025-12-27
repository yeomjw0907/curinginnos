import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Activity, Server, Smartphone, Check, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const products = [
    {
      id: 'standard',
      name: t.productsPage.items.standard.name,
      desc: t.productsPage.items.standard.desc,
      features: t.productsPage.items.standard.features,
      icon: <Activity className="w-12 h-12 text-electric" />,
      image: "https://picsum.photos/600/400?random=1",
      badge: "Best Seller"
    },
    {
      id: 'manager',
      name: t.productsPage.items.manager.name,
      desc: t.productsPage.items.manager.desc,
      features: t.productsPage.items.manager.features,
      icon: <Server className="w-12 h-12 text-neon" />,
      image: "https://picsum.photos/600/400?random=2",
      badge: "Smart Solution"
    },
    {
      id: 'app',
      name: t.productsPage.items.app.name,
      desc: t.productsPage.items.app.desc,
      features: t.productsPage.items.app.features,
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      image: "https://picsum.photos/600/400?random=3",
      badge: "Mobile Platform"
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t.productsPage.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            {t.productsPage.subtitle}
          </motion.p>
        </div>

        <div className="space-y-32">
          {products.map((product, index) => (
            <section key={product.id} id={product.id} className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Image Side */}
                <div className={`glass-card rounded-3xl overflow-hidden relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-video relative overflow-hidden">
                         <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>
                    </div>
                     {product.badge && (
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-3 py-1 rounded text-xs uppercase tracking-wider shadow-lg">
                            {product.badge}
                        </div>
                     )}
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                            {product.icon}
                        </div>
                        <span className="text-electric font-bold tracking-widest text-sm uppercase">Curing Innos</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{product.name}</h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-4 border-electric/30 pl-6">
                        {product.desc}
                    </p>
                    
                    <div className="mb-10">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Key Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-200">
                                    <Check className="w-5 h-5 text-neon mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:bg-neon hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;