export const profile = {
  name: 'Pedro Nametala',
  title: 'Engineering Manager & Full-Stack Consultant',
  tagline:
    'Engineering leader and full-stack consultant with 10+ years shipping cloud-native .NET/React systems and leading high-performing teams across financial services, wagering, insurance, and health. Bringing that same hands-on delivery and technical depth to freelance and contract engagements — architecture, full-stack builds, and AI-powered engineering.',
  location: 'Australia · Remote-friendly',
  email: 'pnametala@gmail.com',
  links: {
    github: 'https://github.com/pnametala',
  },
  languages: 'Portuguese (Native) · English (Advanced)',
}

export const experience = [
  {
    role: 'Engineering Manager / Early-Talent Chapter Lead',
    org: 'Commonwealth Bank of Australia',
    period: 'Mar 2022 — Present',
    stack: 'People Leadership, AI-Powered Engineering, Graduate Program Management',
    summary:
      'Lead and mentor cohorts of graduate engineers across multiple business domains, partnering with the Graduate Program and business units on placements and development.',
    highlights: [
      'Lead and mentor cohorts of graduate engineers (10 in FY25, 5 in FY26) as their primary people leader.',
      'Drive proof-of-concept exploration of AI-powered engineering practices and continuously upskill to inform technical direction.',
      'Champion an inclusive, high-performance culture across distributed graduate cohorts.',
    ],
  },
  {
    role: 'Team Lead',
    org: 'Racing and Wagering WA',
    period: 'May 2022 — Mar 2025',
    stack: '.NET Core, React, Docker, SQL Server, Oracle, AWS',
    summary:
      'Led a cross-functional team of 4 developers and 2 QA engineers, acting as the primary technical interface between engineering and business stakeholders.',
    highlights: [
      'Designed a price-caching system for a live betting feed, cutting third-party API calls by 40%.',
      'Architected a full rewrite of a legacy API, improving scalability and enabling distributed caching to cut costs.',
      'Expanded the team from backend-only to full-stack, enabling end-to-end feature delivery.',
      "Delivered two consecutive Melbourne Cup events — the platform's highest-traffic day — with zero major incidents.",
    ],
  },
  {
    role: 'Senior Full-Stack Software Engineer',
    org: 'Telstra Health',
    period: 'Aug 2020 — May 2022',
    stack: '.NET Core, React, Sass, Docker, SQL Server, Azure',
    summary:
      'Built and maintained standards-compliant backend APIs and integration layers for a healthcare platform in a fast-paced agile environment.',
    highlights: [
      'Migrated all microservices to the latest .NET Core version, improving performance, security, and maintainability.',
      'Stepped up as Acting Team Lead for 4 months, managing operations and technical direction.',
      'Overhauled testing processes, increasing code quality and reducing deployment cycle times.',
    ],
  },
  {
    role: 'Full-Stack Software Engineer',
    org: 'RAC Insurance',
    period: 'Jul 2019 — Jul 2020',
    stack: '.NET Framework, Razor, SQL Server, Azure',
    summary:
      'Maintained and modernised a core .NET MVC business application, balancing legacy support with incremental platform upgrades.',
    highlights: [
      'Delivered an Azure Function integration handling bidirectional data flow between a core system and a CMS.',
      'Led a proof-of-concept evaluating modern frontend frameworks as a migration path off legacy dependencies.',
    ],
  },
  {
    role: 'Technology Consultant',
    org: 'Visagio',
    period: 'Aug 2015 — Jun 2019',
    stack: '.NET, Java, Angular, SQL Server, PostgreSQL, Oracle, Spotfire',
    summary:
      'Delivered tailored technology solutions for client stakeholders across software development and data migration engagements, on-site.',
    highlights: [
      'Delivered a large-scale data migration under a tight deadline with zero data loss (Informatica PowerCenter, Oracle).',
      'Served as lead developer on a 15-month workflow optimisation project (Angular, .NET Core 2).',
      'Optimised SQL Server database views, improving query performance by over 50%.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['.NET / C#', 'Kotlin', 'React', 'Angular'],
  },
  {
    category: 'Cloud & Data',
    items: ['AWS', 'Azure', 'SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    category: 'Delivery & AI Tooling',
    items: ['Docker', 'CI/CD', 'Git', 'Agile Delivery', 'Claude Code', 'Copilot', 'Cursor', 'MCPs'],
  },
]

export const highlights = [
  {
    name: 'Price-Caching System',
    description:
      'Designed and shipped a caching layer for a live betting feed reliant on an external provider, cutting third-party API calls by 40%.',
    tags: ['.NET Core', 'AWS', 'Caching'],
  },
  {
    name: 'Legacy API Rewrite',
    description:
      'Architected a full rewrite of a legacy API, improving scalability and enabling distributed caching to drive cost reduction.',
    tags: ['.NET Core', 'Distributed Systems'],
  },
  {
    name: 'Zero-Incident Peak Delivery',
    description:
      'Delivered two consecutive Melbourne Cup events — a wagering platform\'s highest-traffic day — with zero major incidents.',
    tags: ['Reliability', 'Cloud Ops'],
  },
  {
    name: 'Enterprise Data Migration',
    description:
      'Delivered a large-scale data migration under a tight deadline with zero data loss, using Informatica PowerCenter and Oracle.',
    tags: ['Oracle', 'ETL', 'Data Migration'],
  },
]

export const coreStrengths = [
  'People Leadership',
  'Technical Mentorship',
  'Full-Stack Engineering',
  'Cloud Architecture',
  'Agile Delivery',
  'Proof-of-Concept & R&D',
  'Graduate Program Management',
  'Data Modelling',
]
