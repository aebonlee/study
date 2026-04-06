import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'intro', icon: 'fa-flask', ko: '학습 습관의 과학', en: 'The Science of Study Habits' },
  { id: 'routine', icon: 'fa-calendar-check', ko: '학습 루틴 만들기', en: 'Building a Study Routine' },
  { id: 'environment', icon: 'fa-house-laptop', ko: '최적 학습 환경 조성', en: 'Creating the Optimal Study Environment' },
  { id: 'tracking', icon: 'fa-chart-line', ko: '습관 추적과 모니터링', en: 'Habit Tracking & Monitoring' },
  { id: 'review', icon: 'fa-rotate', ko: '효과적인 복습 전략', en: 'Effective Review Strategies' },
  { id: 'sustain', icon: 'fa-infinity', ko: '장기 습관 유지법', en: 'Long-term Habit Maintenance' },
];

export default function StudyHabits(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');
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
        title={isKo ? '학습 습관 만들기 | 스터디 가이드' : 'Building Study Habits | Study Guide'}
        description={
          isKo
            ? '효과적인 학습 습관을 만들고 유지하는 과학적 방법을 배워보세요.'
            : 'Learn scientific methods to build and maintain effective study habits.'
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
            {activeSection === 'intro' && <IntroSection isKo={isKo} />}
            {activeSection === 'routine' && <RoutineSection isKo={isKo} />}
            {activeSection === 'environment' && <EnvironmentSection isKo={isKo} />}
            {activeSection === 'tracking' && <TrackingSection isKo={isKo} />}
            {activeSection === 'review' && <ReviewSection isKo={isKo} />}
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
   Section: Introduction - The Science of Study Habits
   =============================================== */
function IntroSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '학습 습관의 과학' : 'The Science of Study Habits'}</h1>
        <p>
          {isKo
            ? '왜 학습 습관이 중요하며, 뇌과학은 습관 형성에 대해 무엇을 말해주는지 알아봅니다.'
            : 'Explore why study habits matter and what neuroscience tells us about habit formation.'}
        </p>
        <img src="/assets/images/topics/study-habits-hero.svg" alt={isKo ? '학습 습관 일러스트' : 'Study Habits Illustration'} className="guide-hero-illustration" />
      </div>

      <h2>{isKo ? '습관이란 무엇인가?' : 'What Are Habits?'}</h2>
      <p>
        {isKo
          ? '습관은 반복적인 행동이 자동화된 것입니다. 뇌의 기저핵(Basal Ganglia)은 반복된 행동 패턴을 저장하여, 의식적인 노력 없이도 특정 행동을 수행할 수 있게 합니다. MIT 연구에 따르면, 우리의 일상 행동 중 약 40~45%가 습관에 의해 이루어집니다. 이는 학습에서도 마찬가지로, 공부를 습관화하면 시작하는 데 필요한 의지력이 크게 줄어들게 됩니다.'
          : 'Habits are automated behaviors formed through repetition. The basal ganglia in our brain stores repeated behavioral patterns, allowing us to perform certain actions without conscious effort. According to MIT research, approximately 40-45% of our daily actions are driven by habits. This applies to studying as well -- once studying becomes habitual, the willpower needed to start is drastically reduced.'}
      </p>

      <h3>{isKo ? '습관 루프(Habit Loop)의 3단계' : 'The 3 Stages of the Habit Loop'}</h3>
      <p>
        {isKo
          ? '찰스 두히그(Charles Duhigg)의 연구에 따르면, 모든 습관은 세 가지 요소로 구성된 루프를 따릅니다.'
          : 'According to Charles Duhigg\'s research, every habit follows a loop composed of three elements.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '신호(Cue)' : 'Cue'}</strong> -{' '}
          {isKo
            ? '습관을 시작하게 하는 방아쇠 역할을 합니다. 예를 들어, 특정 시간, 장소, 감정 상태 등이 될 수 있습니다. 매일 저녁 8시에 책상에 앉는 것이 학습의 신호가 될 수 있습니다.'
            : 'Acts as a trigger that initiates the habit. This could be a specific time, place, or emotional state. For example, sitting at your desk at 8 PM every evening can serve as a cue for studying.'}
        </li>
        <li>
          <strong>{isKo ? '반복(Routine)' : 'Routine'}</strong> -{' '}
          {isKo
            ? '신호에 의해 실행되는 실제 행동입니다. 교과서를 펴고 30분간 집중하여 읽는 것, 또는 플래시카드로 복습하는 것 등이 해당합니다.'
            : 'The actual behavior performed in response to the cue. This could be opening your textbook and reading with focus for 30 minutes, or reviewing with flashcards.'}
        </li>
        <li>
          <strong>{isKo ? '보상(Reward)' : 'Reward'}</strong> -{' '}
          {isKo
            ? '행동 후 얻는 만족감이나 결과물입니다. 학습 후 자신에게 작은 보상을 주거나, 진도를 체크하는 뿌듯함이 보상이 됩니다. 보상이 클수록 습관이 강화됩니다.'
            : 'The satisfaction or outcome gained after the behavior. Giving yourself a small reward after studying, or the pride of checking off completed tasks, serves as the reward. The greater the reward, the stronger the habit becomes.'}
        </li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '새로운 학습 습관을 만들 때는 기존 습관에 "연결"하는 것이 효과적입니다. 예를 들어, "저녁 식사 후(기존 습관) 바로 30분간 공부한다(새 습관)"와 같이 설정하면 습관 형성이 훨씬 쉬워집니다. 이를 "습관 쌓기(Habit Stacking)"라고 합니다.'
          : 'When building a new study habit, it is effective to "chain" it to an existing habit. For example, setting a rule like "Right after dinner (existing habit), I will study for 30 minutes (new habit)" makes habit formation much easier. This technique is called "Habit Stacking."'}
      </TipBox>

      <h3>{isKo ? '신경가소성과 학습' : 'Neuroplasticity and Learning'}</h3>
      <p>
        {isKo
          ? '뇌는 경험에 따라 구조와 기능이 변하는 신경가소성(Neuroplasticity)을 가지고 있습니다. 특정 학습 행동을 반복할 때마다 관련 신경 회로가 강화되고, 미엘린(Myelin) 수초가 두꺼워져 신경 전달 속도가 빨라집니다. 이것이 바로 "연습이 완벽을 만든다"의 과학적 근거입니다.'
          : 'The brain possesses neuroplasticity -- the ability to change its structure and function based on experience. Each time you repeat a specific learning behavior, the related neural circuits are strengthened and the myelin sheath thickens, increasing the speed of neural transmission. This is the scientific basis for "practice makes perfect."'}
      </p>

      <h3>{isKo ? '21일 vs. 66일: 습관 형성에 걸리는 시간' : '21 Days vs. 66 Days: How Long Does Habit Formation Take?'}</h3>
      <p>
        {isKo
          ? '흔히 "21일이면 습관이 된다"고 하지만, 2009년 University College London의 연구에 따르면 새로운 습관이 자동화되기까지 평균 66일이 걸립니다. 단순한 습관(물 마시기)은 18일, 복잡한 습관(운동)은 254일까지 걸리기도 합니다. 학습 습관은 중간 정도의 복잡성을 가지므로, 약 2~3개월간 꾸준히 실천하면 자동화될 수 있습니다.'
          : 'The popular claim is "21 days to form a habit," but a 2009 study from University College London found that it takes an average of 66 days for a new habit to become automatic. Simple habits (drinking water) can take as few as 18 days, while complex ones (exercising) can take up to 254 days. Study habits have moderate complexity, so consistent practice for about 2-3 months can lead to automaticity.'}
      </p>

      <TipBox type="tip">
        {isKo
          ? '완벽하지 않아도 괜찮습니다. 연구에 따르면, 하루 빠뜨리는 것은 장기적인 습관 형성에 큰 영향을 미치지 않습니다. 중요한 것은 "절대 2일 연속 빠뜨리지 않는 것"입니다.'
          : 'It is okay to not be perfect. Research shows that missing a single day does not significantly affect long-term habit formation. The key is to "never miss two days in a row."'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Building a Study Routine
   =============================================== */
function RoutineSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '학습 루틴 만들기' : 'Building a Study Routine'}</h1>
        <p>
          {isKo
            ? '효과적인 학습 루틴을 설계하고 실행하는 구체적인 방법을 알아봅니다.'
            : 'Learn concrete methods for designing and executing an effective study routine.'}
        </p>
      </div>

      <h2>{isKo ? '시간 블록 설정하기' : 'Setting Up Time Blocks'}</h2>
      <p>
        {isKo
          ? '연구에 따르면, 인간의 집중력은 평균 25~50분 간격으로 최적의 효율을 보입니다. 이를 활용한 대표적인 시간 관리 기법이 포모도로 기법(Pomodoro Technique)입니다. 25분 집중 + 5분 휴식을 1세트로, 4세트 후 15~30분 긴 휴식을 취합니다.'
          : 'Research shows that human concentration operates at optimal efficiency in intervals of 25-50 minutes. The Pomodoro Technique is a well-known time management method based on this principle: 25 minutes of focus + 5 minutes of rest as one set, followed by a 15-30 minute long break after 4 sets.'}
      </p>
      <img src="/assets/images/topics/study-habits-routine.svg" alt={isKo ? '학습 루틴 다이어그램' : 'Study Routine Diagram'} className="guide-section-illustration" />

      <h3>{isKo ? '시간대별 최적 학습 전략' : 'Optimal Study Strategies by Time of Day'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '오전 (6시~12시)' : 'Morning (6 AM - 12 PM)'}</strong> -{' '}
          {isKo
            ? '코르티솔 수치가 높아 집중력과 분석적 사고가 최고조에 달합니다. 새로운 개념 학습, 수학 문제 풀이, 논리적 분석이 필요한 과목에 적합합니다.'
            : 'Cortisol levels are high, making concentration and analytical thinking peak. Best suited for learning new concepts, solving math problems, and subjects requiring logical analysis.'}
        </li>
        <li>
          <strong>{isKo ? '오후 (12시~17시)' : 'Afternoon (12 PM - 5 PM)'}</strong> -{' '}
          {isKo
            ? '점심 후 졸음이 올 수 있지만, 장기 기억 통합에 유리합니다. 복습, 그룹 스터디, 토론 등 협업적 학습에 적합합니다. 오후 2~3시의 졸음은 짧은 낮잠(15~20분)으로 극복하세요.'
            : 'Drowsiness may occur after lunch, but this period is favorable for long-term memory consolidation. Suitable for review, group study, and collaborative learning. Overcome the 2-3 PM slump with a short nap (15-20 minutes).'}
        </li>
        <li>
          <strong>{isKo ? '저녁 (17시~22시)' : 'Evening (5 PM - 10 PM)'}</strong> -{' '}
          {isKo
            ? '창의적 사고가 활성화되는 시간대입니다. 에세이 작성, 창의적 문제 해결, 예술 관련 학습에 효과적입니다. 또한 잠자기 전 복습은 수면 중 기억 강화에 도움이 됩니다.'
            : 'This is when creative thinking is most active. Effective for essay writing, creative problem-solving, and arts-related study. Reviewing before sleep also helps strengthen memories during sleep.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '자신의 크로노타입(Chronotype)을 파악하세요. 아침형 인간(종달새형)은 오전에, 저녁형 인간(올빼미형)은 저녁에 집중력이 가장 높습니다. 자신에게 맞는 시간대를 찾아 핵심 학습 시간으로 지정하세요.'
          : 'Identify your chronotype. Morning people (larks) concentrate best in the morning, while night people (owls) peak in the evening. Find the time that works best for you and designate it as your core study time.'}
      </TipBox>

      <h2>{isKo ? '주간 학습 계획 수립' : 'Creating a Weekly Study Plan'}</h2>
      <p>
        {isKo
          ? '효과적인 주간 학습 계획은 다음의 원칙을 따릅니다.'
          : 'An effective weekly study plan follows these principles.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '우선순위 매트릭스 활용' : 'Use a Priority Matrix'}</strong> -{' '}
          {isKo
            ? '아이젠하워 매트릭스를 활용하여 과목과 과제를 "긴급하고 중요한", "중요하지만 긴급하지 않은", "긴급하지만 중요하지 않은", "긴급하지도 중요하지도 않은" 4가지로 분류합니다.'
            : 'Use the Eisenhower Matrix to classify subjects and tasks into four categories: "urgent and important," "important but not urgent," "urgent but not important," and "neither urgent nor important."'}
        </li>
        <li>
          <strong>{isKo ? '인터리빙(Interleaving) 적용' : 'Apply Interleaving'}</strong> -{' '}
          {isKo
            ? '하나의 과목만 오래 공부하는 것보다, 여러 과목을 번갈아가며 공부하는 것이 장기 기억에 더 효과적입니다. 예: 수학 1시간 → 영어 1시간 → 수학 1시간.'
            : 'Alternating between multiple subjects is more effective for long-term memory than studying a single subject for a long time. Example: Math 1 hour, then English 1 hour, then Math 1 hour.'}
        </li>
        <li>
          <strong>{isKo ? '여유 시간 확보' : 'Build in Buffer Time'}</strong> -{' '}
          {isKo
            ? '계획의 70~80%만 채우고, 나머지 20~30%는 예상치 못한 상황이나 추가 복습을 위한 여유 시간으로 남겨두세요.'
            : 'Fill only 70-80% of your plan and leave the remaining 20-30% as buffer time for unexpected situations or additional review.'}
        </li>
        <li>
          <strong>{isKo ? '주간 리뷰 시간' : 'Weekly Review Time'}</strong> -{' '}
          {isKo
            ? '매주 일요일 저녁(또는 원하는 시간)에 30분간 한 주의 학습을 돌아보고, 다음 주 계획을 세우세요. 무엇이 잘 되었고, 무엇을 개선할지 기록합니다.'
            : 'Every Sunday evening (or your preferred time), spend 30 minutes reviewing the week\'s study and planning for the next week. Record what went well and what needs improvement.'}
        </li>
      </ol>

      <TipBox type="warning">
        {isKo
          ? '지나치게 빡빡한 계획은 오히려 역효과를 낳습니다. 계획을 지키지 못했을 때 느끼는 좌절감이 학습 동기를 떨어뜨리기 때문입니다. 처음에는 현실적으로 달성 가능한 작은 목표부터 시작하세요.'
          : 'An overly tight schedule can actually backfire. The frustration of failing to follow the plan can undermine study motivation. Start with small, realistically achievable goals.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Creating the Optimal Study Environment
   =============================================== */
function EnvironmentSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '최적 학습 환경 조성' : 'Creating the Optimal Study Environment'}</h1>
        <p>
          {isKo
            ? '물리적, 디지털 환경을 최적화하여 집중력과 학습 효율을 극대화하는 방법을 배웁니다.'
            : 'Learn how to optimize your physical and digital environment to maximize focus and learning efficiency.'}
        </p>
      </div>

      <img src="/assets/images/topics/study-habits-environment.svg" alt={isKo ? '최적 학습 환경' : 'Optimal Study Environment'} className="guide-section-illustration" />

      <h2>{isKo ? '물리적 환경 최적화' : 'Optimizing Your Physical Environment'}</h2>

      <h3>{isKo ? '조명과 온도' : 'Lighting and Temperature'}</h3>
      <p>
        {isKo
          ? '연구에 따르면, 자연광에 가까운 5000~6500K(켈빈) 색온도의 조명이 집중력 향상에 가장 효과적입니다. 너무 어두운 환경은 졸음을 유발하고, 너무 밝은 형광등은 눈의 피로를 가중시킵니다. 실내 온도는 20~22도가 인지 기능에 최적인 것으로 알려져 있으며, 너무 따뜻하면 졸음이, 너무 추우면 집중력이 떨어집니다.'
          : 'Research shows that lighting with a color temperature of 5000-6500K (Kelvin), close to natural light, is most effective for improving concentration. Too dark an environment induces drowsiness, while overly bright fluorescent lighting increases eye fatigue. An indoor temperature of 20-22 degrees Celsius (68-72 degrees Fahrenheit) is known to be optimal for cognitive function -- too warm causes drowsiness, too cold reduces concentration.'}
      </p>

      <h3>{isKo ? '책상 정리와 인체공학' : 'Desk Organization and Ergonomics'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '깨끗한 책상' : 'Clean Desk'}</strong> -{' '}
          {isKo
            ? '프린스턴 대학교 연구에 따르면, 시각적 혼잡함(clutter)은 집중력을 분산시킵니다. 학습에 필요한 물건만 책상 위에 놓으세요.'
            : 'A Princeton University study found that visual clutter distracts concentration. Keep only study-essential items on your desk.'}
        </li>
        <li>
          <strong>{isKo ? '모니터 높이' : 'Monitor Height'}</strong> -{' '}
          {isKo
            ? '눈높이에서 약간 아래(10~20도)에 모니터 상단이 위치하도록 합니다. 장시간 아래를 내려다보면 목과 어깨에 통증이 생겨 학습 지속력이 떨어집니다.'
            : 'Position the top of your monitor slightly below eye level (10-20 degrees). Looking down for extended periods causes neck and shoulder pain, reducing your ability to sustain study sessions.'}
        </li>
        <li>
          <strong>{isKo ? '의자 높이' : 'Chair Height'}</strong> -{' '}
          {isKo
            ? '발이 바닥에 편안히 닿고, 무릎이 약 90도 각도가 되도록 의자 높이를 조절하세요. 허리 지지대가 있는 의자를 사용하면 장시간 학습에도 허리 부담을 줄일 수 있습니다.'
            : 'Adjust chair height so your feet rest comfortably on the floor with knees at about a 90-degree angle. Using a chair with lumbar support reduces back strain during long study sessions.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '"컨텍스트 의존 기억(Context-Dependent Memory)" 효과를 활용하세요. 특정 장소를 학습 전용으로 지정하면, 그 장소에 앉는 것만으로도 학습 모드로 전환하는 뇌의 연상 작용이 활성화됩니다.'
          : 'Leverage the "Context-Dependent Memory" effect. By designating a specific place for studying only, simply sitting in that spot activates your brain\'s association and switches you into study mode.'}
      </TipBox>

      <h2>{isKo ? '디지털 환경 관리' : 'Managing Your Digital Environment'}</h2>
      <p>
        {isKo
          ? '현대 학습자의 가장 큰 적은 디지털 방해 요소입니다. 캘리포니아 대학의 연구에 따르면, 한 번 집중이 깨진 후 원래의 집중 상태로 돌아오기까지 평균 23분이 걸립니다.'
          : 'The biggest enemy of modern learners is digital distraction. According to research from the University of California, it takes an average of 23 minutes to return to the original level of focus after an interruption.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '알림 차단' : 'Block Notifications'}</strong> -{' '}
          {isKo
            ? '학습 중에는 스마트폰을 "방해 금지" 모드로 설정하거나, 다른 방에 두세요. 시야에서 완전히 제거하는 것이 가장 효과적입니다.'
            : 'Set your smartphone to "Do Not Disturb" mode during study sessions, or place it in another room. Completely removing it from sight is the most effective approach.'}
        </li>
        <li>
          <strong>{isKo ? '웹사이트 차단 도구' : 'Website Blocking Tools'}</strong> -{' '}
          {isKo
            ? 'Cold Turkey, Freedom, Forest 등의 앱을 사용하여 학습 시간 동안 SNS, 뉴스 등 유혹이 되는 웹사이트를 차단하세요.'
            : 'Use apps like Cold Turkey, Freedom, or Forest to block distracting websites like social media and news during study hours.'}
        </li>
        <li>
          <strong>{isKo ? '전용 학습 브라우저 프로필' : 'Dedicated Study Browser Profile'}</strong> -{' '}
          {isKo
            ? '크롬이나 파이어폭스에서 학습 전용 프로필을 만들어, 학습 관련 북마크와 확장 프로그램만 설치하세요. SNS 로그인이 되어 있지 않은 깨끗한 환경을 유지합니다.'
            : 'Create a study-only profile in Chrome or Firefox with only study-related bookmarks and extensions. Maintain a clean environment with no social media accounts logged in.'}
        </li>
      </ul>

      <h3>{isKo ? '소음과 음악' : 'Noise and Music'}</h3>
      <p>
        {isKo
          ? '완전한 무음보다는 적당한 배경 소음(약 70dB)이 창의적 사고에 도움이 됩니다. 카페 소음을 재현하는 Coffitivity나, 자연 소리를 제공하는 Noisli 같은 도구를 활용하세요. 다만, 가사가 있는 음악은 언어 처리 영역을 방해하므로 독서나 글쓰기 중에는 피하는 것이 좋습니다.'
          : 'Moderate ambient noise (around 70dB) is more beneficial for creative thinking than complete silence. Use tools like Coffitivity to replicate cafe noise, or Noisli for nature sounds. However, music with lyrics interferes with language processing areas, so it should be avoided during reading or writing tasks.'}
      </p>

      <TipBox type="important">
        {isKo
          ? '학습 환경은 "학습만을 위한 공간"이어야 합니다. 침대에서 공부하면 뇌가 수면과 학습 신호를 혼동하여 두 가지 모두에 부정적인 영향을 미칩니다. 같은 책상이라도 학습 시와 여가 시 조명이나 배치를 다르게 하면 도움이 됩니다.'
          : 'Your study environment should be a "study-only space." Studying in bed confuses the brain\'s signals for sleep and learning, negatively affecting both. Even at the same desk, changing the lighting or arrangement between study time and leisure time can help.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Habit Tracking & Monitoring
   =============================================== */
function TrackingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '습관 추적과 모니터링' : 'Habit Tracking & Monitoring'}</h1>
        <p>
          {isKo
            ? '학습 습관의 진행 상황을 체계적으로 추적하고 측정하여 지속적으로 개선하는 방법을 알아봅니다.'
            : 'Learn how to systematically track and measure your study habit progress for continuous improvement.'}
        </p>
      </div>

      <h2>{isKo ? '왜 추적이 중요한가?' : 'Why Is Tracking Important?'}</h2>
      <p>
        {isKo
          ? '행동 심리학에서는 "측정하면 개선된다(What gets measured gets managed)"라는 원칙이 있습니다. 학습 습관을 추적하면 세 가지 효과가 있습니다. 첫째, 자신의 실제 학습 시간과 패턴을 객관적으로 인식할 수 있습니다. 둘째, 연속 기록(Streak)이 생기면 이를 깨고 싶지 않은 심리가 작용하여 동기가 강화됩니다. 셋째, 어떤 방법이 효과적인지 데이터를 기반으로 판단할 수 있습니다.'
          : 'In behavioral psychology, there is a principle that "what gets measured gets managed." Tracking study habits yields three benefits. First, you gain objective awareness of your actual study time and patterns. Second, as a streak builds, the psychological desire not to break it reinforces motivation. Third, you can make data-driven decisions about which methods are most effective.'}
      </p>

      <h3>{isKo ? '습관 추적 방법' : 'Habit Tracking Methods'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '아날로그 추적: 습관 달력' : 'Analog Tracking: Habit Calendar'}</strong>
          <p>
            {isKo
              ? '벽이나 책상에 월간 달력을 붙이고, 학습을 완료한 날에 X 표시를 합니다. 제리 사인펠드(Jerry Seinfeld)의 "Don\'t Break the Chain" 방법으로도 알려져 있습니다. 시각적으로 연속된 X 표시가 늘어나는 것을 보면 강력한 동기 부여가 됩니다.'
              : 'Hang a monthly calendar on your wall or desk and mark an X on each day you complete your study session. Also known as Jerry Seinfeld\'s "Don\'t Break the Chain" method. Visually seeing the growing chain of X marks provides powerful motivation.'}
          </p>
        </li>
        <li>
          <strong>{isKo ? '디지털 추적 앱' : 'Digital Tracking Apps'}</strong>
          <p>
            {isKo
              ? 'Toggl Track, Forest, Habitica 등의 앱을 활용하면 자동으로 학습 시간을 기록하고, 통계와 차트로 시각화할 수 있습니다. Habitica는 습관 추적을 RPG 게임처럼 만들어 재미 요소를 더합니다.'
              : 'Apps like Toggl Track, Forest, and Habitica automatically record study time and visualize it with statistics and charts. Habitica turns habit tracking into an RPG game, adding a fun element.'}
          </p>
        </li>
        <li>
          <strong>{isKo ? '학습 일지(Study Journal)' : 'Study Journal'}</strong>
          <p>
            {isKo
              ? '매일 학습 후 5분간 다음을 기록합니다: 오늘 공부한 내용, 이해도(1~10점), 어려웠던 부분, 내일 할 일. 이 과정 자체가 메타인지를 활성화하여 학습 효과를 높입니다.'
              : 'After each study session, spend 5 minutes recording: what you studied today, understanding level (1-10), difficult parts, and tomorrow\'s tasks. This process itself activates metacognition and enhances learning.'}
          </p>
        </li>
      </ol>

      <TipBox type="tip">
        {isKo
          ? '추적은 가능한 한 간단하게 유지하세요. 복잡한 추적 시스템은 그 자체가 부담이 되어 오히려 학습을 방해할 수 있습니다. "오늘 학습을 했는가? Yes/No" 정도의 단순한 추적도 충분히 효과적입니다.'
          : 'Keep tracking as simple as possible. A complex tracking system can itself become a burden and actually hinder studying. A simple "Did I study today? Yes/No" tracker can be sufficiently effective.'}
      </TipBox>

      <h2>{isKo ? '핵심 지표(KPI) 설정' : 'Setting Key Performance Indicators (KPIs)'}</h2>
      <p>
        {isKo
          ? '효과적인 학습 추적을 위해 다음과 같은 핵심 지표를 측정하세요.'
          : 'For effective study tracking, measure the following key indicators.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '총 학습 시간' : 'Total Study Time'}</strong> -{' '}
          {isKo
            ? '하루, 주간, 월간 단위로 실제 집중 학습 시간을 기록합니다. 책상에 앉아 있는 시간이 아니라, 실제로 집중한 시간을 측정하는 것이 중요합니다.'
            : 'Record actual focused study time on daily, weekly, and monthly basis. It is important to measure time actually spent in focus, not just time spent sitting at your desk.'}
        </li>
        <li>
          <strong>{isKo ? '완료율' : 'Completion Rate'}</strong> -{' '}
          {isKo
            ? '계획한 학습 대비 실제 완료한 비율을 추적합니다. 70% 이상이면 양호, 90% 이상이면 우수합니다. 지속적으로 50% 이하라면 계획이 비현실적인 것이므로 하향 조정이 필요합니다.'
            : 'Track the ratio of completed study against planned study. Above 70% is good, above 90% is excellent. If consistently below 50%, the plan is unrealistic and needs to be scaled down.'}
        </li>
        <li>
          <strong>{isKo ? '연속 일수(Streak)' : 'Streak (Consecutive Days)'}</strong> -{' '}
          {isKo
            ? '연속으로 학습한 일수를 기록합니다. 개인 최고 기록을 경신하는 것 자체가 강력한 동기 부여가 됩니다.'
            : 'Record the number of consecutive days you have studied. Breaking your personal record itself serves as a powerful motivator.'}
        </li>
        <li>
          <strong>{isKo ? '이해도 자기 평가' : 'Self-Assessment of Understanding'}</strong> -{' '}
          {isKo
            ? '학습한 내용에 대해 1~10점으로 자기 평가를 합니다. 시간이 지남에 따라 같은 주제에 대한 이해도가 상승하는 것을 확인할 수 있습니다.'
            : 'Rate your understanding of studied material on a 1-10 scale. Over time, you can observe your comprehension improving on the same topics.'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '주간 회고를 반드시 실시하세요. 매주 10~15분을 투자하여 데이터를 분석하고, 다음 주 계획에 반영합니다. 잘한 점 3가지와 개선할 점 1가지를 기록하면, 긍정적인 학습 경험이 강화됩니다.'
          : 'Always conduct a weekly retrospective. Invest 10-15 minutes each week to analyze data and reflect it in the next week\'s plan. Recording 3 things you did well and 1 thing to improve reinforces positive learning experiences.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Effective Review Strategies
   =============================================== */
function ReviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '효과적인 복습 전략' : 'Effective Review Strategies'}</h1>
        <p>
          {isKo
            ? '과학적으로 검증된 복습 방법을 통해 학습 내용을 장기 기억으로 전환하는 전략을 알아봅니다.'
            : 'Discover scientifically proven review methods that convert learned material into long-term memory.'}
        </p>
      </div>

      <h2>{isKo ? '에빙하우스 망각 곡선' : 'Ebbinghaus Forgetting Curve'}</h2>
      <p>
        {isKo
          ? '독일의 심리학자 헤르만 에빙하우스(Hermann Ebbinghaus)는 1885년 망각 곡선을 발견했습니다. 이에 따르면, 학습 후 20분이 지나면 약 42%를 잊고, 1시간 후에는 56%, 하루 후에는 67%, 한 달 후에는 79%를 잊게 됩니다. 그러나 적절한 시점에 복습을 하면, 망각 곡선의 기울기가 완만해지면서 기억 유지율이 크게 향상됩니다.'
          : 'German psychologist Hermann Ebbinghaus discovered the forgetting curve in 1885. According to it, after learning, we forget about 42% within 20 minutes, 56% after 1 hour, 67% after 1 day, and 79% after 1 month. However, by reviewing at appropriate intervals, the forgetting curve flattens and memory retention improves significantly.'}
      </p>

      <h3>{isKo ? '최적 복습 타이밍' : 'Optimal Review Timing'}</h3>
      <p>
        {isKo
          ? '연구 기반의 최적 복습 시점은 다음과 같습니다.'
          : 'Research-based optimal review intervals are as follows.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '1차 복습: 학습 후 10분 이내' : '1st Review: Within 10 minutes after learning'}</strong> -{' '}
          {isKo
            ? '학습 직후 핵심 내용을 빠르게 훑어봅니다. 노트를 닫고 주요 개념을 떠올려 보는 것만으로도 효과적입니다.'
            : 'Quickly go through key content right after learning. Simply closing your notes and trying to recall the main concepts is effective.'}
        </li>
        <li>
          <strong>{isKo ? '2차 복습: 1일 후' : '2nd Review: After 1 day'}</strong> -{' '}
          {isKo
            ? '다음 날 10~15분간 전날 학습 내용을 복습합니다. 이때 자신이 기억하지 못하는 부분을 특히 집중적으로 다룹니다.'
            : 'Review the previous day\'s material for 10-15 minutes the next day. Focus especially on parts you cannot remember.'}
        </li>
        <li>
          <strong>{isKo ? '3차 복습: 1주일 후' : '3rd Review: After 1 week'}</strong> -{' '}
          {isKo
            ? '일주일 후 전체적으로 복습하되, 이번에는 자신의 말로 설명해 보는 연습을 합니다.'
            : 'Review comprehensively after one week, but this time practice explaining it in your own words.'}
        </li>
        <li>
          <strong>{isKo ? '4차 복습: 1개월 후' : '4th Review: After 1 month'}</strong> -{' '}
          {isKo
            ? '한 달 후 종합 복습을 합니다. 이 시점까지 복습하면 장기 기억으로 확실히 전환됩니다.'
            : 'Conduct a comprehensive review after one month. Reviewing up to this point ensures solid conversion to long-term memory.'}
        </li>
      </ol>

      <TipBox type="tip">
        {isKo
          ? '간격 반복 소프트웨어(SRS)인 Anki나 Quizlet을 활용하면 최적의 복습 간격을 자동으로 계산해 줍니다. 특히 Anki는 각 카드에 대한 당신의 응답을 분석하여 맞춤형 복습 스케줄을 제공합니다.'
          : 'Spaced Repetition Software (SRS) like Anki or Quizlet automatically calculates optimal review intervals. Anki in particular analyzes your responses to each card and provides a personalized review schedule.'}
      </TipBox>

      <h2>{isKo ? '능동적 복습 기법' : 'Active Review Techniques'}</h2>

      <h3>{isKo ? '능동적 회상(Active Recall)' : 'Active Recall'}</h3>
      <p>
        {isKo
          ? '단순히 노트를 다시 읽는 것은 가장 비효율적인 복습 방법입니다. 대신, 노트를 닫고 배운 내용을 스스로 떠올리는 "능동적 회상"이 훨씬 효과적입니다. 2011년 Science 저널에 발표된 연구에 따르면, 능동적 회상은 단순 재독(re-reading)보다 50% 더 높은 기억 유지율을 보였습니다.'
          : 'Simply re-reading your notes is the least efficient review method. Instead, "active recall" -- closing your notes and trying to retrieve what you learned -- is far more effective. A 2011 study published in Science journal found that active recall showed 50% higher retention rates compared to simple re-reading.'}
      </p>
      <ul>
        <li>
          {isKo
            ? '플래시카드를 만들어 자기 테스트를 합니다.'
            : 'Create flashcards and self-test.'}
        </li>
        <li>
          {isKo
            ? '빈 종이에 학습 내용을 기억나는 대로 적어봅니다(Brain Dump).'
            : 'Write down everything you remember on a blank sheet of paper (Brain Dump).'}
        </li>
        <li>
          {isKo
            ? '친구나 가상의 청중에게 설명하듯이 말해봅니다(파인만 기법).'
            : 'Explain it as if teaching a friend or imaginary audience (Feynman Technique).'}
        </li>
        <li>
          {isKo
            ? '연습 문제나 퀴즈를 풀어 자신의 이해도를 테스트합니다.'
            : 'Solve practice problems or quizzes to test your understanding.'}
        </li>
      </ul>

      <h3>{isKo ? '정교화(Elaboration)' : 'Elaboration'}</h3>
      <p>
        {isKo
          ? '새로 학습한 내용을 기존 지식과 연결하는 과정입니다. "이것은 내가 이미 알고 있는 A와 어떻게 관련되는가?", "이 개념의 실생활 예시는 무엇인가?", "만약 이 조건이 달라진다면 결과는 어떻게 바뀔까?" 같은 질문을 스스로 던지며 학습 내용을 더 깊이 처리합니다.'
          : 'This is the process of connecting newly learned information to existing knowledge. Ask yourself questions like "How does this relate to A, which I already know?", "What is a real-life example of this concept?", "If this condition changed, how would the result differ?" These questions help you process the material more deeply.'}
      </p>

      <TipBox type="warning">
        {isKo
          ? '형광펜 칠하기와 반복 읽기는 "학습의 착각(Illusion of Competence)"을 유발하는 대표적인 비효율적 방법입니다. 텍스트가 익숙하게 느껴지면서 이해했다고 착각하게 되지만, 실제로는 장기 기억으로 전환되지 않습니다.'
          : 'Highlighting and re-reading are classic ineffective methods that create the "Illusion of Competence." The text feels familiar, leading you to think you understand it, but it does not actually transfer to long-term memory.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Long-term Habit Maintenance
   =============================================== */
function SustainSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '장기 습관 유지법' : 'Long-term Habit Maintenance'}</h1>
        <p>
          {isKo
            ? '초기의 열정이 사라진 후에도 학습 습관을 꾸준히 유지하는 전략과 심리적 기법을 알아봅니다.'
            : 'Discover strategies and psychological techniques to maintain study habits consistently, even after initial enthusiasm fades.'}
        </p>
      </div>

      <h2>{isKo ? '동기 부여의 과학' : 'The Science of Motivation'}</h2>
      <p>
        {isKo
          ? '동기(motivation)만으로는 장기적인 습관을 유지할 수 없습니다. 동기는 감정에 기반하기 때문에 변동이 크고, 시간이 지나면 자연스럽게 감소합니다. 대신, "시스템"과 "환경 설계"에 의존하는 것이 핵심입니다. 동기가 떨어져도 자동으로 학습이 시작되는 시스템을 만들어야 합니다.'
          : 'Motivation alone cannot sustain long-term habits. Because motivation is emotion-based, it fluctuates greatly and naturally decreases over time. Instead, relying on "systems" and "environment design" is key. You need to build systems where studying starts automatically even when motivation is low.'}
      </p>

      <h3>{isKo ? '자기 결정 이론(Self-Determination Theory)' : 'Self-Determination Theory'}</h3>
      <p>
        {isKo
          ? 'Edward Deci와 Richard Ryan이 제안한 이 이론에 따르면, 내적 동기를 유지하려면 세 가지 심리적 욕구가 충족되어야 합니다.'
          : 'According to this theory proposed by Edward Deci and Richard Ryan, three psychological needs must be met to maintain intrinsic motivation.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '자율성(Autonomy)' : 'Autonomy'}</strong> -{' '}
          {isKo
            ? '무엇을, 언제, 어떻게 공부할지 스스로 선택할 수 있어야 합니다. 타인에 의해 강제된 학습은 내적 동기를 파괴합니다.'
            : 'You should be able to choose what, when, and how to study. Forced learning destroys intrinsic motivation.'}
        </li>
        <li>
          <strong>{isKo ? '유능감(Competence)' : 'Competence'}</strong> -{' '}
          {isKo
            ? '학습을 통해 성장하고 있다는 느낌을 받아야 합니다. 너무 쉬운 내용은 지루하고, 너무 어려운 내용은 좌절감을 줍니다. 현재 수준보다 약간 높은 "최적의 도전(Optimal Challenge)" 수준을 유지하세요.'
            : 'You need to feel that you are growing through learning. Content that is too easy leads to boredom, while content that is too difficult causes frustration. Maintain an "optimal challenge" level slightly above your current ability.'}
        </li>
        <li>
          <strong>{isKo ? '관계성(Relatedness)' : 'Relatedness'}</strong> -{' '}
          {isKo
            ? '함께 학습하는 동료나 커뮤니티와의 연결감이 중요합니다. 스터디 그룹에 참여하거나, 학습 내용을 공유하는 블로그를 운영하면 학습의 사회적 차원이 강화됩니다.'
            : 'A sense of connection with fellow learners or a community is important. Joining a study group or running a blog to share what you learn strengthens the social dimension of learning.'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '"2분 규칙"을 활용하세요. 학습을 시작하기 어려울 때, "딱 2분만 하자"고 자신과 약속합니다. 대부분의 경우, 일단 시작하면 2분 이상 지속하게 됩니다. 이는 행동 활성화(Behavioral Activation)의 원리를 활용한 것입니다.'
          : 'Use the "2-Minute Rule." When it is hard to start studying, promise yourself "just 2 minutes." In most cases, once you start, you will continue beyond 2 minutes. This leverages the principle of Behavioral Activation.'}
      </TipBox>

      <h2>{isKo ? '정체기와 슬럼프 극복' : 'Overcoming Plateaus and Slumps'}</h2>
      <p>
        {isKo
          ? '장기간 학습하다 보면 반드시 정체기(Plateau)가 찾아옵니다. 실력이 늘지 않는 것 같은 시기에 많은 학습자들이 포기합니다. 하지만 정체기는 뇌가 학습한 내용을 통합하고 재조직하는 자연스러운 과정의 일부입니다.'
          : 'When studying over a long period, you will inevitably hit a plateau. Many learners give up during periods when progress seems stalled. However, plateaus are a natural part of the process where the brain consolidates and reorganizes learned material.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '학습 방법 변경' : 'Change Your Study Method'}</strong> -{' '}
          {isKo
            ? '같은 내용을 다른 방식으로 접근합니다. 읽기 → 영상 시청, 요약 노트 → 마인드맵, 혼자 공부 → 그룹 토론 등으로 전환해 보세요.'
            : 'Approach the same material in a different way. Try switching from reading to watching videos, from summary notes to mind maps, or from solo study to group discussion.'}
        </li>
        <li>
          <strong>{isKo ? '작은 승리 기록' : 'Record Small Wins'}</strong> -{' '}
          {isKo
            ? '아무리 작은 성취라도 기록합니다. "오늘 새로운 단어 5개를 외웠다", "어제 이해 못했던 개념을 오늘 이해했다" 등의 작은 승리가 축적되면 큰 동기가 됩니다.'
            : 'Record even the smallest achievements. Small wins like "I memorized 5 new words today" or "I understood a concept today that confused me yesterday" accumulate into significant motivation.'}
        </li>
        <li>
          <strong>{isKo ? '과거의 나와 비교' : 'Compare With Your Past Self'}</strong> -{' '}
          {isKo
            ? '다른 사람이 아닌, 1개월 전, 3개월 전의 자신과 비교하세요. 학습 일지를 되돌아보면 얼마나 성장했는지 객관적으로 확인할 수 있습니다.'
            : 'Compare yourself not with others, but with your past self from 1 month or 3 months ago. Looking back at your study journal helps you objectively see how much you have grown.'}
        </li>
      </ul>

      <h3>{isKo ? '번아웃 예방' : 'Preventing Burnout'}</h3>
      <p>
        {isKo
          ? '지속적으로 높은 강도로 학습하면 번아웃이 올 수 있습니다. 다음의 방법으로 예방하세요.'
          : 'Continuous high-intensity studying can lead to burnout. Prevent it with the following methods.'}
      </p>
      <ul>
        <li>
          {isKo
            ? '주 1~2일은 완전한 휴식일로 지정합니다. 이날은 학습과 관련된 어떤 것도 하지 않습니다.'
            : 'Designate 1-2 days per week as complete rest days. Do nothing study-related on these days.'}
        </li>
        <li>
          {isKo
            ? '운동, 산책, 명상 등 신체 활동을 학습 루틴에 포함시킵니다. 유산소 운동은 BDNF(뇌유래신경영양인자)를 증가시켜 학습 능력을 향상시킵니다.'
            : 'Include physical activities like exercise, walking, or meditation in your study routine. Aerobic exercise increases BDNF (Brain-Derived Neurotrophic Factor), which enhances learning ability.'}
        </li>
        <li>
          {isKo
            ? '7~9시간의 충분한 수면을 확보합니다. 수면 중에 해마(Hippocampus)에서 대뇌 피질로 기억이 전이되는 기억 통합(Memory Consolidation)이 일어납니다.'
            : 'Ensure 7-9 hours of adequate sleep. During sleep, memory consolidation occurs as memories transfer from the hippocampus to the cerebral cortex.'}
        </li>
        <li>
          {isKo
            ? '학습의 "왜(Why)"를 정기적으로 재확인합니다. 자신이 왜 이 공부를 하는지, 최종 목표가 무엇인지를 상기하면 장기적인 동기가 유지됩니다.'
            : 'Regularly reaffirm the "Why" of your learning. Reminding yourself why you are studying and what your ultimate goal is helps maintain long-term motivation.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '"성장형 마인드셋(Growth Mindset)"을 유지하세요. Carol Dweck 교수의 연구에 따르면, 지능과 능력이 노력에 의해 발전할 수 있다고 믿는 사람들이 어려움 앞에서도 더 끈기 있게 학습합니다. 실패를 "학습의 기회"로 재해석하는 연습을 하세요.'
          : 'Maintain a "Growth Mindset." According to Professor Carol Dweck\'s research, people who believe intelligence and ability can be developed through effort persist more in the face of difficulty. Practice reinterpreting failures as "learning opportunities."'}
      </TipBox>
    </div>
  );
}
