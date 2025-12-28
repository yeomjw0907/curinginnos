import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const products = [
    {
      id: 'standard',
      name: t.productsPage.items.standard.name,
      desc: t.productsPage.items.standard.desc,
      image: "https://images.unsplash.com/photo-1622163642998-1ea3166beae2?q=80&w=2669&auto=format&fit=crop",
      color: 'text-blue-600',
      link: '/products/standard'
    },
    {
      id: 'manager',
      name: t.productsPage.items.manager.name,
      desc: t.productsPage.items.manager.desc,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop",
      color: 'text-purple-600',
      link: '/products/manager'
    },
    {
      id: 'app',
      name: t.productsPage.items.app.name,
      desc: t.productsPage.items.app.desc,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
      color: 'text-pink-600',
      link: '/products/app'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onClick={() => navigate(product.link)}
              className="group cursor-pointer"
            >
              {/* 제품 카드 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* 제품 이미지 */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 제품 정보 */}
                <div className="p-6">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 tracking-tight ${product.color}`}>
                    {product.name}
                  </h3>
                  <p className="text-base text-gray-600 mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                    <span className="text-sm">{t.products.cta}</span>
                    <ArrowRight size={16} className="transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;