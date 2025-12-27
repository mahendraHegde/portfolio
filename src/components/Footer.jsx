import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCalendarAlt, FaNpm, FaHeart } from 'react-icons/fa'
import { SOCIAL_LINKS, PROFILE } from '../data/profile'
import './Footer.css'

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    calendar: FaCalendarAlt,
    npm: FaNpm,
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            <span className="footer__logo-bracket">&lt;</span>
                            <span className="footer__logo-text">MK</span>
                            <span className="footer__logo-bracket">/&gt;</span>
                        </a>
                        <p className="footer__tagline">{PROFILE.tagline}</p>
                    </div>

                    <div className="footer__social">
                        {SOCIAL_LINKS.map((link, index) => {
                            const Icon = iconMap[link.icon]
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Icon />
                                </motion.a>
                            )
                        })}
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        <span className="mono">© {currentYear}</span> {PROFILE.name}
                    </p>
                    <p className="footer__made-with">
                        Made with <FaHeart className="footer__heart" /> and lots of ☕
                    </p>
                </div>
            </div>
        </footer>
    )
}
