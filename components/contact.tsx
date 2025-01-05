"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Mail } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/galyoav_/",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/yoav0gal",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:yoav0gal@gmail.com",
      label: "Email",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Feel free to reach out through any of these platforms
          </p>

          <div className="flex justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

