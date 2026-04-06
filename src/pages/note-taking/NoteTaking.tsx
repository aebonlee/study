import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'principles', icon: 'fa-list-check', ko: '효과적인 필기 원칙', en: 'Effective Note-Taking Principles' },
  { id: 'cornell', icon: 'fa-table-columns', ko: '코넬 노트법', en: 'Cornell Note Method' },
  { id: 'mindmap', icon: 'fa-diagram-project', ko: '마인드맵 기법', en: 'Mind Mapping' },
  { id: 'digital', icon: 'fa-tablet-screen-button', ko: '디지털 노트 활용', en: 'Digital Note-Taking' },
  { id: 'review', icon: 'fa-rotate', ko: '복습 노트 만들기', en: 'Creating Review Notes' },
  { id: 'system', icon: 'fa-folder-tree', ko: '노트 정리 시스템', en: 'Note Organization System' },
];

/* ── Section Components ─────────────────────────────────── */

function PrinciplesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '효과적인 필기 원칙' : 'Effective Note-Taking Principles'}</h2>

      <h3>{isKo ? '1. 능동적 청취와 선택적 기록' : '1. Active Listening and Selective Recording'}</h3>
      <p>
        {isKo
          ? '효과적인 노트 필기의 첫 번째 원칙은 모든 것을 받아적지 않는 것입니다. 강의나 회의에서 말하는 모든 단어를 기록하려 하면 오히려 핵심을 놓치게 됩니다. 능동적으로 듣고, 핵심 개념과 아이디어를 자신만의 언어로 재구성하여 기록해야 합니다. 이 과정 자체가 학습의 일부입니다.'
          : 'The first principle of effective note-taking is to avoid writing down everything verbatim. Attempting to transcribe every spoken word during a lecture or meeting causes you to miss the key points. Listen actively, then reconstruct core concepts and ideas in your own words. This process itself is part of learning.'}
      </p>
      <img src="/assets/images/topics/note-taking-principles.svg" alt={isKo ? '능동적 필기 원칙' : 'Active Note-Taking Principles'} className="guide-section-illustration" />

      <h3>{isKo ? '2. 구조화된 기록' : '2. Structured Recording'}</h3>
      <p>
        {isKo
          ? '좋은 노트는 체계적인 구조를 갖습니다. 제목, 소제목, 들여쓰기를 활용하여 정보의 계층 구조를 시각적으로 표현하세요. 번호 매기기, 글머리 기호, 색상 코딩 등을 일관되게 사용하면 나중에 내용을 빠르게 파악할 수 있습니다.'
          : 'Good notes have a systematic structure. Use titles, subtitles, and indentation to visually represent the hierarchy of information. Consistently using numbering, bullet points, and color coding helps you quickly grasp content later.'}
      </p>
      <ul>
        <li>{isKo ? '대주제는 굵은 글씨 또는 큰 제목으로 구분' : 'Separate major topics with bold text or large headings'}</li>
        <li>{isKo ? '하위 개념은 들여쓰기와 글머리 기호로 표시' : 'Mark sub-concepts with indentation and bullet points'}</li>
        <li>{isKo ? '예시와 세부 사항은 추가 들여쓰기로 구분' : 'Distinguish examples and details with additional indentation'}</li>
        <li>{isKo ? '관련 개념 사이에 화살표나 연결선 사용' : 'Use arrows or connecting lines between related concepts'}</li>
      </ul>

      <h3>{isKo ? '3. 자신만의 약어 체계 만들기' : '3. Creating Your Own Abbreviation System'}</h3>
      <p>
        {isKo
          ? '빠르게 기록하면서도 핵심을 놓치지 않으려면 자신만의 약어와 기호 체계를 만들어야 합니다. 자주 등장하는 용어에 대한 약어를 미리 정해두고, 중요도나 유형을 나타내는 기호를 일관되게 사용하세요.'
          : 'To record quickly without missing key points, you need to develop your own abbreviation and symbol system. Pre-define abbreviations for frequently used terms and consistently use symbols to indicate importance or type.'}
      </p>
      <ul>
        <li>{isKo ? '중요: ★ 또는 ! / 의문점: ? / 정의: def. / 예시: ex.' : 'Important: ★ or ! / Question: ? / Definition: def. / Example: ex.'}</li>
        <li>{isKo ? '원인-결과: → / 비교: ↔ / 증가: ↑ / 감소: ↓' : 'Cause-effect: → / Compare: ↔ / Increase: ↑ / Decrease: ↓'}</li>
      </ul>

      <h3>{isKo ? '4. 필기 직후 10분 복습' : '4. Review Within 10 Minutes After Writing'}</h3>
      <p>
        {isKo
          ? '에빙하우스의 망각 곡선에 따르면, 학습 후 20분이 지나면 내용의 약 42%를 잊어버립니다. 따라서 필기 직후 10분 이내에 빠르게 훑어보며 빠진 내용을 보충하고, 핵심 키워드에 밑줄을 긋는 습관을 들이세요. 이 짧은 복습이 장기 기억 형성에 결정적인 역할을 합니다.'
          : 'According to the Ebbinghaus forgetting curve, about 42% of learned content is forgotten within 20 minutes. Therefore, make a habit of quickly reviewing within 10 minutes after note-taking, supplementing missing content and underlining key words. This brief review plays a crucial role in forming long-term memory.'}
      </p>

      <TipBox type="tip" title={isKo ? '노트 필기 핵심 원칙 요약' : 'Core Note-Taking Principles Summary'}>
        <p>
          {isKo
            ? '1) 모든 것을 받아적지 말고, 자기 언어로 재구성하라. 2) 일관된 구조와 기호 체계를 사용하라. 3) 필기 직후 10분 이내에 반드시 복습하라. 이 세 가지만 지켜도 학습 효율이 크게 향상됩니다.'
            : '1) Do not transcribe everything — reconstruct in your own words. 2) Use a consistent structure and symbol system. 3) Always review within 10 minutes after writing. Following these three principles alone significantly improves learning efficiency.'}
        </p>
      </TipBox>
    </section>
  );
}

function CornellSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '코넬 노트법' : 'Cornell Note Method'}</h2>

      <h3>{isKo ? '코넬 노트법이란?' : 'What is the Cornell Note Method?'}</h3>
      <p>
        {isKo
          ? '코넬 노트법은 1950년대 코넬 대학교의 Walter Pauk 교수가 개발한 체계적인 노트 필기 방법입니다. 노트 한 페이지를 세 개의 영역으로 나누어 기록, 복습, 요약을 하나의 시스템으로 통합합니다. 전 세계 수많은 학생들이 사용하는 검증된 학습 방법론입니다.'
          : 'The Cornell Note Method is a systematic note-taking approach developed in the 1950s by Professor Walter Pauk at Cornell University. It divides a single page into three areas, integrating recording, review, and summary into one system. It is a proven learning methodology used by countless students worldwide.'}
      </p>
      <img src="/assets/images/topics/note-taking-cornell.svg" alt={isKo ? '코넬 노트 레이아웃' : 'Cornell Note Layout'} className="guide-section-illustration" />

      <h3>{isKo ? '페이지 구성 (3분할 레이아웃)' : 'Page Layout (3-Section Division)'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '노트 영역 (오른쪽 2/3)' : 'Notes Column (Right 2/3)'}</strong>
          <p>{isKo ? '강의나 독서 중 핵심 내용을 기록합니다. 문장 형태보다는 키워드와 짧은 구절 위주로 적고, 도표나 다이어그램도 활용합니다.' : 'Record key content during lectures or reading. Use keywords and short phrases rather than full sentences, and incorporate diagrams or charts.'}</p>
        </li>
        <li>
          <strong>{isKo ? '단서 영역 (왼쪽 1/3)' : 'Cue Column (Left 1/3)'}</strong>
          <p>{isKo ? '수업이 끝난 후 24시간 이내에 작성합니다. 노트 영역의 내용에 대한 질문, 핵심 키워드, 주요 개념을 정리합니다. 이 영역은 자기 테스트에 활용됩니다.' : 'Complete within 24 hours after class. Write questions, key terms, and main concepts related to the notes column. This area is used for self-testing.'}</p>
        </li>
        <li>
          <strong>{isKo ? '요약 영역 (하단)' : 'Summary Section (Bottom)'}</strong>
          <p>{isKo ? '페이지 하단 5~7줄 정도의 공간에 해당 페이지의 핵심 내용을 2~3문장으로 요약합니다. 이 요약은 나중에 빠른 복습에 매우 유용합니다.' : 'In the bottom 5-7 lines, summarize the page\'s key content in 2-3 sentences. These summaries are extremely useful for quick reviews later.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '코넬 노트 5R 학습 사이클' : 'Cornell Note 5R Study Cycle'}</h3>
      <ol>
        <li><strong>Record</strong> — {isKo ? '강의 중 노트 영역에 핵심 내용을 기록합니다.' : 'Record key content in the notes column during lectures.'}</li>
        <li><strong>Reduce</strong> — {isKo ? '수업 직후 단서 영역에 핵심 키워드와 질문을 정리합니다.' : 'Summarize key terms and questions in the cue column right after class.'}</li>
        <li><strong>Recite</strong> — {isKo ? '단서 영역만 보고 노트 내용을 떠올리며 소리 내어 설명합니다.' : 'Cover the notes column and recite content aloud using only the cue column.'}</li>
        <li><strong>Reflect</strong> — {isKo ? '내용 간의 연결고리를 찾고, 기존 지식과 통합합니다.' : 'Find connections between topics and integrate with existing knowledge.'}</li>
        <li><strong>Review</strong> — {isKo ? '정기적으로 요약 영역을 활용하여 전체 내용을 복습합니다.' : 'Regularly review overall content using the summary section.'}</li>
      </ol>

      <TipBox type="important" title={isKo ? '코넬 노트법 실전 팁' : 'Cornell Method Practical Tips'}>
        <p>
          {isKo
            ? '단서 영역 작성을 미루지 마세요. 24시간 이내에 작성하지 않으면 효과가 크게 떨어집니다. 단서 영역에는 "왜?", "어떻게?", "~와의 차이점은?" 같은 사고를 촉진하는 질문을 적는 것이 가장 효과적입니다.'
            : 'Do not delay writing the cue column. The effect drops significantly if not completed within 24 hours. The most effective approach is writing thought-provoking questions in the cue column, such as "Why?", "How?", or "What is the difference between X and Y?"'}
        </p>
      </TipBox>
    </section>
  );
}

function MindmapSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '마인드맵 기법' : 'Mind Mapping'}</h2>

      <h3>{isKo ? '마인드맵의 원리' : 'Principles of Mind Mapping'}</h3>
      <p>
        {isKo
          ? '마인드맵은 Tony Buzan이 체계화한 시각적 사고 도구입니다. 중심 주제에서 가지를 뻗어나가며 관련 아이디어를 방사형으로 배치합니다. 이는 인간 두뇌의 연상 작용과 유사한 구조로, 선형적 노트보다 기억 유지율이 10~15% 더 높다는 연구 결과가 있습니다.'
          : 'Mind mapping is a visual thinking tool systematized by Tony Buzan. It arranges related ideas radially, branching outward from a central topic. This structure mirrors the brain\'s associative processes, and research shows 10-15% higher retention rates compared to linear notes.'}
      </p>
      <img src="/assets/images/topics/note-taking-mindmap.svg" alt={isKo ? '마인드맵 예시' : 'Mind Map Example'} className="guide-section-illustration" />

      <h3>{isKo ? '마인드맵 작성 5단계' : '5 Steps to Create a Mind Map'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '중심 이미지 배치' : 'Place Central Image'}</strong>
          <p>{isKo ? '종이 또는 화면 중앙에 핵심 주제를 이미지와 함께 배치합니다. 이미지는 텍스트보다 기억에 강력하게 남습니다.' : 'Place the core topic with an image at the center of the page or screen. Images are retained in memory more powerfully than text alone.'}</p>
        </li>
        <li>
          <strong>{isKo ? '주가지(Main Branch) 그리기' : 'Draw Main Branches'}</strong>
          <p>{isKo ? '중심에서 뻗어나가는 굵은 가지를 그립니다. 각 주가지는 하나의 핵심 주제를 나타내며, 서로 다른 색상을 사용합니다.' : 'Draw thick branches extending from the center. Each main branch represents a key topic and uses a different color.'}</p>
        </li>
        <li>
          <strong>{isKo ? '부가지(Sub-Branch) 확장' : 'Extend Sub-Branches'}</strong>
          <p>{isKo ? '각 주가지에서 더 얇은 부가지를 확장하여 세부 내용을 추가합니다. 키워드 하나만 적는 것이 원칙입니다.' : 'Extend thinner sub-branches from each main branch to add details. The rule is to write only one keyword per branch.'}</p>
        </li>
        <li>
          <strong>{isKo ? '이미지와 기호 추가' : 'Add Images and Symbols'}</strong>
          <p>{isKo ? '각 가지에 작은 아이콘, 이모지, 또는 간단한 그림을 추가하여 시각적 기억을 강화합니다.' : 'Add small icons, emojis, or simple drawings to each branch to strengthen visual memory.'}</p>
        </li>
        <li>
          <strong>{isKo ? '연결과 관계 표시' : 'Show Connections and Relationships'}</strong>
          <p>{isKo ? '서로 다른 가지 간의 관련성을 점선이나 화살표로 연결하여 개념 간 관계를 명시합니다.' : 'Connect related branches with dotted lines or arrows to make relationships between concepts explicit.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '마인드맵이 효과적인 상황' : 'When Mind Mapping is Most Effective'}</h3>
      <ul>
        <li>{isKo ? '브레인스토밍: 아이디어를 자유롭게 발산할 때' : 'Brainstorming: when freely generating ideas'}</li>
        <li>{isKo ? '개요 작성: 에세이나 보고서의 구조를 잡을 때' : 'Outlining: when structuring essays or reports'}</li>
        <li>{isKo ? '복습: 한 단원의 전체 내용을 한 눈에 정리할 때' : 'Review: when organizing an entire chapter at a glance'}</li>
        <li>{isKo ? '프레젠테이션 준비: 발표 흐름을 시각적으로 구성할 때' : 'Presentation prep: when visually organizing the flow of a talk'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? '마인드맵 활용 팁' : 'Mind Mapping Tips'}>
        <p>
          {isKo
            ? '처음에는 완벽한 마인드맵을 만들려 하지 마세요. 먼저 자유롭게 가지를 확장하고, 이후 구조를 정리하는 2단계 접근법이 효과적입니다. 또한 색상은 최소 3가지 이상 사용하면 시각적 구분이 명확해져 기억 효율이 높아집니다.'
            : 'Do not try to create a perfect mind map from the start. A two-phase approach works best: first expand branches freely, then reorganize the structure. Using at least 3 different colors provides clear visual distinction and improves memory efficiency.'}
        </p>
      </TipBox>
    </section>
  );
}

function DigitalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '디지털 노트 활용' : 'Digital Note-Taking'}</h2>

      <h3>{isKo ? '디지털 노트의 장점과 단점' : 'Pros and Cons of Digital Notes'}</h3>
      <p>
        {isKo
          ? '디지털 노트는 검색 가능성, 편집 용이성, 멀티미디어 통합, 클라우드 동기화 등 손글씨 노트에 없는 강력한 장점을 제공합니다. 그러나 연구에 따르면 손으로 직접 쓸 때 인지적 처리가 더 깊게 일어납니다. 따라서 상황에 맞게 디지털과 아날로그를 적절히 혼합하는 전략이 가장 효과적입니다.'
          : 'Digital notes offer powerful advantages absent in handwritten notes: searchability, ease of editing, multimedia integration, and cloud sync. However, research shows deeper cognitive processing occurs when writing by hand. Therefore, strategically mixing digital and analog methods based on the situation is most effective.'}
      </p>
      <img src="/assets/images/topics/note-taking-digital.svg" alt={isKo ? '디지털 노트 도구' : 'Digital Note-Taking Tools'} className="guide-section-illustration" />

      <h3>{isKo ? '추천 디지털 노트 도구' : 'Recommended Digital Note Tools'}</h3>
      <ul>
        <li>
          <strong>Notion</strong> — {isKo ? '데이터베이스 기반의 유연한 구조, 팀 협업에 강력함. 템플릿이 풍부하고 관계형 데이터베이스 기능으로 지식 체계를 구축할 수 있습니다.' : 'Flexible database-driven structure, powerful for team collaboration. Rich templates and relational database features for building knowledge systems.'}
        </li>
        <li>
          <strong>Obsidian</strong> — {isKo ? '로컬 마크다운 기반으로 데이터 소유권이 확실하고, 양방향 링크로 지식 그래프를 형성합니다. 플러그인 생태계가 매우 풍부합니다.' : 'Local Markdown-based with clear data ownership. Bi-directional links form a knowledge graph. Very rich plugin ecosystem.'}
        </li>
        <li>
          <strong>GoodNotes / Notability</strong> — {isKo ? 'Apple Pencil과 함께 사용하면 손글씨의 장점과 디지털의 편의성을 동시에 누릴 수 있습니다. 필기 검색 기능이 뛰어납니다.' : 'Combined with Apple Pencil, enjoy handwriting benefits with digital convenience simultaneously. Excellent handwriting search functionality.'}
        </li>
        <li>
          <strong>Logseq</strong> — {isKo ? '아웃라이너 기반으로 일일 저널링과 결합된 지식 관리에 적합합니다. 오픈소스로 데이터 프라이버시가 보장됩니다.' : 'Outliner-based, suited for knowledge management combined with daily journaling. Open source with guaranteed data privacy.'}
        </li>
      </ul>

      <h3>{isKo ? '디지털 노트 작성 전략' : 'Digital Note-Taking Strategies'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '양방향 링크 활용' : 'Use Bi-directional Links'}</strong>
          <p>{isKo ? '관련 노트를 서로 연결하여 지식 네트워크를 구축하세요. 고립된 노트는 가치가 떨어집니다. [[키워드]] 형태의 위키 링크를 적극적으로 활용하세요.' : 'Build a knowledge network by linking related notes to each other. Isolated notes lose value. Actively use wiki-style [[keyword]] links.'}</p>
        </li>
        <li>
          <strong>{isKo ? '태그 시스템 설계' : 'Design a Tag System'}</strong>
          <p>{isKo ? '태그는 폴더 구조를 보완합니다. #상태/진행중, #유형/참고자료 같은 계층형 태그를 사용하면 다차원적 분류가 가능합니다.' : 'Tags complement folder structures. Hierarchical tags like #status/in-progress and #type/reference enable multi-dimensional classification.'}</p>
        </li>
        <li>
          <strong>{isKo ? '일일 노트 습관' : 'Daily Note Habit'}</strong>
          <p>{isKo ? '매일 하나의 일일 노트를 작성하고, 그날의 학습 내용과 아이디어를 기록하세요. 이것이 나중에 연결된 지식의 허브가 됩니다.' : 'Write one daily note each day, recording that day\'s learning and ideas. These become hubs of connected knowledge over time.'}</p>
        </li>
      </ol>

      <TipBox type="warning" title={isKo ? '디지털 노트의 함정' : 'Digital Note-Taking Pitfalls'}>
        <p>
          {isKo
            ? '"수집가의 오류"에 주의하세요. 정보를 복사-붙여넣기만 하고 자신의 언어로 재구성하지 않으면 실제 학습이 일어나지 않습니다. 디지털 도구의 편리함이 오히려 피상적 학습을 유도할 수 있으므로, 반드시 자기만의 말로 다시 작성하는 과정을 포함하세요.'
            : 'Beware the "collector\'s fallacy." Simply copy-pasting information without reconstructing it in your own words means no actual learning occurs. The convenience of digital tools can encourage superficial learning, so always include a step of rewriting in your own words.'}
        </p>
      </TipBox>
    </section>
  );
}

function ReviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '복습 노트 만들기' : 'Creating Review Notes'}</h2>

      <h3>{isKo ? '간격 반복법 (Spaced Repetition)' : 'Spaced Repetition'}</h3>
      <p>
        {isKo
          ? '간격 반복법은 기억이 사라지기 직전에 복습하여 기억을 강화하는 과학적 학습법입니다. 첫 복습은 1일 후, 두 번째는 3일 후, 세 번째는 7일 후, 네 번째는 14일 후, 다섯 번째는 30일 후에 하는 것이 일반적인 간격입니다. 이 방법은 같은 시간을 투자해도 벼락치기보다 2~3배 높은 기억 유지율을 보여줍니다.'
          : 'Spaced repetition is a scientifically-backed learning method that reinforces memory by reviewing just before forgetting occurs. The typical intervals are: 1st review after 1 day, 2nd after 3 days, 3rd after 7 days, 4th after 14 days, and 5th after 30 days. This method shows 2-3x higher retention rates compared to cramming with the same time investment.'}
      </p>

      <h3>{isKo ? '복습 노트 작성 원칙' : 'Review Note Writing Principles'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '원본 노트를 보지 않고 먼저 작성' : 'Write First Without Looking at Original Notes'}</strong>
          <p>{isKo ? '복습 노트를 만들 때는 먼저 기억에 의존하여 핵심 내용을 적어보세요. 이 "인출 연습(retrieval practice)"이 기억을 가장 강력하게 강화합니다.' : 'When creating review notes, first write down key content from memory. This "retrieval practice" is the most powerful way to strengthen memory.'}</p>
        </li>
        <li>
          <strong>{isKo ? '빈칸 채우기 형식 활용' : 'Use Fill-in-the-Blank Format'}</strong>
          <p>{isKo ? '핵심 개념의 키워드를 빈칸으로 만들어 자기 테스트 도구로 활용하세요. "에빙하우스의 _____ 에 따르면, 학습 후 ___분 만에 약 ____%를 잊어버린다"와 같은 형식입니다.' : 'Turn keywords of core concepts into blanks for self-testing. For example: "According to Ebbinghaus\'s _____, about ____% is forgotten within ____ minutes after learning."'}</p>
        </li>
        <li>
          <strong>{isKo ? '비교표 만들기' : 'Create Comparison Tables'}</strong>
          <p>{isKo ? '유사한 개념들을 표로 정리하면 차이점과 공통점이 명확해집니다. 행에는 비교 항목을, 열에는 비교 대상을 배치하세요.' : 'Organizing similar concepts in a table clarifies differences and similarities. Place comparison criteria in rows and subjects in columns.'}</p>
        </li>
        <li>
          <strong>{isKo ? '한 페이지 요약 만들기' : 'Create One-Page Summaries'}</strong>
          <p>{isKo ? '한 단원 또는 한 주의 학습 내용을 A4 한 페이지에 압축하여 정리하세요. 이 제약 조건이 핵심을 선별하는 능력을 키우고, 전체 구조를 조망하는 시각을 제공합니다.' : 'Compress one chapter or one week of learning into a single A4 page. This constraint develops the ability to select key points and provides a perspective for viewing the overall structure.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '플래시카드 시스템' : 'Flashcard System'}</h3>
      <p>
        {isKo
          ? '플래시카드는 간격 반복법과 결합했을 때 가장 강력합니다. Anki와 같은 SRS(Spaced Repetition System) 앱을 사용하면 알고리즘이 자동으로 최적의 복습 시점을 계산해줍니다. 카드 작성 시에는 하나의 카드에 하나의 개념만 담고, 질문은 명확하게, 답변은 간결하게 작성하세요.'
          : 'Flashcards are most powerful when combined with spaced repetition. Using SRS (Spaced Repetition System) apps like Anki, the algorithm automatically calculates optimal review timing. When creating cards, put only one concept per card, make questions clear, and keep answers concise.'}
      </p>

      <TipBox type="tip" title={isKo ? '효과적인 복습 타이밍' : 'Effective Review Timing'}>
        <p>
          {isKo
            ? '복습은 "자신감이 있을 때"가 아니라 "살짝 잊어버렸을 때" 하는 것이 가장 효과적입니다. 약간의 어려움을 느끼며 기억을 꺼내는 과정이 신경 회로를 강화합니다. 너무 쉬운 복습은 시간 낭비이고, 완전히 잊은 후의 복습은 다시 처음부터 배우는 것과 같습니다.'
            : 'Review is most effective not "when you feel confident" but "when you have slightly forgotten." The process of retrieving memories with some difficulty strengthens neural pathways. Too-easy reviews waste time, and reviewing after completely forgetting is like learning from scratch again.'}
        </p>
      </TipBox>
    </section>
  );
}

function SystemSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '노트 정리 시스템' : 'Note Organization System'}</h2>

      <h3>{isKo ? 'PARA 시스템' : 'The PARA System'}</h3>
      <p>
        {isKo
          ? 'Tiago Forte가 고안한 PARA 시스템은 모든 디지털 정보를 네 가지 범주로 분류합니다. 이 시스템의 핵심은 정보를 주제별이 아니라 "활용 가능성"을 기준으로 분류한다는 것입니다. 어디에 저장했는지 기억할 필요 없이, 필요할 때 빠르게 찾을 수 있는 구조를 만듭니다.'
          : 'The PARA system, devised by Tiago Forte, classifies all digital information into four categories. The core principle is organizing information not by topic but by "actionability." It creates a structure where you can quickly find what you need without remembering where you stored it.'}
      </p>
      <img src="/assets/images/topics/note-taking-system.svg" alt={isKo ? 'PARA 정리 시스템' : 'PARA Organization System'} className="guide-section-illustration" />
      <ol>
        <li>
          <strong>Projects ({isKo ? '프로젝트' : 'Projects'})</strong>
          <p>{isKo ? '현재 진행 중인 구체적인 목표가 있는 작업들. 마감일이 있고, 완료 가능한 것들입니다. 예: "중간고사 준비", "졸업논문 3장 작성"' : 'Currently active tasks with specific goals. Items with deadlines that can be completed. e.g., "Midterm exam prep", "Write thesis chapter 3"'}</p>
        </li>
        <li>
          <strong>Areas ({isKo ? '영역' : 'Areas'})</strong>
          <p>{isKo ? '지속적으로 관리해야 하는 책임 영역. 마감일 없이 계속되는 것들입니다. 예: "건강 관리", "전공 지식", "재정 관리"' : 'Ongoing areas of responsibility. Things that continue without deadlines. e.g., "Health management", "Major subject knowledge", "Financial management"'}</p>
        </li>
        <li>
          <strong>Resources ({isKo ? '자원' : 'Resources'})</strong>
          <p>{isKo ? '관심 있는 주제에 대한 참고 자료. 언젠가 유용할 수 있는 정보들입니다. 예: "UX 디자인 참고 자료", "프로그래밍 치트시트"' : 'Reference materials on topics of interest. Information that might be useful someday. e.g., "UX design references", "Programming cheat sheets"'}</p>
        </li>
        <li>
          <strong>Archives ({isKo ? '보관' : 'Archives'})</strong>
          <p>{isKo ? '완료되었거나 더 이상 활성화되지 않은 항목들. 나머지 세 범주에서 비활성화된 모든 것이 여기로 이동합니다.' : 'Completed or no longer active items. Everything deactivated from the other three categories moves here.'}</p>
        </li>
      </ol>

      <h3>{isKo ? 'Zettelkasten (제텔카스텐) 방법' : 'The Zettelkasten Method'}</h3>
      <p>
        {isKo
          ? '독일의 사회학자 니클라스 루만(Niklas Luhmann)이 사용한 지식 관리 시스템입니다. 루만은 이 방법으로 70권 이상의 책과 400편 이상의 논문을 저술했습니다. 핵심 원칙은 "하나의 노트에 하나의 아이디어"를 적고, 노트 간 연결을 통해 지식 네트워크를 형성하는 것입니다.'
          : 'A knowledge management system used by German sociologist Niklas Luhmann. Using this method, Luhmann authored over 70 books and more than 400 scholarly articles. The core principle is writing "one idea per note" and forming a knowledge network through connections between notes.'}
      </p>
      <ul>
        <li><strong>{isKo ? '문헌 노트' : 'Literature Notes'}</strong> — {isKo ? '읽은 내용에서 중요한 부분을 자기 언어로 요약' : 'Summarize important parts from readings in your own words'}</li>
        <li><strong>{isKo ? '영구 노트' : 'Permanent Notes'}</strong> — {isKo ? '자신의 사고와 통찰을 담은 독립적인 노트' : 'Independent notes containing your own thinking and insights'}</li>
        <li><strong>{isKo ? '인덱스 노트' : 'Index Notes'}</strong> — {isKo ? '특정 주제에 대한 영구 노트들의 진입점 역할' : 'Serve as entry points to permanent notes on specific topics'}</li>
      </ul>

      <h3>{isKo ? '주간 정리 루틴' : 'Weekly Organization Routine'}</h3>
      <p>
        {isKo
          ? '어떤 시스템을 사용하든 주간 정리 시간을 확보하세요. 매주 30분~1시간을 투자하여 한 주간 작성한 노트를 정리하고, 적절한 위치에 분류하고, 불필요한 내용을 삭제합니다. 이 습관이 없으면 아무리 좋은 시스템도 점점 혼란에 빠집니다.'
          : 'Regardless of which system you use, secure weekly organization time. Invest 30 minutes to 1 hour each week to organize notes from the week, classify them in proper locations, and delete unnecessary content. Without this habit, even the best system gradually descends into chaos.'}
      </p>

      <TipBox type="important" title={isKo ? '시스템 선택 가이드' : 'System Selection Guide'}>
        <p>
          {isKo
            ? '완벽한 시스템을 찾으려 하지 마세요. PARA는 실행 중심, Zettelkasten은 지식 축적 중심입니다. 많은 전문가들이 두 방법을 결합합니다: 현재 프로젝트는 PARA로 관리하고, 장기 지식 축적은 Zettelkasten으로 하는 방식입니다. 가장 중요한 것은 선택한 시스템을 꾸준히 실천하는 것입니다.'
            : 'Do not try to find the perfect system. PARA is action-oriented; Zettelkasten is knowledge-accumulation-oriented. Many experts combine both: managing current projects with PARA and long-term knowledge building with Zettelkasten. The most important thing is consistently practicing whichever system you choose.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export default function NoteTaking(): ReactElement {
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
        title={isKo ? '노트 필기 전략 가이드' : 'Note-Taking Strategies Guide'}
        description={
          isKo
            ? '효과적인 노트 필기 전략을 체계적으로 학습합니다. 코넬 노트법, 마인드맵, 디지털 노트 활용, 복습 노트 만들기까지 모든 기법을 다룹니다.'
            : 'Learn effective note-taking strategies systematically. Covers Cornell method, mind mapping, digital tools, review notes, and organization systems.'
        }
        path="/note-taking"
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
              <h1>{isKo ? '노트 필기 전략 완벽 가이드' : 'Complete Guide to Note-Taking Strategies'}</h1>
              <p>
                {isKo
                  ? '효과적인 학습의 핵심은 좋은 노트 필기에서 시작됩니다. 기본 원칙부터 코넬 노트법, 마인드맵, 디지털 도구 활용, 복습 전략, 그리고 체계적인 정리 시스템까지 실전에서 바로 활용할 수 있는 노트 필기 기법을 학습합니다.'
                  : 'Effective learning starts with good note-taking. From basic principles to the Cornell method, mind mapping, digital tools, review strategies, and systematic organization, learn note-taking techniques you can apply immediately.'}
              </p>
              <img src="/assets/images/topics/note-taking-hero.svg" alt={isKo ? '노트 필기 전략 일러스트' : 'Note-Taking Strategies Illustration'} className="guide-hero-illustration" />
            </div>

            {/* ────────── Section Rendering ────────── */}
            {activeSection === 'principles' && <PrinciplesSection isKo={isKo} />}
            {activeSection === 'cornell' && <CornellSection isKo={isKo} />}
            {activeSection === 'mindmap' && <MindmapSection isKo={isKo} />}
            {activeSection === 'digital' && <DigitalSection isKo={isKo} />}
            {activeSection === 'review' && <ReviewSection isKo={isKo} />}
            {activeSection === 'system' && <SystemSection isKo={isKo} />}

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
