// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-purple-300 font-bold tracking-widest text-lg">
          H W A C A
        </div>

        <div className="flex items-center gap-8 text-white text-sm font-medium">
          <a
            href="#home"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:ring-1 hover:ring-purple-400/40 transition duration-300"
            title="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white group-hover:scale-110 group-hover:text-purple-300 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 9.857V20a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V9.857a1 1 0 0 0-.418-.82l-8-5.6a1 1 0 0 0-1.164 0l-8 5.6a1 1 0 0 0-.418.82z" />
            </svg>

            <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.6)] transition-all duration-300"></span>
          </a>

          <a
            href="#about"
            className="hover:text-purple-300 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-300 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-purple-300 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-300 hover:after:w-full after:transition-all after:duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-purple-300 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-300 hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-purple-300 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-300 hover:after:w-full after:transition-all after:duration-300"
          >
            Skills
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
