"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  // You can choose one of these titles or mix and match
  const titles = [
    "// Code Adventurer",
    "// Tech Enthusiast",
    "// Digital Craftsman",
    "// Bit Wrangler",
    "// Syntax Sorcerer",
  ];

  // Choose your preferred title here
  const selectedTitle = "GAL";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-transparent dark:from-purple-900 dark:to-transparent" />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Yoav
              <span className="text-purple-600 dark:text-purple-400">
                {" "}
                {selectedTitle}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Turning hot chocolate into code and ideas into reality. Always
              eager to learn and explore new technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                Cool stuff I built
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <Image
                src="/profile-pic.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
