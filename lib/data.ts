import type { AcademicEntry, ActiveProject, BootLine, ContactLink, DataCard, Project, TimelineEntry } from './types'

// ===== BOOT SEQUENCE =====
export const bootLines: BootLine[] = [
  { text: 'MAGI SYSTEM v2.026 — INITIATING BOOT SEQUENCE', cls: '' },
  { text: '> Loading MELCHIOR-1 (personal data core)...', cls: 'sys' },
  { text: '[OK]', cls: 'ok' },
  { text: '> Loading BALTHASAR-2 (project analysis)...', cls: 'sys' },
  { text: '[OK]', cls: 'ok' },
  { text: '> Loading CASPER-3 (experience matrix)...', cls: 'sys' },
  { text: '[OK]', cls: 'ok' },
  { text: '> Synchronizing neural pathways...', cls: 'sys' },
  { text: '[WARNING] Pattern BLUE detected in section 4', cls: 'warn' },
  { text: '> Establishing AT Field... ', cls: 'sys' },
  { text: '[OK] Portfolio interface ready.', cls: 'ok' },
  { text: '', cls: '' },
  { text: '> ACCESS GRANTED — Welcome.', cls: '' },
]

// ===== TYPING QUESTION =====
export const typingQuestion = "Should one follow emotions instead of f"

// ===== ABOUT — MELCHIOR-1 =====
export const aboutCards: DataCard[] = [
  {
    index: '01',
    title: 'Profile',
    body: 'A driven student passionate about technology, design, and building things that matter. Currently pursuing studies while working on projects that bridge creativity and engineering.',
  },
  {
    index: '02',
    title: 'System Status',
    stats: [
      { label: 'STATUS', value: 'ACTIVE', active: true },
      { label: 'ROLE', value: 'STUDENT' },
      { label: 'FOCUS', value: 'COMPUTER SCIENCE' },
      { label: 'AVAILABILITY', value: 'OPEN TO WORK' },
    ],
  },
  {
    index: '03',
    title: 'Technical Skills',
    stats: [
      { label: 'LANGUAGES', value: 'JS / PY / TS' },
      { label: 'FRONTEND', value: 'REACT / NEXT' },
      { label: 'BACKEND', value: 'NODE / DJANGO' },
      { label: 'TOOLS', value: 'GIT / DOCKER' },
    ],
  },
  {
    index: '04',
    title: 'Education',
    body: 'B.S. Computer Science — Currently enrolled. Coursework in algorithms, systems design, machine learning, and human-computer interaction.',
  },
]

// ===== PROJECTS — BALTHASAR-2 =====
export const projects: Project[] = [
  {
    id: 'PRJ-001',
    icon: '📈',
    title: 'Stock Trading Framework',
    description:
      'Developed a framework for testing and back-testing financial trading algorithms using scraped data. Reverse-engineered the Invesco S&P 500 Momentum ETF methodology to predict rebalanced holdings with 96% accuracy. Built a Momentum/Cashflow weighted algorithm producing 82% returns over a 2-year backtest.',
    tags: ['Python'],
    href: 'https://github.com/spb8026/TradingAlgo',
  },
  {
    id: 'PRJ-002',
    icon: '📱',
    title: 'PKP — Startup Project',
    description:
      'Full-stack Android/iOS React Native application for vendor-event matching. Implemented Firebase Cloud Messaging for in-app and push notifications.',
    tags: ['TypeScript', 'React Native', 'Firebase'],
  },
  {
    id: 'PRJ-003',
    icon: '🎲',
    title: 'Command Line Monopoly',
    description:
      'Re-created Monopoly as a fully playable command-line game to practice Java OOP principles.',
    tags: ['Java'],
    href: 'https://github.com/spb8026/Monopoly',
  },
  {
    id: 'PRJ-004',
    icon: '🌐',
    title: 'Web Design / Social Media',
    description:
      'Established and managed Instagram and Facebook profiles for Tall Timbers. Designed portfolio websites for peers using Webflow.',
    tags: ['Webflow'],
    href: 'https://www.instagram.com/talltimbersofficial/',
  },
]

