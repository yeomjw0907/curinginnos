# 개발 가이드

## 📋 목차
1. [개발 환경 설정](#개발-환경-설정)
2. [코딩 컨벤션](#코딩-컨벤션)
3. [컴포넌트 구조](#컴포넌트-구조)
4. [상태 관리](#상태-관리)
5. [API 연동](#api-연동)
6. [배포](#배포)

---

## 개발 환경 설정

### 필수 요구사항
- Node.js 18.x 이상
- npm 9.x 이상

### 초기 설정

```bash
# 1. 저장소 클론
git clone <repository-url>

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필요한 값 입력

# 4. 개발 서버 실행
npm run dev
```

---

## 코딩 컨벤션

### TypeScript
- 모든 컴포넌트는 타입 정의 필수
- `any` 타입 사용 금지 (불가피한 경우 주석 필수)
- Interface는 PascalCase 사용

```typescript
// ✅ Good
interface UserProps {
  name: string;
  age: number;
}

// ❌ Bad
interface userProps {
  name: any;
}
```

### 컴포넌트 네이밍
- 컴포넌트: PascalCase
- 파일명: PascalCase.tsx
- 함수/변수: camelCase
- 상수: UPPER_SNAKE_CASE

```typescript
// ✅ Good
const UserProfile: React.FC<UserProps> = ({ name }) => {
  const [isActive, setIsActive] = useState(false);
  return <div>{name}</div>;
};

export default UserProfile;
```

### 스타일링
- Tailwind CSS 클래스 우선 사용
- 커스텀 CSS는 `index.css`에 정의
- 클래스명은 kebab-case

```tsx
// ✅ Good
<div className="bg-white rounded-lg shadow-md p-4">

// ❌ Bad - 인라인 스타일 지양
<div style={{ background: 'white' }}>
```

---

## 컴포넌트 구조

### 기본 구조

```typescript
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

interface Props {
  // props 정의
}

const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  // 1. Hooks
  const { t } = useLanguage();
  const [state, setState] = useState();

  // 2. Side Effects
  useEffect(() => {
    // effect logic
  }, []);

  // 3. Event Handlers
  const handleClick = () => {
    // handler logic
  };

  // 4. Render Helpers
  const renderItem = () => {
    return <div>Item</div>;
  };

  // 5. Main Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### 폴더 구조 규칙
```
components/
├── ComponentName.tsx       # 단일 컴포넌트
├── ui/                     # UI 공통 컴포넌트
│   ├── Button.tsx
│   └── Modal.tsx
└── features/               # 기능별 그룹
    └── user/
        ├── UserProfile.tsx
        └── UserSettings.tsx
```

---

## 상태 관리

### Context API 사용
다국어, 테마 등 전역 상태는 Context API 사용

```typescript
// 1. Context 정의
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Provider 생성
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook 생성
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Local State
컴포넌트 내부 상태는 `useState` 사용

```typescript
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
});
```

---

## API 연동

### API 서비스 사용

```typescript
// services/user.service.ts
import apiService from './api';

export const userService = {
  getUser: async (id: string) => {
    return await apiService.get(`/users/${id}`);
  },
  
  updateUser: async (id: string, data: UserData) => {
    return await apiService.put(`/users/${id}`, data);
  },
};
```

### 컴포넌트에서 사용

```typescript
const MyComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await userService.getUser('123');
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  return <div>{data?.name}</div>;
};
```

---

## 배포

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 확인
npm run preview
```

### 환경별 설정

#### Development
```env
VITE_ENV=development
VITE_API_BASE_URL=http://localhost:3000/api
```

#### Production
```env
VITE_ENV=production
VITE_API_BASE_URL=https://api.curinginnos.com
```

### 배포 체크리스트
- [ ] TypeScript 에러 없음 (`npm run lint`)
- [ ] 환경 변수 설정 확인
- [ ] SEO 메타 태그 확인
- [ ] 이미지 최적화
- [ ] 번들 크기 확인
- [ ] 브라우저 호환성 테스트

---

## 트러블슈팅

### 흔한 문제들

#### 1. Tailwind 클래스가 적용되지 않음
```bash
# Tailwind 재빌드
npm run dev
```

#### 2. 타입 에러
```bash
# TypeScript 체크
npm run lint
```

#### 3. 환경 변수가 인식되지 않음
- `.env` 파일 위치 확인
- `VITE_` 접두사 확인
- 서버 재시작

---

## 도움말

문제가 해결되지 않으면 이슈를 등록해주세요.

