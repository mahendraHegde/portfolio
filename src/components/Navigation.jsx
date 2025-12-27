import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCalendarAlt, FaNpm } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../data/profile'
import './Navigation.css'

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    calendar: FaCalendarAlt,
    npm: FaNpm,
}

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.header
                className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="nav__container">
                    <a href="#" className="nav__logo">
                        <span className="nav__logo-bracket">&lt;</span>
                        <span className="nav__logo-text">MK</span>
                        <span className="nav__logo-bracket">/&gt;</span>
                    </a>

                    <nav className="nav__menu">
                        {NAVIGATION_ITEMS.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className="nav__link"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <span className="nav__link-number">0{index + 1}.</span>
                                {item.label}
                            </motion.a>
                        ))}
                    </nav>

                    <div className="nav__social">
                        {SOCIAL_LINKS.slice(0, 3).map((link) => {
                            const Icon = iconMap[link.icon]
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-btn"
                                    aria-label={link.name}
                                >
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>

                    <button
                        className="nav__mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <nav className="mobile-menu__nav">
                            {NAVIGATION_ITEMS.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className="mobile-menu__link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <span className="mobile-menu__link-number">0{index + 1}.</span>
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mobile-menu__social">
                            {SOCIAL_LINKS.map((link) => {
                                const Icon = iconMap[link.icon]
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-btn"
                                        aria-label={link.name}
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
