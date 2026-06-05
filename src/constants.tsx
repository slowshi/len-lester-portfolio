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
    'Full-stack engineer on Elixir/Phoenix and Next.js platforms, plus React Native apps with TypeScript game engines, billing integrations, and release automation.',
  github: 'https://github.com/slowshi',
  linkedin: 'https://www.linkedin.com/in/len-lester/',
  email: 'lenster921@gmail.com',
  resume: '/resume/lenlester_resume.pdf',
}

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    employer: 'ScribbleVet',
    description:
      'Full-stack work on an AI veterinary documentation platform across Elixir/Phoenix API and Next.js web. Built Stripe subscription billing, care cards, and practice management endpoints; delivered SSO, mobile signing, and clinic-facing auth flows on the frontend. Hardened multi-tenant security and compliance paths for production traffic. Improved release quality with CI guardrails, automated dev environments, and AI-assisted staging/production validation.',
    stack: ['Elixir', 'Phoenix', 'Next.js', 'TypeScript', 'GraphQL', 'Stripe', 'GCP', 'CircleCI'],
    image: '/scribblevet.png',
    imageAlt: 'ScribbleVet',
    date: '10/2023 – Present',
    link: 'https://instinct.vet/news/instinct-science-scribblevet-acquisition-2026/',
  },
  {
    title: 'Owner & Developer',
    employer: 'Laslow Labs',
    description:
      'Built five consumer mobile apps on a shared React Native / Expo stack with pure TypeScript game engines decoupled from UI. Consolidated legacy apps into one monorepo with shared packages for ads, in-app purchases, theming, analytics, and over-the-air updates. Shipped coordinated iOS and Android releases with RevenueCat monetization and store compliance tooling.',
    stack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Firebase', 'EAS', 'RevenueCat'],
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
      'Full-stack platform work: Stripe subscription billing and seat reconciliation in Elixir/Phoenix, practice workflows and SSO in Next.js, mobile signing for field use. Security hardening, multi-tenant boundaries, and compliance for clinic traffic. Release automation with CI guardrails and AI-assisted staging vs production validation.',
    stack: ['Elixir', 'Phoenix', 'Next.js', 'TypeScript', 'GraphQL', 'Stripe', 'GCP'],
    image: '/scribblevet.png',
    imageAlt: 'ScribbleVet',
    date: '10/2023 – Present',
    link: 'https://instinct.vet/news/instinct-science-scribblevet-acquisition-2026/',
    github: '',
  },
  {
    title: 'Craps Mobile',
    description:
      "Full craps table simulator with pass/don't, odds, place/lay/buy, field, prop, and hardway bets. Pure TypeScript engine with responsive phone and iPad layouts, session persistence, and premium ad removal.",
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
      'American roulette with minimalist betting UX, haptics, customizable felt colors, and coordinated iOS/Android releases with EAS over-the-air updates.',
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
      'Configurable deck counts and blackjack payouts, split/surrender engine support, basic strategy helpers, and App Store submission hardening from first production release.',
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
      'Jacks-or-better style video poker with hold/draw flow, multi-credit betting, strategy helpers, and tablet-optimized rack layout.',
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
      'Creative writing warm-up app with curated prompt content, animations, large-screen layouts, and premium ad removal on iOS and Android.',
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
