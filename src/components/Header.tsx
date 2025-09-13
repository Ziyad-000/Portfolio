import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-lg bg-background/90 shadow-lg border-b border-border dark:bg-background/70'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white">
                <Smartphone className="w-2 h-2 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                Ziyad Sayed
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-blue-200'
              }`}>
                Flutter Developer
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20' 
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden overflow-hidden backdrop-blur-lg bg-background/95 border-t border-border dark:bg-background/80"
      >
        <nav className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20
              }}
              transition={{ duration: 0.3, delay: isMenuOpen ? 0.05 * index : 0 }}
              className="block px-4 py-3 text-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-300 font-medium"
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              x: isMenuOpen ? 0 : -20
            }}
            transition={{ duration: 0.3, delay: isMenuOpen ? 0.3 : 0 }}
            className="pt-4 border-t border-border"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300"
            >
              Hire Me
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
