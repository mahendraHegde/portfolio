import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaNpm } from 'react-icons/fa'
import { FEATURED_PROJECTS } from '../data/profile'
import './Projects.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
}

function ProjectCard({ project }) {
    return (
        <motion.article className="project-card glass-card" variants={cardVariants}>
            <div className="project-card__header">
                <div className="project-card__icon">
                    <FaGithub />
                </div>
                <div className="project-card__links">
                    {project.npm && (
                        <a
                            href={project.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            aria-label="View on NPM"
                        >
                            <FaNpm />
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label="View on GitHub"
                    >
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </div>

            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>

            <div className="project-card__tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="project-card__meta">
                {project.stars && (
                    <span className="project-card__stat">
                        <FaStar />
                        {project.stars}
                    </span>
                )}
                {project.forks && (
                    <span className="project-card__stat">
                        <FaCodeBranch />
                        {project.forks}
                    </span>
                )}
            </div>

            {project.featured && <div className="project-card__badge">Featured</div>}
        </motion.article>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <div className="section-label">Projects</div>
                        <h2>
                            Things I&apos;ve <span className="gradient-text">built</span>
                        </h2>
                        <p className="projects__subtitle">
                            Open source libraries and tools for the developer community
                        </p>
                    </div>

                    <motion.div
                        className="projects__grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {FEATURED_PROJECTS.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </motion.div>

                    <div className="projects__cta">
                        <a
                            href="https://github.com/mahendraHegde?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaGithub />
                            View All Repositories
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
