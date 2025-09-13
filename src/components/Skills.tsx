import { motion } from 'motion/react';
import { Smartphone, Database, Code2, Palette, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 90, icon: '🎯' },
        { name: 'Dart', level: 85, icon: '💡' },
        { name: 'Material Design', level: 80, icon: '🎨' },
      ]
    },
    {
      title: 'State Management & API Integration',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'State Management', level: 80, icon: '⚡' },
        { name: 'Local Storage', level: 75, icon: '💾' },
        { name: 'API Integration', level: 80, icon: '🌐' },
      ]
    },

    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Wireframing', level: 85, icon: '✏️' },
        { name: 'Prototyping', level: 80, icon: '📐' },
        { name: 'Figma (Auto Layout & Variants)', level: 90, icon: '🎨' },
      ]
    },
    {
      title: 'Tools & Collaboration',
      icon: GitBranch,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '📂' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Android Studio', level: 80, icon: '📱' },
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-blue-50 dark:to-blue-950/30 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              My Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A growing toolkit combining mobile development, UI/UX design, and teamwork experience to craft impactful digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-sm bg-card/80 rounded-2xl p-8 shadow-xl border border-border/20 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/80 dark:to-purple-950/80 rounded-2xl p-8 shadow-lg border border-border/30">
              <h3 className="text-xl md:text-2xl text-foreground mb-6">
                Certifications & Learning Journey
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Flutter & Dart (Learning with DEPI)', icon: '📱' },
                  { name: 'UI/UX Case Studies & Design Thinking', icon: '🎨' },
                  { name: 'Firebase Basics', icon: '🔥' },
                  { name: 'Android Studio Setup', icon: '⚙️' },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card/50 rounded-xl border border-border/30 hover:bg-card/70 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{cert.icon}</div>
                    <p className="text-sm text-foreground">{cert.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