// ===== ACADEMIC — BALTHASAR-2 =====
export const academic: AcademicEntry[] = [
  {
    title: 'Machine Learning',
    description:
      'Built an ID3 Decision Tree to predict loan defaults, used NAS-Search to speed up BERT/GPT-1 training, and implemented a MobileNetV3 CNN for image classification comparison.',
    tags: ['Python'],
  },
  {
    title: 'Algorithmic Trading',
    description:
      'Developed a framework for back-testing trading algorithms. Modeled the Invesco S&P 500 Momentum ETF with 96% accuracy and built a diversified algorithm producing 82% returns over a 2-year backtest.',
    tags: ['Python'],
  },
  {
    title: 'Intro to Software Engineering',
    description:
      'Semester-long Scrum-Agile simulation building a full E-Store with a team of five.',
    tags: ['Angular', 'Spring Boot'],
  },
  {
    title: 'Concepts of Parallel & Distributed Systems',
    description:
      'Studied parallel and distributed system design. Built a parallelized generator for large prime numbers and odd factors.',
    tags: ['C#'],
  },
  {
    title: 'Intro to Artificial Intelligence',
    description:
      'Implemented classic AI algorithms including A* search and various search strategies.',
    tags: ['Java', 'Python'],
  },
  {
    title: 'Analysis of Algorithms',
    description:
      'Analyzed time/space complexity and implemented core data structures and algorithms.',
    tags: ['Java'],
  },
  {
    title: 'Principles of Data Management',
    description:
      'Designed and implemented relational databases with a focus on SQL and normalization.',
    tags: ['PostgreSQL', 'Java'],
  },
  {
    title: 'Programming Language Concepts',
    description:
      'Built a compiler as part of a team, exploring how different programming languages are designed and implemented.',
    tags: ['Java', 'Scheme'],
  },
  {
    title: 'Mechanics of Programming',
    description:
      'Introduction to low-level programming, memory management, and systems concepts.',
    tags: ['C'],
  },
  {
    title: 'Graph Theory',
    description:
      'Mathematical theory behind graphs, trees, networks, and their computational applications.',
    tags: [],
  },
  {
    title: 'Math: Simulation and Randomness',
    description:
      'Computational methods for producing and analyzing random numbers and simulations.',
    tags: [],
  },
  {
    title: 'Intro to Computer Science Theory',
    description:
      'Theoretical foundations of computation including automata, formal languages, and complexity.',
    tags: [],
  },
  {
    title: 'Computational Problem Solving I',
    description:
      'Solving algorithmic problems using C++ with a focus on structured problem decomposition.',
    tags: ['C++'],
  },
  {
    title: 'Computer Science II',
    description:
      'Object-oriented programming fundamentals using Java — classes, inheritance, and design patterns.',
    tags: ['Java'],
  },
  {
    title: 'Computer Science I',
    description:
      'Introductory programming course covering basic constructs, data types, and problem-solving.',
    tags: ['Python'],
  },
]

// ===== EXPERIENCE — CASPER-3 =====
export const timeline: TimelineEntry[] = [
  {
    range: '1/25 — PRESENT',
    role: 'Software Engineering Intern',
    company: 'Paychex — Remote',
    description:
      'Modernized an enterprise-scale financial app responsible for millions in daily transactions by migrating Angular Material to an internal UI library, improving maintainability and UX consistency. Expanded automated testing coverage using Python\'s Selenium, increasing confidence in critical financial workflows. Worked in a Kanban framework with limited WIP, participating in backlog grooming and story refinement sessions.',
  },
  {
    range: '10/24 — PRESENT',
    role: 'ITS Service Desk Technician',
    company: 'RIT — Henrietta, NY',
    description:
      'Providing first-line support for technology and accounts within the RIT community.',
  },
  {
    range: '5/24 — 8/24',
    role: 'Software Engineering Intern',
    company: 'First Citizens Bank — Morristown, NJ',
    description:
      'Worked with the Enterprise Incident Management Team, contributing to internal tooling built with Java and Next.js.',
  },
  {
    range: '3/24 — 5/24',
    role: 'Student Maintenance Worker',
    company: 'RIT — Henrietta, NY',
    description:
      'Helped maintain the RIT President\'s property at Liberty Hill.',
  },
  {
    range: '1/24 — PRESENT',
    role: 'Student Note Taker',
    company: 'RIT — Henrietta, NY',
    description:
      'Taking accurate and effective notes for NTID students at RIT. Previous stint November 2022 – May 2023.',
  },
  {
    range: '7/23 — 8/23',
    role: 'Delivery Driver',
    company: 'Domino\'s — Hamburg, NJ',
    description:
      'Efficiently delivered and prepared Domino\'s products.',
  },
  {
    range: '7/23 — 8/23',
    role: 'Crew Member',
    company: 'Dunkin\' — Vernon, NJ',
    description:
      'Accurately created Dunkin\' beverages in a fast-paced environment.',
  },
  {
    range: '4/21 — 8/22',
    role: 'Maintenance Crew',
    company: 'Tall Timbers — Vernon, NJ',
    description:
      'Performed landscaping, painting, and janitorial duties.',
  },
  {
    range: '12/19 — 3/20',
    role: 'Cashier',
    company: 'Mountain Creek Ski Resort — Vernon, NJ',
    description:
      'Handled transactions while upselling Season Passes to customers.',
  },
]

// ===== ACTIVE PROJECTS (displayed in hero meta block) =====
export const activeProjects: ActiveProject[] = [
  {
    code: 'PRJ-001',
    name: 'MAGI_PORTFOLIO',
    tech: 'NEXT.JS / TS',
    status: 'IN PROGRESS',
    priority: 'AAA',
  },
  {
    code: 'PRJ-002',
    name: 'TRADING_ALGO',
    tech: 'PYTHON',
    status: 'ACTIVE',
    priority: 'AA',
  },
  // Add more entries here — each will rotate in on the hero
]

// ===== CONTACT LINKS =====
export const contactLinks: ContactLink[] = [
  { label: 'EMAIL', icon: '✉', href: 'mailto:your@email.com' },
  { label: 'GITHUB', icon: '⌘', href: 'https://github.com', external: true },
  { label: 'LINKEDIN', icon: '◉', href: 'https://linkedin.com', external: true },
  { label: 'RESUME', icon: '📄', href: '#' },
]
