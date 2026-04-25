import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Berkay",
  lastName: "Sonel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer, M.Sc. in Computer Engineering",
  avatar: "/images/avatar-alt.png",
  email: "berkaysonel85@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/berkaysson",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/berkaysonel/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Berkay Sonel, MSc - Software Engineer",
  description:
    "Computer Engineer (MSc) with a 3.83 GPA, specializing in architecting scalable SaaS platforms, distributed systems, and Cloud-native solutions.",
  headline: "Engineering Scalable Systems & Solutions",
  featured: {
    display: true,
    title: "Latest: Restora (AI-Powered Document Archival System)",
    href: "/work/restora",
  },
  subline:
    "I am Berkay, a Master of Science in Computer Engineering specializing in .NET Core, Next.js, and Azure cloud architecture. I build high-performance multi-tenant applications and integrate complex AI workflows into enterprise environments.",
};

const about = {
  path: "/about",
  label: "About",
  title: "About – Berkay Sonel",
  description:
    "Berkay Sonel, a Software Engineer (MSc) specializing in scalable SaaS architectures and Cloud-native solutions, based in Ankara, Turkey.",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description:
      "Berkay is a Software Engineer holding an M.Sc. in Computer Engineering (GPA: 3.83) with over 2.5 years of experience architecting end-to-end SaaS platforms.  Having led engineering initiatives at IKBOX, he specializes in building backend services with ASP.NET Core and high-performance frontends using React.js. His expertise lies in optimizing distributed systems, implementing secure software architectures.",
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "İkbox",
        timeframe: "Jun 2024 – Present",
        role: "Full Stack Developer | Team Leader",
        achievements: [
          "Architecture & Frontend Management: Directed the frontend architecture of an enterprise HR SaaS (ikbox.tr), developing a modular UI component library that increased feature delivery speed by 40%.",
          "Backend Engineering: Built and maintained scalable services using ASP.NET Core, implementing CQRS, MediatR, and Unit of Work patterns to ensure a decoupled and testable codebase.",
          "Performance Optimization: Optimized over 200 API integrations using TanStack Query for caching and request deduplication, reducing redundant network traffic by 50% and cutting API latency.",
          "Data Security & Validation: Secured 50+ complex administrative forms using React Hook Form and Zod; implemented Role-Based Access Control (RBAC) using JWT and Frontend paradigms.",
          "System Integration & DevOps: Managed database schema design and migrations on MSSQL via Entity Framework Core; supervised automated deployment pipelines through Jenkins for production releases.",
          "Technical Leadership: Led a team of 5+ interns, conducting code reviews and enforcing SOLID principles to maintain high code quality and minimize technical debt.",
        ],
        images: [],
      },
      {
        company: "KoçSistem",
        timeframe: "Jul 2023 – Jan 2024",
        role: "Intern Full Stack Developer",
        achievements: [
          "Selected from 12,000+ applicants for a 7-month intensive program, contributing to full-stack applications within a cloud-focused environment.",
          "Backend Engineering: Developed RESTful APIs using ASP.NET Core and optimized database interactions with MSSQL via Entity Framework Core.",
          "Security Implementation: Established secure Role-Based Access Control (RBAC) using ASP.NET Identity and JWT to manage user permissions and authentication.",
          "Frontend Optimization: Built interactive user interfaces with React.js and improved performance through route-based code splitting.",
          "Cloud & Agile Integration: Collaborated within an Agile/Scrum framework to deploy and monitor applications on Microsoft Azure, utilizing App Service and SQL Server.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Selçuk University",
        description:
          "M.Sc. in Computer Engineering (2024 – 2026) – GPA: 3.83/4.00 (High Honor). Focused on Software Architecture and Advanced Algorithms.",
      },
      {
        name: "Microsoft & Koç Holding | Ctrl + Future",
        description:
          "Graduate Software Development Program (2023) – Selected from 12,000+ applicants (Top 1%). Intensive training on Azure, Agile, and Full-Stack Development.",
      },
      {
        name: "Çankaya University",
        description:
          "B.Sc. in Civil Engineering (2023) – Developed strong analytical and structural problem-solving foundations.",
      },
      {
        name: "Professional Certifications",
        description:
          "Microsoft Certified: Azure Fundamentals (AZ-900), AZ-204 (In Progress), YDS: 88 (Professional English Proficiency).",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend Architecture",
        description:
          "TypeScript, React, Next.js (App Router & Server Actions). Deep expertise in TanStack Query for caching and state synchronization, code splitting, and custom hooks.",
        images: [],
      },
      {
        title: "Backend & Systems",
        description:
          "C# / .NET Core (CQRS, MediatR, Unit of Work patterns), Python (FastAPI). Asynchronous job queues and real-time systems via WebSockets.",
        images: [],
      },
      {
        title: "Data & Persistence",
        description:
          "PostgreSQL (Prisma, Supabase), MSSQL (Entity Framework Core), and Redis for distributed caching. Managed complex relational schema designs and migrations.",
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description:
          "Microsoft Azure (App Service, SQL Server, Key Vault), Docker containerization, Jenkins for CI/CD pipeline automation.",
        images: [],
      },
      {
        title: "Security & Quality",
        description:
          "Identity & JWT-based RBAC, OAuth, Zod validation. Unit testing with Jest. Strict adherence to SOLID principles and Clean Architecture.",
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about life and web dev...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Personal Projects",
  title: `Personal Projects – ${person.name}`,
  description: `Personal Full stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection of my products by ${person.name}`,
  images: [
    {
      src: "/images/projects/restora/restora-1.png",
      alt: "Restora - 1",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/restora/restora-2.png",
      alt: "Restora - 2",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/restora/restora-3.png",
      alt: "Restora - 3",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/restora/restora-4.png",
      alt: "Restora - 4",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita_launch.webp",
      alt: "Habivita launch dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita-feat.webp",
      alt: "Habivita feature overview",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita-insight.webp",
      alt: "Habivita Progress screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita-feat-3.webp",
      alt: "Habivita feature overview",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita-feat-2.webp",
      alt: "Habivita analytics and progress screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habivita-mobile.webp",
      alt: "Habivita mobile interface",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/harmonii_launch.png",
      alt: "Harmonii app launch screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/harmonii_summary.gif",
      alt: "Harmonii animated project summary",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dhondt_launch.png",
      alt: "D'Hondt System Calculator launch screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/github-contributions.png",
      alt: "Berkay Sonel's portfoliogithub contributions",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/swiftbook-calendar-view.png",
      alt: "SwiftBook calendar view",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/swiftbook-dashboard-overview.png",
      alt: "SwiftBook dashboard overview",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/swiftbook-organization-settings.png",
      alt: "SwiftBook organization settings",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/swiftbook-public-view.png",
      alt: "SwiftBook public view",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
