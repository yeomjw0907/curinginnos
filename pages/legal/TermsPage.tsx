import React from 'react';
import { useLanguage } from '../../components/LanguageContext';

const TermsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-32 min-h-screen bg-dark text-gray-300">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h1 className="text-3xl font-bold mb-8 text-white">
            {language === 'ko' ? '이용약관' : 'Terms of Service'}
        </h1>
        <div className="prose prose-invert max-w-none text-sm leading-relaxed border border-white/10 rounded-2xl p-8 bg-white/5">
            {language === 'ko' ? (
                <>
                    <h3 className="text-white font-bold mb-4">제 1 조 (목적)</h3>
                    <p className="mb-6">본 약관은 주식회사 큐링이노스(이하 "회사")가 제공하는 모든 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                    
                    <h3 className="text-white font-bold mb-4">제 2 조 (정의)</h3>
                    <p className="mb-6">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
                    1. "서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 관련 제반 서비스를 의미합니다.</p>

                    <h3 className="text-white font-bold mb-4">제 3 조 (약관의 게시와 개정)</h3>
                    <p className="mb-6">1. "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.<br/>
                    2. "회사"는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                    
                    <p className="text-gray-500 italic mt-8">(본 내용은 데모 페이지를 위한 예시 텍스트입니다. 실제 운영 시 법적 검토를 거친 약관을 기재하시기 바랍니다.)</p>
                </>
            ) : (
                <>
                    <h3 className="text-white font-bold mb-4">Article 1 (Purpose)</h3>
                    <p className="mb-6">The purpose of these Terms is to prescribe the rights, obligations, and responsibilities of Curing Innos Inc. (hereinafter referred to as the "Company") and its members regarding the use of all services provided by the Company.</p>
                    
                    <h3 className="text-white font-bold mb-4">Article 2 (Definition)</h3>
                    <p className="mb-6">The definitions of terms used in these Terms are as follows:<br/>
                    1. "Service" means all related services available to "Members" regardless of the terminal implemented (including various wired and wireless devices such as PCs, TVs, and portable terminals).</p>

                    <p className="text-gray-500 italic mt-8">(This text is a placeholder for demonstration purposes.)</p>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;