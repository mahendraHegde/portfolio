import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    SiTypescript, SiGo, SiJavascript, SiPython, SiNodedotjs, SiNestjs, SiExpress,
    SiFastify, SiGraphql, SiDocker, SiKubernetes, SiAmazonwebservices,
    SiGooglecloud, SiFirebase, SiPostgresql, SiMongodb, SiRedis, SiApachekafka,
    SiReact, SiVuedotjs, SiNextdotjs, SiLangchain, SiOpenai
} from 'react-icons/si'
import { TECH_STACK } from '../data/profile'
import './TechStack.css'

const iconMap = {
    TypeScript: SiTypescript,
    Go: SiGo,
    JavaScript: SiJavascript,
    Python: SiPython,
    SQL: null,
    'Node.js': SiNodedotjs,
    NestJS: SiNestjs,
    Express: SiExpress,
    Fastify: SiFastify,
    GraphQL: SiGraphql,
    gRPC: null,
    Langchain: SiLangchain,
    'Vercel AI SDK': null,
    OpenAI: SiOpenai,
    Claude: null,
    Ollama: null,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    AWS: SiAmazonwebservices,
    GCP: SiGooglecloud,
    Firebase: SiFirebase,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Redis: SiRedis,
    Kafka: SiApachekafka,
    React: SiReact,
    'Vue.js': SiVuedotjs,
    'Next.js': SiNextdotjs,
    Ionic: null,
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
    },
}

function TechPill({ name, showIcon = true }) {
    const Icon = iconMap[name]

    return (
        <motion.div className="tech-pill" variants={itemVariants} whileHover={{ scale: 1.05 }}>
            {showIcon && Icon && <Icon className="tech-pill__icon" />}
            <span className="tech-pill__name">{name}</span>
        </motion.div>
    )
}

function LanguageBar({ name, proficiency }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const Icon = iconMap[name]

    return (
        <div className="language-bar" ref={ref}>
            <div className="language-bar__header">
                <div className="language-bar__name">
                    {Icon && <Icon />}
                    <span>{name}</span>
                </div>
                <span className="language-bar__value mono">{proficiency}%</span>
            </div>
            <div className="language-bar__track">
                <motion.div
                    className="language-bar__fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${proficiency}%` } : {}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                />
            </div>
        </div>
    )
}

export default function TechStack() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="stack" className="section stack">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <div className="section-label">Tech Stack</div>
                        <h2>
                            Tools I use to <span className="gradient-text">build with</span>
                        </h2>
                    </div>

                    <div className="stack__grid">
                        {/* Languages */}
                        <div className="stack__category stack__category--languages">
                            <h3 className="stack__category-title">
                                <span className="stack__category-icon">{'{ }'}</span>
                                Languages
                            </h3>
                            <div className="stack__languages">
                                {TECH_STACK.languages.map((lang) => (
                                    <LanguageBar key={lang.name} {...lang} />
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="stack__category">
                            <h3 className="stack__category-title">
                                <span className="stack__category-icon">&gt;_</span>
                                Backend
                            </h3>
                            <motion.div
                                className="stack__pills"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {TECH_STACK.backend.map((tech) => (
                                    <TechPill key={tech.name} name={tech.name} />
                                ))}
                            </motion.div>
                        </div>

                        {/* AI/LLM */}
                        <div className="stack__category">
                            <h3 className="stack__category-title">
                                <span className="stack__category-icon">🤖</span>
                                AI / LLM
                            </h3>
                            <motion.div
                                className="stack__pills"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {TECH_STACK.ai.map((tech) => (
                                    <TechPill key={tech.name} name={tech.name} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Infrastructure */}
                        <div className="stack__category">
                            <h3 className="stack__category-title">
                                <span className="stack__category-icon">☁️</span>
                                Infrastructure
                            </h3>
                            <motion.div
                                className="stack__pills"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {TECH_STACK.infrastructure.map((tech) => (
                                    <TechPill key={tech.name} name={tech.name} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Frontend */}
                        <div className="stack__category">
                            <h3 className="stack__category-title">
                                <span className="stack__category-icon">🎨</span>
                                Frontend
                            </h3>
                            <motion.div
                                className="stack__pills"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {TECH_STACK.frontend.map((tech) => (
                                    <TechPill key={tech.name} name={tech.name} />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
