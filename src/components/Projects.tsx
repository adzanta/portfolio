import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Fullstack",
    description:
      "Proyek toko online yang dibangun dengan Go (Echo) sebagai backend, Next.js di frontend, serta MySQL yang dijalankan melalui Docker. Fitur mencakup autentikasi JWT, dan struktur clean-code yang siap dikembangkan.",
    link: "https://github.com/adzanta/ecommerce-go-next",
    tech: ["Go", "Next.js", "Docker", "MySQL"],
  },
  {
    title: "Custom Jersey Order (VIBE Apparel)",
    description:
      "Website pre-order jersey custom untuk Toko VIBE Apparel. Menggunakan Go sebagai backend dan HTML/CSS/JS untuk frontend. Mendukung fitur desain custom, dashboard admin, dan pelacakan status pesanan.",
    link: "https://github.com/adzanta/VIBE-Apparel",
    tech: ["Go", "HTML/CSS/JS", "MySQL (XAMPP)"],
  },
  {
    title: "Remarchi (Landing Page)",
    description:
      "Landing page sederhana untuk skripsi mahasiswa arsitektur. Dibuat dengan HTML, CSS, dan JS dalam waktu 1 hari. Sudah live di GitHub Pages.",
    link: "https://github.com/adzanta/Remarchi",
    demo: "https://adzanta.github.io/Remarchi/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <SectionReveal>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-purple-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-1 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 text-sm hover:underline hover:text-purple-300 transition"
                  >
                    <FaGithub /> View on GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 text-sm hover:underline hover:text-purple-300 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
