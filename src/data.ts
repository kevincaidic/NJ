import { Project, Service, Testimonial, ProcessStep, Credential, ImpactMet, PricingPlan, ToolItem, FAQItem } from './types';

export const HERO_TAGLINES = [
  "Crafting Digital Products That Drive Series-A Growth",
  "Premium UI/UX Design for Ambitious Startups Worldwide",
  "High-Converting Interfaces Driven by Rigorous Product Thinking"
];

export const TRUSTED_BRANDS = [
  { name: 'Aether Capital', logoText: 'A E T H E R', industry: 'Fintech VC' },
  { name: 'Helix Bio', logoText: 'H E L I X', industry: 'Biomedical' },
  { name: 'Zetta SaaS', logoText: 'Z E T T A', industry: 'AI Automations' },
  { name: 'Lyra Sound', logoText: 'L Y R A', industry: 'Audio Platform' },
  { name: 'Synapse Tech', logoText: 'S Y N A P S E', industry: 'Cognitive Computing' },
  { name: 'Velo Commerce', logoText: 'V E L O', industry: 'B2B Retail' }
];

export const PROJECT_DATA: Project[] = [
  {
    id: 'healthcardgo',
    title: 'HealthCardGo: Healthcare Platform',
    client: 'HealthCardGo Inc',
    category: 'Healthcare & Fintech',
    year: '2025',
    description: 'Reformed Aether’s entire investment platform UI, translating complex financial assets, secondary markets, and portfolios into an elegant, high-impact dashboard tailored for institutional allocators.',
    impactResult: '+ 140%',
    impactLabel: 'Conversion Rate on Investor Signup',
    scope: ['Institutional UX', 'Component Library', 'Interactive Charts', 'Fintech Branding'],
    color: 'from-blue-600/20 to-indigo-600/20 text-brand-cobalt bg-indigo-50/50',
    image: '/project/healthcardgo front.webp'
  }
];

export const SERVICE_DATA: Service[] = [
  {
    id: 'exhibition-design',
    title: 'Design Exhibition Participation',
    shortDescription: 'Showcased innovative design work at professional exhibitions',
    fullDescription: 'Showcased innovative design work at professional exhibitions, demonstrating cutting-edge design principles and creative excellence in the field.',
    features: ['Exhibition-quality design work', 'Creative direction showcase', 'Design thinking presentations', 'Professional portfolio displays'],
    iconName: 'Award'
  },
  {
    id: 'healthcardgo-design',
    title: 'HealthCardGo Platform Design',
    shortDescription: 'Successfully completed UX/UI design for healthcare platform',
    fullDescription: 'Successfully completed comprehensive UX/UI design for healthcare platform with focus on accessibility, data security, and seamless patient interaction.',
    features: ['Complete healthcare UI/UX design', 'Patient portal interfaces', 'Medical workflow optimization', 'HIPAA-compliant design systems'],
    iconName: 'Heart'
  },
  {
    id: 'ojt-training',
    title: 'Professional Training Program',
    shortDescription: 'Completed intensive on-the-job training program in design',
    fullDescription: 'Completed intensive on-the-job training program in design, covering advanced UX/UI methodologies, industry best practices, and emerging design technologies.',
    features: ['OJT Certification', 'Advanced design methodologies', 'Professional skill development', 'Continuous learning commitment'],
    iconName: 'Briefcase'
  },
  {
    id: 'pasinati-training',
    title: 'Pasinati Professional Development',
    shortDescription: 'Specialized professional development training and certification',
    fullDescription: 'Completed specialized professional development training (Day 1 & Day 3) focusing on advanced design concepts, industry trends, and continuous skill enhancement.',
    features: ['Pasinati Day 1 Certificate', 'Pasinati Day 3 Certificate', 'Advanced training completion', 'Design excellence standards'],
    iconName: 'Award'
  },
  {
    id: 'portfolio-growth',
    title: 'Systematic Design Excellence',
    shortDescription: 'Building comprehensive portfolio through continuous professional development',
    fullDescription: 'Building a comprehensive portfolio through continuous professional development, project execution, and industry recognition through exhibitions and certifications.',
    features: ['Portfolio projects', 'Industry certifications', 'Design excellence standards', 'Professional growth'],
    iconName: 'Zap'
  }
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'PROFESSIONAL DEVELOPMENT',
    title: 'Design Exhibition Participation',
    description: 'Showcased innovative design work at professional exhibitions, demonstrating cutting-edge design principles and creative excellence in the field.',
    deliverables: ['Exhibition-quality design work', 'Creative direction showcase', 'Design thinking presentations'],
    duration: 'Ongoing'
  },
  {
    step: '02',
    phase: 'PROJECT EXECUTION',
    title: 'HealthCardGo Platform Design',
    description: 'Successfully completed comprehensive UX/UI design for healthcare platform with focus on accessibility, data security, and seamless patient interaction.',
    deliverables: ['Complete healthcare UI/UX design', 'Patient portal interfaces', 'Medical workflow optimization'],
    duration: 'Completed'
  },
  {
    step: '03',
    phase: 'TRAINING & CERTIFICATION',
    title: 'Professional Training Program',
    description: 'Completed intensive on-the-job training program in design, covering advanced UX/UI methodologies, industry best practices, and emerging design technologies.',
    deliverables: ['OJT Certification', 'Advanced design methodologies', 'Professional skill development'],
    duration: 'Completed'
  },
  {
    step: '04',
    phase: 'CONTINUOUS LEARNING',
    title: 'Pasinati Professional Development',
    description: 'Completed specialized professional development training (Day 1 & Day 3) focusing on advanced design concepts, industry trends, and continuous skill enhancement.',
    deliverables: ['Pasinati Day 1 Certificate', 'Pasinati Day 3 Certificate', 'Advanced training completion'],
    duration: 'Completed'
  },
  {
    step: '05',
    phase: 'PORTFOLIO GROWTH',
    title: 'Systematic Design Excellence',
    description: 'Building a comprehensive portfolio through continuous professional development, project execution, and industry recognition through exhibitions and certifications.',
    deliverables: ['Portfolio projects', 'Industry certifications', 'Design excellence standards'],
    duration: 'Ongoing'
  }
];

