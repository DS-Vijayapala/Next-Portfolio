import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    slug: "project-z-job-portal",
    title: "ZipherJobs",
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
      As the platform grew, scalability and service management became more critical, leading to a
      complete migration to a <strong>microservices architecture</strong>.
    </p>
  `,
    shortDescription:
      "A scalable job portal evolving from a monolithic structure to a microservices-based architecture.",
    bgImage: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    images: ["https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"],
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
      "CI/CD",
    ],
    github: "",
    live: "https://zipher.lk",
    date: "2025",
    projectStatus: false,
    architecture: "Microservices",
    framework: "Turborepo",
  },
  {
    slug: "advanced-ecommerce-platform",
    title: "Advanced E-Commerce Platform - Microservices Architecture",
    description: `
    <h3>Why I Chose This Project</h3>
    <p>
      I started the <strong>Advanced E-Commerce Platform</strong> project to gain practical
      understanding of microservices architecture and scalable distributed systems.
    </p>
  `,
    shortDescription:
      "A cloud-native e-commerce platform built with microservices architecture and Turborepo for scalability and modularity.",
    bgImage: "https://images.pexels.com/photos/6995134/pexels-photo-6995134.jpeg",
    images: ["https://images.pexels.com/photos/6995134/pexels-photo-6995134.jpeg"],
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
      "Turborepo",
    ],
    github: "",
    live: "",
    date: "2025",
    projectStatus: false,
    architecture: "Microservices",
    framework: "Turborepo",
  },
  {
    slug: "zipher-media-social-platform",
    title: "Zipher Media - Social Platform",
    description: `
    <h3>Why I Chose This Project</h3>
    <p>
      I created <strong>Zipher Media</strong> as a prototype for a modern social media experience.
    </p>
  `,
    shortDescription:
      "A modern social media prototype focusing on content sharing, engagement, and a distraction-free UI.",
    bgImage: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",
    images: ["https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"],
    technologies: [
      "React",
      "Clerk",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "Node.js",
      "Cloudinary",
      "Redux",
      "Axios",
      "Inngest",
    ],
    github: "https://github.com/DS-Vijayapala/Project-ZM",
    live: "",
    date: "2025",
    projectStatus: true,
    architecture: "Monolithic",
    framework: "Vite",
  },
  {
    slug: "rentzee-online-rental-platform",
    title: "Rentzee - Online Rental Platform",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I built <strong>Rentzee</strong> to simplify renting vehicles and equipment online.
      </p>
    `,
    shortDescription:
      "A modern rental marketplace for vehicles and equipment, built with the MERN stack.",
    bgImage:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&h=300&fit=crop",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/DS-Vijayapala/Project-R",
    live: "",
    date: "2025",
    projectStatus: true,
    architecture: "Monolithic",
    framework: "Vite",
  },
  {
    slug: "vidoop-ai-media-optimizer",
    title: "Vidoop - AI-Powered Media Optimizer",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I created <strong>Vidoop</strong> to explore how AI can simplify media workflows for creators.
      </p>
    `,
    shortDescription:
      "An AI-powered media optimizer that helps creators enhance and format their videos and images effortlessly.",
    bgImage: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg",
    images: ["https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"],
    technologies: [
      "TypeScript",
      "Clerk",
      "Zustand",
      "Zod",
      "Cloudinary AI",
      "Tailwind CSS",
    ],
    github: "https://github.com/DS-Vijayapala/Vidoop---AI-Media-Platform",
    live: "",
    date: "2025",
    projectStatus: true,
    architecture: "Monolithic",
    framework: "Next.js",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I built my <strong>portfolio website</strong> to showcase my work and skills.
      </p>
    `,
    shortDescription:
      "A personal portfolio website showcasing projects and skills with smooth animations and modern design.",
    bgImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/DS-Vijayapala/Next-Portfolio",
    live: "https://next-portfolio-dsv.vercel.app/",
    date: "2025",
    projectStatus: true,
    architecture: "Monolithic",
    framework: "Next.js",
  },
  {
    slug: "ecommerce-django-platform",
    title: "E-Commerce Platform",
    description: `
      <h3>Why I Chose This Project</h3>
      <p>
        I developed this <strong>Django-based e-commerce</strong> system to learn enterprise workflows.
      </p>
    `,
    shortDescription:
      "A Django-based e-commerce system featuring order tracking, admin control, and modern UI.",
    bgImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    ],
    technologies: ["Django", "Tailwind CSS", "SQLite", "HTML5", "JavaScript"],
    github: "https://github.com/DS-Vijayapala/Django-E-Commerce-Site",
    live: "https://github.com/DS-Vijayapala/Django-E-Commerce-Site",
    date: "2025",
    projectStatus: true,
    architecture: "Monolithic",
    framework: "Django",
  },
];

async function main() {
  for (const [index, project] of projects.entries()) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        sortOrder: index + 1,
        title: project.title,
        shortDescription: project.shortDescription,
        description: project.description,
        bgImage: project.bgImage,
        images: project.images.slice(0, 5),
        technologies: project.technologies,
        github: project.github,
        live: project.live,
        date: project.date,
        projectStatus: project.projectStatus,
        architecture: project.architecture,
        framework: project.framework,
      },
      create: {
        slug: project.slug,
        sortOrder: index + 1,
        title: project.title,
        shortDescription: project.shortDescription,
        description: project.description,
        bgImage: project.bgImage,
        images: project.images.slice(0, 5),
        technologies: project.technologies,
        github: project.github,
        live: project.live,
        date: project.date,
        projectStatus: project.projectStatus,
        architecture: project.architecture,
        framework: project.framework,
      },
    });
  }

  console.log(`Seeded ${projects.length} projects.`);
}

main()
  .catch((error) => {
    console.error("Project seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
