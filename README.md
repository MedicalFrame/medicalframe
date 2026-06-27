# MedicalFrame 홈페이지

React와 Vite로 만든 MedicalFrame 정적 홈페이지입니다.

## 실행

```bash
nvm use
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 구조

- `app/`: React 화면 소스
- `public/assets/`: 홈페이지용 이미지 자산
- `tasks/`: 작업 기록

## 배포

`main` 브랜치에 push하면 GitHub Actions가 정적 파일을 빌드해 GitHub Pages로 배포합니다.
