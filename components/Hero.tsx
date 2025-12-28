import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VideoModal from './ui/VideoModal';
import SEO from './SEO';
import Partners from './Partners';
import Stats from './Stats';
import Features from './Features';
import Products from './Products';
import HowItWorks from './HowItWorks';
import LatestNotices from './LatestNotices';
import Testimonials from './Testimonials';
import Press from './Press';
import FinalCTA from './FinalCTA';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <SEO />
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop"
            alt="Tennis Court"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl"
          >
            {/* Small Badge Text */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm md:text-base text-gray-300 tracking-wider uppercase font-medium">
                iVOLVE Pro
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
              Master the Court.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button 
                onClick={() => navigate('/products/standard')}
                className="group px-8 py-4 bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>BUY NOW</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2"
              >
                <Play size={18} />
                <span>LEARN MORE</span>
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">AI 자율주행</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">실시간 분석</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">24/7 운영</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          videoId="Vc-RJtKFfkE" 
        />
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Products Section */}
      <Products />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Latest Notices Section */}
      <LatestNotices />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Press Section */}
      <Press />

      {/* Final CTA Section */}
      <FinalCTA />
    </>
  );
};

export default Hero;