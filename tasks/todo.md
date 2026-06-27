# 홈페이지 작업 기록

## 진행 중

- 없음

## 완료

- 기존 PDF/PPT 자료 구조 확인
- MedicalFrame 소개 PDF에서 웹용 로고/제품/사회공헌 이미지 자산 생성
- 개인 연락처가 보이는 명함 이미지는 공개 홈페이지 자산에서 제외
- React/Vite 기반 정적 홈페이지 구현
- 데스크톱/모바일 화면에서 이미지 로딩, 가로 넘침, 콘솔 오류 없음 확인
- 빌드 및 보안 감사 통과 확인
- GitHub 주소를 헤더, 문의 섹션, 푸터에 연결
- GitHub 주소를 조직 저장소로 변경
- 문의 이메일을 `jisong@medicalframe.ai`로 변경
- 초기 조직도 섹션 추가
- 홈페이지 소스 이동 후 새 폴더 기준 설정 파일 복구
- 사이드바 기반 페이지 구조로 변경
- `제품`, `이사진`, `기업윤리`, `Help` 페이지 구성
- 조직도 이미지를 `이사진` 페이지로 이동
- `MedicalFrame/medicalframe` 공개 GitHub 저장소 생성 및 push
- GitHub Pages 정적 배포 workflow 추가
- GitHub Pages custom domain을 `medicalframe.ai`로 설정
- 원본 PDF/PPT와 명함 원본 이미지는 공개 저장소에서 제외

## 검증

- `npm run build` 통과
- `npm audit --audit-level=moderate` 통과
- 로컬 브라우저 데스크톱/모바일 확인 완료
- GitHub 링크 href 확인 완료: `https://github.com/medicalframe/medicalframe`
- 메일 링크 확인 완료: `mailto:jisong@medicalframe.ai`
- 조직도 이미지 로딩 확인 완료
- 모바일에서 페이지 전체 가로 넘침 없음 확인
- 네 페이지 해시 전환 확인 완료: `#products`, `#directors`, `#ethics`, `#help`
- 제품 페이지에서 조직도 미노출, 이사진 페이지에서 조직도 노출 확인 완료
- GitHub Pages 배포 성공 확인: `https://medicalframe.github.io/medicalframe/`
- `medicalframe.ai` Host 헤더 기준 index, JS, CSS, 조직도 이미지 200 응답 확인
- 현재 DNS에는 `medicalframe.ai` A/CNAME 레코드가 없어 Cloudflare DNS 설정 필요
