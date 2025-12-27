import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navigation />
            <main>
                <Hero />
                <About />
                <Experience />
                <TechStack />
                <Projects />
                <OpenSource />
            </main>
            <Footer />
        </motion.div>
    )
}

export default App
