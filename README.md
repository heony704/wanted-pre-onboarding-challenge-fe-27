<h1 align=center>Todo App</h1>

<div align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white">
</div>
<br>

<div align=center>
  <img src="https://raw.githubusercontent.com/heony704/data/main/for-readme/todolist.png" width="700">
</div>
<br>

<div align=center>
간단한 투두리스트입니다.
</div>
<br>

## 구현한 것들

### Login / SignUp

- `/auth` 경로에 로그인/회원가입 기능을 개발합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 프로젝트 구조

```js
📂api // api 함수
📂components // 공통 컴포넌트
📂layouts // 레이아웃들
📂pages // 페이지들
📂utils // 유틸함수들
📜App.tsx
📜index.css
📜main.tsx
```

## 직접 실행하기

프론트엔드 웹은 직접 실행하지 않고 배포 링크를 통해 이용하실 수 있습니다.  
하지만 백엔드 서버는 로컬에서 꼭 실행해주셔야 합니다.

### 프론트엔드 웹

**1. 프로젝트 복제**

```bash
git clone https://github.com/heony704/wanted-pre-onboarding-challenge-fe-27.git
cd wanted-pre-onboarding-challenge-fe-27
```

**2. 설치 및 실행**

```bash
pnpm install
pnpm run dev
```

**3. `.env` 파일 만들고 환경변수 추가**

```
VITE_BASE_URL = "http://localhost:8080"
```

### 백엔드 서버

[백엔드 서버](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)에서 토큰 발급과 Todo CRUD가 처리됩니다.

**1. 프로젝트 복제**

```bash
git clone https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api.git
cd wanted-pre-onboarding-challenge-fe-1-api
```

**2. 설치 및 실행**

```bash
yarn
yarn start # http://localhost:8080
```