export const IMPACT_METRICS: ImpactMet[] = [
  {
    metric: '+148%',
    label: 'Institutional Onboarding Rate',
    context: 'Across active clients in Fintech and asset allocation'
  },
  {
    metric: '$1.2B+',
    label: 'Capital Raised by Seed/Series A Clients',
    context: 'Using high-fidelity interactive visual pitch designs'
  },
  {
    metric: '4.9/5',
    label: 'Average App Store Rating',
    context: 'Awarded to three mobile products launched under my lead design'
  },
  {
    metric: '68%',
    label: 'Developer Front-End Handoff Velocity',
    context: 'Achieved through component design token optimization'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Julian Thorne',
    role: 'Co-Founder & CEO',
    company: 'Aether Capital',
    quote: "Elena Vance does not build templates. She embedded directly in our team and dissected our investor portal from first principles. Her fintech UX redesign didn’t just look beautiful; it literally boosted our Series A subscription rates by 140% in four weeks.",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    results: '+140% Signup Growth'
  },
  {
    id: 't-2',
    author: 'Dr. Sarah Kincaid',
    role: 'Chief Medical Product Officer',
    company: 'Helix Medical',
    quote: "Our bioinformatics analytics dashboard was a scientific jungle of rows. Elena stepped in, synthesized our workflows, and delivered a 4-pane system layout that our clinical bio-chemists now enjoy using every single day. She reduced scientist protocol errors by 62%.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    results: '-62% Task Errors'
  },
  {
    id: 't-3',
    author: 'Marcus Vance',
    role: 'VP of Product Engineering',
    company: 'Zetta Automations',
    quote: "As an engineering VP, I usually dread design handoffs. Elena’s Figma systems are built like production code—perfect auto-layouts, tokens aligning directly with tailwind variables, and complete responsive states. She cut our styling cycles in half.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    results: '2x Faster Code Cycles'
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'c-1',
    title: 'Design Exhibition Participant',
    issuer: 'Professional Exhibition',
    year: '2024',
    badgeColor: 'border-blue-200 bg-blue-50/50 text-blue-700',
    image: '/cert/exhibit.webp'
  },
  {
    id: 'c-2',
    title: 'HealthCardGo Platform Design',
    issuer: 'Project Completion',
    year: '2025',
    badgeColor: 'border-purple-200 bg-purple-50/50 text-purple-700',
    image: '/cert/healthcardgo cert.webp'
  },
  {
    id: 'c-3',
    title: 'OJT Certification',
    issuer: 'Training Program',
    year: '2023',
    badgeColor: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
    image: '/cert/ojt.webp'
  },
  {
    id: 'c-4',
    title: 'Pasinati Training Day 1',
    issuer: 'Professional Development',
    year: '2023',
    badgeColor: 'border-amber-200 bg-amber-50/50 text-amber-700',
    image: '/cert/pasinati day 1.webp'
  },
  {
    id: 'c-5',
    title: 'Pasinati Training Day 3',
    issuer: 'Professional Development',
    year: '2024',
    badgeColor: 'border-rose-200 bg-rose-50/50 text-rose-700',
    image: '/cert/pasinati day 3.webp'
  }
];

