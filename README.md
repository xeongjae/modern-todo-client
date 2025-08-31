
# 모던투두 - 할 일 관리 애플리케이션 (클라이언트)

<br />

<p align="center">
<img src="public/doFavicon.png" alt="로고" width="200"/>
</p>

<p align="center">
  <strong>
 효율적인 일정 관리를 도와주는 할 일 관리 애플리케이션입니다.
  </strong>
</p>

<br />
<br />

# 📌 설계 원칙

- 모듈화된 컴포넌트 설계를 통해 프로젝트의 일관성과 생산성을 강화했습니다.

- 단순한 기능 완성에 그치지 않고, 장기적인 유지보수를 고려한 클린 코드를 작성했습니다.

<br />
<br />

# 🚀 실행 방법 메뉴얼

### 1. 프로젝트 클론

```bash
git clone https://github.com/xeongjae/modern-todo-client.git
```

### 2. 폴더로 이동

```bash
cd modern-todo-client
```

### 3. 의존성 설치

```bash
npm install
```

### 4. 개발 서버 실행

```bash
npm run dev
```

애플리케이션이 `http://localhost:5173`에서 실행됩니다.

페이지 로드 시 자동으로 서버 연결 상태 확인하고 알림으로 안내합니다.

<br />
<br />


# ⚙️ 사용 기술

| 구분         | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">                     |
| **Backend**  | <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"> |

<br />
<br />

## 🗂️ 폴더 구조

```
src/
├── components/            # React 컴포넌트
│   ├── TodoHeader.tsx     # 헤더 (제목, 통계, 정렬 옵션)
│   ├── TodoList.tsx       # 할 일 목록 (드래그 앤 드롭)
│   ├── TodoItem.tsx       # 개별 할 일 항목
│   ├── AddTodo.tsx        # 할 일 추가 모달
│   └── Notification.tsx   # 알림 시스템
├── hooks/                 # 커스텀 훅
│ ├── useTodoApi.ts        # API 통신 및 서버 상태 관리 (~25.08.30 추가)
│ └── useTodoReducer.ts    # 클라이언트 상태 및 비즈니스 로직 (~25.08.30 추가)
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
<br />

# 🧩 주력 컴포넌트 설명 & 사용 이유

| 컴포넌트       | 사용 이유                               | 주요 기능 |
|----------------|----------------------------------------|-----------|
| **TodoListPage** | 하위 컴포넌트들을 조합 | 할 일 데이터 상태 관리 (CRUD), API 통신 및 에러 처리 |
| **TodoHeader**   | 주요 정보를 한눈에 파악 | 전체 완료율 및 우선순위별 통계, 정렬 기준 선택 |
| **TodoList**     | 할 일 리스트 표시 | 할 일 목록 표시 및 관리, 드롭 위치 표시선, 로딩 상태 처리 |
| **TodoItem**     | 할 일 정보 표시 | 별도 모달 없이 빠른 수정, 완료 상태 토글 및 삭제 기능 |
| **AddTodo**      | 모달 형태 입력 환경 필요 | 할 일 추가 모달, 제목·설명·우선순위 입력 |
| **Notification** | 통합 알림 시스템 필요| 에러/성공 메시지, 서버 연결 상태 알림, 자동 숨김 및 수동 닫기 |

<br />
<br />

# ⚓️ 커스텀 훅 설명 & 사용 이유 (~25.08.30 추가)

| 훅              | 사용 이유                               | 주요 기능 |
|----------------|----------------------------------------|-----------|
| **useTodoApi** | API 통신 및 서버 상태 관리 | CRUD 작업 (생성, 조회, 수정, 삭제, 완료토글), 로딩 상태, 에러 처리, 성공/실패 메시지, 서버 데이터 동기화 |
| **useTodoReducer**   | 클라이언트 상태 및 비즈니스 로직 | 할 일 목록 상태 관리, 정렬 시스템 (등록순/우선순위순), 드래그 앤 드롭 순서 관리, 모달 상태 관리, 성능 최적화 (useMemo) |

<br />
<br />

# 🤩 아이디어 추가 기능

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
<br />
<br />

# ✅ 관심사 분리 및 책임 전담을 마치며 (~25.08.30 추가)

## [문제] 과도한 책임

### 리팩토링 이전의 TodoListPage 컴포넌트는 다음과 같은 세 가지 주요 책임을 모두 처리하고 있어 코드가 복잡했습니다.

- API 통신 로직: 서버와의 데이터 CRUD(생성, 조회, 수정, 삭제) 및 로딩, 에러, 성공 상태 처리

- 클라이언트 상태 관리: 할 일 목록 데이터, 정렬 상태, 드래그앤드롭 순서, 모달 표시 여부 등

- UI 렌더링 및 이벤트 처리: 컴포넌트 조합, 사용자 인터랙션 핸들링

이러한 구조는 유지보수를 어렵게 하고 코드 재사용성을 저해하는 주요 원인이었습니다.

<br />

## [해결] 커스텀 훅을 통한 관심사 분리

### 다른 관심사를 다루는 두개의 커스텀 훅으로 로직을 분리했습니다.

---

1. useTodoApi (**데이터 담당**): API 통신, 로딩, 에러 처리 등 서버와의 데이터 교환
```typescript
const { loading, error, success, createTodo, updateTodo, deleteTodo } = useTodoApi();
```

---


2. useTodoReducer (**상태 관리 담당**): 사용자의 인터랙션으로 발생하는 클라이언트 측 상태 (정렬 순서, 목록 관리 등)
```typescript
const { todos, sortedTodos, sortBy, hasCustomOrder, dispatch } = useTodoReducer();
```

---

3. TodoListPage (**화면 담당**): 두 훅에서 가져온 데이터와 상태를 조합하고 이벤트를 연결
```typescript
return (
  <Paper>
    <Box>
      <TodoHeader />
      <TodoList />
    </Box>
    <AddTodo />
    <Notification />
  </Paper>
);
```

<br />
<br />
<br />

<br />
<br />
<br />

<br />
<br />
<br />

