"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

export default function Experience() {
    const experiences = [
        {
          role: "Project Manager – Catstone App",
          company: "Bangkit Academy 2023",
          time: "Nov 2023 – Des 2023",
          description:
            "Managed a 7-member team consisting of Machine Learning (3), Mobile Development (2), and Backend (2) divisions to deliver a cat breed identification app. Oversaw project timelines, coordinated cross-functional collaboration, and ensured successful final submission under mentorship from Google, GoTo, and Traveloka.",
        },
        {
          role: "Backend Developer – Catstone App",
          company: "Bangkit Academy 2023",
          time: "Nov 2023 – Des 2023",
          description:
            "Built backend services using Express.js for the Catstone application. Designed RESTful APIs to process classification results and return relevant care information and food recommendations for various cat breeds. Deployed the service on Google Cloud Platform (GCP).",
        },
        {
            role: "Freelance Web Developer",
            company: "Private Client – Architecture Student",
            time: "24 June 2025",
            description:
              "Built a responsive one-page website in just one day using HTML, CSS, and vanilla JavaScript. The site was created for an architecture student’s final project, featuring embedded videos and a curated gallery of high-resolution images. Translated academic materials into a clean, accessible digital layout through close client collaboration.",
          },
          
      ];      

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center"
    >
      <SectionReveal>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-10 text-center">
            Experience
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-purple-400 mb-1">
                {exp.company} • {exp.time}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
