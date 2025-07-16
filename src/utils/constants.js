// src/utils/constants.js 

import havmorImage from "../assets/images/havmor.jpg";
import CohereImage from "../assets/images/cohere.png"; 
import ExamApp from "../assets/images/elogixa.jpg";
import ChatFlowImage from "../assets/images/chatflow.png";


export const PERSONAL_INFO = {
  name: "Adarsh P",
  title: "Full Stack Developer",
  email: "adarshpacharya268@gmail.com",
  phone: "+91 7204729268",
  location: "Karkala, Karnataka, India",
  bio: "Hey, I’m Adarsh 👨‍💻 — a Full Stack Developer who turns ideas into fast, functional, and slick web apps. I code with React, Django, and Python, build smart systems, and solve real-world problems with style. Let’s create something epic 🚀.",
  resume: "/resume.pdf"
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Adarsh203-cmd",
  linkedin: "https://www.linkedin.com/in/adarsh-p-b78366250/"
};

// Enhanced Skills structure for the animated Skills component
export const SKILLS = {
  frontend: [
    "JavaScript", 
    "React.js", 
    "HTML5", 
    "CSS3", 
    "Tailwind CSS",
    "Responsive Design"
  ],
  backend: [
    "Python", 
    "Django", 
    "Django REST Framework",
    "RESTful APIs", 
    "MySQL", 
    "PostgreSQL",
    "Firebase"
  ],
  tools: [
    "Git", 
    "VS Code", 
    "Postman", 
    "Visual Studio",
    "Oracle Database",
    "Cohere LLM API"
  ]
};

// Legacy skills structure (keep for resume/other sections if needed)
export const DETAILED_SKILLS = {
  languages: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML", "CSS"],
  frameworks: ["Django", "Django REST Framework"],
  librariesAndTools: ["React.js", "Git", "VS Code", "Visual Studio", "Postman", "Tailwind CSS"],
  apisAndIntegrations: ["RESTful APIs", "Cohere LLM API", "JWT Authentication"],
  databases: ["MySQL", "PostgreSQL", "Oracle", "Firebase"],
  productivityTools: ["Microsoft Word", "PowerPoint", "Excel"]
};

export const EDUCATION = [
  {
    id: 1,
    institution: "Manipal Institute of Technology, Manipal",
    degree: "Master of Computer Applications (MCA)",
    year: "2023 - 2025",
    location: "Manipal, Karnataka, India",
    status: "Pursuing"
  },
  {
    id: 2,
    institution: "Sri Bhuvanendra College, Karkala",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2020 - 2023",
    location: "Karkala, Karnataka, India",
    status: "Completed"
  }
];

