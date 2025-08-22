# 🎯 Smart Todo App - Frontend

React.js와 Material-UI를 사용한 현대적인 할 일 관리 애플리케이션의 프론트엔드입니다.

## ✨ 주요 기능

### 🎯 핵심 기능

- **할 일 관리**: 추가, 조회, 수정, 삭제 (CRUD)
- **우선순위 설정**: 높음(HIGH), 보통(MEDIUM), 낮음(LOW)
- **마감일 관리**: 날짜별 할 일 관리 및 연체 알림
- **완료 상태 관리**: 체크박스로 간편한 완료 처리

### 🚀 추가 기능

- **할 일 공유**: 이메일을 통한 할 일 공유
- **실시간 통계**: 완료율, 우선순위별 현황 등
- **고급 필터링**: 우선순위, 완료상태별 필터링
- **정렬 기능**: 생성일, 우선순위, 마감일, 제목순 정렬
- **오프라인 지원**: 백엔드 연결 실패 시 로컬 모드로 동작

## 🚀 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

애플리케이션이 `http://localhost:5173`에서 실행됩니다.

### 3. 빌드

```bash
npm run build
```

### 4. 빌드 결과 미리보기

```bash
npm run preview
```

## 🔧 기술 스택

- **React 18** - 최신 React 기능 활용
- **Material-UI (MUI) v5** - 현대적이고 반응형 UI 컴포넌트
- **TypeScript** - 타입 안정성과 개발 생산성 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **SCSS** - 고급 CSS 전처리기
- **date-fns** - 날짜 처리 라이브러리
- **Axios** - HTTP 클라이언트

## 📱 주요 컴포넌트

### 🎯 TodoApp (메인 컴포넌트)

- 전체 애플리케이션 상태 관리
- API 통신 및 오프라인 모드 처리
- 탭 기반 네비게이션 (할 일 목록, 새 할 일)

### 📝 TodoForm (할 일 추가/수정)

- 할 일 제목, 설명, 우선순위, 마감일 입력
- Material-UI 컴포넌트를 사용한 직관적인 폼
- 실시간 유효성 검사

### 📋 TodoList (할 일 목록)

- 할 일 목록 표시 및 관리
- 우선순위별 필터링
- 다양한 정렬 옵션 (생성일, 우선순위, 마감일, 제목, 완료상태)
- 완료율 표시

### 🎯 TodoItem (개별 할 일)

- 할 일 상세 정보 표시
- 완료 상태 토글
- 편집, 삭제, 공유 기능
- 확장 가능한 상세 정보

### 📊 TodoStats (통계 대시보드)

- 전체 할 일 현황 (총 개수, 완료 개수, 진행률)
- 우선순위별 현황
- 오늘 마감인 할 일 개수
- 시각적 진행률 바

## 🎨 UI/UX 특징

### 🎯 Material Design

- Google의 Material Design 가이드라인 준수
- 일관된 디자인 시스템
- 직관적인 사용자 인터페이스

### 📱 반응형 디자인

- 모바일, 태블릿, 데스크톱 모든 기기 지원
- Grid 시스템을 활용한 적응형 레이아웃
- 터치 친화적인 인터페이스

### 🎨 테마 시스템

- 다크/라이트 모드 지원
- 커스터마이징 가능한 색상 팔레트
- 일관된 타이포그래피

## 🔌 API 통신

### 📡 HTTP 클라이언트

- Axios를 사용한 RESTful API 통신
- 인터셉터를 통한 에러 처리
- 요청/응답 로깅

### 🚀 오프라인 지원

- 백엔드 연결 실패 시 로컬 모드로 전환
- 로컬 스토리지를 활용한 데이터 보존
- 네트워크 복구 시 자동 동기화

### 🔒 에러 처리

- 사용자 친화적인 에러 메시지
- 네트워크 오류 시 대체 동작
- 로딩 상태 표시

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── TodoApp.tsx     # 메인 애플리케이션
│   ├── TodoForm.tsx    # 할 일 입력 폼
│   ├── TodoList.tsx    # 할 일 목록
│   ├── TodoItem.tsx    # 개별 할 일
│   └── TodoStats.tsx   # 통계 대시보드
├── services/            # API 서비스
│   └── api.ts          # HTTP 클라이언트
├── types/               # TypeScript 타입 정의
│   └── types.ts         # 할 일 관련 타입
├── styles/              # 스타일 파일
│   └── global.scss     # 전역 스타일
├── App.tsx              # 루트 컴포넌트
└── main.tsx            # 애플리케이션 진입점
```

## 🎯 주요 컴포넌트 사용 이유

### 🚀 React 18

- **Concurrent Features**: 사용자 경험 향상
- **Automatic Batching**: 성능 최적화
- **Suspense**: 로딩 상태 관리

### 🎨 Material-UI (MUI)

- **Design System**: 일관된 디자인
- **Accessibility**: 접근성 향상
- **Responsive**: 반응형 디자인
- **Customization**: 테마 커스터마이징

### 🔧 TypeScript

- **Type Safety**: 런타임 에러 방지
- **IntelliSense**: 개발 생산성 향상
- **Refactoring**: 안전한 코드 리팩토링

### ⚡ Vite

- **Fast HMR**: 빠른 핫 리로드
- **ES Modules**: 최신 JavaScript 기능
- **Optimized Build**: 최적화된 빌드

## 🚀 성능 최적화

### 📦 코드 분할

- React.lazy를 사용한 컴포넌트 지연 로딩
- 동적 import를 통한 번들 크기 최적화

### 🎯 메모이제이션

- React.memo를 사용한 불필요한 리렌더링 방지
- useMemo, useCallback을 통한 최적화

### 🖼️ 이미지 최적화

- WebP 포맷 지원
- 지연 로딩 및 스켈레톤 UI

## 🧪 테스트

### 🧪 Jest + React Testing Library

```bash
npm test
```

### 📊 테스트 커버리지

```bash
npm run test:coverage
```

## 🔧 개발 환경 설정

### 📋 필수 요구사항

- Node.js 16+
- npm 8+

### 🚀 개발 서버

```bash
npm run dev
```
