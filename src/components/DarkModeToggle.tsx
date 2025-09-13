import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from './DarkModeProvider';

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15 
        }}
        className="relative"
      >
        {isDark ? (
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-6 h-6" />
          </motion.div>
        )}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none"
      >
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
      </motion.div>
    </motion.button>
  );
}