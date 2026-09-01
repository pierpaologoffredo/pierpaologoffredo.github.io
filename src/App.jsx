import { useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import Navbar    from "./components/Navbar"
import Hero      from "./components/Hero"
import About     from "./components/About"
import Experience from "./components/Experience"
import Education  from "./components/Education"
import Skills     from "./components/Skills"
import Publications from "./components/Publications"
import Contact    from "./components/Contact"
import Footer     from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"
import CustomCursor from "./components/CustomCursor"

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
  }

  return (
    <div data-theme={theme}>
      <CustomCursor />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[9997]"
        style={{ scaleX }}
      />

      <AnimatedBackground />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
    <main>
        <section id="hero" className="relative z-10">
          <Hero />
        </section>

        {/* Attiviamo le sezioni man mano: */}
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="publications"><Publications /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}

export default App