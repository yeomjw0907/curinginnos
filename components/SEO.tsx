import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '테니스, AI, 로봇, iVOLVE, 큐링이노스, 스마트 코트, 라켓타임',
  image = 'https://images.unsplash.com/photo-1622163642998-1ea3166beae2?q=80&w=1200',
  url,
}) => {
  const { language } = useLanguage();

  const defaultTitle = language === 'ko' 
    ? 'Curing Innos | AI 테니스 파트너' 
    : 'Curing Innos | AI Tennis Partner';
  
  const defaultDescription = language === 'ko'
    ? '큐링이노스 - AI 기반 테니스 로봇 iVOLVE와 스마트 코트 솔루션. 자율주행 기술로 완성된 차세대 테니스 훈련 파트너를 만나보세요.'
    : 'Curing Innos - AI Tennis Robot iVOLVE and Smart Court Solution. Experience next-generation tennis training with autonomous driving technology.';

  const siteTitle = title ? `${title} | Curing Innos` : defaultTitle;
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'ko' ? 'ko_KR' : 'en_US'} />
      <meta property="og:site_name" content="Curing Innos" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteUrl && <meta name="twitter:url" content={siteUrl} />}
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Curing Innos Inc." />
      {siteUrl && <link rel="canonical" href={siteUrl} />}
    </Helmet>
  );
};

export default SEO;

