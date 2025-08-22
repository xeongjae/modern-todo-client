# 모던투두 - 할 일 관리 애플리케이션

<br />

<p align="center">
<img src="public/doFavicon.png" alt="로고" width="200"/>
</p>

<p align="center">
  <strong>
 좀 더 효율적인 일정 관리를 위해 할 일 마다 우선순위를 정할 수 있는 투두 어플리케이션 입니다. 
  </strong>
<br>

<br />
<br />
<br />

# 🛠 사용 기술

| 구분              | 기술                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**      | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> |
| **Backend**       | <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white"> <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white"> <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white">                                                                                                                                                                                                |


<br />
<br />
<br />

# 아키텍처
  

---

##  폴더 구조

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

### 핵심 기능

- **할 일 관리**: 추가, 조회, 수정, 삭제 (CRUD)
- **우선순위 설정**: 높음(HIGH), 보통(MEDIUM), 낮음(LOW)
- **마감일 관리**: 날짜별 할 일 관리 및 연체 알림
- **완료 상태 관리**: 체크박스로 간편한 완료 처리

# 추가 기능

- **할 일 공유**: 이메일을 통한 할 일 공유
- **실시간 통계**: 완료율, 우선순위별 현황 등
- **고급 필터링**: 우선순위, 완료상태별 필터링
- **정렬 기능**: 생성일, 우선순위, 마감일, 제목순 정렬
- **오프라인 지원**: 백엔드 연결 실패 시 로컬 모드로 동작

# 실행 방법

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

## 주요 컴포넌트 


