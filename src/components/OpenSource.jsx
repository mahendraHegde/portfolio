import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaCodeBranch } from 'react-icons/fa'
import { OPEN_SOURCE_CONTRIBUTIONS } from '../data/profile'
import './OpenSource.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
    },
}

export default function OpenSource() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="opensource" className="section opensource">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <div className="section-label">Open Source</div>
                        <h2>
                            Contributing to the <span className="gradient-text">community</span>
                        </h2>
                        <p className="opensource__subtitle">
                            Pull requests merged in notable open source projects
                        </p>
                    </div>

                    <motion.div
                        className="opensource__grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {OPEN_SOURCE_CONTRIBUTIONS.map((contribution, index) => (
                            <motion.a
                                key={contribution.project}
                                href={contribution.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opensource__card"
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                            >
                                <div className="opensource__card-number mono">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="opensource__card-content">
                                    <div className="opensource__card-header">
                                        <h3 className="opensource__card-title">{contribution.project}</h3>
                                        <span className="opensource__card-type">{contribution.type}</span>
                                    </div>
                                    <p className="opensource__card-description">{contribution.description}</p>
                                </div>
                                <div className="opensource__card-icon">
                                    <FaExternalLinkAlt />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <div className="opensource__decoration">
                        <FaCodeBranch className="opensource__decoration-icon" />
                        <span className="mono">git merge contributions</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
