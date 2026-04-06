import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'understanding', icon: 'fa-magnifying-glass', ko: '집중력의 이해', en: 'Understanding Focus' },
  { id: 'pomodoro', icon: 'fa-stopwatch', ko: '뽀모도로 기법', en: 'Pomodoro Technique' },
  { id: 'deepwork', icon: 'fa-brain', ko: '딥워크 전략', en: 'Deep Work Strategy' },
  { id: 'distraction', icon: 'fa-shield-halved', ko: '방해 요소 차단', en: 'Blocking Distractions' },
  { id: 'multitask', icon: 'fa-layer-group', ko: '멀티태스킹 극복', en: 'Overcoming Multitasking' },
  { id: 'flow', icon: 'fa-bolt', ko: '몰입 상태 달성', en: 'Achieving Flow State' },
];

/* ── Section Components ─────────────────────────────────── */

function UnderstandingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '집중력의 이해' : 'Understanding Focus'}</h2>

      <h3>{isKo ? '집중력이란 무엇인가?' : 'What is Focus?'}</h3>
      <p>
        {isKo
          ? '집중력(Attention)은 수많은 자극 중에서 특정 대상에 인지 자원을 선택적으로 할당하는 능력입니다. 신경과학적으로 집중은 전두엽의 실행 기능이 관여하는 고차원적 인지 과정입니다. 집중력은 타고난 재능이 아니라 훈련을 통해 향상할 수 있는 기술이며, 이를 이해하는 것이 향상의 첫 걸음입니다.'
          : 'Focus (Attention) is the ability to selectively allocate cognitive resources to a specific target among countless stimuli. Neuroscientifically, focus is a higher-order cognitive process involving the executive functions of the prefrontal cortex. Focus is not an innate talent but a skill improvable through training, and understanding this is the first step toward improvement.'}
      </p>
      <img src="/assets/images/topics/focus-understanding.svg" alt={isKo ? '주의력 3가지 유형' : 'Three Types of Attention'} className="guide-section-illustration" />

      <h3>{isKo ? '집중력의 세 가지 유형' : 'Three Types of Attention'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '지속적 주의 (Sustained Attention)' : 'Sustained Attention'}</strong>
          <p>{isKo ? '장시간 동안 하나의 과제에 집중을 유지하는 능력입니다. 강의를 듣거나 책을 읽을 때 필요합니다. 성인의 평균 지속적 주의 시간은 약 20분으로, 이후 자연스럽게 주의가 분산됩니다.' : 'The ability to maintain focus on a single task for an extended period. Required when attending lectures or reading books. The average adult sustained attention span is about 20 minutes, after which attention naturally disperses.'}</p>
        </li>
        <li>
          <strong>{isKo ? '선택적 주의 (Selective Attention)' : 'Selective Attention'}</strong>
          <p>{isKo ? '여러 자극 중에서 중요한 것에만 주의를 기울이는 능력입니다. 시끄러운 카페에서 대화 상대의 말만 들을 수 있는 것이 이에 해당합니다. "칵테일 파티 효과"로도 알려져 있습니다.' : 'The ability to attend only to important stimuli among many. Being able to hear your conversation partner in a noisy cafe is an example. Also known as the "cocktail party effect."'}</p>
        </li>
        <li>
          <strong>{isKo ? '분할 주의 (Divided Attention)' : 'Divided Attention'}</strong>
          <p>{isKo ? '두 가지 이상의 과제에 동시에 주의를 배분하는 능력입니다. 그러나 연구에 따르면 진정한 동시 처리는 거의 불가능하며, 실제로는 빠른 전환(task switching)이 일어납니다.' : 'The ability to distribute attention across two or more tasks simultaneously. However, research shows true simultaneous processing is nearly impossible; what actually occurs is rapid task switching.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '집중력을 떨어뜨리는 요인' : 'Factors That Reduce Focus'}</h3>
      <ul>
        <li>{isKo ? '수면 부족: 6시간 미만의 수면은 인지 능력을 최대 30% 저하시킵니다' : 'Sleep deprivation: Less than 6 hours of sleep reduces cognitive ability by up to 30%'}</li>
        <li>{isKo ? '만성 스트레스: 코르티솔 호르몬이 전두엽의 실행 기능을 억제합니다' : 'Chronic stress: Cortisol hormone suppresses executive functions of the prefrontal cortex'}</li>
        <li>{isKo ? '디지털 과자극: 스마트폰 알림이 평균 23분의 집중 시간을 소모합니다' : 'Digital overstimulation: Smartphone notifications consume an average of 23 minutes of focus time'}</li>
        <li>{isKo ? '영양 불균형: 뇌는 체중의 2%이지만 에너지의 20%를 소비합니다' : 'Nutritional imbalance: The brain is 2% of body weight but consumes 20% of energy'}</li>
        <li>{isKo ? '운동 부족: 규칙적 운동은 BDNF를 증가시켜 인지 기능을 향상시킵니다' : 'Lack of exercise: Regular exercise increases BDNF, improving cognitive function'}</li>
      </ul>

      <TipBox type="important" title={isKo ? '집중력 향상의 시작점' : 'Starting Point for Improving Focus'}>
        <p>
          {isKo
            ? '집중력 향상은 기법보다 기본 조건이 더 중요합니다. 7~8시간 수면, 규칙적 운동, 균형 잡힌 식사, 그리고 충분한 수분 섭취가 선행되어야 합니다. 이 기본 조건 없이 테크닉만으로는 지속적인 집중력 향상을 기대하기 어렵습니다.'
            : 'For improving focus, foundational conditions matter more than techniques. 7-8 hours of sleep, regular exercise, balanced meals, and adequate hydration must come first. Without these basics, techniques alone cannot deliver sustained focus improvement.'}
        </p>
      </TipBox>
    </section>
  );
}

function PomodoroSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '뽀모도로 기법' : 'Pomodoro Technique'}</h2>

      <h3>{isKo ? '뽀모도로 기법의 탄생' : 'Origins of the Pomodoro Technique'}</h3>
      <p>
        {isKo
          ? '뽀모도로 기법은 1980년대 이탈리아의 대학생 Francesco Cirillo가 개발했습니다. 토마토 모양의 주방 타이머(이탈리아어로 pomodoro)를 사용한 것에서 이름이 유래했습니다. 이 기법은 단순하지만 놀라울 만큼 효과적이며, 시간 관리와 집중력 향상의 핵심 도구로 전 세계적으로 사용되고 있습니다.'
          : 'The Pomodoro Technique was developed in the 1980s by Italian university student Francesco Cirillo. The name comes from the tomato-shaped kitchen timer (pomodoro in Italian) he used. This technique is simple yet remarkably effective, used worldwide as a core tool for time management and focus improvement.'}
      </p>
      <img src="/assets/images/topics/focus-pomodoro.svg" alt={isKo ? '뽀모도로 타이머' : 'Pomodoro Timer'} className="guide-section-illustration" />

      <h3>{isKo ? '기본 실행 방법' : 'Basic Implementation'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '할 일 선택' : 'Choose a Task'}</strong>
          <p>{isKo ? '집중할 하나의 과제를 명확히 정합니다. "공부하기"가 아니라 "미적분 3장 연습문제 풀기"처럼 구체적으로 정의하세요.' : 'Clearly define one task to focus on. Not "study" but specifically "solve calculus chapter 3 practice problems."'}</p>
        </li>
        <li>
          <strong>{isKo ? '타이머 25분 설정' : 'Set Timer for 25 Minutes'}</strong>
          <p>{isKo ? '25분 동안 선택한 과제에만 집중합니다. 중간에 다른 생각이 떠오르면 종이에 적어두고 즉시 과제로 돌아오세요.' : 'Focus exclusively on the chosen task for 25 minutes. If other thoughts arise, jot them down on paper and immediately return to the task.'}</p>
        </li>
        <li>
          <strong>{isKo ? '5분 휴식' : '5-Minute Break'}</strong>
          <p>{isKo ? '타이머가 울리면 즉시 작업을 멈추고 5분간 휴식합니다. 스트레칭, 물 마시기, 창밖 바라보기 등 뇌가 쉴 수 있는 활동을 하세요.' : 'When the timer rings, stop immediately and rest for 5 minutes. Do activities that let the brain rest: stretching, drinking water, looking out the window.'}</p>
        </li>
        <li>
          <strong>{isKo ? '4회 반복 후 긴 휴식' : 'Long Break After 4 Cycles'}</strong>
          <p>{isKo ? '4 뽀모도로(약 2시간)를 완료하면 15~30분의 긴 휴식을 취합니다. 이 긴 휴식은 뇌의 확산 모드(diffuse mode)를 활성화하여 창의적 문제 해결을 돕습니다.' : 'After completing 4 pomodoros (about 2 hours), take a 15-30 minute long break. This longer break activates the brain\'s diffuse mode, aiding creative problem-solving.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '개인에 맞게 조정하기' : 'Customizing for Yourself'}</h3>
      <p>
        {isKo
          ? '25분은 시작점일 뿐입니다. 자신에게 맞는 최적의 시간을 찾아보세요. 처음에는 15분부터 시작하여 점진적으로 늘려가도 좋습니다. 일부 사람들은 45분 집중 + 15분 휴식이 더 효과적일 수 있으며, 창의적 작업에서는 50분 + 10분이 권장되기도 합니다.'
          : 'Twenty-five minutes is just a starting point. Find your optimal duration. Starting with 15 minutes and gradually increasing is fine. Some people find 45-minute focus + 15-minute break more effective, and for creative work, 50 + 10 is sometimes recommended.'}
      </p>
      <ul>
        <li>{isKo ? '초보자: 15분 집중 + 5분 휴식으로 시작' : 'Beginners: Start with 15-minute focus + 5-minute break'}</li>
        <li>{isKo ? '일반 학습: 25분 집중 + 5분 휴식 (클래식)' : 'General study: 25-minute focus + 5-minute break (classic)'}</li>
        <li>{isKo ? '깊은 사고 작업: 45~50분 집중 + 10~15분 휴식' : 'Deep thinking work: 45-50 minute focus + 10-15 minute break'}</li>
        <li>{isKo ? '코딩/글쓰기: 90분 집중 + 20분 휴식 (울트라디안 리듬)' : 'Coding/writing: 90-minute focus + 20-minute break (ultradian rhythm)'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? '뽀모도로 성공 비결' : 'Key to Pomodoro Success'}>
        <p>
          {isKo
            ? '뽀모도로의 핵심은 "타이머가 돌아가는 동안 절대로 멈추지 않는 것"입니다. 완벽하지 않아도 좋으니 25분 동안 계속 과제에 임하세요. 또한 하루에 완료한 뽀모도로 수를 기록하면 자신의 실제 생산성을 객관적으로 파악할 수 있습니다.'
            : 'The core of Pomodoro is "never stopping while the timer is running." It does not need to be perfect — just keep working on the task for 25 minutes. Also, tracking the number of completed pomodoros per day lets you objectively understand your actual productivity.'}
        </p>
      </TipBox>
    </section>
  );
}

function DeepworkSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '딥워크 전략' : 'Deep Work Strategy'}</h2>

      <h3>{isKo ? '딥워크의 정의' : 'Defining Deep Work'}</h3>
      <p>
        {isKo
          ? 'Cal Newport 교수가 정립한 딥워크(Deep Work)는 "인지적으로 고도의 집중이 필요한 전문적 활동을 방해 없는 상태에서 수행하는 것"으로 정의됩니다. 이는 새로운 가치를 창출하고, 능력을 향상시키며, 쉽게 복제할 수 없는 성과를 만들어냅니다. 반대로 셸로우 워크(Shallow Work)는 인지적 부담이 적은 반복적, 사무적 업무를 말합니다.'
          : 'Deep Work, as defined by Professor Cal Newport, is "performing professional activities requiring high cognitive concentration in a distraction-free state." It creates new value, improves skills, and produces results that are hard to replicate. In contrast, Shallow Work refers to repetitive, administrative tasks with low cognitive demand.'}
      </p>
      <img src="/assets/images/topics/focus-deepwork.svg" alt={isKo ? '딥워크 vs 샬로우워크' : 'Deep Work vs Shallow Work'} className="guide-section-illustration" />

      <h3>{isKo ? '딥워크 실천 전략 4가지' : 'Four Deep Work Implementation Strategies'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '수도원 철학 (Monastic Philosophy)' : 'Monastic Philosophy'}</strong>
          <p>{isKo ? '모든 셸로우 워크를 제거하고 딥워크에만 전념합니다. 이메일, SNS를 완전히 끊고 연구나 집필에만 집중하는 방식입니다. 소설가 J.K. 롤링이 해리포터 시리즈 집필 시 채택한 방식입니다.' : 'Eliminate all shallow work and devote entirely to deep work. Completely cut off email and social media to focus solely on research or writing. J.K. Rowling adopted this approach while writing the Harry Potter series.'}</p>
        </li>
        <li>
          <strong>{isKo ? '이중 철학 (Bimodal Philosophy)' : 'Bimodal Philosophy'}</strong>
          <p>{isKo ? '일정 기간을 딥워크 모드와 일반 모드로 나눕니다. 예를 들어 월~수는 딥워크, 목~금은 회의와 이메일 처리에 할당합니다. 학자들이 학기 중/방학을 구분하여 사용하기도 합니다.' : 'Divide your schedule between deep work mode and normal mode. For example, Mon-Wed for deep work, Thu-Fri for meetings and email. Academics sometimes split this between term-time and vacation.'}</p>
        </li>
        <li>
          <strong>{isKo ? '리듬 철학 (Rhythmic Philosophy)' : 'Rhythmic Philosophy'}</strong>
          <p>{isKo ? '매일 같은 시간에 딥워크를 수행하는 습관을 형성합니다. "매일 오전 6시~9시는 딥워크 시간"과 같이 정해진 일정을 캘린더에 등록하고 지킵니다. 대부분의 직장인에게 가장 현실적인 방법입니다.' : 'Form a habit of performing deep work at the same time daily. Block fixed times like "6 AM-9 AM daily for deep work" in your calendar and stick to it. The most realistic approach for most working professionals.'}</p>
        </li>
        <li>
          <strong>{isKo ? '저널리스트 철학 (Journalistic Philosophy)' : 'Journalistic Philosophy'}</strong>
          <p>{isKo ? '빈 시간이 생기면 즉시 딥워크 모드로 전환합니다. 높은 수준의 집중력 전환 능력이 필요하므로 초보자에게는 권장하지 않습니다. 숙련된 전문가들이 주로 사용합니다.' : 'Switch to deep work mode whenever free time arises. Requires high-level ability to shift concentration, so not recommended for beginners. Mainly used by experienced professionals.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '딥워크 환경 설계' : 'Designing a Deep Work Environment'}</h3>
      <ul>
        <li>{isKo ? '전용 작업 공간을 지정하세요 (딥워크는 항상 같은 장소에서)' : 'Designate a dedicated workspace (always do deep work in the same place)'}</li>
        <li>{isKo ? '시작 의식을 만드세요 (커피 한 잔, 특정 음악 재생 등)' : 'Create a start ritual (a cup of coffee, playing specific music, etc.)'}</li>
        <li>{isKo ? '종료 의식도 만드세요 ("내일 할 일 3가지 적기" 등)' : 'Create an end ritual too ("write 3 things to do tomorrow," etc.)'}</li>
        <li>{isKo ? '딥워크 시간 동안 인터넷 접속을 차단하세요' : 'Block internet access during deep work hours'}</li>
        <li>{isKo ? '주변에 딥워크 중임을 알리세요 (문 닫기, 표시판 등)' : 'Signal to others that you are in deep work (close door, use a sign, etc.)'}</li>
      </ul>

      <TipBox type="warning" title={isKo ? '딥워크의 한계 인식' : 'Recognizing Deep Work Limits'}>
        <p>
          {isKo
            ? '연구에 따르면 전문가도 하루 최대 4시간의 딥워크가 한계입니다. 초보자는 1시간부터 시작하세요. 딥워크 시간을 억지로 늘리려 하면 오히려 번아웃의 원인이 됩니다. 질이 양보다 중요합니다 - 매일 2시간의 진정한 딥워크가 8시간의 산만한 작업보다 더 많은 성과를 만들어냅니다.'
            : 'Research indicates even experts can sustain a maximum of 4 hours of deep work per day. Beginners should start with 1 hour. Forcing more deep work time causes burnout. Quality over quantity — 2 hours of true deep work daily produces more results than 8 hours of distracted work.'}
        </p>
      </TipBox>
    </section>
  );
}

function DistractionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '방해 요소 차단' : 'Blocking Distractions'}</h2>

      <h3>{isKo ? '방해 요소의 분류' : 'Classifying Distractions'}</h3>
      <p>
        {isKo
          ? '집중을 방해하는 요소는 크게 외부적 방해와 내부적 방해로 나뉩니다. 외부적 방해는 소음, 알림, 동료의 말걸기 등 물리적 환경에서 오는 것이고, 내부적 방해는 걱정, 잡념, 감정적 동요 등 마음에서 발생하는 것입니다. 효과적인 집중을 위해서는 두 가지 모두를 관리해야 합니다.'
          : 'Distractions fall into two broad categories: external and internal. External distractions come from the physical environment — noise, notifications, colleagues interrupting. Internal distractions arise from the mind — worries, random thoughts, emotional fluctuations. Effective focus requires managing both.'}
      </p>
      <img src="/assets/images/topics/focus-distraction.svg" alt={isKo ? '방해 요소 차단' : 'Blocking Distractions'} className="guide-section-illustration" />

      <h3>{isKo ? '디지털 방해 차단 전략' : 'Digital Distraction Blocking Strategies'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '알림 완전 차단' : 'Complete Notification Blocking'}</strong>
          <p>{isKo ? '집중 시간에는 스마트폰을 비행기 모드로 전환하거나 다른 방에 두세요. 연구에 따르면, 스마트폰이 시야에 있는 것만으로도 인지 능력이 저하됩니다. 테이블 위에 뒤집어 놓는 것으로는 부족합니다.' : 'During focus time, put your smartphone on airplane mode or in another room. Research shows that merely having a smartphone in your field of vision reduces cognitive ability. Flipping it face-down on the table is not enough.'}</p>
        </li>
        <li>
          <strong>{isKo ? '웹사이트 차단 앱 사용' : 'Use Website Blocking Apps'}</strong>
          <p>{isKo ? 'Freedom, Cold Turkey, Forest 등의 앱을 사용하여 SNS, 뉴스, 유튜브 등을 특정 시간에 차단하세요. 의지력에만 의존하지 말고 시스템으로 방해를 원천 차단하는 것이 핵심입니다.' : 'Use apps like Freedom, Cold Turkey, or Forest to block social media, news, and YouTube at specific times. Do not rely only on willpower — the key is systematically blocking distractions at the source.'}</p>
        </li>
        <li>
          <strong>{isKo ? '이메일 배치 처리' : 'Batch Email Processing'}</strong>
          <p>{isKo ? '이메일을 수시로 확인하는 대신, 하루 2~3회 정해진 시간에만 처리하세요 (예: 10시, 14시, 17시). 이메일 알림을 완전히 끄고, 즉시 답장을 기대하는 문화에서 벗어나세요.' : 'Instead of checking email constantly, process it at 2-3 fixed times daily (e.g., 10 AM, 2 PM, 5 PM). Turn off email notifications entirely and break free from the culture of expecting immediate replies.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '물리적 환경 최적화' : 'Optimizing Physical Environment'}</h3>
      <ul>
        <li>{isKo ? '책상 위를 정리하세요: 시야에 있는 물건이 적을수록 집중이 잘 됩니다' : 'Clean your desk: fewer items in your field of vision means better focus'}</li>
        <li>{isKo ? '적절한 조명: 자연광이 가장 좋고, 인공조명은 4000~5000K 색온도를 권장합니다' : 'Proper lighting: natural light is best; for artificial lighting, 4000-5000K color temperature is recommended'}</li>
        <li>{isKo ? '소음 관리: 노이즈 캔슬링 이어폰 또는 백색 소음을 활용하세요' : 'Noise management: use noise-canceling headphones or white noise'}</li>
        <li>{isKo ? '적절한 온도: 21~23도가 인지 수행 능력에 최적입니다' : 'Proper temperature: 21-23°C (70-73°F) is optimal for cognitive performance'}</li>
      </ul>

      <h3>{isKo ? '내부 방해 관리법' : 'Managing Internal Distractions'}</h3>
      <p>
        {isKo
          ? '갑자기 떠오르는 걱정이나 잡념은 메모지에 빠르게 적어두고(brain dump) 다시 과제로 돌아오세요. 이 기록은 나중에 처리할 수 있다는 심리적 안전감을 주어 마음을 비울 수 있게 합니다. 또한 집중 전 2분간의 마인드풀니스 호흡(4초 들이쉬고, 4초 멈추고, 4초 내쉬기)은 내부 잡음을 크게 줄여줍니다.'
          : 'Quickly jot down worries or random thoughts on a memo pad (brain dump) and return to the task. This record provides psychological safety that these items can be addressed later, clearing the mind. Additionally, 2 minutes of mindful breathing before focusing (4 seconds in, 4 seconds hold, 4 seconds out) significantly reduces internal noise.'}
      </p>

      <TipBox type="tip" title={isKo ? '2분 규칙' : 'The 2-Minute Rule'}>
        <p>
          {isKo
            ? '떠오른 일이 2분 안에 처리할 수 있다면 즉시 처리하고, 아니라면 메모 후 나중에 처리하세요. 작은 미완료 과제들이 마음속에 쌓이면 "자이가르닉 효과"로 인해 집중력이 분산됩니다. 빠르게 처리하거나 확실히 기록해두는 것이 마음의 여유를 만듭니다.'
            : 'If something that comes to mind can be done in under 2 minutes, do it immediately; otherwise, note it for later. Small unfinished tasks accumulating in your mind cause focus to scatter due to the "Zeigarnik Effect." Either handle them quickly or record them reliably to create mental space.'}
        </p>
      </TipBox>
    </section>
  );
}

function MultitaskSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '멀티태스킹 극복' : 'Overcoming Multitasking'}</h2>

      <h3>{isKo ? '멀티태스킹의 신화' : 'The Myth of Multitasking'}</h3>
      <p>
        {isKo
          ? '많은 사람들이 멀티태스킹 능력을 자랑스럽게 여기지만, 신경과학 연구 결과는 정반대를 말합니다. 스탠퍼드 대학교의 연구에 따르면, 습관적 멀티태스커는 단일 작업자보다 주의력 전환, 기억 조직화, 불필요한 정보 필터링 모두에서 낮은 성과를 보였습니다. 인간의 뇌는 진정한 병렬 처리가 불가능하며, 우리가 멀티태스킹이라고 느끼는 것은 실제로는 "태스크 스위칭"입니다.'
          : 'Many people take pride in their multitasking ability, but neuroscience research tells the opposite story. Stanford University research showed that habitual multitaskers performed worse than single-taskers in attention switching, memory organization, and filtering irrelevant information. The human brain cannot truly process in parallel — what we perceive as multitasking is actually "task switching."'}
      </p>

      <h3>{isKo ? '전환 비용 (Switching Cost)' : 'Switching Cost'}</h3>
      <p>
        {isKo
          ? '작업 간 전환에는 숨겨진 비용이 존재합니다. 한 연구에 따르면, 복잡한 작업 사이를 전환할 때마다 생산성이 최대 40%까지 감소합니다. 이를 "주의 잔여물(attention residue)"이라 부릅니다 — 이전 작업에 대한 생각이 새 작업에 집중하는 것을 방해합니다. 특히 인터럽트 후 원래 수준의 집중으로 돌아오는 데 평균 23분 15초가 걸린다는 연구 결과가 있습니다.'
          : 'Hidden costs exist in switching between tasks. One study showed that switching between complex tasks reduces productivity by up to 40%. This is called "attention residue" — thoughts about the previous task interfere with focusing on the new one. Notably, research shows it takes an average of 23 minutes and 15 seconds to return to the original level of focus after an interruption.'}
      </p>

      <h3>{isKo ? '싱글태스킹 실천법' : 'Single-Tasking in Practice'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '시간 블로킹 (Time Blocking)' : 'Time Blocking'}</strong>
          <p>{isKo ? '하루를 시간 블록으로 나누고, 각 블록에 하나의 작업만 배정합니다. 9:00~10:30은 보고서 작성, 10:30~11:00은 이메일 처리와 같이 명확하게 구분하세요. 캘린더에 블록을 미리 등록하는 것이 중요합니다.' : 'Divide the day into time blocks, assigning only one task per block. Clearly separate them: 9:00-10:30 for report writing, 10:30-11:00 for email processing. Pre-registering blocks in your calendar is key.'}</p>
        </li>
        <li>
          <strong>{isKo ? '배치 처리 (Batching)' : 'Batching'}</strong>
          <p>{isKo ? '유사한 작업을 한데 모아 처리합니다. 이메일 답장, 전화 통화, 서류 정리 등 같은 유형의 작업을 몰아서 처리하면 전환 비용을 최소화할 수 있습니다. 맥락 전환이 줄어들어 효율이 크게 높아집니다.' : 'Group similar tasks and process them together. Batching same-type tasks like email replies, phone calls, and document organization minimizes switching costs. Reduced context switching significantly increases efficiency.'}</p>
        </li>
        <li>
          <strong>{isKo ? '미완료 작업 관리' : 'Managing Incomplete Tasks'}</strong>
          <p>{isKo ? '작업을 중단해야 할 때는 현재 상태와 다음 단계를 반드시 메모하세요. 이 "이어하기 노트"가 있으면 다음에 해당 작업으로 돌아왔을 때 전환 비용을 크게 줄일 수 있습니다.' : 'When you must pause a task, always note the current state and next steps. This "continuation note" greatly reduces switching costs when you return to that task later.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '예외: 효과적인 병행이 가능한 상황' : 'Exception: When Effective Parallel Work is Possible'}</h3>
      <p>
        {isKo
          ? '하나의 작업이 완전히 자동화된 경우에는 병행이 가능합니다. 예를 들어 걸으면서 오디오북 듣기, 설거지하면서 팟캐스트 듣기 등은 효과적입니다. 핵심은 두 작업 중 하나가 인지적 노력을 거의 필요로 하지 않아야 한다는 것입니다.'
          : 'Parallel work is possible when one task is fully automated. For example, listening to audiobooks while walking or podcasts while washing dishes works effectively. The key is that one of the two tasks must require virtually no cognitive effort.'}
      </p>

      <TipBox type="danger" title={isKo ? '멀티태스킹의 장기적 위험' : 'Long-term Risks of Multitasking'}>
        <p>
          {isKo
            ? '만성적 멀티태스킹은 단기적 생산성 저하뿐 아니라 장기적으로 뇌의 집중 능력 자체를 약화시킵니다. 런던 대학교 연구에 따르면, 이메일이나 문자를 확인하면서 작업하는 사람들의 IQ 수치가 일시적으로 10포인트 떨어졌으며, 이는 수면 부족의 영향보다 더 큽니다.'
            : 'Chronic multitasking not only reduces short-term productivity but weakens the brain\'s ability to focus in the long run. A University of London study found that people who worked while checking email or texts saw temporary IQ drops of 10 points — greater than the effect of sleep deprivation.'}
        </p>
      </TipBox>
    </section>
  );
}

function FlowSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '몰입 상태 달성' : 'Achieving Flow State'}</h2>

      <h3>{isKo ? '몰입(Flow)이란?' : 'What is Flow?'}</h3>
      <p>
        {isKo
          ? '몰입(Flow)은 심리학자 Mihaly Csikszentmihalyi가 명명한 최적 경험 상태입니다. 활동에 완전히 흡수되어 시간 감각을 잃고, 자아의식이 사라지며, 행위 자체에서 깊은 만족을 느끼는 상태입니다. 몰입 상태에서는 뇌가 노르에피네프린, 도파민, 엔도르핀, 아난다마이드, 세로토닌의 5가지 신경화학물질을 동시에 분비하여 최고 수준의 성과가 발현됩니다.'
          : 'Flow is the optimal experience state named by psychologist Mihaly Csikszentmihalyi. It is a state of being completely absorbed in an activity, losing sense of time, where self-consciousness disappears and deep satisfaction comes from the activity itself. During flow, the brain simultaneously releases five neurochemicals — norepinephrine, dopamine, endorphins, anandamide, and serotonin — producing peak performance.'}
      </p>
      <img src="/assets/images/topics/focus-flow.svg" alt={isKo ? '몰입 채널 다이어그램' : 'Flow Channel Diagram'} className="guide-section-illustration" />

      <h3>{isKo ? '몰입의 8가지 조건' : 'Eight Conditions for Flow'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '명확한 목표' : 'Clear Goals'}</strong>
          <p>{isKo ? '무엇을 달성해야 하는지 매 순간 명확히 알고 있어야 합니다. "공부하기"가 아닌 "30번 문제 풀기"처럼 구체적이어야 합니다.' : 'You must know clearly at every moment what needs to be achieved. Not "study" but specifically "solve problem 30."'}</p>
        </li>
        <li>
          <strong>{isKo ? '즉각적인 피드백' : 'Immediate Feedback'}</strong>
          <p>{isKo ? '자신이 잘하고 있는지 즉시 알 수 있어야 합니다. 연습 문제의 정답 확인, 코드 실행 결과 확인 등이 해당됩니다.' : 'You must be able to immediately tell if you are doing well. This includes checking practice problem answers, seeing code execution results, etc.'}</p>
        </li>
        <li>
          <strong>{isKo ? '도전과 능력의 균형' : 'Balance of Challenge and Skill'}</strong>
          <p>{isKo ? '과제의 난이도가 현재 능력보다 약 4% 높을 때 몰입이 가장 잘 발생합니다. 너무 쉬우면 지루함, 너무 어려우면 불안감을 느끼게 됩니다.' : 'Flow occurs most readily when task difficulty is about 4% above current skill level. Too easy leads to boredom; too hard leads to anxiety.'}</p>
        </li>
        <li>
          <strong>{isKo ? '행위와 인식의 합일' : 'Merging of Action and Awareness'}</strong>
          <p>{isKo ? '하는 것과 생각하는 것이 하나가 되는 상태입니다. 더 이상 자신이 무엇을 하고 있는지 의식하지 않게 됩니다.' : 'A state where doing and thinking become one. You are no longer consciously aware of what you are doing.'}</p>
        </li>
        <li>
          <strong>{isKo ? '주의 집중' : 'Focused Concentration'}</strong>
          <p>{isKo ? '현재 활동에 완전히 집중하며 관련 없는 자극을 자연스럽게 무시합니다.' : 'Complete concentration on the current activity, naturally ignoring irrelevant stimuli.'}</p>
        </li>
        <li>
          <strong>{isKo ? '통제감' : 'Sense of Control'}</strong>
          <p>{isKo ? '상황을 통제하고 있다는 느낌이 있으며, 실패에 대한 걱정이 사라집니다.' : 'A feeling of being in control of the situation, with worry about failure disappearing.'}</p>
        </li>
        <li>
          <strong>{isKo ? '자아의식의 상실' : 'Loss of Self-Consciousness'}</strong>
          <p>{isKo ? '자기 자신에 대한 의식이 사라지고, 활동 자체에 완전히 흡수됩니다.' : 'Self-consciousness vanishes, and you become completely absorbed in the activity itself.'}</p>
        </li>
        <li>
          <strong>{isKo ? '시간 감각의 왜곡' : 'Distortion of Time Sense'}</strong>
          <p>{isKo ? '시간이 평소보다 빠르게 혹은 느리게 흐르는 것처럼 느껴집니다. 3시간이 30분처럼 지나가기도 합니다.' : 'Time seems to pass faster or slower than usual. Three hours can feel like 30 minutes.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '몰입을 유도하는 실전 전략' : 'Practical Strategies to Induce Flow'}</h3>
      <ul>
        <li>{isKo ? '매일 같은 시간, 같은 장소에서 작업하여 뇌에 "몰입 신호"를 보내세요' : 'Work at the same time and place daily to send "flow signals" to your brain'}</li>
        <li>{isKo ? '시작 전 5분간 이전 작업 내용을 훑어보며 워밍업하세요' : 'Warm up for 5 minutes before starting by reviewing previous work'}</li>
        <li>{isKo ? '처음 15분은 쉬운 작업으로 시작하여 점진적으로 난이도를 높이세요' : 'Start the first 15 minutes with easy tasks and gradually increase difficulty'}</li>
        <li>{isKo ? '최소 90분의 방해받지 않는 연속 시간을 확보하세요' : 'Secure at least 90 uninterrupted consecutive minutes'}</li>
        <li>{isKo ? '가사 없는 음악(로파이, 앰비언트)으로 청각적 환경을 통제하세요' : 'Control the auditory environment with instrumental music (lo-fi, ambient)'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? '몰입 경험 기록하기' : 'Recording Flow Experiences'}>
        <p>
          {isKo
            ? '몰입을 경험했을 때 그 상황을 기록하세요: 시간대, 장소, 활동 내용, 기분 상태, 직전에 한 일 등을 적어두면 자신만의 몰입 패턴을 발견할 수 있습니다. 이 패턴을 의도적으로 재현하면 몰입 빈도가 점점 높아집니다. 몰입은 우연이 아니라 설계할 수 있는 경험입니다.'
            : 'When you experience flow, record the situation: time of day, location, activity, mood, what you did just before — tracking these helps you discover your personal flow patterns. Intentionally recreating these patterns gradually increases flow frequency. Flow is not accidental — it is an experience you can design.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export default function Focus(): ReactElement {
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
        title={isKo ? '집중력 강화법 가이드' : 'Focus Enhancement Guide'}
        description={
          isKo
            ? '집중력을 체계적으로 강화하는 방법을 학습합니다. 뽀모도로 기법, 딥워크 전략, 방해 요소 차단, 멀티태스킹 극복, 몰입 상태 달성까지 모든 기법을 다룹니다.'
            : 'Learn systematic methods to enhance focus. Covers Pomodoro technique, deep work strategy, blocking distractions, overcoming multitasking, and achieving flow state.'
        }
        path="/focus"
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
            <div className="guide-content-header">
              <h1>{isKo ? '집중력 강화법 완벽 가이드' : 'Complete Guide to Focus Enhancement'}</h1>
              <p>
                {isKo
                  ? '현대인의 가장 희소한 자원은 집중력입니다. 집중력의 과학적 이해부터 뽀모도로 기법, 딥워크 전략, 방해 요소 관리, 멀티태스킹의 진실, 그리고 최고의 성과를 이끌어내는 몰입 상태까지 체계적으로 학습합니다.'
                  : 'Focus is the scarcest resource for modern people. Learn systematically from the science of focus, the Pomodoro technique, deep work strategies, distraction management, the truth about multitasking, to achieving the flow state that drives peak performance.'}
              </p>
              <img src="/assets/images/topics/focus-hero.svg" alt={isKo ? '집중력 강화 일러스트' : 'Focus Enhancement Illustration'} className="guide-hero-illustration" />
            </div>

            {/* ────────── Section Rendering ────────── */}
            {activeSection === 'understanding' && <UnderstandingSection isKo={isKo} />}
            {activeSection === 'pomodoro' && <PomodoroSection isKo={isKo} />}
            {activeSection === 'deepwork' && <DeepworkSection isKo={isKo} />}
            {activeSection === 'distraction' && <DistractionSection isKo={isKo} />}
            {activeSection === 'multitask' && <MultitaskSection isKo={isKo} />}
            {activeSection === 'flow' && <FlowSection isKo={isKo} />}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en)
                    : (isKo ? '이전' : 'Previous')}
                </span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en)
                    : (isKo ? '다음' : 'Next')}
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
