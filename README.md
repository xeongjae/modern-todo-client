# 모던투두 - 할 일 관리 애플리케이션

<br />

<p align="center">
<img src="public/doFavicon.png" alt="로고" width="200"/>
</p>

<p align="center">
  <strong>
 좀 더 효율적인 일정 관리를 위해 할 일 마다 우선순위를 정할 수 있는 투두 어플리케이션 입니다. 
  </strong>
</p>

<br />

## 📱 개발한 앱에 대한 설명

**모던투두**는 React.js와 Material-UI를 활용하여 개발된 현대적인 할 일 관리 애플리케이션입니다.

### 주요 특징

- **직관적인 UI/UX**: Material Design 가이드라인을 따른 깔끔한 인터페이스
- **우선순위 기반 관리**: 높음/보통/낮음 우선순위로 효율적인 일정 관리
- **드래그 앤 드롭**: 직관적인 순서 변경으로 사용자 정의 정렬
- **실시간 통계**: 진행률과 우선순위별 현황을 한눈에 확인
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험

<br />

# 🛠 사용 기술

| 구분         | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">                  |
| **Backend**  | <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white"> <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white"> <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"> |

<br />

# 🏗️ 아키텍처

## 설계 원칙

- **컴포넌트 기반 아키텍처**: 재사용 가능한 UI 컴포넌트로 모듈화
- **상태 관리**: React hooks를 활용한 효율적인 상태 관리
- **타입 안전성**: TypeScript로 컴파일 타임 에러 방지
- **관심사 분리**: UI, 비즈니스 로직, 데이터 계층의 명확한 분리

## 데이터 흐름

```
사용자 액션 → 컴포넌트 → 상태 업데이트 → UI 리렌더링
     ↓
API 호출 → 백엔드 서버 → 응답 처리 → 상태 동기화
```

<br />

## 📁 폴더 구조

```
src/
├── components/          # React 컴포넌트
│   ├── TodoHeader.tsx  # 헤더 (제목, 통계, 정렬 옵션)
│   ├── TodoList.tsx    # 할 일 목록 (드래그 앤 드롭)
│   ├── TodoItem.tsx    # 개별 할 일 항목
│   ├── AddTodo.tsx     # 할 일 추가 모달
│   └── Notification.tsx # 알림 시스템
├── pages/               # 페이지 컴포넌트
│   └── TodoListPage.tsx # 메인 페이지 (상태 관리)
├── types/               # TypeScript 타입 정의
│   └── types.ts         # Todo, Priority 등 타입
├── utils/               # 유틸리티 함수
│   └── api.ts           # 백엔드 API 통신
├── styles/              # 스타일 파일
│   ├── globalStyle.scss # 전역 스타일
│   └── theme.ts         # MUI 테마 설정
├── App.tsx              # 루트 컴포넌트
└── main.tsx            # 애플리케이션 진입점
```

<br />

# ⭐ 핵심 기능

## 기본 CRUD 기능

- **할 일 추가**: 제목, 설명, 우선순위 설정
- **할 일 조회**: 목록 형태로 모든 할 일 표시
- **할 일 수정**: 인라인 편집으로 제목과 설명 수정
- **할 일 삭제**: 확인 후 안전한 삭제

## 우선순위 관리

- **3단계 우선순위**: HIGH(높음), MEDIUM(보통), LOW(낮음)
- **시각적 구분**: 색상과 아이콘으로 우선순위 표시
- **우선순위별 통계**: 각 우선순위별 완료율과 개수

## 정렬 및 필터링

- **정렬 옵션**: 등록순, 우선순위순 정렬
- **스마트 정렬**: 우선순위가 같을 때 생성일순으로 정렬
- **사용자 정의 순서**: 드래그 앤 드롭으로 순서 변경

## 진행률 관리

- **완료 상태 토글**: 체크박스로 간편한 완료 처리
- **실시간 통계**: 전체 완료율과 우선순위별 현황
- **시각적 피드백**: 진행 상황을 한눈에 파악

<br />

# 🚀 아이디어 추가 기능

## 1. 드래그 앤 드롭 순서 변경 ⭐

- **기능 설명**: 할 일 항목을 드래그하여 원하는 순서로 재배치
- **사용 이유**: 사용자가 직관적으로 중요도나 개인적 우선순위에 따라 순서 조정 가능
- **기술적 특징**: HTML5 Drag & Drop API 활용, 정렬 기준과 독립적으로 작동

## 2. 스마트 정렬 시스템

