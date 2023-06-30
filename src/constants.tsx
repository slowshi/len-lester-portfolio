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
  github?: string
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
  title: 'Software Engineer',
  location: 'Glendale, CA',
  description: "I'm a software developer that loves building web applications and tools.",
  github: 'https://github.com/slowshi',
  linkedin: 'https://www.linkedin.com/in/len-lester/',
  email: 'lenster921@gmail.com',
  resume: '/resume/lenlester_resume.pdf',
}

export const experience: ExperienceItem[] = [
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
    title: 'Doopmarketeer',
    description:
      'A tool that allows Doodles NFT holders the ability to view the history of interactions within the ecosystem.',
    stack: ['NextJS', 'ChakraUI', 'Redux', 'EthersJS', 'HTML', 'CSS', 'TypeScript', 'NodeJS'],
    image: '/doopmarketeer.png',
    imageAlt: 'Doopmarketeer',
    date: '2023',
    link: 'https://doopmarketeer.app/',
    github: 'https://github.com/slowshi/doopmarketeer-next',
  },
  {
    title: 'QR Code Wallpaper',
    description: 'An app to generate a QR code that can be downloaded and used as your lockscreen.',
    date: '2023',
    stack: ['NextJS', 'Tailwind', 'HTML', 'CSS', 'TypeScript'],
    image: '/qr-codes.png',
    imageAlt: 'QR Code Wallpaper',
    link: 'https://qr-code-wallpapers.vercel.app/',
    github: 'https://github.com/slowshi/qr-code-wallpapers',
  },
  {
    title: 'Fohmo',
    description:
      'Built with ReactJS and Ethers, fohmo allowed users to monitor their balances of OlympusDAO and various OHM forks that launched in 2021',
    date: '2021',
    stack: ['ReactJS', 'Redux', 'EthersJS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    image: '/fohmo.png',
    imageAlt: 'Fohmo',
    link: 'https://fohmo.io/',
    github: 'https://github.com/slowshi/fohmo-frontend',
  },
  {
    title: 'AofL JS',
    description:
      'Contributing member in an open sourced JavaScript Framework built server the needs of Age of Learning.',
    date: '2018',
    stack: ['HTML', 'CSS', 'JavaScript', 'Lit', 'Web Components'],
    image: '/aofljs.png',
    imageAlt: 'AoflJS',
    link: 'https://ageoflearning.github.io/aofl/#/',
    github: 'https://github.com/AgeOfLearning/aofl',
  },
  {
    title: 'Adventure Academy',
    description: "Adventure Academy's landing page was built using AoflJS.",
    date: '2019',
    stack: ['HTML', 'CSS', 'JavaScript', 'Lit'],
    image: '/aa_icon.png',
    imageAlt: 'AoflJS',
    link: 'https://ageoflearning.github.io/aofl/#/',
    github: '',
  },
]
