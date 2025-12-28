# Curing Innos - AI Tennis Partner

<div align="center">
  <h3>🎾 테니스의 미래, AI 로봇 파트너 iVOLVE와 함께</h3>
  <p>큐링이노스의 자율주행 기술로 완성된 차세대 스마트 코트 솔루션</p>
</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [개선 사항](#-개선-사항)

---

## 🎯 프로젝트 소개

큐링이노스(Curing Innos)는 AI 기반 테니스 로봇과 스마트 코트 솔루션을 제공하는 기업의 공식 웹사이트입니다.

### 주요 제품
- **iVOLVE Standard**: 세계 최초 자율주행 테니스 로봇
- **iVOLVE Manager**: IoT 기반 무인 코트 관리 시스템
- **라켓타임**: 테니스 코트 예약 및 매칭 플랫폼

---

## 🛠️ 기술 스택

### Core
- **React 18.2** - UI 라이브러리
- **TypeScript 5.8** - 타입 안정성
- **Vite 6.2** - 빌드 도구

### Styling
- **Tailwind CSS 3.4** - 유틸리티 CSS 프레임워크
- **PostCSS** - CSS 후처리
- **Framer Motion 11.0** - 애니메이션

### Routing & State
- **React Router DOM 6.22** - 클라이언트 라우팅
- **Context API** - 전역 상태 관리 (다국어)

### SEO & API
- **React Helmet Async 2.0** - SEO 최적화
- **Axios 1.6** - HTTP 클라이언트

### Icons & UI
- **Lucide React** - 아이콘 라이브러리

---

## ✨ 주요 기능

### 🌐 다국어 지원
- 한글/영어 전환 기능
- Context API를 통한 전역 언어 관리
- 모든 텍스트 중앙 집중화 (`constants.ts`)

### 🎨 현대적인 디자인
- Apple 스타일 디자인 시스템
- Glass morphism UI
- 부드러운 애니메이션 효과
- 완전한 반응형 디자인

### ⚡ 성능 최적화
- **코드 스플리팅**: React.lazy로 페이지별 번들 분리
- **청크 최적화**: Vendor 별 수동 청크 분할
- **지연 로딩**: 이미지 및 컴포넌트 lazy loading

### 🛡️ 안정성
- **에러 바운더리**: 런타임 에러 처리
- **TypeScript**: 타입 안전성 보장
- **API 레이어**: 중앙 집중화된 API 관리

### 🔍 SEO 최적화
- React Helmet을 통한 동적 메타 태그
- Open Graph & Twitter Card 지원
- 구조화된 데이터 (Schema.org)

---

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 4. 빌드 미리보기

```bash
npm run preview
```

### 5. 타입 체크

```bash
npm run lint
```

---

## 📁 프로젝트 구조

```
curinginnos/
├── components/              # 재사용 가능한 컴포넌트
│   ├── Header.tsx          # 네비게이션
│   ├── Footer.tsx          # 푸터
│   ├── Hero.tsx            # 히어로 섹션
│   ├── ContactForm.tsx     # 문의 폼
│   ├── ErrorBoundary.tsx   # 에러 처리
│   ├── SEO.tsx             # SEO 컴포넌트
│   ├── LanguageContext.tsx # 다국어 Context
│   └── ui/                 # UI 서브컴포넌트
│       ├── Loading.tsx
│       ├── Toast.tsx
│       └── VideoModal.tsx
├── pages/                   # 페이지 컴포넌트
│   ├── Brand.tsx           # 브랜드 소개
│   ├── ProductStandard.tsx
│   ├── ProductManager.tsx
│   ├── AppPage.tsx         # 라켓타임
│   ├── resources/          # 자료실
│   ├── support/            # 고객지원
│   └── legal/              # 약관
├── services/                # API 서비스
│   ├── api.ts              # Axios 인스턴스
│   └── contact.service.ts  # 문의 서비스
├── constants.ts             # 다국어 상수
├── types.ts                 # TypeScript 타입
├── App.tsx                  # 메인 앱
├── index.tsx                # 진입점
├── index.css                # 글로벌 스타일
├── vite.config.ts           # Vite 설정
├── tailwind.config.js       # Tailwind 설정
├── postcss.config.js        # PostCSS 설정
└── tsconfig.json            # TypeScript 설정
```

---

## 🎉 개선 사항

이 프로젝트는 다음과 같은 개선 작업이 완료되었습니다:

### ✅ 완료된 개선
1. **Tailwind CSS 로컬 설정**
   - CDN → PostCSS 기반 빌드로 전환
   - 커스텀 테마 설정 개선
   - 프로덕션 최적화

2. **의존성 업데이트**
   - React Helmet Async 추가
   - Axios 추가
   - TypeScript 타입 정의 추가

3. **코드 스플리팅**
   - React.lazy로 모든 페이지 지연 로딩
   - Vendor 별 청크 분리
   - 초기 로딩 속도 개선

4. **에러 바운더리**
   - 런타임 에러 안전 처리
   - 사용자 친화적 에러 페이지
   - 개발 모드 에러 디버깅

5. **API 서비스 레이어**
   - Axios 기반 HTTP 클라이언트
   - 인터셉터를 통한 인증 처리
   - 중앙 집중화된 API 관리

6. **환경 변수 설정**
   - `.env` 파일 구조화
   - Vite 환경 변수 지원
   - `.gitignore` 업데이트

7. **SEO 최적화**
   - React Helmet Async 통합
   - 동적 메타 태그 생성
   - Open Graph & Twitter Card

8. **로딩 컴포넌트**
   - 브랜드 아이덴티티 반영
   - 애니메이션 효과
   - Suspense fallback

---

## 🌍 환경 변수

`.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Optional: Gemini API Key
VITE_GEMINI_API_KEY=your_api_key_here

# Environment
VITE_ENV=development
```

---

## 📱 지원 브라우저

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

---

## 👥 기여하기

버그 리포트나 기능 제안은 이슈로 등록해주세요.

---

## 📄 라이선스

© 2019-2024 CURINGINNOS. ALL RIGHTS RESERVED.

---

## 📞 문의

- **회사**: 주식회사 큐링이노스
- **주소**: 인천광역시 연수구 송도문화로 119 인천글로벌캠퍼스 B1041-3
- **사업자등록번호**: 868-88-02057
