export type SiteMessages = {
  common: {
    skipToContent: string;
    explore: string;
    contact: string;
    email: string;
    location: string;
    socials: string;
    language: string;
    theme: string;
    changeLanguage: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
    primaryNavigation: string;
    scroll: string;
    allRightsReserved: string;
    privacyPolicy: string;
    contactUs: string;
    viewServices: string;
    viewWork: string;
  };
  home: {
    servicesOverline: string;
    servicesTitle: string;
    servicesDescription: string;
    servicesCta: string;
    processOverline: string;
    processTitle: string;
    processDescription: string;
    workOverline: string;
    workTitle: string;
    workCta: string;
    proofOverline: string;
    proofTitle: string;
    proofDescription: string;
    faqOverline: string;
    faqTitle: string;
    faqDescription: string;
    aboutOverline: string;
    aboutTitle: string;
    stack: string;
    whyTunisia: string;
    email: string;
    heroTitle: string;
    heroDescription: string;
  };
  pageHero: {
    delivery: string;
    uptime: string;
    handoffs: string;
  };
  productShowcase: {
    command: string;
    live: string;
    review: string;
    timeline: string;
    risk: string;
    pipeline: string;
    observability: string;
  };
  scrollStory: {
    overline: string;
    of: string;
    build: string;
    test: string;
    deploy: string;
    monitor: string;
    productionLive: string;
  };
  caseStudyCard: {
    cta: string;
  };
  caseStudyVisual: {
    impact: string;
    cockpit: string;
    live: string;
  };
  forms: {
    api: {
      invalidRequest: string;
      invalidContact: string;
      invalidBooking: string;
      sendFailed: string;
      submitFailed: string;
      providerMissing: string;
    };
    contact: {
      validation: string;
      success: string;
      fallbackError: string;
      submitError: string;
      name: string;
      email: string;
      company: string;
      projectDetails: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      detailsPlaceholder: string;
      sending: string;
      submit: string;
      note: string;
    };
    booking: {
      validation: string;
      success: string;
      fallbackError: string;
      submitError: string;
      name: string;
      email: string;
      company: string;
      callType: string;
      preferredDate: string;
      preferredWindow: string;
      prepare: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      callTypePlaceholder: string;
      callTypes: string[];
      timeWindows: string[];
      detailsPlaceholder: string;
      sending: string;
      submit: string;
      note: string;
    };
  };
  pages: {
    home: {
      metadata: {
        title: string;
        keywords: string[];
      };
    };
    services: {
      metadata: {
        title: string;
        description: string;
        keywords: string[];
      };
      hero: {
        overline: string;
        title: string;
        description: string;
        secondaryLabel: string;
      };
      offerLabels: {
        whatYouGet: string;
        timeline: string;
        idealFor: string;
      };
      cta: {
        headline: string;
        description: string;
        secondaryLabel: string;
      };
    };
    work: {
      metadata: {
        title: string;
        description: string;
        keywords: string[];
      };
      hero: {
        overline: string;
        title: string;
        secondaryLabel: string;
      };
      labels: {
        problem: string;
        solution: string;
        results: string;
        timeline: string;
        techStack: string;
        impact: string;
      };
      cta: {
        headline: string;
        description: string;
        secondaryLabel: string;
      };
    };
    about: {
      metadata: {
        title: string;
        description: string;
        keywords: string[];
      };
      hero: {
        overline: string;
        title: string;
        secondaryLabel: string;
      };
      founders: {
        overline: string;
        title: string;
        description: string;
      };
      whyTunisia: {
        overline: string;
        title: string;
        description: string;
      };
      techStack: {
        title: string;
        description: string;
      };
    };
    contact: {
      metadata: {
        title: string;
        description: string;
        keywords: string[];
      };
      hero: {
        overline: string;
        title: string;
      };
      customBooking: {
        title: string;
        description: string;
      };
    };
    book: {
      metadata: {
        title: string;
        description: string;
        keywords: string[];
      };
      hero: {
        overline: string;
        title: string;
      };
      next: {
        title: string;
        steps: string[];
      };
      email: {
        title: string;
        description: string;
      };
    };
    privacy: {
      metadata: {
        title: string;
        description: string;
      };
      hero: {
        overline: string;
        title: string;
        description: string;
      };
      paragraphs: string[];
      contactPrefix: string;
      contactSuffix: string;
    };
  };
};