// Enhanced Projects with categories and additional fields for animations
export const PROJECTS = [
  {
    id: 1,
    title: "ChatFlow - Real-time Chat Application",
    duration: "Dec 2024",
    teamSize: 1,
    category: "fullstack",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT", "Firebase"],
    description: "Developed a comprehensive real-time messaging application with social networking features similar to WhatsApp. Implemented Socket.io for real-time communication, JWT authentication, and Firebase integration for file storage. Features include private messaging, group chats, follow system, and file sharing capabilities.",
    detailedDescription: "A full-featured MERN stack chat application demonstrating advanced real-time communication and social networking capabilities. The system includes secure authentication, real-time messaging with Socket.io, social features like follow/unfollow system, group chat functionality, and file sharing with Firebase integration. Built with scalable architecture and modern UI/UX principles.",
    liveUrl: null,
    githubUrl: "https://github.com/Adarsh203-cmd/chatflow-realtime-chat",
    image: ChatFlowImage,
    featured: true,
    highlights: [
      "Real-time messaging with Socket.io",
      "Social networking features (follow/unfollow)",
      "Group chat and private messaging",
      "File sharing with Firebase integration",
      "JWT-based authentication system",
      "Responsive modern UI design"
    ]
  },
  {
    id: 2,
    title: "Document Q&A Application",
    duration: "Jan 2025",
    teamSize: 1,
    category: "frontend",
    technologies: ["Python", "Cohere LLM API", "JavaScript", "ReactJs","HTML/CSS"],
    description: "Engineered an intelligent web application enabling users to upload Excel files and interact with document content through AI-powered Q&A functionality. Integrated Cohere's Large Language Model API to provide context-aware responses, demonstrating proficiency in NLP and API integration.",
    detailedDescription: "This project showcases the integration of modern AI capabilities with web development. Users can upload Excel documents, and the application processes the content to enable natural language queries. The system uses Cohere's advanced LLM to understand context and provide accurate, relevant answers based on the document content.",
    liveUrl: "https://tranquil-crepe-99fec3.netlify.app/",
    githubUrl: "https://github.com/Adarsh203-cmd/ai-document-query-backend",
    image: CohereImage,
    featured: true,
    highlights: [
      "AI-powered document analysis",
      "Context-aware Q&A system",
      "Seamless file upload handling",
      "Modern responsive design"
    ]
  },
  {
    id: 3,
    title: "Havmore with Us - Inventory Management",
    duration: "Feb 2023 – Apr 2023",
    teamSize: 2,
    category: "fullstack",
    technologies: ["Python", "Django", "HTML/CSS", "javaScript","MySQL"],
    description: "Designed and developed a comprehensive web application for order management and inventory control for an ice cream vendor 'Ram Enterprises- Karkala'. Featured robust backend architecture with Django framework and implemented secure database operations, reducing manual intervention by 60%.",
    detailedDescription: "A complete business solution for inventory and order management, specifically designed for the ice cream industry. The system handles real-time inventory tracking, order processing, billing, and provides detailed analytics for business insights. Built with scalability and security in mind.",
    liveUrl: null,
    githubUrl: "https://github.com/Adarsh203-cmd/havmore-with-us",
    image: havmorImage,
    featured: true,
    highlights: [
      "60% reduction in manual processes",
      "Real-time inventory tracking",
      "Automated billing system",
      "Business analytics dashboard"
    ]
  },
  {
    id: 4,
    title: "Exam-Room Application",
    duration: "Jan 2025 – Present",
    teamSize: "Team Project",
    category: "fullstack",
    technologies: ["Django", "PostgreSQL", "React.js", "JWT", "Axios"],
    description: "Contributing to a live production system for online examination management. Developed JWT-based authentication, candidate enrollment module, and core exam-taker functionality. Participated in requirement analysis using MoSCoW and RICE methodologies.",
    detailedDescription: "Currently working on a comprehensive examination platform as part of my internship at Elogixa India. The system handles the complete examination lifecycle from candidate registration to result processing. My contributions include secure authentication systems, user management, and core examination workflows.",
    liveUrl: null,
    githubUrl: null,
    image: ExamApp,
    featured: false,
    highlights: [
      "Live production system contribution",
      "JWT-based security implementation",
      "Modern React.js frontend",
      "PostgreSQL database optimization"
    ]
  }
];

// Work Experience for About/Resume sections
export const EXPERIENCE = [
  {
    id: 1,
    company: "Elogixa India Private Limited",
    position: "Software Development Intern",
    duration: "Jan 2025 – Present",
    location: "Remote",
    type: "Internship",
    description: "Contributing to live production systems with focus on full-stack development using Django, PostgreSQL, and React.js. Implemented JWT-based authentication and developed core application modules.",
    achievements: [
      "Contributed to requirement analysis using MoSCoW and RICE methodologies",
      "Developed secure JWT-based authentication system",
      "Built candidate enrollment and exam-taker modules",
      "Integrated frontend with REST APIs using Axios"
    ]
  }
];

// Stats for About section (optional - for animated counters)
export const STATS = [
  {
    number: 4, // Updated from 3 to 4
    label: "Projects Completed",
    suffix: "+"
  },
  {
    number: 2,
    label: "Years of Learning",
    suffix: "+"
  },
  {
    number: 10,
    label: "Technologies Mastered",
    suffix: "+"
  },
  {
    number: 1,
    label: "Happy Clients",
    suffix: ""
  }
];

// Testimonials (optional - for future use)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Project Collaborator",
    role: "Team Member - Havmore Project",
    content: "Adarsh brings great technical skills and problem-solving abilities to every project. His attention to detail and commitment to clean code makes him a valuable team member.",
    avatar: "/api/placeholder/60/60"
  }
];

// Contact Information
export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  availability: "Open to internships and full-time opportunities",
  preferredContact: "email"
};

// Navigation Menu Items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" }
];

// SEO and Meta Information
export const SEO_INFO = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: "Full Stack Developer specializing in Python, Django, React.js, and modern web technologies. Currently pursuing MCA at MIT Manipal.",
  keywords: [
    "Full Stack Developer",
    "Python Developer", 
    "Django Developer",
    "React Developer",
    "Web Developer",
    "Software Engineer",
    "MIT Manipal",
    "Adarsh P"
  ],
  author: PERSONAL_INFO.name,
  siteUrl: "https://adarsh-portfolio.vercel.app" // Update with your actual domain
};