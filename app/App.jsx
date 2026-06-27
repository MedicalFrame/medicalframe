import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  HandHeart,
  HeartPulse,
  HelpCircle,
  Mail,
  Mic,
  Package,
  Scale,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react';

const githubUrl = 'https://github.com/medicalframe/medicalframe';
const contactEmail = 'jisong@medicalframe.ai';

const pages = [
  {
    id: 'products',
    label: '제품',
    description: 'AI 의료 워크플로우',
    icon: Package,
  },
  {
    id: 'directors',
    label: '이사진',
    description: '초기 조직 구성',
    icon: UsersRound,
  },
  {
    id: 'ethics',
    label: '기업윤리',
    description: '운영 원칙과 책임',
    icon: Scale,
  },
  {
    id: 'help',
    label: 'Help',
    description: '문의와 저장소',
    icon: HelpCircle,
  },
];

const products = [
  {
    name: 'SuperSOAP',
    label: 'Local LLM based Voice EMR',
    description:
      '진료 대화를 구조화된 의무기록으로 정리해 의료진의 기록 부담을 줄입니다.',
    icon: Mic,
    accent: 'blue',
  },
  {
    name: 'CleanEMR',
    label: 'One Click Database Export',
    description:
      '분석 가능한 형태로 EMR 데이터를 정돈해 연구와 운영 의사결정을 돕습니다.',
    icon: Database,
    accent: 'teal',
  },
  {
    name: 'WardFrame',
    label: 'AI integrated Patient Monitoring System',
    description:
      '병동의 주요 환자 상태를 연결해 빠른 확인과 대응 흐름을 만듭니다.',
    icon: Activity,
    accent: 'violet',
  },
];

const productFamilies = [
  {
    title: 'Books',
    label: '책',
    description: '의료와 기술 지식을 책과 장기 문서 형태로 정리합니다.',
    icon: Package,
    accent: 'blue',
    links: [
      { name: 'MES Book', href: 'https://mes.medicalframe.ai' },
      { name: 'CNC Book', href: 'https://cnc.medicalframe.ai' },
    ],
  },
  {
    title: 'Study',
    label: '교육',
    description: '학습 콘텐츠와 교육용 의료 지식 워크플로우를 운영합니다.',
    icon: UsersRound,
    accent: 'teal',
    links: [{ name: 'study.medicalframe.ai', href: 'https://study.medicalframe.ai' }],
  },
  {
    title: 'LGBTQ+ Open Source',
    label: '트랜스젠더 오픈소스',
    description: '트랜스젠더 건강 정보를 공개 지식 자원으로 관리합니다.',
    icon: Code2,
    accent: 'violet',
    links: [{ name: 'lgbtqplus.online', href: 'https://lgbtqplus.online' }],
  },
  {
    title: 'Research',
    label: '연구',
    description: '의료 AI 연구와 협업 결과물을 별도 연구 채널로 연결합니다.',
    icon: Database,
    accent: 'amber',
    links: [{ name: 'research.medicalframe.ai', href: 'https://research.medicalframe.ai' }],
  },
  {
    title: 'HyperClick',
    label: 'AI EMR',
    description: 'AI 기반 EMR 제품군과 실제 임상 기록 흐름을 연결합니다.',
    icon: Activity,
    accent: 'navy',
    links: [
      { name: 'HyperClick.medicalframe.ai', href: 'https://hyperclick.medicalframe.ai' },
    ],
  },
];

const values = [
  {
    title: 'Save People’s Lives',
    text: '기술의 목적을 생명과 안전에 둡니다.',
    icon: HeartPulse,
  },
  {
    title: 'Grow Together',
    text: '의료진, 환자, 병원 운영팀이 함께 쓸 수 있는 워크플로우를 만듭니다.',
    icon: UsersRound,
  },
  {
    title: 'Give Back to Society',
    text: '공개 지식과 책임 있는 제품 운영으로 사회적 가치를 남깁니다.',
    icon: HandHeart,
  },
];

const proofItems = [
  'Primary customers 확보',
  'Initial investment 24억',
  'MedicalFrame.ai 도메인',
  '10명 규모 초기 팀',
];

function normalizePage(hash) {
  const nextPage = hash.replace('#', '');
  return pages.some((page) => page.id === nextPage) ? nextPage : 'products';
}