export const messages: SiteMessages = {
  common: {
    skipToContent: "Skip to content",
    explore: "Explore",
    contact: "Contact",
    email: "Email",
    location: "Location",
    socials: "Socials",
    language: "Language",
    theme: "Theme",
    changeLanguage: "Change language",
    toggleTheme: "Toggle theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNavigation: "Primary navigation",
    scroll: "Scroll",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy policy",
    contactUs: "Contact us",
    viewServices: "View services",
    viewWork: "View work",
  },
  home: {
    servicesOverline: "Delivery system",
    servicesTitle: "One team across product, cloud, and automation",
    servicesDescription:
      "Each capability connects into the next: clarify the product, ship it cleanly, then automate the work slowing the team down.",
    servicesCta: "View services",
    processOverline: "Method",
    processTitle: "A calm path from brief to production",
    processDescription:
      "The work moves as one continuous sequence: scope, build, harden, then iterate from real usage.",
    workOverline: "Outcomes",
    workTitle: "Projects that show the level of execution",
    workCta: "View work",
    proofOverline: "Proof",
    proofTitle: "Teams choose Saf9a when they need progress without noise",
    proofDescription:
      "Fewer handoffs, sharper decisions, and software that holds up in production.",
    faqOverline: "FAQ",
    faqTitle: "Questions before we start",
    faqDescription: "The practical details before you book a call.",
    aboutOverline: "Operating base",
    aboutTitle: "A compact senior team close to the work",
    stack: "Core stack",
    whyTunisia: "Why Tunis",
    email: "Direct email",
    heroTitle: "Launch faster. Operate cleaner. Automate smarter.",
    heroDescription:
      "Saf9a builds web products, cloud delivery systems, and AI workflows for teams that need production-grade execution without enterprise drag.",
  },
  pageHero: {
    delivery: "delivery",
    uptime: "uptime",
    handoffs: "handoffs",
  },
  productShowcase: {
    command: "deployment",
    live: "prod stable",
    review: "AI review",
    timeline: "sprint plan",
    risk: "low risk",
    pipeline: "pipeline",
    observability: "observability",
  },
  scrollStory: {
    overline: "Method",
    of: "of",
    build: "Build",
    test: "Test",
    deploy: "Deploy",
    monitor: "Monitor",
    productionLive: "Production live",
  },
  caseStudyCard: {
    cta: "View full case study",
  },
  caseStudyVisual: {
    impact: "Impact",
    cockpit: "Delivery cockpit",
    live: "Live",
  },
  forms: {
    api: {
      invalidRequest: "Invalid request.",
      invalidContact: "Please provide a name, valid email, and message.",
      invalidBooking: "Please provide your name, valid email, booking type, and details.",
      sendFailed: "Email failed to send. Please try again.",
      submitFailed: "Form submission failed. Please try again.",
      providerMissing: "Email provider not configured.",
    },
    contact: {
      validation: "Please provide your name, a valid email, and a short message.",
      success: "Thanks for reaching out. We will reply within one business day.",
      fallbackError: "Something went wrong.",
      submitError: "Something went wrong. Please try again.",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      projectDetails: "Project details",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Company or project",
      detailsPlaceholder: "Tell us about your goals, timeline, and the outcomes you need.",
      sending: "Sending...",
      submit: "Send message",
      note: "We reply within one business day.",
    },
    booking: {
      validation: "Please provide your name, a valid email, call type, and a short brief.",
      success:
        "Thanks. We received your booking request and will confirm by email within one business day.",
      fallbackError: "Something went wrong.",
      submitError: "Something went wrong. Please try again.",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      callType: "Call type",
      preferredDate: "Preferred date (optional)",
      preferredWindow: "Preferred time window",
      prepare: "What should we prepare for?",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Company or project",
      callTypePlaceholder: "Select a call type",
      callTypes: [
        "Discovery call",
        "Project scoping",
        "DevOps planning",
        "AI automation review",
        "General consultation",
      ],
      timeWindows: ["Flexible", "Morning", "Afternoon", "Late afternoon"],
      detailsPlaceholder:
        "Tell us the goal of the call, context, timeline, and anything you want reviewed.",
      sending: "Sending...",
      submit: "Request booking",
      note: "We confirm bookings by email within one business day.",
    },
  },
  pages: {
    home: {
      metadata: {
        title: "Web Development, DevOps & AI Automation in Tunisia",
        keywords: [
          "Saf9a",
          "web development Tunisia",
          "DevOps Tunisia",
          "AI automation Tunisia",
          "web development studio Tunis",
        ],
      },
    },
    services: {
      metadata: {
        title: "Web Development, DevOps & AI Automation Services",
        description:
          "Explore Saf9a services for web development, DevOps consulting, and AI automation from Tunis, Tunisia.",
        keywords: [
          "web development services Tunisia",
          "DevOps consulting Tunisia",
          "AI automation services Tunisia",
          "Tunis software studio",
        ],
      },
      hero: {
        overline: "Services",
        title: "Product, cloud, and AI delivery in one system.",
        description:
          "Founder-led delivery from Tunis, Tunisia with clear scopes, fast timelines, and production-ready execution.",
        secondaryLabel: "Talk to us",
      },
      offerLabels: {
        whatYouGet: "What you get",
        timeline: "Timeline",
        idealFor: "Ideal for:",
      },
      cta: {
        headline: "Not sure which offer fits?",
        description: "We can help you choose the right scope in a 20-minute discovery call.",
        secondaryLabel: "Contact us",
      },
    },
    work: {
      metadata: {
        title: "Case Studies in Web Development, DevOps & AI Automation",
        description:
          "See how Saf9a delivers web development, DevOps, and AI automation projects with measurable business results.",
        keywords: [
          "web development case studies",
          "DevOps case studies",
          "AI automation projects",
          "Saf9a work",
        ],
      },
      hero: {
        overline: "Case studies",
        title: "Proof that the system ships.",
        secondaryLabel: "View services",
      },
      labels: {
        problem: "Problem",
        solution: "Solution",
        results: "Results",
        timeline: "Timeline",
        techStack: "Tech stack",
        impact: "Impact",
      },
      cta: {
        headline: "Want to build something similar?",
        description: "Tell us about your project and we will suggest the best approach.",
        secondaryLabel: "Contact us",
      },
    },
    about: {
      metadata: {
        title: "About Saf9a",
        description:
          "Meet Saf9a, a Tunis, Tunisia studio offering web development, DevOps, and AI automation with direct founder-led delivery.",
        keywords: [
          "about Saf9a",
          "Tunis web development studio",
          "DevOps Tunisia",
          "AI automation Tunisia",
        ],
      },
      hero: {
        overline: "About",
        title: "Senior builders. Small team. Clean execution.",
        secondaryLabel: "View work",
      },
      founders: {
        overline: "Founders",
        title: "Direct access to the people doing the work",
        description: "No account managers, no handoffs. You work with the builders.",
      },
      whyTunisia: {
        overline: "Why Tunisia",
        title: "A strategic base for global delivery",
        description: "We combine local speed with international quality expectations.",
      },
      techStack: {
        title: "Core tech stack",
        description: "Modern, scalable tools that keep delivery fast and reliable.",
      },
    },
    contact: {
      metadata: {
        title: "Contact Saf9a",
        description:
          "Contact Saf9a in Tunis, Tunisia about web development, DevOps, and AI automation projects.",
        keywords: [
          "contact Saf9a",
          "Tunis web development contact",
          "DevOps Tunisia contact",
        ],
      },
      hero: {
        overline: "Contact",
        title: "Start with a clear signal.",
      },
      customBooking: {
        title: "Need a custom booking?",
        description:
          "Share a preferred time window and we will confirm the best slot by email.",
      },
    },
    book: {
      metadata: {
        title: "Request a Call",
        description:
          "Request a call with Saf9a for web development, DevOps, or AI automation projects and planning.",
        keywords: [
          "request a call Saf9a",
          "book web development consultation",
          "DevOps consultation Tunisia",
        ],
      },
      hero: {
        overline: "Booking",
        title: "Book a focused build call.",
      },
      next: {
        title: "What happens next",
        steps: [
          "We review your request and confirm the best call format.",
          "We reply by email within one business day with a confirmed time.",
          "We show up prepared with context, questions, and next steps.",
        ],
      },
      email: {
        title: "Prefer email instead?",
        description:
          "Send your availability and project context directly and we will take it from there.",
      },
    },
    privacy: {
      metadata: {
        title: "Privacy Policy",
        description:
          "Privacy policy for Saf9a site visitors, contact requests, and booking requests.",
      },
      hero: {
        overline: "Privacy",
        title: "Minimal data. Clear handling.",
        description: "We respect your privacy and keep data collection to a minimum.",
      },
      paragraphs: [
        "We only collect information you choose to share through the contact form, booking request form, or by emailing us directly. We use this information to respond to your request and to provide project estimates or proposals.",
        "We do not sell or rent your data. We may store communication records for internal reference and compliance.",
      ],
      contactPrefix: "If you have questions about your data or want it removed, contact us at",
      contactSuffix: ".",
    },
  },
};

