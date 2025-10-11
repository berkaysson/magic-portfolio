import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Berkay",
  lastName: "Sonel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
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
  title: "Berkay Sonel - Frontend Developer",
  description:
    "Results-driven Frontend Developer with 2+ years building high-performance, responsive web applications.",
  headline: "Architecting Scalable Web Solutions",
  featured: {
    display: true,
    title: "Featured Project: Habivita (SaaS Productivity App)",
    href: "/work/habivita",
  },
  subline:
    "I'm Berkay, a results-driven Frontend Developer with Full Stack Capabilities. I specialize in crafting scalable, high-performance UIs and delivering solutions that integrate complex frontend-backend systems.",
};

const about = {
  path: "/about",
  label: "About",
  title: "About – Berkay Sonel",
  description:
    "Berkay Sonel, a results-driven Frontend Developer specializing in high-performance web applications based in Ankara, Turkey.",
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
      "Berkay is a results-driven Frontend Developer with 2+ years of experience building high-performance, responsive web applications. He is proficient in leading development initiatives, optimizing performance (code splitting, caching), and integrating complex systems using React, Next.js, and ASP.NET.", // Team Leader concept softened to "leading development initiatives"
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Siem Group",
        timeframe: "Jun 2024 – Present",
        role: "Frontend Developer | Team Leader", // Title remains here
        achievements: [
          "Directed frontend implementation of a modular Human Resources Management Application (ikbox.tr) using React.js and Material UI.",
          "Optimized 200+ API integrations using TanStack Query, cutting API latency by 200ms on average.",
          "Architected 100+ responsive screens, implementing lazy loading and code splitting to improve performance.",
          "Guided 5+ interns through code reviews and technical feedback, ensuring a scalable React.js codebase.",
        ],
        images: [],
      },
      {
        company: "Pay Gençlik Association (Volunteer)",
        timeframe: "Mar 2024 – Jun 2024",
        role: "Volunteer Software Developer",
        achievements: [
          "Rapidly delivered and deployed the association's website, enhancing usability for non-technical content management.",
          "Provided technical support and contributed to member recruitment by interviewing new members.",
        ],
        images: [],
      },
      {
        company: "KoçSistem",
        timeframe: "Jul 2023 – Jan 2024",
        role: "Intern Full Stack Developer",
        achievements: [
          "Developed RESTful APIs with ASP.NET Core and integrated them with React-based frontends.",
          "Implemented role-based authentication using Identity, JWT, and EF Core to secure systems.",
          "Gained hands-on expertise in Agile/Scrum, Azure, and React.js during the program.",
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
          "Master’s in Computer Engineering (Ongoing - 2026) – GPA: 3.82",
      },
      {
        name: "Çankaya University",
        description: "Bachelor's in Civil Engineering (2023) – GPA: 2.9",
      },
      {
        name: "Koç Holding A.Ş.",
        description:
          "Frontend Developer Program (2023) – Intensive bootcamp focused on Agile, Azure, and full-stack web dev.",
      },
      {
        name: "Microsoft",
        description: "Azure Fundamentals Certification (2023)",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend & Performance",
        description:
          "JavaScript/TypeScript, React, Next.js. Expertise in TanStack Query (caching, optimistic updates), code splitting, and custom hooks.",
      },
      {
        title: "Backend & Security",
        description:
          "ASP.NET / C#, Entity Framework Core. Implemented JWT, Identity, and role-based access control for security.",
      },
      {
        title: "Database & ORMs",
        description:
          "PostgreSQL (Prisma, Supabase) and MSSQL (Entity Framework Core).",
      },
      {
        title: "DevOps & Tools",
        description:
          "Azure, Git/GitHub, Jenkins, Agile methods (Jira, Confluence, Trello).",
      },
      {
        title: "UI/UX & Testing",
        description:
          "Material UI, Tailwind CSS, Shadcn UI. Unit testing with Jest, ESLint, and Prettier.",
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
