import type {
  AcademicEntry,
  ActiveProject,
  BootLine,
  ContactLink,
  DataCard,
  HeroMessage,
  Project,
  TimelineEntry,
} from "./types";

// ===== BOOT SEQUENCE =====
export const bootLines: BootLine[] = [
  { text: "MAGI SYSTEM v2.026 — INITIATING BOOT SEQUENCE", cls: "" },
  { text: "> Loading MELCHIOR-1 (personal data core)...", cls: "sys" },
  { text: "[OK]", cls: "ok" },
  { text: "> Loading BALTHASAR-2 (project analysis)...", cls: "sys" },
  { text: "[OK]", cls: "ok" },
  { text: "> Loading CASPER-3 (experience matrix)...", cls: "sys" },
  { text: "[OK]", cls: "ok" },
  { text: "> Synchronizing neural pathways...", cls: "sys" },
  { text: "[WARNING] Pattern BLUE detected in section 4", cls: "warn" },
  { text: "> Establishing AT Field... ", cls: "sys" },
  { text: "[OK] Portfolio interface ready.", cls: "ok" },
  { text: "", cls: "" },
  { text: "> ACCESS GRANTED — Welcome.", cls: "" },
];

// ===== TYPING QUESTION =====
export const typingQuestion = "Should one follow emotions instead of f";

// ===== ABOUT — MELCHIOR-1 =====
export const aboutCards: DataCard[] = [
  {
    index: "01",
    title: "Summary",
    body: "Driven by an unwavering passion for technology, I am enthusiastically pursuing a degree in Computer Science at Rochester Institute of Technology. My goal is to refine and enhance my skills in a practical setting as I transition from academia to the professional world. I am actively seeking full-time career opportunities for after May 2026.",
  },
  {
    index: "02",
    title: "Education",
    info: [
      "B.S. Computer Science",
      "Minor in Mathematics",
      "Rochester Institute of Technology",
    ],
    stats: [
      { label: "GPA", value: "3.65" },
      { label: "EXPECTED GRADUATION", value: "MAY 2026" },
    ],
  },
  {
    index: "03",
    title: "System Status",
    stats: [
      { label: "STATUS", value: "ACTIVE", active: true },
      { label: "ROLE", value: "STUDENT / ITS SERVICE DESK REP AND DEVELOPER" },
      { label: "FOCUS", value: "COMPUTER SCIENCE" },
      { label: "AVAILABILITY", value: "OPEN TO WORK" },
    ],
  },
  {
    index: "04",
    title: "Technical Skills",
    tagGroups: [
      {
        label: "LANGUAGES",
        tags: [
          { name: "Java", level: 5 },
          { name: "Python", level: 5 },
          { name: "TypeScript", level: 3 },
          { name: "JavaScript", level: 3 },
          { name: "Go", level: 3 },
          { name: "SQL", level: 2 },
          { name: "C", level: 1 },
          { name: "C++", level: 1 },
          { name: "C#", level: 1 },
        ],
      },
      {
        label: "FRAMEWORKS",
        tags: [
          { name: "Angular", level: 5 },
          { name: "Next.js", level: 3 },
          { name: "React", level: 3 },
          { name: "React Native", level: 2 },
          { name: "Express.js", level: 2 },
          { name: "Spring Boot", level: 2 },
          { name: "Flask", level: 2 },
        ],
      },
      {
        label: "DATABASES",
        tags: [
          { name: "MongoDB", level: 4 },
          { name: "MySQL", level: 3 },
          { name: "PostgreSQL", level: 3 },
        ],
      },
      {
        label: "DEV TOOLS",
        tags: [
          { name: "Git", level: 5 },
          { name: "GitHub", level: 5 },
          { name: "Selenium", level: 3 },
          { name: "JIRA", level: 3 },
          { name: "ServiceNow", level: 3 },
          { name: "Claude Code", level: 3 },
          { name: "Docker", level: 2 },
          { name: "GitLab", level: 2 },
          { name: "Jenkins", level: 2 },
        ],
      },
    ],
  },
];

