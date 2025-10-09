import { Mail, User,  Code, Briefcase, FolderKanban } from "lucide-react";
import {

  client_1,
  client_2,
  client_3,
  client_4,
  
  dribbleIcon,

  figmaIcon,
 
  reactIcon,
  nextIcon,
  nextJS,
  githubIcon,
 
  typeScriptIcon,
  expressIcon,
  nodeIcon,
  tailwindIcon,
  mongoIcon,
  express,

  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
 
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
 
  vortexLogo,
  webDesignIcon,
  webDevIcon,
 
  XLogo,

} from "@/app/assets/assets";
import { Github, Instagram, Linkedin } from 'lucide-react'



import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes,
   mySkillsTypes, socialBrandsTypes, testimonialsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";
export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User size={18} />,
  },
  {
    id: 2,
    title: "Skills",
    href: "/skills",
    icon: <Code size={18} />,
  },
  {
    id: 3,
    title: "Experience",
    href: "/experience",
    icon: <Briefcase size={18} />,
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
    icon: <FolderKanban size={18} />,
  },
  // {
  //   id: 5,
  //   title: "Services",
  //   href: "/services",
  //   icon: <Zap size={18} />,
  // },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
    icon: <Mail size={18} />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: <Instagram size={22} />,
    link: 'https://www.instagram.com/'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/awais-ahmad01'
  },
   {
    id: 3,
    title: 'Github',
    icon: <Linkedin size={22} />,
    link: 'https://www.linkedin.com/in/awais-ahmad01'
  },
  // {
  //   id: 3,
  //   title: 'Twitter',
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
  //       <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
  //     </svg>
  //   ),
  //   link: 'https://www.twitter.com/psparwez'
  // }
]

// export const socialBrands: socialBrandsTypes[] = [
//   {
//     id: 1,
//     name: "Discord",
//     icon: discord,
//     link: "https://discord.com",
//   },
//   {
//     id: 2,
//     name: "Dribbble",
//     icon: dribble,
//     link: "https://dribbble.com",
//   },
//   {
//     id: 3,
//     name: "Facebook",
//     icon: facebook,
//     link: "https://facebook.com",
//   },
//   {
//     id: 4,
//     name: "Pinterest",
//     icon: pinterest,
//     link: "https://pinterest.com",
//   },
//   {
//     id: 5,
//     name: "SnapChat",
//     icon: snapchat,
//     link: "https://snapchat.com",
//   },
//   {
//     id: 6,
//     name: "Spotify",
//     icon: spotify,
//     link: "https://open.spotify.com",
//   },
// ];





export const socialBrands: socialBrandsTypes[] = [
  // {
  //   id: 1,
  //   name: "HTML5",
  //   icon: <Code2 size={20} />,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  // },
  // {
  //   id: 2,
  //   name: "CSS3",
  //   icon: <Palette size={20} />,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  // },
  // {
  //   id: 3,
  //   name: "JavaScript",
  //   icon: <FileCode size={20} />,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // },
  // {
  //   id: 4,
  //   name: "TypeScript",
  //   icon: <Braces size={20} />,
  //   link: "https://www.typescriptlang.org",
  // },
  // {
  //   id: 5,
  //   name: "React.js",
  //   icon: <Atom size={20} />,
  //   link: "https://react.dev",
  // },
  // {
  //   id: 6,
  //   name: "Next.js",
  //   icon: <Layers size={20} />,
  //   link: "https://nextjs.org",
  // },
  // {
  //   id: 7,
  //   name: "Node.js",
  //   icon: <Server size={20} />,
  //   link: "https://nodejs.org",
  // },
  // {
  //   id: 8,
  //   name: "Express.js",
  //   icon: <Workflow size={20} />,
  //   link: "https://expressjs.com",
  // },
  // {
  //   id: 9,
  //   name: "MongoDB",
  //   icon: <Database size={20} />,
  //   link: "https://www.mongodb.com",
  // },
  // {
  //   id: 10,
  //   name: "Tailwind CSS",
  //   icon: <Wind size={20} />,
  //   link: "https://tailwindcss.com",
  // },
  // {
  //   id: 11,
  //   name: "Material UI",
  //   icon: <Box size={20} />,
  //   link: "https://mui.com",
  // },
  // {
  //   id: 12,
  //   name: "GitHub",
  //   icon: <Github size={20} />,
  //   link: "https://github.com",
  // },
  // {
  //   id: 13,
  //   name: "Figma",
  //   icon: <Figma size={20} />,
  //   link: "https://www.figma.com",
  // },
  // {
  //   id: 14,
  //   name: "Postman",
  //   icon: <Webhook size={20} />,
  //   link: "https://www.postman.com",
  // },

  {
    id: 1,
    title: "React.js",
   
    logo: reactIcon, 
    link: "https://react.dev",
  },
 
  {
    id: 2,
    title: "TypeScript",
   
    logo: typeScriptIcon,
    link: "https://www.typescriptlang.org",
  },
  {
    id: 3,
    title: "Node.js",
   
    logo: nodeIcon,
    link: "https://nodejs.org",
  },
  {
    id: 4,
    title: "MongoDB",
  
    logo: mongoIcon,
    link: "https://www.mongodb.com",
  },
   {
    id: 5,
    title: "Next.js",
   
    logo: nextJS,
    link: "https://nextjs.org",
  },
  {
    id: 6,
    title: "Tailwind CSS",
   
    logo: tailwindIcon,
    link: "https://tailwindcss.com",
  },
  {
    id: 7,
    title: "Express.js",
    
    logo: express,
    link: "https://expressjs.com",
  },
  {
    id: 8,
    title: "GitHub",
    
    logo: githubIcon,
    link: "https://github.com",
  },
  {
    id: 9,
    title: "Figma",
   
    logo: figmaIcon,
    link: "https://www.figma.com",
  },


];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 45,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 2,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "May 2025 - June 2025",
    title: "Frontend Developer",
    company: "Complixen",
    label: 'Tech Firm',
    description: "Developed and maintained user interfaces for a trust management platform that automates GRC tasks, compliance audits, and evidence collection for SOC 2, ISO 27001, HIPAA, and GDPR frameworks.",
    link: "complixen.com",
    logo: vortexLogo // You'll need to replace this with Complixen's logo
  }
]



