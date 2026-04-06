/**
 * DreamIT Study - 사이트 설정 파일
 * 공부 잘하는 방법 학습사이트의 브랜드, 메뉴, 학습 토픽 정보를 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer/Home/Courses가 자동으로 반영됩니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'study',
  name: 'DreamIT Study',
  nameKo: '공부 잘하는 방법',
  description: 'DreamIT Study - 공부 잘하는 방법. 학습법, 기억력 향상, 시간관리, 시험전략 등 효과적인 학습 노하우',
  url: 'https://study.dreamitbiz.com',
  dbPrefix: 'study_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Study', className: 'brand-biz' },
    ]
  },

  themeColor: '#059669',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: false, community: true, search: true, auth: true, license: false },

  colors: [
    { name: 'green', color: '#059669' },
    { name: 'blue', color: '#0046C8' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
    { name: 'red', color: '#C8102E' },
  ],

  categories: [
    { id: 'fundamentals', name: '학습기초', nameEn: 'Study Fundamentals', icon: 'fa-solid fa-book-open', path: '/courses/fundamentals' },
    { id: 'strategy', name: '학습전략', nameEn: 'Study Strategies', icon: 'fa-solid fa-brain', path: '/courses/strategy' },
    { id: 'management', name: '자기관리', nameEn: 'Self Management', icon: 'fa-solid fa-clock', path: '/courses/management' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.fundamentals', path: '/courses/fundamentals', activePath: '/courses/fundamentals',
      dropdown: [
        { path: '/courses/study-habits', labelKey: 'site.nav.studyHabits' },
        { path: '/courses/memory', labelKey: 'site.nav.memory' },
        { path: '/courses/note-taking', labelKey: 'site.nav.noteTaking' },
      ]
    },
    {
      labelKey: 'site.nav.strategy', path: '/courses/strategy', activePath: '/courses/strategy',
      dropdown: [
        { path: '/courses/focus', labelKey: 'site.nav.focus' },
        { path: '/courses/reading', labelKey: 'site.nav.reading' },
        { path: '/courses/exam-strategy', labelKey: 'site.nav.examStrategy' },
      ]
    },
    {
      labelKey: 'site.nav.management', path: '/courses/management', activePath: '/courses/management',
      dropdown: [
        { path: '/courses/time-mgmt', labelKey: 'site.nav.timeMgmt' },
        { path: '/courses/motivation', labelKey: 'site.nav.motivation' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutSite' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/fundamentals', labelKey: 'site.nav.fundamentals' },
    { path: '/courses/strategy', labelKey: 'site.nav.strategy' },
    { path: '/courses/management', labelKey: 'site.nav.management' },
    { path: '/about', labelKey: 'site.nav.aboutSite' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz Hub', url: 'https://biz-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    // ── 학습기초 (fundamentals) ──
    {
      id: 'study-habits', name: '학습 습관 만들기', nameEn: 'Building Study Habits', url: '#',
      icon: 'fa-solid fa-seedling', color: '#059669', category: 'fundamentals',
      description: '효과적인 학습 습관을 형성하고, 꾸준한 공부 루틴을 만드는 방법을 배웁니다.',
      descriptionEn: 'Learn to build effective study habits and create consistent study routines.',
      techStack: ['습관형성', '루틴설계', '자기조절', '목표설정'], difficulty: 'beginner',
      curriculum: ['학습 습관의 과학적 원리', '스몰 스텝 전략과 습관 루프', '나만의 공부 루틴 설계', '학습 환경 최적화', '습관 유지와 리커버리 전략'],
      curriculumEn: ['Science behind study habits', 'Small step strategy and habit loop', 'Design your own study routine', 'Optimizing study environment', 'Habit maintenance and recovery strategies'],
      features: ['셀프 체크리스트', '21일 습관 챌린지', '습관 트래커'],
      featuresEn: ['Self-checklist', '21-day habit challenge', 'Habit tracker'],
      target: '공부 습관이 잡히지 않는 학생, 학습 시작자', targetEn: 'Students struggling with study habits, beginners',
    },
    {
      id: 'memory', name: '기억력 향상법', nameEn: 'Memory Enhancement', url: '#',
      icon: 'fa-solid fa-lightbulb', color: '#6D28D9', category: 'fundamentals',
      description: '과학적으로 검증된 기억력 향상 기법과 암기 전략을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn scientifically proven memory enhancement techniques and memorization strategies.',
      techStack: ['기억술', '간격반복', '연상기법', '마인드맵'], difficulty: 'intermediate',
      curriculum: ['기억의 메커니즘과 뇌과학', '에빙하우스 망각곡선과 간격반복', '연상법과 기억궁전 기법', '마인드맵 활용 기억 정리', '시험 대비 암기 전략'],
      curriculumEn: ['Memory mechanisms and neuroscience', 'Ebbinghaus forgetting curve and spaced repetition', 'Association and memory palace technique', 'Mind map-based memory organization', 'Exam-focused memorization strategies'],
      features: ['간격반복 스케줄러', '기억술 실습', '퀴즈 평가'],
      featuresEn: ['Spaced repetition scheduler', 'Mnemonics practice', 'Quiz assessment'],
      target: '암기 과목을 잘하고 싶은 학생, 자격시험 준비생', targetEn: 'Students wanting to improve memorization, certification exam takers',
    },
    {
      id: 'note-taking', name: '노트 필기 전략', nameEn: 'Note-Taking Strategies', url: '#',
      icon: 'fa-solid fa-pen-fancy', color: '#0891B2', category: 'fundamentals',
      description: '효과적인 노트 필기법과 정리 기법으로 학습 효율을 극대화합니다.',
      descriptionEn: 'Maximize learning efficiency with effective note-taking and organization techniques.',
      techStack: ['코넬노트', '마인드맵', '스키마노트', '디지털노트'], difficulty: 'beginner',
      curriculum: ['노트 필기의 중요성과 원칙', '코넬 노트 필기법', '마인드맵과 비주얼 노트', '강의·독서 노트 정리법', '디지털 노트 도구 활용'],
      curriculumEn: ['Importance and principles of note-taking', 'Cornell note-taking method', 'Mind mapping and visual notes', 'Lecture and reading note organization', 'Digital note-taking tools'],
      features: ['노트 템플릿 제공', '필기 실습 과제', '사례 분석'],
      featuresEn: ['Note templates provided', 'Note-taking practice', 'Case analysis'],
      target: '수업 필기가 어려운 학생, 정리 능력을 키우고 싶은 학습자', targetEn: 'Students struggling with lecture notes, learners wanting better organization',
    },
    // ── 학습전략 (strategy) ──
    {
      id: 'focus', name: '집중력 강화법', nameEn: 'Focus Enhancement', url: '#',
      icon: 'fa-solid fa-crosshairs', color: '#DC2626', category: 'strategy',
      description: '집중력을 높이는 과학적 방법과 딥워크 기법을 배워 학습 몰입도를 높입니다.',
      descriptionEn: 'Learn scientific methods and deep work techniques to enhance focus and study immersion.',
      techStack: ['딥워크', '포모도로', '주의력관리', '환경설계'], difficulty: 'intermediate',
      curriculum: ['집중력의 과학과 뇌 메커니즘', '포모도로 테크닉과 타임블록', '딥워크와 몰입 상태 진입법', '디지털 디톡스와 방해 요소 제거', '집중력 훈련 실전 프로그램'],
      curriculumEn: ['Science of focus and brain mechanisms', 'Pomodoro technique and time blocking', 'Deep work and flow state entry', 'Digital detox and distraction elimination', 'Focus training practical program'],
      features: ['포모도로 타이머', '집중력 측정 도구', '30일 집중력 챌린지'],
      featuresEn: ['Pomodoro timer', 'Focus measurement tool', '30-day focus challenge'],
      target: '집중이 어려운 학생, 학습 효율을 높이고 싶은 직장인', targetEn: 'Students who struggle to focus, professionals wanting higher efficiency',
    },
    {
      id: 'reading', name: '독서법과 속독', nameEn: 'Reading Methods & Speed Reading', url: '#',
      icon: 'fa-solid fa-book', color: '#7C3AED', category: 'strategy',
      description: '효과적인 독서 전략과 속독 기법을 익혀 읽기 능력과 이해력을 향상시킵니다.',
      descriptionEn: 'Improve reading ability and comprehension with effective reading strategies and speed reading techniques.',
      techStack: ['SQ3R', '속독법', '비판적읽기', '독서노트'], difficulty: 'intermediate',
      curriculum: ['효과적인 독서의 원칙과 전략', 'SQ3R 독서법과 적극적 읽기', '속독 기법과 읽기 속도 향상', '비판적 읽기와 분석적 사고', '독서 노트와 지식 체계화'],
      curriculumEn: ['Principles and strategies of effective reading', 'SQ3R method and active reading', 'Speed reading techniques and pace improvement', 'Critical reading and analytical thinking', 'Reading notes and knowledge systematization'],
      features: ['속독 훈련 프로그램', '독서 목록 큐레이션', '독서 노트 템플릿'],
      featuresEn: ['Speed reading training program', 'Reading list curation', 'Reading note template'],
      target: '독서 효율을 높이고 싶은 학생, 많은 자료를 소화해야 하는 학습자', targetEn: 'Students wanting reading efficiency, learners with heavy reading loads',
    },
    {
      id: 'exam-strategy', name: '시험 전략과 대비', nameEn: 'Exam Strategy & Preparation', url: '#',
      icon: 'fa-solid fa-trophy', color: '#F59E0B', category: 'strategy',
      description: '시험 유형별 전략, 답안 작성법, 시험 불안 극복까지 시험의 모든 것을 배웁니다.',
      descriptionEn: 'Learn everything about exams — strategies by type, answer writing, and overcoming test anxiety.',
      techStack: ['시험전략', '답안작성', '오답분석', '시험불안극복'], difficulty: 'advanced',
      curriculum: ['시험 유형 분석과 전략 수립', '객관식·서술형 답안 작성 기법', '오답 노트 작성과 취약점 분석', '시험 불안 극복과 멘탈 관리', 'D-Day 일정별 시험 대비 플랜'],
      curriculumEn: ['Exam type analysis and strategy planning', 'MCQ and essay answer writing techniques', 'Wrong answer analysis and weakness identification', 'Overcoming test anxiety and mental management', 'D-Day exam preparation plan'],
      features: ['시험 플래너', '모의시험 체험', '오답 노트 도구'],
      featuresEn: ['Exam planner', 'Mock exam experience', 'Wrong answer note tool'],
      target: '시험을 앞둔 학생, 자격시험 수험생', targetEn: 'Students preparing for exams, certification candidates',
    },
    // ── 자기관리 (management) ──
    {
      id: 'time-mgmt', name: '시간 관리와 계획', nameEn: 'Time Management & Planning', url: '#',
      icon: 'fa-solid fa-calendar-check', color: '#0E7490', category: 'management',
      description: '효율적인 시간 관리법과 학습 계획 수립으로 제한된 시간을 최대한 활용합니다.',
      descriptionEn: 'Make the most of limited time with efficient time management and study planning.',
      techStack: ['타임블록', '우선순위', '주간계획', '학습플래너'], difficulty: 'beginner',
      curriculum: ['시간 관리의 기본 원칙', '아이젠하워 매트릭스와 우선순위 설정', '주간/일일 학습 계획 수립법', '타임 블로킹과 시간 감각 훈련', '학습 플래너 작성과 리뷰 습관'],
      curriculumEn: ['Fundamentals of time management', 'Eisenhower matrix and priority setting', 'Weekly/daily study planning methods', 'Time blocking and time sense training', 'Study planner creation and review habits'],
      features: ['학습 플래너 템플릿', '타임 로그 도구', '주간 리뷰 체크리스트'],
      featuresEn: ['Study planner template', 'Time log tool', 'Weekly review checklist'],
      target: '시간 관리가 어려운 학생, 효율적 학습을 원하는 직장인', targetEn: 'Students who struggle with time management, efficiency-focused professionals',
    },
    {
      id: 'motivation', name: '동기부여와 멘탈 관리', nameEn: 'Motivation & Mental Management', url: '#',
      icon: 'fa-solid fa-fire', color: '#E11D48', category: 'management',
      description: '학습 동기를 유지하고 슬럼프를 극복하며 건강한 멘탈로 꾸준히 공부하는 법을 배웁니다.',
      descriptionEn: 'Learn to maintain study motivation, overcome slumps, and study consistently with a healthy mindset.',
      techStack: ['내적동기', '성장마인드셋', '번아웃예방', '스트레스관리'], difficulty: 'intermediate',
      curriculum: ['동기의 종류와 내적 동기 강화', '성장 마인드셋과 자기효능감', '학습 슬럼프와 번아웃 예방/극복', '스트레스 관리와 회복 탄력성', '장기 목표 설정과 동기 유지 전략'],
      curriculumEn: ['Types of motivation and intrinsic motivation', 'Growth mindset and self-efficacy', 'Study slump and burnout prevention/recovery', 'Stress management and resilience', 'Long-term goal setting and motivation strategies'],
      features: ['동기부여 저널', '마인드셋 진단 도구', '멘탈 관리 가이드'],
      featuresEn: ['Motivation journal', 'Mindset diagnostic tool', 'Mental management guide'],
      target: '공부 의욕이 떨어진 학생, 멘탈 관리가 필요한 수험생', targetEn: 'Students losing motivation, exam takers needing mental management',
    },
  ],
};

export default site;