// ===== PROJECTS — BALTHASAR-2 =====
export const projects: Project[] = [
  {
    id: "PRJ-012",
    icon: "🎮",
    title: "Yu-Gi-Oh Game Line Visualizer",
    description:
      "Developing a full-stack graphical visualzier for the Yu-Gi-Oh card game. Project includes creating a wrapper for the YGOPro C++ Engine into Go, the State Space Exporler, API Layer, and front-end React Appplciation. ",
    tags: ["Go", "C++", "Claude Code"],
    inProgress: true,
  },
  {
    id: "PRJ-013",
    icon: "🌐",
    title: "Developer Portfolio",
    description:
      "Next.js Portfolio site for displaying my projects and skills fully builty utilized Claude Code ",
    tags: ["Claude Code", "Next.js", "React"],
    inProgress: true,
  },

  {
    id: "PRJ-011",
    icon: "📈",
    title: "Stock Trading Framework",
    description:
      "Built a Python backtesting framework from scratch capable of evaluating trading strategies against historical price, market cap, and cash flow data. Reverse-engineered the Invesco S&P 500 Momentum ETF methodology to predict rebalanced holdings with 96% accuracy. Developed a Momentum/Cash Flow-weighted algorithm producing 82% returns over a 2-year backtest.",
    tags: ["Python", "yFinance"],
    links: [
      { label: "GITHUB", href: "https://github.com/spb8026/TradingAlgo" },
    ],
  },
  {
    id: "PRJ-010",
    icon: "🎵",
    title: "Interactive Music Experience",
    description:
      "Lead a team of 5 in orchestrating a live interactive concert for a local Rochester Artists. Handled artist communicaiton, team managment, as well as development for the project. Created live visuals using TouchDesigner. Developed a flashlight tracking Python program to feed to a Unity Project. ",
    tags: ["TouchDesigner", "Unity", "Python"],
    inProgress: true,
  },

  {
    id: "PRJ-009",
    icon: "📊",
    title: "Prediction Market Visualizer",
    description:
      "Developing a Bloomberg-like visualizer for Prediction Markets using Go. Real-time data visualization and market analysis tool.",
    tags: ["Go"],
    inProgress: true,
  },

  {
    id: "PRJ-008",
    icon: "🎨",
    title: "Graphics Pipeline",
    description:
      "Building a simple graphics pipeline from scratch to understand the fundamentals of computer graphics rendering in both 2D-3D",
    tags: ["Python"],
    inProgress: true,
  },
  {
    id: "PRJ-006",
    icon: "📱",
    title: "PKP — Startup Project",
    description:
      "Full-stack Android/iOS React Native application for vendor-event matching. Implemented Firebase Cloud Messaging for in-app and push notifications. Refactored parts of the API and set up the Firebase FCM for notifications on the Android side.",
    tags: ["TypeScript", "React Native", "Express.js", "Firebase"],
  },
  {
    id: "PRJ-005",
    icon: "🔤",
    title: "Jott Language Interpreter",
    description:
      "Built a full interpreter in Java for a custom language called Jott. Implemented lexical analysis, syntax parsing, abstract syntax tree validation, and runtime execution as part of a semester-long team project.",
    tags: ["Java"],
    secondary: false,
  },
  {
    id: "PRJ-004",
    icon: "🎵",
    title: "Music Database & CLI",
    description:
      "Designed and developed a PostgreSQL database and associated Java CLI application for a music site with users, artists, songs, playlists, albums, and plays. Implemented proper database normalization and query optimization.",
    tags: ["PostgreSQL", "Java"],
    secondary: false,
  },
  {
    id: "PRJ-003",
    icon: "🛒",
    title: "E-Commerce Spell Shop",
    description:
      "Developed in a team of 4 an e-commerce application where users could buy spells that interacted with a Spring Boot API. Added a game feature that unlocked new spells based on combinations of previously purchased spells. Focused on cart page front-end and back-end.",
    tags: ["Angular", "Spring Boot", "Java"],
    secondary: false,
  },
  {
    id: "PRJ-002",
    icon: "🎲",
    title: "Command Line Monopoly",
    description:
      "Re-created Monopoly as a fully playable command-line game to practice Java OOP principles including inheritance, polymorphism, and design patterns.",
    tags: ["Java"],
    links: [{ label: "GITHUB", href: "https://github.com/spb8026/Monopoly" }],
    secondary: true,
  },
  {
    id: "PRJ-001",
    icon: "🌐",
    title: "Web Design & Social Media",
    description:
      "Established and managed Instagram and Facebook profiles for Tall Timbers. Designed portfolio websites for peers using Webflow, focusing on clean design and user experience.",
    tags: ["Webflow", "Social Media Management"],
    links: [
      {
        label: "INSTAGRAM",
        href: "https://www.instagram.com/talltimbersofficial/",
      },
    ],
    secondary: true,
  },
];

