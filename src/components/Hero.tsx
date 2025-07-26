"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen pt-28 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black"
    >
      {/* PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-3xl"
          initial={{ y: -100 }}
          animate={{ y: [-100, 100, -100] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-[250px] h-[250px] bg-purple-500/20 rounded-full blur-2xl"
          initial={{ x: 0 }}
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* FOTO */}
      <img
        src="/assets/hero.jpeg"
        alt="Alhafidz"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-black mb-6 z-10"
      />

      {/* TEXT */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Alhafidz.
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-2xl mt-4 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build fast, responsive, and visually appealing websites using modern technologies.
        </motion.p>
      </div>

      {/* SCROLL DOWN BUTTON */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-6 h-6 opacity-70" />
      </motion.button>
    </section>
  );
}