export const messagesFr: SiteMessages = {
  common: {
    skipToContent: "Aller au contenu",
    explore: "Explorer",
    contact: "Contact",
    email: "Email",
    location: "Localisation",
    socials: "Reseaux",
    language: "Langue",
    theme: "Theme",
    changeLanguage: "Changer de langue",
    toggleTheme: "Changer le theme",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primaryNavigation: "Navigation principale",
    scroll: "Defiler",
    allRightsReserved: "Tous droits reserves.",
    privacyPolicy: "Politique de confidentialite",
    contactUs: "Nous contacter",
    viewServices: "Voir les services",
    viewWork: "Voir les realisations",
  },
  home: {
    servicesOverline: "Systeme de livraison",
    servicesTitle: "Une seule equipe pour le produit, le cloud et l'automatisation",
    servicesDescription:
      "Chaque service s'emboite dans le suivant: clarifier le produit, le livrer proprement, puis automatiser ce qui ralentit l'equipe.",
    servicesCta: "Voir les services",
    processOverline: "Methode",
    processTitle: "Un rythme calme du brief a la production",
    processDescription:
      "Le travail avance comme une sequence continue: cadrage, construction, durcissement, puis iteration sur usage reel.",
    workOverline: "Resultats",
    workTitle: "Des projets qui montrent le niveau d'execution",
    workCta: "Voir les realisations",
    proofOverline: "Confiance",
    proofTitle: "Des equipes choisissent Saf9a pour avancer sans bruit",
    proofDescription:
      "Moins de passations, des decisions plus nettes, et un produit qui tient en production.",
    faqOverline: "FAQ",
    faqTitle: "Questions avant de demarrer",
    faqDescription: "Les points pratiques avant de reserver un appel.",
    aboutOverline: "Base operationnelle",
    aboutTitle: "Une equipe compacte, senior, et proche de l'execution",
    stack: "Stack principale",
    whyTunisia: "Pourquoi Tunis",
    email: "Email direct",
    heroTitle: "Lancer plus vite. Operer plus propre. Automatiser mieux.",
    heroDescription:
      "Saf9a construit des produits web, des systemes cloud et des workflows IA pour les equipes qui veulent une execution nette, rapide et prete pour la production.",
  },
  pageHero: {
    delivery: "livraison",
    uptime: "uptime",
    handoffs: "passations",
  },
  productShowcase: {
    command: "deploiement",
    live: "prod stable",
    review: "revue IA",
    timeline: "plan sprint",
    risk: "risque faible",
    pipeline: "pipeline",
    observability: "observabilite",
  },
  scrollStory: {
    overline: "Methode",
    of: "sur",
    build: "Build",
    test: "Test",
    deploy: "Deploy",
    monitor: "Monitor",
    productionLive: "Production en ligne",
  },
  caseStudyCard: {
    cta: "Voir l'etude de cas",
  },
  caseStudyVisual: {
    impact: "Impact",
    cockpit: "Cockpit de livraison",
    live: "Live",
  },
  forms: {
    api: {
      invalidRequest: "Requete invalide.",
      invalidContact: "Merci d'indiquer un nom, un email valide et un message.",
      invalidBooking:
        "Merci d'indiquer votre nom, un email valide, le type de reservation et les details.",
      sendFailed: "L'email n'a pas pu etre envoye. Merci de reessayer.",
      submitFailed: "L'envoi du formulaire a echoue. Merci de reessayer.",
      providerMissing: "Le fournisseur email n'est pas configure.",
    },
    contact: {
      validation: "Merci d'indiquer votre nom, un email valide et un court message.",
      success: "Merci. Nous vous repondrons sous un jour ouvre.",
      fallbackError: "Une erreur est survenue.",
      submitError: "Une erreur est survenue. Merci de reessayer.",
      name: "Nom",
      email: "Email",
      company: "Entreprise (optionnel)",
      projectDetails: "Details du projet",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@entreprise.com",
      companyPlaceholder: "Entreprise ou projet",
      detailsPlaceholder:
        "Parlez-nous de vos objectifs, du calendrier et des resultats attendus.",
      sending: "Envoi...",
      submit: "Envoyer le message",
      note: "Nous repondons sous un jour ouvre.",
    },
    booking: {
      validation:
        "Merci d'indiquer votre nom, un email valide, le type d'appel et un court brief.",
      success:
        "Merci. Nous avons bien recu votre demande et confirmerons le creneau par email sous un jour ouvre.",
      fallbackError: "Une erreur est survenue.",
      submitError: "Une erreur est survenue. Merci de reessayer.",
      name: "Nom",
      email: "Email",
      company: "Entreprise (optionnel)",
      callType: "Type d'appel",
      preferredDate: "Date souhaitee (optionnel)",
      preferredWindow: "Plage horaire preferee",
      prepare: "Que devons-nous preparer ?",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@entreprise.com",
      companyPlaceholder: "Entreprise ou projet",
      callTypePlaceholder: "Choisir un type d'appel",
      callTypes: [
        "Appel de decouverte",
        "Cadrage projet",
        "Planification DevOps",
        "Revue automatisation IA",
        "Consultation generale",
      ],
      timeWindows: ["Flexible", "Matin", "Apres-midi", "Fin d'apres-midi"],
      detailsPlaceholder:
        "Donnez le contexte, l'objectif de l'appel, le calendrier et ce que vous voulez que nous preparions.",
      sending: "Envoi...",
      submit: "Demander un rendez-vous",
      note: "Nous confirmons les demandes par email sous un jour ouvre.",
    },
  },
  pages: {
    home: {
      metadata: {
        title: "Developpement web, DevOps et automatisation IA en Tunisie",
        keywords: [
          "Saf9a",
          "developpement web Tunisie",
          "DevOps Tunisie",
          "automatisation IA Tunisie",
          "studio logiciel Tunis",
        ],
      },
    },
    services: {
      metadata: {
        title: "Services de developpement web, DevOps et automatisation IA",
        description:
          "Explorez les services Saf9a en developpement web, conseil DevOps et automatisation IA depuis Tunis, Tunisie.",
        keywords: [
          "services developpement web Tunisie",
          "conseil DevOps Tunisie",
          "services automatisation IA Tunisie",
          "studio logiciel Tunis",
        ],
      },
      hero: {
        overline: "Services",
        title: "Produit, cloud et IA dans un seul systeme.",
        description:
          "Une livraison dirigee par les fondateurs depuis Tunis, Tunisie avec perimetres clairs, delais rapides et execution prete pour la production.",
        secondaryLabel: "Nous contacter",
      },
      offerLabels: {
        whatYouGet: "Ce que vous obtenez",
        timeline: "Calendrier",
        idealFor: "Ideal pour :",
      },
      cta: {
        headline: "Vous ne savez pas quelle offre convient ?",
        description:
          "Nous pouvons vous aider a choisir le bon perimetre pendant un appel de decouverte de 20 minutes.",
        secondaryLabel: "Nous contacter",
      },
    },
    work: {
      metadata: {
        title: "Etudes de cas en developpement web, DevOps et automatisation IA",
        description:
          "Decouvrez comment Saf9a livre des projets de developpement web, DevOps et automatisation IA avec des resultats business mesurables.",
        keywords: [
          "etudes de cas developpement web",
          "etudes de cas DevOps",
          "projets automatisation IA",
          "Saf9a realisations",
        ],
      },
      hero: {
        overline: "Etudes de cas",
        title: "La preuve que le systeme livre.",
        secondaryLabel: "Voir les services",
      },
      labels: {
        problem: "Probleme",
        solution: "Solution",
        results: "Resultats",
        timeline: "Calendrier",
        techStack: "Stack technique",
        impact: "Impact",
      },
      cta: {
        headline: "Vous voulez construire quelque chose de similaire ?",
        description:
          "Parlez-nous de votre projet et nous vous proposerons la meilleure approche.",
        secondaryLabel: "Nous contacter",
      },
    },
    about: {
      metadata: {
        title: "A propos de Saf9a",
        description:
          "Decouvrez Saf9a, studio base a Tunis pour le developpement web, DevOps et automatisation IA.",
        keywords: [
          "a propos Saf9a",
          "studio developpement web Tunis",
          "DevOps Tunisie",
          "automatisation IA Tunisie",
        ],
      },
      hero: {
        overline: "A propos",
        title: "Builders seniors. Petite equipe. Execution nette.",
        secondaryLabel: "Voir les realisations",
      },
      founders: {
        overline: "Fondateurs",
        title: "Acces direct aux personnes qui construisent",
        description:
          "Pas d'account managers, pas de passations inutiles. Vous travaillez avec les builders.",
      },
      whyTunisia: {
        overline: "Pourquoi la Tunisie",
        title: "Une base strategique pour livrer a l'international",
        description: "Nous combinons vitesse locale et exigences de qualite internationales.",
      },
      techStack: {
        title: "Stack technique principale",
        description:
          "Des outils modernes et scalables pour garder une livraison rapide et fiable.",
      },
    },
    contact: {
      metadata: {
        title: "Contacter Saf9a",
        description:
          "Contactez Saf9a a Tunis, Tunisie pour vos projets en developpement web, DevOps et automatisation IA.",
        keywords: [
          "contact Saf9a",
          "contact developpement web Tunis",
          "contact DevOps Tunisie",
        ],
      },
      hero: {
        overline: "Contact",
        title: "Commencer avec un signal clair.",
      },
      customBooking: {
        title: "Besoin d'un creneau personnalise ?",
        description:
          "Partagez une plage horaire preferee et nous confirmerons le meilleur creneau par email.",
      },
    },
    book: {
      metadata: {
        title: "Demander un appel",
        description:
          "Demandez un appel avec Saf9a pour vos projets de developpement web, DevOps ou automatisation IA.",
        keywords: [
          "demander un appel Saf9a",
          "consultation developpement web",
          "consultation DevOps Tunisie",
        ],
      },
      hero: {
        overline: "Reservation",
        title: "Reserver un appel de cadrage.",
      },
      next: {
        title: "La suite",
        steps: [
          "Nous relisons votre demande et confirmons le format d'appel le plus utile.",
          "Nous repondons par email sous un jour ouvre avec un horaire confirme.",
          "Nous arrivons prepares avec le contexte, les questions et les prochaines etapes.",
        ],
      },
      email: {
        title: "Vous preferez l'email ?",
        description:
          "Envoyez directement vos disponibilites et le contexte du projet, nous prenons la suite.",
      },
    },
    privacy: {
      metadata: {
        title: "Politique de confidentialite",
        description:
          "Politique de confidentialite pour les visiteurs du site Saf9a, les demandes de contact et les demandes de reservation.",
      },
      hero: {
        overline: "Confidentialite",
        title: "Donnees minimales. Traitement clair.",
        description:
          "Nous respectons votre vie privee et limitons au maximum la collecte de donnees.",
      },
      paragraphs: [
        "Nous collectons uniquement les informations que vous choisissez de partager via le formulaire de contact, le formulaire de reservation ou par email direct. Nous utilisons ces informations pour repondre a votre demande et preparer une estimation ou une proposition de projet.",
        "Nous ne vendons ni ne louons vos donnees. Nous pouvons conserver les echanges pour reference interne et pour des besoins de conformite.",
      ],
      contactPrefix:
        "Si vous avez des questions sur vos donnees ou si vous souhaitez leur suppression, contactez-nous a",
      contactSuffix: ".",
    },
  },
};

export const messagesByLocale = {
  en: messages,
  fr: messagesFr,
} as const;
