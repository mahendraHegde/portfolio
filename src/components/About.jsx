import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaBook, FaLaptopCode } from 'react-icons/fa'
import { PROFILE, READING_LIST } from '../data/profile'
import './About.css'

const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '10+', label: 'Open Source Projects' },
    { value: '50+', label: 'Pull Requests Merged' },
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    ref={ref}
                    className="about__grid"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about__content">
                        <div className="section-header">
                            <div className="section-label">About Me</div>
                            <h2>
                                Crafting <span className="gradient-text">robust systems</span><br />
                                with elegant code
                            </h2>
                        </div>

                        <p className="about__text">
                            I&apos;m a backend-focused fullstack developer with over 6 years of experience
                            building production-grade distributed systems. My expertise lies in creating
                            scalable microservices, event-driven architectures, and developer tools.
                        </p>

                        <p className="about__text">
                            When I&apos;m not architecting backends, you&apos;ll find me contributing to
                            open source projects or exploring papers on distributed systems design.
                            I believe in writing code that&apos;s not just functional, but maintainable
                            and a joy to work with.
                        </p>

                        <div className="about__meta">
                            <div className="about__meta-item">
                                <FaMapMarkerAlt />
                                <span>{PROFILE.location}</span>
                            </div>
                            <div className="about__meta-item">
                                <FaLaptopCode />
                                <span>Open to collaboration</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__aside">
                        {/* Stats */}
                        <motion.div
                            className="about__stats glass-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {stats.map((stat, index) => (
                                <div key={stat.label} className="about__stat">
                                    <motion.div
                                        className="about__stat-value gradient-text"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="about__stat-label mono">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Reading list */}
                        <motion.div
                            className="about__reading glass-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="about__reading-header">
                                <FaBook />
                                <span>Currently Reading</span>
                            </div>
                            <ul className="about__reading-list">
                                {READING_LIST.current.map((book) => (
                                    <li key={book} className="about__reading-item">
                                        {book}
                                    </li>
                                ))}
                            </ul>
                            <div className="about__reading-completed">
                                <span className="mono">Completed:</span>
                                <span className="about__reading-count">{READING_LIST.completed.length} books</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
