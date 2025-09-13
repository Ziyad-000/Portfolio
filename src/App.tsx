import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DarkModeProvider } from './components/DarkModeProvider';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div id="home">
            <Hero />
          </div>
          
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
        
        <Footer />
        <DarkModeToggle />
      </div>
    </DarkModeProvider>
  );
}