import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Heart,
  Code,
  Smartphone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ziyad-000",
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ziyad-sayed",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      color: "hover:text-sky-500",
    },
    {
      name: "Email",
      href: "mailto:ziyad.sayed.cs@gmail.com",
      icon: Mail,
      color: "hover:text-purple-600",
    },
  ];

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Flutter App Development", href: "#" },
    { name: "Mobile App Design", href: "#" },
    { name: "Cross-platform Development", href: "#" },
    { name: "Technical Consultation", href: "#" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-slate-900">
                    <Smartphone className="w-2.5 h-2.5 text-white absolute top-0.5 left-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Ziyad Sayed
                  </h3>
                  <p className="text-blue-200">
                    Flutter Developer & Mobile App Architect
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Crafting beautiful, performant mobile
                experiences with Flutter. Passionate about clean
                code, innovative UI/UX, and turning ideas into
                reality.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * index,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 text-gray-300 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * index,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-300 hover:text-blue-200 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * index,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-purple-200 transition-colors duration-300 flex items-center group text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <p className="text-gray-300 mb-6">
                Get the latest Flutter tips, mobile development
                insights, and project updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ziyad Sayed. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>and Ziyad Sayed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}