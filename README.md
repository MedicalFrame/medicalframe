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

- GitHub Pages: https://medicalframe.github.io/medicalframe/
- Custom domain: http://medicalframe.ai/

`medicalframe.ai`를 연결하려면 Cloudflare DNS에 아래 레코드를 추가합니다.

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `medicalframe.github.io` |

DNS가 전파된 뒤 GitHub Pages에서 HTTPS 강제를 활성화합니다.