// ===== ACADEMIC — BALTHASAR-2 =====
export const academic: AcademicEntry[] = [
  {
    title: "Interactive Music Experiences",
    description:
      "Putting together a concert for a local musician using TouchDesigner, Unity, and Python to track audience generating live visuals.",
    tags: ["TouchDesigner", "Unity", "Python"],
    inProgress: true,
  },
  {
    title: "Programming Skills: Go",
    description:
      "Learning Go and developing a Bloomberg-like visualizer for Prediction Markets.",
    tags: ["Go"],
    inProgress: true,
  },
  {
    title: "Intro to Computer Graphics",
    description:
      "Developing a simple graphics pipeline from scratch to understand rendering fundamentals.",
    tags: ["Python"],
    inProgress: true,
  },
  {
    title: "Machine Learning",
    description:
      "Developed an ID3 Decision tree from scratch for predicting loan defaults. Used NAS-Search to speed up BERT-based and GPT-1 language model training. Implemented a KAze/A-KAze feature extractor and MobileNetV3 CNN to compare image classifications.",
    tags: ["Python"],
  },
  {
    title: "Algorithmic Trading",
    description:
      "Developed a framework for testing financial trading algorithms and back-testing them using scraped data. Reverse-engineered the Invesco S&P 500 Momentum ETF methodology achieving 96% accuracy. Built a Momentum/Cashflow weighted algorithm producing 82% returns over 2-year backtest.",
    tags: ["Python"],
  },
  {
    title: "Intro to Software Engineering",
    description:
      "Semester-long Scrum-Agile simulation building a full e-commerce application with a team of five. Developed both front-end and back-end features including a spell-unlocking game mechanic.",
    tags: ["Angular", "Spring Boot", "Java"],
  },
  {
    title: "Programming Language Concepts",
    description:
      "Built a Java interpreter for a custom language called Jott as part of a team. Implemented lexical analysis, syntax parsing, abstract syntax tree validation, and runtime execution.",
    tags: ["Java"],
  },
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Implemented classic AI algorithms including A* Search, Propositional Logic, Decision Trees, and Adaboost.",
    tags: ["Java", "Python"],
  },
  {
    title: "Analysis of Algorithms",
    description:
      "Overview of algorithms used to solve problems and associated data structures. Learned about Dynamic Programming, Brute Force, time/space complexity analysis.",
    tags: ["Java"],
  },
  {
    title: "Principles of Data Management",
    description:
      "Designed and implemented a PostgreSQL database and Java CLI application for a music site with users, artists, songs, playlists, albums, and plays. Learned database concepts and implementation.",
    tags: ["PostgreSQL", "Java", "SQL"],
  },
  {
    title: "Introduction to Computer Science Theory",
    description:
      "Theoretical foundations of computation including automata, formal languages, and complexity theory.",
    tags: [],
  },
  {
    title: "Graph Theory",
    description:
      "Mathematical theory behind graphs, trees, networks, and their computational applications.",
    tags: [],
  },
  {
    title: "Math: Simulation and Randomness",
    description:
      "Computational methods for producing and analyzing random numbers and simulations.",
    tags: ["Python"],
  },
  {
    title: "Mechanics of Programming",
    description:
      "Introduction to low-level programming, memory management, and systems concepts.",
    tags: ["C"],
  },
  {
    title: "Computer Science II",
    description:
      "Object-oriented programming fundamentals using Java. Implemented backtracking algorithms to solve Wordle and Frogs puzzles.",
    tags: ["Java"],
  },
  {
    title: "Computer Science I",
    description:
      "Introductory programming course covering basic constructs, data types, and problem-solving.",
    tags: ["Python"],
  },
];