export const DESIGN_TOOLKIT: ToolItem[] = [
  { name: 'Figma Studio (Tokens, Auto Layout 4.0)', category: 'design', percentage: 100, iconName: 'Figma', experienceYears: 7 },
  { name: 'Framer (Interactive Logic & Layout)', category: 'prototyping', percentage: 95, iconName: 'Frame', experienceYears: 4 },
  { name: 'Spline (3D Interaction Space)', category: 'design', percentage: 80, iconName: 'Hexagon', experienceYears: 2 },
  { name: 'Adobe After Effects (Kinetic Curves)', category: 'prototyping', percentage: 90, iconName: 'Film', experienceYears: 5 },
  { name: 'CSS Tailwind v4 & Flexbox Logic', category: 'workflow', percentage: 90, iconName: 'Cpu', experienceYears: 6 },
  { name: 'Maze & Hotjar (User Friction Diagnostics)', category: 'workflow', percentage: 85, iconName: 'Activity', experienceYears: 4 },
  { name: 'Prototyping & Variables Logic', category: 'prototyping', percentage: 98, iconName: 'Zap', experienceYears: 5 },
  { name: 'React component setup', category: 'workflow', percentage: 75, iconName: 'Code', experienceYears: 3 }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p-1',
    name: 'The MVP Sprint Package',
    price: '$6,500',
    billing: 'flat project fee',
    desc: 'Perfect for Seed or Pre-Seed startups needing a high-fidelity, high-converting checkout loop or a 5-screen interactive MVP to secure investor capital.',
    deliverables: [
      'Comprehensive product discovery brief',
      'Interactive low-fidelity wireframes',
      '5 core high-fidelity styled MVP views',
      'High-fidelity clickable Figma prototype',
      'Fully-loaded Figma Component Styles repository'
    ],
    popular: false,
    cta: 'Book MVP Discovery Call'
  },
  {
    id: 'p-2',
    name: 'Design Partner Retainer',
    price: '$9,500',
    billing: 'monthly subscription',
    desc: 'Deeply embedded design partner for Series A start-ups or active design product teams needing premium output without the high overhead of a design agency.',
    deliverables: [
      'Dedicated Slack channel integration',
      'Up to 30 active product design hours/week',
      'Continuous UI/UX creation & feature builds',
      'Active developer QA & staging code reviews',
      'Design tokens & component library maintenance'
    ],
    popular: true,
    cta: 'Secure Retainer Alignment'
  },
  {
    id: 'p-3',
    name: 'Custom Product Scale',
    price: '$15,000+',
    billing: 'tiered milestone fee',
    desc: 'End-to-end UX/UI overhauls for complex cross-platform setups, biomedical databases, genomic analytics consoles, or institutional fintech packages.',
    deliverables: [
      'Complete pre-design user audits & heatmaps',
      'Multi-platform system mental models mapping',
      'Up to 25 custom analytical dashboard displays',
      'Animated interactions & advanced kinetic logic',
      'Comprehensive CSS variables mapping documentation'
    ],
    popular: false,
    cta: 'Start Enterprise Diagnosis'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you handle collaboration with our engineering teams?',
    answer: 'I build Figma systems using code-aligned layouts: absolute mathematical pixel systems, exact auto-layout settings, custom component states, and standardized token scales (margins, paddings, borders). During handoff, we do a live walkthrough explaining interactive logic, responsive stretching behavior, and the CSS token schema.',
    category: 'process'
  },
  {
    id: 'faq-2',
    question: 'How quickly will we see high-fidelity UI visual screens?',
    answer: 'We do not rush design. High-fidelity layouts require a solid underlying layout skeleton. Typically, the low-fidelity gray-box maps are delivered within the first 1-2 weeks. After you approve the layout structure, we deliver the premium creative direction draft in week 3.',
    category: 'timeline'
  },
  {
    id: 'faq-3',
    question: 'Do you work in active monthly subscription sprints?',
    answer: 'Yes! The Design Partner Retainer pricing works just like an ultra-responsive, elite, remote employee. You subscribe, load requests into our shared backlog, and receive high-priority, daily design updates directly into Figma and Slack.',
    category: 'pricing'
  },
  {
    id: 'faq-4',
    question: 'What is your research methodology for complex database designs?',
    answer: 'Before putting pixels to paper, I audit user behaviors via tool session records (hotjar/maze), qualitative founder and scientist user interviews, and competitor tear-downs. We then create flow charts comparing the current workflow against our optimized paths to ensure the visual solutions match human psychology.',
    category: 'expertise'
  },
  {
    id: 'faq-5',
    question: 'Are design revisions limited in these pricing packages?',
    answer: 'In the MVP Sprint, we include up to two comprehensive rounds of revisions on the high-fidelity UI direction. In the Retainer tier, reviews are continuous—we shape the product incrementally inside your daily workflow, with no arbitrary limits or gatekeeping.',
    category: 'process'
  }
];
