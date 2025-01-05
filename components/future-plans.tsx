"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Rocket, Stethoscope } from 'lucide-react'

export function FuturePlans() {
  const plans = [
    {
      icon: GraduationCap,
      title: "Complete B.Sc. in Computer Science",
      description: "Currently pursuing my degree with a focus on advanced computing concepts",
      timeline: "2025"
    },
    {
      icon: Briefcase,
      title: "Find a Cool Part-time Job",
      description: "Looking for opportunities to work on exciting projects while studying",
      timeline: "Actively Searching"
    },
    {
      icon: Rocket,
      title: "Launch AudieLens Beta",
      description: "Working on releasing the beta version of AudieLens to early users",
      timeline: "Coming Soon"
    },
    {
      icon: Stethoscope,
      title: "Fix My Broken Elbow",
      description: "Focusing on recovery and rehabilitation to get back to full strength",
      timeline: "In Progress"
    }
  ]

  return (
    <section className="py-20 bg-purple-50 dark:bg-purple-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Next on My Plate
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 p-6 bg-white dark:bg-purple-800 rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <plan.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {plan.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-purple-200 rounded-full text-sm">
                    {plan.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

