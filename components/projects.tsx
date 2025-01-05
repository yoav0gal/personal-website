"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "AI Social Media Analyzer",
      description:
        "Platform providing actionable insights for comments sections using AI",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "WIP",
    },
    {
      title: "Trailing Up Grid Trading Bot",
      description:
        "An automated trading bot implementing a grid strategy with trailing up functionality for dynamic market adaptation.",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2024",
    },
    {
      title: "Binary Image Classification on Sign Language Digits",
      description:
        "A machine learning project for classifying sign language digits, distinguishing between classes 0 and 5 using binary classification.",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2024",
    },
    {
      title: "Node.js Utility for Updating AndroidManifest.xml",
      description:
        "A Node.js tool designed to automate updates to the AndroidManifest.xml file in Capacitor projects, streamlining the development process.",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2024",
    },
    {
      title: "SQLite & SAP-HANA Integrations Plugin for Fastify",
      description:
        "2 Fastify plugins enabling seamless integrations with SQLite and SAP-HANA databases, enhancing scalability and performance.",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2023",
    },
    {
      title: "Strategy Game",
      description:
        "Online strategy game with computer opponent using graph algorithms",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2021",
    },
    {
      title: "Assembly Battle Royale",
      description: "Self-repairing code solution based on opcodes",
      gif: "/placeholder.svg?height=400&width=600",
      link: "#",
      date: "2021",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-purple-50 dark:bg-purple-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Cool Stuff I Built
          <br />
          <span className=" bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold ">
            Coming Soon
          </span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={prev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={next}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="overflow-hidden relative rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <a href={projects[currentIndex].link} className="block">
                  <img
                    src={projects[currentIndex].gif}
                    alt={projects[currentIndex].title}
                    className="w-full aspect-video object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold">
                        {projects[currentIndex].title}
                      </h3>

                      <span className="text-sm bg-purple-600/80 px-3 py-1 rounded-full">
                        {projects[currentIndex].date}
                      </span>
                    </div>
                    <p className="text-gray-200">
                      {projects[currentIndex].description}
                    </p>
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-purple-600"
                    : "bg-purple-200 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
