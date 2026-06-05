export interface ExperienceItem {
  title: string
  employer: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  date: string
  link: string
}

export interface ProjectItem {
  title: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  date: string
  link: string
  github: string
}

export interface Info {
  name: string
  title: string
  location: string
  description: string
  github: string
  linkedin: string
  email: string
  resume: string
}

export const info: Info = {
  name: 'Len Lester',
  title: 'Senior Software Engineer',
  location: 'Glendale, CA',
  description:
    'Full-stack engineer building AI-powered veterinary software at ScribbleVet and casino mobile apps at Laslow Labs — Elixir, Next.js, React Native, and monorepo tooling.',
  github: 'https://github.com/slowshi',
  linkedin: 'https://www.linkedin.com/in/len-lester/',
  email: 'lenster921@gmail.com',
  resume: '/resume/lenlester_resume.pdf',
}

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    employer: 'ScribbleVet (Kairo Care)',
    description:
      'Full-stack engineer on ScribbleVet, an AI veterinary documentation platform. Ship features across the Elixir/Phoenix API and Next.js frontend — subscription billing, security hardening, SSO, and mobile release paths. Maintain cloud-scribble dev infrastructure, Coder workspaces, and CI automation.',
    stack: ['Elixir', 'Phoenix', 'Next.js', 'TypeScript', 'GraphQL', 'GCP', 'CircleCI'],
    image: '/scribblevet.png',
    imageAlt: 'ScribbleVet',
    date: '10/2023 – Present',
    link: 'https://www.scribblevet.com/',
  },
  {
    title: 'Owner & Developer',
    employer: 'Laslow Labs',
    description:
      'Built the Casino Mobile monorepo — a shared Expo/React Native factory for shipping multiple casino apps on one stack. Turborepo workspaces, pure TypeScript game engines, and Clawish agent docs keep conventions explicit for humans and coding agents alike.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Turborepo', 'Bun', 'NativeWind', 'Firebase', 'EAS'],
    image: '/laslowlabs.png',
    imageAlt: 'Laslow Labs',
    date: '01/2023 – Present',
    link: 'https://laslowlabs.com/',
  },
  {
    title: 'Senior Software Engineer',
    employer: 'Age of Learning',
    description:
      'Upgraded the tools front-end framework from AngularJS in-house framework AoflJS. Used Neptune graph database for an adaptive learning engine.',
    stack: ['JavaScript', 'PHP', 'MySql', 'AWS', 'Docker', 'Jenkins'],
    image: '/age_of_learning.jpeg',
    imageAlt: 'Age of Learning',
    date: '2018 - 2022',
    link: 'https://ageoflearning.com/',
  },
  {
    title: 'Software Engineer III',
    employer: 'Age of Learning',
    description:
      'Developed a tools framework in AngularJS. Helped launch the Adventure Academy Product. Built a tool that helped activities and lessons become more curriculum driven.',
    stack: ['JavaScript', 'PHP', 'MySql', 'AWS', 'Docker', 'Jenkins'],
    image: '/age_of_learning.jpeg',
    imageAlt: 'Age of Learning',
    date: '2015 - 2018',
    link: 'https://ageoflearning.com/',
  },
  {
    title: 'Software Engineer II',
    employer: 'Age of Learning',
    description:
      'Worked with team to rewrite ABCMouse to HTML5 and JavaScript. Developed a tool that converted Flash animations to JavaScript Canvas.',
    stack: ['JavaScript', 'PHP', 'MySql', 'Flash', 'ActionScript'],
    image: '/age_of_learning.jpeg',
    imageAlt: 'Age of Learning',
    date: '2013 - 2015',
    link: 'https://ageoflearning.com/',
  },
  {
    title: 'Flash Developer',
    employer: 'Age of Learning',
    description: "Designed and implemented key features of ABCMouse's meta-game and mini games.",
    stack: ['Flash', 'ActionScript', 'PHP', 'MySql'],
    image: '/age_of_learning.jpeg',
    imageAlt: 'Age of Learning',
    date: '2010 - 2013',
    link: 'https://abcmouse.com/',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'ScribbleVet Platform',
    description:
      'cloud-scribble monorepo tying together the Elixir API and Next.js frontend with submodule-based local dev, GCP secret sync, and automated CI guardrails.',
    stack: ['Elixir', 'Phoenix', 'Next.js', 'TypeScript', 'GCP', 'Shell'],
    image: '/scribblevet.png',
    imageAlt: 'ScribbleVet',
    date: '10/2023 – Present',
    link: 'https://www.scribblevet.com/',
    github: 'https://github.com/Kairo-Care/cloud-scribble',
  },
  {
    title: 'Scribble Web',
    description:
      'Next.js frontend for ScribbleVet — practice subscriptions, SSO, mobile signing workflows, and the primary web experience for veterinary clinics.',
    stack: ['Next.js', 'TypeScript', 'Bun', 'Tailwind', 'Vercel'],
    image: '/scribblevet.png',
    imageAlt: 'Scribble Web',
    date: '10/2023 – Present',
    link: 'https://www.scribblevet.com/',
    github: 'https://github.com/Kairo-Care/scribble-next',
  },
  {
    title: 'Scribble API',
    description:
      'Elixir/Phoenix backend powering ScribbleVet — AI-assisted SOAP notes, subscription billing, care cards, webhooks, and practice management APIs.',
    stack: ['Elixir', 'Phoenix', 'PostgreSQL', 'GraphQL', 'Stripe'],
    image: '/scribblevet.png',
    imageAlt: 'Scribble API',
    date: '10/2023 – Present',
    link: 'https://www.scribblevet.com/',
    github: 'https://github.com/Kairo-Care/api',
  },
  {
    title: 'QA Party',
    description:
      'AI-powered release tooling that diffs staging vs production across multiple repos and generates QA test plans, deployment notes, and regression checklists.',
    stack: ['TypeScript', 'GitHub Actions', 'Claude', 'Bun'],
    image: '/scribblevet.png',
    imageAlt: 'QA Party',
    date: '2025 - Present',
    link: 'https://github.com/Kairo-Care/qa-party',
    github: 'https://github.com/Kairo-Care/qa-party',
  },
  {
    title: 'Casino Mobile',
    description:
      'Laslow Labs monorepo for casino mobile apps — shared Expo shell, pure TypeScript game engines, ads/IAP/compliance packages, and Clawish docs for agent-friendly conventions.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Turborepo', 'Bun', 'NativeWind', 'EAS'],
    image: '/CM-icon.png',
    imageAlt: 'Casino Mobile',
    date: '01/2023 – Present',
    link: 'https://laslowlabs.com/',
    github: 'https://github.com/slowshi/casino-mobile',
  },
  {
    title: 'AofL JS',
    description:
      'Contributing member in an open sourced JavaScript Framework built to serve the needs of Age of Learning.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Lit', 'Web Components'],
    image: '/aofljs.png',
    imageAlt: 'AoflJS',
    date: '2018',
    link: 'https://ageoflearning.github.io/aofl/#/',
    github: 'https://github.com/AgeOfLearning/aofl',
  },
]
