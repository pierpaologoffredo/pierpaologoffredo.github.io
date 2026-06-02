import { useState } from "react"

import Navbar    from "./components/Navbar"
import Hero      from "./components/Hero"
import About     from "./components/About"
import Experience from "./components/Experience"
import Education  from "./components/Education"
import Skills     from "./components/Skills"
import Publications from "./components/Publications"
import Contact    from "./components/Contact"
import Footer     from "./components/Footer"
function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
  }

  return (
    <div data-theme={theme}>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
    <main>
        <section id="hero">
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