"use client";

import { motion, Variants } from "framer-motion";
import {
  SiGo,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiDocker,
  SiJsonwebtokens,
  SiGithub,
  SiFigma,
  SiWeb3Dotjs,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Go (Echo)", icon: <SiGo className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "REST API", icon: <SiPostman className="text-orange-400" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-green-400" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Web3 (basic)", icon: <SiWeb3Dotjs className="text-indigo-400" /> },
];

// ✅ Diberi tipe Variants agar tidak merah di TypeScript
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-purple-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-800/60 backdrop-blur-md border border-purple-700 py-5 px-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="text-sm md:text-base font-medium">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
