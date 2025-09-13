import { motion } from "motion/react";
import {
  Code,
  Smartphone,
  Layers,
  Award,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Layers,
      label: "Practice Projects",
      value: "8+",
    },
    { icon: Smartphone, label: "Apps Built", value: "3+" },
    { icon: Code, label: "Problems Solved", value: "200+" },
    { icon: Award, label: "Months Learning", value: "6+" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="backdrop-blur-sm bg-card/70 rounded-2xl p-8 shadow-xl border border-border/20">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a passionate Computer Science student and
                  aspiring Flutter developer with a growing
                  expertise in mobile application development.
                  My journey started with a love for clean code
                  and intuitive user experiences, and has
                  evolved into a focus on building practical and
                  innovative applications that solve real-world
                  problems. I specialize in creating
                  cross-platform applications that balance
                  performance, usability, and design.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From concept to prototype, I explore the
                  latest Flutter features and design practices
                  to craft solutions that are both functional
                  and visually appealing. I enjoy learning
                  advanced data structures and algorithms,
                  exploring UI/UX design trends, and constantly
                  improving my coding skills through hands-on
                  projects.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, I dedicate time to
                  mentoring and guiding fellow students as part
                  of the Helpers initiative, helping them
                  navigate their programming journey and grow
                  alongside me. This combination of learning,
                  creating, and mentoring reflects my passion
                  for continuous growth in both development and
                  design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-sm bg-gradient-to-br from-card/80 to-blue-50/50 dark:to-blue-950/50 rounded-xl p-6 shadow-lg border border-border/30 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl md:text-3xl text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/80 dark:to-purple-950/80 rounded-2xl p-8 shadow-lg border border-border/30">
              <h3 className="text-xl md:text-2xl text-foreground mb-4">
                Core Technologies & Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Flutter",
                  "Dart",
                  "Firebase",
                  "Widgets",
                  "State Management",
                  "Material Design",
                  "Basic UI/UX",
                  "Android Studio",
                  "Git & GitHub",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * index,
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm hover:shadow-lg transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}