function App() {
  const [activePage, setActivePage] = useState(() =>
    normalizePage(window.location.hash),
  );

  useEffect(() => {
    const handleHashChange = () => setActivePage(normalizePage(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#products');
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeMeta = useMemo(
    () => pages.find((page) => page.id === activePage) ?? pages[0],
    [activePage],
  );

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="MedicalFrame navigation">
        <a className="brand-mark" href="#products" aria-label="MedicalFrame home">
          <img src="assets/medicalframe-icon.png" alt="" />
          <span>MedicalFrame</span>
        </a>

        <nav className="sidebar-nav" aria-label="주요 페이지">
          {pages.map((page) => {
            const Icon = page.icon;
            const isActive = page.id === activePage;
            return (
              <a
                className={`sidebar-link${isActive ? ' active' : ''}`}
                href={`#${page.id}`}
                key={page.id}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon aria-hidden="true" size={20} />
                <span>
                  <strong>{page.label}</strong>
                  <small>{page.description}</small>
                </span>
              </a>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={18} />
            <span>GitHub</span>
          </a>
          <a href={`mailto:${contactEmail}`}>
            <Mail aria-hidden="true" size={18} />
            <span>Contact</span>
          </a>
        </div>
      </aside>

      <main className="page-shell">
        <header className="page-header">
          <div>
            <p className="eyebrow">MedicalFrame</p>
            <h1>{activeMeta.label}</h1>
          </div>
          <div className="page-actions">
            <a className="secondary-button" href={githubUrl} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={18} />
              <span>GitHub</span>
            </a>
            <a className="primary-button" href={`mailto:${contactEmail}`}>
              <Mail aria-hidden="true" size={18} />
              <span>문의하기</span>
            </a>
          </div>
        </header>

        {activePage === 'products' && <ProductsPage />}
        {activePage === 'directors' && <DirectorsPage />}
        {activePage === 'ethics' && <EthicsPage />}
        {activePage === 'help' && <HelpPage />}
      </main>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="page-content">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI for Healthcare Workflow</p>
          <h2>미래 병원을 위한 AI 의료 워크플로우</h2>
          <p>
            MedicalFrame은 음성 EMR, 데이터 정리, 환자 모니터링을 하나의 흐름으로
            연결해 의료진이 더 중요한 판단에 집중하도록 돕습니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={`mailto:${contactEmail}`}>
              <Mail aria-hidden="true" size={19} />
              <span>문의하기</span>
            </a>
            <a className="secondary-button" href="#help">
              <span>도입 문의</span>
              <ArrowRight aria-hidden="true" size={19} />
            </a>
          </div>
          <div className="hero-facts" aria-label="MedicalFrame 핵심 정보">
            <span>
              <ShieldCheck aria-hidden="true" size={17} />
              Healthcare AI
            </span>
            <span>
              <Building2 aria-hidden="true" size={17} />
              Future Hospital
            </span>
            <span>
              <Stethoscope aria-hidden="true" size={17} />
              Clinical Workflow
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="MedicalFrame product ecosystem">
          <img
            src="assets/product-ecosystem.png"
            alt="Voice EMR, database export, patient monitoring이 병원을 중심으로 연결된 MedicalFrame 제품 이미지"
          />
        </div>
      </section>

      <section className="proof-strip" aria-label="회사 신뢰 지표">
        {proofItems.map((item) => (
          <span key={item}>
            <CheckCircle2 aria-hidden="true" size={18} />
            {item}
          </span>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Product Lines</p>
          <h2>MedicalFrame 제품군</h2>
          <p>
            책, 교육, 오픈소스, 연구, AI EMR을 각각의 목적에 맞는 채널로 나눠
            운영합니다.
          </p>
        </div>
        <div className="family-grid">
          {productFamilies.map((family) => {
            const Icon = family.icon;
            return (
              <article className={`family-card ${family.accent}`} key={family.title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={23} />
                </div>
                <p>{family.label}</p>
                <h3>{family.title}</h3>
                <span>{family.description}</span>
                <div className="family-links" aria-label={`${family.title} links`}>
                  {family.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      <span>{link.name}</span>
                      <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Healthcare AI Core</p>
          <h2>진료 현장을 연결하는 세 가지 프레임</h2>
          <p>
            문서화, 데이터 정리, 모니터링을 분리된 도구가 아니라 하나의 의료 운영
            흐름으로 설계합니다.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className={`product-card ${product.accent}`} key={product.name}>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <p>{product.label}</p>
                <h3>{product.name}</h3>
                <span>{product.description}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-visual">
          <img
            src="assets/care-workflow.png"
            alt="AI, EMR, data, security, workflow가 환자와 의료진 주변에서 연결된 이미지"
          />
        </div>
        <div className="workflow-copy">
          <p className="eyebrow">Workflow</p>
          <h2>사람을 중심에 둔 의료 AI</h2>
          <p>
            MedicalFrame의 방향은 단순한 자동화가 아니라 의료진, 환자, 운영
            조직이 같은 정보를 보고 움직일 수 있는 연결 구조입니다.
          </p>
          <div className="workflow-steps">
            <div>
              <strong>01. 기록을 듣고</strong>
              <span>진료 흐름을 놓치지 않게 음성 기반 기록을 정리합니다.</span>
            </div>
            <div>
              <strong>02. 데이터를 정돈하고</strong>
              <span>필요한 데이터만 빠르게 꺼낼 수 있는 구조를 만듭니다.</span>
            </div>
            <div>
              <strong>03. 환자 상태를 연결합니다</strong>
              <span>병동과 모니터링 정보를 한 화면에서 파악하도록 돕습니다.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DirectorsPage() {
  return (
    <div className="page-content">
      <section className="split-section">
        <div>
          <p className="eyebrow">Board</p>
          <h2>이사진 및 초기 실행 조직</h2>
          <p>
            조직도는 이사진 페이지에서 별도로 관리합니다. 초기 구성과 역할은 실제
            기여 범위와 계약 조건에 따라 정리 중입니다.
          </p>
        </div>
        <div className="director-summary">
          <span>Founder & CEO</span>
          <strong>Business Strategy</strong>
          <small>Medical AI product planning and execution</small>
        </div>
      </section>

      <section className="organization-card">
        <img
          src="assets/organization-chart.jpeg"
          alt="MedicalFrame Inc. 초기 조직 구성도"
        />
      </section>
    </div>
  );
}

function EthicsPage() {
  return (
    <div className="page-content">
      <section className="split-section">
        <div>
          <p className="eyebrow">Ethics</p>
          <h2>의료 AI를 운영하는 기준</h2>
          <p>
            MedicalFrame은 의료진의 판단을 대체하는 기술이 아니라 더 안전하고
            일관된 판단을 돕는 워크플로우를 지향합니다.
          </p>
        </div>
        <div className="ethics-note">
          <ShieldCheck aria-hidden="true" size={26} />
          <strong>Human-centered healthcare AI</strong>
          <span>의료 안전성, 개인정보 보호, 현장 책임성을 우선합니다.</span>
        </div>
      </section>

      <section className="value-grid">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article className="value-card" key={value.title}>
              <Icon aria-hidden="true" size={24} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          );
        })}
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <p className="eyebrow">Responsibility</p>
          <h2>초기 고객 검증과 책임 있는 운영을 함께 쌓아갑니다</h2>
          <p>
            MedicalFrame은 실제 의료 현장에서 오래 쓰일 수 있는 제품을 만들기
            위해 안전성, 개인정보 보호, 설명 가능한 운영 원칙을 함께 정리합니다.
          </p>
          <div className="trust-list">
            <span>Healthcare workflow focus</span>
            <span>Privacy-first operation</span>
            <span>Human-in-the-loop review</span>
          </div>
        </div>
        <div className="principle-list">
          <article>
            <strong>Safety</strong>
            <span>의료진의 최종 판단을 보조하는 방향으로 제품을 설계합니다.</span>
          </article>
          <article>
            <strong>Privacy</strong>
            <span>민감한 의료 데이터는 최소 수집과 목적 제한을 기준으로 다룹니다.</span>
          </article>
          <article>
            <strong>Accountability</strong>
            <span>실제 사용 현장에서 책임 소재와 검토 흐름이 보이도록 만듭니다.</span>
          </article>
        </div>
      </section>
    </div>
  );
}

function HelpPage() {
  return (
    <div className="page-content">
      <section className="help-hero">
        <p className="eyebrow">Help</p>
        <h2>MedicalFrame에 문의하기</h2>
        <p>
          제품 도입, 연구 협업, 저장소 접근, 자료 요청은 아래 채널로 연결합니다.
        </p>
        <div className="help-actions">
          <a className="primary-button" href={`mailto:${contactEmail}`}>
            <Mail aria-hidden="true" size={19} />
            <span>{contactEmail}</span>
          </a>
          <a className="secondary-button" href={githubUrl} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={19} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </section>

      <section className="help-grid">
        <article className="help-card">
          <strong>제품 문의</strong>
          <span>SuperSOAP, CleanEMR, WardFrame 적용 범위를 논의합니다.</span>
        </article>
        <article className="help-card">
          <strong>자료 요청</strong>
          <span>회사소개, 제품 소개, PoC 논의 자료를 정리해 전달합니다.</span>
        </article>
        <article className="help-card">
          <strong>저장소</strong>
          <span>조직 저장소는 medicalframe/medicalframe 기준으로 연결합니다.</span>
        </article>
      </section>
    </div>
  );
}

export default App;
