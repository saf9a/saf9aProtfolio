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

export type HeroContent = {
  kicker: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
  sideTitle: string;
  sideDescription: string;
  sidePoints: string[];
};

export type ContactContent = {
  headline: string;
  description: string;
};

export type BookingContent = {
  headline: string;
  description: string;
  primaryCta: string;
};

export type AboutContent = {
  mission: string;
  story: string;
  values: {
    title: string;
    description: string;
  }[];
  founders: Founder[];
  whyTunisia: string[];
  techStack: string[];
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  x: string;
};

export type SiteContent = {
  name: string;
  url: string;
  location: string;
  email: string;
  description: string;
  hero: HeroContent;
  contact: ContactContent;
  booking: BookingContent;
  navLinks: NavLink[];
  trustIndicators: TrustIndicator[];
  capabilities: Service[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  caseStudies: CaseStudy[];
  faqs: {
    question: string;
    answer: string;
  }[];
  offers: Offer[];
  about: AboutContent;
  socials: SocialLinks;
  workIntro: string;
  servicesIntro: string;
};

export const site: SiteContent = {
  name: "Saf9a",
  url: "https://saf9a.tech",
  location: "Tunis, Tunisia",
  email: "dslimmp@gmail.com",
  description:
    "Saf9a is a Tunis, Tunisia studio for web development, DevOps, and AI automation, helping startups and scaleups ship faster across MENA and Europe.",
  hero: {
    kicker: "Full-stack studio",
    headline: "Web development, DevOps, and AI automation for teams that need to ship fast.",
    subheadline:
      "We build modern web products, reliable cloud infrastructure, and practical AI automation so startups and scaleups can move faster without piling on tech debt.",
    primaryCta: "Request a call",
    secondaryCta: "View case studies",
    note: "Based in Tunis, Tunisia, serving startups and scaleups across MENA and Europe.",
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
      "Talk with Saf9a about web development, DevOps, or AI automation. We reply within one business day with next steps and a tailored plan.",
  },
  booking: {
    headline: "Request a custom booking",
    description:
      "Share your goals, the type of call you need, and a preferred time window. We will confirm the best slot by email within one business day for your web development, DevOps, or AI automation needs.",
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
        role: "AI engineer",
        bio: "Designs and builds product experiences with a focus on conversion, clarity, and performance.",
      },
      {
        name: "Ismail Khlifi",
        role: "Backend and MLOps",
        bio: "Leads architecture, integrations, and deployment systems that stay reliable under load.",
      },
    ],
    whyTunisia: [
      "Strong engineering talent with global delivery experience.",
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
    "Case studies showing how Saf9a delivers web development, DevOps, and AI automation projects for product and operations teams.",
  servicesIntro:
    "Web development, DevOps consulting, and AI automation services from Tunis, Tunisia with clear timelines and deliverables.",
};

export const siteFr: SiteContent = {
  name: "Saf9a",
  url: "https://saf9a.tech",
  location: "Tunis, Tunisie",
  email: "dslimmp@gmail.com",
  description:
    "Saf9a est un studio base a Tunis, en Tunisie, specialise en developpement web, DevOps et automatisation IA pour aider les startups et scaleups a avancer plus vite en MENA et en Europe.",
  hero: {
    kicker: "Studio full-stack",
    headline: "Developpement web, DevOps et automatisation IA pour les equipes qui doivent livrer vite.",
    subheadline:
      "Nous concevons des produits web modernes, une infrastructure cloud fiable et des automatisations IA concretes pour aider les startups et scaleups a avancer sans accumuler de dette technique.",
    primaryCta: "Demander un appel",
    secondaryCta: "Voir les etudes de cas",
    note: "Base a Tunis, en Tunisie, au service des startups et scaleups en MENA et en Europe.",
    sideTitle: "A quoi ressemble un bon lancement",
    sideDescription:
      "Un plan clair, une execution rapide et une vraie rigueur operationnelle pour que votre produit soit credible des le premier jour.",
    sidePoints: [
      "UX prete pour la production et code propre",
      "Deploiement en production avec supervision",
      "Feuille de route claire pour la suite",
    ],
  },
  contact: {
    headline: "Commencez par un court appel",
    description:
      "Parlez a Saf9a de votre projet de developpement web, DevOps ou automatisation IA. Nous repondons sous un jour ouvre avec les prochaines etapes et un plan adapte.",
  },
  booking: {
    headline: "Demander un creneau personnalise",
    description:
      "Partagez vos objectifs, le type d'appel souhaite et votre plage horaire preferee. Nous confirmerons le meilleur creneau par email sous un jour ouvre pour vos besoins en developpement web, DevOps ou automatisation IA.",
    primaryCta: "Demander un appel",
  },
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Realisations", href: "/work" },
    { label: "A propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  trustIndicators: [
    {
      label: "Fondateurs seniors",
      value: "Livraison directe et conseil strategique",
    },
    {
      label: "Vitesse de lancement",
      value: "Mise en ligne en 1 a 6 semaines",
    },
    {
      label: "Ops pretes",
      value: "CI/CD, monitoring et documentation",
    },
  ],
  capabilities: [
    {
      title: "Developpement web full-stack",
      description:
        "Des interfaces solides, des backends robustes et des modeles de donnees capables d'evoluer avec votre roadmap.",
      bullets: [
        "Next.js, React et TypeScript",
        "Conception d'API et integrations",
        "Auth, admin et analytics",
      ],
    },
    {
      title: "DevOps et deploiement cloud",
      description:
        "Des mises en production fiables avec observabilite, pipelines automatises et infrastructure de confiance.",
      bullets: [
        "CI/CD et tests automatises",
        "Hebergement cloud et bases securite",
        "Monitoring, alertes et runbooks",
      ],
    },
    {
      title: "Automatisation IA",
      description:
        "Des automatisations concretes qui font gagner des heures chaque semaine, des assistants RAG au traitement documentaire.",
      bullets: [
        "Chatbots RAG et outils internes",
        "Automatisation de workflows et alertes",
        "Parsing et extraction de documents",
      ],
    },
  ],
  processSteps: [
    {
      title: "Aligner les objectifs",
      description:
        "Clarifier les indicateurs de succes, les contraintes et les priorites du prochain livrable.",
    },
    {
      title: "Livrer le coeur du produit",
      description:
        "Concevoir et construire la plus petite version complete qui genere un vrai resultat business.",
    },
    {
      title: "Fiabiliser et deployer",
      description:
        "Ajouter l'automatisation, le monitoring et la documentation pour une version prete pour la production.",
    },
    {
      title: "Monter en charge proprement",
      description:
        "Mesurer, iterer et etendre les fonctionnalites a partir de l'usage reel et du feedback.",
    },
  ],
  testimonials: [
    {
      name: "Nadia Saidi",
      role: "Responsable operations",
      company: "Northwind Logistics",
      quote:
        "Ils ont livre un portail auquel notre equipe a enfin pu faire confiance. Le projet a ete mene dans les temps et la transmission etait propre.",
    },
    {
      name: "Omar Jaziri",
      role: "Fondateur",
      company: "Saha Health",
      quote:
        "L'automatisation a reduit de plus de moitie notre travail manuel de traitement des le premier mois. L'investissement a ete rentabilise tres vite.",
    },
    {
      name: "Lina Haddad",
      role: "Product Manager",
      company: "Atlas Retail",
      quote:
        "On a particulierement apprecie leur maitrise du frontend et du deploiement. Pas de zones floues, pas de passation inutile, juste des resultats.",
    },
  ],
  caseStudies: [
    {
      slug: "atlas-logistics-portal",
      title: "Portail de visibilite Atlas Logistics",
      client: "Atlas Logistics",
      industry: "Fret et supply chain",
      summary:
        "Creation d'un portail de suivi en temps reel qui a reduit les demandes de statut et ameliore le reporting de ponctualite.",
      problem:
        "Les operations reposaient sur des tableurs et des mises a jour manuelles, ce qui causait retards, SLA manques et surcharge d'emails.",
      solution: [
        "Conception d'un tableau de bord unifie avec mises a jour en temps reel.",
        "Integration des API transporteurs et automatisation des alertes.",
        "Ajout d'acces par roles et d'exports hebdomadaires.",
      ],
      results: [
        "60 % d'emails de suivi en moins",
        "3 heures gagnees par coordinateur chaque jour",
        "Amelioration de la precision du reporting",
      ],
      timeline: "5 semaines",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
      metrics: ["-60 % de demandes support", "3x plus rapide sur les mises a jour", "99,9 % uptime"],
    },
    {
      slug: "zaytuna-retail-ops",
      title: "Suite d'operations Zaytuna Retail",
      client: "Zaytuna Retail",
      industry: "Retail multi-sites",
      summary:
        "Livraison d'une suite d'operations retail avec prevision de stock, validations et tableaux de bord de performance.",
      problem:
        "Le stock etait suivi dans plusieurs outils sans source de verite unique, ce qui provoquait ruptures et decisions lentes.",
      solution: [
        "Creation d'un espace admin avec validations et audit logs.",
        "Mise en place de declencheurs de reapprovisionnement et de previsions hebdomadaires.",
        "Connexion des donnees POS a des dashboards temps reel.",
      ],
      results: [
        "25 % de ruptures en moins",
        "Cycles de reapprovisionnement 2x plus rapides",
        "Visibilite centralisee pour la direction",
      ],
      timeline: "4 semaines",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel", "GitHub Actions"],
      metrics: ["25 % de ruptures en moins", "2x plus rapide pour le reporting", "Zero downtime au lancement"],
    },
    {
      slug: "medassist-automation",
      title: "Automatisation de l'onboarding MedAssist",
      client: "MedAssist Clinic",
      industry: "Services de sante",
      summary:
        "Automatisation du traitement des dossiers patients avec parsing documentaire et assistant RAG pour accelerer les reponses.",
      problem:
        "L'equipe traitait les formulaires manuellement, avec des delais longs et une qualite de donnees irreguliere.",
      solution: [
        "Mise en place d'un parsing documentaire avec validation structuree.",
        "Developpement d'un assistant RAG pour repondre instantanement aux questions de procedure.",
        "Automatisation de l'assignation des taches et des suivis.",
      ],
      results: [
        "70 % de saisie manuelle en moins",
        "Cycle de traitement reduit de plusieurs jours a quelques heures",
        "Meilleure coherence des dossiers clients",
      ],
      timeline: "3 semaines",
      stack: ["Next.js", "FastAPI", "Python", "Vector DB", "AWS"],
      metrics: ["-70 % de travail manuel", "90 % de precision des donnees", "Traitement le jour meme"],
    },
  ],
  faqs: [
    {
      question: "Comment demarre un projet ?",
      answer:
        "Nous commencons par un court appel pour comprendre vos objectifs, puis nous revenons avec un plan cadre, un delai et une estimation a prix fixe.",
    },
    {
      question: "Travaillez-vous avec des equipes internes ?",
      answer:
        "Oui. Nous pouvons collaborer avec votre equipe pour livrer un sprint cible, poser les bases DevOps ou mettre en place une automatisation.",
    },
    {
      question: "Quel est votre delai habituel ?",
      answer:
        "La plupart des lancements prennent entre 1 et 6 semaines selon le perimetre, les integrations et les cycles de validation.",
    },
    {
      question: "Pouvez-vous gerer a la fois le produit et l'infrastructure ?",
      answer:
        "Oui. C'est meme notre modele principal. Nous construisons le produit, le deployons et veillons a ce que la stack reste observable et maintenable.",
    },
    {
      question: "Proposez-vous un accompagnement continu ?",
      answer:
        "Oui. Nous proposons une formule mensuelle pour la maintenance, le monitoring et les ameliorations iteratives.",
    },
  ],
  offers: [
    {
      name: "Pack Launch",
      timeline: "7 a 14 jours",
      price: "a partir de 2 500 $",
      summary:
        "Une presence credible et rapide avec analytics, deploiement et checklist de lancement.",
      whatYouGet: [
        "Atelier strategie et cadrage",
        "Landing page avec copy de conversion",
        "Mise en place analytics, SEO et tracking",
        "Deploiement en production",
      ],
      timelineSteps: [
        "Jours 1-2 : discovery et messaging",
        "Jours 3-7 : design et developpement",
        "Jours 8-14 : QA, analytics, lancement",
      ],
      idealFor: "Fondateurs preparant une demo investisseur ou un premier test marche.",
    },
    {
      name: "Sprint MVP",
      timeline: "2 a 4 semaines",
      price: "a partir de 6 500 $",
      summary: "Un MVP complet avec auth, admin et pipeline de livraison.",
      whatYouGet: [
        "Plan produit et user flows",
        "Developpement d'une app web full-stack",
        "Auth, roles et outils admin",
        "CI/CD et environnement de staging",
      ],
      timelineSteps: [
        "Semaine 1 : design produit et modele de donnees",
        "Semaines 2-3 : developpement et integrations",
        "Semaine 4 : QA, lancement, documentation",
      ],
      idealFor: "Equipes en validation de product-market fit ou en phase de closing early customers.",
    },
    {
      name: "Sprint Automatisation IA",
      timeline: "1 a 3 semaines",
      price: "a partir de 4 000 $",
      summary: "Automatiser un workflow avec KPI clairs et gains de temps mesurables.",
      whatYouGet: [
        "Audit de l'automatisation et baseline KPI",
        "Assistant RAG ou workflow automatise",
        "Integration aux outils existants",
        "Tableau de bord de reporting",
      ],
      timelineSteps: [
        "Semaine 1 : cartographie du workflow et preparation des donnees",
        "Semaine 2 : developpement et tests",
        "Semaine 3 : mise en place et formation",
      ],
      idealFor: "Equipes operations qui perdent des heures sur des mises a jour ou rapports manuels.",
    },
    {
      name: "Retainer",
      timeline: "Mensuel",
      price: "a partir de 1 200 $ / mois",
      summary: "Maintenance continue, monitoring et ameliorations regulieres.",
      whatYouGet: [
        "Monitoring, alertes et sauvegardes",
        "Correction de bugs et support fonctionnel",
        "Revues de performance et optimisations",
        "Planification trimestrielle de roadmap",
      ],
      timelineSteps: [
        "Planification mensuelle et revue des priorites",
        "Releases toutes les deux semaines",
        "Monitoring continu",
      ],
      idealFor: "Equipes qui veulent un partenaire technique fiable sur la duree.",
    },
  ],
  about: {
    mission:
      "Nous aidons les equipes ambitieuses a livrer un logiciel fiable sans le poids d'une equipe d'ingenierie interne complete.",
    story:
      "Saf9a est un studio base a Tunis. Nous combinons reflexion produit, ingenierie propre et discipline operationnelle pour livrer un travail a la fois rapide et credible.",
    values: [
      {
        title: "Oriente resultat",
        description: "Chaque decision se rattache a un resultat business mesurable.",
      },
      {
        title: "Clarte avant chaos",
        description: "Nous documentons, communiquons et gardons les projets calmes et transparents.",
      },
      {
        title: "Qualite qui tient dans le temps",
        description: "Nous construisons pour etre maintenables, meme lorsqu'il faut aller vite.",
      },
      {
        title: "Automatisation utile",
        description: "Nous visons des automatisations qui font gagner de vraies heures et de vrais couts.",
      },
    ],
    founders: [
      {
        name: "Slim Dridi",
        role: "Ingenieur IA",
        bio: "Concoit et construit des experiences produit avec un fort accent sur la clarte, la conversion et la performance.",
      },
      {
        name: "Ismail Khlifi",
        role: "Backend et MLOps",
        bio: "Pilote l'architecture, les integrations et les systemes de deploiement qui restent fiables sous charge.",
      },
    ],
    whyTunisia: [
      "Un solide vivier de talents techniques avec une experience de livraison internationale.",
      "Fuseau horaire aligne avec l'Europe et overlap flexible avec les equipes MENA.",
      "Des couts plus bas pour investir davantage dans la qualite produit.",
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
    "Des etudes de cas montrant comment Saf9a livre des projets de developpement web, DevOps et automatisation IA avec des resultats mesurables.",
  servicesIntro:
    "Des services de developpement web, DevOps et automatisation IA depuis Tunis, Tunisie avec delais clairs et livrables definis.",
};