// ===== EXPERIENCE — CASPER-3 =====
export const timeline: TimelineEntry[] = [
  {
    range: "2/26 — PRESENT",
    role: "ITS Application Developer",
    company: "RIT — Henrietta, NY",
    description:
      "Developing full-stack features for the Service Desk's internal employee resource and management platform using Flask and React.",
    tags: ["React", "Python", "Flask"],
  },
  {
    range: "10/24 — PRESENT",
    role: "ITS Service Desk Technician",
    company: "RIT — Henrietta, NY",
    description:
      "Delivered first-line technical support for the RIT community, resolving 400+ tickets in ServiceNow across account management, network registration, and hardware/software troubleshooting.",
    tags: ["ServiceNow"],
  },
  {
    range: "1/25 — 8/25",
    role: "Software Development Intern",
    company: "Paychex — Remote",
    description:
      "Migrated 150+ Angular Material component instances across two enterprise applications to an internal component library, maintaining 99–100\% Jasmine coverage and collaborating with UX to standardize cases with no 1:1 mapping \nMaintained Jenkins CI pipeline health by diagnosing failing builds and dependency issues; deployed to shared test environments and seeded MongoDB with synthetic data for Selenium integration testing.\n Conducted an Angular 15 to 22 upgrade spike, documenting breaking changes and dependency blockers to inform the engineering roadmap.",
    tags: ["Angular", "TypeScript", "Python", "Selenium", "MongoDB", "Jenkins"],
    hiddenTags: ["JIRA", "Git", "BitBucket"],
  },
  {
    range: "5/24 — 8/24",
    role: "Enterprise Corporate Intern",
    company: "First Citizens Bank — Morristown, NJ",
    description:
      "Self-initiated and built a full-stack distribution list management tool in Next.js and Express.js with zero prior experience in either framework. Application allowed incident teams to manage contact groups, select shared email templates, and auto-generate pre-addressed .eml files.",
    tags: ["Next.js", "Express.js", "TypeScript"],
  },
  {
    range: "3/24 — 5/24",
    role: "Student Maintenance Worker",
    company: "RIT — Henrietta, NY",
    description:
      "Helped maintain the RIT President's property at Liberty Hill.",
    secondary: true,
  },
  {
    range: "1/24 — PRESENT",
    role: "Student Note Taker",
    company: "RIT — Henrietta, NY",
    description:
      "Taking accurate and effective notes for NTID students at RIT. Previous stint November 2022 – May 2023.",
    secondary: true,
  },
  {
    range: "7/23 — 8/23",
    role: "Delivery Driver",
    company: "Domino's — Hamburg, NJ",
    description: "Efficiently delivered and prepared Domino's products.",
    secondary: true,
  },
  {
    range: "7/23 — 8/23",
    role: "Crew Member",
    company: "Dunkin' — Vernon, NJ",
    description:
      "Accurately created Dunkin' beverages in a fast-paced environment.",
    secondary: true,
  },
  {
    range: "4/21 — 8/22",
    role: "Maintenance Crew",
    company: "Tall Timbers — Vernon, NJ",
    description:
      "Performed landscaping, painting, and janitorial duties. Established and managed Instagram and Facebook profiles for the organization.",
    secondary: true,
  },
  {
    range: "12/19 — 3/20",
    role: "Cashier",
    company: "Mountain Creek Ski Resort — Vernon, NJ",
    description:
      "Handled transactions while upselling Season Passes to customers.",
    secondary: true,
  },
];

// ===== ACTIVE PROJECTS (displayed in hero meta block) =====
export const activeProjects: ActiveProject[] = [
  {
    code: "PRJ-001",
    name: "MAGI_PORTFOLIO",
    tech: "NEXT.JS / TS",
    status: "IN PROGRESS",
    priority: "AAA",
  },
  {
    code: "PRJ-002",
    name: "TRADING_ALGO",
    tech: "PYTHON",
    status: "COMPLETE",
    priority: "AA",
  },
  {
    code: "PRJ-003",
    name: "INTERACTIVE_MUSIC",
    tech: "TOUCHDESIGNER / UNITY",
    status: "IN PROGRESS",
    priority: "AA",
  },
  {
    code: "PRJ-004",
    name: "PREDICTION_MARKET_VIZ",
    tech: "GO",
    status: "IN PROGRESS",
    priority: "A",
  },
  {
    code: "PRJ-005",
    name: "GRAPHICS_PIPELINE",
    tech: "C++",
    status: "IN PROGRESS",
    priority: "A",
  },
];

// ===== CONTACT LINKS =====
export const contactLinks: ContactLink[] = [
  { label: "EMAIL", icon: "✉", href: "mailto:shawnbroderick65@gmail.com" },
  {
    label: "GITHUB",
    icon: "⌘",
    href: "https://github.com/spb8026",
    external: true,
  },
  {
    label: "LINKEDIN",
    icon: "◉",
    href: "https://linkedin.com/in/shawn-broderick/",
    external: true,
  },
  { label: "RESUME", icon: "📄", href: "/resume.pdf" },
];

// ===== HERO MESSAGES (right meta block) =====
export const heroMessages: HeroMessage[] = [
    {
    type: "warn",
    header: "FULL TIME POSTION NOT FOUND",
    lines: [
      "PLEASE CONTACT SHAWN BRODERICK",
      "ACTIVELY SEEKING FULL TIME POSITION",
      "EMAIL: shawnbroderick65@gmail.com",
    ],
  },
  {
    type: "info",
    header: "WEBSITE_INSPIRATION",
    lines: [
      "SITE BUILT ON NERV MAGI ARCHITECTURE",
      "THREE CORES: MELCHIOR·BALTHASAR·CASPER",
      "BASED ON NEON GENESIS EVANGELION",
      "EACH PANEL = ONE SUPERCOMPUTER CORE",
    ],
  },
  {
    type: "tip",
    header: "NAVIGATION_HINT",
    lines: [
      "SKILL TAGS ARE INTERACTIVE",
      "CLICK ANY TAG → FILTERED SKILL VIEW",
      "PANELS ABOVE LINK TO FULL SECTIONS",
    ],
  },
  {
    type: "sys",
    header: "AI_MODULE_STATUS",
    lines: [
      "MAGI-AI INTERFACE: OFFLINE",
      "CHAT CAPABILITY:   PENDING",
      "STATUS:            FUTURE_SPRINT",
    ],
  },

];
