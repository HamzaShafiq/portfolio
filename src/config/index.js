module.exports = {
  siteTitle: 'Hamza Shafiq | Senior Software Engineer',
  siteDescription:
    'Full Stack Developer with 4 years of experience, highly effective at developing new programs and fixing problems with existing systems. Proficient in Vue, Ruby On Rails, Python, React, Angular and agile methodology.',
  siteKeywords:
    'Hamza Shafiq, HamzaShafiq, hamzashafiq44@gmail.com, software engineer, front-end engineer, full stack developer, full stack, javascript, vue developer, web developer, vue developer',
  siteUrl: 'https://www.hamzashafiq.online/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Hamza Shafiq',
  location: 'Lahore, Pakistan',
  email: 'hamzashafiq44@gmail.com',
  github: 'https://github.com/HamzaShafiq',
  twitterHandle: '@hamzashafiq44',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/HamzaShafiq',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hamzashafiq44/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
