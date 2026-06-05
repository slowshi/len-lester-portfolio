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
      'Full-stack engineer on ScribbleVet’s AI veterinary documentation platform. Shipped subscription billing v2, enterprise seat reconciliation, and admin tooling on the Elixir API; hardened Stripe webhooks, practice-scoped uploads, and GraphQL tenant boundaries. On the web side, built SSO redirect validation, subscription UX, care card workflows, and mobile signing paths. Maintained Coder workspace automation, CI guardrails, and QA Party — AI release diffing that generates test plans across staging and production.',
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
      'Built and shipped four casino simulators from a shared Expo/React Native monorepo — pure TypeScript game engines, Turborepo workspaces, ads/IAP via RevenueCat and AdMob, and store-ready compliance across iOS and Android. Migrated legacy standalone apps into one factory, wired Firebase analytics, tuned iPad layouts and session persistence, and authored Clawish docs so human and agent contributors share the same conventions.',
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
    title: 'ScribbleVet',
    description:
      'AI veterinary documentation platform — shipped subscription billing v2, enterprise seat reconciliation, and Stripe webhook hardening on the Elixir API; SSO, care cards, and mobile signing on the Next.js web app; plus Coder workspace automation, CI guardrails, and QA Party release tooling that diffs staging vs production and auto-generates test plans.',
    stack: ['Elixir', 'Phoenix', 'Next.js', 'TypeScript', 'GraphQL', 'Stripe', 'GCP'],
    image: '/scribblevet.png',
    imageAlt: 'ScribbleVet',
    date: '10/2023 – Present',
    link: 'https://www.scribblevet.com/',
    github: 'https://github.com/Kairo-Care/cloud-scribble',
  },
  {
    title: 'Craps Mobile',
    description:
      'Full craps table simulator with pass/don’t, odds, place/lay/buy, field, prop, and hardway bets. Rebuilt on the shared monorepo with responsive phone/iPad layouts, session persistence, and premium ad removal on iOS and Android.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'RevenueCat', 'NativeWind'],
    image: '/CM-icon.png',
    imageAlt: 'Craps Mobile',
    date: '01/2023 – Present',
    link: 'https://www.laslowlabs.com/craps-mobile',
    github: '',
  },
  {
    title: 'Roulette Mobile',
    description:
      'American roulette with minimalist betting UX, haptics, customizable felt colors, and production OTA/store release paths kept in sync across iOS and Android builds.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'RevenueCat', 'EAS'],
    image: '/RM-icon.png',
    imageAlt: 'Roulette Mobile',
    date: '01/2023 – Present',
    link: 'https://www.laslowlabs.com/roulette-mobile',
    github: '',
  },
  {
    title: 'Blackjack Mobile',
    description:
      'Newest shipped casino title — configurable deck counts and blackjack payouts, split/surrender engine support, basic strategy helpers, and App Store submission hardening from first production release.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'RevenueCat', 'Firebase'],
    image: '/BJM-icon.png',
    imageAlt: 'Blackjack Mobile',
    date: '01/2023 – Present',
    link: 'https://www.laslowlabs.com/blackjack-mobile',
    github: '',
  },
  {
    title: 'Video Poker Mobile',
    description:
      'Jacks-or-better style video poker with hold/draw flow, multi-credit betting, strategy helpers, and tablet-optimized rack layout ported to the shared Expo shell.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'RevenueCat', 'NativeWind'],
    image: '/VPM-icon.png',
    imageAlt: 'Video Poker Mobile',
    date: '01/2023 – Present',
    link: 'https://www.laslowlabs.com/video-poker-mobile',
    github: '',
  },
  {
    title: 'Writing Prompt Generator',
    description:
      'Creative writing warm-up app with curated prompt content, animations, large-screen layouts, and premium ad removal — helping writers jumpstart sessions on iOS and Android.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AdMob', 'RevenueCat'],
    image: '/WPG-icon.png',
    imageAlt: 'Writing Prompt Generator',
    date: '01/2023 – Present',
    link: 'https://www.laslowlabs.com/writing-prompt-generator',
    github: '',
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
