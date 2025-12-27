import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa'
import { WORK_EXPERIENCE } from '../data/profile'
import './Experience.css'

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

function ExperienceCard({ experience }) {
    return (
        <motion.article
            className={`experience-card glass-card ${experience.highlight ? 'experience-card--highlight' : ''}`}
            variants={cardVariants}
        >
            <div className="experience-card__header">
                <div className="experience-card__company-info">
                    <h3 className="experience-card__company">{experience.company}</h3>
                    <span className="experience-card__role mono">{experience.role}</span>
                    {experience.period && (
                        <span className="experience-card__period">{experience.period}</span>
                    )}
                    {experience.location && (
                        <span className="experience-card__location">{experience.location}</span>
                    )}
                </div>
                {experience.url && (
                    <a
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-card__link"
                        aria-label={`Visit ${experience.company}`}
                    >
                        <FaExternalLinkAlt />
                    </a>
                )}
            </div>

            <p className="experience-card__description">{experience.description}</p>

            {experience.achievements && experience.achievements.length > 0 && (
                <ul className="experience-card__achievements">
                    {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="experience-card__achievement">
                            {achievement}
                        </li>
                    ))}
                </ul>
            )}

            <div className="experience-card__tags">
                {experience.tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            {experience.highlight && (
                <div className="experience-card__badge">Founding</div>
            )}
        </motion.article>
    )
}

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <div className="section-label">Experience</div>
                        <h2>
                            Where I&apos;ve <span className="gradient-text">made impact</span>
                        </h2>
                        <p className="experience__subtitle">
                            Production systems serving millions of users
                        </p>
                    </div>

                    <motion.div
                        className="experience__grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {WORK_EXPERIENCE.map((exp, idx) => (
                            <ExperienceCard key={`${exp.company}-${idx}`} experience={exp} />
                        ))}
                    </motion.div>

                    <div className="experience__decoration">
                        <FaBriefcase className="experience__decoration-icon" />
                        <span className="mono">building at scale</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
