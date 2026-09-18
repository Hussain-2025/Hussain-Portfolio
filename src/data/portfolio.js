export const portfolioData = {
  personal: {
    name: "Hussain Asghar",
    location: "New Delhi, India",
    education: {
      degree: "B.Tech in Information Technology",
      duration: "2023–2027",
      university: "Maharaja Agrasen Institute of Technology (MAIT)",
      college: "MAIT Delhi",
      graduationYear: 2027,
      grade: "CGPA: 9.02 / 10.00"
    },
    schooling: {
      name: "Lovely Public Sr Sec School",
      location: "New Delhi, India",
      details: "10th: 91% | 12th: 93%",
      graduationYear: "Graduated 2023"
    },
    role: "Full Stack & AI Solutions Developer",
    title: "Full Stack Developer & AI Solutions Engineer",
    identity: "Full Stack & AI Developer",
    availability: "Available for Opportunities",
    logoPath: "/logo.jpeg"
  },
  hero: {
    headline: "Architecting Scalable Full-Stack Systems & AI-Driven Platforms.",
    description: "Information Technology undergraduate at MAIT with a 9.02 CGPA. Passionate about engineering high-performance SaaS applications, real-time collaboration engines, and agentic AI pipelines.",
    focusAreas: [
      "Full Stack Development",
      "React 19 & Next.js",
      "Node.js & Express",
      "Google Gemini AI",
      "Socket.IO & WebSockets",
      "Redis Caching",
      "REST APIs & Webhooks",
      "MongoDB & PostgreSQL",
      "Tailwind CSS",
      "Data Structures & Algorithms"
    ]
  },
  stats: [
    { value: "9.02", label: "CGPA (MAIT)" },
    { value: "04", label: "Production SaaS Apps" },
    { value: "02", label: "Work Experiences" },
    { value: "2027", label: "Graduation" }
  ],
  about: {
    text: "An Information Technology undergraduate at Maharaja Agrasen Institute of Technology (MAIT) maintaining a 9.02 CGPA. I specialize in building end-to-end scalable web applications, integrating modern AI models (Gemini API with streaming and tool calling), real-time multiplayer systems via WebSockets, and secure payment pipelines. Constantly sharpening my skills through competitive programming, software architecture design, and production project development.",
    interests: [
      "Full Stack Development",
      "Generative AI & LLMs",
      "Real-Time Multiplayer Systems",
      "System Design & Scalability",
      "API Security & JWT",
      "Database Optimization",
      "Data Structures & Algorithms"
    ]
  },
  skills: {
    categories: [
      {
        name: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "C", "C++", "SQL", "PostgreSQL", "HTML5", "CSS3"]
      },
      {
        name: "Frontend Development",
        items: ["React.js", "Redux Toolkit", "Tailwind CSS", "Context API", "Responsive Design", "Vite"]
      },
      {
        name: "Backend & Systems",
        items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Redis Caching", "JWT Auth", "RBAC"]
      },
      {
        name: "Database & Storage",
        items: ["MongoDB", "Mongoose", "PostgreSQL", "SQL", "Cloudinary"]
      },
      {
        name: "AI & Modern Tech",
        items: ["Google Gemini API", "LLM Function Calling", "Real-Time Streaming", "Prompt Engineering"]
      },
      {
        name: "Core Computer Science",
        items: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "DBMS",
          "OOPs",
          "Computer Networks",
          "System Design"
        ]
      },
      {
        name: "Developer Tools",
        items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"]
      }
    ],
    strengths: [
      "Full-Stack Architecture",
      "Real-Time Collaboration",
      "Agentic AI Integration",
      "RESTful API Design",
      "Cryptographic Webhooks",
      "Problem Solving",
      "Clean Code Practices"
    ]
  },
  projects: [
    {
      id: "01",
      name: "GoRido",
      category: "Mobility & AI",
      type: "Full-Stack Car Rental & AI Booking Platform",
      technology: "React 19, Node.js, Express, MongoDB, Gemini API, Razorpay",
      description: "Full-stack car rental platform with date-overlap availability algorithms, dynamic pricing, Razorpay payment gateway with cryptographic HMAC webhook signature verification, automated PDF invoices (PDFKit), transactional email alerts, and an agentic Gemini AI rental concierge with function calling.",
      liveUrl: "https://gorido.vercel.app/",
      tags: ["React 19", "Node.js", "MongoDB", "Gemini AI", "Razorpay HMAC", "PDFKit", "Tailwind CSS"]
    },
    {
      id: "02",
      name: "SynapseAI",
      category: "Multiplayer AI",
      type: "Real-Time Multi-Model AI Collaboration Platform",
      technology: "React 19, TypeScript, Node.js, Express, MongoDB Atlas, Socket.IO, Gemini API",
      description: "Production multiplayer AI prompt engineering platform with low-latency WebSocket rooms, live presence, color-coded cursors, typing indicators, and zero-buffering comparative token streaming from Google Gemini and alternative LLMs side-by-side with full RBAC admin telemetry.",
      liveUrl: "https://synapseai-lbod.onrender.com/",
      tags: ["Socket.IO", "Multi-Model AI", "Gemini Streaming", "TypeScript", "RBAC", "Recharts"]
    },
    {
      id: "03",
      name: "LinkMind AI",
      category: "Link Intelligence",
      type: "AI URL Shortener & Realtime Analytics Platform",
      technology: "React 19, TypeScript, Node.js, Express, MongoDB, Redis, Socket.IO, Gemini AI",
      description: "Enterprise URL shortener SaaS with sub-5ms Redis-cached redirects, live visitor telemetry via Socket.IO, Google Gemini AI traffic diagnostics, custom alias generation, dynamic QR codes, and role-based administrator moderation.",
      liveUrl: "https://linkmind-ai.onrender.com/dashboard",
      tags: ["Redis Caching", "Socket.IO", "Gemini Analytics", "TypeScript", "MERN Stack", "Tailwind CSS"]
    },
    {
      id: "04",
      name: "MeetMind AI",
      category: "Productivity SaaS",
      type: "AI-Powered Meeting Notes & Task Manager SaaS",
      technology: "React, TypeScript, Node.js, Express, MongoDB, Gemini AI, Tailwind CSS, Socket.IO",
      description: "AI productivity SaaS that converts raw meeting notes into structured summaries, actionable task items, and follow-ups using Google Gemini AI, featuring real-time task board collaboration with Socket.IO and secure HttpOnly cookie JWT authentication.",
      liveUrl: "https://meetmind-sigma.vercel.app/",
      tags: ["Gemini AI", "Task Automation", "Socket.IO", "JWT HttpOnly", "Cloudinary", "TypeScript"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "GoRido",
      role: "Full Stack Developer Intern",
      period: "Jan 2026 – Present",
      location: "Remote",
      points: [
        "Architected a responsive full-stack vehicle rental engine using React 19, Node.js/Express, and MongoDB, implementing real-time vehicle availability checking with date-overlap conflict algorithms, dynamic pricing, and role-based access control.",
        "Engineered secure payment pipeline integrating Razorpay API with raw body HMAC cryptographic webhook signature verification to prevent tampering; automated post-checkout fulfillment via PDFKit dynamic invoices and Nodemailer email confirmations.",
        "Implemented an agentic AI concierge using Google Gemini API with structured tool/function calling (searchCars, checkBookingStatus) to query live database collections in real time with zero hallucination."
      ],
      tags: ["React 19", "Node.js", "Express", "MongoDB", "Gemini API", "Razorpay", "PDFKit"]
    },
    {
      id: "exp-2",
      company: "Prorido",
      role: "SEO Executive Intern",
      period: "April 2025 – July 2025",
      location: "Bengaluru, Karnataka",
      points: [
        "Managed and updated WordPress websites by creating, formatting, and optimizing dynamic pages, blog posts, and multimedia assets.",
        "Built high-quality contextual backlinks and implemented on-page/off-page SEO best practices to improve website organic visibility and search engine rankings."
      ],
      tags: ["WordPress", "SEO", "Content Optimization", "Link Building", "Analytics"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Maharaja Agrasen Institute of Technology (MAIT)",
      period: "2023 – Expected May 2027",
      location: "New Delhi, India",
      score: "CGPA: 9.02 / 10.00",
      highlight: "Focus: Data Structures, Operating Systems, DBMS, System Architecture, Web Technologies"
    },
    {
      degree: "Senior Secondary (12th) & Secondary (10th)",
      institution: "Lovely Public Sr Sec School",
      period: "Graduated 2023",
      location: "New Delhi, India",
      score: "12th: 93% | 10th: 91%",
      highlight: "Science & Computer Science Stream"
    }
  ],
  contact: {
    heading: "Let's build something exceptional.",
    description: "Open to software engineering roles, full-stack internships, and high-impact collaborative projects. Feel free to connect or drop a message.",
    links: {
      github: "https://github.com/Hussain-2025",
      linkedin: "https://www.linkedin.com/in/hussain",
      leetcode: "https://leetcode.com/hussain",
      email: "hussainasghar017@gmail.com",
      phone: "+919953340793",
      whatsapp: "https://wa.me/919953340793?text=Hi%20Hussain%2C%20I%20would%20like%20to%20connect"
    }
  }
};
