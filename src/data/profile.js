// Profile data - centralized content management
export const PROFILE = {
    name: 'Mahendra Kumar',
    title: 'Software Engineer',
    tagline: 'Building distributed systems that scale',
    description: `Backend-focused fullstack developer with expertise in building 
    distributed systems, event-driven microservices, and cloud-native applications. 
    Passionate about open source and creating developer tools that make a difference.`,
    location: 'Santiago, Chile',
    // resumeUrl can be added here in the future
}

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        url: 'https://github.com/mahendraHegde',
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mahendrahegde9/',
        icon: 'linkedin',
    },
    {
        name: 'Calendar',
        url: 'https://cal.com/mahendra-hegde',
        icon: 'calendar',
    },
    {
        name: 'NPM',
        url: 'https://www.npmjs.com/~maehendra9',
        icon: 'npm',
    },
]

export const TECH_STACK = {
    languages: [
        { name: 'TypeScript', proficiency: 95 },
        { name: 'Go', proficiency: 85 },
        { name: 'JavaScript', proficiency: 95 },
        { name: 'Python', proficiency: 75 },
        { name: 'SQL', proficiency: 85 },
    ],
    backend: [
        { name: 'Node.js', category: 'Runtime' },
        { name: 'NestJS', category: 'Framework' },
        { name: 'Express', category: 'Framework' },
        { name: 'Fastify', category: 'Framework' },
        { name: 'GraphQL', category: 'API' },
        { name: 'gRPC', category: 'API' },
    ],
    ai: [
        { name: 'Langchain', category: 'Framework' },
        { name: 'Vercel AI SDK', category: 'Framework' },
        { name: 'OpenAI', category: 'LLM' },
        { name: 'Claude', category: 'LLM' },
        { name: 'Ollama', category: 'Local LLM' },
    ],
    infrastructure: [
        { name: 'Docker', category: 'Container' },
        { name: 'Kubernetes', category: 'Orchestration' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'GCP', category: 'Cloud' },
        { name: 'Firebase', category: 'Cloud' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Redis', category: 'Cache' },
        { name: 'Kafka', category: 'Messaging' },
    ],
    frontend: [
        { name: 'React', category: 'Framework' },
        { name: 'Vue.js', category: 'Framework' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Ionic', category: 'Mobile' },
    ],
}

export const FEATURED_PROJECTS = [
    {
        title: 'peer-ring',
        description: 'Distributed, Decentralized, Sharding Framework for building Peer-to-Peer Systems, inspired by the designs of Cassandra and Amazon Dynamo.',
        github: 'https://github.com/mahendraHegde/peer-ring',
        tags: ['TypeScript', 'Distributed Systems', 'P2P'],
        stars: 2,
        featured: true,
    },
    {
        title: 'node-idempotency',
        description: 'Makes any request idempotent across Node.js frameworks like NestJS, Express, and Fastify. Ensures exactly-once semantics for your APIs.',
        github: 'https://github.com/mahendraHegde/node-idempotency',
        npm: 'https://www.npmjs.com/package/@node-idempotency/core',
        tags: ['TypeScript', 'Node.js', 'API Design'],
        stars: 11,
        forks: 5,
        featured: true,
    },
    {
        title: 'Dandelion',
        description: 'Cross-platform dating app built with intent-first matching. Founding engineer building React Native mobile app with real-time features.',
        link: 'https://www.dandeliondating.com/',
        tags: ['React', 'Ionic', 'Firebase', 'Startup'],
        featured: true,
    },
]

export const WORK_EXPERIENCE = [
    {
        company: 'Brande.ai',
        role: 'Founding Engineer',
        period: '2024 - Present',
        url: 'https://brande.ai/',
        description: 'Built an AI-powered content platform from ground up that produces brand voice specific content using OpenAI, Claude, and Llama3.',
        achievements: [
            'Architected full-stack platform with Vue.js, Directus, and Langchain',
            'Integrated multiple LLM providers (OpenAI, Claude, Ollama)',
        ],
        tags: ['AI/LLM', 'Startup', 'Founding'],
        highlight: true,
    },
    {
        company: 'Falabella',
        role: 'Lead Engineer',
        period: '2022 - Present',
        location: 'Santiago, Chile',
        url: 'https://www.falabella.com/',
        description: 'Leading engineering for the grocery quick commerce unit, focusing on platform migrations, AI-driven solutions, and infrastructure optimization.',
        achievements: [
            'Built AI-powered recipe designer prototype with Langchain — potential 1% conversion increase and +10% VAS revenue',
            'Led SaaS to internal e-commerce migration — saved $3M USD in platform costs',
            'Reduced MongoDB running costs by 50% — saving $30K/year',
            'Led team of 15 engineers, mentored 5 new joiners',
        ],
        tags: ['Leadership', 'AI/LLM', 'E-commerce'],
    },
    {
        company: 'Falabella',
        role: 'Senior Engineer → Engineer',
        period: '2019 - 2022',
        location: 'Bengaluru, India',
        url: 'https://www.falabella.com/',
        description: 'Contributed to backend systems in grocery quick commerce, supporting subscriptions, notifications, and payments.',
        achievements: [
            'Built promotional abuse detection — reduced customer acquisition cost by 44%',
            'Designed data ingestion layer for e-commerce engine',
            'Built notification and payment gateway integrations',
        ],
        tags: ['Backend', 'Payments', 'Scale'],
    },
    {
        company: 'Verasight',
        role: 'Sr. Fullstack Engineer',
        url: 'https://verasight.io/',
        description: 'Online survey research platform providing verified, demographically representative data for academic institutions, governments, and brands.',
        achievements: [
            'Built survey infrastructure and automated dashboards',
            'Implemented respondent verification systems',
        ],
        tags: ['Research', 'Data', 'B2B'],
    },
    {
        company: 'Dandelion',
        role: 'Founding Engineer',
        url: 'https://www.dandeliondating.com/',
        description: 'Cross-platform dating app with intent-first matching. Built the entire mobile app and backend infrastructure from scratch.',
        achievements: [
            'Architected cross-platform mobile app with React, Ionic & Capacitor',
            'Built real-time features with Firebase',
        ],
        tags: ['Startup', 'Mobile', 'Founding'],
        highlight: true,
    },
    // {
    //     company: 'TCS',
    //     role: 'System Engineer',
    //     period: '2018 - 2019',
    //     location: 'Chennai, India',
    //     description: 'Backend developer for internal e-learning platform. Maintained authentication and registration services.',
    //     tags: ['Backend', 'Enterprise'],
    // },
]

export const OPEN_SOURCE_CONTRIBUTIONS = [
    {
        project: 'Novu',
        description: 'Open-source notification infrastructure for developers',
        url: 'https://github.com/novuhq/novu/pulls?q=author%3AmahendraHegde+',
        type: 'Notification Infrastructure',
    },
    {
        project: 'go-novu',
        description: 'Go SDK for Novu notification platform',
        url: 'https://github.com/novuhq/go-novu/pulls?q=author%3AmahendraHegde+',
        type: 'Go SDK',
    },
    {
        project: 'Directus',
        description: 'Open Data Platform for building real-time APIs',
        url: 'https://github.com/directus/directus/pulls?q=is%3Apr+author%3AmahendraHegde+',
        type: 'Data Platform',
    },
    {
        project: 'Twenty',
        description: 'Open-source CRM alternative to Salesforce',
        url: 'https://github.com/twentyhq/twenty/pulls?q=is%3Apr+author%3AmahendraHegde+',
        type: 'CRM',
    },
    {
        project: 'Shelf.nu',
        description: 'Open-source asset tracking for teams',
        url: 'https://github.com/Shelf-nu/shelf.nu/pulls?q=is%3Apr+author%3AmahendraHegde',
        type: 'Asset Management',
    },
    {
        project: 'fast-jwt',
        description: 'Fast JSON Web Token implementation for Node.js',
        url: 'https://github.com/nearform/fast-jwt/pulls?q=is%3Apr+author%3AmahendraHegde+',
        type: 'Security Library',
    },
    {
        project: 'Nuclear',
        description: 'Desktop music player focused on streaming from free sources',
        url: 'https://github.com/nukeop/nuclear/pulls?q=is%3Apr+author%3AmahendraHegde+',
        type: 'Desktop App',
    },
]

export const READING_LIST = {
    completed: [
        'Designing Data-Intensive Applications',
        'System Design Interview Vol 1 & 2',
        'Amazon Dynamo Paper',
        'Cassandra Paper',
    ],
    current: [
        'Database Internals: A Deep Dive into How Distributed Data Systems Work',
    ],
}

export const NAVIGATION_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Open Source', href: '#opensource' },
]
