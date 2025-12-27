import { Translation } from './types';

export const DICTIONARY: Record<'ko' | 'en', Translation> = {
  ko: {
    nav: {
      brand: '브랜드',
      brandItems: {
        vision: '비전 & 미션',
        company: '회사 소개',
        team: '팀 소개',
      },
      products: '제품',
      productItems: {
        standard: 'iVOLVE Standard',
        manager: 'iVOLVE Manager',
        app: '라켓타임',
      },
      resources: '자료실',
      resourceItems: {
        guides: '제품 사용 가이드',
        marketing: '홍보 및 안내 자료',
        company: '회사 소개',
      },
      support: '고객지원',
      supportItems: {
        faq: '자주 묻는 질문',
        manuals: '매뉴얼',
        board: '게시판',
      },
      contact: '문의하기',
    },
    hero: {
      title: '테니스의 미래,\nAI 로봇 파트너 iVOLVE와 함께',
      subtitle: '큐링이노스의 자율주행 기술로 완성된 차세대 스마트 코트 솔루션을 경험하세요.',
      cta: '제품 알아보기',
    },
    productsPage: {
      title: '제품 소개',
      subtitle: '큐링이노스의 혁신적인 제품 라인업을 만나보세요.',
      items: {
        standard: {
          name: 'iVOLVE Standard',
          desc: '세계 최초 자율주행 테니스 로봇. 실제 파트너와 같은 훈련 경험을 제공합니다.',
          features: ['자율주행 이동', '실전 같은 구질', '대용량 볼 공급']
        },
        manager: {
          name: 'iVOLVE Manager',
          desc: '무인 테니스장을 위한 완벽한 IoT 통합 관리 솔루션.',
          features: ['자동 냉난방 제어', 'QR 출입 관리', '실시간 원격 제어']
        },
        app: {
          name: '라켓타임',
          desc: '테니스 예약부터 매칭까지, 모든 것을 하나로 연결하는 플랫폼.',
          features: ['실시간 코트 예약', 'QR 체크인', '솔로/매치 모드']
        }
      }
    },
    brand: {
      title: '브랜드 스토리',
      subtitle: '스포츠와 AI 기술의 완벽한 결합',
      vision: {
        title: '비전',
        missionTitle: '미션',
        desc: '우리는 기술을 통해 스포츠의 경계를 확장하고, 누구나 더 쉽고 즐겁게 테니스를 즐길 수 있는 세상을 만듭니다.',
        missionDesc: '혁신적인 로보틱스 기술로 스포츠 훈련과 운영의 패러다임을 바꿉니다.',
      },
      company: {
        title: '회사 소개',
        desc: '큐링이노스는 AI 자율주행 로봇 기술을 스포츠 분야에 접목한 테크 스타트업입니다.',
        history: [
            { year: '2023', event: 'CES 2023 혁신상 수상 (Robotics 부문)' },
            { year: '2022', event: 'iVOLVE Standard 런칭' },
            { year: '2021', event: '큐링이노스 법인 설립' },
        ]
      },
      team: {
        title: '팀 소개',
        desc: '최고의 기술력을 가진 전문가들이 모였습니다.',
        members: [
            { name: 'Kwon Jin', role: 'CEO / Founder' },
            { name: 'Sarah Lee', role: 'CTO' },
            { name: 'David Kim', role: 'Head of Robotics' },
            { name: 'Mike Chen', role: 'Lead AI Engineer' },
        ]
      }
    },
    standardPage: {
      title: 'iVOLVE Standard 아이볼브 스탠다드',
      desc: '최대 120km/h의 속도와 강력한 스핀으로 프로 선수조차 도전하게 만드는 훈련 파트너입니다. 단순한 기계가 아닌, 당신의 라이벌입니다.',
      price: '4,400,000원',
      delivery: '주문 후 2주 ~ 1개월 (본사 사정에 따라 일정 변동)',
      install: '택배/화물 - 자가설치 (출장요청 - 별도실비)',
      cta: '구매하기',
      videoTitle: '테니스 AI 최신형 볼머신기',
      sections: {
        install: { title: '공사 없이, 코트 크기 상관없이 설치 가능.', desc: 'iVOLVE Standard는 이동 설치가 쉬워 공사가 필요 없습니다. 어디든 제품을 설치하고 바로 시작하세요.' },
        reality: { title: '실제 사람과 테니스를 치는 것처럼.', desc: '사람과 치는 것 같은 실재감 있는 구질을 구현합니다. 스핀, 속도, 방향을 자유롭게 조절하세요.' },
        capacity: { title: '끊임 없이 넉넉하게.', desc: '한 번에 200개 이상의 공을 넣고 오랫동안 연습할 수 있습니다. 흐름이 끊기지 않고 몰입할 수 있습니다.' },
        interface: { title: '이렇게 편리한 조작 인터페이스.', desc: '원하는 구질, 스핀, 피드 간격을 설정하고 공의 낙하 위치를 순서대로 터치하면 설정 끝.' },
        data: { title: '간편한 발사데이터 설정.', desc: '코트 크기에 맞춰 발사될 위치를 조정합니다. 제품이 설치된 위치만 입력하면 모든 세팅이 자동으로 최적화됩니다.' },
      },
      specs: {
        label: '제품 제원',
        items: [
          { label: '발사모드', value: '단일 발사 / 패턴/랜덤 발사' },
          { label: '공 발사 갯수', value: '최대 200개 이상' },
          { label: '무게', value: '23kg' },
          { label: '보증 기간', value: '6개월' },
        ]
      }
    },
    managerPage: {
      title: 'iVOLVE Manager',
      subtitle: '스마트 코트 솔루션',
      pricing: {
        setup: '초기 설치비: 실내외 시설 55만원 (프로모션)',
        monthly: '월 구독료: Basic 월 5.5만원 / Standard 월 16.5만원',
      },
      features: {
        iot: { title: 'IoT 기반 매장 관리 솔루션', desc: '조명, 냉난방, 전원을 예약 시간에 맞춰 자동으로 On/Off 합니다.' },
        energy: { 
          title: '획기적인 에너지 절감', 
          desc: '전기로 및 냉난방 비용 51.6% 감소 효과',
          table: [
            { label: '분기 총 전기량', before: '2,921 kW', after: '973 kW' },
            { label: '분기 평균 전기료', before: '554,990원', after: '184,996원' },
          ]
        },
        compatibility: { title: '모든 스포츠 시설에 접목 가능', desc: '실내외 테니스, 배드민턴, 탁구, 피클볼 등 모든 시설에 자유롭게 설치가 가능합니다.' },
      },
      checklist: [
        '아이볼브 매니저 시스템은 라켓타임 플랫폼과 연동되는 무인화 솔루션을 제공하는 시스템으로, IoT H/W 관련한 사항과 책임은 H/W 제조사에 있습니다.',
        '아이볼브 매니저 시스템은 라켓타임 플랫폼 사용이 필수입니다.',
        '요금 플랜에 따라 사용 가능한 IoT 제품의 수량이 제한될 수 있습니다.'
      ],
      cta: '서비스 신청하기',
    },
    appPage: {
      hero: { title: '테니스예약의 모든 것\n지금은 라켓타임.', subtitle: '쉽고 간편한 토탈 테니스 예약 플랫폼', download: '앱 설치하기' },
      features: {
        search: { title: '내 주변 매장을 한 눈에 보고', desc: '현재 내 위치를 중심으로 가까운 매장을 먼저 보여드려요. 필터링을 통해 내가 원하는 시설이 있는 곳만 볼 수 있어요.' },
        booking: { title: '예약부터 결제까지 손 안에서 한번에', desc: '라켓타임에서는 내가 원하는 이용권만 골라 구매하고, 원하는 시간에 딱 예약할 수 있어요.' },
        match: { title: '혼자 테니스를 연습할 공간이 없나요?', desc: '예약 번호를 태블릿에 입력하기만 하면 끝! 완전 비대면, 테린이부터 테른이까지 눈치보지 말고 즐기자.' },
      },
      cta: '라켓타임 앱 무료로 시작하기',
    },
    solutions: {
      title: '비즈니스 솔루션',
      subtitle: '무인 매장 운영과 IoT 제어, 결제까지 한번에 해결하세요.',
      feature1: 'IoT 기반 통합 매장 관리',
      feature2: '키오스크 및 앱 결제 연동',
    },
    resourcesPage: {
      title: '자료실',
      subtitle: '제품 가이드, 브로슈어, 회사소개서 등 다양한 자료를 확인하세요.',
      sections: {
        guides: '제품 사용 가이드',
        marketing: '홍보 및 안내 자료',
        company: '회사 소개',
      },
      items: {
        standard: 'iVOLVE Standard 가이드',
        manager: '스마트 코트 (Manager) 가이드',
        app: '라켓타임 앱 가이드',
        catalog: '제품 통합 카탈로그',
        companyProfile: '큐링이노스 회사소개서',
      },
      download: '다운로드'
    },
    support: {
      title: '고객지원',
      subtitle: '무엇을 도와드릴까요?',
      faq: 'FAQ',
      manuals: '제품 매뉴얼 다운로드',
      board: '공지사항 및 게시판',
      faqItems: [
        { category: 'Service', q: '제품의 보증 기간은 어떻게 되나요?', a: '기본 보증 기간은 6개월이며, 이후 유상 수리가 가능합니다.' },
        { category: 'Delivery', q: '배송까지 얼마나 걸리나요?', a: '주문 제작 방식으로 약 2주에서 4주 정도 소요됩니다.' },
        { category: 'Service', q: '설치는 직접 해야 하나요?', a: '기본적으로 자가 설치가 가능하며, 필요시 유상 출장 설치를 요청하실 수 있습니다.' },
        { category: 'Product', q: '공의 속도는 얼마나 되나요?', a: '최대 120km/h까지 설정 가능합니다.' },
        { category: 'Product', q: '실외에서도 사용 가능한가요?', a: '네, 생활 방수 기능을 지원하여 실외 사용이 가능합니다.' },
      ],
      boardItems: [
        { id: 1, date: '2023.10.15', title: 'iVOLVE 펌웨어 업데이트 안내 (v2.1)', author: 'Admin', content: 'iVOLVE Standard의 새로운 펌웨어 v2.1이 릴리즈되었습니다.\n\n[주요 변경사항]\n- 탑스핀 모드 정확도 개선\n- 배터리 효율 15% 증가\n- 랜덤 모드 패턴 추가\n\n업데이트는 기기 설정 메뉴에서 Wi-Fi를 통해 자동으로 진행됩니다.' },
        { id: 2, date: '2023.09.20', title: '추석 연휴 배송 일정 안내', author: 'Support', content: '안녕하세요, 큐링이노스입니다.\n추석 연휴로 인한 배송 일정을 안내드립니다.\n\n- 배송 마감: 9월 25일(월) 오후 2시\n- 배송 재개: 10월 4일(수)부터 순차 발송\n\n즐거운 한가위 되시길 바랍니다.' },
        { id: 3, date: '2023.08.01', title: '라켓타임 서버 점검 안내', author: 'Dev Team', content: '보다 안정적인 서비스를 위해 라켓타임 서버 점검이 예정되어 있습니다.\n\n- 일시: 2023년 8월 3일(목) 02:00 ~ 06:00 (4시간)\n- 내용: DB 증설 및 보안 패치 적용\n\n점검 시간 동안 앱 접속 및 예약이 불가능합니다. 양해 부탁드립니다.' },
      ]
    },
    contact: {
      title: '문의하기',
      subtitle: '큐링이노스의 혁신적인 기술과 함께하세요.',
      form: {
        name: '성함',
        contact: '연락처',
        email: '이메일',
        type: '문의 유형',
        typePlaceholder: '선택해주세요',
        types: {
          purchase: '제품 구매',
          b2b: '무인 창업 상담',
          partnership: '기술 제휴',
        },
        dynamic: {
          product: '관심 제품',
          quantity: '예상 구매 수량',
          region: '설치/창업 예정 지역',
          businessName: '상호명 (예정)',
          spaceSize: '공간 면적 (평/m²)',
          companyName: '기업/단체명',
          website: '웹사이트 URL',
        },
        message: '내용',
        privacy: '개인정보 수집 동의',
        submit: '문의하기',
        success: '문의가 성공적으로 접수되었습니다. 감사합니다.',
      },
    },
    footer: {
      privacy: '개인정보 처리방침 및 법적고지',
      terms: '이용약관',
      news: '새 소식',
      contactLink: '문의하기',
      inquiryLabel: '제품 문의',
      companyName: '주식회사 큐링이노스',
      owner: '대표 : 권예찬',
      bizId: '사업자등록번호 : 868-88-02057',
      address: '인천광역시 연수구 송도문화로 119 인천글로벌캠퍼스 B1041-3',
      copyright: 'COPYRIGHT 2019-2024 CURINGINNOS. ALL RIGHTS RESERVED.'
    }
  },
  en: {
    nav: {
      brand: 'Brand',
      brandItems: {
        vision: 'Vision & Mission',
        company: 'Company',
        team: 'Team',
      },
      products: 'Products',
      productItems: {
        standard: 'iVOLVE Standard',
        manager: 'iVOLVE Manager',
        app: 'Racket Time',
      },
      resources: 'Resources',
      resourceItems: {
        guides: 'User Guides',
        marketing: 'Marketing Materials',
        company: 'Company Info',
      },
      support: 'Support',
      supportItems: {
        faq: 'FAQ',
        manuals: 'Manuals',
        board: 'Board',
      },
      contact: 'Contact Us',
    },
    hero: {
      title: 'The Future of Tennis:\nMeet iVOLVE, Your AI Robot Partner',
      subtitle: "Experience the next-generation smart court solution powered by Curing Innos' autonomous driving technology.",
      cta: 'Explore Products',
    },
    productsPage: {
      title: 'Our Products',
      subtitle: 'Discover Curing Innos\' innovative product lineup.',
      items: {
        standard: {
          name: 'iVOLVE Standard',
          desc: 'The world\'s first autonomous tennis robot. Provides a training experience just like a real partner.',
          features: ['Autonomous Driving', 'Realistic Ball Action', 'Large Ball Capacity']
        },
        manager: {
          name: 'iVOLVE Manager',
          desc: 'Perfect IoT integrated management solution for unmanned tennis courts.',
          features: ['Auto HVAC Control', 'QR Access Control', 'Real-time Remote Control']
        },
        app: {
          name: 'Racket Time',
          desc: 'A platform connecting everything from tennis booking to matching.',
          features: ['Real-time Booking', 'QR Check-in', 'Solo/Match Modes']
        }
      }
    },
    brand: {
      title: 'Brand Story',
      subtitle: 'Perfect Integration of Sports and AI Technology',
      vision: {
        title: 'Vision',
        missionTitle: 'Mission',
        desc: 'We expand the boundaries of sports through technology, creating a world where anyone can enjoy tennis more easily.',
        missionDesc: 'Changing the paradigm of sports training and operation with innovative robotics technology.',
      },
      company: {
        title: 'Company',
        desc: 'Curing Innos is a tech startup integrating AI autonomous robot technology into sports.',
        history: [
            { year: '2023', event: 'CES 2023 Innovation Award (Robotics)' },
            { year: '2022', event: 'Launched iVOLVE Standard' },
            { year: '2021', event: 'Curing Innos Incorporated' },
        ]
      },
      team: {
        title: 'Our Team',
        desc: 'Experts with top-tier technology.',
        members: [
            { name: 'Kwon Jin', role: 'CEO / Founder' },
            { name: 'Sarah Lee', role: 'CTO' },
            { name: 'David Kim', role: 'Head of Robotics' },
            { name: 'Mike Chen', role: 'Lead AI Engineer' },
        ]
      }
    },
    standardPage: {
      title: 'iVOLVE Standard',
      desc: 'Experience ball speeds up to 120km/h with spin rates that challenge even professional players. It\'s not just a machine; it\'s a rival.',
      price: '₩ 4,400,000',
      delivery: '2 Weeks ~ 1 Month',
      install: 'Courier/Freight - Self Install (Technician visit requires extra fee)',
      cta: 'Buy Now',
      videoTitle: 'Tennis AI Latest Ball Machine',
      sections: {
        install: { title: 'No Construction, Fits Any Court.', desc: 'iVOLVE Standard requires no construction. Just place it anywhere and start playing.' },
        reality: { title: 'Just Like Playing with a Real Person.', desc: 'Implements realistic ball quality. Adjust spin, speed, and direction freely.' },
        capacity: { title: 'Endless Capacity.', desc: 'Load over 200 balls at once for long practice sessions without interruption.' },
        interface: { title: 'Intuitive Touch Interface.', desc: 'Set your desired shot type, spin, and feed interval, then touch the drop locations in order.' },
        data: { title: 'Easy Launch Data Setup.', desc: 'Simply input the machine installation location, and all settings are optimized automatically.' },
      },
      specs: {
        label: 'Specifications',
        items: [
          { label: 'Mode', value: 'Single / Pattern / Random' },
          { label: 'Capacity', value: 'Max 200+ balls' },
          { label: 'Weight', value: '23kg' },
          { label: 'Warranty', value: '6 Months' },
        ]
      }
    },
    managerPage: {
      title: 'iVOLVE Manager',
      subtitle: 'Smart Court Solution',
      pricing: {
        setup: 'Initial Setup: Indoor/Outdoor 550,000 KRW (Promo)',
        monthly: 'Subscription: Basic 55,000 KRW / Standard 165,000 KRW',
      },
      features: {
        iot: { title: 'IoT Store Management', desc: 'Automatically controls Lighting, HVAC, and Power based on reservation schedules.' },
        energy: { 
          title: 'Drastic Energy Saving', 
          desc: '51.6% reduction in electricity and HVAC costs.',
          table: [
            { label: 'Quarterly Usage', before: '2,921 kW', after: '973 kW' },
            { label: 'Avg Cost', before: '554,990 KRW', after: '184,996 KRW' },
          ]
        },
        compatibility: { title: 'For All Sports Facilities', desc: 'Applicable to indoor/outdoor Tennis, Badminton, Table Tennis, Pickleball, etc.' },
      },
      checklist: [
        'iVOLVE Manager provides unmanned solutions linked with Racket Time platform. IoT H/W responsibility lies with the manufacturer.',
        'Racket Time platform usage is mandatory.',
        'Quantity of usable IoT devices depends on the pricing plan.'
      ],
      cta: 'Apply for Service',
    },
    appPage: {
      hero: { title: 'All About Tennis Reservations\nRacket Time.', subtitle: 'Easy and simple total tennis platform', download: 'Download App' },
      features: {
        search: { title: 'Find Nearby Courts at a Glance', desc: 'Shows courts near your current location first. Filter to see only the facilities you want.' },
        booking: { title: 'From Booking to Payment in Your Hand', desc: 'Select only the passes you want and book exactly the time you need.' },
        match: { title: 'No Space to Practice Alone?', desc: 'Just enter your reservation number on the tablet! Completely contactless enjoyment.' },
      },
      cta: 'Start Racket Time for Free',
    },
    solutions: {
      title: 'Business Solutions',
      subtitle: 'Solve unmanned store operations, IoT control, and payments all at once.',
      feature1: 'IoT-based Integrated Management',
      feature2: 'Kiosk & App Payment Integration',
    },
    resourcesPage: {
      title: 'Resources',
      subtitle: 'Access product guides, brochures, and company information.',
      sections: {
        guides: 'User Guides',
        marketing: 'Marketing Materials',
        company: 'Company Info',
      },
      items: {
        standard: 'iVOLVE Standard Guide',
        manager: 'Smart Court (Manager) Guide',
        app: 'Racket Time App Guide',
        catalog: 'Product Catalog',
        companyProfile: 'Company Introduction',
      },
      download: 'Download'
    },
    support: {
      title: 'Support',
      subtitle: 'How can we help you?',
      faq: 'FAQ',
      manuals: 'Download Manuals',
      board: 'Notice & Board',
      faqItems: [
        { category: 'Service', q: 'What is the warranty period?', a: 'Standard warranty is 6 months, paid service available afterwards.' },
        { category: 'Delivery', q: 'How long does delivery take?', a: 'It takes about 2-4 weeks as it is made to order.' },
        { category: 'Service', q: 'Do I need to install it myself?', a: 'Self-installation is standard, paid professional installation is available.' },
        { category: 'Product', q: 'What is the max ball speed?', a: 'You can set it up to 120km/h.' },
        { category: 'Product', q: 'Can I use it outdoors?', a: 'Yes, it supports basic water resistance for outdoor use.' },
      ],
      boardItems: [
        { id: 1, date: '2023.10.15', title: 'iVOLVE Firmware Update (v2.1)', author: 'Admin', content: 'New firmware v2.1 for iVOLVE Standard has been released.\n\n[Changes]\n- Improved Topspin accuracy\n- 15% better battery efficiency\n- Added Random Mode patterns\n\nUpdate starts automatically via Wi-Fi.' },
        { id: 2, date: '2023.09.20', title: 'Holiday Shipping Schedule', author: 'Support', content: 'Shipping will be paused during the holidays.\n\n- Cutoff: Sep 25th 2PM\n- Resume: Oct 4th\n\nThank you.' },
        { id: 3, date: '2023.08.01', title: 'Racket Time Server Maintenance', author: 'Dev Team', content: 'Server maintenance scheduled for stability.\n\n- Time: Aug 3rd 02:00 ~ 06:00\n- DB expansion and security patches\n\nApp access will be unavailable during this time.' },
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Join the innovation with Curing Innos.',
      form: {
        name: 'Name',
        contact: 'Phone Number',
        email: 'Email',
        type: 'Inquiry Type',
        typePlaceholder: 'Please select',
        types: {
          purchase: 'Product Purchase',
          b2b: 'Franchise/Startup',
          partnership: 'Partnership',
        },
        dynamic: {
          product: 'Interested Product',
          quantity: 'Estimated Quantity',
          region: 'Location / Region',
          businessName: 'Business Name',
          spaceSize: 'Space Size (sqm)',
          companyName: 'Company Name',
          website: 'Website URL',
        },
        message: 'Message',
        privacy: 'Agree to Privacy Policy',
        submit: 'Submit',
        success: 'Your inquiry has been successfully submitted. Thank you.',
      },
    },
    footer: {
      privacy: 'Privacy Policy & Legal Notice',
      terms: 'Terms of Service',
      news: 'News',
      contactLink: 'Contact Us',
      inquiryLabel: 'Product Inquiry',
      companyName: 'Curing Innos Inc.',
      owner: 'CEO : Yechan Kwon',
      bizId: 'Business Registration : 868-88-02057',
      address: 'B1041-3, Incheon Global Campus, 119 Songdomunhwa-ro, Yeonsu-gu, Incheon, Korea',
      copyright: 'COPYRIGHT 2019-2024 CURINGINNOS. ALL RIGHTS RESERVED.'
    }
  },
};