export const mySkills: mySkillsTypes[] = [
  {
    id: 1,
    title: "React.js",
    description: "JavaScript Library",
    logo: reactIcon, // You'll need to import appropriate logos
    link: "https://react.dev",
  },
  {
    id: 2,
    title: "Next.js",
    description: "React Framework",
    logo: nextIcon,
    link: "https://nextjs.org",
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Programming Language",
    logo: typeScriptIcon,
    link: "https://www.typescriptlang.org",
  },
  {
    id: 4,
    title: "Node.js",
    description: "JavaScript Runtime",
    logo: nodeIcon,
    link: "https://nodejs.org",
  },
  {
    id: 5,
    title: "MongoDB",
    description: "NoSQL Database",
    logo: mongoIcon,
    link: "https://www.mongodb.com",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    description: "CSS Framework",
    logo: tailwindIcon,
    link: "https://tailwindcss.com",
  },
  {
    id: 7,
    title: "Express.js",
    description: "Node.js Framework",
    logo: expressIcon,
    link: "https://expressjs.com",
  },
  {
    id: 8,
    title: "GitHub",
    description: "Version Control",
    logo: githubIcon,
    link: "https://github.com",
  },
  {
    id: 9,
    title: "Figma",
    description: "Interface Design Tool",
    logo: figmaIcon,
    link: "https://www.figma.com",
  },
]

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    icon: webDesignIcon,
    link: '/services'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    icon: webDevIcon,
    link: '/services'
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    icon: graphicDesignIcon,
    link: '/services'
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    icon: seoOptIcon,
    link: '/services'
  }
]

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Imaginify',
    description: 'AI-powered image SaaS platform featuring advanced editing tools including image restoration, recoloring, generative fill, object removal, and background removal. Includes authentication, credit-based transformations, Stripe payment integration, community showcase, and responsive UI/UX built with Next.js and TypeScript.',
    link: 'imaginify-app.vercel.app',
    image: project_1, // Replace with actual Imaginify screenshot
  },
  {
    id: 2,
    title: 'Diverse Den Platform',
    description: 'Comprehensive multi-role e-commerce platform supporting Super Admin, Branch Owner, Salesperson, Customer, and Rider roles with centralized inventory management. Features POS system integration, e-commerce website, and mobile app operations for seamless product management across all touchpoints.',
    link: 'diverseden.com',
    image: project_2, // Replace with actual Diverse Den screenshot
  },
  {
    id: 3,
    title: 'Mindmap',
    description: 'Mental wellness journaling application designed to help users track mood trends and generate AI-powered reflections using Gemini API. Features include Google OAuth 2.0 authentication, email verification, comprehensive mood tracking, and personal journaling history to support mental health awareness.',
    link: 'mindmap-app.vercel.app',
    image: project_3, // Replace with actual Mindmap screenshot
  },
  {
    id: 4,
    title: 'PeerLink',
    description: 'Real-time video chat platform enabling seamless peer-to-peer communication in virtual rooms. Built with WebRTC and Socket.IO for smooth video streaming, live chat functionality, and participant management with room-based connections for enhanced collaborative experiences.',
    link: 'peerlink.vercel.app',
    image: project_4, // Replace with actual PeerLink screenshot
  }
]

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description: 'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description: 'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description: 'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description: 'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Web Design',
    price: '$50',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    completedWorks: '25+',
    experience: '5+',
    totalHoursWorked: '500 hours',
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: 'Web Dev',
    price: '$60',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    completedWorks: '30+',
    experience: '6+',
    totalHoursWorked: '420 hours',
    icon: webDevIcon,
  },
  {
    id: 3,
    service: 'Graphic Design',
    price: '$40',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    completedWorks: '40+',
    experience: '8+',
    totalHoursWorked: '328 hours',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$70',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    completedWorks: '20+',
    experience: '4+',
    totalHoursWorked: '223 hours',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer: "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer: "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  // {
  //   question: "Can you optimize my website?",
  //   answer: "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  // },
  // {
  //   question: "What are your payment terms?",
  //   answer: "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  // },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
  {
    platform: "Dribbble",
    followers: "3.2K",
    url: "https://dribbble.com/",
    icon: dribbleIcon,
  },
];