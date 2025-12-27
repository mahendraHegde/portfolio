import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCalendarAlt, FaNpm, FaArrowDown } from 'react-icons/fa'

import { PROFILE, SOCIAL_LINKS } from '../data/profile'
import './Hero.css'

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    calendar: FaCalendarAlt,
    npm: FaNpm,
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export default function Hero() {
    return (
        <section className="hero">
            {/* Animated background elements */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
            </div>

            <div className="container hero__container">
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero__greeting">
                        <span className="hero__greeting-line" />
                        <span className="mono">Hello, I&apos;m</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="hero__name">
                        <span className="gradient-text">{PROFILE.name}</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="hero__title">
                        <span className="hero__title-prefix mono">&gt;_</span>
                        <span className="hero__title-text">{PROFILE.tagline}</span>
                        <span className="hero__cursor" />
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero__description">
                        {PROFILE.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero__cta">
                        <a href="#projects" className="btn btn-primary">
                            Explore Work
                        </a>
                        <a href="#opensource" className="btn btn-secondary">
                            Open Source
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero__social">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = iconMap[link.icon]
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero__social-link"
                                    aria-label={link.name}
                                >
                                    <Icon />
                                    <span>{link.name}</span>
                                </a>
                            )
                        })}
                    </motion.div>
                </motion.div>

                {/* Terminal decoration */}
                <motion.div
                    className="hero__terminal"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="hero__terminal-header">
                        <div className="hero__terminal-dots">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="hero__terminal-title">~/profile</span>
                    </div>
                    <div className="hero__terminal-body">
                        <div className="hero__terminal-line">
                            <span className="hero__terminal-prompt">$</span>
                            <span className="hero__terminal-cmd">whoami</span>
                        </div>
                        <div className="hero__terminal-output">backend-engineer</div>
                        <div className="hero__terminal-line">
                            <span className="hero__terminal-prompt">$</span>
                            <span className="hero__terminal-cmd">cat skills.json</span>
                        </div>
                        <div className="hero__terminal-output hero__terminal-output--json">
                            {`{
  "languages": ["TypeScript", "Go"],
  "focus": "distributed-systems",
  "passion": "open-source"
}`}
                        </div>
                        <div className="hero__terminal-line">
                            <span className="hero__terminal-prompt">$</span>
                            <span className="hero__terminal-cursor">_</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <FaArrowDown className="hero__scroll-icon" />
                <span className="mono">scroll</span>
            </motion.a>
        </section>
    )
}
