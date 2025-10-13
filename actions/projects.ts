export const Projects = [

  {
    id: "project-z-job-portal",
    title: "Zipher.lk",
    description: `
    <h2><b>Why I Chose This Project</b></h2>
    <p>
      I developed <strong>Project Z</strong> to address the growing need for a centralized job and HRM platform. 
      Many job portals lack real HR management integration, so I aimed to build a system connecting 
      job seekers and employers with automation, scalability, and cloud integration.
    </p>

    <h3>Evolution to Microservices</h3>
    <p>
      Initially, <strong>Zipher.lk</strong> was built using a <strong>monolithic architecture</strong>. 
      As the platform grew, scalability and service management became more critical — leading to a 
      complete migration to a <strong>microservices architecture</strong>. 
      This transition allows independent service deployment, better fault isolation, and enhanced 
      system performance, aligning with enterprise-level scalability standards.
    </p>

    <h3>Benefits & Future Enhancements</h3>
    <p>
      The platform simplifies hiring, job posting, and application tracking for both users and companies. 
      The next phase involves building a <strong>mobile app</strong> with push notifications for job alerts 
      and integrating <strong>AI-based candidate matching</strong> and <strong>resume parsing</strong> 
      features for employers.
    </p>

    <h3>Technology Stack</h3>
    <p>
      Powered by <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> on the backend, 
      with a <strong>React</strong> frontend styled using <strong>Tailwind CSS</strong>. 
      The new microservices setup uses <strong>Docker</strong> for containerization, 
      <strong>Kafka</strong> (need to implementation) for inter-service communication, and <strong>JWT</strong> for secure authentication.
    </p>
  `,
    short_description: "A scalable job portal evolving from a monolithic structure to a microservices-based architecture.",
    bgImage: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Mongoose",
      "Tailwind CSS",
      "Docker",
      "Kafka",
      "JWT",
      "AWS",
      "CI/CD"
    ],
    github: "",
    live: "https://zipher.lk",
    date: "2025",
    project_status: false,
    architecture: "Microservices",
    frammework: "Turborepo"
  },
  {
    id: "advanced-ecommerce-platform",
    title: "Advanced E-Commerce Platform – Microservices Architecture",
    description: `
    <h3>Why I Chose This Project</h3>
    <p>
      I started the <strong>Advanced E-Commerce Platform</strong> project to gain a deep, practical 
      understanding of <strong>microservices architecture</strong> and how modern web applications 
      can scale efficiently across distributed services. This project focuses on modularity, 
      scalability, and cloud-native deployment using a <strong>monorepo (Turborepo)</strong> structure.
    </p>

    <h3>Benefits & Future Enhancements</h3>
    <p>
      The platform offers high performance through <strong>Kafka-based communication</strong>, 
      <strong>real-time updates</strong> via WebSockets, and <strong>AI-powered recommendations</strong> 
      using TensorFlow.js. Upcoming improvements include enhanced <strong>observability</strong> 
      with Prometheus & Grafana, <strong>multi-region deployment</strong>, and advanced <strong>CI/CD automation</strong>.
    </p>

    <h3>Technology Stack</h3>
    <p>
      Built with <strong>Express.js</strong> for the backend and <strong>Next.js</strong> for the frontend. 
      Uses <strong>MongoDB</strong> and <strong>Redis</strong> as databases, <strong>Kafka</strong> 
      for event-driven messaging, <strong>TensorFlow</strong> for ML integrations, and 
      <strong>Docker</strong> for containerization. The system is managed through 
      <strong>AWS</strong> deployment, <strong>Cloudflare</strong> for domain management, 
      and <strong>CI/CD pipelines</strong> for continuous integration.
    </p>
  `,
    short_description: "A cloud-native e-commerce platform built with microservices architecture and Turborepo for scalability and modularity.",
    bgImage: "https://images.pexels.com/photos/6995134/pexels-photo-6995134.jpeg",
    technologies: [
      "Next.js",
      "Express.js",
      "TensorFlow",
      "Kafka",
      "MongoDB",
      "Redis",
      "Firebase",
      "Docker",
      "Prisma ORM",
      "Turborepo"
    ],
    github: "",
    live: "",
    date: "2025",
    project_status: false,
    architecture: "Microservices",
    frammework: "Turborepo"
  },
  {
    id: "zipher-media-social-platform",
    title: "Zipher Media – Social Platform",
    description: `
    <h3>Why I Chose This Project</h3>
    <p>
      I created <strong>Zipher Media</strong> as a prototype for a modern social media experience — later planned 
      to integrate into <strong>Zypher</strong> as the "Echos" feature. 
      The goal was to explore content sharing, engagement, and community-building tools within a minimal, 
      distraction-free UI.
    </p>

    <h3>Benefits & Future Enhancements</h3>
    <p>
      Zipher Media allows users to post updates, share media, and interact through likes and comments 
      in real-time. The next phase involves adding <strong>AI-powered content recommendations</strong>, 
      <strong>user tagging</strong>, and a <strong>progressive mobile version</strong> 
      with push notifications.
    </p>

    <h3>Technology Stack</h3>
    <p>
      Developed using <strong>React</strong> and <strong>JavaScript</strong> for the frontend, 
      styled with <strong>Tailwind CSS</strong> and enhanced with <strong>Framer Motion</strong> for animations. 
      <strong>Redux</strong> is used for state management, ensuring smooth interactions and scalable structure.
    </p>
  `,
    short_description: "A modern social media prototype focusing on content sharing, engagement, and a distraction-free UI.",
    bgImage: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",
    technologies: ["React", "Clerk", "Express.js", "Mongoose", "MongoDB", "Node.js", "Cloudinary", "Redux", "Axios", "Inngest"],
    github: "https://github.com/DS-Vijayapala/Project-ZM",
    live: "",
    date: "2025",
    project_status: true,
    architecture: "Monolithic",
    frammework: "Vite"
  },

  {
    id: "rentzee-online-rental-platform",
    title: "Rentzee – Online Rental Platform",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I built <strong>Rentzee</strong> to simplify renting vehicles and equipment online. 
        Traditional rental processes are often manual and outdated, so I wanted to create 
        a smooth, digital-first experience for users and business owners.
      </p>

      <h3>Benefits & Future Enhancements</h3>
      <p>
        Rentzee provides a secure and user-friendly system for listing, booking, and managing rentals. 
        The next phase includes developing a <strong>mobile version</strong> with GPS-based 
        real-time rental tracking and push notifications.
      </p>

      <h3>Technology Stack</h3>
      <p>
        Built using the <strong>MERN</strong> stack — <strong>MongoDB</strong>, <strong>Express</strong>, 
        <strong>React</strong>, and <strong>Node.js</strong>. 
        <strong>Cloudinary</strong> is integrated for media handling and <strong>JWT</strong> for secure authentication.
      </p>
    `,
    short_description: "A modern rental marketplace for vehicles and equipment, built with the MERN stack.",
    bgImage: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&h=300&fit=crop",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Express.js", "Tailwind CSS", "Cloudinary", "JWT", "Axios"],
    github: "https://github.com/DS-Vijayapala/Project-R",
    live: "",
    date: "2025",
    project_status: true,
    architecture: "Monolithic",
    frammework: "Vite"
  },
  {
    id: "vidoop-ai-media-optimizer",
    title: "Vidoop - AI-Powered Media Optimizer",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I created <strong>Vidoop</strong> to explore how AI can simplify media workflows for creators. 
        As video and image optimization are often time-consuming, I wanted to build a tool that could intelligently 
        automate transformations and formatting across platforms like YouTube, Instagram, and TikTok.
      </p>
      <br/>

      <h3>Benefits & Future Enhancements</h3>
      <p>
        Vidoop allows users to optimize videos and images effortlessly, saving time while improving quality. 
        Future plans include building a <strong>mobile app</strong> for on-the-go media optimization, 
        AI caption generation, and social platform auto-uploading.
      </p>
      <br/>

      <h3>Technology Stack</h3>
      <p>
        Built using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Cloudinary AI</strong> 
        for real-time processing. <strong>Tailwind CSS</strong> powers the responsive UI, 
        while <strong>Zustand</strong> and <strong>Zod</strong> ensure efficient state and data management.
      </p>
      <br/>
    `,
    short_description: "An AI-powered media optimizer that helps creators enhance and format their videos and images effortlessly.",
    bgImage: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg",
    technologies: ["TypeScript", "Clerk", "Zustand", "Zod", "Cloudinary AI", "Tailwind CSS"],
    github: "https://github.com/DS-Vijayapala/Vidoop---AI-Media-Platform",
    live: "",
    date: "2025",
    project_status: true,
    architecture: "Monolithic",
    frammework: "Next.js"
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I built my <strong>portfolio website</strong> to showcase my work, skills, and growth as a developer. 
        It also serves as a testbed to experiment with modern UI animations and responsive design principles.
      </p>

      <h3>Benefits & Future Enhancements</h3>
      <p>
        This portfolio helps clients and employers easily explore my projects. 
        I plan to convert it into a <strong>PWA</strong> for offline viewing and mobile accessibility.
      </p>

      <h3>Technology Stack</h3>
      <p>
        Created with <strong>React</strong> and <strong>Tailwind CSS</strong> for fast UI rendering, 
        <strong>Framer Motion</strong> for smooth animations, and <strong>EmailJS</strong> for contact integration.
      </p>
    `,
    short_description: "A personal portfolio website showcasing projects and skills with smooth animations and modern design.",
    bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/DS-Vijayapala/Next-Portfolio",
    live: "https://next-portfolio-dsv.vercel.app/",
    date: "2025",
    project_status: true,
    architecture: "Monolithic",
    frammework: "Next.js"
  },

  {
    id: "ecommerce-django-platform",
    title: "E-Commerce Platform",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I developed this <strong>Django-based e-commerce</strong> system to learn how enterprise-level 
        web applications handle transactions, orders, and inventory in real-world scenarios.
      </p>

      <h3>Benefits & Future Enhancements</h3>
      <p>
        The platform enables users to browse, purchase, and track orders easily. 
        I plan to extend it into a <strong>mobile app</strong> with payment gateway integration 
        and real-time delivery tracking.
      </p>

      <h3>Technology Stack</h3>
      <p>
        Built with <strong>Django</strong> for backend logic, <strong>Tailwind CSS</strong> for UI styling, 
        and <strong>SQLite</strong> for data storage. Frontend uses modern <strong>HTML5</strong> and <strong>JavaScript</strong>.
      </p>
    `,
    short_description: "A Django-based e-commerce system featuring order tracking, admin control, and modern UI.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Django", "Tailwind CSS", "SQLite", "HTML5", "JavaScript"],
    github: "https://github.com/DS-Vijayapala/Django-E-Commerce-Site",
    live: "https://github.com/DS-Vijayapala/Django-E-Commerce-Site",
    date: "2025",
    project_status: true,
    architecture: "Monolithic",
    frammework: "Django"
  },


];
