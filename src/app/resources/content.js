import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Berkay",
  lastName: "Sonel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
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
  title: `Berkay Sonel's Portfolio`,
  description: `Portfolio website showcasing my work as a Full Stack Developer`,
  headline: <>Bridging frontend elegance with backend power</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Habivita</strong>
      </>
    ),
    href: "/work/habivita",
  },
  subline: (
    <>
      I'm Berkay, a full stack developer based in Ankara, Turkey. I'm crafting
      clean, scalable apps with <br />
      Next.js, React, and .NET. I love turning ideas into full-featured
      platforms.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – Berkay Sonel`,
  description: `Meet Berkay Sonel, Full Stack Developer from Ankara, Etimesgut`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Update if you have a personal calendar link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Berkay is a Full Stack Developer based in Ankara with ~2 years of
        experience building dynamic and scalable web applications. He
        specializes in React, Next.js, and ASP.NET Core, and enjoys building
        tools that blend performance with clean design.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Siem Group",
        timeframe: "Jun 2024 – Present",
        role: "Frontend Developer | Team Leader",
        achievements: [
          <>
            Led frontend development of HRM software with complex modules and
            backend integrations.
          </>,
          <>
            Mentored interns, enforced best practices, and optimized performance
            with TanStack Query and Axios.
          </>,
        ],
        images: [],
      },
      {
        company: "Pay Gençlik Association",
        timeframe: "Mar 2024 – Jun 2024",
        role: "Volunteer Software Developer",
        achievements: [
          <>
            Redesigned the organization website with WordPress and custom CSS.
          </>,
          <>Handled technical issues and conducted new member interviews.</>,
        ],
        images: [],
      },
      {
        company: "KoçSistem",
        timeframe: "Jul 2023 – Jan 2024",
        role: "Intern Full Stack Developer",
        achievements: [
          <>
            Built RESTful APIs with ASP.NET Core and integrated React-based UIs.
          </>,
          <>
            Implemented JWT authentication and role-based access, completed Ctrl
            + Future Program.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Selçuk University",
        description: <>Master’s in Computer Engineering (Ongoing-2026)</>,
      },
      {
        name: "Ctrl + Future Program – Koç Holding & Microsoft Türkiye",
        description: (
          <>
            Completed intensive bootcamp focused on Agile, Azure, and
            frontend/backend web dev.
          </>
        ),
      },
      {
        name: "Çankaya University",
        description: <>Bachelor's in Civil Engineering (GPA: 2.9)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>
            Building fast UIs with React, TanStack, and full-stack power via
            Next.js.
          </>
        ),
        images: [],
      },
      {
        title: "ASP.NET Core & C#",
        description: (
          <>Developing RESTful Web APIs with .NET, EF Core, and JWT.</>
        ),
        images: [],
      },
      {
        title: "PostgreSQL & Prisma",
        description: (
          <>
            Database design and ORM handling for modern apps with PostgreSQL and
            Prisma.
          </>
        ),
        images: [],
      },
      {
        title: "UI Libraries",
        description: (
          <>Styled Components, Tailwind CSS, Material UI, and ShadcnUI.</>
        ),
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
  label: "Projects",
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
