"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 overflow-hidden"
    >
      {/* PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl"
          initial={{ y: -100 }}
          animate={{ y: [ -100, 100, -100 ] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-fuchsia-500/20 rounded-full blur-2xl"
          initial={{ y: 100 }}
          animate={{ y: [ 100, -50, 100 ] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-indigo-500/20 rounded-full blur-2xl"
          initial={{ x: -50 }}
          animate={{ x: [ -50, 50, -50 ] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* MAIN CONTENT */}
      <SectionReveal>
        <div className="max-w-5xl w-full mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-500 text-center relative inline-block mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            About Me
            <span className="block h-1 w-16 bg-purple-500 mt-2 mx-auto rounded-full" />
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I’m a passionate fullstack developer who loves turning ideas into beautiful and functional web experiences.
                My stack includes Go, Next.js, Tailwind CSS, and MySQL — and I enjoy building things that are fast, clean, and easy to use.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a fresh graduate from Universitas Singaperbangsa Karawang with a GPA of 3.93. I’m actively seeking opportunities through internships, freelance, or collaboration. I believe in continuous learning, teamwork, and building impactful web-based solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-900/20 border border-purple-700 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Tech Stack & Interests
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Backend Development (Go, Express.js)</li>
                  <li>Frontend with Next.js & Tailwind CSS</li>
                  <li>SQL Databases (MySQL, PostgreSQL)</li>
                  <li>Docker & Cloud Basics (GCP)</li>
                  <li>UI/UX Thinking & Responsive Web Design</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
