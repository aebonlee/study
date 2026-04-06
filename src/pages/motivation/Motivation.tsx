import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'intrinsic', icon: 'fa-heart', ko: '내적 동기의 힘', en: 'The Power of Intrinsic Motivation' },
  { id: 'goals', icon: 'fa-bullseye', ko: '효과적인 목표 설정', en: 'Effective Goal Setting' },
  { id: 'growth', icon: 'fa-seedling', ko: '성장 마인드셋', en: 'Growth Mindset' },
  { id: 'burnout', icon: 'fa-fire-extinguisher', ko: '번아웃 예방과 회복', en: 'Burnout Prevention & Recovery' },
  { id: 'failure', icon: 'fa-rotate-right', ko: '실패에서 배우기', en: 'Learning from Failure' },
  { id: 'sustain', icon: 'fa-infinity', ko: '장기 동기 유지법', en: 'Sustaining Long-term Motivation' },
];

export default function Motivation(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? '동기부여와 멘탈 관리 가이드' : 'Motivation & Mindset Guide'}
        description={
          isKo
            ? '학습 동기를 유지하고 건강한 멘탈을 관리하는 실전 가이드'
            : 'A practical guide to sustaining learning motivation and managing a healthy mindset'
        }
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="guide-content">
            {activeSection === 'intrinsic' && <IntrinsicSection isKo={isKo} />}
            {activeSection === 'goals' && <GoalsSection isKo={isKo} />}
            {activeSection === 'growth' && <GrowthSection isKo={isKo} />}
            {activeSection === 'burnout' && <BurnoutSection isKo={isKo} />}
            {activeSection === 'failure' && <FailureSection isKo={isKo} />}
            {activeSection === 'sustain' && <SustainSection isKo={isKo} />}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button
                className="guide-nav-btn prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en
                    : isKo ? '이전' : 'Previous'}
                </span>
              </button>
              <button
                className="guide-nav-btn next"
                onClick={handleNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en
                    : isKo ? '다음' : 'Next'}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

/* ===============================================
   Section: The Power of Intrinsic Motivation
   =============================================== */
function IntrinsicSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '내적 동기의 힘' : 'The Power of Intrinsic Motivation'}</h1>
        <p>
          {isKo
            ? '동기부여에는 외적 동기(보상, 성적, 칭찬)와 내적 동기(호기심, 즐거움, 성취감)가 있습니다. 외적 동기는 빠르게 효과를 보이지만 쉽게 사라지는 반면, 내적 동기는 학습을 지속 가능하게 만드는 강력한 원동력입니다.'
            : 'Motivation comes in two forms: extrinsic (rewards, grades, praise) and intrinsic (curiosity, enjoyment, sense of accomplishment). While extrinsic motivation works quickly but fades fast, intrinsic motivation is the powerful driving force that makes learning sustainable.'}
        </p>
        <img src="/assets/images/topics/motivation-hero.svg" alt={isKo ? '동기부여 일러스트' : 'Motivation Illustration'} className="guide-hero-illustration" />
      </div>

      <h2>{isKo ? '자기결정이론 (Self-Determination Theory)' : 'Self-Determination Theory'}</h2>
      <p>
        {isKo
          ? '에드워드 디시(Edward Deci)와 리처드 라이언(Richard Ryan)이 제안한 자기결정이론에 따르면, 내적 동기는 세 가지 기본 심리 욕구가 충족될 때 자연스럽게 발생합니다.'
          : 'According to Self-Determination Theory by Edward Deci and Richard Ryan, intrinsic motivation naturally arises when three basic psychological needs are met.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '자율성 (Autonomy)' : 'Autonomy'}</strong> -{' '}
          {isKo
            ? '자신의 학습을 스스로 선택하고 통제한다는 느낌입니다. 무엇을, 언제, 어떻게 공부할지 스스로 결정할 수 있을 때 동기가 높아집니다. 강제된 학습은 반발심을 유발하고, 자발적 학습은 몰입을 유발합니다.'
            : 'The feeling of choosing and controlling your own learning. Motivation increases when you decide what, when, and how to study. Forced learning triggers resistance, while voluntary learning triggers flow.'}
        </li>
        <li>
          <strong>{isKo ? '유능감 (Competence)' : 'Competence'}</strong> -{' '}
          {isKo
            ? '"나도 할 수 있다"는 자신감입니다. 적절한 난이도의 도전을 성공적으로 완수할 때 유능감이 형성됩니다. 너무 쉬운 과제는 지루함을, 너무 어려운 과제는 좌절감을 유발합니다.'
            : 'The confidence of "I can do this." Competence forms when you successfully complete challenges at the right difficulty level. Tasks too easy cause boredom; too hard cause frustration.'}
        </li>
        <li>
          <strong>{isKo ? '관계성 (Relatedness)' : 'Relatedness'}</strong> -{' '}
          {isKo
            ? '다른 사람들과의 연결감입니다. 함께 공부하는 동료, 지지해주는 멘토, 학습 커뮤니티에 속해 있다는 느낌이 동기를 강화합니다. 혼자 공부하더라도 온라인 학습 커뮤니티에 참여하는 것이 도움이 됩니다.'
            : 'The sense of connection with others. Study partners, supportive mentors, and belonging to a learning community strengthen motivation. Even when studying alone, joining online learning communities helps.'}
        </li>
      </ol>

      <TipBox type="tip" title={isKo ? '내적 동기 발견하기' : 'Discovering Your Intrinsic Motivation'}>
        {isKo
          ? '다음 질문에 답해보세요. "만약 성적도 없고, 자격증도 필요 없고, 아무도 몰라도 이 공부를 할까?" 만약 "예"라면 이미 내적 동기가 있는 것입니다. "아니오"라면, 이 공부가 나의 궁극적인 가치관과 어떻게 연결되는지 찾아보세요.'
          : 'Ask yourself: "Would I study this if there were no grades, no certifications needed, and nobody knew?" If "yes," you already have intrinsic motivation. If "no," explore how this study connects to your ultimate values.'}
      </TipBox>

      <h3>{isKo ? '호기심을 학습 동기로 전환하기' : 'Converting Curiosity into Learning Motivation'}</h3>
      <p>
        {isKo
          ? '호기심은 인간의 가장 자연스러운 학습 동기입니다. 어린아이들이 끊임없이 "왜?"라고 묻는 것처럼, 성인도 호기심을 의도적으로 자극하면 학습에 대한 열정을 되살릴 수 있습니다.'
          : 'Curiosity is the most natural learning motivator. Just as children constantly ask "why?", adults can revive their passion for learning by intentionally stimulating curiosity.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '질문으로 시작하기' : 'Start with Questions'}</strong> -{' '}
          {isKo
            ? '교과서를 펼치기 전에 "이 단원에서 무엇을 배울 수 있을까?"라는 질문을 스스로에게 던지세요. 답을 찾으려는 욕구가 학습의 원동력이 됩니다.'
            : 'Before opening your textbook, ask yourself "What can I learn in this chapter?" The desire to find answers becomes the driving force for learning.'}
        </li>
        <li>
          <strong>{isKo ? '실생활과 연결하기' : 'Connect to Real Life'}</strong> -{' '}
          {isKo
            ? '추상적인 이론도 실생활의 예시와 연결하면 흥미가 생깁니다. "이 개념이 내 일상에서 어떻게 적용될까?"를 항상 생각해보세요.'
            : 'Even abstract theories become interesting when connected to real-life examples. Always think "How does this concept apply in my daily life?"'}
        </li>
        <li>
          <strong>{isKo ? '학습 내용 공유하기' : 'Share What You Learn'}</strong> -{' '}
          {isKo
            ? '배운 내용을 다른 사람에게 설명하면 이해가 깊어지고, 가르치는 과정에서 새로운 통찰을 얻게 됩니다. 블로그 작성, 스터디 그룹 발표 등이 좋은 방법입니다.'
            : 'Explaining what you\'ve learned to others deepens understanding and yields new insights through teaching. Blog writing and study group presentations are great methods.'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '외적 보상이 내적 동기를 해칠 수 있습니다. 이를 "과잉정당화 효과(Overjustification Effect)"라고 합니다. 원래 즐거워서 하던 활동에 금전적 보상이 추가되면, 보상이 사라졌을 때 그 활동에 대한 흥미도 함께 사라질 수 있습니다. 보상은 시작점으로만 활용하고, 점차 내적 즐거움에 집중하세요.'
          : 'External rewards can undermine intrinsic motivation, known as the "Overjustification Effect." When monetary rewards are added to an activity you enjoyed, removing the reward can kill interest in the activity itself. Use rewards only as a starting point and gradually shift focus to intrinsic enjoyment.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Effective Goal Setting
   =============================================== */
function GoalsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '효과적인 목표 설정' : 'Effective Goal Setting'}</h1>
        <p>
          {isKo
            ? '명확한 목표는 나침반과 같습니다. 어디로 가야 하는지 알 때 비로소 효율적인 경로를 선택할 수 있습니다. 모호한 목표는 동기를 약화시키고, 구체적인 목표는 행동을 촉발합니다.'
            : 'Clear goals are like a compass. Only when you know where to go can you choose the most efficient path. Vague goals weaken motivation, while specific goals trigger action.'}
        </p>
      </div>

      <h2>{isKo ? 'SMART 목표 설정법' : 'The SMART Goal Framework'}</h2>
      <p>
        {isKo
          ? 'SMART는 효과적인 목표의 5가지 기준을 제시하는 프레임워크입니다. 각 기준을 충족하는 목표를 세우면 달성 확률이 크게 높아집니다.'
          : 'SMART is a framework providing 5 criteria for effective goals. Setting goals that meet each criterion dramatically increases your chances of achievement.'}
      </p>
      <ol>
        <li>
          <strong>S - {isKo ? '구체적 (Specific)' : 'Specific'}</strong>
          <p>
            {isKo
              ? '"영어를 잘하겠다"가 아니라 "TOEIC 점수를 800점에서 900점으로 올리겠다"처럼 구체적으로 설정합니다. 무엇을, 어디서, 어떻게 할 것인지가 명확해야 합니다.'
              : 'Not "I\'ll get better at English" but "I\'ll raise my TOEIC score from 800 to 900." What, where, and how must be clear.'}
          </p>
        </li>
        <li>
          <strong>M - {isKo ? '측정 가능 (Measurable)' : 'Measurable'}</strong>
          <p>
            {isKo
              ? '진척도를 숫자로 측정할 수 있어야 합니다. "많이 읽겠다"가 아니라 "매주 전공 서적 2장을 읽겠다"로 설정합니다. 측정할 수 없으면 개선할 수 없습니다.'
              : 'Progress must be measurable in numbers. Not "I\'ll read more" but "I\'ll read 2 chapters of my textbook weekly." What cannot be measured cannot be improved.'}
          </p>
        </li>
        <li>
          <strong>A - {isKo ? '달성 가능 (Achievable)' : 'Achievable'}</strong>
          <p>
            {isKo
              ? '도전적이면서도 현실적으로 달성 가능한 수준이어야 합니다. 너무 낮은 목표는 동기를 유발하지 못하고, 너무 높은 목표는 좌절을 안겨줍니다. 현재 수준에서 10-20% 향상을 목표로 시작하세요.'
              : 'Goals should be challenging yet realistically achievable. Goals too low fail to motivate; goals too high bring frustration. Start by aiming for 10-20% improvement from current levels.'}
          </p>
        </li>
        <li>
          <strong>R - {isKo ? '관련성 (Relevant)' : 'Relevant'}</strong>
          <p>
            {isKo
              ? '목표가 나의 장기적인 비전과 가치관에 부합해야 합니다. "왜 이 공부를 하는가?"라는 질문에 답할 수 있어야 합니다. 목적의식이 있는 목표는 어려움 앞에서도 포기하지 않게 해줍니다.'
              : 'Goals must align with your long-term vision and values. You should be able to answer "Why am I studying this?" Purpose-driven goals prevent giving up in the face of difficulty.'}
          </p>
        </li>
        <li>
          <strong>T - {isKo ? '기한 설정 (Time-bound)' : 'Time-bound'}</strong>
          <p>
            {isKo
              ? '명확한 기한이 있어야 합니다. "언젠가 프로그래밍을 배우겠다"가 아니라 "3개월 안에 Python 기초 과정을 완료하겠다"로 설정합니다. 기한이 없는 목표는 영원히 미뤄집니다.'
              : 'A clear deadline is essential. Not "I\'ll learn programming someday" but "I\'ll complete the Python basics course within 3 months." Goals without deadlines are postponed forever.'}
          </p>
        </li>
      </ol>

      <TipBox type="tip" title={isKo ? '목표를 눈에 보이게 하세요' : 'Make Your Goals Visible'}>
        {isKo
          ? '목표를 적어서 매일 눈에 보이는 곳에 붙여두세요. 연구에 따르면 목표를 글로 적는 사람은 그렇지 않은 사람보다 달성 확률이 42% 높습니다. 포스트잇, 바탕화면 배경, 플래너 표지 등을 활용하세요.'
          : 'Write your goals and post them where you see them daily. Research shows people who write goals are 42% more likely to achieve them. Use sticky notes, desktop wallpapers, or planner covers.'}
      </TipBox>

      <h2>{isKo ? '목표를 행동으로 전환하기' : 'Converting Goals into Action'}</h2>
      <h3>{isKo ? '실행 의도 (Implementation Intention)' : 'Implementation Intention'}</h3>
      <p>
        {isKo
          ? '심리학자 피터 골위처(Peter Gollwitzer)가 연구한 "실행 의도"는 목표 달성률을 2-3배 높이는 기법입니다. "만약 X 상황이 오면, Y 행동을 하겠다"라는 형식으로 계획합니다.'
          : 'Psychologist Peter Gollwitzer\'s "implementation intention" is a technique that doubles or triples goal achievement rates. Plan in the format: "If situation X occurs, I will do action Y."'}
      </p>
      <ul>
        <li>
          {isKo
            ? '"만약 아침 7시 알람이 울리면, 바로 책상에 앉아 영어 단어 30개를 외우겠다"'
            : '"If my 7am alarm rings, I will sit at my desk and memorize 30 English words"'}
        </li>
        <li>
          {isKo
            ? '"만약 점심 후 졸려지면, 10분간 산책한 뒤 수학 문제집을 펼치겠다"'
            : '"If I feel drowsy after lunch, I will take a 10-minute walk then open my math workbook"'}
        </li>
        <li>
          {isKo
            ? '"만약 SNS를 보고 싶어지면, 먼저 포모도로 1세트를 완료하겠다"'
            : '"If I feel like checking social media, I will first complete one Pomodoro set"'}
        </li>
      </ul>

      <h3>{isKo ? '장기 목표와 단기 목표의 연결' : 'Connecting Long-term and Short-term Goals'}</h3>
      <p>
        {isKo
          ? '큰 목표만 있으면 막막하고, 작은 목표만 있으면 방향을 잃습니다. 장기 목표를 중기 목표로, 중기 목표를 주간 목표로, 주간 목표를 일일 행동으로 분해하는 것이 핵심입니다.'
          : 'Only having big goals feels overwhelming, and only having small goals loses direction. The key is breaking long-term goals into medium-term goals, then into weekly goals, and finally into daily actions.'}
      </p>
      <ul>
        <li><strong>{isKo ? '장기 (1년)' : 'Long-term (1 year)'}</strong>: {isKo ? '"정보처리기사 자격증 취득"' : '"Obtain IT certification"'}</li>
        <li><strong>{isKo ? '중기 (3개월)' : 'Medium-term (3 months)'}</strong>: {isKo ? '"필기 시험 과목 5개 전체 학습 완료"' : '"Complete all 5 written exam subjects"'}</li>
        <li><strong>{isKo ? '단기 (1주)' : 'Short-term (1 week)'}</strong>: {isKo ? '"데이터베이스 2장 학습 + 기출문제 50문제 풀기"' : '"Study Database ch.2 + solve 50 past exam questions"'}</li>
        <li><strong>{isKo ? '오늘' : 'Today'}</strong>: {isKo ? '"오후 2-4시: 정규화 개념 정리 + 연습문제 10문제"' : '"2-4pm: Organize normalization concepts + 10 practice problems"'}</li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '목표를 "결과 목표"만으로 설정하지 마세요. "시험에서 A학점 받기"는 내가 완전히 통제할 수 없는 결과 목표입니다. 대신 "매일 2시간 집중 학습하기"처럼 내가 통제할 수 있는 "과정 목표"를 함께 설정하세요. 과정 목표를 달성하면 결과는 자연스럽게 따라옵니다.'
          : 'Don\'t set goals only as "outcome goals." "Getting an A grade" is an outcome goal you can\'t fully control. Instead, set "process goals" you can control, like "study with focus for 2 hours daily." Achieving process goals naturally leads to desired outcomes.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Growth Mindset
   =============================================== */
function GrowthSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '성장 마인드셋' : 'Growth Mindset'}</h1>
        <p>
          {isKo
            ? '스탠퍼드 대학의 캐롤 드웩(Carol Dweck) 교수는 30년간의 연구를 통해 사람들의 마인드셋이 학습 성과에 결정적인 영향을 미친다는 것을 밝혀냈습니다. 능력은 타고나는 것이 아니라 노력으로 키울 수 있다는 믿음이 성장 마인드셋의 핵심입니다.'
            : 'Stanford professor Carol Dweck\'s 30 years of research revealed that mindset decisively impacts learning outcomes. The core of growth mindset is believing that abilities are not innate but can be developed through effort.'}
        </p>
        <img src="/assets/images/topics/motivation-growth.svg" alt={isKo ? '고정 vs 성장 마인드셋' : 'Fixed vs Growth Mindset'} className="guide-section-illustration" />
      </div>

      <h2>{isKo ? '고정 마인드셋 vs 성장 마인드셋' : 'Fixed Mindset vs Growth Mindset'}</h2>
      <h3>{isKo ? '고정 마인드셋 (Fixed Mindset)' : 'Fixed Mindset'}</h3>
      <ul>
        <li>
          {isKo
            ? '"나는 수학 머리가 없어" - 능력은 타고난 것이라고 믿습니다'
            : '"I\'m not a math person" - believes abilities are innate'}
        </li>
        <li>
          {isKo
            ? '실패를 자신의 한계의 증거로 봅니다'
            : 'Views failure as proof of personal limitations'}
        </li>
        <li>
          {isKo
            ? '도전을 피하고 쉬운 과제만 선택합니다'
            : 'Avoids challenges and chooses only easy tasks'}
        </li>
        <li>
          {isKo
            ? '노력을 재능 부족의 증거로 여깁니다'
            : 'Views effort as evidence of lacking talent'}
        </li>
        <li>
          {isKo
            ? '다른 사람의 성공에 위협을 느낍니다'
            : 'Feels threatened by others\' success'}
        </li>
      </ul>

      <h3>{isKo ? '성장 마인드셋 (Growth Mindset)' : 'Growth Mindset'}</h3>
      <ul>
        <li>
          {isKo
            ? '"아직 이해 못했지만, 계속 연습하면 할 수 있어" - 능력은 노력으로 발전한다고 믿습니다'
            : '"I don\'t understand it yet, but I will with practice" - believes abilities develop through effort'}
        </li>
        <li>
          {isKo
            ? '실패를 성장의 기회이자 귀중한 피드백으로 봅니다'
            : 'Views failure as a growth opportunity and valuable feedback'}
        </li>
        <li>
          {isKo
            ? '적극적으로 도전하고, 어려운 과제를 성장의 발판으로 삼습니다'
            : 'Actively seeks challenges and uses difficult tasks as stepping stones for growth'}
        </li>
        <li>
          {isKo
            ? '노력을 실력 향상의 필수 과정으로 인식합니다'
            : 'Recognizes effort as an essential part of improving skills'}
        </li>
        <li>
          {isKo
            ? '다른 사람의 성공에서 영감과 교훈을 얻습니다'
            : 'Finds inspiration and lessons in others\' success'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? '"아직"의 힘' : 'The Power of "Yet"'}>
        {isKo
          ? '"못하겠다" 대신 "아직 못하겠다"라고 말해보세요. 이 한 단어가 관점을 완전히 바꿉니다. "프로그래밍을 못 하겠어"를 "프로그래밍을 아직 못 하겠어"로 바꾸면, 미래에 할 수 있다는 가능성이 열립니다. 이 작은 언어적 변화가 뇌의 학습 회로를 활성화합니다.'
          : 'Say "I can\'t do this yet" instead of "I can\'t do this." This one word changes everything. Changing "I can\'t program" to "I can\'t program yet" opens the possibility of future mastery. This small linguistic shift activates the brain\'s learning circuits.'}
      </TipBox>

      <h2>{isKo ? '성장 마인드셋을 기르는 실천법' : 'Practices for Developing Growth Mindset'}</h2>
      <ol>
        <li>
          <strong>{isKo ? '과정을 칭찬하기' : 'Praise the Process'}</strong> -{' '}
          {isKo
            ? '결과가 아닌 노력, 전략, 끈기를 칭찬하세요. "시험 잘 봤네"보다 "그동안 꾸준히 복습한 보람이 있네"가 성장 마인드셋을 강화합니다. 자기 자신에게도 마찬가지입니다.'
            : 'Praise effort, strategy, and persistence instead of results. "Your consistent review paid off" strengthens growth mindset more than "Good grade." Apply this to yourself too.'}
        </li>
        <li>
          <strong>{isKo ? '도전 일지 쓰기' : 'Keep a Challenge Journal'}</strong> -{' '}
          {isKo
            ? '매일 "오늘 도전한 것"과 "도전에서 배운 것"을 기록합니다. 작은 도전이라도 기록하면 도전에 대한 두려움이 점차 줄어듭니다.'
            : 'Record "today\'s challenge" and "what I learned from it" daily. Even small challenges, when recorded, gradually reduce fear of challenges.'}
        </li>
        <li>
          <strong>{isKo ? '실패 분석하기' : 'Analyze Failures'}</strong> -{' '}
          {isKo
            ? '시험에서 틀린 문제를 단순히 넘기지 말고, "왜 틀렸는지" "다음에 어떻게 하면 맞출 수 있는지"를 분석하세요. 오답은 아직 성장할 여지가 있다는 신호입니다.'
            : 'Don\'t just skip wrong exam answers. Analyze "why I got it wrong" and "how to get it right next time." Wrong answers signal room for growth.'}
        </li>
        <li>
          <strong>{isKo ? '역할 모델 연구하기' : 'Study Role Models'}</strong> -{' '}
          {isKo
            ? '존경하는 사람들의 성공 뒤에 숨겨진 노력과 실패의 역사를 알아보세요. 대부분의 성공은 수없는 시행착오의 결과입니다.'
            : 'Discover the hidden effort and failures behind the success of people you admire. Most success is the result of countless trials and errors.'}
        </li>
      </ol>

      <TipBox type="tip">
        {isKo
          ? '뇌의 신경가소성(Neuroplasticity)은 과학적 사실입니다. 뇌는 근육처럼 사용할수록 강해집니다. 새로운 것을 학습할 때마다 뇌에서 새로운 신경 연결(시냅스)이 형성되고 강화됩니다. 어렵게 느껴지는 순간이 바로 뇌가 성장하고 있는 순간입니다.'
          : 'Neuroplasticity is a scientific fact. The brain grows stronger with use, like a muscle. Each time you learn something new, neural connections (synapses) form and strengthen. The moments that feel difficult are exactly when your brain is growing.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Burnout Prevention & Recovery
   =============================================== */
function BurnoutSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '번아웃 예방과 회복' : 'Burnout Prevention & Recovery'}</h1>
        <p>
          {isKo
            ? '번아웃(Burnout)은 장기간의 과도한 스트레스로 인해 신체적, 정신적, 감정적으로 완전히 지쳐버린 상태입니다. 열심히 공부하는 학습자일수록 번아웃의 위험이 높습니다. 예방이 최선이지만, 번아웃이 왔을 때의 회복 전략도 반드시 알아두어야 합니다.'
            : 'Burnout is a state of complete physical, mental, and emotional exhaustion caused by prolonged excessive stress. Diligent learners are at higher risk. Prevention is best, but recovery strategies are essential knowledge for when burnout strikes.'}
        </p>
        <img src="/assets/images/topics/motivation-burnout.svg" alt={isKo ? '번아웃 예방' : 'Burnout Prevention'} className="guide-section-illustration" />
      </div>

      <h2>{isKo ? '번아웃의 5단계' : 'The 5 Stages of Burnout'}</h2>
      <ol>
        <li>
          <strong>{isKo ? '열정기 (Honeymoon Phase)' : 'Honeymoon Phase'}</strong> -{' '}
          {isKo
            ? '높은 에너지와 열정으로 시작합니다. 무엇이든 할 수 있을 것 같은 느낌이지만, 이 단계에서 지속 가능한 페이스를 설정하지 않으면 위험합니다.'
            : 'Starts with high energy and enthusiasm. You feel like you can do anything, but failing to set a sustainable pace at this stage is dangerous.'}
        </li>
        <li>
          <strong>{isKo ? '스트레스 시작기 (Onset of Stress)' : 'Onset of Stress'}</strong> -{' '}
          {isKo
            ? '집중력이 떨어지고, 수면 패턴이 변화하며, 짜증이 잦아집니다. 이 단계에서 신호를 인식하고 대응하면 번아웃을 예방할 수 있습니다.'
            : 'Focus declines, sleep patterns change, irritability increases. Recognizing and responding to signals at this stage can prevent burnout.'}
        </li>
        <li>
          <strong>{isKo ? '만성 스트레스기 (Chronic Stress)' : 'Chronic Stress'}</strong> -{' '}
          {isKo
            ? '피로가 만성화되고, 학습에 대한 냉소적 태도가 나타납니다. 사회적 관계가 줄어들고, 카페인이나 자극적인 활동에 의존하게 됩니다.'
            : 'Fatigue becomes chronic, cynicism toward learning appears. Social relationships diminish and dependence on caffeine or stimulating activities grows.'}
        </li>
        <li>
          <strong>{isKo ? '번아웃기 (Burnout)' : 'Burnout Phase'}</strong> -{' '}
          {isKo
            ? '학습에 대한 의욕이 완전히 사라지고, 모든 것이 무의미하게 느껴집니다. 두통, 소화불량 등 신체 증상이 동반될 수 있습니다.'
            : 'Motivation for learning completely vanishes and everything feels meaningless. Physical symptoms like headaches and digestive issues may accompany this.'}
        </li>
        <li>
          <strong>{isKo ? '완전 소진기 (Habitual Burnout)' : 'Habitual Burnout'}</strong> -{' '}
          {isKo
            ? '번아웃이 일상이 되어 만성적인 무기력과 우울감에 빠집니다. 이 단계에서는 전문가의 도움이 필요할 수 있습니다.'
            : 'Burnout becomes the norm, leading to chronic lethargy and depression. Professional help may be needed at this stage.'}
        </li>
      </ol>

      <TipBox type="danger" title={isKo ? '경고 신호를 무시하지 마세요' : 'Don\'t Ignore Warning Signs'}>
        {isKo
          ? '다음 증상 중 3개 이상 해당된다면 번아웃 초기 신호입니다: 만성 피로, 집중력 저하, 수면 장애, 두통/위장 문제, 학습에 대한 무관심, 쉽게 화가 남, 고립 경향, 성취감 상실. 지금 바로 페이스를 조절하세요.'
          : 'If 3 or more apply, it\'s an early burnout signal: chronic fatigue, poor concentration, sleep issues, headaches/stomach problems, indifference to learning, easy irritability, isolation tendency, loss of accomplishment. Adjust your pace immediately.'}
      </TipBox>

      <h2>{isKo ? '번아웃 예방 전략' : 'Burnout Prevention Strategies'}</h2>
      <ul>
        <li>
          <strong>{isKo ? '지속 가능한 페이스 설정' : 'Set a Sustainable Pace'}</strong> -{' '}
          {isKo
            ? '하루 최대 학습 시간을 정하고 절대 초과하지 않습니다. 마라톤 선수가 처음부터 전력 질주하지 않듯, 학습도 장기전입니다. 오늘 12시간 공부하고 내일 0시간보다, 매일 4시간이 훨씬 효과적입니다.'
            : 'Set a maximum daily study time and never exceed it. Like marathon runners who don\'t sprint from the start, learning is a long game. Studying 4 hours daily is far more effective than 12 hours today and 0 tomorrow.'}
        </li>
        <li>
          <strong>{isKo ? '완충 주간 설정' : 'Set Buffer Weeks'}</strong> -{' '}
          {isKo
            ? '매 4-6주마다 강도를 50%로 줄이는 "회복 주간"을 계획에 포함시킵니다. 운동 선수의 디로딩(Deloading) 개념과 같습니다.'
            : 'Plan "recovery weeks" every 4-6 weeks where intensity drops to 50%. Similar to an athlete\'s deloading concept.'}
        </li>
        <li>
          <strong>{isKo ? '학습 외 활동 보장' : 'Protect Non-Study Activities'}</strong> -{' '}
          {isKo
            ? '취미, 운동, 친구와의 시간을 "비생산적"이라고 여기지 마세요. 이러한 활동들이 뇌의 회복을 돕고 창의성을 촉진합니다. 학습만 하는 삶은 역설적으로 학습 효율을 떨어뜨립니다.'
            : 'Don\'t consider hobbies, exercise, and friend time as "unproductive." These activities aid brain recovery and foster creativity. A life of only studying paradoxically reduces study efficiency.'}
        </li>
        <li>
          <strong>{isKo ? '성취 기록하기' : 'Record Achievements'}</strong> -{' '}
          {isKo
            ? '매주 "이번 주에 달성한 것 3가지"를 기록합니다. 진전을 눈으로 확인하면 무기력감을 방지할 수 있습니다.'
            : 'Record "3 things I achieved this week" every week. Visually confirming progress prevents feelings of helplessness.'}
        </li>
      </ul>

      <h3>{isKo ? '번아웃에서 회복하기' : 'Recovering from Burnout'}</h3>
      <p>
        {isKo
          ? '이미 번아웃 상태라면 자책하지 마세요. 번아웃은 나약함의 증거가 아니라, 오랫동안 열심히 노력했다는 증거입니다. 다음의 단계를 따라 천천히 회복하세요.'
          : 'If you\'re already burned out, don\'t blame yourself. Burnout is not evidence of weakness but proof you\'ve worked hard for a long time. Follow these steps for gradual recovery.'}
      </p>
      <ol>
        <li>{isKo ? '완전한 휴식기를 가집니다 (최소 3-7일). 학습에 대한 죄책감을 내려놓으세요.' : 'Take a complete rest period (at least 3-7 days). Let go of guilt about not studying.'}</li>
        <li>{isKo ? '수면, 영양, 운동 등 기본적인 건강 관리부터 회복합니다.' : 'Restore basic health: sleep, nutrition, and exercise.'}</li>
        <li>{isKo ? '원래 학습량의 30%부터 천천히 재개합니다.' : 'Resume slowly at 30% of your original study volume.'}</li>
        <li>{isKo ? '2주에 걸쳐 점진적으로 학습량을 늘립니다 (최대 원래의 70-80%).' : 'Gradually increase over 2 weeks (up to 70-80% of original volume).'}</li>
        <li>{isKo ? '이전과 같은 패턴을 반복하지 않도록 학습 방식을 재설계합니다.' : 'Redesign your study approach to avoid repeating the same patterns.'}</li>
      </ol>

      <TipBox type="tip">
        {isKo
          ? '"잘 쉬는 것도 실력이다"라는 말을 기억하세요. 최고의 운동선수들은 훈련만큼이나 회복에 투자합니다. 효과적으로 쉬는 것이 다음 학습의 질을 결정합니다.'
          : 'Remember: "Resting well is a skill too." Top athletes invest as much in recovery as in training. How effectively you rest determines the quality of your next study session.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Learning from Failure
   =============================================== */
function FailureSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '실패에서 배우기' : 'Learning from Failure'}</h1>
        <p>
          {isKo
            ? '실패는 학습 과정의 자연스러운 일부이며, 성장의 가장 강력한 촉매제입니다. 문제는 실패 자체가 아니라, 실패에 대한 우리의 반응입니다. 실패를 두려워하는 대신 활용하는 방법을 배우면, 모든 좌절이 성장의 발판이 됩니다.'
            : 'Failure is a natural part of learning and the most powerful catalyst for growth. The problem isn\'t failure itself but our reaction to it. When you learn to leverage failure instead of fearing it, every setback becomes a stepping stone.'}
        </p>
      </div>

      <h2>{isKo ? '실패에 대한 관점 전환' : 'Reframing Failure'}</h2>
      <p>
        {isKo
          ? '토마스 에디슨은 전구를 발명하기까지 10,000번 이상 실패했습니다. 그는 "나는 실패한 것이 아니라, 작동하지 않는 10,000가지 방법을 찾은 것이다"라고 말했습니다. 이것이 실패를 대하는 올바른 관점입니다.'
          : 'Thomas Edison failed over 10,000 times before inventing the lightbulb. He said, "I have not failed. I\'ve just found 10,000 ways that won\'t work." This is the right perspective on failure.'}
      </p>

      <h3>{isKo ? '실패의 유형과 가치' : 'Types and Value of Failure'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '지식 실패 (Knowledge Failure)' : 'Knowledge Failure'}</strong> -{' '}
          {isKo
            ? '몰라서 틀리는 경우입니다. 학습의 공백을 정확히 알려주는 가장 유용한 실패입니다. 오답 노트의 주요 대상이며, 이를 통해 무엇을 더 공부해야 하는지 명확히 알 수 있습니다.'
            : 'Getting things wrong due to lack of knowledge. The most useful type of failure, precisely revealing gaps in learning. Primary material for error notes, showing exactly what to study further.'}
        </li>
        <li>
          <strong>{isKo ? '부주의 실패 (Carelessness Failure)' : 'Carelessness Failure'}</strong> -{' '}
          {isKo
            ? '알면서도 실수하는 경우입니다. 집중력 관리, 검토 습관, 문제 풀이 루틴을 개선해야 한다는 신호입니다.'
            : 'Making mistakes despite knowing the answer. A signal to improve focus management, review habits, and problem-solving routines.'}
        </li>
        <li>
          <strong>{isKo ? '도전 실패 (Challenge Failure)' : 'Challenge Failure'}</strong> -{' '}
          {isKo
            ? '자신의 수준을 넘는 과제에 도전했다가 실패하는 경우입니다. 성장의 가장 좋은 기회이며, 현재 능력의 한계를 확인하고 확장할 수 있는 계기가 됩니다.'
            : 'Failing at a task beyond your current level. The best opportunity for growth, revealing and expanding the boundaries of your current abilities.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '실패 분석 프레임워크' : 'Failure Analysis Framework'}>
        {isKo
          ? '실패 후 다음 4가지 질문에 답해보세요: (1) 정확히 어디서 잘못되었는가? (2) 왜 잘못되었는가? (원인 분석) (3) 다음에 어떻게 하면 다른 결과를 얻을 수 있는가? (4) 이 실패에서 배운 가장 중요한 교훈은 무엇인가? 이 네 가지 질문에 답하는 것만으로도 실패의 가치가 극대화됩니다.'
          : 'After failure, answer these 4 questions: (1) Where exactly did it go wrong? (2) Why did it go wrong? (root cause) (3) How can I get a different result next time? (4) What is the most important lesson? Just answering these four questions maximizes the value of failure.'}
      </TipBox>

      <h2>{isKo ? '실패 내성 키우기' : 'Building Failure Tolerance'}</h2>
      <p>
        {isKo
          ? '실패에 대한 내성(Failure Tolerance)은 근육처럼 훈련할 수 있습니다. 작은 실패를 의도적으로 경험하고 극복하는 과정을 반복하면, 큰 실패 앞에서도 흔들리지 않는 회복탄력성이 생깁니다.'
          : 'Failure tolerance can be trained like a muscle. By intentionally experiencing and overcoming small failures repeatedly, you build resilience that remains steady even before large failures.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '어려운 문제에 먼저 도전하기' : 'Tackle Hard Problems First'}</strong> -{' '}
          {isKo
            ? '일부러 풀 수 없을 것 같은 문제에 도전합니다. 풀지 못해도 괜찮습니다. 시도 자체가 사고력을 키우고, 해답을 볼 때 이해의 깊이가 달라집니다.'
            : 'Deliberately attempt problems that seem unsolvable. Not solving them is okay. The attempt itself builds thinking skills, and understanding deepens when you see the solution.'}
        </li>
        <li>
          <strong>{isKo ? '실패 일지 작성하기' : 'Keep a Failure Journal'}</strong> -{' '}
          {isKo
            ? '매주 "이번 주의 실패와 교훈"을 기록합니다. 시간이 지나면 실패가 성장의 이정표였음을 확인할 수 있습니다.'
            : 'Record "this week\'s failures and lessons" weekly. Over time, you\'ll confirm that failures were milestones of growth.'}
        </li>
        <li>
          <strong>{isKo ? '실패를 공유하기' : 'Share Your Failures'}</strong> -{' '}
          {isKo
            ? '스터디 그룹에서 서로의 실패를 공유하면 실패에 대한 수치심이 줄어들고, 서로에게서 배울 수 있습니다. "이번 주 가장 큰 실수와 거기서 배운 것"을 공유하는 시간을 만들어보세요.'
            : 'Sharing failures in study groups reduces shame and enables mutual learning. Create time to share "this week\'s biggest mistake and what I learned from it."'}
        </li>
        <li>
          <strong>{isKo ? '성공한 사람들의 실패 사례 연구' : 'Study Failures of Successful People'}</strong> -{' '}
          {isKo
            ? '스티브 잡스는 자신이 만든 회사에서 쫓겨났고, J.K. 롤링은 12개 출판사에서 거절당했습니다. 모든 위대한 성공의 뒤에는 수많은 실패가 있습니다.'
            : 'Steve Jobs was fired from his own company. J.K. Rowling was rejected by 12 publishers. Behind every great success lies countless failures.'}
        </li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '같은 실패를 반복하는 것은 학습이 아닙니다. 실패에서 배우지 못하고 같은 패턴을 반복한다면, 방법을 바꿔야 합니다. 아인슈타인은 "같은 일을 반복하면서 다른 결과를 기대하는 것은 미친 짓이다"라고 말했습니다. 실패 후에는 반드시 접근 방식을 조정하세요.'
          : 'Repeating the same failure is not learning. If you repeat patterns without learning from failure, you need to change your approach. Einstein said, "Insanity is doing the same thing over and over and expecting different results." Always adjust your approach after failure.'}
      </TipBox>

      <h3>{isKo ? '자기 연민 (Self-Compassion)' : 'Self-Compassion'}</h3>
      <p>
        {isKo
          ? '실패 후 자책은 학습에 전혀 도움이 되지 않습니다. 크리스틴 네프(Kristin Neff) 교수의 연구에 따르면, 자기 연민(자신에게 친절하게 대하는 것)이 자기 비판보다 학습 동기와 회복력을 훨씬 더 높여줍니다.'
          : 'Self-blame after failure doesn\'t help learning at all. According to Kristin Neff\'s research, self-compassion (treating yourself with kindness) boosts learning motivation and resilience far more than self-criticism.'}
      </p>
      <ul>
        <li>
          {isKo
            ? '실패한 자신에게 "친한 친구에게 하듯" 말해보세요. 친구가 시험에 떨어졌을 때 뭐라고 말해줄까요?'
            : 'Talk to your failed self "as you would to a close friend." What would you say to a friend who failed an exam?'}
        </li>
        <li>
          {isKo
            ? '실패는 나만 겪는 것이 아닙니다. 모든 학습자가 실패를 경험합니다. 이것은 인간의 보편적인 경험입니다.'
            : 'Failure isn\'t unique to you. Every learner experiences it. This is a universal human experience.'}
        </li>
        <li>
          {isKo
            ? '감정을 인정하되 과잉 동일시하지 마세요. "시험에서 떨어졌다"와 "나는 실패자다"는 전혀 다른 문장입니다.'
            : 'Acknowledge emotions without over-identifying. "I failed the exam" and "I am a failure" are completely different statements.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Sustaining Long-term Motivation
   =============================================== */
function SustainSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '장기 동기 유지법' : 'Sustaining Long-term Motivation'}</h1>
        <p>
          {isKo
            ? '처음의 열정은 누구나 가질 수 있지만, 6개월, 1년, 3년 이상 학습을 지속하는 것은 완전히 다른 이야기입니다. 장기간 동기를 유지하려면 열정에만 의존하지 않는 체계적인 시스템이 필요합니다.'
            : 'Anyone can have initial enthusiasm, but sustaining learning for 6 months, 1 year, or 3+ years is an entirely different story. Maintaining long-term motivation requires systematic approaches that don\'t rely solely on passion.'}
        </p>
      </div>

      <h2>{isKo ? '습관 기반 학습 시스템' : 'Habit-Based Learning System'}</h2>
      <p>
        {isKo
          ? '제임스 클리어(James Clear)의 저서 "Atomic Habits"에서 강조하듯, 동기는 오르내리지만 습관은 일관됩니다. 의욕이 없는 날에도 자동으로 학습을 시작할 수 있는 시스템을 만들어야 합니다.'
          : 'As James Clear emphasizes in "Atomic Habits," motivation fluctuates but habits are consistent. You need a system that automatically initiates studying even on days when you feel unmotivated.'}
      </p>

      <h3>{isKo ? '습관 형성의 4가지 법칙' : 'The 4 Laws of Habit Formation'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '분명하게 만들기 (Make it Obvious)' : 'Make it Obvious'}</strong> -{' '}
          {isKo
            ? '학습 시작의 단서를 명확히 설정합니다. "아침 커피를 마시면 → 단어장을 펼친다"처럼 기존 습관에 학습을 연결하세요. 학습 자료를 항상 눈에 보이는 곳에 두는 것도 효과적입니다.'
            : 'Set clear cues for starting study. Link learning to existing habits: "When I drink morning coffee, I open my vocabulary book." Keeping study materials always visible is also effective.'}
        </li>
        <li>
          <strong>{isKo ? '매력적으로 만들기 (Make it Attractive)' : 'Make it Attractive'}</strong> -{' '}
          {isKo
            ? '좋아하는 활동과 학습을 묶어보세요. "좋아하는 카페에서만 공부한다" "공부 후 좋아하는 드라마를 본다" 등의 유혹 묶기(Temptation Bundling) 전략이 효과적입니다.'
            : 'Bundle learning with activities you enjoy. "I only study at my favorite cafe" or "I watch my favorite show after studying." Temptation bundling strategies work well.'}
        </li>
        <li>
          <strong>{isKo ? '쉽게 만들기 (Make it Easy)' : 'Make it Easy'}</strong> -{' '}
          {isKo
            ? '학습 시작의 마찰을 최소화합니다. 전날 밤에 내일 공부할 자료를 미리 펼쳐놓으세요. 시작이 쉬우면 지속도 쉬워집니다. "2분 규칙"을 적용하여 아무리 의욕이 없어도 2분은 시작합니다.'
            : 'Minimize friction to start studying. Open tomorrow\'s materials the night before. Easy starts lead to easy continuation. Apply the "2-minute rule": start for at least 2 minutes no matter how unmotivated.'}
        </li>
        <li>
          <strong>{isKo ? '만족스럽게 만들기 (Make it Satisfying)' : 'Make it Satisfying'}</strong> -{' '}
          {isKo
            ? '학습 완료 후 즉각적인 만족감을 제공합니다. 진도표에 체크하기, 학습 로그 작성, 작은 보상 등이 도움됩니다. 뇌는 만족감을 준 행동을 반복하려 합니다.'
            : 'Provide immediate satisfaction after study completion. Checking progress charts, writing study logs, and small rewards help. The brain tends to repeat actions that provided satisfaction.'}
        </li>
      </ol>

      <TipBox type="tip" title={isKo ? '1% 법칙' : 'The 1% Rule'}>
        {isKo
          ? '매일 1%만 성장해도 1년 후에는 37배가 됩니다 (1.01^365 = 37.78). 거창한 변화를 시도하지 말고, 매일 아주 조금씩 꾸준히 개선하세요. 오늘 단어 5개를 외웠다면, 내일은 6개를 시도해보세요. 이 작은 차이가 시간이 지나면 엄청난 차이를 만듭니다.'
          : 'Growing just 1% daily makes you 37 times better in a year (1.01^365 = 37.78). Don\'t attempt dramatic changes. Improve steadily by tiny increments each day. If you memorized 5 words today, try 6 tomorrow. This small difference creates an enormous gap over time.'}
      </TipBox>

      <h2>{isKo ? '동기 재충전 전략' : 'Motivation Recharge Strategies'}</h2>
      <p>
        {isKo
          ? '아무리 좋은 습관도 때때로 동기가 바닥을 칠 수 있습니다. 이때를 위한 비상 전략을 미리 준비해두세요.'
          : 'Even the best habits face motivation dips. Prepare emergency strategies for these moments in advance.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '초심 돌아보기' : 'Revisit Your Why'}</strong> -{' '}
          {isKo
            ? '"왜 이 공부를 시작했는가?"를 적어둔 문서를 다시 읽어보세요. 처음의 목적과 열정을 떠올리는 것만으로도 동기가 회복될 수 있습니다.'
            : 'Reread the document where you wrote "Why did I start this?" Simply recalling your original purpose and passion can restore motivation.'}
        </li>
        <li>
          <strong>{isKo ? '환경 바꾸기' : 'Change Your Environment'}</strong> -{' '}
          {isKo
            ? '같은 장소에서 매일 공부하면 지루해질 수 있습니다. 도서관, 카페, 스터디 카페 등 장소를 주기적으로 바꾸면 신선한 자극을 받을 수 있습니다.'
            : 'Studying in the same place daily can become stale. Periodically changing locations to libraries, cafes, or study rooms provides fresh stimulation.'}
        </li>
        <li>
          <strong>{isKo ? '학습 커뮤니티 참여' : 'Join a Learning Community'}</strong> -{' '}
          {isKo
            ? '같은 목표를 가진 사람들과 함께하면 사회적 동기가 작용합니다. 온라인 스터디 그룹, 학습 챌린지, 멘토링 프로그램 등에 참여해보세요.'
            : 'Being with people who share your goals activates social motivation. Try online study groups, learning challenges, and mentoring programs.'}
        </li>
        <li>
          <strong>{isKo ? '진척도 시각화' : 'Visualize Progress'}</strong> -{' '}
          {isKo
            ? '학습 시간, 완료한 챕터 수, 풀린 문제 수 등을 그래프나 차트로 시각화합니다. 성장의 궤적을 눈으로 확인하면 "이만큼 왔으니 계속 가자"라는 동기가 생깁니다.'
            : 'Visualize study hours, completed chapters, and solved problems in graphs or charts. Seeing your growth trajectory creates motivation: "I\'ve come this far, let\'s keep going."'}
        </li>
        <li>
          <strong>{isKo ? '학습 방법 변화' : 'Vary Your Study Methods'}</strong> -{' '}
          {isKo
            ? '책 읽기만 하지 말고 영상 강의, 팟캐스트, 실습 프로젝트, 그룹 토론 등 다양한 학습 방법을 시도하세요. 같은 내용도 다른 방식으로 접근하면 새로운 이해와 흥미가 생깁니다.'
            : 'Don\'t just read books. Try video lectures, podcasts, hands-on projects, and group discussions. Approaching the same content differently yields new understanding and interest.'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '동기가 없을 때 가장 위험한 것은 "의욕이 생기면 다시 시작해야지"라는 생각입니다. 행동이 동기를 만들지, 동기가 행동을 만드는 것이 아닙니다. 의욕이 없어도 일단 시작하면 5분 후에 동기가 따라옵니다. 이를 "행동 모멘텀(Action Momentum)"이라고 합니다.'
          : 'The most dangerous thought when unmotivated is "I\'ll restart when I feel motivated." Action creates motivation, not the other way around. Even without desire, starting generates motivation within 5 minutes. This is called "Action Momentum."'}
      </TipBox>

      <h3>{isKo ? '마일스톤 축하하기' : 'Celebrating Milestones'}</h3>
      <p>
        {isKo
          ? '장기 목표의 중간중간에 마일스톤을 설정하고, 달성할 때마다 스스로를 축하하세요. 작은 성공의 축적이 큰 성취를 만듭니다. 100일 연속 학습, 기출문제 500문제 풀기, 전공서적 5권 완독 등 의미 있는 이정표를 미리 정해두고, 달성 시 자신에게 선물을 주세요.'
          : 'Set milestones along your long-term goals and celebrate each achievement. Accumulated small wins create great achievements. Pre-set meaningful milestones like 100 consecutive study days, 500 practice problems, or completing 5 textbooks, and reward yourself upon reaching them.'}
      </p>

      <TipBox type="tip">
        {isKo
          ? '학습은 목적지가 아니라 여정입니다. "자격증을 따면 행복해질 거야"라는 생각보다 "매일 새로운 것을 배우는 과정 자체가 보람 있다"는 관점으로 전환하면, 학습의 즐거움이 훨씬 오래 지속됩니다. 과정을 즐기는 사람이 결국 가장 멀리 갑니다.'
          : 'Learning is a journey, not a destination. Shifting from "I\'ll be happy when I get certified" to "the daily process of learning new things is inherently rewarding" makes the joy of learning last much longer. Those who enjoy the process ultimately go the farthest.'}
      </TipBox>
    </div>
  );
}
