# 모던투두 - 할 일 관리 애플리케이션

<br />

<p align="center">
<img src="public/doFavicon.png" alt="로고" width="200"/>
</p>

<p align="center">
  <strong>
 좀 더 효율적인 일정 관리를 도와주는 할 일 관리 애플리케이션입니다.
  </strong>
</p>

<br />
<br />

# 설계 원칙

- 모듈화된 컴포넌트 설계를 통해 프로젝트의 일관성과 생산성을 강화했습니다.

- 단순한 기능 완성에 그치지 않고, 장기적인 유지보수를 고려한 클린 코드를 작성했습니다.

<br />
<br />

# 사용 기술

| 구분         | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">                  |
| **Backend**  | <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white"> <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white"> <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"> |

<br />
<br />

## 폴더 구조

```
src/
├── components/            # React 컴포넌트
│   ├── TodoHeader.tsx     # 헤더 (제목, 통계, 정렬 옵션)
│   ├── TodoList.tsx       # 할 일 목록 (드래그 앤 드롭)
│   ├── TodoItem.tsx       # 개별 할 일 항목
│   ├── AddTodo.tsx        # 할 일 추가 모달
│   └── Notification.tsx   # 알림 시스템
├── pages/                 # 페이지 컴포넌트
│   └── TodoListPage.tsx   # 메인 페이지 (상태 관리)
├── types/                 # TypeScript 타입 정의
│   └── types.ts           # Todo, Priority 등 타입
├── utils/                 # 유틸리티 함수
│   └── api.ts             # 백엔드 API 통신
├── styles/                # 스타일 파일
│   ├── globalStyle.scss   # 전역 스타일
│   └── theme.ts           # MUI 테마 설정
├── App.tsx                # 루트 컴포넌트
└── main.tsx               # 애플리케이션 진입점
```

<br />

# 주력 컴포넌트 설명 & 사용 이유

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

# 아이디어 추가 기능

## 1. 드래그 앤 드롭 순서 변경

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


<br />
<br />
<br />



