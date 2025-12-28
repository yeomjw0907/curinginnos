import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VideoModal from './ui/VideoModal';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-screen bg-white text-dark flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-electric font-semibold tracking-wide text-lg md:text-xl mb-4">iVOLVE Pro</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight text-black">
                Master the Court.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <button 
                    onClick={() => navigate('/products/standard')}
                    className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors shadow-xl"
                >
                    Buy
                </button>
                <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="group flex items-center gap-2 text-black text-lg font-medium hover:underline decoration-2 underline-offset-4 decoration-neon"
                >
                    Watch the film 
                    <div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(204,255,0,0.5)]">
                        <Play size={10} className="fill-black text-black ml-0.5" />
                    </div>
                </button>
            </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative w-full max-w-[1200px] mt-12 md:mt-20 px-6"
      >
        <img 
            src="https://images.unsplash.com/photo-1622163642998-1ea3166beae2?q=80&w=2669&auto=format&fit=crop" 
            alt="iVOLVE Robot" 
            className="w-full h-auto object-cover rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.1)] border-t border-l border-r border-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-full w-full"></div>
      </motion.div>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId="dQw4w9WgXcQ" 
      />
    </section>
  );
};

export default Hero;