- **기능 설명**: 드래그로 변경한 순서와 정렬 기준을 지능적으로 조합
- **사용 이유**: 사용자 정의 순서와 자동 정렬의 장점을 모두 활용
- **동작 방식**: 드래그 순서 변경 시 해당 순서 우선, 정렬 기준 변경 시 자동 정렬

## 3. 실시간 진행률 대시보드

- **기능 설명**: 헤더에 전체 완료율과 우선순위별 현황을 실시간으로 표시
- **사용 이유**: 사용자가 현재 진행 상황을 즉시 파악하고 계획 조정 가능
- **시각적 요소**: 색상별 우선순위 구분, 진행률 바, 통계 수치

## 4. 인라인 편집 시스템

- **기능 설명**: 할 일 항목을 더블클릭하여 제목과 설명을 직접 수정
- **사용 이유**: 별도 모달 없이 빠르고 직관적인 수정 경험
- **사용자 경험**: 저장/취소 버튼으로 안전한 편집, 실시간 미리보기

<br />

# 🚀 소스 빌드 및 실행 방법

## 1. 프로젝트 클론

```bash
git clone https://github.com/xeongjae/modern-todo-client.git
cd modern-todo-client
```

## 2. 의존성 설치

```bash
npm install
```

## 3. 개발 서버 실행

```bash
npm run dev
```

애플리케이션이 `http://localhost:5173`에서 실행됩니다.

## 4. 프로덕션 빌드

```bash
npm run build
```

## 5. 빌드 결과 미리보기

```bash
npm run preview
```

<br />

# 🔧 주력으로 사용한 컴포넌트 및 사용 이유

## 1. Material-UI (MUI)

**사용 이유**:

- **일관된 디자인**: Material Design 가이드라인으로 전문적인 UI/UX
- **접근성**: 키보드 네비게이션, 스크린 리더 지원 등 내장
- **반응형**: 모든 디바이스에서 최적화된 레이아웃
- **커스터마이징**: 테마 시스템으로 브랜드에 맞는 스타일링

## 2. React Hooks (useState, useEffect, useMemo)

**사용 이유**:

- **상태 관리**: 컴포넌트별 독립적인 상태 관리
- **성능 최적화**: 불필요한 리렌더링 방지
- **생명주기 관리**: 컴포넌트 마운트/언마운트 시 적절한 리소스 관리

## 3. TypeScript

**사용 이유**:

- **타입 안전성**: 컴파일 타임에 오류 방지
- **개발 생산성**: IDE 자동완성과 리팩토링 지원
- **코드 품질**: 명확한 인터페이스 정의와 문서화

## 4. HTML5 Drag & Drop API

**사용 이유**:

- **네이티브 성능**: 외부 라이브러리 없이 브라우저 기본 기능 활용
- **접근성**: 키보드와 스크린 리더 사용자 지원
- **사용자 경험**: 직관적이고 자연스러운 인터랙션

<br />

# 📱 백엔드 연동

## API 통신

- **RESTful API**: CRUD 작업을 위한 표준 HTTP 메서드 사용
- **에러 처리**: 네트워크 오류, 서버 오류 등 다양한 상황에 대한 사용자 친화적 메시지
- **오프라인 지원**: 백엔드 연결 실패 시에도 기본 기능 동작

## 데이터 동기화

- **실시간 업데이트**: API 응답 후 즉시 UI 반영
- **낙관적 업데이트**: 사용자 액션 즉시 반영으로 빠른 응답성
- **상태 일관성**: 로컬 상태와 서버 데이터의 동기화

<br />

# 🎯 과제 요구사항 충족 현황

- ✅ **React.js v18 사용**: 최신 React 버전으로 개발
- ✅ **MUI 사용**: Material-UI 컴포넌트 라이브러리 활용
- ✅ **할일(ToDo) 앱 개발**: 완전한 CRUD 기능 구현
- ✅ **GitHub 저장소**: 코드 업로드 완료
- ✅ **README.md 작성**: 모든 필수 내용 포함
- ✅ **동작 가능**: 모든 기능 정상 작동
- ✅ **아이디어 추가 기능**: 드래그 앤 드롭 등 4개 이상 구현
- ✅ **백엔드 연동**: API 통신 및 오프라인 지원 구현

<br />

---

**개발자**: 김성재  
**GitHub**: [https://github.com/xeongjae/modern-todo-client](https://github.com/xeongjae/modern-todo-client)  
**기술 스택**: React.js, TypeScript, Material-UI, Vite, SCSS
