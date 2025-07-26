import Head from "next/head";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flexfolio</title>
        <meta name="description" content="Portofolio fleksibel dan keren" />
      </Head>
      
      {/* Navbar Section */}
      <Navbar />

      <SmoothScroll />
  
      {/* Hero Section */}
      <Hero />
  
      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </>
  );  
}
