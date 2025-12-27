import React from 'react';
import { useLanguage } from '../../components/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-32 min-h-screen bg-dark text-gray-300">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h1 className="text-3xl font-bold mb-8 text-white">
            {language === 'ko' ? '개인정보 처리방침' : 'Privacy Policy'}
        </h1>
        <div className="prose prose-invert max-w-none text-sm leading-relaxed border border-white/10 rounded-2xl p-8 bg-white/5">
             {language === 'ko' ? (
                <>
                    <h3 className="text-white font-bold mb-4">1. 개인정보의 수집 및 이용 목적</h3>
                    <p className="mb-6">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/>
                    - 제품 구매 및 상담 문의 처리<br/>
                    - 서비스 제공 및 유지보수</p>
                    
                    <h3 className="text-white font-bold mb-4">2. 수집하는 개인정보의 항목</h3>
                    <p className="mb-6">회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br/>
                    - 수집항목 : 이름, 휴대전화번호, 이메일, 회사명, 직책</p>

                    <h3 className="text-white font-bold mb-4">3. 개인정보의 보유 및 이용기간</h3>
                    <p className="mb-6">회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                    
                    <p className="text-gray-500 italic mt-8">(본 내용은 데모 페이지를 위한 예시 텍스트입니다. 실제 운영 시 법적 검토를 거친 방침을 기재하시기 바랍니다.)</p>
                </>
            ) : (
                <>
                    <h3 className="text-white font-bold mb-4">1. Purpose of Collection and Use</h3>
                    <p className="mb-6">The Company processes personal data for the following purposes. Personal data being processed will not be used for purposes other than the following, and necessary measures such as obtaining separate consent will be taken if the purpose of use changes.<br/>
                    - Processing product purchases and inquiries<br/>
                    - Service provision and maintenance</p>
                    
                    <h3 className="text-white font-bold mb-4">2. Items Collected</h3>
                    <p className="mb-6">The Company collects the following personal data for membership registration, consultation, and service application.<br/>
                    - Items collected: Name, Phone number, Email, Company name, Job title</p>

                    <p className="text-gray-500 italic mt-8">(This text is a placeholder for demonstration purposes.)</p>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;