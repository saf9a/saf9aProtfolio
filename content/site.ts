export type NavLink = {
  label: string;
  href: string;
};

export type TrustIndicator = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string[];
  results: string[];
  timeline: string;
  stack: string[];
  metrics: string[];
};

export type Offer = {
  name: string;
  timeline: string;
  price: string;
  summary: string;
  whatYouGet: string[];
  timelineSteps: string[];
  idealFor: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
};

export const site = {
  name: "Saf9a",
  url: "https://saf9a.vercel.app",
  location: "Tunis, Tunisia",
  email: "dslimmp@gmail.com",
  description:
    "A studio in Tunis delivering full-stack web products, DevOps foundations, and AI automation that help teams ship faster and operate with confidence.",
  hero: {
    kicker: "Full-stack studio",
    headline: "Premium web, cloud, and AI automation for teams that need to ship fast.",
    subheadline:
      "We build modern web products, reliable infrastructure, and practical AI workflows so your team can move faster without piling on tech debt.",
    primaryCta: "Request a call",
    secondaryCta: "View case studies",
    note: "Based in Tunis, serving startups and scaleups across MENA and Europe.",
    sideTitle: "What a launch looks like",
    sideDescription:
      "A clear plan, fast execution, and operational polish so your product feels credible from day one.",
    sidePoints: [
      "Product-ready UX and clean code",
      "Production deployment with monitoring",
      "Roadmap for what to ship next",
    ],
  },
  contact: {
    headline: "Start with a short call",
    description:
      "Tell us about the outcome you want. We will respond within one business day with next steps and a tailored plan.",
  },
  booking: {
    headline: "Request a custom booking",
    description:
      "Share your goals, the type of call you need, and a preferred time window. We will confirm the best slot by email within one business day.",
    primaryCta: "Request a call",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  trustIndicators: [
    {
      label: "Senior founders",
      value: "Hands-on delivery and advisory",
    },
    {
      label: "Launch speed",
      value: "Go live in 1 to 6 weeks",
    },
    {
      label: "Ops ready",
      value: "CI/CD, monitoring, and docs",
    },
  ],
  capabilities: [
    {
      title: "Full-stack web development",
      description:
        "Product-grade interfaces, resilient backends, and data models that can grow with your roadmap.",
      bullets: [
        "Next.js, React, and TypeScript",
        "API design and integrations",
        "Auth, admin, and analytics",
      ],
    },
    {
      title: "DevOps and cloud deployment",
      description:
        "Reliable releases with clear observability, automated pipelines, and infrastructure you can trust.",
      bullets: [
        "CI/CD and automated testing",
        "Cloud hosting and security baselines",
        "Monitoring, alerts, and runbooks",
      ],
    },
    {
      title: "AI automation",
      description:
        "Practical automation that saves hours each week, from RAG assistants to document processing.",
      bullets: [
        "RAG chatbots and internal tools",
        "Workflow automation and alerts",
        "Document parsing and extraction",
      ],
    },
  ],
  processSteps: [
    {
      title: "Align on outcomes",
      description:
        "Clarify success metrics, constraints, and what matters most for the next release.",
    },
    {
      title: "Ship the core",
      description:
        "Design and build the smallest complete version that drives real results.",
    },
    {
      title: "Harden and deploy",
      description:
        "Add automation, monitoring, and documentation so the product is production-ready.",
    },
    {
      title: "Scale responsibly",
      description:
        "Measure, iterate, and expand features based on live usage and feedback.",
    },
  ],
  testimonials: [
    {
      name: "Nadia Saidi",
      role: "Operations Lead",
      company: "Northwind Logistics",
      quote:
        "They delivered a portal our team could finally trust. The project ran on time and the handoff was clean.",
    },
    {
      name: "Omar Jaziri",
      role: "Founder",
      company: "Saha Health",
      quote:
        "The automation cut our manual intake work by more than half in the first month. It paid for itself fast.",
    },
    {
      name: "Lina Haddad",
      role: "Product Manager",
      company: "Atlas Retail",
      quote:
        "We loved how they handled both the frontend and the deployment. No gaps, no handoffs, just results.",
    },
  ],
  caseStudies: [
    {
      slug: "atlas-logistics-portal",
      title: "Atlas Logistics Visibility Portal",
      client: "Atlas Logistics",
      industry: "Freight and supply chain",
      summary:
        "Built a real-time shipment visibility portal that reduced status requests and improved on-time reporting.",
      problem:
        "Operations relied on spreadsheets and manual updates, leading to delays, missed SLAs, and constant email churn.",
      solution: [
        "Designed a unified tracking dashboard with live status updates.",
        "Integrated carrier APIs and automated alert workflows.",
        "Added role-based access and weekly reporting exports.",
      ],
      results: [
        "60% fewer status update emails",
        "3 hours saved per coordinator each day",
        "Improved on-time reporting accuracy",
      ],
      timeline: "5 weeks",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
      metrics: ["-60% support requests", "3x faster dispatch updates", "99.9% uptime"],
    },
    {
      slug: "zaytuna-retail-ops",
      title: "Zaytuna Retail Ops Suite",
      client: "Zaytuna Retail",
      industry: "Multi-location retail",
      summary:
        "Delivered a retail operations suite with inventory forecasting, approvals, and performance dashboards.",
      problem:
        "Inventory was tracked in multiple tools with no single source of truth, causing stockouts and slow decisions.",
      solution: [
        "Built an admin workspace with approvals and audit logs.",
        "Introduced automated reorder triggers and weekly forecasts.",
        "Connected POS data with live dashboards and alerts.",
      ],
      results: [
        "25% reduction in stockouts",
        "2x faster replenishment cycles",
        "Leadership visibility across all stores",
      ],
      timeline: "4 weeks",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel", "GitHub Actions"],
      metrics: ["25% fewer stockouts", "2x faster reporting", "Zero downtime launches"],
    },
    {
      slug: "medassist-automation",
      title: "MedAssist Intake Automation",
      client: "MedAssist Clinic",
      industry: "Healthcare services",
      summary:
        "Automated patient intake with document processing and a RAG assistant for faster staff responses.",
      problem:
        "Staff handled intake forms manually, leading to slow turnarounds and inconsistent data quality.",
      solution: [
        "Implemented document parsing with structured data validation.",
        "Built a RAG assistant to answer policy questions instantly.",
        "Automated task routing and follow-ups across the team.",
      ],
      results: [
        "70% reduction in manual data entry",
        "Intake cycle cut from days to hours",
        "Higher consistency in client records",
      ],
      timeline: "3 weeks",
      stack: ["Next.js", "FastAPI", "Python", "Vector DB", "AWS"],
      metrics: ["-70% manual work", "90% data accuracy", "Same-day intake"],
    },
  ],
  faqs: [
    {
      question: "How do we start a project?",
      answer:
        "We begin with a short call to understand your goals, then follow up with a scoped plan, timeline, and fixed price estimate.",
    },
    {
      question: "Do you work with in-house teams?",
      answer:
        "Yes. We can embed with your team to ship a focused sprint, set up DevOps foundations, or build an automation pipeline.",
    },
    {
      question: "What is your typical timeline?",
      answer:
        "Most launches land between 1 and 6 weeks depending on scope, integrations, and approval cycles.",
    },
    {
      question: "Can you handle both product and infrastructure?",
      answer:
        "That is our core model. We build the product, deploy it, and ensure the stack is observable and maintainable.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We provide a monthly retainer for maintenance, monitoring, and iterative improvements.",
    },
  ],
  offers: [
    {
      name: "Launch Package",
      timeline: "7 to 14 days",
      price: "from $2,500",
      summary:
        "A fast, credible landing with analytics, deployment, and a launch checklist.",
      whatYouGet: [
        "Strategy workshop and scope",
        "Landing page with conversion copy",
        "Analytics, SEO, and tracking setup",
        "Production deployment",
      ],
      timelineSteps: [
        "Days 1-2: discovery and messaging",
        "Days 3-7: design and build",
        "Days 8-14: QA, analytics, launch",
      ],
      idealFor: "Founders preparing for an investor demo or first market test.",
    },
    {
      name: "MVP Sprint",
      timeline: "2 to 4 weeks",
      price: "from $6,500",
      summary: "A full MVP build with auth, admin, and a delivery pipeline.",
      whatYouGet: [
        "Product planning and user flows",
        "Full-stack web app build",
        "Auth, roles, and admin tools",
        "CI/CD and staging environment",
      ],
      timelineSteps: [
        "Week 1: product design and data model",
        "Week 2-3: build and integrations",
        "Week 4: QA, launch, docs",
      ],
      idealFor: "Teams validating product-market fit or closing early customers.",
    },
    {
      name: "AI Automation Sprint",
      timeline: "1 to 3 weeks",
      price: "from $4,000",
      summary: "Automate a single workflow with clear KPIs and measurable time savings.",
      whatYouGet: [
        "Automation audit and KPI baseline",
        "RAG assistant or workflow build",
        "Integration with existing tools",
        "Reporting dashboard",
      ],
      timelineSteps: [
        "Week 1: workflow mapping and data prep",
        "Week 2: build and testing",
        "Week 3: rollout and training",
      ],
      idealFor: "Operations teams spending hours on manual updates or reports.",
    },
    {
      name: "Retainer",
      timeline: "Monthly",
      price: "from $1,200/mo",
      summary: "Ongoing maintenance, monitoring, and steady improvements.",
      whatYouGet: [
        "Monitoring, alerts, and backups",
        "Bug fixes and feature support",
        "Performance reviews and optimizations",
        "Quarterly roadmap planning",
      ],
      timelineSteps: [
        "Monthly planning and priority review",
        "Bi-weekly releases",
        "Continuous monitoring",
      ],
      idealFor: "Teams that want a reliable engineering partner long-term.",
    },
  ],
  about: {
    mission:
      "We help ambitious teams ship reliable software without the overhead of a full internal engineering team.",
    story:
      "Saf9a is a studio in Tunis. We combine product thinking, clean engineering, and operational discipline to deliver work that feels enterprise-ready but moves like a startup.",
    values: [
      {
        title: "Outcome first",
        description: "Every decision ties back to business results and measurable impact.",
      },
      {
        title: "Clarity over chaos",
        description: "We document, communicate, and keep projects calm and transparent.",
      },
      {
        title: "Quality that scales",
        description: "We build with maintainability in mind, even for fast launches.",
      },
      {
        title: "Practical automation",
        description: "We focus on automation that saves real hours and dollars.",
      },
    ],
    founders: [
      {
        name: "Slim Dridi",
        role: "Ai engineer",
        bio: "Designs and builds product experiences with a focus on conversion, clarity, and performance.",
      },
      {
        name: "Ismail Khlifi",
        role: "Backend and MLOps",
        bio: "Leads architecture, integrations, and deployment systems that stay reliable under load.",
      },
    ],
    whyTunisia: [
      "Strong engineering talent with global delivery    experience.",
      "Time zone alignment with Europe and flexible overlap with MENA teams.",
      "Lower overhead lets you invest more in product quality.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Terraform",
      "GitHub Actions",
    ],
  },
  socials: {
    github: "https://github.com/<github>",
    linkedin: "https://www.linkedin.com/in/<linkedin>",
    x: "https://x.com/<x>",
  },
  workIntro:
    "A selection of recent projects showing how we solve complex product, infrastructure, and automation challenges.",
  servicesIntro:
    "Productized offers with clear timelines and deliverables so you know exactly what you are getting.",
} as const;
