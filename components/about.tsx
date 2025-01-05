"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Brain } from 'lucide-react'
import { ChevronRight, Sparkles, Binary, Cpu } from 'lucide-react'

export function About() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            I love building things that make a difference. Whether it's crafting elegant code 
            or solving complex problems, I'm all about making technology work while having fun 
            along the way.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Sparkles,
                title: "AI & ML",
                description: "Exploring the frontiers of artificial intelligence and machine learning",
              },
              {
                icon: Binary,
                title: "Software Architecture",
                description: "Building scalable and maintainable systems",
              },
              {
                icon: Cpu,
                title: "Emerging Tech",
                description: "Experimenting with cutting-edge technologies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-purple-50 dark:bg-purple-800"
              >
                <item.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Areas of Interest",
                items: ["AI & Machine Learning", "Blockchain & Crypto", "Robotics", "Biotech", "Cloud Computing"]
              },
              {
                title: "Current Focus",
                items: ["Full-stack Development", "System Design", "Open Source", "Tech Communities"]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-purple-50 dark:bg-purple-800"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

