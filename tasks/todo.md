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
- 제품 페이지를 책, 교육, 트랜스젠더 오픈소스, 연구, AI EMR 제품군으로 재구성
- `mes.medicalframe.ai`, `cnc.medicalframe.ai`, `study.medicalframe.ai`, `lgbtqplus.online`, `research.medicalframe.ai`, `hyperclick.medicalframe.ai` 연결
- GitHub 조직과 공개 저장소 확인 후 제품 페이지 깨진 링크 복구
- `study.medicalframe.ai`, `research.medicalframe.ai`, `hyperclick.medicalframe.ai` 죽은 도메인을 공개 GitHub/활성 사이트 링크로 교체
- Books 제품군에 MES/CNC/MHM 사이트 링크와 공개 GitHub 저장소 링크를 함께 연결
- LGBTQ+ Open Source 제품군을 `rag.lgbtqplus.online`과 `MedicalFrame/lgbtqplus` 저장소로 연결
- Research 제품군을 `DiaFrame`, `NeuroFrame`, `VoiceGrape`, `PharmaFrame` 공개 저장소로 연결
- HyperClick 제품군을 공개 가능한 `VoiceGrape`, `Clean_Text_Redirect` 저장소로 연결
- `jisongfoundation.org` 도메인 미연결 상태를 확인하고 기업윤리 페이지에 Jisong Foundation 준비중 항목 추가
- 모바일에서도 로고 옆 `MedicalFrame` 텍스트가 보이도록 수정
- 라파엘/센터 로고 이미지는 홈페이지와 공개 배포 자산에서 제외
- 첫 페이지를 `MedicalFrame` 회사 개요 페이지로 변경
- 사이드바 순서를 `MedicalFrame`, `기업윤리`, `이사진`, `제품`, `Help`로 변경
- 이사진 페이지의 조직도 이미지를 제거하고 UI 기반 조직 그래프로 대체
- 조직도 공개 자산 이미지를 배포 대상에서 제외
- Help 페이지와 첫 페이지 요약에 오프라인 주소 추가: `서울시 강남구 선릉로69길19 역삼래미안아파트`
- `MedicalFrame/medicalframe` 공개 GitHub 저장소 생성 및 push
- GitHub Pages 정적 배포 workflow 추가
- GitHub Pages custom domain을 `medicalframe.ai`로 설정
- 원본 PDF/PPT와 명함 원본 이미지는 공개 저장소에서 제외

## 검증

- `npm run build` 통과
- `npm audit --audit-level=moderate` 통과
- 로컬 브라우저 데스크톱/모바일 확인 완료
- GitHub 링크 href 확인 완료: `https://github.com/MedicalFrame/medicalframe`
- 메일 링크 확인 완료: `mailto:jisong@medicalframe.ai`
- 이사진 UI 조직 그래프 렌더링 확인 완료
- 모바일에서 페이지 전체 가로 넘침 없음 확인
- 네 페이지 해시 전환 확인 완료: `#products`, `#directors`, `#ethics`, `#help`
- 제품 페이지에서 조직도 미노출, 이사진 페이지에서 UI 조직 그래프 노출 확인 완료
- 제품군 외부 링크와 로고 텍스트 노출 확인 완료
- 제품군 새 외부 링크 15개 모두 200 응답 확인
- 제품 페이지 DOM에서 `study.medicalframe.ai`, `research.medicalframe.ai`, `hyperclick.medicalframe.ai` 미노출 확인
- 로컬 브라우저 데스크톱/모바일 제품 페이지 확인 완료
- 모바일 제품 페이지 가로 넘침 없음 확인
- 기업윤리 페이지에서 라파엘/센터 로고 미노출 확인 완료
- 첫 페이지, 기업윤리, 이사진, 제품, Help 순서 확인 완료
- 이사진 페이지 UI 조직 그래프 확인 완료
- 오프라인 주소 노출 확인 완료
- GitHub Pages 배포 성공 확인: `https://medicalframe.github.io/medicalframe/`
- `medicalframe.ai` Host 헤더 기준 index, JS, CSS, 주요 정적 자산 200 응답 확인
- `medicalframe.ai`, `mes.medicalframe.ai`, `cnc.medicalframe.ai`, `rag.lgbtqplus.online` DNS 응답 확인
- `jisongfoundation.org`, `www.jisongfoundation.org` DNS 미응답 확인
